# API reference

> SDK v2 / candidate. Unpublished navigation prototype.

## useFlag

`useFlag(key, defaultValue?)` returns a direct value. The second argument is payload data, not hook options. Bare or explicit-undefined reads return Boolean; explicit null requests arbitrary JSON.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function FlagStatus() {
  const enabled = useFlag("huddle");
  return <span>{enabled ? "Enabled" : "Disabled"}</span>;
}
```

Non-null defaults determine the result's top-level category and inferred type. Registered schemas check default compatibility, but selected values are not recursively schema-validated at runtime. This ordinary hook never suspends.

## useFlagSuspense

This v2-only anchor intentionally has no matching v1 heading. Use `useFlagSuspense` with a React Suspense boundary when the component must wait for initialization.

See the separate [Suspense page](suspense.md) for the full example.

## Navigation checks

- [React overview](README.md)
- [Shared useFlag anchor](reference.md#useflag)
- [V2-only Suspense anchor](reference.md#useflagsuspense)
- [V2-only Suspense page](suspense.md)
