---
description: Introduction to Reflag Management API
---

# Management API

## What is the Management API?

The Reflag Management API allows developers to programmatically interact with their Reflag accounts.

By using HTTP requests, such as GET, POST, PUT, and DELETE, users can perform actions like retrieving data, updating account settings, or managing resources without accessing the Reflag web application directly. This enables seamless integration with other systems, automation of tasks, and enhanced flexibility in account management.

{% hint style="info" %}
The Reflag Management API serves a different purpose than the Runtime API. For app integrations, please use the [Runtime API](../public-api/).
{% endhint %}

## Authentication

To begin, generate a new [API key](../api-access.md) from your Reflag app settings. An API key is associated with a specific app and is usable across all environments. It comes with designated scopes that define its capabilities.

Pass API keys to the Reflag Management API through the `Authorization` header using the `Bearer` scheme.

## Use Cases

This section covers a few simple use cases for the Reflag Management API.

### Toggling Flags

The Management API enables customers to integrate their back-office systems with Reflag's flag targeting. By using our API, you can quickly provide access to specific flags for a company or user directly from your systems.

Here's a brief guide to enabling the `new-checkout-flow` flag for the `acme-corp` company:

```typescript
await fetch(
  `https://app.reflag.com/api/apps/${appId}/flags/specific-targets/${envId}`,
  {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiToken}`,
    },
    body: JSON.stringify({
      updates: [
        {
          flagKey: "new-checkout-flow",
          value: true,
          companyId: "acme-corp",
        },
      ],
      changeDescription: "Enabled new checkout flow for Acme Corp in prod",
    }),
  }
);
```

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
