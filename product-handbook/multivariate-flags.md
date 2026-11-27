---
description: Serve different configuration values to different users and companies.
---

# Multivariate flags

## What are Multivariate flags?

A **Multivariate flag** lets you serve different configuration values to different users or companies. Each variant has a name and a JSON value. Your application reads the value of the selected variant.

A variant's value can be text, a number, an object, an array, a Boolean, or `null`.

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
      Model: {settings.model}; token limit: {settings.maxTokens}; citations:{" "}
      {settings.includeCitations ? "on" : "off"}
    </p>
  );
}
```

The second argument supplies a default while flags load or if the flag is unavailable. In this example, the default is the `quick` model with a 512-token limit and citations turned off. Pass a default when reading a Multivariate flag; without one, `useFlag()` expects a Boolean value.

## Variants and values

For each environment, configure:

- **Variants:** the named values your application can receive.
- **Specific targets:** users or companies that should receive a particular variant.
- **Rules:** conditions for choosing a variant, or splitting traffic between variants by percentage.
- **Default variant:** the variant to use when no assignment or rule selects one.

Configure each environment separately. Changing a variant or rule in one environment doesn't update the others.

The **default variant** is a choice you make in Reflag. The **SDK default** is the fallback value you pass in code, used while flags load or when a value can't be read.

{% hint style="danger" %}
Don't put API keys, passwords, or other secrets in flag values. Values sent to a browser are visible to its users. Store secrets in a secret manager instead.
{% endhint %}

## How a variant is chosen

Reflag chooses a variant in this order:

1. An assignment for the specific user.
2. An assignment for the user's company.
3. Targeting rules, from top to bottom.
4. The default variant, if nothing else selects a variant.

Rules can match user or company attributes, segments, and other context. They can also split traffic between variants by percentage.

## Usage scenarios

### Start simple

Start with one variant and make it the default. Add more variants and targeting rules when different audiences need different settings.

For structured settings, use consistent fields across variants. [Type safety](type-safety.md) adds autocomplete and type checks in your editor.

### Model selection

For a simple model selector, use strings as the variant values, such as `"quick"` and `"reasoner"`:

```tsx
import { useFlag } from "@reflag/react-sdk";

export function AssistantModel() {
  const model = useFlag("assistant-model", "quick");
  return <p>Selected model: {model}</p>;
}
```

### Entitlements

Use Multivariate flags for plan-specific settings, such as usage limits or available models. Target a company's plan to choose the settings for each subscription tier. See [Feature entitlements](feature-entitlements/README.md) for examples.

If access and configuration are separate decisions, use a Boolean flag such as `assistant-enabled` for the on/off switch and a Multivariate flag for the settings.

## Start using Multivariate flags

1. Create a **Multivariate** flag.
2. Open its **Variants** tab and configure variants, specific targets, rules, and the default for the selected environment.
3. Save, then configure and verify any other environments separately.
4. Read the value with a [Reflag SDK](../supported-languages/overview.md), passing a default.

## Migrating from Remote config

Legacy Remote config and Multivariate flags are separate features. Existing remote configs aren't converted automatically.

### Using an AI agent

An agent connected to [Reflag MCP](../api/mcp.md) can read your existing Remote configs and help migrate them to Multivariate flags.

Start by asking for a migration plan, rather than an immediate bulk migration:

> Review this app's legacy Remote configs through Reflag MCP. Check the code and any available usage data for direct and indirect reads across environments. A generated type isn't proof of use, and a flag that's off in one environment may still be used elsewhere. If I haven't already answered, ask me whether older app versions or open browser tabs need to keep working during rollout or rollback.
>
> For configs still in use, propose new Multivariate flag keys and values that make sense for the code that reads them. Prefer a single value for one setting or a flat object with descriptive fields for related settings. For example, if the old variant key represents a plan, call the field `plan` and put `upgradeLink` and `upgradeMessage` alongside it. Don't copy the `{ key, payload }` wrapper by default. Preserve the variant keys, defaults, and config targeting in each environment, and leave Boolean access rules unchanged. Only bring over fields the app needs. Preserve the app's behavior, including any distinction between `null` and missing fields it relies on. Ask if you're unsure whether a field can be dropped.
>
> Summarize straightforward migrations and their proposed value shapes as a group. List individual configs only when there's doubt about whether they're still used or how to migrate them. Ask for my approval before editing code, creating flags, or changing configuration. Once approved, create and configure the new flags, then update every active legacy config read in the code you're migrating to read the new value directly, with a default that matches the approved shape and preserves the existing fallback behavior. Read back the definitions in each environment and compare them with the approved mapping. Check behavior for representative users with and without access. Leave the old configs unchanged.

### Manual migration

1. **Review the existing config.** Record its keys and JSON payloads, along with the assignments, rules, and default in each environment. Check whether your application reads `config.payload`, `config.key`, or both.
2. **Create a Multivariate flag with a new key**, such as `assistant-settings`. Keep the original Release flag and its access rules in place while you migrate.
3. **Shape the value for your app.** Use a single value for one setting, like `"pro"` or `10`, or a flat object with named fields for related settings. Keep nested data where it makes sense, but don't carry over `{ key, payload }` just because it was the old format. For example, if the app used `config.key` for the plan and `config.payload` for upgrade details, the new value could be `{ "plan": "pro", "upgradeLink": "/billing", "upgradeMessage": "Upgrade to unlock this feature." }`. The variant itself still has the key `pro`.
4. **Recreate targeting in each environment.** Keep the variant keys and copy user/company assignments, rules, and the default. Preserve the original evaluation order when rules overlap. Unlike legacy Remote config, Multivariate variants and values are configured separately in each environment.
5. **Update and test your application.** [Upgrade to SDK v2](../supported-languages/migrating-from-v1.md) and read the new value directly, rather than through `.config`. Keep existing Boolean access checks and preserve any differences in behavior between `null` and missing fields. Compare the old and new behavior for representative users and companies in each environment.
6. **Retire the old config once clients no longer use it.** Leave it available for any clients still on SDK v1. Don't delete a Release flag that's still used for access checks.
