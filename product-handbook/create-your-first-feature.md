# Create your first feature

## What's a feature?

A feature is an entity that Bucket uses to roll out features, analyze adoption and satisfaction, and manage permissions.  A feature is used to create and manage feature flags, targeting rules,  engagement metrics, automatically collect feedback, and turn feature permissions on/off.

## Getting started

* Navigate to `Features` and click the `New feature` button
* Give your feature a name
* If you haven't already, set up a Bucket SDK for your language and framework. Find the [supported languages here.](../quickstart/supported-languages-frameworks/)

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

## Get your feature key

A `feature key` is automatically generated when you name the feature. You'll use this key to refer to the feature in your code.

You can change the `feature key` while creating the feature, but you cannot change it after it has been created.

The `feature key` allows you to determine if a feature is enabled for specific customers and to track customers' usage of the feature.

### Example

If you're using React and have created a feature called `Huddle`, it will look like the following:

```tsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled, track } = useFeature("huddle");

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  return <Button onClick={() => track()} />;
}
```

The `track` function will generate a `huddle` event. This is automatically sent to Bucket whenever a user uses the features.&#x20;

## Modify event tracking

By default, Bucket will look for events with the `feature key` to track usage.

You can change this to another `event`. To send a different event, you will expose a more generic `track` function:

```tsx
import { useFeature } from "@bucketco/react-sdk";

function StartHuddleButton() {
  const { isLoading, isEnabled } = useFeature("huddle");
  const track = useTrack();

  if (isLoading) {
    return <Loading />;
  }

  if (!isEnabled) {
    return null;
  }

  // send a custom event, in this case using the "Object/Action" terminology
  // by using the `track` function from `useTrack` and send along
  // some custom attributes along.
  return (
    <Button onClick={() => track("Huddle Started", {type: "voice"})}>
      Start voice huddle!
    </Button>
  );
}
```

It's also possible to use `company` attributes to indicate feature usage instead of events. See the [usage configuration documentation](feature-usage-configuration.md) to learn how to customize usage tracking. &#x20;

See the [supported languages/frameworks documentation](../quickstart/supported-languages-frameworks/) to learn how to quickly get started with a Bucket SDK or API

## Next steps

* Dive into [Targeting](feature-targeting-rules/) to roll out features gradually or to [certain segments](feature-targeting-rules/creating-segments.md) or [environments](feature-targeting-rules/environments.md)
* Customize your [usage tracking](feature-usage-configuration.md) configuration to integrate with existing tracking solutions
* Learn about [analysis](feature-analysis/) to discover how the [STARS framework](feature-analysis/stars-framework.md) and [automated feedback surveys](feature-analysis/automated-feedback-surveys.md) let you evaluate feature adoption and satisfaction
* [Manage features](permissions-management.md) from the Bucket UI or with an API

