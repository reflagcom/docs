import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { parseArgs } from "node:util";

export const webSDKs = ["browser-sdk", "react-sdk", "vue-sdk", "node-sdk"];
const references = [...webSDKs, "react-native-sdk", "management-sdk"];
export const documentedPackages = [...references, "cli"];
const repository = "https://github.com/reflagcom/javascript";
const versionPattern =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[\da-zA-Z.-]+)?(?:\+[\da-zA-Z.-]+)?$/;
const read = (root, file) => fs.readFileSync(path.join(root, file), "utf8");
const git = (source, ...args) =>
  execFileSync("git", ["-C", source, ...args], { encoding: "utf8" }).trim();
export const hash = (content) => createHash("sha256").update(content).digest("hex");
const relative = (from, to) => path.posix.relative(path.posix.dirname(from), to);

export function docsPath(name, major, filename = "README.md") {
  assert(documentedPackages.includes(name), `Unknown documentation owner: ${name}`);
  if (webSDKs.includes(name)) {
    assert([1, 2].includes(major), `Unmapped SDK major: ${major}`);
    return `${major === 1 ? "legacy/v1" : "supported-languages"}/${name}/${filename}`;
  }
  if (name === "management-sdk") return `api/management-sdk/${filename}`;
  if (name === "cli") return "api/cli.md";
  return `supported-languages/react-native-sdk/${filename}`;
}

function metadata(source, name) {
  assert(documentedPackages.includes(name), `Unknown documentation owner: ${name}`);
  const pkg = JSON.parse(read(source, `packages/${name}/package.json`));
  assert.equal(pkg.name, `@reflag/${name}`);
  assert(versionPattern.test(pkg.version), `Invalid version: ${pkg.name}`);
  assert(!pkg.private, `Private package: ${pkg.name}`);
  return pkg;
}

function withBanner(content, message) {
  const note = `{% hint style="info" %}\n${message}\n{% endhint %}\n\n`;
  if (!content.startsWith("---\n")) return note + content;
  const end = content.indexOf("\n---\n", 4);
  assert(end >= 0, "Unclosed frontmatter");
  return content.slice(0, end + 5) + "\n" + note + content.slice(end + 5).trimStart();
}

export const headingSlug = (text) =>
  text
    .toLowerCase()
    .replace(/<\/?(?:a|code|strong|em|span|br)(?:\s[^>]*)?>/g, "")
    .replace(/[^\p{L}\p{N}_ -]/gu, "")
    .replace(/ /g, "-");

