---
description: How to build a beta feature opt-in page with the Reflag React SDK
icon: browser
---

# Beta feature opt-in

Let users opt themselves—or their company—into beta and experimental features with Reflag's React SDK.

## Quick start

After enabling end-user opt-in on at least one flag in Reflag, render the available flags and let the current user set their opt-in status.

This example assumes your app has a `<Suspense>` boundary. See below for an example without `<Suspense>`.

```tsx
import { useState } from "react";
import {
  type OptInFlag,
  useOptInFlags,
  useSetOptIn,
} from "@reflag/react-sdk";
import { Spinner } from "your-component-library";

function OptInPage() {
  const { flags: optInFlags } = useOptInFlags({ suspense: true });

  if (optInFlags.length === 0) {
    return <p>No opt-in flags are available.</p>;
  }

  return optInFlags.map((flag) => (
    <OptInFlagCard key={flag.key} flag={flag} />
  ));
}

function OptInFlagCard({ flag }: { flag: OptInFlag }) {
  const setOptIn = useSetOptIn();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const label = flag.userOptedIn ? "Cancel opt-in" : `Try ${flag.name}`;

  async function updateOptIn() {
    setUpdateError(null);
    setIsUpdating(true);

    try {
      const response = await setOptIn(flag.key, {
        optedIn: !flag.userOptedIn,
      });

      if (response?.ok === false) {
        throw new Error("Opt-in request failed");
      }
    } catch {
      setUpdateError(`Could not update ${flag.name}. Please try again.`);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <section>
      <h2>{flag.name}</h2>
      {flag.description && <p>{flag.description}</p>}
      <button
        aria-busy={isUpdating}
        disabled={isUpdating}
        onClick={updateOptIn}
      >
        {isUpdating ? (
          <Spinner aria-label={`Updating ${flag.name}`} />
        ) : (
          label
        )}
      </button>
      {updateError && <p role="alert">{updateError}</p>}
    </section>
  );
}
```

To use Suspense by default, enable `suspense` on `ReflagProvider` or `ReflagBootstrappedProvider` instead of passing `{ suspense: true }` to the hook.

`useOptInFlags()` keeps the list synchronized with Reflag. `useSetOptIn()` changes the current user's opt-in by default and requires the current Reflag context to include a `user.id`.

### Managing loading state without `<Suspense>`

Only apps using `ReflagBootstrappedProvider` without Suspense need to handle this loading state. Bootstrapped flag data does not include opt-in metadata, so the SDK fetches it when `useOptInFlags()` is first used.

Check the hook's `isLoading` value before rendering an empty state:

```tsx
const { flags: optInFlags, isLoading } = useOptInFlags({ suspense: false });

if (isLoading) {
  return <Spinner aria-label="Loading opt-in flags" />;
}

if (optInFlags.length === 0) {
  return <p>No opt-in flags are available.</p>;
}
```

With a regular `ReflagProvider`, opt-in metadata arrives as part of the normal flags request, so `useOptInFlags().isLoading` remains `false`. Use `useIsLoading()` or the provider's `loadingComponent` for the normal initial loading state.

## Configure a flag for opt-in

1. Open a non-secret flag in Reflag.
2. Go to **Settings > Opt-in**.
3. Enable **End-user opt-in**.
4. Optionally add a **Public description**. The SDK exposes this text so you can display it in your opt-in UI.
5. Save your changes.
6. On the flag's **Access** tab, verify that access is set to **Some** in each environment where users should be able to opt in. Leave the other access rules empty for an opt-in-only feature, or add rules to grant access through either targeting or opt-in.

Secret flags cannot use end-user opt-in because opt-ins are submitted directly from a browser or client using a publishable key.

## Company opt-in

To change the current company's opt-in, pass `scope: "company"`. The current Reflag context must include a `company.id`.

```tsx
setOptIn(flag.key, {
  optedIn: !flag.companyOptedIn,
  scope: "company",
});
```

User and company opt-ins are independent. Setting `optedIn` to `false` removes only the selected scope, so `isOptedIn` remains `true` while either scope is opted in.

Cancelling every opt-in does not necessarily disable the flag: an access rule may independently enable it for the current context.

## Access behavior

A flag's access setting determines how opt-in membership affects evaluation:

| Access | Behavior |
| --- | --- |
| **No one** | The flag is off for everyone. Existing opt-ins are inactive, and new opt-ins are rejected. |
| **Some** | The flag is enabled when another access rule matches **or** the current user or company opted in. With no other rules, access is opt-in-only. |
| **Everyone** | The flag is enabled for everyone, regardless of opt-in status. |

Disabling end-user opt-in stops new opt-ins and makes existing memberships inactive, but it does not delete them. Re-enabling opt-in reactivates those memberships unless access is set to **No one**.

## Waiting for an update

`setOptIn()` returns a promise that resolves after the SDK applies the latest flag state, confirms the membership change, and notifies components using `useOptInFlags()`. React may not have committed the resulting render yet.

The quick-start example awaits this promise to disable the button while the update is pending and report errors.

## Next steps

Learn how to manage additional access with [Access rules](../product-handbook/feature-rollouts/feature-targeting-rules.md).
