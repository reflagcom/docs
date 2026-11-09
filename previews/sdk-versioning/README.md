# Generated SDK versioning preview

This branch now contains the **full generated Node, Browser, React and Vue SDK documentation** for v1 and the v2 candidate, rather than the earlier React-only samples. SDK READMEs and source comments in **[reflagcom/javascript](https://github.com/reflagcom/javascript)** remain authoritative. Do not hand-edit generated SDK pages here.

This is an SDK preview, **not the complete production-site migration**. The branch incorporates the site's latest export from `main` and preserves its existing documentation space, navigation and content. Shared-v2 conversion, release readiness and routing acceptance remain separate cutover gates.

## GitBook configuration

The repository-root `gitbook-docs.yaml` now starts from the user's site-wide export on `main`:

- **Documentation** is the default section. It wraps the existing **`space-1`** space without changing its title, `reflag-docs` path, default status or repository-root (`/`) content directory.
- **JavaScript SDKs** is a separate, non-default section at `javascript-sdks`. Its native variants map **`sdk-preview-v2`** to `./previews/sdk-versioning/v2` and **`sdk-preview-v1`** to `./previews/sdk-versioning/v1`. V2 is the default only within this SDK section.
- The one-page shared sample is **not** substituted for the real documentation space. The new SDK URL namespace avoids repurposing the existing generated `sdk/` paths; actual URL behavior still requires browser verification.

GitBook does not allow sections alongside top-level spaces, which is why the existing space needs the Documentation wrapper. Its stable `space-1` key is retained. GitBook matches spaces by `key`, not title/path/directory; new SDK keys must not replace the existing production key.

The root **v2-only `.gitbook.yaml` fallback has been replaced with explicit repository-root defaults**: `root: ./`, `structure.readme: README.md`, and `structure.summary: SUMMARY.md`. This keeps the real space mapped to `/` on its existing homepage/navigation instead of the generated v2 directory. Removing the root configuration entirely produced a successful GitBook status but a revision preview with missing pages; the explicit configuration is being checked against the renderer rather than relying on schema validation alone.

The nested `previews/sdk-versioning/gitbook-docs.yaml` remains a **standalone fixture** with the same SDK subtree identity keys, its separate shared sample and a v2-only individual-space fallback. It is not the root production-compatible mapping. Each SDK space has its own `.gitbook.yaml` and complete `SUMMARY.md`, with equivalent package/reference paths across versions.

This PR changes the branch mapping only. It does not create sites, change GitBook's configured repository/branch/sync direction, merge or publish to `main`, or prove that PR previews isolate site-wide settings. The exported mapping proves the real existing space key; it does not prove that a PR preview will activate the added SDK structure. Individual-space revision previews still cannot supply a native variant selector. Do not change live settings or merge just to make the preview picker appear.

References: [content configuration](https://gitbook.com/docs/docs-as-code/git-sync/content-configuration), [monorepos](https://gitbook.com/docs/docs-as-code/git-sync/monorepos), [native variants](https://gitbook.com/docs/manage-your-site/site-structure/variants).

## Source versions and generated ownership

| Variant | Source checkout                            | Package versions                           |
| ------- | ------------------------------------------ | ------------------------------------------ |
| v1      | `b4fe5b3d9386b87c6546175c323862d9878e1430` | Node 1.8.3; Browser/React 1.7.4; Vue 1.5.7 |
| v2      | `9f3a0ae027e386747a2d4cf7683a68dcab70b355` | Node/Browser/React/Vue 2.0.0-next.0        |

The v1 checkout is Node's published `@reflag/node-sdk@1.8.3` tag. Browser/React/Vue package trees were verified identical to their respective published tags at `70b7fbe7e65e95e7bce5ccad64400b0c3e06f63c`. V2 is an **unreleased source candidate**, not a packed or deployed acceptance claim. Native/OpenFeature/Management are not included in this coordinated selector. CLI 2's separate local work is not presented as released documentation.

Each variant includes four generated README/reference pairs, Browser feedback, and referenced media. `generated-manifest.json` records source commit, actual package versions and output hashes. The importer copies output from the JavaScript repository's canonical `docs.sh` build and only applies version/source banners, major-pinned installation commands, README-link routing, the existing TypeDoc property-anchor normalization and trailing-whitespace cleanup inside generated code blocks. It never copies the mixed all-package index, deletes content, or overwrites navigation, landing pages, another variant or the original `sdk/` tree.

## Reproduce and check

Build each **clean** source checkout with its own immutable dependencies. For v1:

```sh
yarn install --immutable
yarn workspace @reflag/browser-sdk build
yarn workspace @reflag/react-sdk build
yarn workspace @reflag/node-sdk build
yarn workspace @reflag/vue-sdk build
yarn exec bash ./docs.sh
```

For v2, first build `@reflag/flag-evaluation`, then Node, Browser, React and Vue, followed by `yarn exec bash ./docs.sh`. Bash is explicit because the published v1 source declares `/bin/sh` but contains `[[`.

From the docs repository root, regenerate only the owned copies:

```sh
node .github/scripts/import-sdk-docs.mjs --source /path/to/built-v1 --destination previews/sdk-versioning/v1 --major 1
node .github/scripts/import-sdk-docs.mjs --source /path/to/built-v2 --destination previews/sdk-versioning/v2 --major 2
```

Add `--check` to compare without writing. Then:

```sh
cd previews/sdk-versioning
yarn install --immutable
yarn test
yarn check:examples /path/to/built-v2 /path/to/built-v1
```

Checks validate both mappings against GitBook's published schema, preserve the exported production `space-1` mapping and default, match the SDK subtree identities/content, require the repository-root homepage/navigation instead of the v2-only fallback, and verify generated hashes, complete navigation, equivalent SDK paths, local files/assets/anchors and negative controls. CI independently rebuilds both exact source checkouts and verifies the generated copies. Six original React smoke examples are retained under `scripts/fixtures` plus the shared sample and compiled against matching real 1.7.4/2.0.0-next.0 declarations with anti-`any`/wrapper guards. This is **not** a claim that every partial example in every generated reference was compiled independently.

## Rendering and remaining work

The earlier manual native fixture established equivalent-page switching and mobile picker behavior, but **does not validate rendering of this new full generated project**. Recheck after GitBook sync: Node/Browser/React/Vue overview/reference switching, feedback links/media, mobile layout and shared-section isolation. Previously observed native limitations were cleared fragments, missing pages falling back to the destination variant home, and section reentry opening the default v2 home.

The release-scoped automatic publisher remains a separate JavaScript-repository workstream. It must retain SDK READMEs/source comments as the source of truth, use actual published packages/versions, and preserve other majors and independent SDKs. Full shared-v2 conversion, legacy-route verification, GitBook identity/routing acceptance, matching SDK/CLI artifacts and server/snapshot readiness remain cutover gates. Nothing here authorizes publication or a production mapping change.
