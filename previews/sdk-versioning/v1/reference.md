# API reference

> SDK v1 / legacy. Unpublished navigation prototype.

## useFlag

`useFlag("huddle")` returns the v1 wrapper. Read its Boolean `isEnabled` property rather than treating the wrapper itself as a Boolean.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function FlagStatus() {
  const flag = useFlag("huddle");
  return <span>{flag.isEnabled ? "Enabled" : "Disabled"}</span>;
}
```

## Flag wrapper

This v1-only anchor intentionally has no matching v2 heading. V2 removes ordinary flag wrappers and uses direct values, separate tracking and separate feedback hooks.

## Navigation checks

- [React overview](README.md)
- [Shared useFlag anchor](reference.md#useflag)
- [V1-only wrapper anchor](reference.md#flag-wrapper)

The corresponding v2 reference adds a `useFlagSuspense` heading, and v2 has a separate Suspense page. These differences let us test the native version picker's missing-page and missing-anchor behavior.
