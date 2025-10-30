---
description: How we keep your product working even if the Reflag service is disrupted.
---

# Service Resiliency

To keep your product working even if the Reflag service is disrupted, we provide a number of safe guards and features that build resiliency.

### Local evaluation

To improve latency and provide downtime protection, local evaluation is supported in our [node-sdk](../sdk/@reflag/node-sdk/) and [openfeature-node-sdk](../supported-languages/openfeature.md).

Ordinarily, our SDKs send your user/company attributes to our servers and return a list of flags that should be enabled. However, to avoid potential downtime, you can evaluate flags locally on your servers instead of sending a request to our servers.

With local evaluation, our SDKs will download the flag definitions from our servers and run checks against the rules using the given user and company properties locally instead of contacting our servers for every evaluation. The SDK caches the downloaded list in memory, so will keep working during service disruption so long as the service that is using the SDK doesn't get rebooted.

### Edge-runtime (like Cloudflare Workers) support

Equally as effective as local evaluation is our [support for edge-runtimes](service-resiliency.md#edge-runtime-like-cloudflare-workers-support) like Cloudflare Workers, also in the Node SDK.

Reflag maintains a cached set of flag definitions in the memory to decide which features to turn on for which users/companies.

The EdgeClient uses a strategy to keep these feature definitions fresh: The first request to a new worker instance fetches definitions from Reflag's servers, while subsequent requests use the cache. During an invocation, when the cache has expired, the request will be served using the stale cache while it’s being updated in the background, so response times are not affected. However, during downtime, this cache would continue to be served.

### Bootstrapped flags

With [getFlagsForBootstrap()](https://docs.reflag.com/supported-languages/node-sdk#bootstrapping-client-side-applications) in the Node SDK and [ReflagBootstrappedProvider](https://docs.reflag.com/supported-languages/react-sdk#server-side-rendering-and-bootstrapping) in the React SDK, you can evaluate flags on the server and pass them to your client-side applications.

Bootstrapping is recommended as it means that the server has local evaluation and will pass the evaluated flags to the frontend on load, further protecting you from service disruption.

### Offline flags

We also provide [Offline Mode](https://docs.reflag.com/supported-languages/node-sdk#configuring) in all our SDKs, which, when enabled, means we use [flag overrides](https://docs.reflag.com/supported-languages/node-sdk#flag-overrides). This is generally useful during testing and local development; however, it can also be supplied to the SDKs so that they are used as defaults if our servers are down.

### Client SDK caching

Finally, all client SDKs (web) cache the last flags and will keep using those until our servers respond with fresh data. This won’t help if the page was loaded when our servers were down, but bootstrapping from your server would mitigate this.
