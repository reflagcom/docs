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

# React Native SDK

React Native client library for [Reflag.com](https://reflag.com).

`@reflag/react-native-sdk` is a thin wrapper around `@reflag/react-sdk` that
wires up AsyncStorage by default. The API surface is the same (provider + hooks).

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

## Reference

The React Native SDK shares its API with the React SDK. Use the React SDK
reference for full types and details:

- [React SDK Reference](../sdk/@reflag/react-sdk/globals.md)

## Example

An Expo example app lives at `packages/react-native-sdk/dev/expo` in the
JavaScript SDK repo.
