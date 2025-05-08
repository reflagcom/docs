---
description: >-
  Feature flags to ship the right things faster. Flag without friction. Get
  feedback. Track adoption.
icon: bolt
---

# Getting started

Let's get started with Bucket. We'll do the following:

1. Create your [first feature](https://docs.bucket.co/product-handbook/create-your-first-feature).
2. Set up a [Bucket SDK](https://docs.bucket.co/supported-languages/overview) for your language and framework or use our [HTTP API](https://docs.bucket.co/api/http-api)
3. Set feature [access rules](https://docs.bucket.co/product-handbook/feature-rollouts/feature-targeting-rules).
4. Get [feedback](introduction/concepts/feedback.md) to fix customer issues.
5. Track [feature adoption](product-handbook/feature-usage-configuration.md).

Let's go.

## Prerequisites

First off, you need to sign up for [Bucket](https://app.bucket.co/signup).

**Pro tip**: Install [Bucket CLI](sdk/documents/cli/) to add feature flags from the command line. Run the following command:

```bash
# npm
npm install --save-dev @bucketco/cli

# yarn
yarn add --dev @bucketco/cli
```

## 1. Create your first feature&#x20;

Now let's create your first feature. With the CLI:

```bash
# npm
npx bucket new

# yarn
yarn bucket new
```

Or use the [Bucket UI](https://app.bucket.co):

1. Click `New feature` in the sidebar.
2. Give your feature a name, and we'll suggest a `feature key` (Fig. 1).&#x20;

<div data-full-width="false"><figure><img src=".gitbook/assets/image (8).png" alt=""><figcaption><p>Fig. 1: Create a new feature on bucket.co</p></figcaption></figure></div>

Now, let's set up a Bucket SDK for your language and framework.

## 2. Install the Bucket SDK

Find the supported languages below:

{% include ".gitbook/includes/languages.md" %}

### Code example for React

If you've installed the React SDK and have created a feature called `my-new-feature`, getting started will look like the following:

```jsx
import { useFeature } from "@bucketco/react-sdk";

const MyFeature = () => {
  const { isEnabled } = useFeature("my-new-feature");

  return isEnabled ? "You have access!" : null;
};
```

You can now use `isEnabled` to gate access to the feature.&#x20;

## 3. Set access rules

Head back over to [your dashboard](https://app.bucket.co/), select your feature and the `Access` tab (Fig. 2).

<figure><img src=".gitbook/assets/image (9).png" alt=""><figcaption><p>Fig. 2: Access rules on bucket.co</p></figcaption></figure>

From here, you can define segments, companies, and users that will access your feature.

## 4. Get feedback <a href="#next-steps-1" id="next-steps-1"></a>

You can get feedback by adding a [static "Feedback" button](product-handbook/feature-feedback/give-feedback-button.md) or you can [trigger a survey](product-handbook/feature-analysis/automated-feedback-surveys.md), at the right time.

To add a button, simply add `requestFeedback`, like so:

```tsx
import { useFeature } from "@bucketco/react-sdk";

const MyFeature = () => {
  const { isEnabled, requestFeedback } = useFeature("my-new-feature");

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <button>Use feature</button>
      <button
        onClick={() => requestFeedback({ title: "How do you like this new feature?" })}
      >
        Give feedback
      </button>
    </>
  );
}
```

## 5. Track feature adoption

To track adoption of your new feature, use `track`:

```tsx
import { useFeature } from "@bucketco/react-sdk";

const MyFeature = () => {
  const { isEnabled, requestFeedback, track } = useFeature("my-new-feature");

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <button onClick={() => track()}>Use feature</button>
      <button
        onClick={() => requestFeedback({ title: "How do you like this new feature?" })}
      >
        Give feedback
      </button>
    </>
  );
}
```

## Get support

* Need some help? [Chat with us](mailto:hello@bucket.co)
* Do you prefer a video call? [Talk to a founder](https://bucket.co/contact)
* Latest product updates? [See Changelog](https://bucket.co/changelog)
* Create account: [Sign up](https://app.bucket.co)
