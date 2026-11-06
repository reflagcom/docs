const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { createRequire } = require("node:module");

const sdkRoot = process.argv[2] && path.resolve(process.argv[2]);
if (!sdkRoot)
  throw new Error("Usage: yarn check:examples /absolute/path/to/the/built-sdk-checkout");
const sdkRequire = createRequire(path.join(sdkRoot, "package.json"));
const ts = sdkRequire("typescript");
const reactTypes = path.dirname(sdkRequire.resolve("@types/react/package.json"));
const project = path.resolve(__dirname, "..");

function sdkPackage(base, name) {
  const requireFrom = createRequire(path.join(base, "package.json"));
  let dir = path.dirname(requireFrom.resolve(name));
  for (;;) {
    const file = path.join(dir, "package.json");
    if (fs.existsSync(file)) {
      const pkg = JSON.parse(fs.readFileSync(file, "utf8"));
      if (pkg.name === name) {
        const types = path.join(dir, pkg.types);
        assert(fs.existsSync(types), `Build declarations first: ${name}`);
        return { dir, version: pkg.version, types };
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) throw new Error(`Package not found: ${name}`);
    dir = parent;
  }
}

const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "reflag-docs-examples-"));
const reports = [];
try {
  for (const version of ["v1", "v2"]) {
    const react = sdkPackage(
      version === "v1" ? path.join(sdkRoot, "packages/react-native-sdk") : sdkRoot,
      "@reflag/react-sdk",
    );
    const browser = sdkPackage(react.dir, "@reflag/browser-sdk");
    const expected = version === "v1" ? "1.7.0" : "2.0.0-next.0";
    assert.equal(react.version, expected, "Wrong React SDK version");
    assert.equal(browser.version, expected, "Wrong Browser SDK version");
    const output = path.join(temporary, version);
    fs.mkdirSync(output);
    const files = [];
    for (const directory of version === "v2" ? [version, "shared"] : [version]) {
      for (const name of fs
        .readdirSync(path.join(project, directory))
        .filter((file) => file.endsWith(".md"))) {
        const markdown = fs.readFileSync(path.join(project, directory, name), "utf8");
        [...markdown.matchAll(/```tsx\r?\n([\s\S]*?)```/g)].forEach((match, index) => {
          const file = path.join(output, `${directory}-${name}-${index}.tsx`);
          fs.writeFileSync(file, match[1]);
          files.push(file);
        });
      }
    }
    assert.equal(files.length, version === "v1" ? 2 : 4, "Unexpected snippet coverage");
    const guard = path.join(output, "declaration-guard.tsx");
    fs.writeFileSync(
      guard,
      version === "v1"
        ? `import { useFlag } from '@reflag/react-sdk';
const flag = useFlag('huddle');
const enabled: boolean = flag.isEnabled;
// @ts-expect-error Reject accidentally-any declarations.
const invalid: number = flag.isEnabled;
void enabled; void invalid;
`
        : `import { useFlag, useFlagSuspense } from '@reflag/react-sdk';
const enabled: boolean = useFlag('huddle');
const selected = useFlag('huddle-settings', { maxParticipants: 10 });
const count: number = selected.maxParticipants;
const suspended: boolean = useFlagSuspense('huddle');
// @ts-expect-error V2 returns values, not wrappers.
useFlag('huddle').isEnabled;
// @ts-expect-error The inferred field is neither any nor string.
const invalid: string = selected.maxParticipants;
void enabled; void count; void suspended; void invalid;
`,
    );
    const program = ts.createProgram([...files, guard], {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      jsx: ts.JsxEmit.ReactJSX,
      strict: true,
      noEmit: true,
      skipLibCheck: true,
      types: [],
      baseUrl: sdkRoot,
      paths: {
        "@reflag/react-sdk": [react.types],
        "@reflag/browser-sdk": [browser.types],
        react: [path.join(reactTypes, "index.d.ts")],
        "react/jsx-runtime": [path.join(reactTypes, "jsx-runtime.d.ts")],
      },
    });
    const diagnostics = ts.getPreEmitDiagnostics(program);
    if (diagnostics.length) {
      console.error(
        ts.formatDiagnosticsWithColorAndContext(diagnostics, {
          getCanonicalFileName: (file) => file,
          getCurrentDirectory: () => project,
          getNewLine: () => "\n",
        }),
      );
      process.exitCode = 1;
    }
    reports.push({
      version,
      react: react.version,
      browser: browser.version,
      snippets: files.length,
      diagnostics: diagnostics.length,
    });
  }
  console.log(JSON.stringify(reports, null, 2));
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
