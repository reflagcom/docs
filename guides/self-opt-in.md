---
description: How to build a beta feature opt-in page with the Reflag React SDK
icon: browser
---

# Beta feature opt-in

Let users opt themselves—or their company—into beta and experimental features with Reflag's React SDK.

## Quick start

After enabling end-user opt-in on at least one flag in Reflag, render the available flags and let the current user set their opt-in status:

```tsx
import { useState } from "react";
import {
  type OptInFlag,
  useOptInFlags,
  useSetOptIn,
} from "@reflag/react-sdk";
import { Spinner } from "your-component-library";

function OptInList() {
  const optInFlags = useOptInFlags();
  const setOptIn = useSetOptIn();
  const [updatingFlagKey, setUpdatingFlagKey] = useState<string | null>(null);

  async function updateOptIn(flag: OptInFlag) {
    setUpdatingFlagKey(flag.key);

    try {
      await setOptIn(flag.key, { optedIn: !flag.userOptedIn });
    } finally {
      setUpdatingFlagKey(null);
    }
  }

  return optInFlags.map((flag) => {
    const isUpdating = updatingFlagKey === flag.key;

    return (
      <section key={flag.key}>
        <h2>{flag.name}</h2>
        {flag.description && <p>{flag.description}</p>}
        <button
          aria-busy={isUpdating}
          disabled={updatingFlagKey !== null}
          onClick={() => updateOptIn(flag)}
        >
          {isUpdating ? (
            <Spinner aria-label={`Updating ${flag.name}`} />
          ) : flag.userOptedIn ? (
            "Cancel opt-in"
          ) : (
            `Try ${flag.name}`
          )}
        </button>
      </section>
    );
  });
}
```

Replace the `Spinner` import with the spinner component from your application or component library.

`useOptInFlags()` keeps the list synchronized with Reflag. `useSetOptIn()` changes the current user's opt-in by default and requires the current Reflag context to include a `user.id`.

## Configure a flag for opt-in

1. Open a non-secret flag in Reflag.
2. Go to **Settings > Opt-in**.
3. Enable **End-user opt-in**.
4. Optionally add a **Public description**. The SDK exposes this text so you can display it in your opt-in UI.
5. Save your changes.
6. On the flag's **Access** tab, verify that access is set to **Some** in each environment where users should be able to opt in. Leave the other access rules empty for an opt-in-only feature, or add rules to grant access through either targeting or opt-in.

Secret flags cannot use end-user opt-in because opt-ins are submitted directly from a browser or client using a publishable key.

## Opt-in flag data

`useOptInFlags()` returns the opt-in-enabled flags available to the current context. Each flag includes:

| Field | Description |
| --- | --- |
| `key` | The flag key. |
| `name` | The flag's display name. |
| `description` | The public opt-in description configured in Reflag, or `null`. |
| `isEnabled` | Whether the flag is enabled for the current context. |
| `userOptedIn` | Whether the current user opted in. |
| `companyOptedIn` | Whether the current company opted in. |
| `isOptedIn` | Whether either the current user or company opted in. |

Use `userOptedIn` or `companyOptedIn`—not `isEnabled`—as the state of an opt-in control. A flag can be enabled by an access rule even when the user or company has not opted in.

## Company opt-in

To change the current company's opt-in, pass `scope: "company"`. The current Reflag context must include a `company.id`.

```tsx
setOptIn(flag.key, {
  optedIn: !flag.companyOptedIn,
  scope: "company",
});
```

User and company opt-ins are independent. Setting `optedIn` to `false` removes the opt-in only for the selected scope. For example, cancelling a user's opt-in does not change the company's opt-in for the same flag. `isOptedIn` remains `true` while either scope is opted in.

Cancelling every opt-in also does not necessarily disable the flag: an access rule may independently enable it for the current context.

## Access behavior

A flag's access setting determines how opt-in membership affects evaluation:

| Access | Behavior |
| --- | --- |
| **No one** | The flag is off for everyone. Existing opt-ins are inactive, and new opt-ins are rejected. |
| **Some** | The flag is enabled when another access rule matches **or** the current user or company opted in. With no other rules, access is opt-in-only. |
| **Everyone** | The flag is enabled for everyone, regardless of opt-in status. |

Disabling end-user opt-in stops new opt-ins and makes existing memberships inactive, but it does not delete them. Re-enabling opt-in reactivates those memberships unless access is set to **No one**.

## Waiting for an update

`setOptIn()` returns a promise. It resolves after the latest flag state has been applied, the requested membership change has been confirmed, and components using `useOptInFlags()` have been notified. React schedules the resulting render normally, so it may not have committed when the promise resolves.

You can await it when your UI needs a pending or error state:

```tsx
await setOptIn(flag.key, { optedIn: true });
```

### Next steps

Learn how to manage additional access with [Access rules](../product-handbook/feature-rollouts/feature-targeting-rules.md).
