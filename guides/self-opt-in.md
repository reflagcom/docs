---
description: How to create a beta feature self opt-in page in React with Reflag
icon: browser
---

# Create a beta feature opt-in page

Creating a page where users can opt into certain beta/experimental features is straight forward with Reflag and the Reflag React SDK.

The basic concept is to set an attribute on the user/company which denotes that the user has self opted into a specific feature, for example `optin-<featureKey> = true.` Updating an attribute is very simple from the SDK. Then use that attribute to control who has access to the feature by updating the feature access rules such that users/companies with the attribute `optin-<featureKey>=true` will have access to the feature.

## Step by step guide

Here's a step by step guide:

1. Select a feature to let people self opt-into.
2. Add the rule: `optin-<featureKey> IS TRUE` to the rules section for all the environments. Replace `<featureKey>` with the actual feature key of the feature.
3. Use the following React component to let users self opt-in to specific features:

```tsx
import { useUpdateUser, useFlag, ReflagFeatures } from "@reflag/react-sdk";
import { useState } from "react";

function FeatureOptIn({
  featureKey,
  featureName,
}: {
  featureKey: ReflagFeatures;
  featureName: string;
}) {
  const updateUser = useUpdateUser();
  const [sendingUpdate, setSendingUpdate] = useState(false);
  const { isEnabled } = useFlag(featureKey);

  return (
    <div>
      <label htmlFor="huddlesOptIn">Opt-in to {featureName} feature</label>
      <input
        disabled={sendingUpdate}
        id="huddlesOptIn"
        type="checkbox"
        checked={isEnabled}
        onChange={() => {
          setSendingUpdate(true);
          updateUser({
            [`optin-${featureKey}`]: isEnabled ? "false" : "true",
          }).then(() => {
            setSendingUpdate(false);
          });
        }}
      />
    </div>
  );
}
```

### How it works

The React component above uses [remote attributes](https://reflag.com/changelog/introducing-remote-attributes) to ensure that any feature you've enabled stays enabled between sessions.

### Next steps

* Learn how to manage who has access, modify the [Targeting rules](../product-handbook/feature-rollouts/feature-targeting-rules.md) in the UI.
