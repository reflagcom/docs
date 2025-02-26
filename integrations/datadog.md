---
description: How Bucket integrates with Datadog
---

# Datadog

With the Datadog integration, you can enrich your RUM data with feature flag data. This will enable you to catch regressisions on new feature releases.

### Get available features from Bucket

In this example, we're using the [Browser SDK](../sdk/@bucketco/browser-sdk/):

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

### Add as RUM context on Datadog

We can forward all features or pick certain features and send access state to Datadog ([documentation](https://docs.datadoghq.com/real_user_monitoring/guide/setup-feature-flag-data-collection/?tab=browser#custom-feature-flag-management)):

```tsx
datadogRum.addFeatureFlagEvaluation("export-to-csv", true);
//etc. 
```

Which will look like this on Datadog:

<figure><img src="../.gitbook/assets/feature-flag-list-rum-event.d9c1c876a34458edc70d1317efaec05b.png.avif" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/rum-explorer-session-feature-flag-search.435802460fd607608ad5155f029da57b.png.avif" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/rum-explorer-error-feature-flag-search.7b9f6c046db1de1c71d279c139f1508a.png.avif" alt=""><figcaption></figcaption></figure>
