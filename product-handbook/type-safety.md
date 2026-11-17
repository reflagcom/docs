---
description: Register flag keys and schemas with the Reflag SDKs and CLI.
---

# Type safety

The Reflag SDKs infer a flag's type from the default you pass, so you get useful types without any setup. Registering your flags also catches misspelled keys and defaults that don't match your flag's values.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function TokenLimit() {
  const settings = useFlag("assistant-settings", { maxTokens: 512 });
  return <span>{settings.maxTokens}</span>;
}
```

Here the default `512` gives `maxTokens` the type `number`. Without a default, you get a Boolean; with `null`, you get any JSON value.

## Set up type safety for flags

Install the Reflag CLI and generate declarations for your flags:

```sh
npm install --save-dev @reflag/cli
npx reflag init
npx reflag flags types
```

`reflag init` asks which SDK you use. To choose the format explicitly:

```sh
npx reflag flags types --format react --out gen/flags.d.ts
npx reflag flags types --format node --out gen/flags.d.ts
npx reflag flags types --format vue --out gen/flags.d.ts
```

Make sure TypeScript includes the output file.

Types are generated from the variant values in your production environment. Regenerate them when your flags change, and let generation errors fail your build so the types don't silently go stale.

You can commit the generated file, or ignore it and generate it on local setup and in CI. If you ignore it:

```sh
echo "gen/flags.d.ts" >> .gitignore
```

## Check defaults against your flags

A React registration looks like this (the CLI writes the appropriate augmentation for you):

```tsx
import { useFlag } from "@reflag/react-sdk";

declare module "@reflag/react-sdk" {
  interface Flags {
    "assistant-settings": { maxTokens: number; model: "quick" | "reasoner" };
  }
}

export function RegisteredSettings() {
  const settings = useFlag("assistant-settings", {
    maxTokens: 512,
    model: "quick",
  });
  return (
    <span>
      {settings.model}: {settings.maxTokens}
    </span>
  );
}
```

With a registered flag, TypeScript checks that the default you pass matches the flag's type, including nested fields.

These checks happen at compile time only. See your SDK's guide for what it checks at runtime.

## Using in CI/CD pipelines

Store a [Management API key](../api/api-access.md) as a secret in your CI system.

```yaml
- name: Generate flag types
  run: npx reflag flags types
  env:
    REFLAG_API_KEY: ${{ secrets.REFLAG_CI_API_KEY }}
```

Install your project's dependencies before this step, so it uses the CLI version from your lockfile.
