# Segment

### Definition

A segment in Reflag is a dynamic audience built from companies, users, or both together.

Segments use [filters](filter.md) to evaluate which companies and users are included.

### Filters

Segment filters can be constructed using any combination of the following rules:

* [company attributes](company.md#attributes)
* [user attributes](user.md)
* [flag access](feature.md#access)
* [flag metrics](feature.md#metrics)
* other segments

{% hint style="info" %}
Segments with a filter that uses `First Seen`, `Last Seen`, or flag metric rules cannot be used in [targeting rules](targeting-rules.md). Segments that depend on those segments also cannot be used in targeting rules.
{% endhint %}

### Environments

All segments in Reflag are [app](app.md)-wide. This means the same segment shares the same settings, including filters, across all [environments](environment.md) in the app.

It is up to you to populate each environment with the right company and user data so segments evaluate correctly. Another option is to create separate segments for different environments.

### Next steps

* Learn about [users](user.md), [filters](filter.md), and [targeting rules](targeting-rules.md).
* Learn how to [create segments](../creating-segments.md) in Reflag.
