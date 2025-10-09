# Getting started

**Welcome!** Let's get started. We'll do the following:

1. Create your first feature flag.
2. Install the Reflag SDK.
3. Set feature access rules and/or remote configuration.
4. Enable Toolbar for local testing
5. Monitor your feature launch.



## 1. Create your first flag

Now let's create your first flag.

{% tabs %}
{% tab title="CLI" %}
```
npx @reflag/cli new
```

See [CLI docs](sdk/documents/cli/).
{% endtab %}

{% tab title="UI" %}
1. [Sign up](https://app.reflag.com/) in the app
2. Click `New flag` in the sidebar.
3. Give your feature a name, and we'll suggest a `flag key` .

<figure><img src=".gitbook/assets/Screenshot 2025-09-12 at 11.50.41.png" alt=""><figcaption></figcaption></figure>
{% endtab %}

{% tab title="MCP" %}
You can create features from your code editor via our [MCP](api/mcp.md).
{% endtab %}

{% tab title="Linear" %}
You can create features from within Linear by mentioning the `@reflag` [agent](integrations/linear.md).
{% endtab %}
{% endtabs %}

Next, let's set up a Reflag SDK for your language and framework.

## 2. Install the Reflag SDK

Find the supported languages below:

{% include ".gitbook/includes/sdks.md" %}

### Code example for React

If you've installed the React SDK and have created a feature called `my-new-feature`, getting started will look like the following:

```jsx
import { useFlag } from "@reflag/react-sdk";

const MyFeature = () => {
  const { isEnabled } = useFlag("my-new-feature");

  return isEnabled ? "You have access!" : null;
};
```

You can now use `isEnabled` to gate access to the feature.

## 3. Set access rules

Head back over to [your dashboard](https://app.reflag.com/), select your feature and the `Access` tab.

<figure><img src=".gitbook/assets/Access.png" alt=""><figcaption></figcaption></figure>

From here, you can define segments, companies, and users that will access your feature.

## 4. Enable Toolbar for local testing <a href="#next-steps-1" id="next-steps-1"></a>

In the frontend SDK, enable the Toolbar to toggle features locally.&#x20;

<figure><img src=".gitbook/assets/CleanShot 2025-10-09 at 10 .23.21@2x.png" alt=""><figcaption></figcaption></figure>

In the React SDK, you enable it with `toolbar:`

```jsx
<ReflagProvider
   publishableKey=""
   context={}
   toolbar={true}
>
```

## 5. Monitor your feature launch <a href="#next-steps-1" id="next-steps-1"></a>

On the Monitor tab you can track real-time feature exposure, adoption and user feedback.

<figure><img src=".gitbook/assets/Monitor.png" alt=""><figcaption></figcaption></figure>

### Track exposure

The Exposed chart shows you companies that have been exposed to your feature. This means, companies that have been checked for feature access as per your targeting rules and the check return "enabled".

### Track adoption

To track if exposed companies are also interacting with your feature, you can use `track` .

See the code example below.

### Get user feedback

To get feedback from your users, you can add a [static "Feedback" button](product-handbook/launch-monitor/#static-feedback-button) or you can [trigger a survey](product-handbook/launch-monitor/automated-feedback-surveys.md), at the right time.

Here's an example with a static feedback button.

```tsx
import { useFlag } from "@reflag/react-sdk";

const MyFeature = () => {
  const { isEnabled, requestFeedback } = useFlag("my-new-feature");

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <button onClick={() => track()}>Use feature</button>
      <button
        onClick={() => requestFeedback({ title: "How do you like this new feature?" })}
      >
        Give feedback
      </button>
    </>
  );
}
```

## Get support

* Need some help? [Chat with us](mailto:hello@reflag.com)
* Latest product updates? [See Changelog](https://reflag.com/changelog)
* Create account: [Sign up](https://app.reflag.com/)
