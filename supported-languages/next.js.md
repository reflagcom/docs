---
description: Use the Node.js and React SDKs with Next.js.
---

# Next.js

Use the [Node.js SDK](node-sdk/README.md) to evaluate flags on the server and the [React SDK](react-sdk/README.md) in client components.

This documentation covers SDK v2.

## Server-side rendering

Create one client per server process. Share the initialization promise so concurrent requests do not create separate clients:

```ts
// app/reflag.ts
import { ReflagClient } from "@reflag/node-sdk";

const client = new ReflagClient({ secretKey: process.env.REFLAG_SECRET_KEY });
let initialized: Promise<void> | undefined;

export async function getReflagClient() {
  initialized ??= client.initialize().then(() => undefined).catch((error) => {
    initialized = undefined;
    throw error;
  });
  await initialized;
  return client;
}
```

Derive user/company context from your authenticated session on the server, not from client-supplied subscription attributes. The examples below assume your application's `getContext()` helper does that.

{% tabs %}
{% tab title="App router" %}
```tsx
// app/members-add/page.tsx
import { getReflagClient } from "@/app/reflag";
import { getContext } from "@/app/auth";

async function addMember() {
  "use server";
  const client = await getReflagClient();
  const bound = client.bindClient(await getContext());
  if (!bound.getFlag("members-add")) throw new Error("Access denied");

  // Perform the authorized operation here, then track successful usage.
  await bound.track("Member added");
  await client.flush();
}

export default async function Page() {
  const client = await getReflagClient();
  const enabled = client.getFlag(await getContext(), "members-add");
  if (!enabled) return null;

  return (
    <form action={addMember}>
      <button type="submit">Add member</button>
    </form>
  );
}
```
{% endtab %}
{% tab title="Pages router" %}
```tsx
// pages/members-add.tsx
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getReflagClient } from "@/app/reflag";
import { getContext } from "@/app/auth";

export const getServerSideProps = (async () => {
  const client = await getReflagClient();
  const enabled = client.getFlag(await getContext(), "members-add");
  return { props: { enabled } };
}) satisfies GetServerSideProps<{ enabled: boolean }>;

export default function Page({ enabled }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!enabled) return null;
  return <p>You can add members.</p>;
}
```
{% endtab %}
{% endtabs %}

Recheck authorization in the backend operation, even when the page hides its controls. Configure adoption rules to match the usage event name you send. For JSON configuration, pass a default after the key, for example `client.getFlag(context, "member-settings", { maxMembers: 10 })`.

### Flags SDK by Vercel

When using a custom Vercel Flags SDK definition, return the Boolean flag value from its `decide` function. See the [Reflag provider integration](https://flags-sdk.dev/providers/reflag) for setup and compatibility.

## Client-side rendering

Put the provider in a client component. Keep secret SDK keys on the server; the browser gets only a publishable key and browser-safe context:

```tsx
"use client";

import type { ReactNode } from "react";
import { ReflagProvider, useFlag, useTrack } from "@reflag/react-sdk";

export function FlagProvider({ children }: { children: ReactNode }) {
  return (
    <ReflagProvider
      publishableKey={process.env.NEXT_PUBLIC_REFLAG_PUBLISHABLE_KEY ?? ""}
      context={{ user: { id: "current-user" }, company: { id: "current-company" } }}
    >
      {children}
    </ReflagProvider>
  );
}

export function StartHuddle() {
  const enabled = useFlag("huddle");
  const track = useTrack();
  if (!enabled) return null;
  return <button onClick={() => track("Started huddle")}>Start huddle!</button>;
}
```

Replace the example IDs with your signed-in user/company context. Use `useIsLoading()` or `loadingComponent` when you need a loading UI, or `useFlagSuspense()` for an explicitly suspending read.

## Server-to-client bootstrap

For immediate client rendering, generate state with the **Node.js SDK** and pass the entire envelope to the **React SDK**'s `ReflagBootstrappedProvider`. Follow the [React bootstrap documentation](react-sdk/README.md#bootstrap-and-ssr), using your framework's safe serialization mechanism. Never send server secrets or server-only attributes to the browser.

Using v1? [Legacy docs](../legacy/v1/README.md) · [Upgrade guide](migrating-from-v1.md).
