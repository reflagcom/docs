---
description: Configure JSON-valued Multivariate flags for different audiences.
---

# Remote config

## What is remote config?

Use a **Multivariate flag** when different users or companies need different configuration values. Unlike a Boolean flag, which answers an access question, a Multivariate flag selects a named variant and returns its JSON value directly.

A value can be an object, array, string, number, Boolean, or `null`.

For example, configure `assistant-settings` with variants containing different model settings, then read it with the React SDK:

```tsx
import { useFlag } from "@reflag/react-sdk";

export function AssistantSettings() {
  const settings = useFlag("assistant-settings", {
    model: "quick",
    maxTokens: 512,
    includeCitations: false,
  });

  return (
    <p>
      Model: {settings.model}; token limit: {settings.maxTokens};
      citations: {settings.includeCitations ? "on" : "off"}
    </p>
  );
}
```

The second argument is a default, used while flags load or if the flag can't be read. Always pass one when reading a Multivariate flag; without it, `useFlag()` reads the flag as a Boolean. Pass `null` to accept any JSON value and narrow it yourself.

## Config values

Each environment's definition contains:

- **Variants:** unique keys and their JSON values. The SDK returns the selected variant's **value**.
- **Specific targets:** explicit user/company assignments to variants.
- **Ordered rules:** filters and results, including percentage distributions.
- **Default variant:** the authored selection when no more-specific target or applicable rule selects a variant.

Variants, targets and rules are set per environment. Changes in one environment aren't copied to the others. A Multivariate flag with no variants returns `null`.

The default variant is set in Reflag. It's different from the default you pass in code, which is only used when the SDK can't read the flag.

{% hint style="danger" %}
Do not store credentials or other secrets in flag values. Anything sent to a browser can be inspected by its users. Keep application secrets in an appropriate secret manager.
{% endhint %}

## Matching algorithm

Specific user assignments take precedence over company assignments. Then rules are considered in order; the default variant handles contexts that do not select an earlier result. Rules can use the supported user, company, segment, and other-context filters. Percentage distributions assign variants using the configured bucketing attribute.

To turn a feature on or off, use a separate Boolean flag. Values such as `false`, `0` or `null` in a Multivariate flag are ordinary data, so don't use them to decide access.

## Usage scenarios

### Basic flag configuration

Use a single default variant for configuration you want to manage in one place, or add rules and more variants when different audiences need different settings. Pass a safe default in code.

The SDK checks only the top-level type of a value against your default. If your application depends on nested fields, validate them. [Generated types](type-safety.md) are checked at compile time only.

### Multivariate flags

For string-valued variants, the value can itself be the model or mode your application needs:

```tsx
import { useFlag } from "@reflag/react-sdk";

export function AssistantModel() {
  const model = useFlag("assistant-model", "quick");
  return <p>Selected model: {model}</p>;
}
```

### Entitlements

Combine a Boolean entitlement such as `assistant-enabled` with a separate settings flag when access and configuration are independent decisions. Use company attributes and rules to pick settings for each subscription tier.

## Start using remote config

1. Create a **Multivariate** flag in an app where Multivariate support is available.
2. Open its **Variants** tab and configure variants, specific targets, rules, and the default for the selected environment.
3. Save, then configure and verify any other environments separately.
4. Read the value with a [Reflag SDK](../supported-languages/overview.md), passing a default.
