# React SDK

### What is the React SDK?

The React SDK is an open-source client-side Typescript/JavaScript library that allows you to integrate Bucket with your app.&#x20;

### Getting started

You can find the[ full developer documentation on GitHub](https://github.com/bucketco/bucket-tracking-sdk/blob/main/packages/react-sdk/README.md).

### Install the SDK

Install the SDK:

```
npm i @bucketco/react-sdk
```

### Define your feature flags (optional)

To get type-safe feature flags, extend the definition of the `Flags` interface and define which flags you have. See the example below for the details.&#x20;

If no explicit flag definitions are provided, your flag lookups will not be type-checked.

#### Example

```jsx
// Define your flags by extending the `Flags` interface in @bucketco/react-sdk
declare module "@bucketco/react-sdk" {
  interface Flags {
    huddle: boolean;
    recordVideo: boolean;
  }
}
```

### Add the context provider

Add the `BucketProvider` context provider to your application. This will initialize the Bucket SDK to fetch feature flags and listen for [Live Satisfaction](../product-handbook/automated-feedback-changes.md) events.

```jsx
import { BucketProvider } from "@bucketco/react-sdk"

<BucketProvider
  publishableKey="{YOUR_PUBLISHABLE_KEY}"
  company={ id: "acme_inc" }
  user={ id: "john doe" }
  loadingComponent={<Loading />}
  fallbackFlags={["huddle"]}
>
{/* children here are shown when loading finishes or immediately if no `loadingComponent` is given */}
</BucketProvider>
```

Find additional details in the [developer documentation](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#2-add-the-bucketprovider-context-provider).

### Create a Release

[Create a Release](../product-handbook/create-your-first-release.md) for a feature in Bucket to roll out and evaluate it.

### Implement the feature flag hook

`useFlagIsEnabled()` returns the state of a given [feature flag](../product-handbook/create-your-first-feature-flag.md) for the current context.

```jsx
import { useFlagIsEnabled } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const joinHuddleFlagEnabled = useFlagIsEnabled("huddle");
  // true / false

  if (!joinHuddleFlagEnabled) {
    return null;
  }

  return <Button />;
}
```

### Implement the feature tracking hook

`useTrack()` lets you send events to Bucket whenever a user uses a feature. These events are used in Bucket to analyze [feature](../product-handbook/create-your-first-feature.md) usage.

```jsx
import { useTrack } from "@bucketco/react-sdk";

function StartHuddle() {
  const track = useTrack();
  return (
    <div>
      <button onClick={() => track("Huddle Started", { huddleType: "voice" })}>
        Start voice huddle!
      </button>
    </div>
  );
}
```

### Add additional hooks (optional)

There are additional hooks that can be implemented at your discretion:

* [`useFlag()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#useflag): Returns `isEnabled` and `isLoading` indicating if a feature flag is enabled for the current context or whether flags are still being loaded.
* [`useFlags()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#useflags): Returns all enabled feature flags as an object.
* [`useUpdateContext()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#useupdatecontext): Returns functions `updateCompany`, `updateUser`, and `updateOtherContext` to let you update the context that’s used to determine if a feature flag is enabled.
* [`useRequestFeedback()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#userequestfeedback): Returns a function that lets you open a dialog to ask for feedback on a specific feature.
* [`useSendFeedback()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#usesendfeedback): Returns a function that lets you send feedback to Bucket.

### Complete developer documentation

You can find the[ complete developer documentation on GitHub](https://github.com/bucketco/bucket-tracking-sdk/blob/main/packages/react-sdk/README.md).
