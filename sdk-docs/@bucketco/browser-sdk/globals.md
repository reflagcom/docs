## BucketClient

BucketClient lets you interact with the Bucket API.

### Constructors

#### new BucketClient()

```ts
new BucketClient(opts: InitOptions): BucketClient
```

Create a new BucketClient instance.

##### Parameters

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

##### Returns

[`BucketClient`](globals.md#bucketclient)

### Methods

#### feedback()

```ts
feedback(payload: Feedback): Promise<undefined | Response>
```

Submit user feedback to Bucket. Must include either `score` or `comment`, or both.

##### Parameters

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

##### Returns

`Promise`\<`undefined` \| `Response`\>

***

#### getFeature()

```ts
getFeature(key: string): Feature
```

Return a feature. Accessing `isEnabled` will automatically send a `check` event.

##### Parameters

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

##### Returns

[`Feature`](globals.md#feature)

A feature

***

#### getFeatures()

```ts
getFeatures(): RawFeatures
```

Returns a map of enabled features.
Accessing a feature will *not* send a check event

##### Returns

[`RawFeatures`](globals.md#rawfeatures)

Map of features

***

#### initialize()

```ts
initialize(): Promise<void>
```

Initialize the Bucket SDK.

Must be called before calling other SDK methods.

##### Returns

`Promise`\<`void`\>

***

#### onFeaturesUpdated()

```ts
onFeaturesUpdated(cb: () => void): () => void
```

Register a callback to be called when the features are updated.
Features are not guaranteed to have actually changed when the callback is called.

Calling `client.stop()` will remove all listeners added here.

##### Parameters

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

##### Returns

`Function`

###### Returns

`void`

***

#### requestFeedback()

```ts
requestFeedback(options: RequestFeedbackData): void
```

Display the Bucket feedback form UI programmatically.

This can be used to collect feedback from users in Bucket in cases where Automated Feedback Surveys isn't appropriate.

##### Parameters

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

##### Returns

`void`

***

#### sendCheckEvent()

```ts
sendCheckEvent(checkEvent: CheckEvent): Promise<boolean>
```

##### Parameters

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

##### Returns

`Promise`\<`boolean`\>

***

#### stop()

```ts
stop(): Promise<void>
```

Stop the SDK.
This will stop any automated feedback surveys.
It will also stop the features client, including removing
any onFeaturesUpdated listeners.

##### Returns

`Promise`\<`void`\>

***

#### track()

```ts
track(eventName: string, attributes?: null | Record<string, any>): Promise<undefined | Response>
```

Track an event in Bucket.

##### Parameters

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

##### Returns

`Promise`\<`undefined` \| `Response`\>

***

#### updateCompany()

```ts
updateCompany(company: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
Attempting to update the company ID will log a warning and be ignored.

##### Parameters

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

##### Returns

`Promise`\<`void`\>

***

#### updateOtherContext()

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
Updates to the company ID will be ignored.

##### Parameters

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

##### Returns

`Promise`\<`void`\>

***

#### updateUser()

```ts
updateUser(user: {}): Promise<void>
```

Update the user context.
Performs a shallow merge with the existing user context.
Attempting to update the user ID will log a warning and be ignored.

##### Parameters

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

##### Returns

`Promise`\<`void`\>

***

## BucketContext

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `company?` | [`CompanyContext`](globals.md#companycontext) | Company related context |
| `otherContext?` | `Record`\<`string`, `undefined` \| `string` \| `number`\> | Context which is not related to a user or a company |
| `user?` | [`UserContext`](globals.md#usercontext) | User related context |

***

## CheckEvent

Event representing checking the feature flag evaluation result

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Feature key |
| `value` | `boolean` | Result of feature flag evaluation |
| `version?` | `number` | Version of targeting rules |

***

## CompanyContext

Context is a set of key-value pairs.
Id should always be present so that it can be referenced to an existing company.

### Indexable

 \[`key`: `string`\]: `undefined` \| `string` \| `number`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `id` | `undefined` \| `string` \| `number` | Company id |
| `name?` | `string` | Company name |

***

## Feature

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isEnabled` | `boolean` | Result of feature flag evaluation |
| `requestFeedback` | (`options`: `Omit`\<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`\>) => `void` | - |
| `track` | () => `Promise`\<`undefined` \| `Response`\> | Function to send analytics events for this feature |

***

## FeedbackScoreSubmission

### Properties

| Property | Type |
| ------ | ------ |
| `feedbackId?` | `string` |
| `question` | `string` |
| `score` | `number` |

***

## FeedbackSubmission

### Properties

| Property | Type |
| ------ | ------ |
| `comment` | `string` |
| `feedbackId?` | `string` |
| `question` | `string` |
| `score` | `number` |

***

## InitOptions

BucketClient initialization options.

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `apiBaseUrl?` | `string` | Base URL of Bucket servers. You can override this to use your mocked server. |
| `company?` | [`CompanyContext`](globals.md#companycontext) | Company related context. If you provide `id` Bucket will enrich the evaluation context with company attributes on Bucket servers. |
| `enableTracking?` | `boolean` | - |
| `features?` | [`FeaturesOptions`](globals.md#featuresoptions) | Feature flag specific configuration |
| `feedback?` | [`FeedbackOptions`](globals.md#feedbackoptions) | AutoFeedback specific configuration |
| ~~`host?`~~ | `string` | **Deprecated** Use `apiBaseUrl` instead. |
| `logger?` | [`Logger`](globals.md#logger-2) | You can provide a logger to see the logs of the network calls. This is undefined by default. For debugging purposes you can just set the browser console to this property: `options.logger = window.console;` |
| `otherContext?` | `Record`\<`string`, `any`\> | Context not related to users or companies |
| `publishableKey` | `string` | Publishable key for authentication |
| `sdkVersion?` | `string` | Version of the SDK |
| `sseBaseUrl?` | `string` | Base URL of Bucket servers for SSE connections used by AutoFeedback. |
| ~~`sseHost?`~~ | `string` | **Deprecated** Use `sseBaseUrl` instead. |
| `user?` | [`UserContext`](globals.md#usercontext) | User related context. If you provide `id` Bucket will enrich the evaluation context with user attributes on Bucket servers. |

***

## Logger

### Methods

#### debug()

```ts
debug(message: string, ...args: any[]): void
```

##### Parameters

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

##### Returns

`void`

***

#### error()

```ts
error(message: string, ...args: any[]): void
```

##### Parameters

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

##### Returns

`void`

***

#### info()

```ts
info(message: string, ...args: any[]): void
```

##### Parameters

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

##### Returns

`void`

***

#### warn()

```ts
warn(message: string, ...args: any[]): void
```

##### Parameters

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

##### Returns

`void`

***

## OnScoreSubmitResult

### Properties

| Property | Type |
| ------ | ------ |
| `feedbackId` | `string` |

***

## UserContext

### Indexable

 \[`key`: `string`\]: `undefined` \| `string` \| `number`

### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `email?` | `string` | User email |
| `id` | `undefined` \| `string` \| `number` | User id |
| `name?` | `string` | User name |

***

## FeaturesOptions

```ts
type FeaturesOptions: {
  expireTimeMs: number;
  fallbackFeatures: string[];
  staleTimeMs: number;
  staleWhileRevalidate: boolean;
  timeoutMs: number;
};
```

### Type declaration

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

`expireTimeMs`?

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`fallbackFeatures`?

</td>
<td>

`string`[]

</td>
<td>

Feature keys for which `isEnabled` should fallback to true
if SDK fails to fetch features from Bucket servers.

</td>
</tr>
<tr>
<td>

`staleTimeMs`?

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`staleWhileRevalidate`?

</td>
<td>

`boolean`

</td>
<td>

If set to true client will return cached value when its stale
but refetching

</td>
</tr>
<tr>
<td>

`timeoutMs`?

</td>
<td>

`number`

</td>
<td>

Timeout in miliseconds

</td>
</tr>
</tbody>
</table>

***

## Feedback

```ts
type Feedback: UnassignedFeedback & {
  companyId: string;
  userId: string;
};
```

### Type declaration

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

## FeedbackOptions

```ts
type FeedbackOptions: {
  autoFeedbackHandler: FeedbackPromptHandler;
  enableAutoFeedback: boolean;
  enableLiveSatisfaction: boolean;
  liveSatisfactionHandler: FeedbackPromptHandler;
  ui: {
     position: FeedbackPosition;
     translations: Partial<FeedbackTranslations>;
    };
};
```

### Type declaration

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

`autoFeedbackHandler`?

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

`enableAutoFeedback`?

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

`enableLiveSatisfaction`?

</td>
<td>

`boolean`

</td>
<td>

**Deprecated**

Use `enableAutoFeedback` instead

</td>
</tr>
<tr>
<td>

`liveSatisfactionHandler`?

</td>
<td>

[`FeedbackPromptHandler`](globals.md#feedbackprompthandler)

</td>
<td>

**Deprecated**

Use `autoFeedbackHandler` instead

</td>
</tr>
<tr>
<td>

`ui`?

</td>
<td>

\{
  `position`: [`FeedbackPosition`](globals.md#feedbackposition);
  `translations`: `Partial`\<[`FeedbackTranslations`](globals.md#feedbacktranslations)\>;
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

[`FeedbackPosition`](globals.md#feedbackposition)

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

`Partial`\<[`FeedbackTranslations`](globals.md#feedbacktranslations)\>

</td>
<td>

Add your own custom translations for the feedback form.
Undefined translation keys fall back to english defaults.

</td>
</tr>
</tbody>
</table>

***

## FeedbackPlacement

```ts
type FeedbackPlacement: "bottom-right" | "bottom-left" | "top-right" | "top-left";
```

***

## FeedbackPosition

```ts
type FeedbackPosition: {
  type: "MODAL";
 } | {
  offset: Offset;
  placement: FeedbackPlacement;
  type: "DIALOG";
 } | {
  anchor: HTMLElement | null;
  type: "POPOVER";
};
```

***

## FeedbackPrompt

```ts
type FeedbackPrompt: {
  featureId: string;
  promptId: string;
  question: string;
  showAfter: Date;
  showBefore: Date;
};
```

### Type declaration

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

`featureId`

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

`promptId`

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

`question`

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

`showAfter`

</td>
<td>

`Date`

</td>
<td>

Feedback prompt should appear only after this time

</td>
</tr>
<tr>
<td>

`showBefore`

</td>
<td>

`Date`

</td>
<td>

Feedback prompt will not be shown after this time

</td>
</tr>
</tbody>
</table>

***

## FeedbackPromptHandler()

```ts
type FeedbackPromptHandler: (prompt: FeedbackPrompt, handlers: FeedbackPromptHandlerCallbacks) => void;
```

### Parameters

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

### Returns

`void`

***

## FeedbackPromptHandlerCallbacks

```ts
type FeedbackPromptHandlerCallbacks: {
  openFeedbackForm: (options: FeedbackPromptHandlerOpenFeedbackFormOptions) => void;
  reply: FeedbackPromptReplyHandler;
};
```

### Type declaration

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

`openFeedbackForm`

</td>
<td>

(`options`: [`FeedbackPromptHandlerOpenFeedbackFormOptions`](globals.md#feedbackprompthandleropenfeedbackformoptions)) => `void`

</td>
</tr>
<tr>
<td>

`reply`

</td>
<td>

[`FeedbackPromptReplyHandler`](globals.md#feedbackpromptreplyhandler)

</td>
</tr>
</tbody>
</table>

***

## FeedbackPromptHandlerOpenFeedbackFormOptions

```ts
type FeedbackPromptHandlerOpenFeedbackFormOptions: Omit<RequestFeedbackOptions, 
  | "featureId"
  | "featureKey"
  | "userId"
  | "companyId"
  | "onClose"
| "onDismiss">;
```

***

## FeedbackPromptReply

```ts
type FeedbackPromptReply: {
  comment: string;
  companyId: string;
  question: string;
  score: number;
};
```

### Type declaration

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

`comment`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`question`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`score`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

## FeedbackPromptReplyHandler()

```ts
type FeedbackPromptReplyHandler: <T>(reply: T) => T extends null ? Promise<void> : Promise<{
  feedbackId: string;
}>;
```

### Type Parameters

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

### Parameters

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

### Returns

`T` *extends* `null` ? `Promise`\<`void`\> : `Promise`\<\{
  `feedbackId`: `string`;
 \}\>

***

## FeedbackTranslations

```ts
type FeedbackTranslations: {
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

### Type declaration

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

`DefaultQuestionLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`QuestionPlaceholder`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreDissatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreNeutralLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreSatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreStatusDescription`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreStatusLoading`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreStatusReceived`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreVeryDissatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`ScoreVerySatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`SendButton`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`SuccessMessage`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

## Offset

```ts
type Offset: {
  x: string | number;
  y: string | number;
};
```

### Type declaration

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

`x`?

</td>
<td>

`string` \| `number`

</td>
<td>

Offset from the nearest horizontal screen edge after placement is resolved

</td>
</tr>
<tr>
<td>

`y`?

</td>
<td>

`string` \| `number`

</td>
<td>

Offset from the nearest vertical screen edge after placement is resolved

</td>
</tr>
</tbody>
</table>

***

## RawFeature

```ts
type RawFeature: {
  isEnabled: boolean;
  key: string;
  targetingVersion: number;
};
```

### Type declaration

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

`isEnabled`

</td>
<td>

`boolean`

</td>
<td>

Result of feature flag evaluation

</td>
</tr>
<tr>
<td>

`key`

</td>
<td>

`string`

</td>
<td>

Feature key

</td>
</tr>
<tr>
<td>

`targetingVersion`?

</td>
<td>

`number`

</td>
<td>

Version of targeting rules

</td>
</tr>
</tbody>
</table>

***

## RawFeatures

```ts
type RawFeatures: Record<string, RawFeature | undefined>;
```

***

## RequestFeedbackData

```ts
type RequestFeedbackData: Omit<OpenFeedbackFormOptions, "key" | "onSubmit"> & {
  companyId: string;
  onAfterSubmit: (data: FeedbackSubmission) => void;
 } & FeatureIdentifier;
```

### Type declaration

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

## RequestFeedbackOptions

```ts
type RequestFeedbackOptions: RequestFeedbackData & {
  userId: string;
};
```

### Type declaration

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

## UnassignedFeedback

```ts
type UnassignedFeedback: {
  comment: string;
  feedbackId: string;
  promptedQuestion: string;
  promptId: string;
  question: string;
  score: number;
  source: "prompt" | "sdk" | "widget";
 } & FeatureIdentifier;
```

### Type declaration

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

`comment`?

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

`feedbackId`?

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

`promptedQuestion`?

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

`promptId`?

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

`question`?

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

`score`?

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

`source`?

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

***

## DEFAULT\_TRANSLATIONS

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

## feedbackContainerId

```ts
const feedbackContainerId: "bucket-feedback-dialog-container" = "bucket-feedback-dialog-container";
```

ID of HTML DIV element which contains the feedback dialog

***

## propagatedEvents

```ts
const propagatedEvents: string[];
```

These events will be propagated to the feedback dialog

see https://developer.mozilla.org/en-US/docs/Web/API/Element#events
