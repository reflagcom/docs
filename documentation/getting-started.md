---
description: Getting started with Bucket
icon: bolt
---

# Getting started

Let's get started with Bucket. We'll do the following:

1. Create your [first feature](https://docs.bucket.co/product-handbook/create-your-first-feature)
2. Set up a [Bucket SDK](https://docs.bucket.co/supported-languages/overview) for your language and framework or use our [HTTP API](https://docs.bucket.co/api/http-api)
3. Set [access rules](https://docs.bucket.co/product-handbook/feature-rollouts/feature-targeting-rules) to roll out features gradually to [certain segments](https://docs.bucket.co/product-handbook/creating-segments) and/or [environments](https://docs.bucket.co/product-handbook/creating-and-managing-apps/environments)

Let's go.

## 0. Prerequisites

First off, you need to sign up for [Bucket](https://app.bucket.co/signup).

**Pro tip**: Install [Bucket CLI](../sdk/documents/cli/) to add feature flags from the command line. Run the following command:

```bash
# npm
npm install --save-dev @bucketco/cli

# yarn
yarn add --dev @bucketco/cli
```

## 1. Create your first feature&#x20;

Now let's create your first feature.

Navigate to your project's root directory, then running the `new` command to initialize the CLI, create a feature, and generate the types all at once:

```bash
# npm
npx bucket new

# yarn
yarn bucket new
```

You can use the [Bucket Dashboard](https://app.bucket.co/), too:

1. Click `New feature` in the sidebar.
2. Give your feature a name, and we'll suggest a `feature key` (Fig. 1).&#x20;

<div data-full-width="false"><figure><img src="../.gitbook/assets/image (8).png" alt=""><figcaption><p>Fig. 1: Create a new feature on bucket.co</p></figcaption></figure></div>

Now, let's set up a Bucket SDK for your language and framework.

## 2. Install the Bucket SDK

Find the supported languages below:

{% include "../.gitbook/includes/languages.md" %}

### Code example for React

If you've installed the React SDK and have created a feature called `My New Feature`, getting started will look like the following:

```jsx
import { useFeature } from "@bucketco/react-sdk";

const MyFeature = () => {
  const { isEnabled } = useFeature("my-new-feature");

  return isEnabled ? "You have access!" : null;
};
```

You can now use `isEnabled` to gate access to the feature.&#x20;

See the respective SDK documentation for example for other SDKs.

## 3. Set access rules

Head back over to [your dashboard](https://app.bucket.co/), select your feature and the `Access` tab (Fig. 2).

<figure><img src="../.gitbook/assets/image (9).png" alt=""><figcaption><p>Fig. 2: Access rules on bucket.co</p></figcaption></figure>

From here, you can define segments, companies, and users that will access your feature.

## 4. All set! <a href="#next-steps-1" id="next-steps-1"></a>

Frequently asked question:

* Is it that simple? Yep. Enjoy!

## 5. Next steps

Bucket is purpose-built for B2B SaaS products. There's more.

* Learn about [advanced access rules](https://docs.bucket.co/product-handbook/feature-rollouts/feature-targeting-rules)
* Learn how to [track adoption](https://docs.bucket.co/product-handbook/feature-usage-configuration) of the feature
* Learn how to get [qualitative feedback](https://docs.bucket.co/product-handbook/feature-analysis) on the feature

## 6. Get support

* Need some help? [Chat with us](mailto:hello@bucket.co)
* Do you prefer a video call? [Talk to a founder](https://bucket.co/contact)
* Latest product updates? [See Changelog](../support/changelog.md)
