---
description: Learn more about remote config in Bucket
---

# Remote config

{% hint style="info" %}
This feature is currently in Beta
{% endhint %}

## What is remote config?

Remote config serves as a dynamic and flexible approach to managing feature behavior in relation to the targeted audience. A feature's remote config consists of a set of **config values**. Each config value is a **key** — **payload** pair where the keys are unique and the values are JSON values. Both are supplied by the user. Additionally, config values have **environment-specific targeting rules** used by Bucket to match them against [feature access requests](feature-targeting-rules.md).

The use of remote config reduces the need for constant code changes, facilitating seamless adjustments to application settings. This capability not only streamlines operational processes but also enhances responsiveness by allowing you to test and modify features on-the-fly.

## Config values

Config values, as noted above, consist of:

* A mandatory unique **key**, supplied by the user. They key is unique per feature across all environments,
* An optional JSON **payload**, that can be any valid JSON value: `null`, `string`, `number`, `array` or `object,`
* Targeting rules, which are environment-specific, allowing you to target different config values to different users in different environments.
* Default setting, which tells Bucket which config value to use as fallback if no targeting rule matches the user context.

{% hint style="danger" %}
Do not store sensitive data in the key or the payload of the config value even if the feature is marked as **secret.**

API keys, passwords or PII data should be handled by your organization and not entrusted to Bucket.
{% endhint %}

The config values are shared across all environments. Any new value that you add in one environment, will automatically be added to other environments but without any targeting rules, making it disabled.

<figure><img src="../../.gitbook/assets/image.png" alt=""><figcaption><p>Remote config with two values in Production environment</p></figcaption></figure>

In the image above, the feature is set up to have two config values, in this example LLM settings. The "_basic_" value is the default and served with all requests that do not match any other, more specific values. The "_advanced_" value, will only be served to the users of "_Acme_" company.

{% hint style="info" %}
We recommend that you chose simple text values for config value keys. Try to avoid using spaces or any special characters if you don't intend to use the key as display text in your application.
{% endhint %}

## Matching algorithm&#x20;

* **`Other context`** is not taken into account when evaluating config value targeting rules,
* Rules are not evaluated in the order of their appearance, but in order of their **specificity**:
  * The rule that matches the user explicitly is selected first,
  * Otherwise, the rule that matches the company explicitly is selected,
  * The first rule that matches the company as part of a segment is selected,
  * Finally, if no rule is matched, the default one is used.,
* Users, companies and segments can appear only once in targeting rules for each environment. This means that you cannot configure two distinct config values in the same environment to target the same entity explicitly,
* Finally, "_percentage rollout_" ability is not supported.

{% hint style="info" %}
The config value targeting rules are evaluated independently from the access rules, and are returned to the caller even if the feature access is disabled.
{% endhint %}

## Usage scenarios

In you application, configuration can play a crucial role in determining application behavior and user experience. The next sections present some possible scenarios that can be solved by using remote config.

### Multi-variate features

The **multi-variate feature** is the classical example that is directly enabled by the use of remote feature config in your application. To create a multi-variate feature follow these simple steps:

1. Create the feature itself, and define it's access rules, if any,
2. Create the "_variants_" by using config values. Each config value has its key representing the variant name.
3. Adjust the targeting rules on each config value according to your needs,
4. Payloads can be be ignored if additional configuration is not required for each variant.

{% hint style="success" %}
Once general use case is to offer slightly different application behavior or look and feel based on the target audience. An example is adjusting for region-specific functionality.
{% endhint %}

### Basic feature configuration

Sometimes it is useful to simply store some feature-specific config that can be used by your application. This is true even if you do not plan to have different config values targeted to different users. You can create a single config value (which is always going to be set as **default**) and set its payload to any JSON object. In such cases, the key is not actually useful and can be set to any value you chose.

On the application side, you can check if the user has access to the feature, and in that case, use the accompanying config to suit your needs.

{% hint style="info" %}
Since the config values are evaluated independently from the access, your application can still use the remote config even if the feature is disabled for the user. This is useful, when the payload contains data that can explain to the user why the feature is not available, or offer alternatives, etc.
{% endhint %}

### Entitlements

Remote config is a great tool when used to support [entitlements scenarios](../feature-entitlements/). For each feature you create, you can add config values targeting different **companies** or **company segments** with different values. Each config value can, then, define the restrictions on the feature use.

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Example of AI model variations by subscription tier</p></figcaption></figure>

The image above exemplifies a feature called "_AI Transcripts_" which serves five different categories of customers: "_Not customers_", "_Signed-Up_", "_Trial_", "_Pro_" and "_Enterprise_". Each category is entitled to different feature tier.

## Start using remote config

First, [create your first feature](../create-your-first-feature.md), if you haven't yet. Then, open your feature and click on the "_Remote config_" tab at the top.

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption><p>Click "Create config value" to start</p></figcaption></figure>

Once you have set up your feature and config values, don't forget to configure the targeting rules in other environments as well.

<figure><img src="../../.gitbook/assets/image (6).png" alt=""><figcaption><p>The environment picker</p></figcaption></figure>

Finally, use [any of our SDKs](../../supported-languages/overview.md) to access the feature and its config in your application.
