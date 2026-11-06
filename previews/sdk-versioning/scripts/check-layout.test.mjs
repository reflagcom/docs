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
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reflag-docs-preview-test-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.copyFileSync(path.join(project, "gitbook-docs.yaml"), path.join(root, "gitbook-docs.yaml"));
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

test("the preview is internally consistent", () => {
  checkLayout();
});

test("duplicate GitBook identities fail", (t) => {
  const root = fixture(t);
  changeConfig(root, (config) => {
    config.site.structure[1].key = config.site.structure[0].key;
  });
  assert.throws(() => checkLayout(root), /Duplicate GitBook identity/);
});

test("shared docs cannot acquire a legacy variant", (t) => {
  const root = fixture(t);
  changeConfig(root, (config) => {
    config.site.structure[1].children.push(config.site.structure[0].children[1]);
  });
  assert.throws(() => checkLayout(root), /Shared docs must not acquire SDK variants/);
});

test("the candidate must remain the only default SDK variant", (t) => {
  const root = fixture(t);
  changeConfig(root, (config) => {
    config.site.structure[0].children[1].default = true;
  });
  assert.throws(() => checkLayout(root), /exactly one default/);
});

test("a missing navigation target fails", (t) => {
  const root = fixture(t);
  fs.unlinkSync(path.join(root, "v2/suspense.md"));
  assert.throws(() => checkLayout(root), /SUMMARY.md/);
});

test("a broken same-version anchor fails", (t) => {
  const root = fixture(t);
  const file = path.join(root, "v1/reference.md");
  fs.writeFileSync(file, fs.readFileSync(file, "utf8").replace("## useFlag", "## Other flag"));
  assert.throws(() => checkLayout(root), /Missing linked anchor/);
});

test("content links cannot escape a space's mapped directory", (t) => {
  const root = fixture(t);
  const file = path.join(root, "v1/README.md");
  fs.writeFileSync(
    file,
    fs.readFileSync(file, "utf8").replace("(reference.md#useflag)", "(../v2/reference.md#useflag)"),
  );
  assert.throws(() => checkLayout(root), /Path escapes content root/);
});
