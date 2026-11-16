---
description: Upgrade Browser, React, Vue and Node.js integrations from protocol v1 to v2.
---

# Migrating from v1

Version 2 of the Browser, React, Vue and Node.js SDKs changes how you read flags, and includes breaking changes. The [v1 documentation](../legacy/v1/README.md) is still available.

## What changes

- **Flags return their value directly.** `useFlag("new-editor")` returns `true` or `false` instead of `{ isEnabled }`.
- **Remote config is a Multivariate flag.** Pass a default and get the value back, instead of reading `.config.payload`.
- **Tracking and feedback are separate.** They have their own hooks and client methods instead of being returned with a flag.
- **React's `useFlag()` no longer suspends.** Use `useFlagSuspense()` when you want Suspense.
- **v1 bootstrap data, fallback snapshots and generated types don't work with v2.** Regenerate them.

React Native, OpenFeature and the Management SDK are released separately and aren't covered by this guide.

## Upgrade the packages

{% hint style="warning" %}
These pages document the `2.0.0-next.0` prerelease. Until stable v2 packages are published, install the exact prerelease versions you were given: an unversioned install or the `@next` tag may not give you v2. The `@2` commands below work once v2 is published.
{% endhint %}

Update the SDKs your application uses:

```sh
# Choose the SDKs used by your application.
npm install @reflag/browser-sdk@2
npm install @reflag/react-sdk@2
npm install @reflag/vue-sdk@2
npm install @reflag/node-sdk@2

# If you generate flag types:
npm install --save-dev @reflag/cli@2
```

Then work through the steps below.

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

Without a default, a read returns a Boolean: `false` if the flag is missing. Pass a default to read any other value; the return type follows the default. Pass `null` to accept any JSON value and narrow it yourself.

`getFlags()` now returns a record of values, such as `{ "new-editor": true }`.

## 2. Migrate remote config explicitly

v2 has no `.config` property. Create a Multivariate flag with the values your application needs, and read it with a default:

```ts
// v1
const { config } = useFlag("editor-settings");
const maxItems = config.payload?.maxItems ?? 10;

// v2
const { maxItems } = useFlag("editor-settings", { maxItems: 10 });
```

Existing remote config is **not converted automatically**. If a v1 flag controlled both access and configuration, split it into a Boolean flag for access and a Multivariate flag for the settings. See [Remote config](../product-handbook/remote-config.md).

## 3. Separate usage tracking and feedback

React and Vue use their dedicated hooks/composables rather than methods returned by `useFlag()`:

```ts
const track = useTrack();
const requestFeedback = useRequestFeedback();
track("Document created");
requestFeedback({ flagKey: "new-editor", title: "How is the new editor?" });
```

In Browser and Node.js, call `track()` and the feedback methods on the client. Either way, you name the event you track; configure your flag's adoption rules to match it.

## 4. Update loading and Suspense

- React `useFlag()` never suspends. Use `useFlagSuspense()` for a suspending read, or `useIsLoading()` / the provider's `loadingComponent` for loading presentation.
- React's second `useFlag()` argument is the fallback value, not `{ suspense: ... }` options.
- Vue returns a ref containing the direct value; use `useIsLoading()` or the provider's loading slot for loading presentation.
- `useOptInFlags()` is unchanged: its entries still include `isEnabled` and the opt-in fields.

## 5. Upgrade bootstrap and saved state together

Generate bootstrap data with Node.js SDK v2 and pass the whole object returned by `getFlagsForBootstrap()` to Browser, React or Vue SDK v2, not just its `flags` property.

v1 and v2 bootstrap data aren't compatible, so upgrade the server and client SDKs together. Anything still on v1, such as React Native, needs bootstrap data from Node.js SDK v1.

Saved state doesn't carry over. The Browser SDK starts with a fresh cache and no overrides, and Node.js fallback providers store v2 snapshots separately from v1 ones. Let a v2 process fetch flags once to save a new snapshot; don't rename v1 snapshot files.

## 6. Regenerate types and review overrides

Regenerate flag types with CLI 2. Generated types are optional in v2, because the default you pass already determines the return type. See [Type safety](../product-handbook/type-safety.md).

Overrides and static fallback values are now plain values, such as `true` or `{ maxItems: 5 }`. In the Browser SDK, `undefined` removes an override, while `null` sets the value to `null`. Run your offline and outage tests against v2 before upgrading production.

## SDK documentation

| SDK | Current v2 | Legacy v1 |
| --- | --- | --- |
| Browser | [Guide](browser-sdk/README.md) · [Reference](browser-sdk/globals.md) | [Guide](../legacy/v1/browser-sdk/README.md) · [Reference](../legacy/v1/browser-sdk/globals.md) |
| React | [Guide](react-sdk/README.md) · [Reference](react-sdk/globals.md) | [Guide](../legacy/v1/react-sdk/README.md) · [Reference](../legacy/v1/react-sdk/globals.md) |
| Vue | [Guide](vue-sdk/README.md) · [Reference](vue-sdk/globals.md) | [Guide](../legacy/v1/vue-sdk/README.md) · [Reference](../legacy/v1/vue-sdk/globals.md) |
| Node.js | [Guide](node-sdk/README.md) · [Reference](node-sdk/globals.md) | [Guide](../legacy/v1/node-sdk/README.md) · [Reference](../legacy/v1/node-sdk/globals.md) |
