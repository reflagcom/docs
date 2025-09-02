---
description: Reflag on data residency
---

# Data residency

When you sign up with Reflag you automatically use our global infrastructure to guarantee low latency from your users' clients to our servers.&#x20;

However, if you need your users' data to stay inside the EU you can contact us at hello@reflag.com and request we change your data residency to EU only.

By default, our SDKs connect to `front.reflag.com`. This points to our globally distributed edge servers and requests to this domain will be served generally by a server closest to the user.&#x20;

However, if you're using the EU data residency, you must change the `apiBaseUrl` to `front-eu.reflag.com` when configuring the SDK to ensure the requests always land on one of our EU servers.

Here's how you can set the host in our Browser SDK and Node SDK:

```ts
// Browser SDK + Node SDK
const reflagClient = new ReflagClient({
    publishableKey: "{YOUR_PUBLISHABLE_KEY}",
    apiBaseUrl: "https://front-eu.reflag.com",
    ...
});
```

And using the React SDK:

```tsx
// React SDK
import { ReflagProvider } from "@reflag/react-sdk";

<ReflagProvider
  publishableKey="{YOUR_PUBLISHABLE_KEY}"
  company={{ id: "acme_inc" }}
  user={{ id: "john doe" }}
  apiBaseUrl="https://front-eu.reflag.com"
>
 ...
</ReflagProvider>
```

