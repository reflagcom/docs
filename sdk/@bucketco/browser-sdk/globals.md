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

| Property | Modifier   | Type                            |
| -------- | ---------- | ------------------------------- |
| `logger` | `readonly` | [`Logger`](globals.md#logger-1) |

#### Methods

**feedback()**

```ts
feedback(payload: Feedback): Promise<
  | undefined
| Response>
```

Submit user feedback to Bucket. Must include either `score` or `comment`, or both.

**Parameters**

| Parameter | Type                                | Description                     |
| --------- | ----------------------------------- | ------------------------------- |
| `payload` | [`Feedback`](globals.md#feedback-1) | The feedback details to submit. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<\
\| `undefined`\
\| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

The server response.

**getConfig()**

```ts
getConfig(): Config
```

Get the current configuration.

**Returns**

[`Config`](globals.md#config)

**getFeature()**

```ts
getFeature(key: string): Feature
```

Return a feature. Accessing `isEnabled` or `config` will automatically send a `check` event.

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |

**Returns**

[`Feature`](globals.md#feature)

A feature.

**getFeatures()**

```ts
getFeatures(): RawFeatures
```

Returns a map of enabled features.\
Accessing a feature will _not_ send a check event\
and `isEnabled` does not take any feature overrides\
into account.

**Returns**

[`RawFeatures`](globals.md#rawfeatures)

Map of features.

**initialize()**

```ts
initialize(): Promise<void>
```

Initialize the Bucket SDK.

Must be called before calling other SDK methods.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**off()**

```ts
off<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): void
```

Remove an event listener

**Type Parameters**

| Type Parameter                                                |
| ------------------------------------------------------------- |
| `THookType` _extends_ keyof [`HookArgs`](globals.md#hookargs) |

**Parameters**

| Parameter | Type                                                                 | Description                                |
| --------- | -------------------------------------------------------------------- | ------------------------------------------ |
| `type`    | `THookType`                                                          | Type of event to remove.                   |
| `handler` | (`args0`: [`HookArgs`](globals.md#hookargs)\[`THookType`]) => `void` | The same function that was passed to `on`. |

**Returns**

`void`

A function to remove the hook.

**on()**

```ts
on<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): () => void
```

Add an event listener

**Type Parameters**

| Type Parameter                                                |
| ------------------------------------------------------------- |
| `THookType` _extends_ keyof [`HookArgs`](globals.md#hookargs) |

**Parameters**

| Parameter | Type                                                                 | Description                                       |
| --------- | -------------------------------------------------------------------- | ------------------------------------------------- |
| `type`    | `THookType`                                                          | Type of events to listen for                      |
| `handler` | (`args0`: [`HookArgs`](globals.md#hookargs)\[`THookType`]) => `void` | The function to call when the event is triggered. |

**Returns**

`Function`

A function to remove the hook.

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

**stop()**

```ts
stop(): Promise<void>
```

Stop the SDK.\
This will stop any automated feedback surveys.

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

| Parameter     | Type                                                                                                                      | Description                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `eventName`   | `string`                                                                                                                  | The name of the event.                          |
| `attributes`? | \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> | Any attributes you want to attach to the event. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<\
\| `undefined`\
\| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

**updateCompany()**

```ts
updateCompany(company: {}): Promise<void>
```

Update the company context.\
Performs a shallow merge with the existing company context.\
Attempting to update the company ID will log a warning and be ignored.

**Parameters**

| Parameter | Type | Description          |
| --------- | ---- | -------------------- |
| `company` | {}   | The company details. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**updateOtherContext()**

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context.\
Performs a shallow merge with the existing company context.\
Updates to the company ID will be ignored.

**Parameters**

| Parameter      | Type | Description         |
| -------------- | ---- | ------------------- |
| `otherContext` | {}   | Additional context. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**updateUser()**

```ts
updateUser(user: {}): Promise<void>
```

Update the user context.\
Performs a shallow merge with the existing user context.\
Attempting to update the user ID will log a warning and be ignored.

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

| Property                 | Type                                                   | Description                                                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                 | `"check-is-enabled"` \| `"check-config"`               | `check-is-enabled` means `isEnabled` was checked, `check-config` means `config` was checked.                                                                                                                                                                                                                              |
| `key`                    | `string`                                               | Feature key.                                                                                                                                                                                                                                                                                                              |
| `missingContextFields?`  | `string`\[]                                            | Missing context fields.                                                                                                                                                                                                                                                                                                   |
| `ruleEvaluationResults?` | `boolean`\[]                                           | Rule evaluation results.                                                                                                                                                                                                                                                                                                  |
| `value?`                 | \| `boolean` \| { `key`: `string`; `payload`: `any`; } | <p>Result of feature flag or configuration evaluation.<br>If <code>action</code> is <code>check-is-enabled</code>, this is the result of the feature flag evaluation and <code>value</code> is a boolean.<br>If <code>action</code> is <code>check-config</code>, this is the result of the configuration evaluation.</p> |
| `version?`               | `number`                                               | Version of targeting rules.                                                                                                                                                                                                                                                                                               |

***

### CompanyContext

Context is a set of key-value pairs.\
Id should always be present so that it can be referenced to an existing company.

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

### Config

BucketClient configuration.

#### Properties

| Property         | Type      | Description                                                          |
| ---------------- | --------- | -------------------------------------------------------------------- |
| `apiBaseUrl`     | `string`  | Base URL of Bucket servers.                                          |
| `appBaseUrl`     | `string`  | Base URL of the Bucket web app.                                      |
| `enableTracking` | `boolean` | Whether to enable tracking.                                          |
| `sseBaseUrl`     | `string`  | Base URL of Bucket servers for SSE connections used by AutoFeedback. |

***

### Feature

Represents a feature.

#### Properties

| Property            | Type                                                                                                                                                                                                     | Description                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `config`            | [`FeatureRemoteConfig`](globals.md#featureremoteconfig)                                                                                                                                                  | ‐                                                                                              |
| `isEnabled`         | `boolean`                                                                                                                                                                                                | <p>Result of feature flag evaluation.<br>Note: Does not take local overrides into account.</p> |
| `isEnabledOverride` | `null` \| `boolean`                                                                                                                                                                                      | The current override status of isEnabled for the feature.                                      |
| `requestFeedback`   | (`options`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`>) => `void` | Function to request feedback for this feature.                                                 |
| `track`             | () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< \| `undefined` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>              | Function to send analytics events for this feature.                                            |

#### Methods

**setIsEnabledOverride()**

```ts
setIsEnabledOverride(isEnabled: null | boolean): void
```

Set the override status for isEnabled for the feature.\
Set to `null` to remove the override.

**Parameters**

| Parameter   | Type                |
| ----------- | ------------------- |
| `isEnabled` | `null` \| `boolean` |

**Returns**

`void`

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

### HookArgs

#### Properties

| Property           | Type                                          | Description                                                                          |
| ------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------ |
| `check`            | [`CheckEvent`](globals.md#checkevent)         | ‐                                                                                    |
| `company`          | [`CompanyContext`](globals.md#companycontext) | ‐                                                                                    |
| ~~`configCheck`~~  | [`CheckEvent`](globals.md#checkevent)         | <p>Deprecated: Use <code>check</code> instead.</p><p><strong>Deprecated</strong></p> |
| ~~`enabledCheck`~~ | [`CheckEvent`](globals.md#checkevent)         | <p>Deprecated: Use <code>check</code> instead.</p><p><strong>Deprecated</strong></p> |
| `featuresUpdated`  | [`RawFeatures`](globals.md#rawfeatures)       | ‐                                                                                    |
| `track`            | [`TrackEvent`](globals.md#trackevent)         | ‐                                                                                    |
| `user`             | [`UserContext`](globals.md#usercontext)       | ‐                                                                                    |

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

| Property                  | Type                                                                                                                                                                                                                                  | Description                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `key`                     | `string`                                                                                                                                                                                                                              | ‐                                                                                                                           |
| `onClose?`                | () => `void`                                                                                                                                                                                                                          | ‐                                                                                                                           |
| `onDismiss?`              | () => `void`                                                                                                                                                                                                                          | ‐                                                                                                                           |
| `onScoreSubmit?`          | (`data`: [`FeedbackScoreSubmission`](globals.md#feedbackscoresubmission)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`OnScoreSubmitResult`](globals.md#onscoresubmitresult)> | ‐                                                                                                                           |
| `onSubmit`                | (`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => \| `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>                                               | ‐                                                                                                                           |
| `openWithCommentVisible?` | `boolean`                                                                                                                                                                                                                             | <p>Open the form with both the score and comment fields visible.<br>Defaults to <code>false</code></p>                      |
| `position?`               | [`Position`](globals.md#position-1)                                                                                                                                                                                                   | Control the placement and behavior of the feedback form.                                                                    |
| `title?`                  | `string`                                                                                                                                                                                                                              | ‐                                                                                                                           |
| `translations?`           | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>                                                                                   | <p>Add your own custom translations for the feedback form.<br>Undefined translation keys fall back to english defaults.</p> |

***

### ToolbarPosition

#### Properties

| Property    | Type                                            |
| ----------- | ----------------------------------------------- |
| `offset?`   | [`Offset`](globals.md#offset-1)                 |
| `placement` | [`DialogPlacement`](globals.md#dialogplacement) |

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

### DialogPlacement

```ts
type DialogPlacement = "bottom-right" | "bottom-left" | "top-right" | "top-left";
```

***

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

### FeatureRemoteConfig

```ts
type FeatureRemoteConfig = 
  | {
  key: string;
  payload: any;
 }
  | {
  key: undefined;
  payload: undefined;
};
```

A remotely managed configuration value for a feature.

#### Type declaration

{`key`: `string`;`payload`: `any`;\
}

| Name      | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `key`     | `string` | The key of the matched configuration value. |
| `payload` | `any`    | The optional user-supplied payload data.    |

{`key`: `undefined`;`payload`: `undefined`;\
}

| Name      | Type        |
| --------- | ----------- |
| `key`     | `undefined` |
| `payload` | `undefined` |

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
  ui: {
     position: Position;
     translations: Partial<FeedbackTranslations>;
    };
};
```

#### Type declaration

| Name                   | Type                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `autoFeedbackHandler`? | [`FeedbackPromptHandler`](globals.md#feedbackprompthandler)                                                                                                                                                                                                                                                                    | ‐                                                                                                                           |
| `enableAutoFeedback`?  | `boolean`                                                                                                                                                                                                                                                                                                                      | Enables automatic feedback prompting if it's set up in Bucket                                                               |
| `ui`?                  | <p>{<code>position</code>: <a href="globals.md#position-1"><code>Position</code></a>;<code>translations</code>: <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype"><code>Partial</code></a>&#x3C;<a href="globals.md#feedbacktranslations"><code>FeedbackTranslations</code></a>>;<br>}</p> | With these options you can override the look of the feedback prompt                                                         |
| `ui.position`?         | [`Position`](globals.md#position-1)                                                                                                                                                                                                                                                                                            | Control the placement and behavior of the feedback form.                                                                    |
| `ui.translations`?     | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>                                                                                                                                                                            | <p>Add your own custom translations for the feedback form.<br>Undefined translation keys fall back to english defaults.</p> |

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

`T` _extends_ `null` ? [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`> : [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<{`feedbackId`: `string`;\
}>

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

You can use this to override text values in the feedback form\
with desired language translation

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

### FetchedFeature

```ts
type FetchedFeature = {
  config: {
     key: string;
     missingContextFields: string[];
     payload: any;
     ruleEvaluationResults: boolean[];
     version: number;
    };
  isEnabled: boolean;
  key: string;
  missingContextFields: string[];
  ruleEvaluationResults: boolean[];
  targetingVersion: number;
};
```

A feature fetched from the server.

#### Type declaration

| Name                            | Type                                                                                                                                                                                                                                                     | Description                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `config`?                       | <p>{<code>key</code>: <code>string</code>;<code>missingContextFields</code>: <code>string</code>[];<code>payload</code>: <code>any</code>;<code>ruleEvaluationResults</code>: <code>boolean</code>[];<code>version</code>: <code>number</code>;<br>}</p> | Optional user-defined dynamic configuration.                                                   |
| `config.key`                    | `string`                                                                                                                                                                                                                                                 | The key of the matched configuration value.                                                    |
| `config.missingContextFields`?  | `string`\[]                                                                                                                                                                                                                                              | The missing context fields.                                                                    |
| `config.payload`?               | `any`                                                                                                                                                                                                                                                    | The optional user-supplied payload data.                                                       |
| `config.ruleEvaluationResults`? | `boolean`\[]                                                                                                                                                                                                                                             | The rule evaluation results.                                                                   |
| `config.version`?               | `number`                                                                                                                                                                                                                                                 | The version of the matched configuration value.                                                |
| `isEnabled`                     | `boolean`                                                                                                                                                                                                                                                | <p>Result of feature flag evaluation.<br>Note: does not take local overrides into account.</p> |
| `key`                           | `string`                                                                                                                                                                                                                                                 | Feature key.                                                                                   |
| `missingContextFields`?         | `string`\[]                                                                                                                                                                                                                                              | Missing context fields.                                                                        |
| `ruleEvaluationResults`?        | `boolean`\[]                                                                                                                                                                                                                                             | Rule evaluation results.                                                                       |
| `targetingVersion`?             | `number`                                                                                                                                                                                                                                                 | Version of targeting rules.                                                                    |

***

### InitOptions

```ts
type InitOptions = {
  apiBaseUrl: string;
  appBaseUrl: string;
  company: CompanyContext;
  credentials: "include" | "same-origin" | "omit";
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

| Name                    | Type                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                                                                           |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiBaseUrl`?           | `string`                                                                                                                                                                                                                                                               | Base URL of Bucket servers. You can override this to use your mocked server.                                                                                                                                                                                                                          |
| `appBaseUrl`?           | `string`                                                                                                                                                                                                                                                               | Base URL of the Bucket web app. Links open ín this app by default.                                                                                                                                                                                                                                    |
| `company`?              | [`CompanyContext`](globals.md#companycontext)                                                                                                                                                                                                                          | <p>Company related context. If you provide <code>id</code> Bucket will enrich the evaluation context with<br>company attributes on Bucket servers.</p>                                                                                                                                                |
| `credentials`?          | `"include"` \| `"same-origin"` \| `"omit"`                                                                                                                                                                                                                             | <p>When proxying requests, you may want to include credentials like cookies<br>so you can authorize the request in the proxy.<br>This option controls the <code>credentials</code> option of the fetch API.</p>                                                                                       |
| `enableTracking`?       | `boolean`                                                                                                                                                                                                                                                              | Whether to enable tracking. Defaults to `true`.                                                                                                                                                                                                                                                       |
| `expireTimeMs`?         | `number`                                                                                                                                                                                                                                                               | If set, features will be cached between page loads for this duration                                                                                                                                                                                                                                  |
| `fallbackFeatures`?     | <p>| <code>string</code>[]<br>| <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type"><code>Record</code></a>&#x3C;<code>string</code>, <a href="globals.md#fallbackfeatureoverride"><code>FallbackFeatureOverride</code></a>></p> | <p>Feature keys for which <code>isEnabled</code> should fallback to true<br>if SDK fails to fetch features from Bucket servers. If a record<br>is supplied instead of array, the values of each key represent the<br>configuration values and <code>isEnabled</code> is assume <code>true</code>.</p> |
| `feedback`?             | [`FeedbackOptions`](globals.md#feedbackoptions)                                                                                                                                                                                                                        | AutoFeedback specific configuration                                                                                                                                                                                                                                                                   |
| `logger`?               | [`Logger`](globals.md#logger-1)                                                                                                                                                                                                                                        | <p>You can provide a logger to see the logs of the network calls.<br>This is undefined by default.<br>For debugging purposes you can just set the browser console to this property:</p><pre class="language-javascript"><code class="lang-javascript">options.logger = window.console;
</code></pre>  |
| `otherContext`?         | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`>                                                                                                                                                           | Context not related to users or companies                                                                                                                                                                                                                                                             |
| `publishableKey`        | `string`                                                                                                                                                                                                                                                               | Publishable key for authentication                                                                                                                                                                                                                                                                    |
| `sdkVersion`?           | `string`                                                                                                                                                                                                                                                               | Version of the SDK                                                                                                                                                                                                                                                                                    |
| `sseBaseUrl`?           | `string`                                                                                                                                                                                                                                                               | Base URL of Bucket servers for SSE connections used by AutoFeedback.                                                                                                                                                                                                                                  |
| `staleTimeMs`?          | `number`                                                                                                                                                                                                                                                               | Stale features will be returned if staleWhileRevalidate is true if no new features can be fetched                                                                                                                                                                                                     |
| `staleWhileRevalidate`? | `boolean`                                                                                                                                                                                                                                                              | If set to true stale features will be returned while refetching features                                                                                                                                                                                                                              |
| `timeoutMs`?            | `number`                                                                                                                                                                                                                                                               | Timeout in milliseconds when fetching features                                                                                                                                                                                                                                                        |
| `toolbar`?              | [`ToolbarOptions`](globals.md#toolbaroptions)                                                                                                                                                                                                                          | Toolbar configuration                                                                                                                                                                                                                                                                                 |
| `user`?                 | [`UserContext`](globals.md#usercontext)                                                                                                                                                                                                                                | <p>User related context. If you provide <code>id</code> Bucket will enrich the evaluation context with<br>user attributes on Bucket servers.</p>                                                                                                                                                      |

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

### PopoverPlacement

```ts
type PopoverPlacement = Placement;
```

***

### Position

```ts
type Position = 
  | {
  type: "MODAL";
 }
  | {
  offset: Offset;
  placement: DialogPlacement;
  type: "DIALOG";
 }
  | {
  anchor:   | HTMLElement
     | null;
  placement: PopoverPlacement;
  type: "POPOVER";
};
```

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
  featureKey: string;
  onAfterSubmit: (data: FeedbackSubmission) => void;
};
```

#### Type declaration

| Name             | Type                                                                      | Description                                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`?     | `string`                                                                  | Company ID from your own application.                                                                                                                                                       |
| `featureKey`     | `string`                                                                  | Bucket feature key.                                                                                                                                                                         |
| `onAfterSubmit`? | (`data`: [`FeedbackSubmission`](globals.md#feedbacksubmission)) => `void` | <p>Allows you to handle a copy of the already submitted<br>feedback.</p><p>This can be used for side effects, such as storing a<br>copy of the feedback in your own application or CRM.</p> |

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

### TrackEvent

```ts
type TrackEvent = {
  attributes:   | Record<string, any>
     | null;
  company: CompanyContext;
  eventName: string;
  user: UserContext;
};
```

#### Type declaration

| Name          | Type                                                                                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attributes`? | <p>| <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type"><code>Record</code></a>&#x3C;<code>string</code>, <code>any</code>><br>| <code>null</code></p> |
| `company`?    | [`CompanyContext`](globals.md#companycontext)                                                                                                                                                 |
| `eventName`   | `string`                                                                                                                                                                                      |
| `user`        | [`UserContext`](globals.md#usercontext)                                                                                                                                                       |

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

| Name                | Type                                | Description                                                                                                                                                                                                                                                                                                                              |
| ------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`?          | `string`                            | User supplied comment about your feature.                                                                                                                                                                                                                                                                                                |
| `featureKey`        | `string`                            | Bucket feature key.                                                                                                                                                                                                                                                                                                                      |
| `feedbackId`?       | `string`                            | Bucket feedback ID                                                                                                                                                                                                                                                                                                                       |
| `promptedQuestion`? | `string`                            | <p>The original question.<br>This only needs to be populated if the feedback was submitted through the automated feedback surveys channel.</p>                                                                                                                                                                                           |
| `promptId`?         | `string`                            | <p>Bucket feedback prompt ID.</p><p>This only exists if the feedback was submitted<br>as part of an automated prompt from Bucket.</p><p>Used for internal state management of automated<br>feedback.</p>                                                                                                                                 |
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
