---
description: >-
  The toolbar is one of the most powerful aha moments with feature flagging.
  Learn how you can control who gets the toolbar in production by toggling a
  feature flag on/off
icon: toolbox
---

# Toggle toolbar with a flag

In some cases, you want to limit who has access to the toolbar in production. If you already have an "admin" or "internalUser" boolean on the user model, that is how most people decide whether to show the toolbar.

Beyond those simple cases, using a feature flag that you can enable for certain people is a great way to manage who gets to see the toolbar.

Here's an example of how it can be done with the React SDK:

1. Create the flag:

```bash
$ npx reflag new toolbar
```

2. If you've set the `toolbar` prop on the `<ReflagProvider>`, remove it. We'll manage this by calling `client.showToolbar()` when the flag is enabled.
3. Put this tiny component inside the `<ReflagProvider>`:

```tsx
function ToolbarFlagControl() {
  const client = useClient();
  const {isEnabled: toolbarEnabled} = useFlag("toolbar");
  useEffect(() => {
    if (toolbarEnabled) {
      client?.showToolbarToggle();
    }
  }, [toolbarEnabled]);
}
```

Done! You can now enable/disable the toolbar for users by toggling the `toolbar` feature flag for them inside Reflag.

{% hint style="info" %}
showToolbarToggle() became available in the following SDK versions:

* @reflag/react-sdk: 1.3.0
* @reflag/vue-sdk: 1.3.0
* @reflag/browser-sdk: 1.3.0
{% endhint %}
