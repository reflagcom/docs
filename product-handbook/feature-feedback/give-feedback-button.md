---
description: >-
  Adding a "Give feedback" button using the Bucket Browser or Bucket React SDKs
  take only a few lines of code.
---

# Give feedback button

Collecting feedback through a "Give feedback" button is a great way to collect feedback from users.

Here's a brief example using the Bucket React SDK:

```tsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, track, requestFeedback } = useFeature("huddle");

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

