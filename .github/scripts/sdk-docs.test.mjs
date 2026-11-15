import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {
  anchorHeadings,
  applyPlan,
  docsPath,
  planPackage,
  releaseFiles,
  webSDKs,
} from "./sdk-docs.mjs";
import { anchors, checkLinks, checkSDKDocs, root, sourceMatrix } from "./check-sdk-docs.mjs";

function fixture(t, major = 2) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "reflag-sdk-docs-test-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const source = path.join(dir, "source"),
    destination = path.join(dir, "docs");
  const put = (file, content) => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  };
  const names = [...webSDKs, "react-native-sdk", "management-sdk", "cli"];
  for (const name of names) {
    put(
      path.join(source, `packages/${name}/package.json`),
      JSON.stringify({
        name: `@reflag/${name}`,
        version: `${major}.0.0`,
        dependencies: { "@reflag/react-sdk": "1.7.4" },
      }),
    );
    put(
      path.join(source, `packages/${name}/README.md`),
      "# SDK\n[Browser](../browser-sdk/README.md)\n",
    );
    put(
      path.join(source, `dist/docs/@reflag/${name}/README.md`),
      `---\nlayout: {}\n---\n# SDK\n[Browser](../../_media/README.md)\n[Feedback](../../documents/browser-sdk/FEEDBACK.md)\n[Toolbar](https://docs.reflag.com/supported-languages/browser-sdk/globals#toolbaroptions)\nnpm install @reflag/${name}\nbun add @reflag/${name}\ndeno add npm:@reflag/${name}\nnpx @reflag/cli new\n<script src="https://cdn.jsdelivr.net/npm/@reflag/browser-sdk@2"></script>\n[Source](https://github.com/reflagcom/javascript/blob/main/packages/${name}/README.md)\n`,
    );
    put(
      path.join(source, `dist/docs/@reflag/${name}/globals.md`),
      '# Reference\n## FlagValueFromDefault\\<T\\>\n<a id="toolbaroptions"></a>\n',
    );
  }
  put(
    path.join(source, "dist/docs/documents/browser-sdk/FEEDBACK.md"),
    "# Feedback\n[Browser](../../@reflag/browser-sdk/README.md)\n",
  );
  put(path.join(source, "dist/docs/documents/cli/README.md"), "# CLI\n");
  return {
    source,
    destination,
    put,
    options: { source, name: "react-sdk", commit: "a".repeat(40) },
  };
}

test("repository navigation, provenance, cross-version links, assets and anchors", () => {
  assert(checkSDKDocs().generatedPages >= 28);
});

test("CI discovers exact source refs from manifests rather than hardcoding the first import", () => {
  const matrix = sourceMatrix();
  assert(matrix.include.length > 0);
  for (const row of matrix.include) {
    assert(/^[a-f\d]{40}$/.test(row.ref));
    assert.match(
      row.packages,
      /^(?:--package (?:browser-sdk|react-sdk|vue-sdk|node-sdk|react-native-sdk|management-sdk|cli)(?: |$))+$/,
    );
  }
});

