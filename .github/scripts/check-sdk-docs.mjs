import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { currentVersionNote, docsPath, hash, webSDKs, documentedPackages } from "./sdk-docs.mjs";

export const root = path.resolve(fileURLToPath(new URL("../../", import.meta.url)));
const read = (base, file) => fs.readFileSync(path.join(base, file), "utf8");
export const prose = (content) => content.replace(/```[^\n]*\n[\s\S]*?```/g, "");
export const links = (content) =>
  [
    ...prose(content).matchAll(
      /\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)|(?:src|href)=["']([^"']+)["']/g,
    ),
  ].map((match) => match[1] ?? match[2]);
const slug = (text) =>
  text
    .toLowerCase()
    .replace(/<\/?(?:a|code|strong|em|span|br)(?:\s[^>]*)?>/g, "")
    .replace(/[^\p{L}\p{N}_ -]/gu, "")
    .replace(/ /g, "-");

export function anchors(content) {
  const ids = new Set();
  for (const match of prose(content).matchAll(/\bid=["']([^"']+)["']/g)) ids.add(match[1]);
  const headingIDs = new Set();
  for (const match of prose(content).matchAll(/^#{1,6} (.+)$/gm)) {
    const base = slug(match[1]);
    let id = base;
    for (let suffix = 1; headingIDs.has(id); suffix++) id = `${base}-${suffix}`;
    headingIDs.add(id);
    ids.add(id);
  }
  return ids;
}

function resolveLink(base, file, href) {
  const [pathname, fragment] = href.split("#");
  let target = path.resolve(
    base,
    path.dirname(file),
    decodeURIComponent(pathname || path.basename(file)),
  );
  assert(target.startsWith(`${base}${path.sep}`), `Link escapes repository: ${file} -> ${href}`);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory())
    target = path.join(target, "README.md");
  return { target, fragment };
}

