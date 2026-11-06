import assert from "node:assert/strict";
import { createHash } from "node:crypto";
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
const slug = (heading) =>
  heading
    .toLowerCase()
    .replace(/<\/?(?:a|code|strong|em|span|br)(?:\s[^>]*)?>/gi, "")
    .replace(/[^\p{L}\p{N}_ -]/gu, "")
    .replace(/ /g, "-");

function inside(root, target) {
  const relative = path.relative(root, target);
  assert(
    relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative),
    `Path escapes content root: ${target}`,
  );
  return target;
}
function markdownFiles(root) {
  return fs.readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory())
      return markdownFiles(path.join(root, entry.name)).map((file) => `${entry.name}/${file}`);
    return entry.name.endsWith(".md") ? [entry.name] : [];
  });
}
function checkSpace(root, major) {
  assert.deepEqual(parse(read(path.join(root, ".gitbook.yaml"))), {
    root: "./",
    structure: { readme: "README.md", summary: "SUMMARY.md" },
  });
  const pages = markdownFiles(root)
    .filter((file) => file !== "SUMMARY.md")
    .sort();
  const navigation = links(read(path.join(root, "SUMMARY.md")));
  assert.equal(navigation[0], "README.md", "The first page must be the overview");
  assert.deepEqual(
    [...navigation].sort(),
    pages,
    "Each page must appear exactly once in SUMMARY.md",
  );
  const headings = new Map();
  for (const name of [...pages, "SUMMARY.md"]) {
    for (const href of links(read(path.join(root, name)))) {
      if (/^[a-z][a-z\d+.-]*:/i.test(href)) continue;
      assert(!href.startsWith("/"), `Absolute content link: ${href}`);
      const [file, fragment] = href.split("#");
      const target = inside(
        root,
        path.resolve(root, path.dirname(name), decodeURIComponent(file || path.basename(name))),
      );
      assert(fs.existsSync(target), `Missing linked page: ${name} -> ${href}`);
      if (fragment && target.endsWith(".md")) {
        if (!headings.has(target)) {
          const ids = new Set();
          for (const match of prose(read(target)).matchAll(/^#{1,6} (.+)$/gm)) {
            const base = slug(match[1]);
            let id = base;
            for (let suffix = 1; ids.has(id); suffix++) id = `${base}-${suffix}`;
            ids.add(id);
          }
          headings.set(target, ids);
        }
        assert(
          headings.get(target).has(decodeURIComponent(fragment)),
          `Missing linked anchor: ${name} -> ${href}`,
        );
      }
    }
  }
  if (major) {
    const manifest = JSON.parse(read(path.join(root, "generated-manifest.json")));
    assert.equal(manifest.sdkMajor, Number(major));
    assert.deepEqual(Object.keys(manifest.packages).sort(), [
      "@reflag/browser-sdk",
      "@reflag/node-sdk",
      "@reflag/react-sdk",
      "@reflag/vue-sdk",
    ]);
    assert(
      Object.values(manifest.packages).every((version) => version.startsWith(`${major}.`)),
      "Wrong SDK source major",
    );
    for (const [file, hash] of Object.entries(manifest.files)) {
      assert.equal(
        createHash("sha256")
          .update(fs.readFileSync(inside(root, path.resolve(root, file))))
          .digest("hex"),
        hash,
        `Generated file drift: ${file}`,
      );
    }
    assert.equal(pages.length, 10, "Overview plus nine generated SDK pages");
  }
  return pages;
}

export function checkLayout(root = project) {
  assert.deepEqual(parse(read(path.join(root, ".gitbook.yaml"))), {
    root: "./v2/",
    structure: { readme: "README.md", summary: "SUMMARY.md" },
  });
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
    "Preserve the existing preview identities",
  );
  for (const section of sections) {
    assert.equal(
      section.children.filter((space) => space.default).length,
      1,
      "Each section needs exactly one default",
    );
    assert(section.children.every((space) => space.type === "space"));
  }
  assert.equal(sdk.children[0].default, true);
  const v1 = checkSpace(path.join(root, "v1"), 1);
  const v2 = checkSpace(path.join(root, "v2"), 2);
  assert.deepEqual(v1, v2, "Equivalent SDK page paths must align across versions");
  checkSpace(path.join(root, "shared"));
  assert(
    !read(path.join(root, "shared/README.md")).includes(".isEnabled"),
    "Shared examples must remain v2-only",
  );
  const repository = path.resolve(root, "../..");
  const top = parse(read(path.join(repository, "gitbook-docs.yaml")));
  const expected = structuredClone(config);
  for (const section of expected.site.structure)
    for (const space of section.children)
      space.content.directory = `./previews/sdk-versioning/${space.content.directory.slice(2)}`;
  assert.deepEqual(
    top,
    expected,
    "Root and nested variant mappings must have the same identities/content",
  );
  assert.deepEqual(parse(read(path.join(repository, ".gitbook.yaml"))), {
    root: "./previews/sdk-versioning/v2/",
    structure: { readme: "README.md", summary: "SUMMARY.md" },
  });
  return config;
}

export async function checkSchema(config) {
  const response = await fetch(schemaURL, { signal: AbortSignal.timeout(30_000) });
  assert(response.ok, `GitBook schema returned HTTP ${response.status}`);
  const ajv = new Ajv2020({ allErrors: true });
  addFormats(ajv);
  ajv.addFormat("icon", true);
  ajv.addKeyword("example");
  const validate = ajv.compile(parse(await response.text()));
  assert(validate(config), ajv.errorsText(validate.errors, { separator: "\n" }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await checkSchema(checkLayout());
  await checkSchema(parse(read(path.resolve(project, "../../gitbook-docs.yaml"))));
  console.log(
    "GitBook schema, root/nested variants, generated provenance, navigation, local links and anchors passed.",
  );
}
