---
description: High-level guide to flagging features in your CLI
icon: rectangle-terminal
---

# Use Reflag in your CLI

### If you use API token for auth&#x20;

First, create an endpoint in your backend for the CLI to call:

```
POST /get-flags
Authorization: Bearer <APIKEY>
```

The endpoint will take the API key and use it to look up the associated user.

Then, use the [public-api-reference.md](../api/public-api-reference.md "mention") to get enabled flags for the authenticated user. Return the flags to the CLI:

```
{
  flags: ['flag1', 'flag2']
}
```

Finally, check for access with a simple:

```tsx
/function isFlagEnabled(flag: string) {
    return flags.contains('myflag');
}
```

### If you use API token for auth AND Node.js

First, create an endpoint in your backend for the CLI to call:

```
POST /get-flags
Authorization: Bearer <APIKEY>
```

The endpoint will take the API key and use it to look up the associated user.

Use the [node-sdk](../sdk/@reflag/node-sdk/ "mention") get enabled flags for the authenticated user.

```jsx
import { ReflagClient } from "@reflag/node-sdk";

// configure the client
const boundClient = reflagClient.bindClient({
  user: {
    id: "c1_u1",
    name: "John Doe"
  },
  company: {
    id: "c1",
    name: "Acme, Inc."
  },
});

// get flags
const flags = boundClient.getFlags();
```

Finally, check for access with a simple:

```tsx
if(flags['myflag'].isEnabled) {
    //feature access
}
```



### If you use OAuth for auth

Use [node-sdk](../sdk/@reflag/node-sdk/ "mention") or [public-api-reference.md](../api/public-api-reference.md "mention") to get flags for the authenticated user.

In Node, configure the SDK like so:

```jsx
import { ReflagClient } from "@reflag/node-sdk";

// configure the client
const boundClient = reflagClient.bindClient({
  user: {
    id: "c1_u1",
    name: "John Doe"
  },
  company: {
    id: "c1",
    name: "Acme, Inc."
  },
});
```

Check access for individual flag:

```jsx
const { isEnabled } = boundClient.getFlag("myflag");

if (isEnabled) {
    //feature access
}    
```

Or get all flags:

```jsx
const flags = boundClient.getFlags();
```

