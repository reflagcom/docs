# Generated SDK versioning preview

This branch now contains the **full generated Node, Browser, React and Vue SDK documentation** for v1 and the v2 candidate, rather than the earlier React-only samples. SDK READMEs and source comments in **[reflagcom/javascript](https://github.com/reflagcom/javascript)** remain authoritative. Do not hand-edit generated SDK pages here.

This is an SDK preview, **not the complete production-site migration**. Existing product guides, original generated `sdk/` content and production navigation are not moved into this project. Do not merge its site mapping into production without preserving production identities and completing the shared-content/routing migration.

## GitBook configuration

The same preview structure is available in two project locations:

| Git Sync Project directory | Site mapping                                                                       |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Repository root            | `/gitbook-docs.yaml` maps the `previews/sdk-versioning/{v1,v2,shared}` directories |
| `previews/sdk-versioning`  | Its existing `gitbook-docs.yaml` maps `./v1`, `./v2`, `./shared`                   |

Both mappings retain the **same existing `sdk-preview-*` identity keys**. The JavaScript SDKs section has native **v2 (candidate)** and **v1 (legacy)** variants; the separate shared sample has no SDK version picker. Each space has its own `.gitbook.yaml` and complete `SUMMARY.md`. Package overview/reference paths align across versions.

For **individual-space Git Sync**, both project locations also have a `.gitbook.yaml` pointing to the complete generated v2 space. This makes actual SDK content visible when a space syncs this branch from the repository root. **Individual-space sync does not create a native variant selector**: that requires site-wide Git Sync/content mapping or variants configured in GitBook. No manual Markdown selector is being presented as a native one.

This PR does not create sites, configure Git Sync, publish, change the live default, or prove that PR previews isolate site-wide settings. The live Reflag space observed during preparation still reported `main`/individual-space sync; it was not changed. Check the intended preview's branch/project/scope if the variant picker is absent.

**Production identity warning:** these are preview identities, not replacements for live keys. GitBook matches spaces by `key`, not title/path/directory. Changing a live key replaces its space; changing it back does not restore the original. Export and preserve production keys, space IDs, content and URLs before any migration.

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

Checks validate both mappings against GitBook's published schema, matching root/nested identity maps, generated hashes, complete navigation, equivalent SDK paths, local files/assets/anchors, and negative controls. CI independently rebuilds both exact source checkouts and verifies the generated copies. Six original React smoke examples are retained under `scripts/fixtures` plus the shared sample and compiled against matching real 1.7.4/2.0.0-next.0 declarations with anti-`any`/wrapper guards. This is **not** a claim that every partial example in every generated reference was compiled independently.

## Rendering and remaining work

The earlier manual native fixture established equivalent-page switching and mobile picker behavior, but **does not validate rendering of this new full generated project**. Recheck after GitBook sync: Node/Browser/React/Vue overview/reference switching, feedback links/media, mobile layout and shared-section isolation. Previously observed native limitations were cleared fragments, missing pages falling back to the destination variant home, and section reentry opening the default v2 home.

The release-scoped automatic publisher remains a separate JavaScript-repository workstream. It must retain SDK READMEs/source comments as the source of truth, use actual published packages/versions, and preserve other majors and independent SDKs. Full shared-v2 conversion, legacy routes, production identity mapping, matching SDK/CLI artifacts and server/snapshot readiness remain cutover gates. Nothing here authorizes publication or a production mapping change.
