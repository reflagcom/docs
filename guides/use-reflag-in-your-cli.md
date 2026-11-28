---
description: Gate a workflow in your own CLI with Reflag.
icon: rectangle-terminal
---

# Use Reflag in your CLI

This guide is about **your application's CLI**, not the Reflag management CLI. Your CLI asks your backend for flag values; the backend evaluates them with the Node.js SDK. That way, your Reflag keys stay on your servers instead of shipping inside the CLI.

## Evaluate on your backend

Create an endpoint such as `POST /get-flags`, authenticated with your existing API-token or OAuth flow. Look up the user and company from the caller's token, rather than trusting identities the CLI sends.

Then evaluate the flags for that context:

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

Return only the values your CLI needs:

```json
{
  "exportEnabled": true,
  "settings": { "maxRows": 1000 }
}
```

## Gate the CLI workflow

In the CLI, use the Boolean directly. Users can modify a CLI they run, so if the CLI calls your backend to perform the operation, check the flag there too.

```typescript
export function canExport(response: { exportEnabled: boolean }) {
  return response.exportEnabled;
}
```

## Track successful usage separately

When the operation succeeds, track it with the same context, and configure the flag's adoption rules to match the event name.

```typescript
import { ReflagClient, type Context } from "@reflag/node-sdk";

const client = new ReflagClient({ secretKey: process.env.REFLAG_SECRET_KEY ?? "" });
const initialized = client.initialize();

export async function recordExport(context: Context) {
  await initialized;
  await client.bindClient(context).track("Exported CSV");
}
```

Initialize the client once per process and flush queued events before your server process exits. See the [Node.js SDK](../supported-languages/node-sdk/README.md) for lifecycle options.
