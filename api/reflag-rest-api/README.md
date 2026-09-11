---
description: Introduction to Reflag Management API
---

# Management API

## What is the Management API?

The Reflag Management API allows developers to programmatically interact with their Reflag accounts.

Use HTTP requests to create and update flags, manage users and companies, and grant flag access from your backend or back-office tools, in any language.

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

Enable the existing `new-checkout-flow` flag for an existing `acme-corp` company.
Set `APP_ID`, `ENV_ID`, and `REFLAG_API_KEY` to your app ID, environment ID, and
Management API key:

```sh
curl --fail-with-body \
  --request PATCH \
  "https://app.reflag.com/api/apps/${APP_ID}/envs/${ENV_ID}/companies/acme-corp/flags" \
  --header "Authorization: Bearer ${REFLAG_API_KEY}" \
  --header "Content-Type: application/json" \
  --data '{
    "updates": [
      { "flagKey": "new-checkout-flow", "specificTargetValue": true }
    ],
    "changeDescription": "Enabled new checkout flow for Acme Corp in prod"
  }'
```

For users, send a PATCH request to
`/apps/{appId}/envs/{envId}/users/{userId}/flags` with the same body format.
Set `specificTargetValue` to `null` to remove specific targeting;
other targeting rules may still enable the flag.

### Create a user and immediately enable a flag

Use a synchronous Management API upsert when a new user must be available to a
subsequent targeting request. Runtime tracking ingestion is asynchronous, so
sending a tracking event is not a substitute for awaiting this upsert.

The flag must already exist. Your Management API key needs `write:entities` to
upsert the user and `write:flag:targeting` to enable the flag. See
[Management API Access](../api-access.md#management-api-access).

First, send a PUT request to create or update the user. Once it succeeds, send a
PATCH request to enable the flag. The `&&` below runs the targeting request only
if the upsert succeeds:

```sh
curl --fail-with-body \
  --request PUT \
  "https://app.reflag.com/api/apps/${APP_ID}/envs/${ENV_ID}/users/user-123" \
  --header "Authorization: Bearer ${REFLAG_API_KEY}" \
  --header "Content-Type: application/json" \
  --data '{ "name": "Jane Doe" }' &&
curl --fail-with-body \
  --request PATCH \
  "https://app.reflag.com/api/apps/${APP_ID}/envs/${ENV_ID}/users/user-123/flags" \
  --header "Authorization: Bearer ${REFLAG_API_KEY}" \
  --header "Content-Type: application/json" \
  --data '{
    "updates": [
      { "flagKey": "new-checkout-flow", "specificTargetValue": true }
    ]
  }'
```

A successful PUT response means the user is available to the targeting request;
no delay or polling is needed between these two calls. These are separate
operations: if the targeting request fails, the user remains created.

Flag configuration propagation to runtime SDKs is separate. The PATCH response
includes `flagStateVersion`, the environment version containing the completed
targeting change. It does not mean every SDK has already received that version.

For companies, use the same sequence with
`PUT /apps/{appId}/envs/{envId}/companies/{companyId}` followed by
`PATCH /apps/{appId}/envs/{envId}/companies/{companyId}/flags`.

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
