# React SDK

> SDK v2 / candidate. This is an unpublished version-switcher prototype, not a production documentation update or release announcement.

Use the version picker to compare the same React overview and API reference between v1 and v2. General product guides will remain shared and use v2 examples only.

## Compatibility

V2 requires matching Browser SDK v2 and compatible Reflag server endpoints. Server bootstrap must come from Node SDK v2. Native and OpenFeature integrations retain their own supported versions; this preview does not upgrade them.

## Reading direct flag values

A bare read returns a Boolean, with implicit false. Supply a positional default for JSON values. Tracking uses a separate hook.

```tsx
import { useFlag, useTrack } from "@reflag/react-sdk";

export function StartHuddleButton() {
  const enabled = useFlag("huddle");
  const settings = useFlag("huddle-settings", { maxParticipants: 10 });
  const track = useTrack();
  if (!enabled) return null;
  return (
    <button onClick={() => track("Started huddle")}>
      Start huddle (up to {settings.maxParticipants} people)
    </button>
  );
}
```

## Next step

Open the [API reference](api-reference.md#useflag), then switch versions. You should remain on the equivalent reference page when possible.

[Suspense](suspense.md) is a v2-only page included to test switching when the other version has no equivalent page.
