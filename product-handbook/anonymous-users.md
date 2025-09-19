---
description: How to use Reflag with anonymous users
---

# Anonymous users

Reflag is designed for SaaS applications in which users are authenticated and belong to a company group. However, you can still use Reflag for certain use cases where users aren't authenticated.

Example use cases:

* Toggle features on/off for all anonymous users on marketing pages or docs.
* For anonymous users that belong to companies, for example for a white-label solution for ordering food online: roll out features to anonymous users belonging to certain restaurants or roll it users belonging to a percentage of restaurants (companies).

### How to toggle features for anonymnous users

First, create a new flag, use it on the respective feature and ship it.

On the Access tab, you can now use "No-one" or "Everyone" to toggle the feature off and on. "Some" is not supported for anonymous users.

For anonymous users you supply an empty user ID and empty company ID.

{% tabs %}
{% tab title="Node.js" %}
```typescript
import { ReflagClient } from "@reflag/node-sdk";

const client = new ReflagClient(...)
// using an empty context for anonymous users
const { isEnabled } = client.bindClient({}).getFlag("export-to-csv")
```
{% endtab %}

{% tab title="React" %}
```tsx
import { ReflagProvider } from "@reflag/react-sdk";

function App() {
  return (
    <ReflagProvider> // no user/company provided
      <Routes />
    </ReflagProvider>
  );
}

```
{% endtab %}
{% endtabs %}

### How to toggle features for anonymous users where you know their company

If the user is anonymous but you do know the company entity, you can simply supply the given company ID and an empty user ID. This lets you control features for anonymous users beloning to the given company.

{% tabs %}
{% tab title="Node.js" %}
```typescript
import { ReflagClient } from "@reflag/node-sdk";

const client = new ReflagClient(...)

// supply only the company ID if the users is anonymous but belongs to a company
const { isEnabled } = client.bindClient({company: {id: "petes-burgers"}).getFlag("export-to-csv")
```
{% endtab %}

{% tab title="React" %}
```tsx
import { ReflagProvider } from "@reflag/react-sdk";

function App() {
  return (
    <ReflagProvider company={{id: "petes-burgers"}}> // company provided
      <Routes />
    </ReflagProvider>
  );
}

```
{% endtab %}
{% endtabs %}

