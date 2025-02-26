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

# @bucketco/browser-sdk

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

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="logger"></a> `logger`

</td>
<td>

`readonly`

</td>
<td>

[`Logger`](globals.md#logger-1)

</td>
</tr>
</tbody>
</table>

#### Methods

##### feedback()

```ts
feedback(payload: Feedback): Promise<
  | undefined
| Response>
```

Submit user feedback to Bucket. Must include either `score` or `comment`, or both.

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

`payload`

</td>
<td>

[`Feedback`](globals.md#feedback-1)

</td>
<td>

The feedback details to submit.

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

The server response.

##### getConfig()

```ts
getConfig(): Config
```

Get the current configuration.

###### Returns

`Config`

##### getFeature()

```ts
getFeature(key: string): Feature
```

Return a feature. Accessing `isEnabled` or `config` will automatically send a `check` event.

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

A feature.

##### getFeatureOverride()

```ts
getFeatureOverride(key: string): null | boolean
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

`key`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

`null` \| `boolean`

##### getFeatures()

```ts
getFeatures(): RawFeatures
```

Returns a map of enabled features.
Accessing a feature will *not* send a check event
and `isEnabled` does not take any feature overrides
into account.

###### Returns

[`RawFeatures`](globals.md#rawfeatures)

Map of features.

##### initialize()

```ts
initialize(): Promise<void>
```

Initialize the Bucket SDK.

Must be called before calling other SDK methods.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### off()

```ts
off<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): void
```

Remove a hook from the client.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`THookType` *extends* keyof `HookArgs`

</td>
</tr>
</tbody>
</table>

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

`type`

</td>
<td>

`THookType`

</td>
</tr>
<tr>
<td>

`handler`

</td>
<td>

(`args0`: `HookArgs`\[`THookType`\]) => `void`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

A function to remove the hook.

##### on()

```ts
on<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): void
```

Add a hook to the client.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`THookType` *extends* keyof `HookArgs`

</td>
</tr>
</tbody>
</table>

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

`type`

</td>
<td>

`THookType`

</td>
</tr>
<tr>
<td>

`handler`

</td>
<td>

(`args0`: `HookArgs`\[`THookType`\]) => `void`

</td>
</tr>
</tbody>
</table>

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
sendCheckEvent(checkEvent: CheckEvent): Promise<any>
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

[`CheckEvent`](globals.md#checkevent)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

##### setFeatureOverride()

```ts
setFeatureOverride(key: string, isEnabled: null | boolean): void
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

`key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`isEnabled`

</td>
<td>

`null` \| `boolean`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### stop()

```ts
stop(): Promise<void>
```

Stop the SDK.
This will stop any automated feedback surveys.
It will also stop the features client, including removing
any onFeaturesUpdated listeners.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### track()

```ts
track(eventName: string, attributes?: 
  | null
  | Record<string, any>): Promise<
  | undefined
| Response>
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

The name of the event.

</td>
</tr>
<tr>
<td>

`attributes`?

</td>
<td>

 \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
<td>

Any attributes you want to attach to the event.

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

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
<th>Description</th>
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
<td>

The company details.

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

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
<th>Description</th>
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
<td>

Additional context.

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Interfaces

### BucketContext

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="company"></a> `company?`

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
<td>

Company related context

</td>
</tr>
<tr>
<td>

<a id="othercontext"></a> `otherContext?`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| `string` \| `number`\>

</td>
<td>

Context which is not related to a user or a company

</td>
</tr>
<tr>
<td>

<a id="user"></a> `user?`

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
<td>

User related context

</td>
</tr>
</tbody>
</table>

***

### CheckEvent

Event representing checking the feature flag evaluation result

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="action"></a> `action`

</td>
<td>

`"check-is-enabled"` \| `"check-config"`

</td>
<td>

Action to perform.

</td>
</tr>
<tr>
<td>

<a id="key"></a> `key`

</td>
<td>

`string`

</td>
<td>

Feature key.

</td>
</tr>
<tr>
<td>

