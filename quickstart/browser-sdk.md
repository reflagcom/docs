# Browser SDK

### Install

If you are not using feature flags in the browser and you are using Segment, we recommend installing the Bucket SDK through a [Segment browser destination](../integrations/segment.md#set-up-browser-tracking-recommended).

To use the SDK directly in your code base:

```tsx
<script src="https://cdn.jsdelivr.net/npm/@bucketco/tracking-sdk@2"></script>
//or
npm i @bucketco/tracking-sdk
```

Initialize `bucket` to fetch feature flags and start listening for [Live Satisfaction](../introduction/concepts/feature/live-satisfaction.md) events.

```tsx
import bucket from "@bucketco/tracking-sdk"

bucket.init("YOUR_PUBLISHABLE_KEY")
```

### Create a release on Bucket&#x20;

See [create-your-first-release.md](../product-handbook/create-your-first-release.md "mention")



### Flag evaluation and feature tracking

#### Evaluate feature flag

Returns the state of a given feature flag for the current context, e.g.

```tsx
const flags = await bucket.getFeatureFlags({
  context: {
    user: { id: "john_doe" },
    company: { id: "acme_inc" },
  },
});
// {
//   "join-huddle": {
//     "key": "join-huddle",
//     "value": true
//   },
//   "post-message": {
//     "key": "post-message",
//     "value": true
//   }
// }
```

#### Track feature usage

```tsx
bucket.init("tk123", {});

// set current user
bucket.user("john_doe", { name: "John Doe" });

// set current company
bucket.company("acme_inc", { name: "Acme Inc", plan: "pro" });

// track events
bucket.track("sent_message", { foo: "bar" });
```

### Full documentation

See the [full documentation on GitHub](https://github.com/bucketco/bucket-tracking-sdk/blob/7125b03260f53fc16585f2c7ef7dddb2d6fc2fcd/packages/react-sdk/README.md).
