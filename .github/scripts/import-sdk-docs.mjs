import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

export const packages = ["node-sdk", "browser-sdk", "react-sdk", "vue-sdk"];
const hash = (content) => createHash("sha256").update(content).digest("hex");
const read = (root, file) => fs.readFileSync(path.join(root, file), "utf8");

function banner(content, message) {
  const note = `{% hint style="info" %}\n${message}\n{% endhint %}\n\n`;
  if (content.startsWith("---\n")) {
    const end = content.indexOf("\n---\n", 4);
    assert(end >= 0, "Unclosed generated frontmatter");
    return content.slice(0, end + 5) + "\n" + note + content.slice(end + 5).trimStart();
  }
  return note + content;
}

export function planImport({ source, major, commit }) {
  assert(["1", "2"].includes(String(major)), "Select SDK major 1 or 2 explicitly");
  assert(/^[a-f\d]{40}$/.test(commit), "A full source commit is required");
  const files = new Map();
  const versions = {};
  for (const name of packages) {
    const metadata = JSON.parse(read(source, `packages/${name}/package.json`));
    assert.equal(metadata.name, `@reflag/${name}`);
    assert.equal(metadata.version.split(".")[0], String(major), `Source major mismatch: ${name}`);
    versions[metadata.name] = metadata.version;
    const status =
      String(major) === "1"
        ? "Legacy SDK v1."
        : "SDK v2 candidate documentation, not a published release. Installation commands target the planned major; matching SDK/CLI releases are still required.";
    const message = `${status} Generated from \`${metadata.name}@${metadata.version}\` in [the JavaScript repository](https://github.com/reflagcom/javascript/tree/${commit}/packages/${name}). SDK READMEs and code comments there remain authoritative.`;
    for (const filename of ["README.md", "globals.md"]) {
      const relative = `@reflag/${name}/${filename}`;
      let content = read(source, `dist/docs/${relative}`);
      if (filename === "README.md") {
        // TypeDoc copies linked READMEs to a shared _media/README.md, which can
        // collide with Native's linked README. Route the original source link.
        const original = read(source, `packages/${name}/README.md`);
        if (/\]\(\.\.\/browser-sdk\/README\.md\)/.test(original)) {
          content = content.replaceAll("../../_media/README.md", "../browser-sdk/README.md");
        }
        content = content
          .split("\n")
          .map((line) => {
            if (!/^\s*(?:npm (?:i|install)|yarn add|pnpm add)\b/.test(line)) return line;
            return line.replace(
              /@reflag\/(?:node-sdk|browser-sdk|react-sdk|vue-sdk)(?![\w/@-])/g,
              `$&@${major}`,
            );
          })
          .join("\n");
      }
      if (filename === "globals.md") {
        // The canonical docs.sh strips synthetic property-anchor suffixes;
        // normalize every link, including several links on the same table row.
        content = content.replace(/(globals\.md#[\w-]+?)-\d+(?=[)"\s])/g, "$1");
        content = content.replace(/```[^\n]*\n[\s\S]*?```/g, (block) =>
          block.replace(/[ \t]+$/gm, ""),
        );
      }
      assert(!content.includes("_media/README.md"), `Unmapped README attachment: ${relative}`);
      files.set(relative, Buffer.from(banner(content, message)));
    }
  }
  files.set(
    "documents/browser-sdk/FEEDBACK.md",
    Buffer.from(read(source, "dist/docs/documents/browser-sdk/FEEDBACK.md")),
  );
  // Only copy media actually referenced by these generated pages, never the
  // mixed all-package index or independent Native/Management/CLI documentation.
  // Snapshot Markdown pages before appending binary media to the output map.
  const pages = [...files.values()];
  for (const content of pages) {
    for (const match of content.toString().matchAll(/(?:\.\.\/)+_media\/([^\s)"#]+)(?:[)#"\s])/g)) {
      const name = decodeURIComponent(match[1]);
      assert(!name.includes("..") && !path.isAbsolute(name), "Unsafe media path");
      const relative = `_media/${name}`;
      files.set(relative, fs.readFileSync(path.join(source, "dist/docs", relative)));
    }
  }
  const manifest = {
    status: String(major) === "1" ? "published-v1-sources" : "candidate-source-build-not-a-release",
    sourceRepository: "https://github.com/reflagcom/javascript",
    sourceCommit: commit,
    sdkMajor: Number(major),
    packages: versions,
    transforms: [
      "GitBook version/source banner",
      "major-pinned install commands",
      "source-linked README routing",
      "TypeDoc property-anchor normalization",
      "TypeDoc code-block trailing whitespace",
    ],
    files: Object.fromEntries([...files].map(([name, content]) => [name, hash(content)])),
  };
  return { files, manifest };
}

export function applyImport(plan, destination, { check = false } = {}) {
  const files = new Map(plan.files);
  files.set("generated-manifest.json", Buffer.from(`${JSON.stringify(plan.manifest, null, 2)}\n`));
  for (const [relative, content] of files) {
    const target = path.join(destination, relative);
    if (check)
      assert(fs.readFileSync(target).equals(content), `Generated SDK docs differ: ${relative}`);
    else {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, content);
    }
  }
  // Landing, navigation and .gitbook.yaml are separately owned; never delete
  // directories or touch the original sdk/ tree or other versions.
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const { values } = parseArgs({
    options: {
      source: { type: "string" },
      destination: { type: "string" },
      major: { type: "string" },
      check: { type: "boolean", default: false },
    },
  });
  assert(
    values.source && values.destination && values.major,
    "Use --source <clean-built-SDK-checkout> --destination <variant-directory> --major 1|2 [--check]",
  );
  const source = path.resolve(values.source);
  const git = (...args) =>
    execFileSync("git", ["-C", source, ...args], { encoding: "utf8" }).trim();
  assert.equal(
    git("status", "--porcelain", "--untracked-files=no"),
    "",
    "Use a clean SDK source checkout",
  );
  const plan = planImport({ source, major: values.major, commit: git("rev-parse", "HEAD") });
  applyImport(plan, path.resolve(values.destination), { check: values.check });
  console.log(
    `${values.check ? "Verified" : "Imported"} ${plan.files.size} generated files for SDK v${values.major} from ${plan.manifest.sourceCommit}.`,
  );
}
