# Company

### Definition

A **company** entity in Reflag is used to group [users](user.md), [events](event.md) and [feedback](feedback.md). All data sent to Reflag from your side will be associated with a company in one way or another. For instance, when updating the details of an user, the company ID can be supplied to inform Reflag that the user "_has been seen_" acting as part of said company. In other cases, if the company is not explicitly identified, Reflag will use the last known company (default) that the user was part of.

### Attributes

A company entity, aside from being a group for users acting in its stead, is also a collection of **attributes**. Each attribute is a **key** — **value** pair supplied by your application. There is one mandatory attribute each company must have: `ID`, and two special attributes Reflag uses in its UI for convenience: `name` and `avatar`. It is up to you to provide whichever attributes you deem necessary.

Reflag manages a set of computed attributes when you send data to Reflag:

* `First seen` and `Last seen` denote the first and last time the company-related interactions have been sent to Reflag,
* `Event count` is updated any time there is a new [event](event.md) received referencing the company.

Some use cases for company attributes could be:  "_plan_" or "_tier_" to identify the subscription status;  "_monthly spend_"; "_geographic location_", etc. Any company attribute can be used in [company segments](segment.md), attribute-based [features](feature.md) as well as any [targeting rule](targeting-rules.md).

{% hint style="info" %}
In Segment terminology, companies can be thought of as acting as a [Group](https://segment.com/docs/connections/spec/group/) call. Company attributes can be thought of as [Group traits](https://segment.com/docs/connections/spec/group/).
{% endhint %}

{% hint style="warning" %}
Do not include PII data when sending in company attributes. It is recommended that any sensitive data should be hashed or otherwise not included.
{% endhint %}

### Associating with users

[Events](event.md) sent to Reflag from your application, are usually identified only by the [user](user.md) that triggered said event. To associate these events with a [company](company.md), make sure to associate the user with one. You can associate the user with multiple companies — each time the user is seen acting as part of another company, Reflag remembers, and the company becomes the new "_default_" for the user. Every subsequent event that lacks explicit company information will be associated with the default.

{% hint style="info" %}
[Reflag SDKs](../../supported-languages/overview.md) automatically maintain the associations between users and companies, as long as you supply their respective details on initialization.&#x20;
{% endhint %}

{% hint style="warning" %}
If a user's events aren't associated with a company, they will not be included in Reflag (which is primarily based on company-level activity).
{% endhint %}

### Next steps

* Learn about [users](user.md), [events](event.md) and [segments](segment.md),
* Learn how to [create company segments](../../product-handbook/feature-targeting-rules/creating-segments.md) within Reflag UI.
