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

<a id="bucketclient"></a>

### BucketClient

BucketClient lets you interact with the Bucket API.

#### Constructors

<a id="constructors-1"></a>

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

<a id="feedback-2"></a>

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

***

<a id="getfeature-2"></a>

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

***

<a id="getfeatures-2"></a>

##### getFeatures()

```ts
getFeatures(): RawFeatures
```

Returns a map of enabled features.
Accessing a feature will *not* send a check event

###### Returns

[`RawFeatures`](globals.md#rawfeatures)

Map of features

***

<a id="initialize-2"></a>

##### initialize()

```ts
initialize(): Promise<void>
```

Initialize the Bucket SDK.

Must be called before calling other SDK methods.

###### Returns

`Promise`\<`void`\>

***

<a id="onfeaturesupdated-2"></a>

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
<th>Description</th>
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
<td>

this will be called when the features are updated.

</td>
</tr>
</tbody>
</table>

###### Returns

`Function`

###### Returns

`void`

***

<a id="requestfeedback-2"></a>

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

***

<a id="sendcheckevent-2"></a>

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

***

<a id="stop-2"></a>

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

***

<a id="track-2"></a>

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

***

<a id="updatecompany-2"></a>

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

***

<a id="updateothercontext-2"></a>

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

***

<a id="updateuser-2"></a>

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

<a id="bucketcontext"></a>

### BucketContext

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="company-3"></a> `company?` | [`CompanyContext`](globals.md#companycontext) | Company related context |
| <a id="othercontext-3"></a> `otherContext?` | `Record`\<`string`, `undefined` \| `string` \| `number`\> | Context which is not related to a user or a company |
| <a id="user-3"></a> `user?` | [`UserContext`](globals.md#usercontext) | User related context |

***

<a id="checkevent-2"></a>

### CheckEvent

Event representing checking the feature flag evaluation result

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="key-9"></a> `key` | `string` | Feature key |
| <a id="value-1"></a> `value` | `boolean` | Result of feature flag evaluation |
| <a id="version-1"></a> `version?` | `number` | Version of targeting rules |

***

<a id="companycontext"></a>

### CompanyContext

Context is a set of key-value pairs.
Id should always be present so that it can be referenced to an existing company.

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="id-1"></a> `id` | `undefined` \| `string` \| `number` | Company id |
| <a id="name-1"></a> `name?` | `string` | Company name |

***

<a id="feature"></a>

### Feature

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="isenabled-1"></a> `isEnabled` | `boolean` | Result of feature flag evaluation |
| <a id="requestfeedback-5"></a> `requestFeedback` | (`options`: `Omit`\<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`\>) => `void` | - |
| <a id="track-5"></a> `track` | () => `Promise`\<`undefined` \| `Response`\> | Function to send analytics events for this feature |

***

<a id="feedbackscoresubmission"></a>

### FeedbackScoreSubmission

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="feedbackid-1"></a> `feedbackId?` | `string` |
| <a id="question-1"></a> `question` | `string` |
| <a id="score-1"></a> `score` | `number` |

***

<a id="feedbacksubmission"></a>

### FeedbackSubmission

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="comment-1"></a> `comment` | `string` |
| <a id="feedbackid-3"></a> `feedbackId?` | `string` |
| <a id="question-3"></a> `question` | `string` |
| <a id="score-3"></a> `score` | `number` |

***

<a id="initoptions"></a>

### InitOptions

BucketClient initialization options.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="apibaseurl-1"></a> `apiBaseUrl?` | `string` | Base URL of Bucket servers. You can override this to use your mocked server. |
| <a id="company-5"></a> `company?` | [`CompanyContext`](globals.md#companycontext) | Company related context. If you provide `id` Bucket will enrich the evaluation context with company attributes on Bucket servers. |
| <a id="enabletracking-1"></a> `enableTracking?` | `boolean` | - |
| <a id="features-1"></a> `features?` | [`FeaturesOptions`](globals.md#featuresoptions) | Feature flag specific configuration |
| <a id="feedback-5"></a> `feedback?` | [`FeedbackOptions`](globals.md#feedbackoptions) | AutoFeedback specific configuration |
| <a id="host-1"></a> ~~`host?`~~ | `string` | **Deprecated** Use `apiBaseUrl` instead. |
| <a id="logger-1"></a> `logger?` | [`Logger`](globals.md#logger-2) | You can provide a logger to see the logs of the network calls. This is undefined by default. For debugging purposes you can just set the browser console to this property: `options.logger = window.console;` |
| <a id="othercontext-5"></a> `otherContext?` | `Record`\<`string`, `any`\> | Context not related to users or companies |
| <a id="publishablekey-1"></a> `publishableKey` | `string` | Publishable key for authentication |
| <a id="sdkversion-1"></a> `sdkVersion?` | `string` | Version of the SDK |
| <a id="ssebaseurl-1"></a> `sseBaseUrl?` | `string` | Base URL of Bucket servers for SSE connections used by AutoFeedback. |
| <a id="ssehost-1"></a> ~~`sseHost?`~~ | `string` | **Deprecated** Use `sseBaseUrl` instead. |
| <a id="user-5"></a> `user?` | [`UserContext`](globals.md#usercontext) | User related context. If you provide `id` Bucket will enrich the evaluation context with user attributes on Bucket servers. |

***

<a id="logger-2"></a>

### Logger

#### Methods

<a id="debug-2"></a>

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

***

<a id="error-2"></a>

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

***

<a id="info-2"></a>

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

***

<a id="warn-2"></a>

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

<a id="onscoresubmitresult"></a>

### OnScoreSubmitResult

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="feedbackid-5"></a> `feedbackId` | `string` |

***

<a id="openfeedbackformoptions"></a>

### OpenFeedbackFormOptions

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="key-12"></a> `key` | `string` | - |
| <a id="onclose-1"></a> `onClose?` | () => `void` | - |
| <a id="ondismiss-1"></a> `onDismiss?` | () => `void` | - |
| <a id="onscoresubmit-1"></a> `onScoreSubmit?` | (`data`: [`FeedbackScoreSubmission`](globals.md#feedbackscoresubmission)) => `Promise`\<[`OnScoreSubmitResult`](globals.md#onscoresubmitresult)\> | - |
| <a id="onsubmit-1"></a> `onSubmit` | (`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => `void` \| `Promise`\<`void`\> | - |
| <a id="openwithcommentvisible-1"></a> `openWithCommentVisible?` | `boolean` | Open the form with both the score and comment fields visible. Defaults to `false` |
| <a id="position-1"></a> `position?` | [`FeedbackPosition`](globals.md#feedbackposition) | Control the placement and behavior of the feedback form. |
| <a id="title-1"></a> `title?` | `string` | - |
| <a id="translations-1"></a> `translations?` | `Partial`\<[`FeedbackTranslations`](globals.md#feedbacktranslations)\> | Add your own custom translations for the feedback form. Undefined translation keys fall back to english defaults. |

***

<a id="usercontext"></a>

### UserContext

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="email-1"></a> `email?` | `string` | User email |
| <a id="id-3"></a> `id` | `undefined` \| `string` \| `number` | User id |
| <a id="name-3"></a> `name?` | `string` | User name |

## Type Aliases

<a id="featureidentifier"></a>

### FeatureIdentifier

```ts
type FeatureIdentifier = 
  | {
  featureId: string;
 }
  | {
  featureKey: string;
};
```

#### Type declaration

\{
  `featureId`: `string`;
 \}

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

Bucket feature ID.

**Deprecated**

use `feedbackId` instead.

</td>
</tr>
</tbody>
</table>

\{
  `featureKey`: `string`;
 \}

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

`featureKey`

</td>
<td>

`string`

</td>
<td>

Bucket feature key.

</td>
</tr>
</tbody>
</table>

***

<a id="featuresoptions"></a>

### FeaturesOptions

```ts
type FeaturesOptions = {
  expireTimeMs: number;
  fallbackFeatures: string[];
  staleTimeMs: number;
  staleWhileRevalidate: boolean;
  timeoutMs: number;
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

<a id="expiretimems-2"></a> `expireTimeMs`?

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

<a id="fallbackfeatures-2"></a> `fallbackFeatures`?

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

<a id="staletimems-2"></a> `staleTimeMs`?

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

<a id="stalewhilerevalidate-2"></a> `staleWhileRevalidate`?

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

<a id="timeoutms-2"></a> `timeoutMs`?

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

<a id="feedback-6"></a>

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

<a id="feedbackoptions"></a>

### FeedbackOptions

```ts
type FeedbackOptions = {
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

<a id="autofeedbackhandler-2"></a> `autoFeedbackHandler`?

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

<a id="enableautofeedback-2"></a> `enableAutoFeedback`?

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

<a id="enablelivesatisfaction-2"></a> `enableLiveSatisfaction`?

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

<a id="livesatisfactionhandler-2"></a> `liveSatisfactionHandler`?

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

<a id="ui-2"></a> `ui`?

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

<a id="feedbackplacement"></a>

### FeedbackPlacement

```ts
type FeedbackPlacement = "bottom-right" | "bottom-left" | "top-right" | "top-left";
```

***

<a id="feedbackposition"></a>

### FeedbackPosition

```ts
type FeedbackPosition = 
  | {
  type: "MODAL";
 }
  | {
  offset: Offset;
  placement: FeedbackPlacement;
  type: "DIALOG";
 }
  | {
  anchor: HTMLElement | null;
  type: "POPOVER";
};
```

***

<a id="feedbackprompt"></a>

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

<a id="featureid-2"></a> `featureId`

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

<a id="promptid-2"></a> `promptId`

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

<a id="question-6"></a> `question`

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

<a id="showafter-2"></a> `showAfter`

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

<a id="showbefore-2"></a> `showBefore`

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

<a id="feedbackprompthandler"></a>

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

<a id="feedbackprompthandlercallbacks"></a>

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

<a id="openfeedbackform-2"></a> `openFeedbackForm`

</td>
<td>

(`options`: [`FeedbackPromptHandlerOpenFeedbackFormOptions`](globals.md#feedbackprompthandleropenfeedbackformoptions)) => `void`

</td>
</tr>
<tr>
<td>

<a id="reply-2"></a> `reply`

</td>
<td>

[`FeedbackPromptReplyHandler`](globals.md#feedbackpromptreplyhandler)

</td>
</tr>
</tbody>
</table>

***

<a id="feedbackprompthandleropenfeedbackformoptions"></a>

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

<a id="feedbackpromptreply"></a>

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

<a id="comment-4"></a> `comment`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="companyid-2"></a> `companyId`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="question-9"></a> `question`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="score-6"></a> `score`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

<a id="feedbackpromptreplyhandler"></a>

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

`T` *extends* `null` ? `Promise`\<`void`\> : `Promise`\<\{
  `feedbackId`: `string`;
 \}\>

***

<a id="feedbacktranslations"></a>

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

<a id="defaultquestionlabel-2"></a> `DefaultQuestionLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="questionplaceholder-2"></a> `QuestionPlaceholder`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoredissatisfiedlabel-2"></a> `ScoreDissatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoreneutrallabel-2"></a> `ScoreNeutralLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoresatisfiedlabel-2"></a> `ScoreSatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scorestatusdescription-2"></a> `ScoreStatusDescription`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scorestatusloading-2"></a> `ScoreStatusLoading`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scorestatusreceived-2"></a> `ScoreStatusReceived`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoreverydissatisfiedlabel-2"></a> `ScoreVeryDissatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="scoreverysatisfiedlabel-2"></a> `ScoreVerySatisfiedLabel`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="sendbutton-2"></a> `SendButton`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="successmessage-2"></a> `SuccessMessage`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

<a id="offset"></a>

### Offset

```ts
type Offset = {
  x: string | number;
  y: string | number;
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

<a id="x-2"></a> `x`?

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

<a id="y-2"></a> `y`?

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

<a id="rawfeature"></a>

### RawFeature

```ts
type RawFeature = {
  isEnabled: boolean;
  key: string;
  targetingVersion: number;
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

<a id="isenabled-4"></a> `isEnabled`

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

<a id="key-16"></a> `key`

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

<a id="targetingversion-2"></a> `targetingVersion`?

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

<a id="rawfeatures"></a>

### RawFeatures

```ts
type RawFeatures = Record<string, RawFeature | undefined>;
```

***

<a id="requestfeedbackdata"></a>

### RequestFeedbackData

```ts
type RequestFeedbackData = Omit<OpenFeedbackFormOptions, "key" | "onSubmit"> & {
  companyId: string;
  onAfterSubmit: (data: FeedbackSubmission) => void;
 } & FeatureIdentifier;
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

<a id="requestfeedbackoptions"></a>

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

<a id="unassignedfeedback"></a>

### UnassignedFeedback

```ts
type UnassignedFeedback = {
  comment: string;
  feedbackId: string;
  promptedQuestion: string;
  promptId: string;
  question: string;
  score: number;
  source: "prompt" | "sdk" | "widget";
 } & FeatureIdentifier;
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

## Variables

<a id="default_translations"></a>

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

<a id="feedbackcontainerid"></a>

### feedbackContainerId

```ts
const feedbackContainerId: "bucket-feedback-dialog-container" = "bucket-feedback-dialog-container";
```

ID of HTML DIV element which contains the feedback dialog

***

<a id="propagatedevents"></a>

### propagatedEvents

```ts
const propagatedEvents: string[];
```

These events will be propagated to the feedback dialog

see https://developer.mozilla.org/en-US/docs/Web/API/Element#events