<a id="missingcontextfields"></a> `missingContextFields?`

</td>
<td>

`string`[]

</td>
<td>

Missing context fields.

</td>
</tr>
<tr>
<td>

<a id="ruleevaluationresults"></a> `ruleEvaluationResults?`

</td>
<td>

`boolean`[]

</td>
<td>

Rule evaluation results.

</td>
</tr>
<tr>
<td>

<a id="value"></a> `value`

</td>
<td>

`any`

</td>
<td>

Result of feature flag or configuration evaluation.

</td>
</tr>
<tr>
<td>

<a id="version"></a> `version?`

</td>
<td>

`number`

</td>
<td>

Version of targeting rules.

</td>
</tr>
</tbody>
</table>

***

### CompanyContext

Context is a set of key-value pairs.
Id should always be present so that it can be referenced to an existing company.

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="id"></a> `id`

</td>
<td>

`undefined` \| `string` \| `number`

</td>
<td>

Company id

</td>
</tr>
<tr>
<td>

<a id="name"></a> `name?`

</td>
<td>

`string`

</td>
<td>

Company name

</td>
</tr>
</tbody>
</table>

***

### Feature

Represents a feature.

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="config"></a> `config`

</td>
<td>

`FeatureRemoteConfig`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="isenabled"></a> `isEnabled`

</td>
<td>

`boolean`

</td>
<td>

Result of feature flag evaluation.

</td>
</tr>
<tr>
<td>

<a id="requestfeedback-1"></a> `requestFeedback`

</td>
<td>

