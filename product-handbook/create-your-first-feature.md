---
description: Getting started with Bucket by adding your first feature flag
icon: flag
---

# Add your first feature flag

## What's a feature?

A feature is an entity that Bucket uses to roll out features, manage access, track adoption and get feedback.  Each feature has a `feature key`.

## Getting started

* Click `New feature` in the sidebar.
* Give your feature a name, and you'll get a `feature key`. You can't change the feature key after creation. The `feature key` is like a `flag key` that can _also_ be used for adoption and feedback.
* If you haven't already, set up a Bucket SDK for your language and framework. Find the [supported languages here.](../supported-languages/overview.md)

<figure><img src="../.gitbook/assets/image (2) (1).png" alt="Creating a new feature in Bucket"><figcaption></figcaption></figure>

### Code example

If you're using React and have created a feature called `Huddle`, it will look like the following:

```tsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled } = useFeature("huddle");

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  return (
    <div>Huddles feature...</div>
  );
}
```

You can now use `isEnabled` to gate access to the feature.&#x20;

### Next steps

* Learn how to manage who has access and modify the [access rules](feature-rollouts/feature-targeting-rules.md) in the UI,
* Learn how to set up [remote feature config](remote-config.md),
* Learn how to [track adoption](feature-usage-configuration.md) of the feature,
* Learn how to get [qualitative feedback](feature-analysis/) on the feature.