export function checkLinks(base, pages) {
  const errors = [];
  for (const file of pages) {
    for (const href of links(read(base, file))) {
      if (/^(?:[a-z][a-z\d+.-]*:|\/|\{)/i.test(href)) continue;
      try {
        const { target, fragment } = resolveLink(base, file, href);
        assert(fs.existsSync(target), `Missing file: ${file} -> ${href}`);
        if (fragment && target.endsWith(".md"))
          assert(
            anchors(fs.readFileSync(target, "utf8")).has(decodeURIComponent(fragment)),
            `Missing anchor: ${file} -> ${href}`,
          );
      } catch (error) {
        errors.push(error.message);
      }
    }
  }
  assert.equal(errors.length, 0, errors.join("\n"));
}

export function sourceMatrix(base = root) {
  const commits = new Map();
  for (const name of fs.readdirSync(path.join(base, ".generated/sdk-docs"))) {
    assert(documentedPackages.includes(name), `Unknown generated owner: ${name}`);
    for (const filename of fs.readdirSync(path.join(base, ".generated/sdk-docs", name))) {
      const manifest = JSON.parse(read(base, `.generated/sdk-docs/${name}/${filename}`));
      assert(/^[a-f\d]{40}$/.test(manifest.sourceCommit), "Invalid SDK source ref");
      const packages = commits.get(manifest.sourceCommit) ?? new Set();
      packages.add(name);
      commits.set(manifest.sourceCommit, packages);
    }
  }
  return {
    include: [...commits].map(([ref, packages]) => ({
      ref,
      packages: [...packages]
        .sort()
        .map((name) => `--package ${name}`)
        .join(" "),
    })),
  };
}

export function checkCurrentPagePresentation(content, file) {
  const notes = [...content.matchAll(/^Using v1\? .+$/gm)];
  assert.equal(notes.length, 1, `Expected one succinct version note: ${file}`);
  assert(content.trimEnd().endsWith(notes[0][0]), `Legacy link must be at the end: ${file}`);
  const body = prose(content);
  assert.equal(
    body.split("\n").filter((line) => line === currentVersionNote).length,
    1,
    `Expected one SDK v2 scope note: ${file}`,
  );
  const title = /^# .+$/m.exec(body);
  const firstSection = /^#{2,6} /m.exec(body);
  const scope = body.indexOf(currentVersionNote);
  assert(
    title && scope > title.index + title[0].length && scope < (firstSection?.index ?? body.length),
    `SDK v2 scope note must be in the introduction: ${file}`,
  );
  assert(!content.includes("**Protocol v2"), `Repeated protocol banner: ${file}`);
  assert(!content.includes("Prerelease source documentation"), `Repeated release warning: ${file}`);
  assert(!content.includes("Generated from ["), `Provenance belongs in the manifest: ${file}`);
  for (const line of content.split("\n"))
    if (
      /^\s*(?:npm (?:i|install)|yarn add|pnpm add|bun add|deno add|npx)\b|cdn\.jsdelivr\.net/.test(
        line,
      )
    )
      assert(
        !/@reflag\/(?:node-sdk|browser-sdk|react-sdk|vue-sdk|cli)@2\b/.test(line),
        `Major-pinned installs belong in the upgrade guide: ${file}`,
      );
}

export function checkSDKDocs(base = root) {
  const summary = read(base, "SUMMARY.md");
  const supported = /^## Supported languages\n([\s\S]*?)(?=\n## )/m.exec(summary)?.[1];
  assert(supported, "Missing Supported languages section");
  assert.equal(
    links(supported).at(-1),
    "supported-languages/migrating-from-v1.md",
    "Migration guide must be last in Supported languages",
  );
  const navigation = links(summary).filter((href) => !/^[a-z][a-z\d+.-]*:/i.test(href));
  assert.equal(new Set(navigation).size, navigation.length, "Duplicate navigation entry");
  const generated = new Set();
  const owners = new Map();
  for (const name of fs.readdirSync(path.join(base, ".generated/sdk-docs"))) {
    for (const filename of fs.readdirSync(path.join(base, ".generated/sdk-docs", name))) {
      const manifest = JSON.parse(read(base, `.generated/sdk-docs/${name}/${filename}`));
      assert.equal(manifest.package, `@reflag/${name}`);
      assert(/^[a-f\d]{40}$/.test(manifest.sourceCommit), "Missing exact source commit");
      for (const [file, expected] of Object.entries(manifest.files)) {
        const actual = hash(fs.readFileSync(path.join(base, file)));
        assert.equal(actual, expected, `Generated file drift: ${file}`);
        assert(!owners.has(file) || owners.get(file) === actual, `Conflicting ownership: ${file}`);
        owners.set(file, actual);
        if (file.endsWith(".md")) {
          assert(
            !/^Generated from\b/im.test(read(base, file)),
            `Provenance belongs in the manifest: ${file}`,
          );
          generated.add(file);
        }
      }
    }
  }
  for (const major of [1, 2])
    for (const name of webSDKs) {
      for (const filename of [
        "README.md",
        "globals.md",
        ...(name === "browser-sdk" ? ["feedback.md"] : []),
      ]) {
        const file = docsPath(name, major, filename);
        assert(navigation.includes(file), `SDK page missing from navigation: ${file}`);
        assert(generated.has(file), `SDK page has no source manifest: ${file}`);
        const content = read(base, file);
        const counterpart = docsPath(name, major === 1 ? 2 : 1, filename);
        assert(
          links(content).some((href) => {
            if (/^(?:[a-z][a-z\d+.-]*:|\/)/i.test(href)) return false;
            return path.relative(base, resolveLink(base, file, href).target) === counterpart;
          }),
          `Missing equivalent-version link: ${file}`,
        );
        if (major === 2) checkCurrentPagePresentation(content, file);
        if (major === 1) {
          assert(content.includes("Protocol v1 — legacy"));
          assert(
            !/cdn\.jsdelivr\.net\/npm\/@reflag\/browser-sdk@(?!1\b)/.test(content),
            "Legacy CDN must target v1",
          );
          for (const line of content.split("\n"))
            if (/^\s*(?:npm (?:i|install)|yarn add|pnpm add|bun add|deno add|npx)\b/.test(line)) {
              for (const match of line.matchAll(
                /@reflag\/(?:node-sdk|browser-sdk|react-sdk|vue-sdk|cli)(?:@([^\s]+))?/g,
              ))
                assert.equal(match[1], "1", `Unpinned legacy install: ${file}: ${line}`);
            }
        }
      }
    }
  const shared = navigation.filter(
    (file) =>
      !generated.has(file) &&
      !file.startsWith("legacy/") &&
      !file.startsWith("api/") &&
      !file.endsWith("globals.md") &&
      !file.includes("react-native-sdk") &&
      file !== "supported-languages/migrating-from-v1.md",
  );
  for (const file of shared) {
    const content = read(base, file);
    assert(
      !/\{\s*(?:isEnabled|config\s*:)[^\n]*\}\s*=\s*(?:useFlag|.*\.getFlag)\(/.test(content),
      `Legacy wrapper in shared example: ${file}`,
    );
    assert(!content.includes("../sdk/v2/"), `Obsolete SDK preview link: ${file}`);
    if (file === "supported-languages/next.js.md") checkCurrentPagePresentation(content, file);
    for (const line of content.split("\n"))
      if (/^\s*(?:npm (?:i|install)|yarn add|pnpm add|bun add|deno add|npx)\b/.test(line))
        assert(
          !/@reflag\/[a-z-]+@2\b/.test(line),
          `Major-pinned installs belong in the upgrade guide: ${file}`,
        );
  }
  // Existing unrelated handbook anchors are not a gate for generated SDK output.
  // New SDK links, migration/overview links and all navigation must resolve.
  checkLinks(base, [
    "SUMMARY.md",
    ...generated,
    "legacy/v1/README.md",
    "supported-languages/migrating-from-v1.md",
    "supported-languages/overview.md",
    ...shared.filter((file) =>
      [
        "README.md",
        "supported-languages/next.js.md",
        "product-handbook/service-resiliency.md",
        "product-handbook/type-safety.md",
      ].includes(file),
    ),
  ]);
  return { generatedPages: generated.size, navigationPages: navigation.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  console.log(JSON.stringify(checkSDKDocs(), null, 2));
  if (process.argv.includes("--sources")) {
    const outputs = {
      matrix: JSON.stringify(sourceMatrix()),
      react_v1_ref: JSON.parse(read(root, ".generated/sdk-docs/react-sdk/v1.json")).sourceCommit,
      react_v2_ref: JSON.parse(read(root, ".generated/sdk-docs/react-sdk/v2.json")).sourceCommit,
      node_v2_ref: JSON.parse(read(root, ".generated/sdk-docs/node-sdk/v2.json")).sourceCommit,
    };
    if (process.env.GITHUB_OUTPUT)
      for (const [key, value] of Object.entries(outputs))
        fs.appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${value}\n`);
    console.log(JSON.stringify(outputs, null, 2));
  }
}