(`options`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`\>) => `void`

</td>
<td>

Function to request feedback for this feature.

</td>
</tr>
<tr>
<td>

<a id="track-1"></a> `track`

</td>
<td>

() => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< \| `undefined` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

</td>
<td>

Function to send analytics events for this feature.

</td>
</tr>
</tbody>
</table>

***

### FeedbackScoreSubmission

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="feedbackid"></a> `feedbackId?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="question"></a> `question`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="score"></a> `score`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

### FeedbackSubmission

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="comment"></a> `comment`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="feedbackid-1"></a> `feedbackId?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="question-1"></a> `question`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="score-1"></a> `score`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

### Logger

#### Methods

##### debug()

```ts
debug(message: string, ...args: any[]): void
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

`message`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### error()

```ts
error(message: string, ...args: any[]): void
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

`message`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### info()

```ts
info(message: string, ...args: any[]): void
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

`message`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### warn()

```ts
warn(message: string, ...args: any[]): void
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

`message`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

...`args`

</td>
<td>

`any`[]

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

***

### OnScoreSubmitResult

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="feedbackid-2"></a> `feedbackId`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### OpenFeedbackFormOptions

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="key-1"></a> `key`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="onclose"></a> `onClose?`

</td>
<td>

() => `void`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="ondismiss"></a> `onDismiss?`

</td>
<td>

() => `void`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="onscoresubmit"></a> `onScoreSubmit?`

</td>
<td>

(`data`: [`FeedbackScoreSubmission`](globals.md#feedbackscoresubmission)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`OnScoreSubmitResult`](globals.md#onscoresubmitresult)\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="onsubmit"></a> `onSubmit`

</td>
<td>

(`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => \| `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="openwithcommentvisible"></a> `openWithCommentVisible?`

</td>
<td>

`boolean`

</td>
<td>

Open the form with both the score and comment fields visible.
Defaults to `false`

</td>
</tr>
<tr>
<td>

<a id="position"></a> `position?`

</td>
<td>

`Position`

</td>
<td>

Control the placement and behavior of the feedback form.

</td>
</tr>
<tr>
<td>

<a id="title"></a> `title?`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="translations"></a> `translations?`

</td>
<td>

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FeedbackTranslations`](globals.md#feedbacktranslations)\>

</td>
<td>

Add your own custom translations for the feedback form.
Undefined translation keys fall back to english defaults.

</td>
</tr>
</tbody>
</table>

***

### UserContext

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="email"></a> `email?`

</td>
<td>

`string`

</td>
<td>

User email

</td>
</tr>
<tr>
<td>

<a id="id-1"></a> `id`

</td>
<td>

`undefined` \| `string` \| `number`

</td>
<td>

User id

</td>
</tr>
<tr>
<td>

<a id="name-1"></a> `name?`

</td>
<td>

`string`

</td>
<td>

User name

</td>
</tr>
</tbody>
</table>

## Type Aliases

### FallbackFeatureOverride

```ts
type FallbackFeatureOverride = 
  | {
  key: string;
  payload: any;
 }
  | true;
```

***

### Feedback

```ts
type Feedback = UnassignedFeedback & {
  companyId: string;
  userId: string;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`companyId`?

</td>
<td>

`string`

</td>
<td>

Company ID from your own application.

</td>
</tr>
<tr>
<td>

`userId`?

</td>
<td>

`string`

</td>
<td>

User ID from your own application.

</td>
</tr>
</tbody>
</table>

***

### FeedbackOptions

```ts
type FeedbackOptions = {
  autoFeedbackHandler: FeedbackPromptHandler;
  enableAutoFeedback: boolean;
  ui: {
     position: Position;
     translations: Partial<FeedbackTranslations>;
    };
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="autofeedbackhandler"></a> `autoFeedbackHandler`?

</td>
<td>

[`FeedbackPromptHandler`](globals.md#feedbackprompthandler)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="enableautofeedback"></a> `enableAutoFeedback`?

</td>
<td>

`boolean`

</td>
<td>

Enables automatic feedback prompting if it's set up in Bucket

</td>
</tr>
<tr>
<td>

<a id="ui"></a> `ui`?

</td>
<td>

\{
  `position`: `Position`;
  `translations`: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FeedbackTranslations`](globals.md#feedbacktranslations)\>;
 \}

</td>
<td>

With these options you can override the look of the feedback prompt

</td>
</tr>
<tr>
<td>

`ui.position`?

</td>
<td>

`Position`

</td>
<td>

Control the placement and behavior of the feedback form.

</td>
</tr>
<tr>
<td>

`ui.translations`?

</td>
<td>

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`FeedbackTranslations`](globals.md#feedbacktranslations)\>

</td>
<td>

Add your own custom translations for the feedback form.
Undefined translation keys fall back to english defaults.

</td>
</tr>
</tbody>
</table>

***

### FeedbackPrompt

```ts
type FeedbackPrompt = {
  featureId: string;
  promptId: string;
  question: string;
  showAfter: Date;
  showBefore: Date;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="featureid"></a> `featureId`

</td>
<td>

`string`

</td>
<td>

Feature ID from Bucket

</td>
</tr>
<tr>
<td>

<a id="promptid"></a> `promptId`

</td>
<td>

`string`

</td>
<td>

Id of the prompt

</td>
</tr>
<tr>
<td>

<a id="question-2"></a> `question`

</td>
<td>

`string`

</td>
<td>

Specific question user was asked

</td>
</tr>
<tr>
<td>

<a id="showafter"></a> `showAfter`

</td>
<td>

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

</td>
<td>

Feedback prompt should appear only after this time

</td>
</tr>
<tr>
<td>

<a id="showbefore"></a> `showBefore`

</td>
<td>

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

</td>
<td>

Feedback prompt will not be shown after this time

</td>
</tr>
</tbody>
</table>

***

### FeedbackPromptHandler()

```ts
type FeedbackPromptHandler = (prompt: FeedbackPrompt, handlers: FeedbackPromptHandlerCallbacks) => void;
```

#### Parameters

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

`prompt`

</td>
<td>

[`FeedbackPrompt`](globals.md#feedbackprompt)

</td>
</tr>
<tr>
<td>

`handlers`

</td>
<td>

[`FeedbackPromptHandlerCallbacks`](globals.md#feedbackprompthandlercallbacks)

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

***

### FeedbackPromptHandlerCallbacks

```ts
type FeedbackPromptHandlerCallbacks = {
  openFeedbackForm: (options: FeedbackPromptHandlerOpenFeedbackFormOptions) => void;
  reply: FeedbackPromptReplyHandler;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="openfeedbackform"></a> `openFeedbackForm`

</td>
<td>

(`options`: [`FeedbackPromptHandlerOpenFeedbackFormOptions`](globals.md#feedbackprompthandleropenfeedbackformoptions)) => `void`

</td>
</tr>
<tr>
<td>

<a id="reply"></a> `reply`

</td>
<td>

[`FeedbackPromptReplyHandler`](globals.md#feedbackpromptreplyhandler)

</td>
</tr>
</tbody>
</table>

***

### FeedbackPromptHandlerOpenFeedbackFormOptions

```ts
type FeedbackPromptHandlerOpenFeedbackFormOptions = Omit<RequestFeedbackOptions, 
  | "featureId"
  | "featureKey"
  | "userId"
  | "companyId"
  | "onClose"
| "onDismiss">;
```

***

### FeedbackPromptReply

```ts
type FeedbackPromptReply = {
  comment: string;
  companyId: string;
  question: string;
  score: number;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="comment-1"></a> `comment`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="companyid"></a> `companyId`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="question-3"></a> `question`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="score-2"></a> `score`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

### FeedbackPromptReplyHandler()

```ts
type FeedbackPromptReplyHandler = <T>(reply: T) => T extends null ? Promise<void> : Promise<{
  feedbackId: string;
}>;
```

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T` *extends* [`FeedbackPromptReply`](globals.md#feedbackpromptreply) \| `null`

</td>
</tr>
</tbody>
</table>

#### Parameters

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

`reply`

</td>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Returns

`T` *extends* `null` ? [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\> : [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{
  `feedbackId`: `string`;
 \}\>

***

### FeedbackTranslations

```ts
type FeedbackTranslations = {
  DefaultQuestionLabel: string;
  QuestionPlaceholder: string;
  ScoreDissatisfiedLabel: string;
  ScoreNeutralLabel: string;
  ScoreSatisfiedLabel: string;
  ScoreStatusDescription: string;
  ScoreStatusLoading: string;
  ScoreStatusReceived: string;
  ScoreVeryDissatisfiedLabel: string;
  ScoreVerySatisfiedLabel: string;
  SendButton: string;
  SuccessMessage: string;
};
```

You can use this to override text values in the feedback form
with desired language translation

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="defaultquestionlabel"></a> `DefaultQuestionLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="questionplaceholder"></a> `QuestionPlaceholder`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoredissatisfiedlabel"></a> `ScoreDissatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoreneutrallabel"></a> `ScoreNeutralLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoresatisfiedlabel"></a> `ScoreSatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scorestatusdescription"></a> `ScoreStatusDescription`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scorestatusloading"></a> `ScoreStatusLoading`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scorestatusreceived"></a> `ScoreStatusReceived`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoreverydissatisfiedlabel"></a> `ScoreVeryDissatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoreverysatisfiedlabel"></a> `ScoreVerySatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="sendbutton"></a> `SendButton`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="successmessage"></a> `SuccessMessage`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### InitOptions

```ts
type InitOptions = {
  apiBaseUrl: string;
  appBaseUrl: string;
  company: CompanyContext;
  enableTracking: boolean;
  expireTimeMs: number;
  fallbackFeatures:   | string[]
     | Record<string, FallbackFeatureOverride>;
  feedback: FeedbackOptions;
  logger: Logger;
  otherContext: Record<string, any>;
  publishableKey: string;
  sdkVersion: string;
  sseBaseUrl: string;
  staleTimeMs: number;
  staleWhileRevalidate: boolean;
  timeoutMs: number;
  toolbar: ToolbarOptions;
  user: UserContext;
};
```

BucketClient initialization options.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="apibaseurl"></a> `apiBaseUrl`?

</td>
<td>

`string`

</td>
<td>

Base URL of Bucket servers. You can override this to use your mocked server.

</td>
</tr>
<tr>
<td>

<a id="appbaseurl"></a> `appBaseUrl`?

</td>
<td>

`string`

</td>
<td>

Base URL of the Bucket web app. Links open ín this app by default.

</td>
</tr>
<tr>
<td>

<a id="company-1"></a> `company`?

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
<td>

Company related context. If you provide `id` Bucket will enrich the evaluation context with
company attributes on Bucket servers.

</td>
</tr>
<tr>
<td>

<a id="enabletracking"></a> `enableTracking`?

</td>
<td>

`boolean`

</td>
<td>

Whether to enable tracking. Defaults to `true`.

</td>
</tr>
<tr>
<td>

<a id="expiretimems"></a> `expireTimeMs`?

</td>
<td>

`number`

</td>
<td>

If set, features will be cached between page loads for this duration

</td>
</tr>
<tr>
<td>

<a id="fallbackfeatures"></a> `fallbackFeatures`?

</td>
<td>

  \| `string`[]
  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FallbackFeatureOverride`](globals.md#fallbackfeatureoverride)\>

</td>
<td>

Feature keys for which `isEnabled` should fallback to true
if SDK fails to fetch features from Bucket servers. If a record
is supplied instead of array, the values of each key represent the
configuration values and `isEnabled` is assume `true`.

</td>
</tr>
<tr>
<td>

<a id="feedback-2"></a> `feedback`?

</td>
<td>

[`FeedbackOptions`](globals.md#feedbackoptions)

</td>
<td>

AutoFeedback specific configuration

</td>
</tr>
<tr>
<td>

<a id="logger-2"></a> `logger`?

</td>
<td>

[`Logger`](globals.md#logger-1)

</td>
<td>

You can provide a logger to see the logs of the network calls.
This is undefined by default.
For debugging purposes you can just set the browser console to this property:
```javascript
options.logger = window.console;
```

</td>
</tr>
<tr>
<td>

<a id="othercontext-1"></a> `otherContext`?

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
<td>

Context not related to users or companies

</td>
</tr>
<tr>
<td>

<a id="publishablekey"></a> `publishableKey`

</td>
<td>

`string`

</td>
<td>

Publishable key for authentication

</td>
</tr>
<tr>
<td>

<a id="sdkversion"></a> `sdkVersion`?

</td>
<td>

`string`

</td>
<td>

Version of the SDK

</td>
</tr>
<tr>
<td>

<a id="ssebaseurl"></a> `sseBaseUrl`?

</td>
<td>

`string`

</td>
<td>

Base URL of Bucket servers for SSE connections used by AutoFeedback.

</td>
</tr>
<tr>
<td>

<a id="staletimems"></a> `staleTimeMs`?

</td>
<td>

`number`

</td>
<td>

Stale features will be returned if staleWhileRevalidate is true if no new features can be fetched

</td>
</tr>
<tr>
<td>

<a id="stalewhilerevalidate"></a> `staleWhileRevalidate`?

</td>
<td>

`boolean`

</td>
<td>

If set to true stale features will be returned while refetching features

</td>
</tr>
<tr>
<td>

<a id="timeoutms"></a> `timeoutMs`?

</td>
<td>

`number`

</td>
<td>

Timeout in milliseconds when fetching features

</td>
</tr>
<tr>
<td>

<a id="toolbar"></a> `toolbar`?

</td>
<td>

[`ToolbarOptions`](globals.md#toolbaroptions)

</td>
<td>

Toolbar configuration

</td>
</tr>
<tr>
<td>

<a id="user-1"></a> `user`?

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
<td>

User related context. If you provide `id` Bucket will enrich the evaluation context with
user attributes on Bucket servers.

</td>
</tr>
</tbody>
</table>

***

### RawFeature

```ts
type RawFeature = FetchedFeature & {
  isEnabledOverride: boolean | null;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`isEnabledOverride`

</td>
<td>

`boolean` \| `null`

</td>
<td>

If not null, the result is being overridden locally

</td>
</tr>
</tbody>
</table>

***

### RawFeatures

```ts
type RawFeatures = Record<string, RawFeature>;
```

***

### RequestFeedbackData

```ts
type RequestFeedbackData = Omit<OpenFeedbackFormOptions, "key" | "onSubmit"> & {
  companyId: string;
  featureKey: string;
  onAfterSubmit: (data: FeedbackSubmission) => void;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`companyId`?

</td>
<td>

`string`

</td>
<td>

Company ID from your own application.

</td>
</tr>
<tr>
<td>

`featureKey`

</td>
<td>

`string`

</td>
<td>

Bucket feature key.

</td>
</tr>
<tr>
<td>

`onAfterSubmit`?

</td>
<td>

(`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => `void`

</td>
<td>

Allows you to handle a copy of the already submitted
feedback.

This can be used for side effects, such as storing a
copy of the feedback in your own application or CRM.

</td>
</tr>
</tbody>
</table>

***

### RequestFeedbackOptions

```ts
type RequestFeedbackOptions = RequestFeedbackData & {
  userId: string;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`userId`

</td>
<td>

`string`

</td>
<td>

User ID from your own application.

</td>
</tr>
</tbody>
</table>

***

### ToolbarOptions

```ts
type ToolbarOptions = 
  | boolean
  | {
  position: ToolbarPosition;
  show: boolean;
};
```

Toolbar options.

***

### UnassignedFeedback

```ts
type UnassignedFeedback = {
  comment: string;
  featureKey: string;
  feedbackId: string;
  promptedQuestion: string;
  promptId: string;
  question: string;
  score: number;
  source: "prompt" | "sdk" | "widget";
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="comment-2"></a> `comment`?

</td>
<td>

`string`

</td>
<td>

User supplied comment about your feature.

</td>
</tr>
<tr>
<td>

<a id="featurekey"></a> `featureKey`

</td>
<td>

`string`

</td>
<td>

Bucket feature key.

</td>
</tr>
<tr>
<td>

<a id="feedbackid-3"></a> `feedbackId`?

</td>
<td>

`string`

</td>
<td>

Bucket feedback ID

</td>
</tr>
<tr>
<td>

<a id="promptedquestion"></a> `promptedQuestion`?

</td>
<td>

`string`

</td>
<td>

The original question.
This only needs to be populated if the feedback was submitted through the automated feedback surveys channel.

</td>
</tr>
<tr>
<td>

<a id="promptid-1"></a> `promptId`?

</td>
<td>

`string`

</td>
<td>

Bucket feedback prompt ID.

This only exists if the feedback was submitted
as part of an automated prompt from Bucket.

Used for internal state management of automated
feedback.

</td>
</tr>
<tr>
<td>

<a id="question-4"></a> `question`?

</td>
<td>

`string`

</td>
<td>

The question that was presented to the user.

</td>
</tr>
<tr>
<td>

<a id="score-3"></a> `score`?

</td>
<td>

`number`

</td>
<td>

Customer satisfaction score.

</td>
</tr>
<tr>
<td>

<a id="source"></a> `source`?

</td>
<td>

`"prompt"` \| `"sdk"` \| `"widget"`

</td>
<td>

Source of the feedback, depending on how the user was asked
- `prompt` - Feedback submitted by way of an automated feedback survey (prompted)
- `widget` - Feedback submitted via `requestFeedback`
- `sdk` - Feedback submitted via `feedback`

</td>
</tr>
</tbody>
</table>

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

***

### feedbackContainerId

```ts
const feedbackContainerId: "bucket-feedback-dialog-container" = "bucket-feedback-dialog-container";
```

ID of HTML DIV element which contains the feedback dialog

***

### propagatedEvents

```ts
const propagatedEvents: string[];
```

These events will be propagated to the feedback dialog

#### See

[https://developer.mozilla.org/en-US/docs/Web/API/Element#events](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)
