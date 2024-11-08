---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Introduction

## What is Bucket?

Bucket is feature flagging that’s purpose-built for B2B.\
\
B2B deserves feature flags designed specifically for their use case. We don't do A/B experimentation or B2C features.&#x20;

Bucket is focused on what you need to build and release better features in B2B SaaS, all in a beautifully crafted UI.

That includes:

* [Feature flags](product-handbook/create-your-first-feature.md) for B2B. All the features you need and a simple implementation.
* Feature entitlements that let you grant companies access by flipping a switch.
* [Feature adoption metrics](product-handbook/feature-analysis/stars-framework.md) analyzed using a proven and B2B-optimized framework.
* [Automated surveys](product-handbook/feature-analysis/automated-feedback-surveys.md) that collect feature feedback at the right time.
* Feature data that synced to your CRM and/or data warehouse.

## How does it work?

Bucket's feature targeting enables you to safely and gradually roll out features to customers by implementing our [SDKs](broken-reference) in your application or through our [HTTP API](api/http-api.md).

Each feature comes with [targeting rules](product-handbook/feature-targeting-rules/) and a [STARS](introduction/concepts/stars.md) funnel. Additionally, feature interactions can prompt in-app [automated feedback surveys](product-handbook/feature-analysis/automated-feedback-surveys.md) to end-users after a meaningful number of interactions.

[Feature targeting ](product-handbook/feature-targeting-rules/)is managed at the company level through toggles in the Bucket UI or through an API. &#x20;

