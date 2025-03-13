# Filter

### Definition

A filter, in Bucket, is a mechanism that is used to check if entities such as [user](user.md), [company](company.md), [event](event.md), etc. match a set of predicates. Filters can also be aggregated into logical expressions, thus, facilitating advanced use cases.

Bucket support the following filter types:

* [Company attribute](company.md#attributes) filter, that can be used to check company attributes,
* Company [feature metrics](feature.md#metrics) filter, which allows checking for feature metrics applied to a given company (for example which [STARS](../../product-handbook/feature-analysis/stars-framework.md) state the company is in for a feature),
* [User attribute](user.md#attributes) filter, used to check user attributes,
* [Event attribute](event.md#attributes) filter, used to check event attributes,
* Company [segment](segment.md) filter, can be used to check a company's membership in a segment,
* [Feature access](feature.md#access) filter, can be used to check whether a company has access to a feature,
* [Gradual rollout](../../product-handbook/feature-rollouts/#gradually-roll-out-your-feature) filter, is used in advanced scenarios to evaluate whether a company matches target rollout bracket,
* [Other context](targeting-rules.md#evaluation-context) filter, used when rules can access additional context, in addition to user and company attributes.

### Company attribute filter

This filter can be used to check company attributes against a set predicates. The attributes include the `First seen` and `Last seen` which are maintained by Bucket. You can use any attribute name that your application sent to Bucket.

### Company feature metrics

This filter allows checking company's feature-specific metrics. These metrics include things like `Event count`, `First used`, `Last used`, `STARS state`, end etc.

### User attribute filter

This filter can be used to check user attributes against a set predicates. You can use any attribute name that your application sent to Bucket when updating user.

### Event attribute filter

This filter can be used to check event attributes against a set predicates. You can use any attribute name that your application sent to Bucket when sending track events.

### Company segment filter

This filter can be used to check if a given company is (or not) included in a given segment. The filter essentially evaluates the segment's filter against the company.

### Feature access filter

This filter can be used to check if a given company has (or not) access to a given feature. The filter evaluates the feature's targeting rules against the provided company, and assumes skips evaluation of any non-company attribute related filters.

### Gradual rollout filter

This filter is used by feature access targeting when enabling gradual rollout. It will bracket the pool of companies based on a predictable hashing algorithm and check if the company falls within the rollout percentage.

### Other context filter

This filter can be used to check `other` context attributes against a set predicates. You can use any attribute name that your application sends to Bucket when evaluating feature access.

{% hint style="warning" %}
* Company attribute filters using `First seen` and `Last seen` attributes cannot be used in targeting rules,
* Company feature metrics filters are not supported in targeting rules,
* Event attribute filter is only used in event-based feature and automatic feedback surveys,
* Gradual rollout filter is only used in feature access targeting rules,
* Other context filter is only used in feature access targeting rules,

&#x20;Any filters that build up on on other filters inherit the restrictions of the filters they are based on.
{% endhint %}

### Next steps

* Learn in depth how to use filters in [setup feature access rules](../../product-handbook/feature-rollouts/feature-targeting-rules.md).
