---
description: Build a beta feature opt-in page with the Reflag React SDK
icon: browser
---

# Build a beta feature opt-in page

Use Reflag's React SDK to let users opt themselves—or their company—into beta and experimental features.

## Before you begin

1. Set up the [React SDK](../sdk/@reflag/react-sdk/README.md) and place your opt-in page inside a Reflag provider.
2. [Configure one or more non-secret flags for end-user opt-in](../product-handbook/end-user-opt-in.md#configure-end-user-opt-in). Add a public description to explain each feature in your UI.
3. Set **Access** to **Some** in every environment where opting in should be available. For an opt-in-only feature, leave the other access rules empty.
4. Include a `user.id` in the Reflag context for user opt-in. To support company opt-in, also include a `company.id`.

## Build the opt-in page

Follow the [React SDK opt-in example](../sdk/@reflag/react-sdk/README.md#useoptinflags-and-usesetoptin) to list available flags and let users change their membership. The SDK documentation also covers loading, Suspense, error handling, and retrying failed metadata requests.

## Choose the opt-in scope

* **User opt-in** applies to the current user and is the SDK default. Use it for personal beta preferences.
* **Company opt-in** applies to users evaluated in the current company. Use `scope: "company"` for an organization-wide opt-in experience.

User and company memberships are independent. Cancelling one does not remove the other. Even after cancelling both, an access rule may still enable the flag.

## Next steps

* Learn how to view, manage, disable, and re-enable memberships in [End-user opt-in](../product-handbook/end-user-opt-in.md).
* Learn how to grant additional access with [Access rules](../product-handbook/feature-rollouts/feature-targeting-rules.md).
