# Suspense

> SDK v2 / candidate. This page intentionally does not exist in the v1 prototype.

## Wait for initialization

```tsx
import { Suspense } from "react";
import { useFlagSuspense } from "@reflag/react-sdk";

function HuddleStatus() {
  const enabled = useFlagSuspense("huddle");
  return <span>{enabled ? "Enabled" : "Disabled"}</span>;
}

export function Example() {
  return (
    <Suspense fallback={<span>Loading flags...</span>}>
      <HuddleStatus />
    </Suspense>
  );
}
```

Try switching to v1 from this page. The preview should make the absence understandable; this test records what GitBook's native picker actually does, rather than assuming it maps every page or anchor.

[Return to the API reference](reference.md#useflagsuspense).
