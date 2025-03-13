---
description: How to release beta features to your React app with Bucket
icon: unlock
---

# Release beta features

In this post, we'll take the following steps:

* Step 1: Flag your new feature in React
* Step 2: Set up your feature rollout strategy
* Step 3: Start collecting user feedback

### Step 1: Flag your new feature in React

First off, you need to sign up for Bucket — [sign up here](https://app.bucket.co/signup)

Now let's create your first feature.

1. Click `New feature` in the sidebar.
2. Give your feature a name and you'll get a `feature key`.

We'll use this `feature key` to flag the new feature in the codebase.

Let's install the [Bucket React SDK](../sdk/@bucketco/react-sdk/).

Copy/paste this in your terminal:

```
npm i @bucketco/react-sdk
```

Let's initialize the client and install the access checking:

```typescript
import { BucketProvider, useFeature } from "@bucketco/react-sdk";

const App = () => (
  <BucketProvider
    publishableKey="pub_prod_*********************"
    user={{ id: "fmerian", name: "Flo Merian" }}
    company={{ id: "bucket", name: "Bucket.co" }}
  >
    <newFeature />
  </BucketProvider>
);

const newFeature = () => {
  const { isEnabled } = useFeature("new-feature");

  if (!isEnabled) return null;

  return <div>Hello, World</div>;
}
```

Let's deploy.

### Step 2: Set up your feature rollout strategy

Head back over to [your dashboard](https://app.bucket.co), select your new feature, and navigate to the `Access` tab to manage who gets access.

1. We set the feature stage to `Beta`
2. Here we're running a public beta, so we just pick `Everyone`
3. Hit `Save` to ship the beta feature to everyone

All set!

![Feature rollout on Bucket.co](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g5dpq8qk0xmsu0hq9v16.png)

**Pro tip:** You can integrate with Slack to keep the team informed and get notified about feature access and stage updates. This ensures everyone is aligned during the rollout process.

* [Learn more about the integration with Slack](../integrations/slack.md)

### Step 3: Start collecting user feedback

You want to make sure you get it right before making your new feature Generally Available (GA).

Let's add a feedback button. It's simple, you need to add `requestFeedback` and trigger it on a button.

See example here:

```typescript
function newFeature() {

  const { isEnabled, requestFeedback } = useFeature("new-feature");

  if (!isEnabled) return null;

  return (
    <div>
      Hello, World
      <button onClick={(e)=
        requestFeedback({
          "title": "How do you like this new feature?"
        });
        Give feedback
      </button>
    </div>
  );
}
```

![User feedback in Bucket.co](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vphv8lvn748v8wrejsiy.png)

**Pro tip:** you can also use `track` to measure feature adoption. This gives you a list of early adopters and you may reach out to them for in-depth feedback once they've used your new feature.&#x20;

* [Learn more about feature adoption](../product-handbook/feature-usage-configuration.md)

### Next step: Going GA

Let's recap:

1. We created a feature flag
2. We rolled it out in public beta
3. We started collecting user feedback

The next step is to iterate on the feature based on customer feedback and, when ready, to release it in GA.

To do so, you need to go back to the `Access` tab and bump the stage to `GA`.

That's it! Keep shipping.