export function anchorHeadings(content) {
  const ids = new Set();
  const linked = new Set([...content.matchAll(/#([\w-]+)/g)].map((match) => match[1]));
  let fence;
  return content
    .split("\n")
    .map((line) => {
      const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1];
      if (marker) {
        if (!fence) fence = marker;
        else if (fence[0] === marker[0] && marker.length >= fence.length) fence = undefined;
        return line;
      }
      if (fence) return line;
      const match = /^(#{1,6}) (.+)$/.exec(line);
      if (!match) return line;
      const [, prefix, heading] = match;
      const base = headingSlug(heading);
      let id = base;
      for (let suffix = 1; ids.has(id); suffix++) id = `${base}-${suffix}`;
      ids.add(id);
      // GitBook imports Markdown levels 4–6 as bold paragraphs and drops
      // their IDs. Promote API members (TypeDoc level 5) and linked headings,
      // but keep unlinked Parameters/Returns sublabels out of the outline.
      const rendered =
        prefix.length > 3 && (prefix.length === 5 || linked.has(id))
          ? line.replace(/^#{4,6}/, "###")
          : line;
      // GitBook otherwise expands <T> into "less-than-t-greater-than" and
      // punctuation into different slugs than TypeDoc's existing deep links.
      if (/\bid=["']/.test(heading)) return rendered;
      return `${rendered} <a href="#${id}" id="${id}"></a>`;
    })
    .join("\n");
}

export function planPackage({ source, name, commit }) {
  assert(/^[a-f\d]{40}$/.test(commit), "A full SDK source commit is required");
  const pkg = metadata(source, name);
  const major = Number(pkg.version.split(".")[0]);
  const web = webSDKs.includes(name);
  const files = new Map();
  const mediaRoot = web
    ? major === 1
      ? "legacy/v1/_media"
      : "supported-languages/_media"
    : "sdk/_media";
  const add = (file, content) => {
    const bytes = Buffer.from(content);
    assert(
      !files.has(file) || files.get(file).equals(bytes),
      `Conflicting generated output: ${file}`,
    );
    files.set(file, bytes);
  };
  const targetMajor = (target) => {
    if (!webSDKs.includes(target)) return Number(metadata(source, target).version.split(".")[0]);
    if (web) return major;
    const range =
      pkg.dependencies?.[`@reflag/${target}`] ??
      pkg.peerDependencies?.[`@reflag/${target}`] ??
      (name === "react-native-sdk" ? pkg.dependencies?.["@reflag/react-sdk"] : undefined);
    const selected = /^[~^]?(\d+)\./.exec(range ?? "")?.[1];
    assert(selected, `Cannot determine linked SDK major: ${target}`);
    return Number(selected);
  };
  const route = (url, output) => {
    if (url.startsWith("#")) return url;
    // Absolute SDK links must not send legacy readers into the current API.
    const publicLink =
      /^https:\/\/docs\.reflag\.com\/(?:supported-languages|sdk\/@reflag)\/([^/#]+)(?:\/(globals)(?:\.md)?)?\/?(#[^\s]*)?$/.exec(
        url,
      );
    if (publicLink && webSDKs.includes(publicLink[1])) {
      return (
        relative(
          output.file,
          docsPath(
            publicLink[1],
            targetMajor(publicLink[1]),
            publicLink[2] ? "globals.md" : "README.md",
          ),
        ) + (publicLink[3] ?? "")
      );
    }
    if (/^(?:[a-z][a-z\d+.-]*:|\/)/i.test(url)) {
      return url
        .replace(`${repository}/blob/main/`, `${repository}/blob/${commit}/`)
        .replace(`${repository}/tree/main/`, `${repository}/tree/${commit}/`);
    }
    const [pathname, fragment = ""] = url.split(/(?=#)/, 2);
    let raw = path.posix.normalize(
      path.posix.join(path.posix.dirname(output.raw), decodeURIComponent(pathname)),
    );
    assert(!raw.startsWith("../") && !path.posix.isAbsolute(raw), `Link escapes SDK docs: ${url}`);
    // TypeDoc's shared README attachment can contain the wrong package's README.
    if (raw === "_media/README.md") {
      const original = read(source, `packages/${name}/README.md`);
      const linked = /\]\(\.\.\/([^/]+)\/README\.md\)/.exec(original)?.[1];
      assert(linked && documentedPackages.includes(linked), "Unmapped README attachment");
      raw = `@reflag/${linked}/README.md`;
    }
    const sdk = /^@reflag\/([^/]+)\/(README|globals)\.md$/.exec(raw);
    if (sdk)
      return (
        relative(output.file, docsPath(sdk[1], targetMajor(sdk[1]), `${sdk[2]}.md`)) + fragment
      );
    if (raw === "documents/browser-sdk/FEEDBACK.md")
      return (
        relative(output.file, docsPath("browser-sdk", targetMajor("browser-sdk"), "feedback.md")) +
        fragment
      );
    const document = /^documents\/([^/]+)\/README\.md$/.exec(raw);
    if (document && references.includes(document[1]))
      return relative(output.file, docsPath(document[1], targetMajor(document[1]))) + fragment;
    if (raw.startsWith("_media/")) {
      const target = `${mediaRoot}/${raw.slice("_media/".length)}`;
      add(target, fs.readFileSync(path.join(source, "dist/docs", raw)));
      return relative(output.file, target) + fragment;
    }
    return `${repository}/blob/${commit}/${raw}${fragment}`;
  };
  const render = (raw, file, kind) => {
    let content = read(source, `dist/docs/${raw}`);
    // Canonical docs.sh normalizes property anchors; normalize all links, too.
    content = content.replace(/(globals\.md#[\w-]+?)-\d+(?=[)"\s])/g, "$1");
    content = content.replace(/```[^\n]*\n[\s\S]*?```/g, (block) => block.replace(/[ \t]+$/gm, ""));
    content = content.replace(
      /(\]\()([^\s)]+)([^)]*\))/g,
      (_, open, url, close) => `${open}${route(url, { raw, file })}${close}`,
    );
    content = content.replace(
      /((?:src|href)=["'])([^"']+)(["'])/g,
      (_, open, url, close) => `${open}${route(url, { raw, file })}${close}`,
    );
    content = anchorHeadings(content);
    if (web) {
      // Pin installation/CDN commands, never imports or JSON application data.
      content = content
        .split("\n")
        .map((line) => {
          if (!/^\s*(?:npm (?:i|install)|yarn add|pnpm add|bun add|deno add|npx)\b/.test(line))
            return line;
          return line.replace(
            /@reflag\/(?:node-sdk|browser-sdk|react-sdk|vue-sdk|cli)(?:@[\w.^~-]+)?(?![\w/-])/g,
            (match) => `${match.replace(/@[^@/]+$/, "")}@${major}`,
          );
        })
        .join("\n");
      content = content.replace(
        /(https:\/\/cdn\.jsdelivr\.net\/npm\/@reflag\/browser-sdk)(?:@[^/"'<>\s]+)?/g,
        `$1@${major}`,
      );
      const counterpart = docsPath(
        name,
        major === 1 ? 2 : 1,
        kind === "feedback" ? "feedback.md" : kind === "reference" ? "globals.md" : "README.md",
      );
      const label = major === 1 ? "Protocol v1 — legacy" : "Protocol v2";
      const versionLink = major === 1 ? "Current v2 documentation" : "Legacy v1 documentation";
      const prerelease =
        major === 2 && versionPattern.exec(pkg.version)[4]
          ? "\n\n**Prerelease source documentation.** The installation examples target major 2; use them only when the matching SDK/CLI packages are available. A server rollout alone does not publish npm packages."
          : "";
      content = withBanner(
        content,
        `**${label}.** [${versionLink}](${relative(file, counterpart)}) · [Migration guide](${relative(file, "supported-languages/migrating-from-v1.md")})${prerelease}\n\nGenerated from [\`${pkg.name}@${pkg.version}\`](${repository}/tree/${commit}/packages/${name}); SDK READMEs and code comments remain the source of truth.`,
      );
    } else if (name === "react-native-sdk") {
      content = withBanner(
        content,
        `**Independent SDK compatibility.** This React Native release uses React/Browser protocol v${targetMajor("react-sdk")}. Follow the [matching React documentation](${relative(file, docsPath("react-sdk", targetMajor("react-sdk")))}) and use a [matching Node SDK](${relative(file, docsPath("node-sdk", targetMajor("react-sdk")))}) for bootstrap. Do not pass protocol-v2 bootstrap into a v1 consumer.`,
      );
    }
    add(file, content);
  };
  if (references.includes(name)) {
    for (const filename of ["README.md", "globals.md"]) {
      const raw = `@reflag/${name}/${filename}`;
      const kind = filename === "globals.md" ? "reference" : "readme";
      render(raw, docsPath(name, major, filename), kind);
      // Keep historical SDK URLs and their reference anchors usable, but only
      // the current major owns these aliases. A v1 release cannot replace v2.
      if (!web || major === 2) render(raw, `sdk/@reflag/${name}/${filename}`, kind);
      if (
        ((name === "react-sdk" && major === 2) || name === "react-native-sdk") &&
        filename === "README.md"
      )
        render(raw, `sdk/documents/${name}/README.md`, kind);
    }
  }
  if (name === "browser-sdk") {
    const raw = "documents/browser-sdk/FEEDBACK.md";
    render(raw, docsPath(name, major, "feedback.md"), "feedback");
    if (major === 2) render(raw, "sdk/documents/browser-sdk/FEEDBACK.md", "feedback");
  }
  if (name === "cli") {
    render("documents/cli/README.md", "api/cli.md", "readme");
    render("documents/cli/README.md", "sdk/documents/cli/README.md", "readme");
  }
  const manifest = {
    sourceRepository: repository,
    sourceCommit: commit,
    package: pkg.name,
    version: pkg.version,
    files: Object.fromEntries([...files].map(([file, content]) => [file, hash(content)])),
  };
  add(`.generated/sdk-docs/${name}/v${major}.json`, `${JSON.stringify(manifest, null, 2)}\n`);
  return files;
}

export function applyPlan(files, destination, { check = false } = {}) {
  for (const [file, content] of files) {
    assert(!path.isAbsolute(file) && !file.split("/").includes(".."), "Unsafe generated path");
    const target = path.join(destination, file);
    if (check)
      assert(fs.readFileSync(target).equals(content), `Generated documentation differs: ${file}`);
    else {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, content);
    }
  }
  // Never delete a tree, or take ownership of navigation, guides or GitBook settings.
}

export function releaseFiles(source, plan) {
  assert.equal(
    git(source, "status", "--porcelain", "--untracked-files=no"),
    "",
    "SDK source must be clean",
  );
  const commit = git(source, "rev-parse", "HEAD");
  assert.equal(plan.sourceCommit, commit, "Release source changed");
  assert(Array.isArray(plan.releases), "Invalid release plan");
  const files = new Map();
  const seen = new Set();
  for (const release of plan.releases) {
    assert(/^@reflag\/[a-z][a-z0-9-]*$/.test(release.name), "Invalid package name");
    const name = release.name.slice("@reflag/".length);
    const pkg = metadata(source, name);
    assert(!seen.has(name), `Duplicate package: ${name}`);
    seen.add(name);
    assert.equal(pkg.version, release.version, "Published/source version mismatch");
    assert(!versionPattern.exec(pkg.version)[4], "Prereleases cannot promote stable docs");
    assert.equal(
      git(source, "rev-parse", `refs/tags/${pkg.name}@${pkg.version}^{commit}`),
      commit,
      "Release tag/source mismatch",
    );
    for (const [file, content] of planPackage({ source, name, commit })) {
      assert(!files.has(file) || files.get(file).equals(content), `Conflicting output: ${file}`);
      files.set(file, content);
    }
  }
  return files;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      source: { type: "string" },
      destination: { type: "string", default: "." },
      package: { type: "string", multiple: true },
      plan: { type: "string" },
      check: { type: "boolean", default: false },
    },
  });
  assert(values.source, "--source is required");
  const source = path.resolve(values.source);
  let files;
  if (positionals[0] === "release") {
    assert(values.plan, "--plan is required");
    files = releaseFiles(source, JSON.parse(fs.readFileSync(values.plan, "utf8")));
  } else {
    assert.equal(positionals[0], "import", "Use import or release");
    assert(values.package?.length, "Select --package explicitly");
    assert.equal(
      git(source, "status", "--porcelain", "--untracked-files=no"),
      "",
      "SDK source must be clean",
    );
    files = new Map();
    for (const name of values.package)
      for (const [file, content] of planPackage({
        source,
        name,
        commit: git(source, "rev-parse", "HEAD"),
      })) {
        assert(!files.has(file) || files.get(file).equals(content), `Conflicting output: ${file}`);
        files.set(file, content);
      }
  }
  applyPlan(files, path.resolve(values.destination), { check: values.check });
  console.log(`${values.check ? "Verified" : "Generated"} ${files.size} SDK documentation files.`);
}
