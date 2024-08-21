# Browser SDK

### What is the Browser SDK?

The Browser SDK is a basic client-side JavaScript library that allows you to integrate Bucket with your app.&#x20;

If you're using a higher-level library or framework, instead see [supported-languages.md](supported-languages.md "mention")

### Getting started

You can find the[ full developer documentation on GitHub](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/browser-sdk).

### Install the SDK

The package should be imported and initialized as follows:

<pre class="language-typescript"><code class="lang-typescript">import bucket from "@bucketco/browser-sdk";

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

<strong>// on feature usage, send an event using the same feature key
</strong>// to get feature usage tracked automatically.
// You can also use `track` to send any custom event.
bucketClient.track("huddle");
</code></pre>

It's also possible to implement a simple HTML `<script>` tag:&#x20;

```html
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

See the [example](https://github.com/bucketco/bucket-javascript-sdk/blob/main/packages/browser-sdk/example/browser.html) on Github for a full working example.

_Note: If using the Browser SDK through a simple `<script>` tag, `BucketClient` will become available  under `BucketBrowserSDK.`_

```typescript
const bucketClient = new BucketBrowserSDK.BucketClient(...)
```

### Feature targeting (feature flags)

Once initialized, the Bucket client can determine which features are active for a given context.&#x20;

The `context` is given in the `BucketClient` constructor.

The `context` needs to include `{ user: { id }, company: { id } }` .&#x20;

It also can include any additional attributes you want to evaluate feature targeting rules against.&#x20;

_Note: Once a feature configuration has been successfully fetched, it's stored in `localStorage` and will be used as a fallback for up to 30 days if the client cannot connect to Bucket's servers._

```javascript
const bucketClient = new BucketClient(
  publishableKey,
  context: {
    user: { id: "user_123", role: "manager" },
    company: { id: "company_123", plan: "enterprise" },
  },
);
await bucketClient.initialize()

bucketClient.getFeatures()
// {
//   "huddle": true,
//   "message": true
// }

if(bucketClient.getFeatures().huddle) {
  ...
}
```

### Track feature usage

Bucket can determine which features are active for a given context.&#x20;

```javascript
// when a feauture gets used, send an event using the feature key
// to get feature usage tracked automatically.
bucketClient.track("huddle");

// You can also use `track` to send any custom event and add custom event attributes
bucketClient.track("Joined Huddle", {huddleType: "voice"});
```

### Collect feedback

The Bucket Browser SDK comes with [automated feedback surveys](../product-handbook/automated-feedback-surveys.md) enabled by default.

To get started with automatic feedback collection, make sure you've initialized the Bucket Client with a `user`.

The surveys work even if you're not using the SDK to send events to Bucket. The Bucket Browser SDK maintains a live connection to Bucket's servers and shows a survey whenever the Bucket servers determine that an event should trigger an automated survey.

You can learn how to adjust the default behavior in the [automated feedback survey documentation](../product-handbook/automated-feedback-surveys.md).

```javascript
bucketClient.feedback({
  featureId: "my_feature_id", // String (required), copy from Feature feedback tab
  score: 5, // Number: 1-5 (optional)
  comment: "Absolutely stellar work!", // String (optional)
});
```

### Init options

Supply these to the constructor call to enable `fallbackFeatures` if your app is unable to contact Bucket's servers and more.&#x20;

```javascript
{
  logger: console, // by default only logs warn/error, by passing `console` you'll log everything
  host?: "https://front.bucket.co",
  sseHost?: "https://livemessaging.bucket.co"
  feedback?: undefined // See FEEDBACK.md
  featureOptions?: {
    fallbackFeatures?: string[]; // Enable these features if unable to contact bucket.co
    timeoutMs?: number; // Timeout for fetching features
    staleWhileRevalidate?: boolean; // Revalidate in the background when cached features turn stale to avoid latency in the UI
    failureRetryAttempts?: number | false; // Cache a negative response after `failureRetryAttempts` attempts to avoid latency in the UI
  };
}// Some code
```

### Complete developer documentation

You can find the [full documentation on GitHub](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/browser-sdk).
