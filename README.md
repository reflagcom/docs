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

### What's Bucket?

Bucket helps product teams release and evaluate features.&#x20;

Bucket combines feature flagging and post-release evaluation in a repeatable workflow.&#x20;

The evaluation data consists of engagement metrics and qualitative fedeback, which is collected and aggregated automatically.

### How does it work?

Bucket's feature flags enable you to safely and gradually roll out features to customers using our [SDK](quickstart/supported-languages.md) or [HTTP API](api/http-api.md).

For the feature evaluation, Bucket relies on events for tracking feature interactions and asking customers for feedback.&#x20;

Events are abstracted into a [feature](introduction/concepts/feature/). Each feature comes with a [STARS](introduction/concepts/feature/stars.md) funnel. Feature interactions can be used to prompt in-app CSAT feature surveys to end-users at just the right time. This feature is called [Live Satisfaction](product-handbook/automated-feedback-surveys.md).

