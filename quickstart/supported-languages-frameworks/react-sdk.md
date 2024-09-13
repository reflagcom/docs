# React SDK

## What is the React SDK? <a href="#what-is-the-react-sdk" id="what-is-the-react-sdk"></a>

The React SDK is an open-source client-side Typescript/JavaScript library that allows you to integrate Bucket with your app.

It also works out of the box with Next.js.

## Getting started <a href="#getting-started" id="getting-started"></a>

You can find the[ full developer documentation on GitHub](https://github.com/bucketco/bucket-tracking-sdk/blob/main/packages/react-sdk/README.md).

## Install the SDK <a href="#install-the-sdk" id="install-the-sdk"></a>

Install the SDK.

```jsx
npm i @bucketco/react-sdk
```

## Define your features <a href="#define-your-features" id="define-your-features"></a>

To get type safe feature definitions, extend the definition of the `Features` interface and define which features you have. See the example below for the details.

If no explicit feature definitions are provided, there will be no types checked feature lookups.

### **Example**

```jsx
import "@bucketco/react-sdk";

// Define your features by extending the `Features` interface in @bucketco/react-sdk
declare module "@bucketco/react-sdk" {
  interface Features {
    huddle: boolean;
    recordVideo: boolean;
  }
}
```

## Add the context provider <a href="#add-the-context-provider" id="add-the-context-provider"></a>

Add the `BucketProvider` context provider to your application. This will initialize the Bucket SDK to fetch feature configuration and listen for [automated feedback survey](../../product-handbook/feature-analysis/automated-feedback-surveys.md) events.

{% hint style="info" %}
Once a feature configuration has been successfully fetched, it's stored in `localStorage` and will be used as a fallback for up to 30 days if the client cannot connect to Bucket's servers.
{% endhint %}

```jsx
import { BucketProvider } from "@bucketco/react-sdk"

<BucketProvider
  publishableKey="{YOUR_PUBLISHABLE_KEY}"
  company={ id: "acme_inc" }
  user={ id: "john doe" }
  loadingComponent={<Loading />}
  fallbackFeatures={["huddle"]}
>
{/* children here are shown when loading finishes or immediately if no `loadingComponent` is given */}
</BucketProvider>
```

## Implement feature targeting <a href="#implement-feature-targeting" id="implement-feature-targeting"></a>

`useFeature()` returns the state of a given feature for the current company/user:

```jsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const {isEnabled, track} = useFeature("huddle");

  if (!isEnabled) {
    return null;
  }

  return <button onClick={() => track()}>Start huddle!</button>;
}
```

This example checks if a user should be shown the `Start huddle` button by checking the `isEnabled` boolean _and_ then sends an event once the Huddle starts to let Bucket automatically track usage and [collect feedback](../../product-handbook/feature-analysis/automated-feedback-surveys.md).

## Custom event tracking <a href="#custom-event-tracking" id="custom-event-tracking"></a>

`useTrack()` lets you send custom events to Bucket whenever a user uses a feature:

```jsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled } = useFeature("huddle");
  const track = useTrack();

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  // send a custom event, in this case using the "Object/Action" terminology
  // by using the `track` function from `useTrack` and send along
  // some custom attributes along.
  return (
    <Button onClick={() => track("Huddle Started", {type: "voice"})}>
      Start voice huddle!
    </Button>
  );
}
```

## Add additional hooks <a href="#add-additional-hooks" id="add-additional-hooks"></a>

There are additional hooks available:

* [`useRequestFeedback()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#userequestfeedback): Returns a function that lets you open a dialog to ask for feedback on a specific feature.
* [`useSendFeedback()`](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/react-sdk/README.md#usesendfeedback): Returns a function that lets you send feedback to Bucket.

## Complete developer documentation <a href="#complete-developer-documentation" id="complete-developer-documentation"></a>

You can find the[ complete developer documentation on GitHub](https://github.com/bucketco/bucket-tracking-sdk/blob/main/packages/react-sdk/README.md).
