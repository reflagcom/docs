const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { createRequire } = require("node:module");

const [frameworkRoot, nodeRoot, legacyRoot] = process.argv
  .slice(2)
  .map((root) => path.resolve(root));
assert(
  frameworkRoot && nodeRoot && legacyRoot,
  "Pass built framework-v2, node-v2 and v1 source directories",
);
const root = path.resolve(__dirname, "../..");
const sdkRequire = createRequire(path.join(frameworkRoot, "package.json"));
const ts = sdkRequire("typescript");
const reactTypes = path.dirname(sdkRequire.resolve("@types/react/package.json"));
const nodeTypes = path.dirname(sdkRequire.resolve("@types/node/package.json"));
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "reflag-sdk-doc-examples-"));
let snippets = 0;
function declaration(base, name) {
  const dir = path.join(base, "packages", name);
  const pkg = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"));
  const file = path.join(dir, pkg.types);
  assert(fs.existsSync(file), `Build declarations first: ${file}`);
  return file;
}
function blocks(file) {
  return [
    ...fs
      .readFileSync(path.join(root, file), "utf8")
      .matchAll(/```(?:tsx|jsx|typescript|ts)\r?\n([\s\S]*?)```/g),
  ].map((match) => match[1]);
}
function compile(label, code, legacy = false, extra = {}) {
  const dir = path.join(temp, `${snippets++}`);
  fs.mkdirSync(dir);
  const file = path.join(dir, "example.tsx");
  const globals = path.join(dir, "globals.d.ts");
  fs.writeFileSync(file, code);
  fs.writeFileSync(
    globals,
    `declare module "your-component-library" { export const Spinner: import("react").FC<import("react").HTMLAttributes<HTMLSpanElement>>; }\n`,
  );
  const paths = {
    "@reflag/react-sdk": [declaration(legacy ? legacyRoot : frameworkRoot, "react-sdk")],
    "@reflag/browser-sdk": [declaration(legacy ? legacyRoot : frameworkRoot, "browser-sdk")],
    "@reflag/node-sdk": [declaration(legacy ? legacyRoot : nodeRoot, "node-sdk")],
    "@reflag/vue-sdk": [declaration(legacy ? legacyRoot : frameworkRoot, "vue-sdk")],
    react: [path.join(reactTypes, "index.d.ts")],
    "react/jsx-runtime": [path.join(reactTypes, "jsx-runtime.d.ts")],
    next: [path.join(path.dirname(sdkRequire.resolve("next/package.json")), "index.d.ts")],
  };
  for (const [name, content] of Object.entries(extra)) {
    const target = path.join(dir, `${name.replaceAll(/[^\w]/g, "-")}.tsx`);
    fs.writeFileSync(target, content);
    paths[name] = [target];
  }
  const ambient = label.startsWith("Next.js") ? [path.join(reactTypes, "canary.d.ts")] : [];
  const program = ts.createProgram(
    [file, globals, path.join(nodeTypes, "index.d.ts"), ...ambient],
    {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      jsx: ts.JsxEmit.ReactJSX,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      types: [],
      baseUrl: frameworkRoot,
      paths,
    },
  );
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length)
    throw new Error(
      `${label}:\n${ts.formatDiagnosticsWithColorAndContext(diagnostics, { getCanonicalFileName: (file) => file, getCurrentDirectory: () => root, getNewLine: () => "\n" })}`,
    );
}
try {
  for (const file of [
    "product-handbook/remote-config.md",
    "product-handbook/anonymous-users.md",
    "product-handbook/feature-clean-up-and-archival-beta/ai-code-clean-up-beta.md",
    "product-handbook/type-safety.md",
    "product-handbook/launch-monitor/README.md",
    "product-handbook/launch-monitor/give-feedback-button.md",
    "guides/toggle-toolbar-with-a-flag.md",
    "guides/use-reflag-in-your-cli.md",
  ])
    blocks(file).forEach((code, index) => compile(`${file} #${index + 1}`, code));
  blocks("product-handbook/feature-entitlements/README.md")
    .slice(0, 2)
    .forEach((code, index) => compile(`Entitlements #${index + 1}`, code));
  compile("Opt-in loading and membership", blocks("guides/self-opt-in.md")[0]);
  const gettingStarted = blocks("README.md");
  compile("Getting started: Boolean", gettingStarted[0]);
  compile("Getting started: feedback", gettingStarted[2]);
  const next = blocks("supported-languages/next.js.md");
  compile("Next.js singleton", next[0]);
  compile("Next.js server action", next[1], false, {
    "@/app/reflag": next[0],
    "@/app/auth":
      'import type { Context } from "@reflag/node-sdk"; export async function getContext(): Promise<Context> { return {}; }',
  });
  compile("Next.js Pages router", next[2], false, {
    "@/app/reflag": next[0],
    "@/app/auth":
      'import type { Context } from "@reflag/node-sdk"; export async function getContext(): Promise<Context> { return {}; }',
  });
  compile("Next.js client", next[3]);
  compile(
    "Vue v2 declaration guard",
    `import { useFlag } from "@reflag/vue-sdk";\nconst enabled: boolean = useFlag("huddle").value;\nconst count: number = useFlag("settings", { maxItems: 10 }).value.maxItems;\n// @ts-expect-error Vue returns a ref of the direct value, not a flag wrapper.\nuseFlag("huddle").isEnabled;\n// @ts-expect-error Ref contents are not any.\nconst invalid: string = useFlag("settings", { maxItems: 10 }).value.maxItems;\n`,
  );
  compile(
    "v1 declaration guard",
    `import { useFlag } from "@reflag/react-sdk";\nconst enabled: boolean = useFlag("huddle").isEnabled;\n// @ts-expect-error Reject any-shaped declarations.\nconst invalid: number = useFlag("huddle").isEnabled;\n`,
    true,
  );
  compile(
    "v2 declaration guard",
    `import { useFlag, useFlagSuspense } from "@reflag/react-sdk";\nimport { ReflagClient } from "@reflag/node-sdk";\nconst enabled: boolean = useFlag("huddle");\nconst count: number = useFlag("settings", { maxItems: 10 }).maxItems;\nconst suspended: boolean = useFlagSuspense("huddle");\n// @ts-expect-error No wrapper API in v2.\nuseFlag("huddle").isEnabled;\n// @ts-expect-error Inferred fields are not any.\nconst invalid: string = useFlag("settings", { maxItems: 10 }).maxItems;\nconst client = new ReflagClient();\nconst serverEnabled: boolean = client.getFlag({}, "huddle");\n// @ts-expect-error Node returns a value, not a wrapper.\nclient.getFlag({}, "huddle").isEnabled;\n`,
  );
  console.log(
    `${snippets} documentation examples/declaration guards compiled with zero diagnostics.`,
  );
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}
