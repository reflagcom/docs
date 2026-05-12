# Filter

### Definition

A filter, in Reflag, is a mechanism that is used to check if entities such as [user](user.md), [company](company.md), [event](event.md), etc. match a set of predicates. Filters can also be aggregated into logical expressions, thus, facilitating advanced use cases.

Reflag supports the following filter types:

* [Company attribute](company.md#attributes) filter, that can be used to check company attributes,
* Company [flag metrics](feature.md#metrics) filter, which allows checking flag metrics for a given company,
* [User attribute](user.md#attributes) filter, used to check user attributes,
* [Event attribute](event.md#attributes) filter, used to check event attributes,
* Company [segment](segment.md) filter, can be used to check a company's membership in a segment,
* [Flag access](feature.md#access) filter, can be used to check whether a company has access to a flag,
* [Gradual rollout](../feature-rollouts/#gradually-roll-out-your-flag) filter, is used in advanced scenarios to evaluate whether a company matches a rollout bracket,
* [Other context](targeting-rules.md#evaluation-context) filter, used when rules can access additional context, in addition to user and company attributes.

### Company attribute filter

This filter can be used to check company attributes against a set of predicates. The attributes include `First seen` and `Last seen`, which are maintained by Reflag. You can use any attribute name that your application sends to Reflag.

### Company flag metrics

This filter allows checking company-level flag metrics. These metrics include `Event count`, `First used`, `Last used`, and more.

### User attribute filter

This filter can be used to check user attributes against a set of predicates. You can use any attribute name that your application sends to Reflag when updating a user.

### Event attribute filter

This filter can be used to check event attributes against a set of predicates. You can use any attribute name that your application sends to Reflag when sending track events.

### Company segment filter

This filter can be used to check if a given company is (or not) included in a given segment. The filter essentially evaluates the segment's filter against the company.

### Flag access filter

This filter can be used to check if a given company has access to a given flag. The filter evaluates the flag's targeting rules against the provided company and skips any non-company attribute filters.

### Gradual rollout filter

This filter is used by flag access targeting when enabling gradual rollout. It brackets the pool of companies with a predictable hashing algorithm and checks whether the company falls within the rollout percentage.

### Other context filter

This filter can be used to check `other` context attributes against a set of predicates. You can use any attribute name that your application sends to Reflag when evaluating flag access.

{% hint style="warning" %}
* Company attribute filters using `First seen` and `Last seen` attributes cannot be used in targeting rules,
* Company flag metrics filters are not supported in targeting rules,
* Event attribute filter is only used in event-based flags and automatic feedback surveys,
* Gradual rollout filter is only used in flag access targeting rules,
* Other context filter is only used in flag access targeting rules,

Any filters that build on other filters inherit the restrictions of the filters they are based on.
{% endhint %}

### Next steps

* Learn in depth how to use filters in [setting up flag access rules](../feature-rollouts/feature-targeting-rules.md).
