---
description: Gate a workflow in your own CLI with SDK v2.
icon: rectangle-terminal
---

# Use Reflag in your CLI

This guide is about **your application's CLI**, not the Reflag management CLI. Authenticate your caller using your existing API-token or OAuth flow, then evaluate flags with the server-side Node SDK v2. Do not embed a Reflag secret SDK key or a Management API key in a distributed CLI.

## Evaluate on your backend

Create an authenticated endpoint such as `POST /get-flags`. Look up the user and company from your trusted session/token store; do not trust caller-supplied identities or subscription attributes.

A reusable evaluation helper can accept the resulting context:

```typescript
import { ReflagClient, type Context } from "@reflag/node-sdk";

const client = new ReflagClient({ secretKey: process.env.REFLAG_SECRET_KEY ?? "" });
const initialized = client.initialize();

export async function getCliAccess(context: Context) {
  await initialized;
  const bound = client.bindClient(context);
  return {
    exportEnabled: bound.getFlag("export-to-csv"),
    settings: bound.getFlag("export-settings", { maxRows: 1000 }),
  };
}
```

Call `getCliAccess()` after authentication and return only the values your CLI needs. This registers checks for these requested roots. Diagnostic APIs are not a substitute for application reads.

The JSON response contains direct values, not flag wrappers:

```json
{
  "exportEnabled": true,
  "settings": { "maxRows": 1000 }
}
```

## Gate the CLI workflow

Use the Boolean directly and validate the response before using nested configuration. Recheck sensitive access on the backend that performs the operation; a CLI display check is not authorization.

```typescript
export function canExport(response: { exportEnabled: boolean }) {
  return response.exportEnabled;
}
```

If you expose a list of enabled Boolean keys instead, use `enabledKeys.includes("export-to-csv")`. Do not treat a general JSON-valued flag map as a list of enabled keys or apply truthiness to Multivariate values.

## Track successful usage separately

After the protected operation succeeds, track the application's adoption event with the same authenticated context. Configure the flag's adoption rules to match that event.

```typescript
import { ReflagClient, type Context } from "@reflag/node-sdk";

const client = new ReflagClient({ secretKey: process.env.REFLAG_SECRET_KEY ?? "" });
const initialized = client.initialize();

export async function recordExport(context: Context) {
  await initialized;
  await client.bindClient(context).track("Exported CSV");
}
```

There is no `getFlag(...).track()` wrapper method in v2. Initialize the client once per process and use its normal lifecycle/flush handling for short-lived server processes. See [Node SDK v2](../supported-languages/node-sdk/README.md) and the [migration guide](../supported-languages/migrating-from-v1.md).
