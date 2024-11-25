# Node.js SDK

## What is the Node.js SDK?

The Node.js SDK  is an open-source server-side Typescript/JavaScript library that allows you to integrate Bucket with your app. &#x20;

{% hint style="info" %}
See our [OpenFeature Node.js Provider](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/openfeature-node-provider/README.md) for integration with OpenFeature.
{% endhint %}

## Getting started

You can find the[ full developer documentation on GitHub](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/node-sdk).

## Install the SDK

Install the SDK using `yarn` or `npm`.

```typescript
yarn add @bucketco/node-sdk 
//or 
npm install -s @bucketco/node-sdk.
```

## Basic usage

Get started by getting a secret key from the [Environment settings](../product-handbook/managing-apps/environments.md) in Bucket.

{% hint style="danger" %}
Secret keys are meant for use in server-side SDKs **only**.

Secret keys allow users to obtain sensitive information. They should not be used in client-side applications.
{% endhint %}

```typescript
import { BucketClient } from "@bucketco/node-sdk";

// Create a new instance of the client with the secret key
// or set the BUCKET_SECRET_KEY environemnt variable
const client = new BucketClient({
  secretKey: "sec_prod_xxxxxxxxxxxxxxxxxxxxx",
});

// Initialize the client and begin fetching feature targeting definitions.
// You must call this method prior to any calls to `getFeatures()`,
// otherwise an empty object will be returned.
await client.initialize();
```

Once the client is initialized, one can obtain features along with the `isEnabled`  status to indicate whether the feature is targeted for this user/company and the `track` function to let you track feature usage:

```typescript
// configure the client
const boundClient = client.bindClient({
  user: { id: "john_doe", name: "John Doe" },
  company: { id: "acme_inc", name: "Acme, Inc." },
});

// get the current features (uses company, user and custom context to evaluate the features).
const { huddle } = boundClient.getFeatures();

if (huddle.isEnabled) {
  // this is your feature gated code ...
  // send an event when the feature is used:
  huddle.track();
}
```

When you bind a client to a `user/company`, the data is matched against the targeting rules.&#x20;

To get accurate targeting, you must ensure that the provided `user/company` information is sufficient to match the targeting rules you've created.&#x20;

The `user/company` data is automatically transferred to Bucket, ensuring up-to-date `user/company` information and accurate targeting.

## High-performance feature targeting

The SDK contacts Bucket servers when you call `initialize` and downloads the features with their targeting rules.&#x20;

These rules are then matched against the provided `user/company` information to `getFeatures` (or through `bindClient(..).getFeatures()`).&#x20;

The `getFeatures` call doesn't need to contact Bucket servers once `initialize` has been completed.&#x20;

`BucketClient` will periodically download targeting rules from the Bucket servers in the background.

## Complete developer documentation

There's much more you can do with the Bucket Node.js SDK.  See the full [developer documentation](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/node-sdk) on Github.

