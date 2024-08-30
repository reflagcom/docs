# Browser SDK

## What is the Browser SDK? <a href="#what-is-the-browser-sdk" id="what-is-the-browser-sdk"></a>

The Browser SDK is a basic client-side JavaScript library that allows you to integrate Bucket with your app.

If you're using a higher-level library or framework, instead see the [supported languages](./).

## Getting started <a href="#getting-started" id="getting-started"></a>

You can find the[ full developer documentation on GitHub](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/browser-sdk).

## Install the SDK <a href="#install-the-sdk" id="install-the-sdk"></a>

The package should be imported and initialized as follows:

```javascript
import bucket from "@bucketco/browser-sdk";

// Set user and company
const user = {
  id: 42,
  role: "manager",
};

const company = {
  id: 99,
  plan: "enterprise",
};

const bucketClient = new BucketClient(publishableKey, { user, company });

// This will pull down features and prepare for automated feedback surveys
await bucketClient.initialize();

// After initialization, `getFeatures` returns instantly
const { huddle } = bucketClient.getFeatures();

if (huddle) {
  // show feature
}

// on feature usage, send an event using the same feature key
// to get feature usage tracked automatically.
// You can also use `track` to send any custom event.
bucketClient.track("huddle");
```

It's also possible to implement a simple HTML `<script>` tag:

```javascript
<script src="https://cdn.jsdelivr.net/npm/@bucketco/browser-sdk@1"></script>
<script>
  const bucket = new BucketBrowserSDK.BucketClient("123", {
    user: { id: "42" },
    company: { id: "1" },
  });

  bucket.initialize().then(() => {
    console.log("Bucket initialized");
    document.getElementById("loading").style.display = "none";
    document.getElementById("start-huddle").style.display = "block";
  });
</script>
<span id="loading">Loading...</span>
<button
  id="start-huddle"
  style="display: none"
  onClick="bucket.track('Started huddle')"
>
  Click me
</button>
```

See the [example](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/browser-sdk/example/browser.html) on Github for a working example.

{% hint style="info" %}
If you're using the Browser SDK through a simple `<script>` tag, `BucketClient` will become available under `BucketBrowserSDK.`

```javascript
const bucketClient = new BucketBrowserSDK.BucketClient(...)
```
{% endhint %}

## Complete developer documentation <a href="#complete-developer-documentation" id="complete-developer-documentation"></a>

You can find the [full documentation on GitHub](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/browser-sdk).
