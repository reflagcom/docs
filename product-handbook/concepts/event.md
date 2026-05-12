# Track event

### Definition

A track event in Reflag is sent by the client when a user interacts with a flagged part of your application. Reflag uses these events to [track flag adoption](feature.md#metrics) or launch [feedback surveys](../launch-monitor/automated-feedback-surveys.md). In most cases, you do not need to create custom track events because you will use the [flag key](feature.md#flag-key) instead.

### Attributes

An event entity is a collection of **attributes** associated with an event name or flag key. Each attribute is a **key** — **value** pair supplied by your application. Every event must include `userId`. You can provide any additional attributes you need.

Event attributes are useful mainly when setting up event-based flags, which can match specific events based on those attributes. They are also useful for automatic feedback surveys, which can trigger on a specific event and attribute combination.

Reflag manages a set of computed attributes when you send data to Reflag:

* `First seen`**,** `Last seen` and `Event count` of the [users](user.md#attributes) and [companies](company.md#attributes),
* `First used`**,** `Last used` and `Event count` of the [companies](company.md#attributes) relative to the [flag](feature.md#metrics) that matched the event.

{% hint style="info" %}
In Segment terminology, these events can be thought of as acting as a [Track](https://segment.com/docs/connections/spec/track/) call. Event attributes can be thought of as [Event traits](https://segment.com/docs/connections/spec/track/#sending-traits-in-a-track-call---destination-actions).
{% endhint %}

{% hint style="warning" %}
Do not include PII data when sending in event attributes. It is recommended that any sensitive data should be hashed or otherwise not included.
{% endhint %}

### Next steps

* Learn about [feedback](feedback.md) and setting up [automatic feedback surveys](../launch-monitor/automated-feedback-surveys.md) within Reflag UI,
* Learn how to [create an event-based flag](feature-events.md) using user attributes within Reflag UI.