test("v1 import owns only the archive, pins installers/CDN and routes SDK links to v1", (t) => {
  const { options } = fixture(t, 1);
  const files = planPackage(options);
  assert(
    [...files.keys()].every(
      (file) => file.startsWith("legacy/v1/") || file.startsWith(".generated/"),
    ),
  );
  const readme = files.get("legacy/v1/react-sdk/README.md").toString();
  assert.match(readme, /npm install @reflag\/react-sdk@1/);
  assert.match(readme, /bun add @reflag\/react-sdk@1/);
  assert.match(readme, /deno add npm:@reflag\/react-sdk@1/);
  assert.match(readme, /npx @reflag\/cli@1 new/);
  assert.match(readme, /browser-sdk@1/);
  assert.match(readme, /\(\.\.\/browser-sdk\/globals.md#toolbaroptions\)/);
  assert.match(readme, /blob\/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\//);
  assert(readme.indexOf("---") < readme.indexOf("{% hint"), "Keep frontmatter first");
});

test("v2 sync cannot modify archived docs, navigation, settings or handwritten guides", (t) => {
  const { options, destination, put } = fixture(t);
  const preserved = [
    "legacy/v1/react-sdk/README.md",
    "SUMMARY.md",
    "README.md",
    "gitbook-docs.yaml",
    "supported-languages/migrating-from-v1.md",
  ];
  for (const file of preserved) put(path.join(destination, file), "preserve");
  const files = planPackage(options);
  applyPlan(files, destination);
  applyPlan(files, destination, { check: true });
  for (const file of preserved)
    assert.equal(fs.readFileSync(path.join(destination, file), "utf8"), "preserve");
  assert(files.has("supported-languages/react-sdk/README.md"));
  assert(files.has("sdk/@reflag/react-sdk/globals.md"), "Preserve historical reference URLs");
  assert.match(
    files.get("sdk/@reflag/react-sdk/README.md").toString(),
    /\.\.\/\.\.\/\.\.\/legacy\/v1\/react-sdk\/README.md/,
  );
});

test("independent Native references route to its pinned React/Browser major, not workspace v2", (t) => {
  const { options } = fixture(t);
  const files = planPackage({ ...options, name: "react-native-sdk" });
  const readme = files.get("supported-languages/react-native-sdk/README.md").toString();
  assert.match(readme, /legacy\/v1\/browser-sdk\/README.md/);
  assert.match(readme, /legacy\/v1\/react-sdk\/README.md/);
  assert(!files.has("supported-languages/react-sdk/README.md"));
  assert(!files.has("legacy/v1/react-sdk/README.md"));
});

test("Management and CLI updates never own coordinated SDK trees", (t) => {
  const { options, source, put } = fixture(t);
  put(path.join(source, "dist/docs/@reflag/management-sdk/README.md"), "# Management SDK\n");
  for (const name of ["management-sdk", "cli"]) {
    const files = planPackage({ ...options, name });
    assert(
      ![...files.keys()].some(
        (file) => file.startsWith("legacy/") || file.startsWith("supported-languages/"),
      ),
    );
  }
});

test("GitBook heading IDs preserve TypeDoc/generic deep links without changing code fences", () => {
  const content =
    "# `<ReflagProvider>` component\n## FlagValueFromDefault\\<T\\>\n## Properties\n## Properties\n```md\n# Leave code alone\n```\n";
  const rendered = anchorHeadings(content);
  assert.match(rendered, /id="reflagprovider-component"/);
  assert.match(rendered, /id="flagvaluefromdefaultt"/);
  assert.match(rendered, /id="properties-1"/);
  assert(rendered.includes("```md\n# Leave code alone\n```"));
});

test("GitBook keeps deep API-member and linked-section anchors without outlining every parameter label", () => {
  const rendered = anchorHeadings(
    "### Client\n#### Constructors\n##### getFlag()\n###### Parameters\n[Constructor](globals.md#constructors)\n",
  );
  assert.match(rendered, /^### Constructors <a href="#constructors"/m);
  assert.match(rendered, /^### getFlag\(\) <a href="#getflag"/m);
  assert.match(rendered, /^###### Parameters /m);
});

test("type links keep their canonical IDs rather than landing on similarly named properties", () => {
  const rendered = anchorHeadings(
    "### Client\n##### logger\n##### flagOverrides\n### Logger\n### FlagOverrides\n[Type](globals.md#logger)\n",
  );
  assert.match(rendered, /^### logger <a href="#logger-1"/m);
  assert.match(rendered, /^### Logger <a href="#logger"/m);
  assert.match(rendered, /^### flagOverrides <a href="#flagoverrides-1"/m);
  assert.match(rendered, /^### FlagOverrides <a href="#flagoverrides"/m);
});

test("missing generated input fails before applying any changes", (t) => {
  const { source, options, destination } = fixture(t);
  fs.unlinkSync(path.join(source, "dist/docs/@reflag/react-sdk/globals.md"));
  assert.throws(() => applyPlan(planPackage(options), destination), /ENOENT/);
  assert(!fs.existsSync(destination));
});

test("manifest check detects manual generated-content changes", (t) => {
  const { options, destination, put } = fixture(t);
  const plan = planPackage(options);
  applyPlan(plan, destination);
  put(path.join(destination, "supported-languages/react-sdk/README.md"), "edited");
  assert.throws(
    () => applyPlan(plan, destination, { check: true }),
    /Generated documentation differs/,
  );
});

test("unknown owners and majors fail closed", (t) => {
  const { options } = fixture(t);
  assert.throws(
    () => planPackage({ ...options, name: "../../escape" }),
    /Unknown documentation owner/,
  );
  assert.throws(() => docsPath("react-sdk", 3), /Unmapped SDK major/);
  assert.throws(() => planPackage({ ...options, commit: "main" }), /full SDK source commit/);
});

test("negative link controls catch missing files and anchors; generic headings remain addressable", (t) => {
  const { destination, put } = fixture(t);
  put(path.join(destination, "page.md"), "[missing](other.md)\n");
  assert.throws(() => checkLinks(destination, ["page.md"]), /Missing file/);
  put(path.join(destination, "other.md"), "# FlagValueFromDefault\\<T\\>\n");
  put(path.join(destination, "page.md"), "[missing](other.md#nope)\n");
  assert.throws(() => checkLinks(destination, ["page.md"]), /Missing anchor/);
  assert(
    anchors(fs.readFileSync(path.join(destination, "other.md"), "utf8")).has(
      "flagvaluefromdefaultt",
    ),
  );
});

test("release sync requires the exact clean tagged source and rejects prereleases before writes", (t) => {
  const { source, options, put } = fixture(t);
  const git = (...args) =>
    execFileSync("git", ["-C", source, ...args], { encoding: "utf8" }).trim();
  git("init", "--quiet");
  git("add", ".");
  git(
    "-c",
    "user.name=Test",
    "-c",
    "user.email=test@example.invalid",
    "commit",
    "--quiet",
    "-m",
    "Fixture",
  );
  const sourceCommit = git("rev-parse", "HEAD");
  const plan = { sourceCommit, releases: [{ name: "@reflag/react-sdk", version: "2.0.0" }] };
  git("tag", "@reflag/react-sdk@2.0.0");
  assert(releaseFiles(source, plan).has("supported-languages/react-sdk/README.md"));
  assert.throws(
    () => releaseFiles(source, { ...plan, sourceCommit: options.commit }),
    /source changed/,
  );
  assert.throws(
    () => releaseFiles(source, { ...plan, releases: [...plan.releases, ...plan.releases] }),
    /Duplicate package/,
  );
  put(
    path.join(source, "packages/react-sdk/package.json"),
    JSON.stringify({ name: "@reflag/react-sdk", version: "2.0.1-next.0" }),
  );
  assert.throws(() => releaseFiles(source, plan), /must be clean/);
  git("add", ".");
  git(
    "-c",
    "user.name=Test",
    "-c",
    "user.email=test@example.invalid",
    "commit",
    "--quiet",
    "-m",
    "Prerelease",
  );
  assert.throws(
    () =>
      releaseFiles(source, {
        sourceCommit: git("rev-parse", "HEAD"),
        releases: [{ name: "@reflag/react-sdk", version: "2.0.1-next.0" }],
      }),
    /Prereleases cannot promote/,
  );
});

test("this change does not introduce a GitBook variant picker or alternate site mapping", () => {
  assert(!fs.existsSync(path.join(root, ".gitbook.yaml")), "No new per-space root mapping");
  assert(!fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8").includes("v2-candidate/"));
});
