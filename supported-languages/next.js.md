# Next.js

Using Bucket with Next.js is straightforward.  You can use the [@bucketco/node-sdk](node.js-sdk.md) on the server or [@bucketco/react-sdk](react-sdk.md) in the browser. Handling feature targeting server-side is often advantageous because it removes the need for additional handling of loading states. &#x20;

## Server-side Rendering (SSR)

It's often advantageous to use Server-side Rendering when possible because it can help avoid extra loading screens while your Bucket features are loading.

For pages that use server-side rendering, use the `@bucketco/node-sdk` in the following manner. Create a new file called `bucket.ts` and adjust it to your needs:

```typescript
// app/bucket.ts
import { BucketClient } from "@bucketco/node-sdk";

import { auth } from "@/auth";

export let bucketClient: BucketClient;

async function initBucket() {
  bucketClient = new BucketClient({
    secretKey: process.env.BUCKET_SECRET_KEY ?? "",
    logger: console,
  });
  await bucketClient.initialize();
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

export async function getFeature(key: string) {
  if (!bucketClient) {
    await initBucket();
  }

  return bucketClient.getFeature(await getContext(), key);
}
```

And then start using features!

{% tabs %}
{% tab title="App router" %}
Here's how you use features with App router:

```tsx
// members-add/page.tsx
import { getFeature } from "@/app/bucket";

async addMember() {
  "use server";
  const { track } = await getFeature("member-add");
  track()
  
  // add member
}

export default async function Page() {
  const { isEnabled } = await getFeature("members-add");
  
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
Here's how you use features with Pages router:

```tsx
// members-add/page.tsx
import { getFeature } from "@/app/bucket";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export const getServerSideProps = (async () => {
  const { isEnabled: membersAddEnabled } = await getFeature("members-add");
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

### Vercel's @vercel/flags SDK

The [experimental @vercel/flags SDK](https://vercel.com/docs/workflow-collaboration/feature-flags/feature-flags-pattern) is a Next.js oriented interface for server-side feature flags. It's straight forward to use with the Bucket Node.js SDK:

```typescript
import { unstable_flag as flag } from '@vercel/flags/next';
import { getFeature } from "@/app/bucket";
 
export const huddles = flag({
  key: 'huddles',
  async decide() {
    return getFeature(this.key).isEnabled;
  },
});
```

## Client-side Rendering

Use `@bucketco/react-sdk` with Next.js client-side rendering like so:

```tsx
// layout.tsx
import { BucketProvider } from "@bucketco/react-sdk";

import { useUser } from "./auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser()

  return (
    <BucketProvider
      publishableKey={process.env.NEXT_PUBLIC_BUCKET_PUBLISHABLE_KEY ?? ""}
      user={{ id: user.id }}
      company={{ id: user.companyId }}
    >
      {children}
    </BucketProvider>
  );
}

```

In a client components, use the hooks `useFeature`

```tsx
"use client";

import { useFeature } from "@bucketco/react-sdk";

function StartHuddle() {
  const { isEnabled, track } = useFeature("huddle");

  if (!isEnabled) {
    return null
  }

  return (
    <button onClick={track}>Start huddle!</button>    
  );
}
```

For more details, please see the [React SDK documentation](react-sdk.md)
