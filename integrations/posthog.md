---
description: >-
  How Bucket integrates with PostHog to query analytics based on feature access
  filters
---

# PostHog

With the PostHog integration, you can attach feature access properties to users and groups on PostHog. This will enable you to query analytics based on feature access filters.

### Get available features from Bucket

In this example, we're using the [@bucketco/browser-sdk](../sdk/@bucketco/browser-sdk/):

```javascript
//init
const bucket = new BucketBrowserSDK.BucketClient({
    publishableKey: "pub_prod_5eS0G5hX4ZOpwoAw1CKTeP",
    user: { 
        id: "u1234", 
        name: "Rasmus Makwarth" 
    },
});

//get features
const features = bucket.getFeatures();
```

This will return JSON with all available features for the authenticated user:

```json
"features": {
    "export-to-csv": {
        "isEnabled": true,
        "key": "export-to-csv",
        "targetingVersion": 2
    },
    ...
}
```

### Add as property on PostHog

We can forward all features or pick certain features and send access state to PostHog:

<pre class="language-tsx"><code class="lang-tsx"><strong>posthog.identify("u1234", {
</strong>  name: "Rasmus Makwarth",
  features: {
    "export-to-csv": {
      isEnabled: true,
    },
  },
});
</code></pre>

Which will look like this on PostHog:

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 9 .44.28@2x.png" alt=""><figcaption></figcaption></figure>

You may want to add the property to the user's group as well.
