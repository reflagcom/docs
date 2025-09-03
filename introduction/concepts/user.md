# User

### Definition

An **user** entity in Reflag is used to store the details of an user that interacted with your application. Users are normally part of one or more [companies](company.md). It is mandatory that the user [be part of a company](company.md#associating-with-users), otherwise user's interactions are not taken into account.

### Attributes

An user entity is essentially a collection of **attributes**. Each attribute is a **key** — **value** pair supplied by your application. There is one mandatory attribute each user must have: `ID`, and three special attributes Reflag uses in its UI for convenience: `email`, `name` and `avatar`. It is up to you to provide whichever attributes you deem necessary.

Reflag manages a set of computed attributes when you send data to Reflag:

* `First seen` and `Last seen` denote the first and last time the company-related interactions have been sent to Reflag,
* `Event count` is updated any time there is a new [event](event.md) received referencing the user.

{% hint style="info" %}
In Segment terminology, users can be thought of as acting as an [Identify](https://segment.com/docs/connections/spec/identify/) call. User attributes can be thought of as [User traits](https://segment.com/docs/connections/spec/identify/#custom-traits).
{% endhint %}

{% hint style="warning" %}
Do not include PII data when sending in user attributes. It is recommended that any sensitive data should be hashed or otherwise not included.
{% endhint %}

### Next steps

* Learn about [events](event.md) and [feedback](feedback.md),
* Learn how to [define feature access rules](../../product-handbook/feature-rollouts/feature-targeting-rules.md) using user attributes within Reflag UI.
