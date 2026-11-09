# React SDK

> SDK v1 / legacy. This is an unpublished version-switcher prototype, not a production documentation update.

Use the version picker to compare the same React overview and API reference between v1 and v2. General product guides will remain shared and use v2 examples only.

## Installation

```sh
npm install @reflag/react-sdk@1
```

## Reading a Boolean flag

V1 returns a flag wrapper with an `isEnabled` property and flag-bound tracking.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function StartHuddleButton() {
  const { isEnabled, track } = useFlag("huddle");
  if (!isEnabled) return null;
  return <button onClick={track}>Start huddle</button>;
}
```

## Next step

Open the [API reference](api-reference.md#useflag), then switch versions. You should remain on the equivalent reference page when possible.
