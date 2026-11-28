import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { checkLinks, checkSDKDocs, root, sourceMatrix } from "./check-sdk-docs.mjs";

test("published-content cutover validates generated pages, version links and navigation", () => {
  assert(checkSDKDocs().generatedPages >= 28);
});

test("handbook keeps Remote config as a short pointer to the full Multivariate flags guide", () => {
  const summary = fs.readFileSync(path.join(root, "SUMMARY.md"), "utf8");
  for (const file of ["remote-config.md", "multivariate-flags.md"])
    assert(summary.includes(`(product-handbook/${file})`));
  const remote = fs.readFileSync(path.join(root, "product-handbook/remote-config.md"), "utf8");
  const paragraph = remote
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/^# Remote config\s*/m, "")
    .trim();
  assert.equal(paragraph.split(/\n\s*\n/).length, 1);
  assert.match(paragraph, /\[Multivariate flag\]\(multivariate-flags\.md\)/);
  assert(!paragraph.includes("```"));
  const multivariate = fs.readFileSync(
    path.join(root, "product-handbook/multivariate-flags.md"),
    "utf8",
  );
  assert.match(multivariate, /^# Multivariate flags$/m);
  assert(multivariate.includes("export function AssistantSettings()"));
  assert(multivariate.includes("export function AssistantModel()"));
  assert.match(
    multivariate,
    /^## Migrating from Remote config$[\s\S]*^### Using an AI agent$[\s\S]*^### Manual migration\n\n1\./m,
  );
  assert(multivariate.includes("[Reflag MCP](../api/mcp.md)"));
  checkLinks(root, ["product-handbook/remote-config.md", "product-handbook/multivariate-flags.md"]);
});

test("cutover CI discovers exact source refs from manifests", () => {
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
