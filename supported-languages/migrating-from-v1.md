---
description: Upgrade Browser, React, Vue and Node.js integrations from protocol v1 to v2.
---

# Migrating from v1

Protocol v2 is a **breaking change** for the Browser, React, Vue and Node.js SDKs. The main SDK pages and shared guides show v2; complete [legacy v1 documentation](../legacy/v1/README.md) remains available.

{% hint style="warning" %}
The current v2 pages document `2.0.0-next.0` SDK sources. Until stable v2 packages are published, use the exact prerelease SDK/CLI versions supplied for your rollout. Do not assume an unversioned install or an `@next` tag installs v2; the `@2` commands below require a published major 2.
{% endhint %}

## Choose a compatible toolchain

| Component | Protocol v1 | Protocol v2 |
| --- | --- | --- |
| Browser / React / Vue / Node.js SDK | Package major 1 | Package major 2 |
| Generated declarations | CLI 1, wrapper-shaped schemas | Compatible CLI 2, direct-value schemas |
| Bootstrap | V1 server and client SDKs | V2 server and client SDKs; `protocolVersion: 2` |
| Node fallback snapshots | V1 snapshots | Complete v2 collection snapshots |
| React Native / OpenFeature / Management | Follow each package's documentation | Not automatically upgraded by this migration |

Coordinate the required server protocol, SDKs, generated declarations and authored flag values. A server rollout does not itself publish SDK packages or convert legacy remote config.

Once stable v2 packages are available, update the SDKs your application uses:

```sh
# Choose the SDKs used by your application.
npm install @reflag/browser-sdk@2
npm install @reflag/react-sdk@2
npm install @reflag/vue-sdk@2
npm install @reflag/node-sdk@2

# If you generate flag types:
npm install --save-dev @reflag/cli@2
```

Update your lockfile and regenerate declarations before checking the code changes below.

## 1. Read values directly

### Browser and Node.js

```ts
// v1
const { isEnabled } = boundClient.getFlag("new-editor");

// v2: Browser client or context-bound Node client
const enabled = boundClient.getFlag("new-editor");
const settings = boundClient.getFlag("editor-settings", { maxItems: 10 });
```

On the unbound Node client, pass context first:

```ts
const enabled = client.getFlag(context, "new-editor");
const settings = client.getFlag(context, "editor-settings", { maxItems: 10 });
```

### React

```tsx
// v1
const { isEnabled } = useFlag("new-editor");

// v2
const enabled = useFlag("new-editor");
const settings = useFlag("editor-settings", { maxItems: 10 });
```

### Vue

```ts
// v1
const { isEnabled } = useFlag("new-editor");

// v2
const enabled = useFlag("new-editor");
// enabled.value in script; refs unwrap automatically in templates
const settings = useFlag("editor-settings", { maxItems: 10 });
```

A bare singular read is Boolean with an implicit `false` fallback. Pass a positional JSON default for other values. Explicit `null` accepts arbitrary JSON, including authored null; narrow it before accessing fields. Valid `false`, `0` and empty strings are preserved. A non-null default checks the selected value's top-level category, not its nested schema.

`getFlags()` now returns a direct-value record and registers checks for the returned roots. Use diagnostic APIs for inspection without application checks; do not consume diagnostic result objects as the ordinary getter contract.

## 2. Migrate remote config explicitly

There is no v2 `.config.key` / `.config.payload` wrapper. Author a Multivariate flag with the values your application needs and read it with a positional default. Legacy remote config is **not automatically converted** by installing v2.

If access and configuration are independent, keep a Boolean access flag and a separate settings flag. Do not use JavaScript truthiness of arbitrary JSON as an access check. See [Remote config](../product-handbook/remote-config.md).

## 3. Separate usage tracking and feedback

React and Vue use their dedicated hooks/composables rather than methods returned by `useFlag()`:

```ts
const track = useTrack();
const requestFeedback = useRequestFeedback();
track("Document created");
requestFeedback({ flagKey: "new-editor", title: "How is the new editor?" });
```

In Browser and Node.js, use the ordinary client or context-bound client tracking methods. Browser feedback uses the client's feedback methods. Calling a v2 getter registers a check immediately; it no longer waits for a wrapper property to be read. Tracking product usage remains a separate action.

## 4. Update loading and Suspense

- React `useFlag()` never suspends. Use `useFlagSuspense()` for a suspending read, or `useIsLoading()` / the provider's `loadingComponent` for loading presentation.
- React's second `useFlag()` argument is the fallback value, not `{ suspense: ... }` options.
- Vue returns a ref containing the direct value; use `useIsLoading()` or the provider's loading slot for loading presentation.
- Opt-in lists retain their own presentation/membership metadata, including `isEnabled`. Those fields are not ordinary getter wrappers.

## 5. Upgrade bootstrap and saved state together

Generate bootstrap with Node SDK v2 and pass the **entire** envelope to Browser, React or Vue SDK v2. Do not pass only its `flags` property. Never expose secret keys or server-only attributes in the public envelope.

V1 and v2 bootstrap formats are incompatible. Do not feed Node v2 bootstrap into React Native or another consumer still using v1. Browser cache/override keys and built-in Node fallback storage are version-isolated. Existing v1 fallback snapshots must not be relabeled as v2: restore a valid complete v2 snapshot or fetch one from the compatible service.

## 6. Regenerate types and review overrides

Regenerate wrapper-shaped declarations with a compatible CLI 2. Direct-value defaults already provide useful inference without generation; see [Type safety](../product-handbook/type-safety.md) for optional schema registration.

Overrides and static fallback values are direct JSON values. In Browser SDK v2, `undefined` clears an override while `null` is a real value. Review your offline and disruption tests against the new contracts before upgrading production.

## SDK documentation

| SDK | Current v2 | Legacy v1 |
| --- | --- | --- |
| Browser | [Guide](browser-sdk/README.md) · [Reference](browser-sdk/globals.md) | [Guide](../legacy/v1/browser-sdk/README.md) · [Reference](../legacy/v1/browser-sdk/globals.md) |
| React | [Guide](react-sdk/README.md) · [Reference](react-sdk/globals.md) | [Guide](../legacy/v1/react-sdk/README.md) · [Reference](../legacy/v1/react-sdk/globals.md) |
| Vue | [Guide](vue-sdk/README.md) · [Reference](vue-sdk/globals.md) | [Guide](../legacy/v1/vue-sdk/README.md) · [Reference](../legacy/v1/vue-sdk/globals.md) |
| Node.js | [Guide](node-sdk/README.md) · [Reference](node-sdk/globals.md) | [Guide](../legacy/v1/node-sdk/README.md) · [Reference](../legacy/v1/node-sdk/globals.md) |
