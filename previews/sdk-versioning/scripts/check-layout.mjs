import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { parse } from "yaml";

const project = fileURLToPath(new URL("../", import.meta.url));
export const schemaURL = "https://api.gitbook.com/gitbook-docs.yaml";
const read = (file) => fs.readFileSync(file, "utf8");
const prose = (markdown) => markdown.replace(/```[\s\S]*?```/g, "");
const links = (markdown) =>
  [...prose(markdown).matchAll(/\[[^\]]+\]\(([^\s)]+)\)/g)].map((match) => match[1]);

function inside(root, target) {
  const relative = path.relative(root, target);
  assert(
    relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative),
    `Path escapes content root: ${target}`,
  );
  return target;
}

function checkSpace(root) {
  const config = parse(read(path.join(root, ".gitbook.yaml")));
  assert.deepEqual(config, {
    root: "./",
    structure: { readme: "README.md", summary: "SUMMARY.md" },
  });
  const pages = fs
    .readdirSync(root)
    .filter((file) => file.endsWith(".md") && file !== "SUMMARY.md")
    .sort();
  const navigation = links(read(path.join(root, "SUMMARY.md")));
  assert.equal(navigation[0], "README.md", "The first page must be the overview");
  assert.deepEqual(
    [...navigation].sort(),
    pages,
    "Each fixture page must appear exactly once in SUMMARY.md",
  );

  for (const name of [...pages, "SUMMARY.md"]) {
    for (const href of links(read(path.join(root, name)))) {
      // These fixtures use local links only; each space must be self-contained.
      assert(
        !/^[a-z][a-z\d+.-]*:/i.test(href) && !href.startsWith("/"),
        `Non-local fixture link: ${href}`,
      );
      const [file, fragment] = href.split("#");
      const target = inside(root, path.resolve(root, decodeURIComponent(file || name)));
      assert(fs.existsSync(target), `Missing linked page: ${href}`);
      if (fragment) {
        // Fixture headings are plain text; this is not a general GitBook slug generator.
        const headings = [...prose(read(target)).matchAll(/^#{1,6} (.+)$/gm)].map((match) =>
          match[1]
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, "")
            .replace(/ /g, "-"),
        );
        assert(headings.includes(decodeURIComponent(fragment)), `Missing linked anchor: ${href}`);
      }
    }
  }
  return pages;
}

export function checkLayout(root = project) {
  const config = parse(read(path.join(root, "gitbook-docs.yaml")));
  assert.equal(config.$schema, schemaURL);
  const sections = config.site.structure;
  assert.equal(sections.length, 2, "Only SDKs are versioned; shared docs form one section");
  const [sdk, shared] = sections;
  assert.equal(sdk.type, "section");
  assert.equal(shared.type, "section");
  assert.equal(sdk.default, true);
  assert.notEqual(shared.default, true);
  assert.deepEqual(
    sdk.children.map((space) => space.content.directory),
    ["./v2", "./v1"],
  );
  assert.deepEqual(
    shared.children.map((space) => space.content.directory),
    ["./shared"],
    "Shared docs must not acquire SDK variants",
  );
  const nodes = [...sections, ...sections.flatMap((section) => section.children)];
  assert.equal(
    new Set(nodes.map((node) => node.key)).size,
    nodes.length,
    "Duplicate GitBook identity key",
  );
  assert(
    nodes.every((node) => node.key.startsWith("sdk-preview-")),
    "These keys must remain visibly fixture-only",
  );
  for (const section of sections) {
    assert.equal(
      section.children.filter((space) => space.default).length,
      1,
      "Each section needs exactly one default",
    );
    assert(section.children.every((space) => space.type === "space"));
  }
  assert.equal(
    sdk.children[0].default,
    true,
    "v2 is the fixture default, not a live-site default change",
  );

  const pages = {};
  for (const name of ["v1", "v2", "shared"]) pages[name] = checkSpace(path.join(root, name));
  assert.deepEqual(pages.v1, ["README.md", "reference.md"]);
  assert.deepEqual(pages.v2, ["README.md", "reference.md", "suspense.md"]);
  assert.deepEqual(pages.shared, ["README.md"]);
  const sharedMarkdown = read(path.join(root, "shared/README.md"));
  assert(
    !sharedMarkdown.includes(".isEnabled") && !sharedMarkdown.includes("{% tabs"),
    "Shared examples must remain v2-only",
  );
  return config;
}

export async function checkSchema(config) {
  const response = await fetch(schemaURL, { signal: AbortSignal.timeout(30_000) });
  assert(response.ok, `GitBook schema returned HTTP ${response.status}`);
  const schema = parse(await response.text());
  const ajv = new Ajv2020({ allErrors: true });
  addFormats(ajv);
  // GitBook's schema annotates its custom icon format and examples. No icons are used here.
  ajv.addFormat("icon", true);
  ajv.addKeyword("example");
  const validate = ajv.compile(schema);
  assert(validate(config), ajv.errorsText(validate.errors, { separator: "\n" }));
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const config = checkLayout();
  await checkSchema(config);
  console.log("GitBook schema, SDK-only variants, content roots, navigation and anchors passed.");
}
