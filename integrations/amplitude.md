---
description: >-
  How Reflag integrates with Amplitude to query analytics based on feature
  access filters
---

# Amplitude

With the Amplitude integration, you can attach feature access properties to users and groups on Amplitude. This will enable you to query analytics based on feature access filters.

### Get available features from Reflag

In this example, we're using the [Browser SDK](../supported-languages/browser-sdk/):

```javascript
//init
const reflag = new ReflagBrowserSDK.ReflagClient({
  publishableKey: "pub_prod_5eS0G5hX4ZOpwoAw1CKTeP",
  user: {
    id: "u1234",
    name: "Rasmus Makwarth",
  },
});

//get features
const features = reflag.getFeatures();
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

### Add as property on Amplitude

We can forward all features or pick certain features and send access state to Amplitude. Here we send an array of features that the user has access to:

```javascript
amplitude.setUserId("u1234");
const identifyEvent = new amplitude.Identify();
identifyEvent.append("features", "export-to-csv");
amplitude.identify(identifyEvent);
```

Which will look like this on Amplitude:

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 10 .56.14@2x.png" alt=""><figcaption></figcaption></figure>

You may want to add the property to the user's group as well.
