<img width="1200" alt="bucket-docs-og" src="https://412612722-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/organizations%2FDu9vflR1aVGOJElT6Sip%2Fsites%2Fsite_RVvaB%2Fsocialpreview%2FoaAncFA4GjpEXHjoLIZW%2FDocs%20OG.jpg?alt=media&token=78e0426b-1efa-43d0-8a72-0e453dc9cf83" />

<br> Bucket is a feature flag provider for B2B SaaS companies. 

It's built to work at the company/organization level right out of the box, is quickly set up, and gives you feature adoption metrics and customer feedback in a beautifully crafted UI.

- [Read the docs](https://docs.bucket.co) for more information.

## Contents

- [Key features](#key-features)
- [How it works](#how-it-works)
- [Example: Getting started with React](#example-getting-started-with-react)
- [Need help?](#need-help)

## Key features

- **Feature flags for B2B**: company-level targeting rules, user aggregation, filtering, segments, and reporting‍
- **Feature entitlements**: grant companies access by flipping a switch
- **Feature remote config**: manage feature configuration with ease in one place
- **Feature adoption metrics**: using a proven and B2B-optimized framework
- **Feature feedback**: using surveys or feedback buttons
- **Feature data export**: sync with your CRM and/or data warehouse

## How it works

Create a new feature on Bucket, it gives you a feature key. Think of the feature key as a flag key that also supports configs, tracking feature adoption and for gathering feedback.

## Example: Getting started with React

Install the SDK:
```
‍npm i @bucketco/react-sdk
```
‍
‍Initialize SDK as a React context provider:
```javascript
import { useFeature } from "@bucketco/react-sdk";

const App = () => (
  <BucketProvider
    publishableKey="pub_prod_GgaS4JqPUQMy4OzzP5eCbZ"
    user={{ id: "john_doe", name: "John Doe" }}
    company={{ id: "acme_inc", name: "Acme Inc." }}
  >
    <MyFeature />
  </BucketProvider>
);
```

Check if the feature is enabled for users:
```javascript
const MyFeature = () => {
  const { isEnabled } = useFeature("my-new-feature");

  return isEnabled ? "You have access!" : null;
};
```

## Need help?

- Ready to get started? [Follow the guide](https://docs.bucket.co/introduction/getting-started)
- Need help? [Talk to a founder](https://bucket.co/contact)
- Latest product updates? [See Changelog](https://bucket.co/changelog)

Follow us [@bucketdotco on X](https://x.com/bucketdotco) or [@bucket.co on Bluesky](https://bsky.app/profile/bucket.co) for the latest product updates.

We're crafting a feature flag management tool for B2B SaaS.
