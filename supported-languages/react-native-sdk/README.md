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

{% hint style="info" %}
**Independent SDK compatibility.** This React Native release uses React/Browser protocol v1. Follow the [matching React documentation](../../legacy/v1/react-sdk/README.md) and use a [matching Node SDK](../../legacy/v1/node-sdk/README.md) for bootstrap. Do not pass protocol-v2 bootstrap into a v1 consumer.
{% endhint %}

# Reflag React Native SDK <a href="#reflag-react-native-sdk" id="reflag-react-native-sdk"></a>

A thin React Native wrapper around `@reflag/react-sdk`.

For more usage details, see the [React SDK README](../../legacy/v1/react-sdk/README.md).

An Expo example app lives in [packages/react-native-sdk/dev/expo](https://github.com/reflagcom/javascript/tree/b4fe5b3d9386b87c6546175c323862d9878e1430/packages/react-native-sdk/dev/expo).

## Get started <a href="#get-started" id="get-started"></a>

### Install <a href="#install" id="install"></a>

```shell
npm i @reflag/react-native-sdk
```

### 1. Add the ReflagProvider <a href="#1-add-the-reflagprovider" id="1-add-the-reflagprovider"></a>

Wrap your app with the provider from `@reflag/react-native-sdk`:

```tsx
import { ReflagProvider } from "@reflag/react-native-sdk";

<ReflagProvider
  publishableKey="{YOUR_PUBLISHABLE_KEY}"
  context={{
    user: { id: "user_123", name: "John Doe", email: "john@acmeinc.com" },
    company: { id: "company_123", name: "Acme, Inc", plan: "pro" },
  }}
>
  {/* children here are shown when loading finishes */}
</ReflagProvider>;
```

### 2. Use `useFlag(<flagKey>)` <a href="#2-use-useflagflagkey" id="2-use-useflagflagkey"></a>

```tsx
import { useFlag } from "@reflag/react-native-sdk";

function StartHuddleButton() {
  const { isEnabled, track } = useFlag("huddle");

  if (!isEnabled) return null;

  return <Button title="Start huddle" onPress={track} />;
}
```

See the [React SDK README](../../legacy/v1/react-sdk/README.md) for more details.

## React Native differences <a href="#react-native-differences" id="react-native-differences"></a>

- The Reflag toolbar is web-only and is not available in React Native.
- Built-in feedback UI is web-only. In React Native, use your own UI and call `useSendFeedback` or `client.feedback` when you're ready to send feedback.
- Live flag updates work out of the box. The React Native SDK bundles an SSE transport via `react-native-sse`, so no global `EventSource` shim is required.
- If you need custom SSE behavior, you can still override the transport by passing `eventSourceFactory` to `ReflagProvider` or `ReflagBootstrappedProvider`.

## Reference <a href="#reference" id="reference"></a>

The React Native SDK shares its API with the React SDK. Use the React SDK reference for full types and details:

[React SDK Reference](../../legacy/v1/react-sdk/README.md)

## Cookbook <a href="#cookbook" id="cookbook"></a>

### Refresh flags when the app returns to the foreground <a href="#refresh-flags-when-the-app-returns-to-the-foreground" id="refresh-flags-when-the-app-returns-to-the-foreground"></a>

Flags are updated if the context passed to `<ReflagProvider>` changes, but you might also want to update them when the app comes to the foreground.
See this snippet:

```tsx
import React, { useEffect, useRef } from "react";
import { AppState } from "react-native";
import { ReflagProvider, useClient } from "@reflag/react-native-sdk";

function AppStateListener() {
  const client = useClient();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        void client.refresh();
      }
      appState.current = nextAppState;
    });

    return () => subscription.remove();
  }, [client]);

  return null;
}

export function App() {
  return (
    <ReflagProvider publishableKey="{YOUR_PUBLISHABLE_KEY}">
      <AppStateListener />
      <MyApp />
    </ReflagProvider>
  );
}
```

## Suspense loading <a href="#suspense-loading" id="suspense-loading"></a>

Enable `<Suspense>` support by setting the `suspense` prop on the provider and wrap components that call `useFlag` in a Suspense boundary:

```tsx
import { Suspense } from "react";
import { ActivityIndicator } from "react-native";
import { ReflagProvider } from "@reflag/react-native-sdk";

<ReflagProvider publishableKey="{YOUR_PUBLISHABLE_KEY}" suspense>
  <Suspense fallback={<ActivityIndicator />}>
    <App />
  </Suspense>
</ReflagProvider>;
```

You can also override the behavior for one call with `useFlag("huddle", { suspense: true })`.

## Bootstrapping <a href="#bootstrapping" id="bootstrapping"></a>

You can use `<ReflagBootstrappedProvider>` in React Native when you already have pre-fetched flags and want to avoid an initial fetch.
Pass the full object returned by the Node SDK's `getFlagsForBootstrap()` directly as the provider's `flags` prop; it includes `context`, evaluated `flags`, and an optional `flagStateVersion`.

If you want live flag updates to continue working after bootstrapping, use a recent `@reflag/node-sdk` so `getFlagsForBootstrap()` includes `flagStateVersion`.

After bootstrapping, any live flag updates are fetched directly by the client SDK from Reflag using the client-visible context. If your bootstrapped snapshot depends on server-only or secret context that is not available in the app, later live refreshes may differ. In that case, keep `enableLiveFlagUpdates` disabled.

For bootstrap usage patterns and options, see the [React SDK bootstrapping docs](../../legacy/v1/react-sdk/README.md).
