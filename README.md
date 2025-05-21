---
icon: bolt
---

# Getting started

**Welcome!** Bucket is feature flags that helps you ship the right features faster.&#x20;

Let's get started. We'll do the following:\


1. Create your first feature.
2. Install the Bucket SDK.
3. Set feature access rules.
4. Get feedback to fix customer issues.
5. Track feature adoption.



## Prerequisites

First off, you need to create an account. Do so in the [Bucket UI](https://app.bucket.co) or use the [CLI](sdk/documents/cli/):

```bash
npm i @bucketco/cli -D && npx bucket new
```

## 1. Create your first feature&#x20;

Now let's create your first feature.&#x20;

{% tabs %}
{% tab title="CLI" %}
```
npx bucket new
```

See [CLI docs](sdk/documents/cli/).
{% endtab %}

{% tab title="UI" %}
1. Click `New feature` in the sidebar.
2. Give your feature a name, and we'll suggest a `feature key` .

<div data-full-width="false"><figure><img src=".gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure></div>


{% endtab %}

{% tab title="MCP" %}
You can create features from your code editor via our [MCP](api/mcp.md).
{% endtab %}

{% tab title="Linear" %}
You can create features from within Linear by mentioning the `@bucket` [agent](integrations/linear.md).
{% endtab %}
{% endtabs %}

Next, let's set up a Bucket SDK for your language and framework.

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

Head back over to [your dashboard](https://app.bucket.co/), select your feature and the `Access` tab.

<figure><img src=".gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

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
