import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { applyImport, packages, planImport } from "./import-sdk-docs.mjs";

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "reflag-doc-import-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const source = path.join(root, "source"),
    destination = path.join(root, "v2");
  const put = (base, name, content) => {
    const file = path.join(base, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  };
  for (const name of packages) {
    put(
      source,
      `packages/${name}/package.json`,
      JSON.stringify({ name: `@reflag/${name}`, version: "2.0.0-next.0" }),
    );
    put(source, `packages/${name}/README.md`, "# SDK\n[Browser](../browser-sdk/README.md)\n");
    put(
      source,
      `dist/docs/@reflag/${name}/README.md`,
      "# SDK\n[Browser](../../_media/README.md)\nnpm install @reflag/react-sdk\n",
    );
    put(source, `dist/docs/@reflag/${name}/globals.md`, "# Reference\n");
  }
  put(source, "dist/docs/documents/browser-sdk/FEEDBACK.md", "# Feedback\n");
  put(source, "dist/docs/README.md", "Mixed unpublished/independent package index");
  return { source, destination, put, options: { source, major: "2", commit: "a".repeat(40) } };
}

test("imports nine generated pages without overwriting landing/navigation/other versions", (t) => {
  const { destination, put, options } = fixture(t);
  put(destination, "README.md", "handwritten landing");
  put(destination, "SUMMARY.md", "navigation");
  const plan = planImport(options);
  applyImport(plan, destination);
  applyImport(plan, destination, { check: true });
  assert.equal(plan.files.size, 9);
  assert.equal(fs.readFileSync(path.join(destination, "README.md"), "utf8"), "handwritten landing");
  assert.equal(fs.readFileSync(path.join(destination, "SUMMARY.md"), "utf8"), "navigation");
  assert(!fs.existsSync(path.join(destination, "@reflag/management-sdk")));
});
test("generated README links point at canonical SDK pages instead of shared attachments", (t) => {
  const { options } = fixture(t);
  const plan = planImport(options);
  assert.match(
    plan.files.get("@reflag/react-sdk/README.md").toString(),
    /\(\.\.\/browser-sdk\/README.md\)/,
  );
  assert.match(
    plan.files.get("@reflag/react-sdk/README.md").toString(),
    /npm install @reflag\/react-sdk@2/,
  );
});
test("wrong source majors fail before writes", (t) => {
  const { destination, options } = fixture(t);
  assert.throws(() => planImport({ ...options, major: "1" }), /Source major mismatch/);
  assert(!fs.existsSync(destination));
});
test("missing feedback fails the complete plan", (t) => {
  const { source, options } = fixture(t);
  fs.unlinkSync(path.join(source, "dist/docs/documents/browser-sdk/FEEDBACK.md"));
  assert.throws(() => planImport(options), /ENOENT/);
});
test("changed generated output fails reproducibility checking", (t) => {
  const { destination, put, options } = fixture(t);
  const plan = planImport(options);
  applyImport(plan, destination);
  put(destination, "@reflag/node-sdk/globals.md", "manual edit");
  assert.throws(() => applyImport(plan, destination, { check: true }), /Generated SDK docs differ/);
});
