---
description: Build a beta feature opt-in page with the Reflag React SDK
icon: browser
---

# Build a beta feature opt-in page

Use Reflag's React SDK to let users opt themselves—or their company—into beta and experimental features.

For an overview of how opt-in affects access and how memberships are managed in Reflag, see [End-user opt-in](../product-handbook/end-user-opt-in.md).

## Before you begin

1. [Configure one or more non-secret flags for end-user opt-in](../product-handbook/end-user-opt-in.md#configure-end-user-opt-in).
2. Set **Access** to **Some** in every environment where opting in should be available.
3. Include a `user.id` in the Reflag context for user opt-in. To support company opt-in, also include a `company.id`.

## Quick start

Render the available opt-in flags and let the current user set their opt-in status.

Use `@reflag/react-sdk` 1.6.2 or later. This example explicitly enables Suspense on the hook and supplies a boundary inside your existing Reflag provider. A boundary alone does not enable Suspense in the SDK. See below for loading without Suspense.

```tsx
import { Suspense, useState } from "react";
import {
  type OptInFlag,
  useClient,
  useOptInFlags,
  useSetOptIn,
} from "@reflag/react-sdk";
import { Spinner } from "your-component-library";

function OptInPage() {
  return (
    <Suspense fallback={<Spinner aria-label="Loading opt-in flags" />}>
      <OptInList />
    </Suspense>
  );
}

function OptInList() {
  const { flags: optInFlags } = useOptInFlags({ suspense: true });

  if (optInFlags.length === 0) {
    return (
      <section>
        <p>No opt-in flags to show. If you expected some, try reloading.</p>
        <ReloadOptInFlags />
      </section>
    );
  }

  return optInFlags.map((flag) => (
    <OptInFlagCard key={flag.key} flag={flag} />
  ));
}

function ReloadOptInFlags() {
  const client = useClient();
  const [isReloading, setIsReloading] = useState(false);
  const [reloadError, setReloadError] = useState<string | null>(null);

  async function reload() {
    setReloadError(null);
    setIsReloading(true);
    try {
      const flags = await client.refresh();
      if (!flags) throw new Error("Flag refresh failed");
    } catch {
      setReloadError("Could not reload opt-in flags. Please try again.");
    } finally {
      setIsReloading(false);
    }
  }

  return (
    <>
      <button type="button" disabled={isReloading} onClick={reload}>
        {isReloading ? "Reloading…" : "Reload opt-in flags"}
      </button>
      {reloadError && <p role="alert">{reloadError}</p>}
    </>
  );
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

      if (!response?.ok) {
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
        type="button"
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

`setOptIn()` returns `Promise<Response | undefined>`:

* An OK `Response` means the SDK has applied refreshed flag state and confirmed the membership change. Subscribed components are notified when flags change; React may not have committed the render yet.
* A non-OK `Response` means the HTTP request failed; the SDK does not refresh flags. Check `response.ok` and, if needed, read `response.json()` for error details.
* `undefined` means the request was skipped because offline mode is enabled, the scoped context ID is missing, or the arguments are invalid.
* Network and confirmation failures reject the promise. A confirmation failure can happen **after** membership changed remotely, so an error does not necessarily mean nothing changed.

The example handles both non-OK/missing responses and promise rejections.

`useOptInFlags()` keeps the list synchronized with Reflag. `useSetOptIn()` changes the current user's opt-in by default and requires the current Reflag context to include a `user.id`.

## Company opt-in

To change the current company's opt-in, pass `scope: "company"`. The current Reflag context must include a `company.id`.

Inside the `try` block in `updateOptIn()` above, replace the request with this call, keeping the same response check and error handling. Also use `flag.companyOptedIn` instead of `flag.userOptedIn` for the button label.

```tsx
const response = await setOptIn(flag.key, {
  optedIn: !flag.companyOptedIn,
  scope: "company",
});
```

{% hint style="warning" %}
Opt-in is not an authorization boundary. Requests use a publishable key and caller-supplied context IDs; company scope does not verify company membership or administrator permissions. Hiding the button from non-admins does not prevent direct requests. For admin-only or sensitive access, enforce authorization in your backend and use server-controlled access rules instead of public end-user opt-in.
{% endhint %}

User and company opt-ins are independent. Setting `optedIn` to `false` removes only the selected scope, so `isOptedIn` remains `true` while either scope is opted in.

Cancelling every opt-in does not necessarily disable the flag: an access rule may independently enable it for the current context.

## Loading without Suspense

With `ReflagBootstrappedProvider`, the SDK fetches opt-in metadata on demand only if it is missing from the bootstrapped state. Node SDK `getFlagsForBootstrap()` data currently lacks this metadata. Complete bootstrapped metadata is immediately available without an extra request.

{% hint style="warning" %}
The on-demand refresh evaluates flags using browser-visible context. If your bootstrap depends on server-only or secret context, refreshed flags may differ. Disabling `enableLiveFlagUpdates` does not prevent this metadata refresh; only request opt-in data if browser-side re-evaluation is appropriate.
{% endhint %}

With a regular `ReflagProvider`, `useOptInFlags().isLoading` remains `false`; `useIsLoading()` tracks normal initialization. To support either provider without Suspense, check both loading values before rendering an empty state:

```tsx
import { useIsLoading, useOptInFlags } from "@reflag/react-sdk";

const isProviderLoading = useIsLoading();
const { flags: optInFlags, isLoading } = useOptInFlags({ suspense: false });

if (isProviderLoading || isLoading) {
  return <Spinner aria-label="Loading opt-in flags" />;
}

if (optInFlags.length === 0) {
  return (
    <section>
      <p>No opt-in flags to show. If you expected some, try reloading.</p>
      <ReloadOptInFlags />
    </section>
  );
}
```

`ReloadOptInFlags` is defined in the quick-start example. A provider's `loadingComponent` can handle normal initialization instead, but does not cover the on-demand metadata fetch.

### Failed metadata requests and retrying

The hook stops loading (or suspending) when the metadata refresh succeeds **or fails**. It does not expose an error field or throw fetch failures to an error boundary. An empty list can therefore mean either no available flags or a failed request; it is not proof that no opt-in flags exist.

After a failed on-demand refresh, rendering the hook again does not start another attempt for the same context. The example provides a manual retry through `useClient().refresh()`. This bypasses the cache, updates subscribers on success, and returns `undefined` if the refresh fails or is skipped. Track the retry's pending/error state separately, as shown above.

## Next steps

* Learn how to view, manage, disable, and re-enable memberships in [End-user opt-in](../product-handbook/end-user-opt-in.md).
* Learn how to grant additional access with [Access rules](../product-handbook/feature-rollouts/feature-targeting-rules.md).
