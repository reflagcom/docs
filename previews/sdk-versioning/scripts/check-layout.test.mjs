import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parse, stringify } from "yaml";
import { checkLayout } from "./check-layout.mjs";

const project = fileURLToPath(new URL("../", import.meta.url));
function fixture(t) {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), "reflag-docs-preview-test-"));
  t.after(() => fs.rmSync(repo, { recursive: true, force: true }));
  const root = path.join(repo, "previews/sdk-versioning");
  fs.mkdirSync(root, { recursive: true });
  for (const file of ["gitbook-docs.yaml", ".gitbook.yaml"])
    fs.copyFileSync(path.resolve(project, "../..", file), path.join(repo, file));
  for (const file of ["gitbook-docs.yaml", ".gitbook.yaml"]) {
    fs.copyFileSync(path.join(project, file), path.join(root, file));
  }
  for (const name of ["v1", "v2", "shared"])
    fs.cpSync(path.join(project, name), path.join(root, name), { recursive: true });
  return root;
}
function changeConfig(root, change) {
  const file = path.join(root, "gitbook-docs.yaml");
  const config = parse(fs.readFileSync(file, "utf8"));
  change(config);
  fs.writeFileSync(file, stringify(config));
}

test("generated SDK variants preserve the exported production mapping", () => {
  checkLayout();
});
test("duplicate GitBook identities fail", (t) => {
  const root = fixture(t);
  changeConfig(root, (config) => {
    config.site.structure[1].key = config.site.structure[0].key;
  });
  assert.throws(() => checkLayout(root), /Duplicate GitBook identity/);
});
test("shared docs cannot acquire legacy variants", (t) => {
  const root = fixture(t);
  changeConfig(root, (config) => {
    config.site.structure[1].children.push(config.site.structure[0].children[1]);
  });
  assert.throws(() => checkLayout(root), /Shared docs must not acquire SDK variants/);
});
test("only one SDK variant can be the default", (t) => {
  const root = fixture(t);
  changeConfig(root, (config) => {
    config.site.structure[0].children[1].default = true;
  });
  assert.throws(() => checkLayout(root), /exactly one default/);
});
test("missing generated navigation pages fail", (t) => {
  const root = fixture(t);
  fs.unlinkSync(path.join(root, "v2/@reflag/node-sdk/globals.md"));
  assert.throws(() => checkLayout(root), /SUMMARY.md/);
});
test("broken same-version anchors fail", (t) => {
  const root = fixture(t);
  fs.appendFileSync(path.join(root, "v1/README.md"), "\n[Broken](README.md#missing-anchor)\n");
  assert.throws(() => checkLayout(root), /Missing linked anchor/);
});
test("links cannot escape a mapped space", (t) => {
  const root = fixture(t);
  fs.appendFileSync(path.join(root, "v1/README.md"), "\n[Wrong version](../v2/README.md)\n");
  assert.throws(() => checkLayout(root), /Path escapes content root/);
});
test("manual changes to generated pages fail provenance verification", (t) => {
  const root = fixture(t);
  fs.appendFileSync(path.join(root, "v1/@reflag/node-sdk/README.md"), "\nHandwritten SDK change\n");
  assert.throws(() => checkLayout(root), /Generated file drift/);
});
test("root and nested projects must map the same SDK identity keys", (t) => {
  const root = fixture(t);
  changeConfig(path.resolve(root, "../.."), (config) => {
    config.site.structure[1].children[1].key = "replacement-space";
  });
  assert.throws(() => checkLayout(root), /SDK variant identities/);
});
test("the exported production space identity cannot be replaced", (t) => {
  const root = fixture(t);
  changeConfig(path.resolve(root, "../.."), (config) => {
    config.site.structure[0].children[0].key = "sdk-preview-shared";
  });
  assert.throws(() => checkLayout(root), /preserve production space-1/);
});
test("production docs cannot be redirected into the shared sample", (t) => {
  const root = fixture(t);
  changeConfig(path.resolve(root, "../.."), (config) => {
    config.site.structure[0].children[0].content.directory = "./previews/sdk-versioning/shared";
  });
  assert.throws(() => checkLayout(root), /preserve production space-1/);
});
test("the SDK section cannot replace the default documentation section", (t) => {
  const root = fixture(t);
  changeConfig(path.resolve(root, "../.."), (config) => {
    config.site.structure[0].default = false;
    config.site.structure[1].default = true;
  });
  assert.throws(() => checkLayout(root), /preserve production space-1/);
});
test("the root v2-only individual-space fallback cannot be reintroduced", (t) => {
  const root = fixture(t);
  fs.writeFileSync(
    path.resolve(root, "../../.gitbook.yaml"),
    stringify({
      root: "./previews/sdk-versioning/v2/",
      structure: { readme: "README.md", summary: "SUMMARY.md" },
    }),
  );
  assert.throws(() => checkLayout(root), /must read its README\/SUMMARY/);
});
test("the production homepage cannot be replaced by an SDK landing", (t) => {
  const root = fixture(t);
  const file = path.resolve(root, "../../.gitbook.yaml");
  const config = parse(fs.readFileSync(file, "utf8"));
  config.structure.readme = "previews/sdk-versioning/v2/README.md";
  fs.writeFileSync(file, stringify(config));
  assert.throws(() => checkLayout(root), /must read its README\/SUMMARY/);
});
