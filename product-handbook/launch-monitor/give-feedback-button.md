---
description: Adding a feedback button using Reflag SDKs in a few lines of code.
---

# Give feedback button

Collecting feedback through a "Give feedback" button is a great way to collect feedback from users.

Here's a brief example using the [Reflag React SDK](../../supported-languages/react-sdk/):

```tsx
import { useFlag } from "@reflag/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, track, requestFeedback } = useFlag("huddle");

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <button onClick={track}>Start huddle!</button>
      <button
        onClick={() => requestFeedback({ title: "How do you like Huddles?" })}
      >
        Give feedback!
      </button>
    </>
  );
}
```

