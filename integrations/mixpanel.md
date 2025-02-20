# Mixpanel

With the Mixpanel integration, you can attach feature access properties to users and groups on Mixpanel. This will enable you to query analytics based on feature access filters.

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

### Add as property on Mixpanel

We can forward all features or pick certain features and send access state to Mixpanel. Here we send an array of features that the user has access to:

```javascript
mixpanel.identify("u1234");
mixpanel.people.set({
  $name: "Rasmus Makwarth",
  $features: ["export-to-csv"],
});
```

Which will look like this on Mixpanel:

<figure><img src="../.gitbook/assets/CleanShot 2025-01-09 at 11 .11.54@2x (1).png" alt=""><figcaption></figcaption></figure>

You may want to add the property to the user's group as well.
