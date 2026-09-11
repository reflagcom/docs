---
description: Introduction to Reflag Management API
---

# Management API

## What is the Management API?

The Reflag Management API allows developers to programmatically interact with their Reflag accounts.

Use it to create and update flags, manage users and companies, and grant flag access from your backend or back-office tools. For TypeScript applications, the [Management SDK](../../sdk/@reflag/management-sdk/README.md) provides typed methods for these operations.

{% hint style="info" %}
Use the [Runtime API](../public-api/) and runtime SDKs to evaluate flags and track activity. Use the Management API to manage entities and change targeting. Application backends can use both, for example to create a user, grant flag access, and then evaluate that flag.
{% endhint %}

## Authentication

To begin, generate a new [API key](../api-access.md) from your Reflag app settings. An API key is associated with a specific app and is usable across all environments. It comes with designated scopes that define its capabilities.

Pass API keys to the Reflag Management API through the `Authorization` header using the `Bearer` scheme.

## Use Cases

This section covers a few simple use cases for the Reflag Management API.

### Toggling Flags

The Management API enables customers to integrate their back-office systems with Reflag's flag targeting. By using our API, you can quickly provide access to specific flags for a company or user directly from your systems.

Enable the existing `new-checkout-flow` flag for an existing `acme-corp` company with the Management SDK:

```typescript
import { Api } from "@reflag/management-sdk";

const api = new Api({ accessToken: process.env.REFLAG_API_KEY });

await api.updateCompanyFlags({
  appId,
  envId,
  companyId: "acme-corp",
  updates: [{ flagKey: "new-checkout-flow", specificTargetValue: true }],
  changeDescription: "Enabled new checkout flow for Acme Corp in prod",
});
```

This uses `PATCH /apps/{appId}/envs/{envId}/companies/{companyId}/flags`.
For users, use `updateUserFlags` and the corresponding `/users/{userId}/flags`
endpoint. Set `specificTargetValue` to `null` to remove specific targeting;
other targeting rules may still enable the flag.

### Create a user and immediately enable a flag

Use a synchronous Management API upsert when a new user must be available to a
subsequent targeting request. Runtime tracking ingestion is asynchronous, so
sending a tracking event is not a substitute for awaiting this upsert.

The flag must already exist. Your Management API key needs `write:entities` to
upsert the user and `write:flag:targeting` to enable the flag. See
[Management API Access](../api-access.md#management-api-access).

```typescript
// `api` is the Management SDK client initialized above.
const scope = { appId, envId };
const userId = "user-123";

await api.upsertUser({ ...scope, userId, name: "Jane Doe" });

const { flagStateVersion } = await api.updateUserFlags({
  ...scope,
  userId,
  updates: [{ flagKey: "new-checkout-flow", specificTargetValue: true }],
});

// Optional: evaluate immediately using an initialized Node SDK client
// configured for the same app and environment.
await client.refreshFlags(flagStateVersion);
const flag = client.getFlag("new-checkout-flow", { user: { id: userId } });
```

Awaiting `upsertUser` makes the user available to the targeting request. Flag
configuration propagation to runtime SDKs is separate: `refreshFlags(flagStateVersion)`
requests the version containing the change or newer instead of waiting for the
next automatic refresh. If refreshing fails, the Node SDK retains cached or
fallback flags rather than throwing.

The same workflow works for companies with `upsertCompany` and `updateCompanyFlags`.
For more detail, see [Waiting for flag changes to reach an SDK](../../sdk/@reflag/management-sdk/README.md#waiting-for-flag-changes-to-reach-an-sdk).

#### Automating TypeScript Type Generation with Reflag CLI in CI/CD

To automate TypeScript type generation in your CI/CD pipeline, use the Reflag CLI.

1. First, ensure the Reflag CLI is installed and set up in your project.
2. Second, store the API key in the environment (e.g, action secrets within GitHub).

To use the tool in your CI/CD pipeline, simply invoke it as follows:

```sh
# Invoke directly if the environment contains the REFLAG_API_KEY:
npx reflag flags types

# Manually specify the key if not in the environment or using a different name:
npx reflag flags types --api-key ${REFLAG_CI_KEY}
```

## Further Documentation <a href="#install-the-sdk" id="install-the-sdk"></a>

For a comprehensive overview of the available Reflag Management API endpoints, refer to the [API Reference](reflag-api-reference.md) section.
