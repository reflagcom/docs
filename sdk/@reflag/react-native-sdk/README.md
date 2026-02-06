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

# Reflag React Native SDK

React Native client library for [Reflag.com](https://reflag.com).

This package is a thin wrapper around the Reflag React SDK. It uses the same API
surface (provider + hooks) and wires up AsyncStorage by default for React Native
persistence.

## Install

```shell
npm i @reflag/react-native-sdk
```

## Get started

### 1. Add the `ReflagProvider`

Wrap your app with the provider from `@reflag/react-native-sdk`:

```tsx
import { ReflagProvider } from "@reflag/react-native-sdk";

<ReflagProvider
  publishableKey="{YOUR_PUBLISHABLE_KEY}"
  context={{
    company: { id: "acme_inc", plan: "pro" },
    user: { id: "john doe" },
  }}
>
  {/* children here are shown when loading finishes */}
</ReflagProvider>;
```

### 2. Use `useFlag(<flagKey>)`

```tsx
import { useFlag } from "@reflag/react-native-sdk";

function StartHuddleButton() {
  const { isEnabled, track } = useFlag("huddle");

  if (!isEnabled) return null;

  return <Button title="Start huddle" onPress={track} />;
}
```

## Next steps

For type safety, remote config, and advanced usage, see the React SDK docs:

- [Reflag React SDK](../react-sdk/README.md)

## Example

An Expo example app lives at `packages/react-native-sdk/dev/expo` in the
JavaScript SDK repo.
