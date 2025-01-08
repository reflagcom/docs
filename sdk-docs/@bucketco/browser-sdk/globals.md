---
layout:
  visible: true
title:
  visible: true
description:
  visible: false
tableOfContents:
  visible: true
outline:
  visible: true
pagination:
  visible: true
---

# Browser SDK Reference

## Classes

### BucketClient

BucketClient lets you interact with the Bucket API.

#### Constructors

##### new BucketClient()

```ts
new BucketClient(opts: InitOptions): BucketClient
```

Create a new BucketClient instance.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`opts`

</td>
<td>

[`InitOptions`](globals.md#initoptions)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BucketClient`](globals.md#bucketclient)

#### Methods

##### feedback()

```ts
feedback(payload: Feedback): Promise<undefined | Response>
```

Submit user feedback to Bucket. Must include either `score` or `comment`, or both.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`payload`

</td>
<td>

[`Feedback`](globals.md#feedback-6)

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`undefined` \| `Response`\>

##### getFeature()

```ts
getFeature(key: string): Feature
```

Return a feature. Accessing `isEnabled` will automatically send a `check` event.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

[`Feature`](globals.md#feature)

A feature

##### getFeatures()

```ts
getFeatures(): RawFeatures
```

Returns a map of enabled features.
Accessing a feature will *not* send a check event

###### Returns

[`RawFeatures`](globals.md#rawfeatures)

Map of features

##### initialize()

```ts
initialize(): Promise<void>
```

Initialize the Bucket SDK.

Must be called before calling other SDK methods.

###### Returns

`Promise`\<`void`\>

##### onFeaturesUpdated()

```ts
onFeaturesUpdated(cb: () => void): () => void
```

Register a callback to be called when the features are updated.
Features are not guaranteed to have actually changed when the callback is called.

Calling `client.stop()` will remove all listeners added here.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`cb`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`Function`

###### Returns

`void`

##### requestFeedback()

```ts
requestFeedback(options: RequestFeedbackData): void
```

Display the Bucket feedback form UI programmatically.

This can be used to collect feedback from users in Bucket in cases where Automated Feedback Surveys isn't appropriate.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`RequestFeedbackData`](globals.md#requestfeedbackdata)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### sendCheckEvent()

```ts
sendCheckEvent(checkEvent: CheckEvent): Promise<boolean>
```

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`checkEvent`

</td>
<td>

[`CheckEvent`](globals.md#checkevent-2)

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`boolean`\>

##### stop()

```ts
stop(): Promise<void>
```

Stop the SDK.
This will stop any automated feedback surveys.
It will also stop the features client, including removing
any onFeaturesUpdated listeners.

###### Returns

`Promise`\<`void`\>

##### track()

```ts
track(eventName: string, attributes?: null | Record<string, any>): Promise<undefined | Response>
```

Track an event in Bucket.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`eventName`

</td>
<td>

`string`

</td>
<td>

The name of the event

</td>
</tr>
<tr>
<td>

`attributes`?

</td>
<td>

`null` \| `Record`\<`string`, `any`\>

</td>
<td>

Any attributes you want to attach to the event

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`undefined` \| `Response`\>

##### updateCompany()

```ts
updateCompany(company: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
Attempting to update the company ID will log a warning and be ignored.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`company`

</td>
<td>

\{\}

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

##### updateOtherContext()

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
Updates to the company ID will be ignored.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`otherContext`

</td>
<td>

\{\}

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

##### updateUser()

```ts
updateUser(user: {}): Promise<void>
```

Update the user context.
Performs a shallow merge with the existing user context.
Attempting to update the user ID will log a warning and be ignored.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`user`

</td>
<td>

\{\}

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

## Interfaces

### BucketContext

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `company?` | [`CompanyContext`](globals.md#companycontext) | Company related context |
| `otherContext?` | `Record`\<`string`, `undefined` \| `string` \| `number`\> | Context which is not related to a user or a company |
| `user?` | [`UserContext`](globals.md#usercontext) | User related context |

### CheckEvent

Event representing checking the feature flag evaluation result

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Feature key |
| `value` | `boolean` | Result of feature flag evaluation |
| `version?` | `number` | Version of targeting rules |

### CompanyContext

Context is a set of key-value pairs.
Id should always be present so that it can be referenced to an existing company.

#### Indexable

 \[`key`: `string`\]: `undefined` \| `string` \| `number`

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `undefined` \| `string` \| `number` | Company id |
| `name?` | `string` | Company name |

### Feature

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isEnabled` | `boolean` | Result of feature flag evaluation |
| `requestFeedback` | (`options`: `Omit`\<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`\>) => `void` | - |
| `track` | () => `Promise`\<`undefined` \| `Response`\> | Function to send analytics events for this feature |

### FeedbackScoreSubmission

#### Properties

| Property | Type |
| ------ | ------ |
| `feedbackId?` | `string` |
| `question` | `string` |
| `score` | `number` |

### FeedbackSubmission

#### Properties

| Property | Type |
| ------ | ------ |
| `comment` | `string` |
| `feedbackId?` | `string` |
| `question` | `string` |
| `score` | `number` |

## Variables

### DEFAULT\_TRANSLATIONS

```ts
const DEFAULT_TRANSLATIONS: FeedbackTranslations;
```

```tsx
import { FeedbackTranslations } from "../types";

/**
 * {@includeCode ./defaultTranslations.tsx}
 */
export const DEFAULT_TRANSLATIONS: FeedbackTranslations = {
  DefaultQuestionLabel: "How satisfied are you with this feature?",
  QuestionPlaceholder: "Write a comment",
  ScoreStatusDescription: "Pick a score and leave a comment",
  ScoreStatusLoading: "Saving score, please wait...",
  ScoreStatusReceived: "Score has been received!",
  ScoreVeryDissatisfiedLabel: "Very dissatisfied (1/5)",
  ScoreDissatisfiedLabel: "Dissatisfied (2/5)",
  ScoreNeutralLabel: "Neutral (3/5)",
  ScoreSatisfiedLabel: "Satisfied (4/5)",
  ScoreVerySatisfiedLabel: "Very satisfied (5/5)",
  SuccessMessage: "Feedback received, thank you!",
  SendButton: "Send feedback",
};
```

### feedbackContainerId

```ts
const feedbackContainerId: "bucket-feedback-dialog-container" = "bucket-feedback-dialog-container";
```

ID of HTML DIV element which contains the feedback dialog

### propagatedEvents

```ts
const propagatedEvents: string[];
```

These events will be propagated to the feedback dialog

see https://developer.mozilla.org/en-US/docs/Web/API/Element#events
