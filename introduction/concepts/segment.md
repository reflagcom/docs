# Segment

### Definition

A segment entity in Bucket is a dynamic collection of [companies](company.md). The dynamic nature of segments arise from the fact that segments use [filters](filter.md) to evaluate which companies are included in the segment.

### Filters

Segment filters can be constructed using any combination of the following rules:

* [company attributes](company.md#attributes),&#x20;
* [user feature access](feature.md#access),&#x20;
* [feature metrics](feature.md#metrics),
* other segments

{% hint style="info" %}
Segments with a filter that uses `First Seen`, `Last Seen` company attribute rules or feature metric rules cannot be used in [targeting rules](targeting-rules.md). By extension, other segments depend on these segments, also cannot be used in targeting rules.
{% endhint %}

### Environments

All segments in Bucket are [app](app.md)-wide. This means that the same segment will share the same settings (including filters) across all the [environments](environment.md) in the app.

It is up to you to populate the data in the environments you define in such a way that segments would pick up companies properly. Another option is to create separate segments for different environments.

### Next steps

* Learn about [users](user.md), [filters](filter.md) and [targeting rules](targeting-rules.md).
* Learn how to [create company segments](../../product-handbook/feature-targeting-rules/creating-segments.md) within Bucket UI.
