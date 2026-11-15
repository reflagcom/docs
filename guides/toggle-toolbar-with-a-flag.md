---
description: Show the SDK v2 toolbar toggle to selected users.
icon: toolbox
---

# Toggle toolbar with a flag

Use a Boolean flag to choose who sees the SDK toolbar toggle. Create a `toolbar` flag in Reflag, configure its access rules, and leave the provider's unconditional `toolbar` option disabled.

Put this component inside your React SDK v2 provider:

```tsx
import { useEffect } from "react";
import { useClient, useFlag } from "@reflag/react-sdk";

export function ToolbarFlagControl() {
  const client = useClient();
  const toolbarEnabled = useFlag("toolbar");

  useEffect(() => {
    if (toolbarEnabled) client.showToolbarToggle();
  }, [client, toolbarEnabled]);

  return null;
}
```

This shows the toggle once access is granted. `showToolbarToggle()` does not provide a corresponding hide operation: switching the flag off later does not remove an already mounted toggle. Reload or recreate the client to apply a new visibility decision.

This is a convenience control, **not an authorization boundary**. Users control their own browser; never use the toolbar flag to protect secrets or administrative server operations. See [Browser SDK v2](../supported-languages/browser-sdk/README.md) for toolbar options.
