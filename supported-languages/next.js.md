---
description: Next.js client for Reflag
---

# Next.js

Using Reflag with Next.js is straightforward. You can use the [@reflag/node-sdk](../sdk/@reflag/node-sdk/) on the server or [@reflag/react-sdk](../sdk/@reflag/react-sdk/) in the browser. Handling flag targeting server-side is often advantageous because it removes the need for additional handling of loading states.

## Server-side Rendering (SSR)

It's often advantageous to use Server-side Rendering when possible because it can help avoid extra loading screens while your Reflag flags are loading.

For pages that use server-side rendering, use the `@reflag/node-sdk` in the following manner. Create a new file called `reflag.ts` and adjust it to your needs:

```typescript
// app/reflag.ts
import { ReflagClient } from "@reflag/node-sdk";

import { auth } from "@/auth";

export let reflagClient: ReflagClient;

async function initReflag() {
  reflagClient = new ReflagClient({
    secretKey: process.env.REFLAG_SECRET_KEY ?? "",
    logger: console,
  });
  await reflagClient.initialize();
}

export async function getContext() {
  // get the logged-in session
  const session = await auth();
  const user = session?.user;
  if (!user || !user.id) {
    return {};
  }
  const userId = user.id;

  return {
    user: {
      id: userId,
      ...user,
    },
    company: session.company,
  };
}

export async function getFlag(key: string) {
  if (!reflagClient) {
    await initReflag();
  }

  return reflagClient.getFlag(await getContext(), key);
}
```

And then start using flags!

{% tabs %}
{% tab title="App router" %}
Here's how you use flags with App router:

```tsx
// members-add/page.tsx
import { getFlag } from "@/app/reflag";

async addMember() {
  "use server";
  const { track } = await getFlag("member-add");
  track()

  // add member
}

export default async function Page() {
  const { isEnabled } = await getFlag("members-add");

  if (!isEnabled) {
    return null;
  }

  return (
    <form action={addMember}>
      <button type="submit">Add member</button>
    </form>
  );
}
```
{% endtab %}

{% tab title="Pages router" %}
Here's how you use flags with Pages router:

```tsx
// members-add/page.tsx
import { getFlag } from "@/app/reflag";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps = (async () => {
  const { isEnabled: membersAddEnabled } = await getFlag("members-add");
  return { props: { membersAddEnabled } };
}) satisfies GetServerSideProps<{ membersAddEnabled: boolean }>;

export default function Page({
  huddles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!membersAddEnabled) return null;

  return (
    <form>
      <button type="submit">Add member</button>
    </form>
  );
}
```
{% endtab %}
{% endtabs %}

### Flags SDK by Vercel

[Flags SDK by Vercel](https://flags-sdk.dev/) is a Next.js oriented interface for server-side flags. It's straightforward to use with the Reflag Node.js SDK:

```typescript
import { flag } from '@vercel/flags/next';
import { getFlag } from "@/app/reflag";

export const huddles = flag({
  key: 'huddles',
  async decide() {
    return getFlag(this.key).isEnabled;
  },
});
```

## Client-side Rendering

Use `@reflag/react-sdk` with Next.js client-side rendering like so:

```tsx
// layout.tsx
import { ReflagProvider } from "@reflag/react-sdk";

import { useUser } from "./auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser()

  return (
    <ReflagProvider
      publishableKey={process.env.NEXT_PUBLIC_REFLAG_PUBLISHABLE_KEY ?? ""}
      user={{ id: user.id }}
      company={{ id: user.companyId }}
    >
      {children}
    </ReflagProvider>
  );
}

```

In a client components, use the hooks `useFlag`

```tsx
"use client";

import { useFlag } from "@reflag/react-sdk";

function StartHuddle() {
  const { isEnabled, track } = useFlag("huddle");

  if (!isEnabled) {
    return null
  }

  return (
    <button onClick={track}>Start huddle!</button>
  );
}
```

For more details, please see the [React SDK documentation](react-sdk/)
