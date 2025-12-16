---
description: Learn more about feature entitlements in Reflag
---

# Feature entitlements

In B2B SaaS, a typical use case is to manage feature access based on the customer’s subscription level. This means enforcing feature access at the company level, not the user level.&#x20;

This is how Reflag is used to manage feature entitlements.

## Why use flags for this use case?

There are multiple ways to control feature access: You can hard-code it, use a dedicated billing service, or use feature flags.

If you have a complex billing structure, adding a dedicated service to your stack likely makes the most sense.

If your billing is relatively straightforward, you can use flags for it. This keeps the number of services to a minimum and lets you roll out new features and manage access from one interface.

However, not all flagging services are the same. Most are focused on end-users rather than company accounts.&#x20;

Reflag's feature flagging is purpose-built for B2B with native support for gating features at the company subscription level.

## Gate a feature based on subscription plan

### Step 1: Initialize Reflag

Choose [an SDK](/broken/pages/rQYVZJTNvOro7VC6k1qo) to get started, if you haven't already. \
\
Reflag needs to know who the authenticated user is and which company they belong to. We attached attribute metadata, such as the company's subscription plan.

```tsx
// identify user
reflag.user(userId1356, {
    name: “Rasmus Makwarth”,
});

// associate user with company
reflag.company(companyId51, {
    name: “Acme Inc.”,
    plan: “business”,
});
```

Reflag now understands that Rasmus works for Acme Inc. and Acme Inc. is on the Business subscription plan.

{% hint style="info" %}
You can send company attributes as part of the user sign-in event, via a nightly job, or use `updateCompany()`  when the attribute value changes.
{% endhint %}

### Step 2: Group companies by plan

Next, we need to group companies on the "Business" subscription plan.&#x20;

We do this using segments. Segments let you group company accounts based on various filters, including company attributes like subscription plans.

In Reflag, segments are automatically aggregated at the company level. This means creating a segment for "Business" plan customers is as simple as:&#x20;

Company attribute **"plan**" equals **"business**"

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 14.58.27.png" alt=""><figcaption></figcaption></figure>

You can do this for all plans. For example:

* Starter
* Business
* Enterprise

### Step 3: Gate the feature

Let’s say you have an export feature that's only available to customers on the "Business" or "Enterprise" plans. To gate this feature with Reflag, you create a new feature called “Export to CSV”. A feature can be as small as a button or as big as a product area.

Each feature comes with a [feature key](../concepts/feature.md#feature-key), like `export-to-csv`, which you wrap your feature in inside your codebase.&#x20;

In React, it’d look like this:

```tsx
const { isEnabled } = useFlag("export-to-csv");

if(isEnabled) { 

      // access to csv export!

}
```

With the feature code in, you can now manage access to this feature via the Reflag UI.&#x20;

In this case, we’ll set the feature access rules to be:&#x20;

Companies in the segment **Business** or **Enterprise**

Here’s what that looks like in the Reflag UI:

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 15.00.32.png" alt=""><figcaption></figcaption></figure>

That’s it!&#x20;

Every time a company enters either of these segments, they’ll automatically get access to the "Export to CSV" feature. Similarly, if they downgrade, they lose access.

## Grant individual companies access

If you need to grant individual companies access to a feature when they don't have the required subscription plan, you can add them manually.

Simply click the "+ Add" button beside the "Companies" label and select the companies you'd like to add from the searchable dropdown.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 15.01.32.png" alt=""><figcaption></figcaption></figure>

## How to handle usage-based gating

{% hint style="info" %}
This use case isn't yet natively supported by Reflag, but Reflag is flexible enough to handle it in some cases.
{% endhint %}

If your features are restricted by plan _and_ usage, like only allowing 1,000 API requests/mo on the Business plan, you can do the following:

### Step 1: Let Reflag know of the current usage&#x20;

Send usage metrics to Reflag using company attributes.&#x20;

For example, you can send the company's current usage metrics to Reflag at an hourly or daily interval.

```tsx
reflag.companyUpdate(companyId51, {
    apiRequestsCurrentMonth: 793
});
```

### Step 2: Gate using usage attribute

Then, add this custom attribute metric to your access rules.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 15.04.39.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 15.06.50.png" alt=""><figcaption></figcaption></figure>

