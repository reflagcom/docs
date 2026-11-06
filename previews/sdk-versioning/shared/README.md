# Shared docs

> Unpublished layout prototype. This shared section has one current set of examples and is not duplicated by SDK version.

## One current product story

Getting started, Next.js, the product handbook, integrations and general guides will use v2 examples only. Legacy examples belong inside the corresponding SDK/tooling documentation, not in tabs on shared pages.

```tsx
import { useFlag } from "@reflag/react-sdk";

export function FlagStatus() {
  const enabled = useFlag("huddle");
  return <span>{enabled ? "Enabled" : "Disabled"}</span>;
}
```

## Test the section boundary

Use the site navigation to open JavaScript SDKs. Only that section should offer the v1/v2 picker. Return here after selecting v1: this shared example must remain the v2 direct-value example, with no legacy version of this page.

This is a routing and navigation prototype, not a release announcement. The v2 SDK, CLI and server readiness gates still apply.
