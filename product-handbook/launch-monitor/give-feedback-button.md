---
description: Add a feedback button with the React SDK v2 feedback hook.
---

# Give feedback button

Use a separate feedback hook to open a feedback form. The flag read controls the workflow; it does not return feedback or tracking methods.

```tsx
import { useFlag, useRequestFeedback, useTrack } from "@reflag/react-sdk";

export function StartHuddleButton() {
  const enabled = useFlag("huddle");
  const track = useTrack();
  const requestFeedback = useRequestFeedback();

  if (!enabled) return null;

  return (
    <>
      <button onClick={() => track("Started huddle")}>Start huddle!</button>
      <button onClick={() => requestFeedback({
        flagKey: "huddle",
        title: "How do you like Huddles?",
      })}>
        Give feedback!
      </button>
    </>
  );
}
```

Render this component inside a [React SDK v2 provider](../../supported-languages/react-sdk/README.md) with the appropriate user/company context. Configure adoption rules to match the event you track. For widget positioning, translations, styling, or your own UI, see [Browser feedback](../../supported-languages/browser-sdk/feedback.md).
