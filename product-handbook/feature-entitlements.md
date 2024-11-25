---
description: Implementing feature entitlements with Bucket is straight forward
---

# Feature entitlements

You can gate access to features based on customer subscription with Bucket. You can do this dynamically or ad-hoc per customer.

### Dynamic feature gating

Segments are a powerful way to do dynamically gate feature access. For example, if you're in B2B SaaS, you can create a [segment](../introduction/data-model/segment.md) per subscription.

Let's say you have three subscriptions plans:

* Starter
* Business
* Enterprise

You can tell Bucket which plan any company is on by including this information as a [company attribute](../introduction/data-model/company/attribute.md)

```typescript
bucketClient.updateCompany(companyId, {
  attributes: {
    plan: "business",
  }
});
```

This enables you to create a segment of all customers on the Pro plan, like so:

<figure><img src="../.gitbook/assets/CleanShot 2024-11-25 at 9 .28.08@2x.png" alt=""><figcaption></figcaption></figure>

You can do the same for the Enterprise segment.&#x20;

With the subscription plan segments in place, you can now gate feature access based on customer subscription on the targeting tab:

<figure><img src="../.gitbook/assets/CleanShot 2024-11-25 at 9 .33.10@2x.png" alt=""><figcaption></figcaption></figure>

Done! Now all customers on Pro and Enterprise have access to the "Installed App" feature.



### Custom access

Sometimes customers get access to features outside of their subscription. To handle this, you simply add the company manually to the feature, like so:

<figure><img src="../.gitbook/assets/CleanShot 2024-11-25 at 9 .35.11@2x.png" alt=""><figcaption></figcaption></figure>

Now "BuzzMetric" also has access to the "Installed App" feature.
