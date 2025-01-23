---
title:
  visible: true
tableOfContents:
  visible: true
outline:
  visible: true
pagination:
  visible: true
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Reference

## Classes

### BucketClient

BucketClient lets you interact with the Bucket API.

#### Constructors

**new BucketClient()**

```ts
new BucketClient(opts: InitOptions): BucketClient
```

Create a new BucketClient instance.

**Parameters**

| Parameter | Type                                    |
| --------- | --------------------------------------- |
| `opts`    | [`InitOptions`](globals.md#initoptions) |

**Returns**

[`BucketClient`](globals.md#bucketclient)

#### Properties

| Property | Modifier   | Type                          |
| -------- | ---------- | ----------------------------- |
| `logger` | `readonly` | [`Logger`](globals.md#logger) |

#### Methods

**feedback()**

```ts
feedback(payload: Feedback): Promise<
  | undefined
| Response>
```

Submit user feedback to Bucket. Must include either `score` or `comment`, or both.

**Parameters**

| Parameter | Type                              |
| --------- | --------------------------------- |
| `payload` | [`Feedback`](globals.md#feedback) |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

**getFeature()**

```ts
getFeature(key: string): Feature
```

Return a feature. Accessing `isEnabled` will automatically send a `check` event.

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |

**Returns**

[`Feature`](globals.md#feature)

A feature

**getFeatureOverride()**

```ts
getFeatureOverride(key: string): null | boolean
```

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |

**Returns**

`null` | `boolean`

**getFeatures()**

```ts
getFeatures(): RawFeatures
```

Returns a map of enabled features. Accessing a feature will _not_ send a check event and `isEnabled` does not take any feature overrides into account.

**Returns**

[`RawFeatures`](globals.md#rawfeatures)

Map of features

**initialize()**

```ts
initialize(): Promise<void>
```

Initialize the Bucket SDK.

Must be called before calling other SDK methods.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**onFeaturesUpdated()**

```ts
onFeaturesUpdated(cb: () => void): () => void
```

Register a callback to be called when the features are updated. Features are not guaranteed to have actually changed when the callback is called.

Calling `client.stop()` will remove all listeners added here.

**Parameters**

| Parameter | Type         | Description                                        |
| --------- | ------------ | -------------------------------------------------- |
| `cb`      | () => `void` | this will be called when the features are updated. |

**Returns**

`Function`

**Returns**

`void`

**requestFeedback()**

```ts
requestFeedback(options: RequestFeedbackData): void
```

Display the Bucket feedback form UI programmatically.

This can be used to collect feedback from users in Bucket in cases where Automated Feedback Surveys isn't appropriate.

**Parameters**

| Parameter | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [`RequestFeedbackData`](globals.md#requestfeedbackdata) |

**Returns**

`void`

**sendCheckEvent()**

```ts
sendCheckEvent(checkEvent: CheckEvent): Promise<boolean>
```

**Parameters**

| Parameter    | Type                                  |
| ------------ | ------------------------------------- |
| `checkEvent` | [`CheckEvent`](globals.md#checkevent) |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`boolean`>

**setFeatureOverride()**

```ts
setFeatureOverride(key: string, isEnabled: null | boolean): void
```

**Parameters**

| Parameter   | Type                |
| ----------- | ------------------- |
| `key`       | `string`            |
| `isEnabled` | `null` \| `boolean` |

**Returns**

`void`

**stop()**

```ts
stop(): Promise<void>
```

Stop the SDK. This will stop any automated feedback surveys. It will also stop the features client, including removing any onFeaturesUpdated listeners.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**track()**

```ts
track(eventName: string, attributes?: 
  | null
  | Record<string, any>): Promise<
  | undefined
| Response>
```

Track an event in Bucket.

**Parameters**

| Parameter     | Type                                                                                                                      | Description                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `eventName`   | `string`                                                                                                                  | The name of the event                          |
| `attributes`? | \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> | Any attributes you want to attach to the event |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

**updateCompany()**

```ts
updateCompany(company: {}): Promise<void>
```

Update the company context. Performs a shallow merge with the existing company context. Attempting to update the company ID will log a warning and be ignored.

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `company` | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**updateOtherContext()**

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context. Performs a shallow merge with the existing company context. Updates to the company ID will be ignored.

**Parameters**

| Parameter      | Type |
| -------------- | ---- |
| `otherContext` | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**updateUser()**

```ts
updateUser(user: {}): Promise<void>
```

Update the user context. Performs a shallow merge with the existing user context. Attempting to update the user ID will log a warning and be ignored.

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `user`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

## Interfaces

### BucketContext

#### Properties

| Property        | Type                                                                                                                                       | Description                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| `company?`      | [`CompanyContext`](globals.md#companycontext)                                                                                              | Company related context                             |
| `otherContext?` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `undefined` \| `string` \| `number`> | Context which is not related to a user or a company |
| `user?`         | [`UserContext`](globals.md#usercontext)                                                                                                    | User related context                                |

***

### CheckEvent

Event representing checking the feature flag evaluation result

#### Properties

| Property   | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `key`      | `string`  | Feature key                       |
| `value`    | `boolean` | Result of feature flag evaluation |
| `version?` | `number`  | Version of targeting rules        |

***

### CompanyContext

Context is a set of key-value pairs. Id should always be present so that it can be referenced to an existing company.

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

| Property | Type                                | Description  |
| -------- | ----------------------------------- | ------------ |
| `id`     | `undefined` \| `string` \| `number` | Company id   |
| `name?`  | `string`                            | Company name |

***

### Feature

#### Properties

| Property          | Type                                                                                                                                                                                                     | Description                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `isEnabled`       | `boolean`                                                                                                                                                                                                | Result of feature flag evaluation                  |
| `requestFeedback` | (`options`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`>) => `void` | ‐                                                  |
| `track`           | () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< \| `undefined` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>              | Function to send analytics events for this feature |

***

### FeedbackScoreSubmission

#### Properties

| Property      | Type     |
| ------------- | -------- |
| `feedbackId?` | `string` |
| `question`    | `string` |
| `score`       | `number` |

***

### FeedbackSubmission

#### Properties

| Property      | Type     |
| ------------- | -------- |
| `comment`     | `string` |
| `feedbackId?` | `string` |
| `question`    | `string` |
| `score`       | `number` |

***

### InitOptions

BucketClient initialization options.

#### Properties

| Property          | Type                                                                                                         | Description                                                                                                                                                                                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiBaseUrl?`     | `string`                                                                                                     | Base URL of Bucket servers. You can override this to use your mocked server.                                                                                                                                                                                                                   |
| `company?`        | [`CompanyContext`](globals.md#companycontext)                                                                | Company related context. If you provide `id` Bucket will enrich the evaluation context with company attributes on Bucket servers.                                                                                                                                                              |
| `enableTracking?` | `boolean`                                                                                                    | ‐                                                                                                                                                                                                                                                                                              |
| `features?`       | [`FeaturesOptions`](globals.md#featuresoptions)                                                              | Feature flag specific configuration                                                                                                                                                                                                                                                            |
| `feedback?`       | [`FeedbackOptions`](globals.md#feedbackoptions)                                                              | AutoFeedback specific configuration                                                                                                                                                                                                                                                            |
| ~~`host?`~~       | `string`                                                                                                     | <p><strong>Deprecated</strong></p><p>Use <code>apiBaseUrl</code> instead.</p>                                                                                                                                                                                                                  |
| `logger?`         | [`Logger`](globals.md#logger)                                                                                | <p>You can provide a logger to see the logs of the network calls. This is undefined by default. For debugging purposes you can just set the browser console to this property:</p><pre class="language-javascript"><code class="lang-javascript">options.logger = window.console;
</code></pre> |
| `otherContext?`   | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> | Context not related to users or companies                                                                                                                                                                                                                                                      |
| `publishableKey`  | `string`                                                                                                     | Publishable key for authentication                                                                                                                                                                                                                                                             |
| `sdkVersion?`     | `string`                                                                                                     | Version of the SDK                                                                                                                                                                                                                                                                             |
| `sseBaseUrl?`     | `string`                                                                                                     | Base URL of Bucket servers for SSE connections used by AutoFeedback.                                                                                                                                                                                                                           |
| ~~`sseHost?`~~    | `string`                                                                                                     | <p><strong>Deprecated</strong></p><p>Use <code>sseBaseUrl</code> instead.</p>                                                                                                                                                                                                                  |
| `user?`           | [`UserContext`](globals.md#usercontext)                                                                      | User related context. If you provide `id` Bucket will enrich the evaluation context with user attributes on Bucket servers.                                                                                                                                                                    |

***

### Logger

#### Methods

**debug()**

```ts
debug(message: string, ...args: any[]): void
```

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `message` | `string` |
| ...`args` | `any`\[] |

**Returns**

`void`

**error()**

```ts
error(message: string, ...args: any[]): void
```

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `message` | `string` |
| ...`args` | `any`\[] |

**Returns**

`void`

**info()**

```ts
info(message: string, ...args: any[]): void
```

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `message` | `string` |
| ...`args` | `any`\[] |

**Returns**

`void`

**warn()**

```ts
warn(message: string, ...args: any[]): void
```

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `message` | `string` |
| ...`args` | `any`\[] |

**Returns**

`void`

***

### OnScoreSubmitResult

#### Properties

| Property     | Type     |
| ------------ | -------- |
| `feedbackId` | `string` |

***

### OpenFeedbackFormOptions

#### Properties

| Property                  | Type                                                                                                                                                                                                                                  | Description                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `key`                     | `string`                                                                                                                                                                                                                              | ‐                                                                                                                 |
| `onClose?`                | () => `void`                                                                                                                                                                                                                          | ‐                                                                                                                 |
| `onDismiss?`              | () => `void`                                                                                                                                                                                                                          | ‐                                                                                                                 |
| `onScoreSubmit?`          | (`data`: [`FeedbackScoreSubmission`](globals.md#feedbackscoresubmission)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`OnScoreSubmitResult`](globals.md#onscoresubmitresult)> | ‐                                                                                                                 |
| `onSubmit`                | (`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => \| `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>                                               | ‐                                                                                                                 |
| `openWithCommentVisible?` | `boolean`                                                                                                                                                                                                                             | Open the form with both the score and comment fields visible. Defaults to `false`                                 |
| `position?`               | [`FeedbackPosition`](globals.md#feedbackposition)                                                                                                                                                                                     | Control the placement and behavior of the feedback form.                                                          |
| `title?`                  | `string`                                                                                                                                                                                                                              | ‐                                                                                                                 |
| `translations?`           | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>                                                                                   | Add your own custom translations for the feedback form. Undefined translation keys fall back to english defaults. |

***

### UserContext

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

| Property | Type                                | Description |
| -------- | ----------------------------------- | ----------- |
| `email?` | `string`                            | User email  |
| `id`     | `undefined` \| `string` \| `number` | User id     |
| `name?`  | `string`                            | User name   |

## Type Aliases

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

{ `featureId`: `string`; }

| Name        | Type     | Description                                                                                            |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `featureId` | `string` | <p>Bucket feature ID.</p><p><strong>Deprecated</strong></p><p>use <code>feedbackId</code> instead.</p> |

{ `featureKey`: `string`; }

| Name         | Type     | Description         |
| ------------ | -------- | ------------------- |
| `featureKey` | `string` | Bucket feature key. |

***

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

| Name                    | Type        | Description                                                                                                    |
| ----------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `expireTimeMs`?         | `number`    | ‐                                                                                                              |
| `fallbackFeatures`?     | `string`\[] | Feature keys for which `isEnabled` should fallback to true if SDK fails to fetch features from Bucket servers. |
| `staleTimeMs`?          | `number`    | ‐                                                                                                              |
| `staleWhileRevalidate`? | `boolean`   | If set to true client will return cached value when its stale but refetching                                   |
| `timeoutMs`?            | `number`    | Timeout in milliseconds                                                                                        |

***

### Feedback

```ts
type Feedback = UnassignedFeedback & {
  companyId: string;
  userId: string;
};
```

#### Type declaration

| Name         | Type     | Description                           |
| ------------ | -------- | ------------------------------------- |
| `companyId`? | `string` | Company ID from your own application. |
| `userId`?    | `string` | User ID from your own application.    |

***

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

| Name                       | Type                                                                                                                                                                                                                                    | Description                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `autoFeedbackHandler`?     | [`FeedbackPromptHandler`](globals.md#feedbackprompthandler)                                                                                                                                                                             | ‐                                                                                                                 |
| `enableAutoFeedback`?      | `boolean`                                                                                                                                                                                                                               | Enables automatic feedback prompting if it's set up in Bucket                                                     |
| `enableLiveSatisfaction`?  | `boolean`                                                                                                                                                                                                                               | <p><strong>Deprecated</strong></p><p>Use <code>enableAutoFeedback</code> instead</p>                              |
| `liveSatisfactionHandler`? | [`FeedbackPromptHandler`](globals.md#feedbackprompthandler)                                                                                                                                                                             | <p><strong>Deprecated</strong></p><p>Use <code>autoFeedbackHandler</code> instead</p>                             |
| `ui`?                      | { `position`: [`FeedbackPosition`](globals.md#feedbackposition); `translations`: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>; } | With these options you can override the look of the feedback prompt                                               |
| `ui.position`?             | [`FeedbackPosition`](globals.md#feedbackposition)                                                                                                                                                                                       | Control the placement and behavior of the feedback form.                                                          |
| `ui.translations`?         | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>                                                                                     | Add your own custom translations for the feedback form. Undefined translation keys fall back to english defaults. |

***

### FeedbackPlacement

```ts
type FeedbackPlacement = "bottom-right" | "bottom-left" | "top-right" | "top-left";
```

***

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
  anchor:   | HTMLElement
     | null;
  type: "POPOVER";
};
```

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

| Name         | Type                                                                                      | Description                                        |
| ------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `featureId`  | `string`                                                                                  | Feature ID from Bucket                             |
| `promptId`   | `string`                                                                                  | Id of the prompt                                   |
| `question`   | `string`                                                                                  | Specific question user was asked                   |
| `showAfter`  | [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | Feedback prompt should appear only after this time |
| `showBefore` | [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | Feedback prompt will not be shown after this time  |

***

### FeedbackPromptHandler()

```ts
type FeedbackPromptHandler = (prompt: FeedbackPrompt, handlers: FeedbackPromptHandlerCallbacks) => void;
```

#### Parameters

| Parameter  | Type                                                                          |
| ---------- | ----------------------------------------------------------------------------- |
| `prompt`   | [`FeedbackPrompt`](globals.md#feedbackprompt)                                 |
| `handlers` | [`FeedbackPromptHandlerCallbacks`](globals.md#feedbackprompthandlercallbacks) |

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

| Name               | Type                                                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `openFeedbackForm` | (`options`: [`FeedbackPromptHandlerOpenFeedbackFormOptions`](globals.md#feedbackprompthandleropenfeedbackformoptions)) => `void` |
| `reply`            | [`FeedbackPromptReplyHandler`](globals.md#feedbackpromptreplyhandler)                                                            |

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

| Name         | Type     |
| ------------ | -------- |
| `comment`?   | `string` |
| `companyId`? | `string` |
| `question`   | `string` |
| `score`?     | `number` |

***

### FeedbackPromptReplyHandler()

```ts
type FeedbackPromptReplyHandler = <T>(reply: T) => T extends null ? Promise<void> : Promise<{
  feedbackId: string;
}>;
```

#### Type Parameters

| Type Parameter                                                                  |
| ------------------------------------------------------------------------------- |
| `T` _extends_ [`FeedbackPromptReply`](globals.md#feedbackpromptreply) \| `null` |

#### Parameters

| Parameter | Type |
| --------- | ---- |
| `reply`   | `T`  |

#### Returns

`T` _extends_ `null` ? [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`> : [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<{ `feedbackId`: `string`; }>

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

You can use this to override text values in the feedback form with desired language translation

#### Type declaration

| Name                         | Type     |
| ---------------------------- | -------- |
| `DefaultQuestionLabel`       | `string` |
| `QuestionPlaceholder`        | `string` |
| `ScoreDissatisfiedLabel`     | `string` |
| `ScoreNeutralLabel`          | `string` |
| `ScoreSatisfiedLabel`        | `string` |
| `ScoreStatusDescription`     | `string` |
| `ScoreStatusLoading`         | `string` |
| `ScoreStatusReceived`        | `string` |
| `ScoreVeryDissatisfiedLabel` | `string` |
| `ScoreVerySatisfiedLabel`    | `string` |
| `SendButton`                 | `string` |
| `SuccessMessage`             | `string` |

***

### Offset

```ts
type Offset = {
  x: string | number;
  y: string | number;
};
```

#### Type declaration

| Name | Type                 | Description                                                                |
| ---- | -------------------- | -------------------------------------------------------------------------- |
| `x`? | `string` \| `number` | Offset from the nearest horizontal screen edge after placement is resolved |
| `y`? | `string` \| `number` | Offset from the nearest vertical screen edge after placement is resolved   |

***

### RawFeature

```ts
type RawFeature = FetchedFeature & {
  isEnabledOverride: boolean | null;
};
```

#### Type declaration

| Name                | Type                | Description                                         |
| ------------------- | ------------------- | --------------------------------------------------- |
| `isEnabledOverride` | `boolean` \| `null` | If not null, the result is being overridden locally |

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
  onAfterSubmit: (data: FeedbackSubmission) => void;
 } & FeatureIdentifier;
```

#### Type declaration

| Name             | Type                                                                      | Description                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`?     | `string`                                                                  | Company ID from your own application.                                                                                                                                                 |
| `onAfterSubmit`? | (`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => `void` | <p>Allows you to handle a copy of the already submitted feedback.</p><p>This can be used for side effects, such as storing a copy of the feedback in your own application or CRM.</p> |

***

### RequestFeedbackOptions

```ts
type RequestFeedbackOptions = RequestFeedbackData & {
  userId: string;
};
```

#### Type declaration

| Name     | Type     | Description                        |
| -------- | -------- | ---------------------------------- |
| `userId` | `string` | User ID from your own application. |

***

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

| Name                | Type                                | Description                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`?          | `string`                            | User supplied comment about your feature.                                                                                                                                                                                                                                                                                                |
| `feedbackId`?       | `string`                            | Bucket feedback ID                                                                                                                                                                                                                                                                                                                       |
| `promptedQuestion`? | `string`                            | The original question. This only needs to be populated if the feedback was submitted through the automated feedback surveys channel.                                                                                                                                                                                                     |
| `promptId`?         | `string`                            | <p>Bucket feedback prompt ID.</p><p>This only exists if the feedback was submitted as part of an automated prompt from Bucket.</p><p>Used for internal state management of automated feedback.</p>                                                                                                                                       |
| `question`?         | `string`                            | The question that was presented to the user.                                                                                                                                                                                                                                                                                             |
| `score`?            | `number`                            | Customer satisfaction score.                                                                                                                                                                                                                                                                                                             |
| `source`?           | `"prompt"` \| `"sdk"` \| `"widget"` | <p>Source of the feedback, depending on how the user was asked</p><ul><li><code>prompt</code> - Feedback submitted by way of an automated feedback survey (prompted)</li><li><code>widget</code> - Feedback submitted via <code>requestFeedback</code></li><li><code>sdk</code> - Feedback submitted via <code>feedback</code></li></ul> |

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
