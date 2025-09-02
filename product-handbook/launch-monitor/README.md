# Launch monitor

Use the launch monitor to track exposure and adoption, and to collect end-user feedback.

<figure><img src="../../.gitbook/assets/Monitor (6).png" alt=""><figcaption></figcaption></figure>

## Exposure

The Exposed chart shows you the distinct count of companies that have been exposed the the feature. Exposed means that they've been checked for feature access in the SDK and the check returned `enabled`.

## Adoption

The Tracked chart shows you the dinstinct count of companies that have interacted with the feature. Interactions are tracked with the `track` method. Here's a code example:

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

You can collect end-user feedback on new feature releases to catch and fix issues faster.&#x20;

### Static feedback button

Here's a brief example using the [Reflag React SDK](../../supported-languages/react-sdk/) to collect feedback:

```tsx
import { useFlag } from "@reflag/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, requestFeedback } = useFlag("my-feature");

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <button>Use feature!</button>
      <button
        onClick={() => requestFeedback({ title: "How do you like <feature>?" })}
      >
        Give feedback!
      </button>
    </>
  );
}
```

### Automated feedback survey

Automated surveys lets you ask for feedback at just the right time after N interactions with the feature. [Learn more here](automated-feedback-surveys.md).
