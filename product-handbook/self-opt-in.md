# Self opt-in

Creating a page where users can opt into certain features is straight forward with Bucket and the Bucket React SDK.

The basic concept is to set an attribute on the user/company, for example `optIn<featureKey> = true` then use that attribute to control who has access to the feature by setting the access rules such that users/companies with the attribute `optIn<featureKey>=true` will have access to the feature.

## Step by step guide

Here's a step by step guide:

1. Select a feature to let people self opt-into.
1. Add the rule: `optin-<featureKey> IS TRUE` to the rules section for all the environments. Replace `<featureKey>` with the actual feature key of the feature.
1. Use the following React component to let users self opt-in to specific features:

```tsx
import { useUpdateUser, useFeature, BucketFeatures } from "@bucketco/react-sdk";
import { useState } from "react";

function FeatureOptIn({
  featureKey,
  featureName,
}: {
  featureKey: BucketFeatures;
  featureName: string;
}) {
  const updateUser = useUpdateUser();
  const [sendingUpdate, setSendingUpdate] = useState(false);
  const { isEnabled } = useFeature(featureKey);

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
          })?.then(() => {
            setSendingUpdate(false);
          });
        }}
      />
    </div>
  );
}
```

### How it works

The React component above uses [remote attributes](https://bucket.co/changelog/introducing-remote-attributes) to ensure that any feature you've enabled stays enabled between sessions.

### Next steps

- Learn how to manage who has access, modify the [Targeting rules](feature-rollouts/feature-targeting-rules.md) in the UI.
