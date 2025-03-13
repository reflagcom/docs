# Feature adoption

Bucket tracks feature adoption through [events](concepts/event.md) or [company attributes](concepts/company.md#attributes). The `feature key` doubles as the default event for a feature.

### Events or attributes

Events are great for tracking feature interactions and when the frequency of interactions is important. For example, sending a chat message is best tracked with events.

Company attributes are great for tracking state changes. For example, has the company installed any integrations or not is best tracked with company attributes.

### Code example

When calling `useFeature`, simply add `track` to start measuring feature adoption. This is the default event approach using the feature key as the feature's adoption event.

```tsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, track } = useFeature("huddle");

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

### Using custom events

To use a custom event to track adoption instead of the `feature key`, you can simply call `track("my-custom-event")` to generate it. See the developer documentation for the appropriate Bucket SDK for the details.

If you use Segment, you can use our [Segment integration](../integrations/segment.md) as the destination.

Go to feature settings under Adoption to select the adoption event(s).

### Adoption strategy

Bucket uses the [STARS framework](feature-analysis/stars-framework.md) to measure feature adoption. The STARS framework differentiates between companies having simply tried a feature versus having truly adopted it.

To configure the adoption threshold for your feature, go to the feature settings under Adoption.

You can choose between two adoption strategies:

* Frequency (events on multiple days)
* Count (events count threshold)

<figure><img src="../.gitbook/assets/Adoption strategy V2-min.png" alt="Feature adoption strategy settings"><figcaption></figcaption></figure>

### Track adoption in the UI

Once you've configured your adoption criteria (event or company attribute) and your adoption strategy, you can track feature adoption progress on the Analyze tab.

Here you can see any STARS metric over time and set goals.

You can also create segments based on STARS states.

<figure><img src="../.gitbook/assets/Track adoption in the UI v3-min.png" alt="Analyze tab with feature adoption metrics"><figcaption></figcaption></figure>

