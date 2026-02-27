---
description: >-
  How Reflag integrates with Datadog to catch regressions on new feature
  releases
---

# Datadog

With the Datadog integration, you can enrich your RUM data with feature flag data. This will enable you to catch regressions on new feature releases.

### Get available features from Reflag

In this example, we're using the [React SDK](../sdk/@reflag/browser-sdk/):

```javascript
import { datadogRum } from "@datadog/browser-rum";
import { useClient } from "@reflag/react-sdk";

// Component to enhnance datadog RUM with flag checks
function DatadogIntegration() {
  const client = useClient();
  useEffect(() => {
    return client?.on("check", (check) => {
      datadogRum.addFeatureFlagEvaluation(check.key, check.value);
    });
  }, [client]);
  return null;
}
```

Add the component inside the ReflagProvider:

```tsx
function App() {
  return (
    <ReflagProvider>
      <DatadogIntegration /> // Add the component inside the <ReflagProvider>
      {children}
    </ReflagProvider>
  )
}
```

Which will look like this on Datadog:

<figure><img src="../.gitbook/assets/feature-flag-list-rum-event.d9c1c876a34458edc70d1317efaec05b.png.avif" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/rum-explorer-session-feature-flag-search.435802460fd607608ad5155f029da57b.png.avif" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/rum-explorer-error-feature-flag-search.7b9f6c046db1de1c71d279c139f1508a.png.avif" alt=""><figcaption></figcaption></figure>
