---
title:
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

### ReflagClient

ReflagClient lets you interact with the Reflag API.

#### Constructors

**new ReflagClient()**

```ts
new ReflagClient(opts: InitOptions): ReflagClient
```

Create a new ReflagClient instance.

**Parameters**

| Parameter | Type                                    |
| --------- | --------------------------------------- |
| `opts`    | [`InitOptions`](globals.md#initoptions) |

**Returns**

[`ReflagClient`](globals.md#reflagclient)

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

Submit user feedback to Reflag. Must include either `score` or `comment`, or both.

**Parameters**

| Parameter | Type                                | Description                     |
| --------- | ----------------------------------- | ------------------------------- |
| `payload` | [`Feedback`](globals.md#feedback-1) | The feedback details to submit. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

The server response.

**getConfig()**

```ts
getConfig(): Config
```

Get the current configuration.

**Returns**

[`Config`](globals.md#config)

**getContext()**

```ts
getContext(): ReflagContext
```

Get the current context.

**Returns**

[`ReflagContext`](globals.md#reflagcontext)

~~**getFeature()**~~

```ts
getFeature(flagKey: string): Flag
```

**Parameters**

| Parameter | Type     |
| --------- | -------- |
| `flagKey` | `string` |

**Returns**

[`Flag`](globals.md#flag)

**Deprecated**

Use `getFlag` instead.

~~**getFeatures()**~~

```ts
getFeatures(): RawFlags
```

**Returns**

[`RawFlags`](globals.md#rawflags)

**Deprecated**

Use `getFlags` instead.

**getFlag()**

```ts
getFlag(flagKey: string): Flag
```

Return a flag. Accessing `isEnabled` or `config` will automatically send a `check` event.

**Parameters**

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `flagKey` | `string` | The key of the flag to get. |

**Returns**

[`Flag`](globals.md#flag)

A flag.

**getFlags()**

```ts
getFlags(): RawFlags
```

Returns a map of enabled flags. Accessing a flag will _not_ send a check event and `isEnabled` does not take any flag overrides into account.

**Returns**

[`RawFlags`](globals.md#rawflags)

Map of flags.

**getState()**

```ts
getState(): State
```

**Returns**

[`State`](globals.md#state)

**initialize()**

```ts
initialize(): Promise<void>
```

Initialize the Reflag SDK.

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

**refresh()**

```ts
refresh(): Promise<undefined | RawFlags>
```

Force refresh flags from the API, bypassing cache.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`undefined` | [`RawFlags`](globals.md#rawflags)>

**requestFeedback()**

```ts
requestFeedback(options: RequestFeedbackData): void
```

Display the Reflag feedback form UI programmatically.

This can be used to collect feedback from users in Reflag in cases where Automated Feedback Surveys isn't appropriate.

**Parameters**

| Parameter | Type                                                    |
| --------- | ------------------------------------------------------- |
| `options` | [`RequestFeedbackData`](globals.md#requestfeedbackdata) |

**Returns**

`void`

**setContext()**

```ts
setContext(context: ReflagDeprecatedContext): Promise<void>
```

Update the context. Replaces the existing context with a new context.

**Parameters**

| Parameter | Type                                                            | Description            |
| --------- | --------------------------------------------------------------- | ---------------------- |
| `context` | [`ReflagDeprecatedContext`](globals.md#reflagdeprecatedcontext) | The context to update. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**showToolbarToggle()**

```ts
showToolbarToggle(position?: ToolbarPosition): void
```

**Parameters**

| Parameter   | Type                                            |
| ----------- | ----------------------------------------------- |
| `position`? | [`ToolbarPosition`](globals.md#toolbarposition) |

**Returns**

`void`

**stop()**

```ts
stop(): Promise<void>
```

Stop the SDK. This will stop any automated feedback surveys.

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

Track an event in Reflag.

**Parameters**

| Parameter     | Type                                                                                                                      | Description                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `eventName`   | `string`                                                                                                                  | The name of the event.                          |
| `attributes`? | \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> | Any attributes you want to attach to the event. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

**updateCompany()**

```ts
updateCompany(company: {}): Promise<void>
```

Update the company context. Performs a shallow merge with the existing company context. It will not update the context if nothing has changed.

**Parameters**

| Parameter | Type | Description          |
| --------- | ---- | -------------------- |
| `company` | {}   | The company details. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**updateFlags()**

```ts
updateFlags(flags: RawFlags, triggerEvent: boolean): void
```

Update the flags.

**Parameters**

| Parameter      | Type                              | Default value | Description                                  |
| -------------- | --------------------------------- | ------------- | -------------------------------------------- |
| `flags`        | [`RawFlags`](globals.md#rawflags) | `undefined`   | The flags to update.                         |
| `triggerEvent` | `boolean`                         | `true`        | Whether to trigger the `flagsUpdated` event. |

**Returns**

`void`

**updateOtherContext()**

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context. Performs a shallow merge with the existing company context. It will not update the context if nothing has changed.

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

Update the user context. Performs a shallow merge with the existing user context. It will not update the context if nothing has changed.

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `user`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

## Interfaces

### CheckEvent

Event representing checking the flag evaluation result

#### Properties

| Property                 | Type                                                   | Description                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                 | `"check-is-enabled"` \| `"check-config"`               | `check-is-enabled` means `isEnabled` was checked, `check-config` means `config` was checked.                                                                                                                                          |
| `key`                    | `string`                                               | Flag key.                                                                                                                                                                                                                             |
| `missingContextFields?`  | `string`\[]                                            | Missing context fields.                                                                                                                                                                                                               |
| `ruleEvaluationResults?` | `boolean`\[]                                           | Rule evaluation results.                                                                                                                                                                                                              |
| `value?`                 | \| `boolean` \| { `key`: `string`; `payload`: `any`; } | Result of flag or configuration evaluation. If `action` is `check-is-enabled`, this is the result of the flag evaluation and `value` is a boolean. If `action` is `check-config`, this is the result of the configuration evaluation. |
| `version?`               | `number`                                               | Version of targeting rules.                                                                                                                                                                                                           |

***

### CompanyContext

Context is a set of key-value pairs. This is used to determine if feature targeting matches and to track events. Id should always be present so that it can be referenced to an existing company.

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

ReflagClient configuration.

#### Properties

| Property         | Type      | Description                                                          |
| ---------------- | --------- | -------------------------------------------------------------------- |
| `apiBaseUrl`     | `string`  | Base URL of Reflag servers.                                          |
| `appBaseUrl`     | `string`  | Base URL of the Reflag web app.                                      |
| `bootstrapped`   | `boolean` | Whether the client is bootstrapped.                                  |
| `enableTracking` | `boolean` | Whether to enable tracking.                                          |
| `offline`        | `boolean` | Whether to enable offline mode.                                      |
| `sseBaseUrl`     | `string`  | Base URL of Reflag servers for SSE connections used by AutoFeedback. |

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

### Flag

Represents a flag.

#### Properties

| Property            | Type                                                                                                                                                                                                  | Description                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `config`            | [`FlagRemoteConfig`](globals.md#flagremoteconfig)                                                                                                                                                     | ‐                                                                                 |
| `isEnabled`         | `boolean`                                                                                                                                                                                             | Result of flag flag evaluation. Note: Does not take local overrides into account. |
| `isEnabledOverride` | `null` \| `boolean`                                                                                                                                                                                   | The current override status of isEnabled for the flag.                            |
| `requestFeedback`   | (`options`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"flagKey"`>) => `void` | Function to request feedback for this flag.                                       |
| `track`             | () => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< \| `undefined` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>           | Function to send analytics events for this flag.                                  |

#### Methods

**setIsEnabledOverride()**

```ts
setIsEnabledOverride(isEnabled: null | boolean): void
```

Set the override status for isEnabled for the flag. Set to `null` to remove the override.

**Parameters**

| Parameter   | Type                |
| ----------- | ------------------- |
| `isEnabled` | `null` \| `boolean` |

**Returns**

`void`

***

### HookArgs

#### Properties

| Property              | Type                                          | Description                                                                     |
| --------------------- | --------------------------------------------- | ------------------------------------------------------------------------------- |
| `check`               | [`CheckEvent`](globals.md#checkevent)         | ‐                                                                               |
| `company`             | [`CompanyContext`](globals.md#companycontext) | ‐                                                                               |
| ~~`featuresUpdated`~~ | [`RawFlags`](globals.md#rawflags)             | <p><strong>Deprecated</strong></p><p>Use <code>flagsUpdated</code> instead.</p> |
| `flagsUpdated`        | [`RawFlags`](globals.md#rawflags)             | ‐                                                                               |
| `stateUpdated`        | [`State`](globals.md#state)                   | ‐                                                                               |
| `track`               | [`TrackEvent`](globals.md#trackevent)         | ‐                                                                               |
| `user`                | [`UserContext`](globals.md#usercontext)       | ‐                                                                               |

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
| `position?`               | [`Position`](globals.md#position-1)                                                                                                                                                                                                   | Control the placement and behavior of the feedback form.                                                          |
| `title?`                  | `string`                                                                                                                                                                                                                              | ‐                                                                                                                 |
| `translations?`           | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>                                                                                   | Add your own custom translations for the feedback form. Undefined translation keys fall back to english defaults. |

***

### ReflagContext

Context is a set of key-value pairs. This is used to determine if feature targeting matches and to track events.

#### Extended by

* [`ReflagDeprecatedContext`](globals.md#reflagdeprecatedcontext)

#### Properties

| Property   | Type                                                                                                                                       | Description                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `company?` | [`CompanyContext`](globals.md#companycontext)                                                                                              | Company related context. If you provide `id` Reflag will enrich the evaluation context with company attributes on Reflag servers. |
| `other?`   | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `undefined` \| `string` \| `number`> | Context which is not related to a user or a company.                                                                              |
| `user?`    | [`UserContext`](globals.md#usercontext)                                                                                                    | User related context. If you provide `id` Reflag will enrich the evaluation context with user attributes on Reflag servers.       |

***

### ~~ReflagDeprecatedContext~~

**`Internal`**

#### Deprecated

Use `ReflagContext` instead, this interface will be removed in the next major version

#### Extends

* [`ReflagContext`](globals.md#reflagcontext)

#### Properties

| Property            | Type                                                                                                                                       | Description                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`company?`~~      | [`CompanyContext`](globals.md#companycontext)                                                                                              | Company related context. If you provide `id` Reflag will enrich the evaluation context with company attributes on Reflag servers.                                                           |
| ~~`other?`~~        | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `undefined` \| `string` \| `number`> | Context which is not related to a user or a company.                                                                                                                                        |
| ~~`otherContext?`~~ | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `undefined` \| `string` \| `number`> | <p>Context which is not related to a user or a company.</p><p><strong>Deprecated</strong></p><p>Use <code>other</code> instead, this property will be removed in the next major version</p> |
| ~~`user?`~~         | [`UserContext`](globals.md#usercontext)                                                                                                    | User related context. If you provide `id` Reflag will enrich the evaluation context with user attributes on Reflag servers.                                                                 |

***

### ToolbarPosition

#### Properties

| Property    | Type                                            |
| ----------- | ----------------------------------------------- |
| `offset?`   | [`Offset`](globals.md#offset-1)                 |
| `placement` | [`DialogPlacement`](globals.md#dialogplacement) |

***

### UserContext

Context is a set of key-value pairs. This is used to determine if feature targeting matches and to track events. Id should always be present so that it can be referenced to an existing user.

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

### FallbackFlagOverride

```ts
type FallbackFlagOverride = 
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

| Name                   | Type                                                                                                                                                                                                                      | Description                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `autoFeedbackHandler`? | [`FeedbackPromptHandler`](globals.md#feedbackprompthandler)                                                                                                                                                               | ‐                                                                                                                 |
| `enableAutoFeedback`?  | `boolean`                                                                                                                                                                                                                 | Enables automatic feedback prompting if it's set up in Reflag                                                     |
| `ui`?                  | { `position`: [`Position`](globals.md#position-1); `translations`: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>; } | With these options you can override the look of the feedback prompt                                               |
| `ui.position`?         | [`Position`](globals.md#position-1)                                                                                                                                                                                       | Control the placement and behavior of the feedback form.                                                          |
| `ui.translations`?     | [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`FeedbackTranslations`](globals.md#feedbacktranslations)>                                                                       | Add your own custom translations for the feedback form. Undefined translation keys fall back to english defaults. |

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
| `featureId`  | `string`                                                                                  | Feature ID from Reflag                             |
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
  | "flagKey"
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

### FlagOverrides

```ts
type FlagOverrides = Record<string, boolean | undefined>;
```

***

### FlagRemoteConfig

```ts
type FlagRemoteConfig = 
  | {
  key: string;
  payload: any;
 }
  | {
  key: undefined;
  payload: undefined;
};
```

A remotely managed configuration value for a flag.

#### Type declaration

{ `key`: `string`; `payload`: `any`; }

| Name      | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `key`     | `string` | The key of the matched configuration value. |
| `payload` | `any`    | The optional user-supplied payload data.    |

{ `key`: `undefined`; `payload`: `undefined`; }

| Name      | Type        |
| --------- | ----------- |
| `key`     | `undefined` |
| `payload` | `undefined` |

***

### InitOptions

```ts
type InitOptions = ReflagDeprecatedContext & {
  apiBaseUrl: string;
  appBaseUrl: string;
  bootstrappedFlags: RawFlags;
  credentials: "include" | "same-origin" | "omit";
  enableTracking: boolean;
  expireTimeMs: number;
  fallbackFlags:   | string[]
     | Record<string, FallbackFlagOverride>;
  feedback: FeedbackOptions;
  logger: Logger;
  offline: boolean;
  publishableKey: string;
  sdkVersion: string;
  sseBaseUrl: string;
  staleTimeMs: number;
  staleWhileRevalidate: boolean;
  storage: StorageAdapter;
  timeoutMs: number;
  toolbar: ToolbarOptions;
};
```

ReflagClient initialization options.

#### Type declaration

<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>apiBaseUrl</code>?</td><td><code>string</code></td><td>Base URL of Reflag servers. You can override this to use your mocked server.</td></tr><tr><td><code>appBaseUrl</code>?</td><td><code>string</code></td><td>Base URL of the Reflag web app. Links open ín this app by default.</td></tr><tr><td><code>bootstrappedFlags</code>?</td><td><a href="globals.md#rawflags"><code>RawFlags</code></a></td><td>Pre-fetched flags to be used instead of fetching them from the server.</td></tr><tr><td><code>credentials</code>?</td><td><code>"include"</code> | <code>"same-origin"</code> | <code>"omit"</code></td><td>When proxying requests, you may want to include credentials like cookies so you can authorize the request in the proxy. This option controls the <code>credentials</code> option of the fetch API.</td></tr><tr><td><code>enableTracking</code>?</td><td><code>boolean</code></td><td>Whether to enable tracking. Defaults to <code>true</code>.</td></tr><tr><td><code>expireTimeMs</code>?</td><td><code>number</code></td><td>If set, flags will be cached between page loads for this duration</td></tr><tr><td><code>fallbackFlags</code>?</td><td>| <code>string</code>[] | <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type"><code>Record</code></a>&#x3C;<code>string</code>, <a href="globals.md#fallbackflagoverride"><code>FallbackFlagOverride</code></a>></td><td>Flag keys for which <code>isEnabled</code> should fallback to true if SDK fails to fetch flags from Reflag servers. If a record is supplied instead of array, the values of each key represent the configuration values and <code>isEnabled</code> is assume <code>true</code>.</td></tr><tr><td><code>feedback</code>?</td><td><a href="globals.md#feedbackoptions"><code>FeedbackOptions</code></a></td><td>AutoFeedback specific configuration</td></tr><tr><td><code>logger</code>?</td><td><a href="globals.md#logger-1"><code>Logger</code></a></td><td><p>You can provide a logger to see the logs of the network calls. This is undefined by default. For debugging purposes you can just set the browser console to this property:</p><pre class="language-javascript"><code class="lang-javascript">options.logger = window.console;
</code></pre></td></tr><tr><td><code>offline</code>?</td><td><code>boolean</code></td><td>Whether to enable offline mode. Defaults to <code>false</code>.</td></tr><tr><td><code>publishableKey</code></td><td><code>string</code></td><td>Publishable key for authentication</td></tr><tr><td><code>sdkVersion</code>?</td><td><code>string</code></td><td>Version of the SDK</td></tr><tr><td><code>sseBaseUrl</code>?</td><td><code>string</code></td><td>Base URL of Reflag servers for SSE connections used by AutoFeedback.</td></tr><tr><td><code>staleTimeMs</code>?</td><td><code>number</code></td><td>Stale flags will be returned if staleWhileRevalidate is true if no new flags can be fetched</td></tr><tr><td><code>staleWhileRevalidate</code>?</td><td><code>boolean</code></td><td>If set to true stale flags will be returned while refetching flags</td></tr><tr><td><code>storage</code>?</td><td><a href="globals.md#storageadapter"><code>StorageAdapter</code></a></td><td>Optional storage adapter used for caching flags and overrides. Useful for React Native (AsyncStorage).</td></tr><tr><td><code>timeoutMs</code>?</td><td><code>number</code></td><td>Timeout in milliseconds when fetching flags</td></tr><tr><td><code>toolbar</code>?</td><td><a href="globals.md#toolbaroptions"><code>ToolbarOptions</code></a></td><td>Toolbar configuration</td></tr></tbody></table>

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
  anchor: any | null;
  placement: PopoverPlacement;
  type: "POPOVER";
};
```

***

### RawFlag

```ts
type RawFlag = {
  config: {
     key: string;
     missingContextFields: string[];
     payload: any;
     ruleEvaluationResults: boolean[];
     version: number;
    };
  isEnabled: boolean;
  isEnabledOverride: boolean | null;
  key: string;
  missingContextFields: string[];
  ruleEvaluationResults: boolean[];
  targetingVersion: number;
};
```

A flag fetched from the server.

#### Type declaration

| Name                            | Type                                                                                                                                    | Description                                                                  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `config`?                       | { `key`: `string`; `missingContextFields`: `string`\[]; `payload`: `any`; `ruleEvaluationResults`: `boolean`\[]; `version`: `number`; } | Optional user-defined dynamic configuration.                                 |
| `config.key`                    | `string`                                                                                                                                | The key of the matched configuration value.                                  |
| `config.missingContextFields`?  | `string`\[]                                                                                                                             | The missing context fields.                                                  |
| `config.payload`?               | `any`                                                                                                                                   | The optional user-supplied payload data.                                     |
| `config.ruleEvaluationResults`? | `boolean`\[]                                                                                                                            | The rule evaluation results.                                                 |
| `config.version`?               | `number`                                                                                                                                | The version of the matched configuration value.                              |
| `isEnabled`                     | `boolean`                                                                                                                               | Result of flag evaluation. Note: does not take local overrides into account. |
| `isEnabledOverride`?            | `boolean` \| `null`                                                                                                                     | If not null or undefined, the result is being overridden locally             |
| `key`                           | `string`                                                                                                                                | Flag key.                                                                    |
| `missingContextFields`?         | `string`\[]                                                                                                                             | Missing context fields.                                                      |
| `ruleEvaluationResults`?        | `boolean`\[]                                                                                                                            | Rule evaluation results.                                                     |
| `targetingVersion`?             | `number`                                                                                                                                | Version of targeting rules.                                                  |

***

### RawFlags

```ts
type RawFlags = Record<string, RawFlag>;
```

***

### RequestFeedbackData

```ts
type RequestFeedbackData = Omit<OpenFeedbackFormOptions, "key" | "onSubmit"> & {
  companyId: string;
  flagKey: string;
  onAfterSubmit: (data: FeedbackSubmission) => void;
};
```

#### Type declaration

| Name             | Type                                                                      | Description                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `companyId`?     | `string`                                                                  | Company ID from your own application.                                                                                                                                                 |
| `flagKey`        | `string`                                                                  | Flag key.                                                                                                                                                                             |
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

### State

```ts
type State = "idle" | "initializing" | "initialized" | "stopped";
```

State of the client.

***

### StorageAdapter

```ts
type StorageAdapter = {
  getItem: Promise<null | string>;
  removeItem: Promise<void>;
  setItem: Promise<void>;
};
```

#### Type declaration

| Name            | Type                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `getItem()`     | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` \| `string`> |
| `removeItem()`? | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>             |
| `setItem()`     | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>             |

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

| Name          | Type                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `attributes`? | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> \| `null` |
| `company`?    | [`CompanyContext`](globals.md#companycontext)                                                                             |
| `eventName`   | `string`                                                                                                                  |
| `user`        | [`UserContext`](globals.md#usercontext)                                                                                   |

***

### UnassignedFeedback

```ts
type UnassignedFeedback = {
  comment: string;
  feedbackId: string;
  flagKey: string;
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
| `comment`?          | `string`                            | User supplied comment about your flag.                                                                                                                                                                                                                                                                                                   |
| `feedbackId`?       | `string`                            | Reflag feedback ID                                                                                                                                                                                                                                                                                                                       |
| `flagKey`           | `string`                            | Flag key.                                                                                                                                                                                                                                                                                                                                |
| `promptedQuestion`? | `string`                            | The original question. This only needs to be populated if the feedback was submitted through the automated feedback surveys channel.                                                                                                                                                                                                     |
| `promptId`?         | `string`                            | <p>Reflag feedback prompt ID.</p><p>This only exists if the feedback was submitted as part of an automated prompt from Reflag.</p><p>Used for internal state management of automated feedback.</p>                                                                                                                                       |
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
const feedbackContainerId: "reflag-feedback-dialog-container" = "reflag-feedback-dialog-container";
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
