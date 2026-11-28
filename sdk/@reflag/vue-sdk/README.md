---
layout:
  visible: true
title:
  visible: true
description:
  visible: false
tableOfContents:
  visible: true
outline:
  visible: true
pagination:
  visible: true
---

# Reflag Vue SDK <a href="#reflag-vue-sdk" id="reflag-vue-sdk"></a>

Feature flags, remote configuration, usage tracking and feedback for Vue 3 applications. Built on the [Browser SDK](../../../supported-languages/browser-sdk/README.md).

This page covers SDK v2.

## Get started <a href="#get-started" id="get-started"></a>

### 1. Add the provider <a href="#1-add-the-provider" id="1-add-the-provider"></a>

Install the SDK:

```sh
npm install @reflag/vue-sdk
```

Wrap your application in `ReflagProvider` with your **publishable** key and the signed-in user's context:

```vue
<script setup lang="ts">
import { ReflagProvider } from "@reflag/vue-sdk";
</script>

<template>
  <ReflagProvider
    publishable-key="your-publishable-key"
    :context="{
      user: { id: 'alice' },
      company: { id: 'acme', plan: 'enterprise' },
    }"
  >
    <template #loading>Loading flags…</template>
    <App />
  </ReflagProvider>
</template>
```

In Nuxt, wrap the provider in `<ClientOnly>`.

### 2. Create a flag <a href="#2-create-a-flag" id="2-create-a-flag"></a>

Create a flag with the key `huddles` in the Reflag app.

### 3. Read the flag <a href="#3-read-the-flag" id="3-read-the-flag"></a>

Use `useFlag()` in any component:

```vue
<script setup lang="ts">
import { useFlag, useTrack } from "@reflag/vue-sdk";

const enabled = useFlag("huddles");
const track = useTrack();
</script>

<template>
  <button v-if="enabled" @click="track('Started huddle')">Start huddle</button>
</template>
```

## Read flags <a href="#read-flags" id="read-flags"></a>

`useFlag()` returns a ref that updates when the flag changes. Vue unwraps refs in templates; use `.value` in script.

Pass a flag key to check whether the flag is enabled:

```ts
const enabled = useFlag("huddles"); // ref of true or false
```

Pass a default as the second argument to read a configuration value. The default sets the expected JSON type:

```ts
const model = useFlag("model", "quick"); // ref of string
const settings = useFlag("huddle-settings", { maxParticipants: 10 }); // ref of { maxParticipants: number }
```

While flags load, or if the flag is missing or has a different JSON type, the ref holds your default. Without a default, it expects a Boolean and falls back to `false`. Pass `null` to allow any JSON value, then check its type before using it.

The SDK doesn't check object fields or fill in missing fields from your default.

Each read records a check, which Reflag uses for launch monitoring.

## Loading states <a href="#loading-states" id="loading-states"></a>

`useIsLoading()` returns a Boolean ref that is `true` while the provider loads flags. You can also put loading content in the provider's `#loading` slot, as in the example above.

## Track usage and feedback <a href="#track-usage-and-feedback" id="track-usage-and-feedback"></a>

```ts
const track = useTrack();
await track("Started huddle", { button: "cta" });

const requestFeedback = useRequestFeedback();
requestFeedback({ flagKey: "huddles", title: "How did it go?" });

const sendFeedback = useSendFeedback();
await sendFeedback({ flagKey: "huddles", score: 5 });
```

Configure your flag's adoption rules to match the event names you send. See the [Browser feedback documentation](../../../supported-languages/browser-sdk/feedback.md) to configure feedback prompts and the feedback UI.

## Update context <a href="#update-context" id="update-context"></a>

`useUpdateUser()`, `useUpdateCompany()` and `useUpdateOtherContext()` return functions that merge new attributes into the current context. To replace the whole context, call `useClient().setContext(context)`. Flag values are refetched for the new context.

## Bootstrap from the server <a href="#bootstrap-from-the-server" id="bootstrap-from-the-server"></a>

To render flags immediately, without waiting for a network request, evaluate them on your server with the **Node.js SDK**:

```ts
const flags = serverClient.getFlagsForBootstrap(context);
```

Then pass the whole result to `ReflagBootstrappedProvider`, serialized with your framework's usual mechanism:

```vue
<ReflagBootstrappedProvider :publishable-key="publishableKey" :flags="flags">
  <App />
</ReflagBootstrappedProvider>
```

Leave secrets and server-only attributes out of the context you bootstrap, because the browser can read it. Later refreshes evaluate flags using the browser's context. If values that depend on server-only attributes must not change, set `:enable-live-flag-updates="false"`.

## Let users opt in to flags <a href="#let-users-opt-in-to-flags" id="let-users-opt-in-to-flags"></a>

```ts
const { flags, isLoading } = useOptInFlags();
const setOptIn = useSetOptIn();

await setOptIn("huddles", { optedIn: true });
await setOptIn("huddles", { optedIn: false, scope: "company" });
```

Each entry includes the flag's `key`, `name`, `description` and whether the user or company has opted in. User and company opt-ins are independent. Check `isLoading` before rendering an empty state.

## Overrides and toolbar <a href="#overrides-and-toolbar" id="overrides-and-toolbar"></a>

The toolbar shows on `localhost` by default and lets you toggle Boolean flags for yourself. Use the `toolbar` prop to show it elsewhere, for example to internal users in production:

```vue
<ReflagProvider
  publishable-key="your-publishable-key"
  :context="context"
  :toolbar="user.isInternal"
>
  <App />
</ReflagProvider>
```

To override a flag from code, call `useClient().setFlagOverride(key, value)`. Pass `undefined` to remove the override.

## Use an existing client <a href="#use-an-existing-client" id="use-an-existing-client"></a>

`useClient()` returns the underlying Browser SDK client. If you already create a Browser SDK client yourself, pass it to `ReflagClientProvider`; your application is then responsible for initializing and stopping it.

## Events <a href="#events" id="events"></a>

`useOnEvent(type, handler)` subscribes to [client events](../../../supported-languages/browser-sdk/README.md) and unsubscribes when the component unmounts.

## Configuration <a href="#configuration" id="configuration"></a>

The provider accepts the Browser SDK's configuration options, such as `fallbackFlags`, `enableTracking`, `offline`, `feedback` and `logger`, as props. Live updates are on by default in Vue; set `:enable-live-flag-updates="false"` to turn them off. Set `debug` to log to the console.

For Content Security Policy requirements and the full list of options, see the [Browser SDK](../../../supported-languages/browser-sdk/README.md).

Using v1? [Legacy docs](../../../legacy/v1/vue-sdk/README.md) · [Upgrade guide](../../../supported-languages/migrating-from-v1.md).
