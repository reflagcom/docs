---
description: Use SDK v2 with anonymous users and optional company context.
---

# Anonymous users

Reflag supports contexts without a user, including public pages and company-branded applications. Omit unknown identities rather than supplying empty-string IDs. Rules that require an omitted identity or attribute cannot match it.

## How to toggle features for anonymous users

For a global Boolean flag, use Everyone/No-one access and an empty context. Initialize the Node client before reading:

{% tabs %}
{% tab title="Node.js" %}
```typescript
import { ReflagClient } from "@reflag/node-sdk";

const client = new ReflagClient({ secretKey: process.env.REFLAG_SECRET_KEY ?? "" });
await client.initialize();
const enabled = client.getFlag({}, "export-to-csv");
console.log(enabled);
```
{% endtab %}
{% tab title="React" %}
```tsx
import { ReflagProvider, useFlag } from "@reflag/react-sdk";

function ExportButton() {
  const enabled = useFlag("export-to-csv");
  return enabled ? <button>Export</button> : null;
}

export function App() {
  return (
    <ReflagProvider publishableKey="your-publishable-key" context={{}}>
      <ExportButton />
    </ReflagProvider>
  );
}
```
{% endtab %}
{% endtabs %}

Bare reads return Boolean with implicit false. Supply a positional default when reading JSON-valued Multivariate flags.

## How to toggle features for anonymous users where you know their company

Provide only the company when your application has a trustworthy company identity. Company targeting can then apply without inventing a user.

{% tabs %}
{% tab title="Node.js" %}
```typescript
import { ReflagClient } from "@reflag/node-sdk";

const client = new ReflagClient({ secretKey: process.env.REFLAG_SECRET_KEY ?? "" });
await client.initialize();
const companyClient = client.bindClient({ company: { id: "petes-burgers" } });
const enabled = companyClient.getFlag("export-to-csv");
console.log(enabled);
```
{% endtab %}
{% tab title="React" %}
```tsx
import { ReflagProvider, useFlag } from "@reflag/react-sdk";

function ExportButton() {
  const enabled = useFlag("export-to-csv");
  return enabled ? <button>Export</button> : null;
}

export function App() {
  return (
    <ReflagProvider
      publishableKey="your-publishable-key"
      context={{ company: { id: "petes-burgers" } }}
    >
      <ExportButton />
    </ReflagProvider>
  );
}
```
{% endtab %}
{% endtabs %}

A browser's company ID is not an authorization boundary. Enforce sensitive access on your authenticated server, using context derived from your own session or API-token lookup. See [Node SDK v2](../supported-languages/node-sdk/README.md) and [React SDK v2](../supported-languages/react-sdk/README.md) for complete setup.
