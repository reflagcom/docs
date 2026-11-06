# SDK versioning preview

Reviewable source for the React-only version-switching prototype. This is **not a documentation cutover or release announcement**. The root `SUMMARY.md`, generated `sdk/` tree, GitBook connection, and live site settings are unchanged.

## Layout

| Directory | GitBook content                  | Purpose                                             |
| --------- | -------------------------------- | --------------------------------------------------- |
| `v2/`     | JavaScript SDKs → v2 (candidate) | Direct values, separate tracking, explicit Suspense |
| `v1/`     | JavaScript SDKs → v1 (legacy)    | Boolean wrappers and flag-bound tracking            |
| `shared/` | Shared docs, one variant         | One current, v2-only example; no legacy tabs        |

`gitbook-docs.yaml` expresses the native section/variant layout. Each mapped directory has its own `.gitbook.yaml` and `SUMMARY.md`. Overview and reference paths match across SDK versions; `v2/suspense.md` intentionally has no v1 equivalent. These are small test pages, **not full generated SDK references**. Canonical SDK README/reference changes still belong in [reflagcom/javascript](https://github.com/reflagcom/javascript), not handwritten edits to generated files here.

## GitBook boundary

The configuration is deliberately **not at the repository root**. GitBook reads it only if its Git Sync **Project directory** is explicitly set to `previews/sdk-versioning`. This PR does not set up or change Git Sync, and it does not create a site.

**Do not point the live Reflag site at this directory.** It contains only the fixture, not the existing documentation. Its `sdk-preview-*` keys are fixture identities, not replacements for production space keys. Before a real-site migration, export the existing content mapping and preserve its keys, space identities, pages, and URLs. Changing a space key replaces that space; changing the key back does not restore it.

A GitHub PR is not evidence that a GitBook content change request isolates site-wide settings. Previewing this mapping on the real site still requires a verified, non-publishing configuration workflow. No automatic GitBook preview for this PR is claimed.

References: [content configuration](https://gitbook.com/docs/docs-as-code/git-sync/content-configuration), [monorepos](https://gitbook.com/docs/docs-as-code/git-sync/monorepos), [native variants](https://gitbook.com/docs/manage-your-site/site-structure/variants).

## Checks

With Node 24 and Yarn 4.10.3:

```sh
cd previews/sdk-versioning
yarn install --immutable
yarn test
```

The check validates the YAML against GitBook's published schema, the SDK-only variant boundary, defaults, self-contained content roots, navigation links/anchors, and intentionally unmatched pages. Schema validation needs network access to `https://api.gitbook.com/gitbook-docs.yaml`.

To compile all six TSX snippets, build a separate checkout of JavaScript SDK candidate commit `9f3a0ae027e386747a2d4cf7683a68dcab70b355`:

```sh
# In that SDK checkout, using its own lockfile:
yarn install --immutable
yarn workspace @reflag/flag-evaluation build
yarn workspace @reflag/node-sdk build
yarn workspace @reflag/browser-sdk build
yarn workspace @reflag/react-sdk build

# Back in this preview directory:
yarn check:examples /absolute/path/to/the/sdk-checkout
```

The compiler resolves v1 from the SDK checkout's published React Native dependencies (React/Browser 1.7.0), and v2 from its built workspace declarations (2.0.0-next.0). Negative type guards reject accidentally-`any` declarations and v2 flag wrappers. The PR workflow runs both the layout tests and all six example checks, building that exact candidate commit. It has read-only repository permissions and does not publish anything. This is source-declaration validation, not final packed-release or deployed-server acceptance.

## Browser observations and remaining gates

The earlier unpublished native fixture passed desktop/mobile overview and reference switching, SDK-local version retention, and a shared section without a picker. That manual test does **not** establish that this new Git Sync configuration has been imported or rendered.

Observed limitations to recheck after import:

- Switching preserves equivalent pages but clears even a shared fragment such as `#useflag`.
- A missing page falls back to the destination variant's homepage. In this React-only fixture that is the React overview; nearest-package fallback in a complete multi-SDK space is unverified.
- Leaving the SDK section and returning opens its default v2 overview, not the last selected v1 page.
- Default-section/variant aliases can omit path prefixes. The YAML paths are fixture paths, not a final public routing or redirect specification.

The full shared-page conversion, published-v1 archive, generated v2 references, CLI 2 documentation, legacy URL preservation, and release-aware publisher remain separate work. In particular, the current JavaScript publisher deletes/replaces the entire generated `sdk/` tree after any package publication. Keeping this fixture outside that tree protects the prototype, **not the eventual production migration**. Fix the publisher before v2 reaches main, and hold any live documentation cutover for matching SDK/CLI artifacts and server/snapshot readiness.
