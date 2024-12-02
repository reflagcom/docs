# Data residency

When you sign up with Bucket you are automatically using our global infrastructure to guarantee low latency from your users' clients to our servers. However if for any reason you need your users' data to stay inside EU you can contact us as hello@bucket.co and request we change your data residency to EU only.

By default our SDKs use `front.bucket.co` host. This points to our globally distributed edge servers and requests to this domain will be served generally by a server closest to the user. However if you're using the EU data residency you should change the host to `front-eu.bucket.co` to make sure the requests always land on one of our EU servers.

Here's how you can change the host in some of our SDKs:
```ts
// Browser SDK + Node SDK
const bucketClient = new BucketClient({
    publishableKey: "{YOUR_PUBLISHABLE_KEY}",
    host: "https://front-eu.bucket.co",
    ...
});
```

```tsx
// React SDK
import { BucketProvider } from "@bucketco/react-sdk";

<BucketProvider
  publishableKey="{YOUR_PUBLISHABLE_KEY}"
  company={{ id: "acme_inc" }}
  user={{ id: "john doe" }}
  host="https://front-eu.bucket.co"
>
 ...
</BucketProvider>
```
