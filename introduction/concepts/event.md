# Track event

### Definition

A track event in Bucket is sent by the client when an user interacts with a feature within your application. Bucket uses these events to [track feature adoption](feature.md#metrics) or launch [feedback surveys](../../product-handbook/feature-analysis/automated-feedback-surveys.md). In most cases, you don't need to create custom track events as you'll just use the [feature key](feature.md#feature-key) instead.

### Attributes

An event entity is essentially a collection of **attributes** associated with an event name or feature key. Each attribute is a **key** — **value** pair supplied by your application. There is one mandatory attribute each event must have: `userId`. It is up to you to provide whichever attributes you deem necessary.

Event attributes are useful mainly when setting up event-based features which can be configured to match specific events based on these attributes. Another use case applies to automatic feedback surveys which can be set to trigger on a specific event based on a combination of attributes.

Bucket manages a set of computed attributes when you send data to Bucket:

* `First seen`**,** `Last seen` and `Event count` of the [users](user.md#attributes) and [companies](company.md#attributes),
* `First used`**,** `Last used` and `Event count` of the [companies](company.md#attributes) relative to the [feature](feature.md#metrics) that matched the event.

{% hint style="info" %}
In Segment terminology, these events can be thought of as acting as a [Track](https://segment.com/docs/connections/spec/track/) call. Event attributes can be thought of as [Event traits](https://segment.com/docs/connections/spec/track/#sending-traits-in-a-track-call---destination-actions).
{% endhint %}

{% hint style="warning" %}
Do not include PII data when sending in event attributes. It is recommended that any sensitive data should be hashed or otherwise not included.
{% endhint %}

### Next steps

* Learn about [feedback](feedback.md) and setting up [automatic feedback surveys](../../product-handbook/feature-analysis/automated-feedback-surveys.md) within Bucket UI,
* Learn how to [create an event-based feature](../../product-handbook/create-your-first-feature.md) using user attributes within Bucket UI.
