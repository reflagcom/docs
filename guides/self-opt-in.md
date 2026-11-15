---
description: Build a beta feature opt-in page with the Reflag React SDK
icon: browser
---

# Beta feature opt-in

Use Reflag's React SDK to let users opt themselves—or their company—into beta and experimental features.

For an overview of how opt-in affects access and how memberships are managed in Reflag, see [End-user opt-in](../product-handbook/feature-rollouts/end-user-opt-in.md).

## Before you begin

1. [Configure one or more non-secret flags for end-user opt-in](../product-handbook/feature-rollouts/end-user-opt-in.md#configure-end-user-opt-in).
2. Set **Access** to **Some** in every environment where opting in should be available.
3. Include a `user.id` in the Reflag context for user opt-in. To support company opt-in, also include a `company.id`.

## Quick start

Render the available opt-in flags and let the current user set their opt-in status.

If you're using `<ReflagBootstrappedProvider>` without a `<Suspense>` boundary, see the loading section below.

```tsx
import { useState } from "react";
import {
  type OptInFlag,
  useOptInFlags,
  useSetOptIn,
} from "@reflag/react-sdk";
import { Spinner } from "your-component-library";

function OptInPage() {
  const { flags: optInFlags, isLoading } = useOptInFlags({ suspense: false });

  if (isLoading) {
    return <Spinner aria-label="Loading opt-in flags" />;
  }

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

`setOptIn()` returns a promise that resolves after the SDK applies the latest flag state, confirms the membership change, and notifies components using `useOptInFlags()`. React may not have committed the resulting render yet.

`useOptInFlags()` keeps the list synchronized with Reflag. `useSetOptIn()` changes the current user's opt-in by default and requires the current Reflag context to include a `user.id`.

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

## Managing opt-in loading state

Check opt-in loading before rendering an empty state, including during ordinary initialization. Metadata arrives with v2 evaluated-flags responses. A bootstrapped snapshot may omit it; the SDK then fetches missing metadata on demand without replacing server-derived flag values.

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

For general provider initialization, use `useIsLoading()` or `loadingComponent`. React `useFlag()` itself never suspends; use `useFlagSuspense()` for a suspending flag read. Opt-in hooks have their own suspense/loading contract; do not assume their loading value is always `false` with a regular provider.

## Next steps

* Learn how to view, manage, disable, and re-enable memberships in [End-user opt-in](../product-handbook/feature-rollouts/end-user-opt-in.md).
* Learn how to grant additional access with [Access rules](../product-handbook/feature-rollouts/feature-targeting-rules.md).
