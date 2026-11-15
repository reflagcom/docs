---
description: Register flag keys and direct-value schemas with SDK v2 and CLI 2.
---

# Type safety

Reflag SDK v2 can infer a direct return type from the default you pass, without a generated file. Registering your flag schemas also catches misspelled keys and incompatible non-null defaults.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function TokenLimit() {
  const settings = useFlag("assistant-settings", { maxTokens: 512 });
  return <span>{settings.maxTokens}</span>;
}
```

The fallback determines the widened return type: `512` becomes `number`, not the literal type `512`. Bare or explicit-`undefined` reads return Boolean; explicit `null` requests arbitrary JSON.

## Set up type safety for flags

Use **CLI 2 with Node/React/Vue SDK v2**. Keep CLI 1 with v1 applications. CLI 2 and the SDK v2 packages must be available before using these installation commands; a staging server deployment alone does not release them.

```sh
npm install --save-dev @reflag/cli@2
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

Install CLI 2 from your lockfile before running this step. The command is **`reflag flags types`**, not `reflag types generate` or `reflag flags generate`. See the [SDK migration guide](../supported-languages/migrating-from-v1.md) before replacing legacy wrapper-shaped declarations.
