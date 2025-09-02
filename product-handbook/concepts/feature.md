# Feature

### Definition

A **feature** is an entity in Reflag that is used manage a "_feature in your product_". This refers to releasing the feature, manage access, configure, track adoption, gather feedback, and etc.

Features can be organized into hierarchies (having other features as parent) and grouped into [feature views](feature-view.md), for easy reporting.

### Feature key

Each feature has an unique feature key and some basic details such as name and description, adoption rules, feedback configuration and other.

{% hint style="warning" %}
Feature keys are unique across your [app](app.md). They cannot be edited after the feature is created. You can think of the feature key as a **flag key** that _also_ is used for tracking feature adoption and getting feedback.
{% endhint %}

The following entities are associated with a feature through its key:

* [Track event](event.md),
* [Feature events](feature-events.md),
* [Feedback](feedback.md).

### Access

Each feature in Reflag comes with a set of access [targeting rules](targeting-rules.md) that are evaluated against the context of the user of your application. Access is evaluated each time the rules change of the context changes. Reflag SDKs transparently deal with evaluation, caching and refreshing of access status of the user of your application.&#x20;

Feature access can also be used within Reflag itself as a [filter](filter.md#feature-access-filter) consumed by other entities.

### Metrics

Feature metrics are a set of values that are calculated for each company that is using the feature. These metrics include `Average feedback score`, `First and Last used` dates and others.

Feature metrics are used within the Reflag UI in various places but can also serve as values for [filters](filter.md#company-feature-metrics) consumed by other entities.

### Next steps

* Learn about [feature views](feature-view.md), [track](event.md) and [feature events](feature-events.md),
* Learn how to [create your first feature](../../) within Reflag UI.
