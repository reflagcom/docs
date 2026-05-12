# Launch monitor

Use the launch monitor to track exposure and adoption, and to collect end-user feedback.

<figure><img src="../../.gitbook/assets/Monitor.png" alt=""><figcaption></figcaption></figure>

## Exposure

The Exposed chart shows the distinct count of companies that have been exposed to the flag. Exposed means they were checked for flag access in the SDK and the check returned `enabled`.

## Adoption

The Tracked chart shows the distinct count of companies that have interacted with the flagged workflow. Interactions are tracked with the `track` method.

```typescript
import { useFlag } from "@reflag/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, track } = useFlag("huddle");

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  return (
    <div>
      Huddles
      <button onClick={() => track()}>Start huddle</button>
    </div>
  );
}
```

## Feedback

You can collect end-user feedback on new flag rollouts to catch and fix issues faster.

### Static feedback button

Here's a brief example using the [Reflag React SDK](../../sdk/@reflag/browser-sdk/) to collect feedback:

```tsx
import { useFlag } from "@reflag/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, requestFeedback } = useFlag("my-flag");

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <button>Use huddle</button>
      <button
        onClick={() => requestFeedback({ title: "How do you like huddles?" })}
      >
        Give feedback!
      </button>
    </>
  );
}
```

### Automated feedback survey

Automated surveys let you ask for feedback at the right time after `N` interactions with the flag. [Learn more here](automated-feedback-surveys.md).
