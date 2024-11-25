# Attribute

An event attribute is a custom attribute on the [event](./) object.&#x20;

```tsx
track("custom event name", {
    location: "top nav",
});
```

In Segment terminology, this refers to the [event traits](https://segment.com/docs/connections/spec/track/#sending-traits-in-a-track-call---destination-actions).

Use cases for event attributes include event versioning and interaction location.
