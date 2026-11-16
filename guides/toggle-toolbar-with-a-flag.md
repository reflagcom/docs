---
description: Show the SDK toolbar toggle to selected users.
icon: toolbox
---

# Toggle toolbar with a flag

The Reflag toolbar lets you toggle flags for yourself in the browser. Use a flag to choose who gets it in production, such as your team or beta testers: create a Boolean `toolbar` flag in Reflag, enable it for those users, and don't set the provider's `toolbar` prop.

Put this component inside your React SDK provider:

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

Now you can turn the toolbar on or off for anyone by changing who the `toolbar` flag is enabled for. Turning it off takes effect the next time the page loads, because the toolbar stays open once it's shown.

The toolbar only overrides flags in the user's own browser, so it isn't a security control. See the [Browser SDK](../supported-languages/browser-sdk/README.md#overrides-and-toolbar) for more toolbar options.
