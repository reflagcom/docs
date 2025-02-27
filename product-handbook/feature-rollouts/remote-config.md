---
description: Learn more about remote config in Bucket
---

# Remote config

{% hint style="info" %}
This feature is currently in Beta
{% endhint %}

## What is remote config?

Remote config serves as a dynamic and flexible approach to configuring your features in relation to the targeted audience. A feature's remote config consists of a set of **config values**. Each config value is a **key** — **payload** pair where the keys are unique and the values are JSON values. Both are supplied by you.

Config values have **environment-specific targeting rules** used by Bucket to match them against your users and companies.

The use of remote config reduces the need for constant code changes, facilitating seamless adjustments to application settings. This capability not only streamlines operational processes but also enhances responsiveness by allowing you to test and modify features on-the-fly.

This is what remote config looks like in React:

{% code fullWidth="false" %}
```tsx
function AISummarizerRemotelyConfigured({copy}: {copy: string}) {
  const { config } = useFeature('my-ai-feature');

  return <AISummarizer model={config.model} provider={config.provider} />
}
```
{% endcode %}

{% hint style="info" %}
Remote config is works independently from [access rules](feature-targeting-rules.md). In other words, remote config isn't affect by whether the user has access to the feature or not.
{% endhint %}

## Config values

Config values, as noted above, consist of:

* A mandatory unique string **key**, supplied by you. They key is unique per feature. If you just need a string configuration, you can use the key by itself.
* An optional JSON **payload**, that can be any valid JSON value: `null`, `string`, `number`, `array` or `object`
* Targeting rules which are environment-specific, allowing you to target different config values to different users/companies in different environments
* Default setting, which tells Bucket which config value to use as fallback if no targeting set matches the given user/company context

{% hint style="danger" %}
Do not store sensitive data in the key or the payload of the config value even if the feature is marked as **secret.**

Sensitive data, like API keys or passwords should be managed with proper care outside of Bucket
{% endhint %}

The config values are shared across all environments. Any new value that you add in one environment, will automatically be added to other environments but without any targeting rules, effectively making it disabled.

<figure><img src="../../.gitbook/assets/remote config - 3.png" alt=""><figcaption><p>Remote config with three values in the Production environment</p></figcaption></figure>

In the image above, a feature is set up to have three config values. This is an example of configuring  LLM settings for an AI feature. The "gpt-4o" value is the default and served with all requests that do not match any other, more specific values. The "claude-3-7-sonnet" value will be served to users in "Apex" and "Blaze" companies while the "gpt-5" value will be served to the "Adrian Borer" user as well as the "Logix" and "Hightrix" companies.

{% hint style="info" %}
We recommend that you chose simple text values for config value keys. Try to avoid using spaces or any special characters if you don't intend to use the key as display text in your application.
{% endhint %}

## Matching algorithm&#x20;

* Users, companies and segments can appear only once in the targeting rules for each environment. This means that you cannot configure two distinct config values in the same environment to target the same entity explicitly
* Matches are not evaluated in the order of their appearance, but in order of their **specificity**:
  * Directly specified users match first
  * Then, directly specified companies match
  * Then, going top to bottom in order of appearance of the config values, segments specified are matched against the company
  * Finally, if no rule is matched, the default one is used
* **`Other context`** is  not taken into account when evaluating config value targeting rules
* _Percentage rollout_ is not supported for Remote config

## Usage scenarios

In addition to the AI model configuration example above, this section shows some other scenarios that can be solved by using remote config.

### Basic feature configuration

Sometimes it is useful to simply store some feature-specific config that can be used by your application. This is true even if you do not plan to have different config values targeted to different users. You can create a single config value (which is always going to be set as **default**) and set its payload to any JSON object. In such cases, the key is not actually useful and can be set to any value you chose.

On the application side, you can check if the user has access to the feature, and in that case, use the accompanying config to suit your needs.

{% hint style="info" %}
Since the config values are evaluated independently from the access, your application can still use the remote config even if the feature is disabled for the user. For example, this could be used to keep information in the payload that can explain to the user why the feature is not available, or offer alternatives, etc.
{% endhint %}

### Multi-variate feature flags

The **multi-variate feature flag** is the classical example that is directly enabled by the use of remote feature config in your application. To create a multi-variate feature flag follow these simple steps:

1. Create feature, and define it's access rules, if any,
2. Create the "_variants_" by using config values. Each config value has its key representing the variant name.
3. Adjust the targeting rules on each config value according to your needs,
4. Payloads can be be ignored if additional configuration is not required for each variant.

### Entitlements

Remote config is a great tool when used to support [entitlements scenarios](../feature-entitlements/). For each feature you create, you can add config values targeting different **companies** or **company segments** with different values. Each config value can then define the restrictions on the feature use.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Example of AI model variations by subscription tier</p></figcaption></figure>

The image above exemplifies a feature called "_AI Transcripts_" which serves five different categories of customers: "_Not customers_", "_Signed-Up_", "_Trial_", "_Pro_" and "_Enterprise_". Each category is entitled to different feature tier.

## Start using remote config

First, [create your first feature](../create-your-first-feature.md), if you haven't yet. Then, open your feature and click on the "_Remote config_" tab at the top.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption><p>Click "Create config value" to start</p></figcaption></figure>

Once you have set up your feature and config values, don't forget to configure the targeting rules in other environments as well.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption><p>The environment picker</p></figcaption></figure>

Finally, use [any of our SDKs](../../supported-languages/overview.md) to access the feature and its config in your application.
