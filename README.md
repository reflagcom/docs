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

Bucket helps product teams release and evaluate features.&#x20;

Bucket combines feature flagging and post-release analysis in a repeatable workflow.&#x20;

The evaluation data consists of engagement metrics and qualitative feedback, which is collected and aggregated at the company level, automatically.

## How does it work?

Bucket's feature flags enable you to safely and gradually roll out features to customers using our [SDKs](quickstart/supported-languages-frameworks/) or [HTTP API](api/http-api.md).

Bucket then uses features to aggregate events that track interactions and collect customer feedback.&#x20;

Events are abstracted into a [feature](introduction/concepts/feature/). Each feature comes with a [STARS](introduction/concepts/feature/stars.md) funnel. Feature interactions can prompt in-app [automated feedback surveys](product-handbook/feature-analysis/automated-feedback-surveys.md) to end-users after a meaningful number of interactions.

[Feature permissions](product-handbook/permissions-management.md) are managed at the company level through toggles in the Bucket UI or through an API. &#x20;

