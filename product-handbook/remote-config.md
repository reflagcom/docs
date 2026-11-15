---
description: Configure JSON-valued Multivariate flags for different audiences.
---

# Remote config

## What is remote config?

Use a **Multivariate flag** when different users or companies need different configuration values. Unlike a Boolean flag, which answers an access question, a Multivariate flag selects a named variant and returns its JSON value directly.

A value can be an object, array, string, number, Boolean, or `null`. There are no reserved application fields: names such as `model`, `config`, `payload`, or `enabled` are ordinary data that you choose.

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

The second argument is the application's fallback value. A bare `useFlag("assistant-settings")` is a Boolean read, even if the flag is Multivariate. Supply an appropriate default for a JSON read; use explicit `null` if you need arbitrary JSON and will narrow the result yourself.

## Config values

Each environment's definition contains:

- **Variants:** unique keys and their JSON values. The SDK returns the selected variant's **value**.
- **Specific targets:** explicit user/company assignments to variants.
- **Ordered rules:** filters and results, including percentage distributions.
- **Default variant:** the authored selection when no more-specific target or applicable rule selects a variant.

Definitions, targeting, and values are environment-specific. Save the complete definition together; changing another environment does not automatically copy its values or rules. An empty Multivariate definition evaluates to `null`.

The authored default variant is different from the application's SDK fallback. A real default-variant selection retains its selection identity; the SDK fallback does not invent one.

{% hint style="danger" %}
Do not store credentials or other secrets in flag values. Anything sent to a browser can be inspected by its users. Keep application secrets in an appropriate secret manager.
{% endhint %}

## Matching algorithm

Specific user assignments take precedence over company assignments. Then rules are considered in order; the default variant handles contexts that do not select an earlier result. Rules can use the supported user, company, segment, and other-context filters. Percentage distributions select a variant using the configured bucketing attribute; preserve stable variant/rule identities when editing definitions.

For a separate on/off gate, use a Boolean flag. A Multivariate value of `false`, `0`, `""`, `[]`, or `null` is application data, not a universal access-denied signal. Do not use JavaScript truthiness to decide whether a variant was selected.

## Usage scenarios

### Basic flag configuration

Use a single default variant for centrally managed configuration, or add rules and more variants as different audiences need different settings. Choose a safe application fallback and validate any nested data your application depends on.

Non-null SDK defaults check the selected value's **top-level category**. They do not recursively validate a returned object's fields. Generated TypeScript declarations are compile-time assistance, not runtime validation.

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

Combine a Boolean entitlement such as `assistant-enabled` with a separate settings flag when access and configuration are independent product decisions. Use company attributes and rules to select settings for each subscription tier. Read only the flags needed by the workflow.

## Start using remote config

1. Create a **Multivariate** flag in an app where Multivariate support is available.
2. Open its **Variants** tab and configure variants, specific targets, rules, and the default for the selected environment.
3. Save, then configure and verify any other environments separately.
4. Read the value with a [Reflag SDK](../supported-languages/overview.md) and a positional default.

Using v1? [Legacy docs](../legacy/v1/README.md) · [Upgrade guide](../supported-languages/migrating-from-v1.md).
