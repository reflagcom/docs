# Event

An event is a way to track feature adoption or launch feedback surveys on Bucket. In most cases, you don't need to create custom events as you'll just use the [feature key](../../data-model/feature/feature-key.md) instead.

```tsx
track("custom event name");
```

Whenever a [user](../user/) interacts with a [feature](../feature.md), you can track the interaction as feature adoption.&#x20;

In Segment terminology, this is the [Track](https://segment.com/docs/connections/spec/track/) call. For custom events, we recommend following the [object-action](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/) naming convention.&#x20;

