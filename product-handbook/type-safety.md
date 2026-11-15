---
description: Register flag keys and schemas with the Reflag SDKs and CLI.
---

# Type safety

The Reflag SDKs infer return types from the defaults you pass, without a generated file. Registering your flag schemas also catches misspelled keys and incompatible non-null defaults.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function TokenLimit() {
  const settings = useFlag("assistant-settings", { maxTokens: 512 });
  return <span>{settings.maxTokens}</span>;
}
```

The fallback determines the widened return type: `512` becomes `number`, not the literal type `512`. Bare or explicit-`undefined` reads return Boolean; explicit `null` requests arbitrary JSON.

## Set up type safety for flags

Install the Reflag CLI and generate declarations for your flags:

```sh
npm install --save-dev @reflag/cli
npx reflag init
npx reflag flags types
```

Choose the appropriate output format during initialization, or pass it explicitly:

```sh
npx reflag flags types --format react --out gen/flags.d.ts
npx reflag flags types --format node --out gen/flags.d.ts
npx reflag flags types --format vue --out gen/flags.d.ts
```

Generate only the declarations needed by your application's SDKs and ensure TypeScript includes the output. These examples show alternative formats; do not overwrite the same file three times in your actual build.

Generation uses current production-environment Multivariate values to describe possible JSON shapes. Empty or unknown data remains JSON-capable rather than being invented as Boolean. Regenerate when flag definitions change. Generation errors must fail your build rather than leaving an unnoticed stale declaration file.

You can commit the generated file, or ignore it and generate it on local setup and in CI. If you ignore it:

```sh
echo "gen/flags.d.ts" >> .gitignore
```

## Registered schemas and defaults

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
  return <span>{settings.model}: {settings.maxTokens}</span>;
}
```

Registered non-null defaults must match the selected key's schema, including required/nested fields, array elements, and literal unions. Named interfaces and readonly defaults are supported. This does not change bare Boolean reads or the arbitrary-JSON meaning of explicit `null`.

The SDK validates that defaults are JSON-compatible and checks the selected value's top-level category. It does **not** recursively enforce generated schemas on server-returned values. Add application validation when nested data is a trust boundary.

## Using in CI/CD pipelines

Store an authorized [Management API key](../api/api-access.md) in your CI secret store. Do not commit it or send it to a browser.

```yaml
- name: Generate flag types
  run: npx reflag flags types
  env:
    REFLAG_API_KEY: ${{ secrets.REFLAG_CI_API_KEY }}
```

Install the CLI from your lockfile before running this step.

Using v1? [Legacy docs](../legacy/v1/README.md) · [Upgrade guide](../supported-languages/migrating-from-v1.md).
