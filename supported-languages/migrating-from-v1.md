---
description: Upgrade Browser, React, React Native, Vue and Node.js integrations from SDK v1 to v2.
---

# Migrating from v1

Version 2 of the Browser, React, React Native, Vue and Node.js SDKs changes how you read flags, and includes breaking changes. The [v1 documentation](../legacy/v1/README.md) is still available.

## What changes

- **Flags return their value directly.** `useFlag("new-editor")` returns `true` or `false` instead of `{ isEnabled }`.
- **Move legacy Remote config to a new Multivariate flag.** Existing configs aren't converted automatically; read the new flag's value instead of `.config.payload`.
- **Tracking and feedback are separate.** They have their own hooks and client methods instead of being returned with a flag.
- **React's `useFlag()` no longer suspends.** Use `useFlagSuspense()` when you want Suspense.
- **v1 bootstrap data, fallback snapshots and generated types can't be reused in v2.** Rebuild snapshots and regenerate types.

For mobile rollouts, see [React Native](#react-native). OpenFeature and the Management SDK aren't covered by this guide.

## Upgrade with a coding assistant

Share this guide with your assistant and start with this prompt:

> Help me upgrade this project from Reflag SDK v1 to v2. Inspect the SDK versions, flag reads, generated types, and any server bootstrap code. Before making changes, ask me: **Do older app versions, including installed mobile builds, or already-open browser tabs need to keep working during rollout or rollback?** Wait for my answer; don't assume a release updates every client. If I say no, propose a coordinated upgrade. If I say yes or I'm not sure, plan to keep v1 clients working. For apps that bootstrap flags from the server, keep separate v1 and v2 snapshots and let v2 clients fetch if their snapshot is missing. If the app still reads legacy Remote config, follow the [Remote config migration prompt](../product-handbook/multivariate-flags.md#using-an-ai-agent) as part of the upgrade. Show me the plan and ask for approval before editing code or changing flag configuration.

## Upgrade the packages

{% hint style="warning" %}
These pages cover SDK v2. Until stable v2 packages are published, pin the exact prerelease version for each package you use. Each `@2` command below works once stable v2 is published for that package.
{% endhint %}

Update the SDKs your application uses:

```sh
# Choose the SDKs used by your application.
npm install @reflag/browser-sdk@2
npm install @reflag/react-sdk@2
npm install @reflag/react-native-sdk@2
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

Without a default, a read expects a Boolean and returns `false` if the flag is missing or has another JSON type. Pass a default to read another type of value. Pass `null` to allow any JSON value, then check its type before using it.

`getFlags()` now returns an object mapping flag keys to values, such as `{ "new-editor": true }`.

## 2. Migrate remote config explicitly

v2 has no `.config` property. Create a Multivariate flag with a new key and shape its value around what your app reads. Use a single value for one setting or a flat object with meaningful field names for related settings. You don't need the old `{ key, payload }` wrapper. Read the new value with a default:

```ts
// v1
const { config } = useFlag("editor-settings");
const maxItems = config.payload?.maxItems ?? 10;

// v2
const { maxItems } = useFlag("editor-config", { maxItems: 10 });
```

Existing remote config is **not converted automatically**. If a v1 flag controlled both access and configuration, keep the existing Boolean flag for access and use the new Multivariate flag for settings. Follow the [Remote config migration steps](../product-handbook/multivariate-flags.md#migrating-from-remote-config).

## 3. Separate usage tracking and feedback

React and Vue use their dedicated hooks/composables rather than methods returned by `useFlag()`:

```ts
const track = useTrack();
const requestFeedback = useRequestFeedback();
track("Document created");
requestFeedback({ flagKey: "new-editor", title: "How is the new editor?" });
```

In Browser and Node.js, call `track()` on the client. For Browser feedback, use `requestFeedback()` to open the form or `feedback()` to send a response. Configure your flag's adoption rules to match the event names you track.

## 4. Update loading and Suspense

- React `useFlag()` never suspends. Use `useFlagSuspense()` for a suspending read, or `useIsLoading()` / the provider's `loadingComponent` for loading presentation.
- React's second `useFlag()` argument is the fallback value, not `{ suspense: ... }` options.
- Vue returns a ref containing the direct value; use `useIsLoading()` or the provider's loading slot for loading presentation.
- `useOptInFlags()` is unchanged: its entries still include `isEnabled` and the opt-in fields.

## 5. Upgrade bootstrap and saved state together

Bootstrap data must use the same protocol version as the client SDK. Pass the whole object returned by `getFlagsForBootstrap()` to the client, not just its `flags` property.

### Run both Node SDK versions during a rolling upgrade

If old browser bundles or installed mobile builds can still make requests, keep the existing v1 field (here, `flags`) and add a separate `flagsV2` field. Install v2 normally, and install Node.js SDK v1 under an alias. Use 1.8.4 or later, which keeps secret flags out of bootstrap data:

```sh
npm install @reflag/node-sdk@2 @reflag/node-sdk-v1@npm:@reflag/node-sdk@^1.8.4
```

On the server, initialize both clients once at startup with the same `REFLAG_SECRET_KEY`. Build the context from the authenticated user's session, using only attributes the client can see.

Use v2 for normal server reads and tracking, and v1 only to build the legacy snapshot. The helper below turns off tracking for the v1 call so users and companies aren't synced twice, without changing how old clients track.

```ts
import { ReflagClient as ReflagV1 } from "@reflag/node-sdk-v1";
import { ReflagClient as ReflagV2, type ContextWithTracking } from "@reflag/node-sdk";

const v1 = new ReflagV1();
const v2 = new ReflagV2();

export async function initializeFlags() {
  await Promise.all([v1.initialize(), v2.initialize()]);
}

function getLegacyBootstrap(context: ContextWithTracking) {
  const snapshot = v1.getFlagsForBootstrap({ ...context, enableTracking: false });
  return {
    ...snapshot,
    context: { ...snapshot.context, enableTracking: context.enableTracking ?? true },
  };
}

export function getBootstrapData(context: ContextWithTracking) {
  return {
    flags: getLegacyBootstrap(context),
    flagsV2: v2.getFlagsForBootstrap(context),
  };
}
```

1. **Deploy the server first.** Add `flagsV2` wherever you already send bootstrap data (HTML or API), without changing `flags`. Use your framework's safe serializer when embedding data in HTML. The secret key stays on the server.
2. **Deploy the v2 client.** Old clients continue reading `flags`. New clients read only `flagsV2`: for example, pass it to React, React Native or Vue's `ReflagBootstrappedProvider` as `flags`, or to the Browser SDK as `bootstrappedState`. If `flagsV2` is missing (for example, after a server rollback), fetch flags with the v2 SDK and your publishable key instead. Don't pass `flags` to the v2 SDK.
3. **Remove the bridge when it's no longer needed.** Once no supported clients need v1 bootstrap data and you no longer need to roll back to a v1 client, remove the v1 alias, client, helper and `flags` field. The v2 bootstrap and tracking code stays the same.

### Replace saved state

Saved state doesn't carry over. The Browser SDK starts with a fresh cache and no overrides, and Node.js fallback providers store v2 snapshots separately from v1 ones. Let a v2 process fetch flags once to save a new snapshot; don't rename v1 snapshot files.

## 6. Regenerate types and review overrides

If you generate flag types, use CLI v2, rerun `reflag flags types` and replace the old declarations. Don't keep v1 and v2 declarations in the same project. You don't need types for the `@reflag/node-sdk-v1` alias. See [Type safety](../product-handbook/type-safety.md).

Overrides and static fallback values are now plain values, such as `true` or `{ maxItems: 5 }`. In the Browser SDK, `undefined` removes an override, while `null` sets the value to `null`. Run your offline and outage tests against v2 before upgrading production.

## React Native

`@reflag/react-native-sdk` `0.3.x` works with SDK v1. The v2 package requires React 17 or later. Follow the React examples above, but keep importing your provider and hooks from `@reflag/react-native-sdk`.

For React Native, choose the `react` format when generating flag types with CLI v2. Set `"format": "react"` in `reflag.config.json` and replace the old declarations. If TypeScript can't resolve `@reflag/react-sdk` from the generated file, add it as a direct dependency at the same version the Native SDK uses.

A store release doesn't update every installed app. Keep the existing Boolean flags and legacy Remote config available for the older builds you still support. If your app fetches flags with `ReflagProvider`, you don't need a server bootstrap change. If it receives snapshots from your backend, [keep separate v1 and v2 snapshots](#run-both-node-sdk-versions-during-a-rolling-upgrade) and let v2 clients fetch when their snapshot is missing.

Test on iOS and Android before rolling out: run old and new builds against the same environment, and check offline startup, flag defaults and refresh after resuming the app. See the [React Native SDK v2 guide](https://github.com/reflagcom/javascript/tree/main/packages/react-native-sdk#readme) for React Native-specific setup.

## SDK documentation

| SDK     | Current v2                                                           | Legacy v1                                                                                      |
| ------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Browser | [Guide](browser-sdk/README.md) · [Reference](browser-sdk/globals.md) | [Guide](../legacy/v1/browser-sdk/README.md) · [Reference](../legacy/v1/browser-sdk/globals.md) |
| React   | [Guide](react-sdk/README.md) · [Reference](react-sdk/globals.md)     | [Guide](../legacy/v1/react-sdk/README.md) · [Reference](../legacy/v1/react-sdk/globals.md)     |
| Vue     | [Guide](vue-sdk/README.md) · [Reference](vue-sdk/globals.md)         | [Guide](../legacy/v1/vue-sdk/README.md) · [Reference](../legacy/v1/vue-sdk/globals.md)         |
| Node.js | [Guide](node-sdk/README.md) · [Reference](node-sdk/globals.md)       | [Guide](../legacy/v1/node-sdk/README.md) · [Reference](../legacy/v1/node-sdk/globals.md)       |
