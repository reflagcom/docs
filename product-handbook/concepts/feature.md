# Flag

### Definition

A **flag** is an entity in Reflag that manages rollout, access, configuration, adoption tracking, and feedback for a change in your product.

Flags can be organized into hierarchies (having other flags as parent) and grouped into [views](feature-view.md), for easy reporting.

### Flag key

Each flag has a unique key and basic details such as name, description, adoption rules, and feedback configuration.

{% hint style="warning" %}
Flag keys are unique across your [app](app.md). They cannot be edited after the flag is created. The flag key is also used for tracking flag adoption and collecting feedback.
{% endhint %}

The following entities are associated with a flag through its key:

* [Track event](event.md),
* [Flag events](feature-events.md),
* [Feedback](feedback.md).

### Access

Each flag in Reflag comes with a set of access [targeting rules](targeting-rules.md) that are evaluated against the user, company, and other context from your application. Access is re-evaluated whenever the rules or the context change. Reflag SDKs handle evaluation, caching, and refreshing automatically.

Flag access can also be used within Reflag itself as a [filter](filter.md#flag-access-filter) consumed by other entities.

### Metrics

Flag metrics are values calculated for each company that uses the flag. These metrics include `Average feedback score`, `First used`, `Last used`, and more.

Flag metrics are used across the Reflag UI and can also serve as values for [filters](filter.md#company-flag-metrics) consumed by other entities.

### Next steps

* Learn about [views](feature-view.md), [track](event.md) and [events](feature-events.md),
* Learn how to [create your first flag](../../) within Reflag UI.
