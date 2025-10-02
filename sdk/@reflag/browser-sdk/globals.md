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

# @reflag/browser-sdk

## Classes

### ReflagClient

ReflagClient lets you interact with the Reflag API.

#### Constructors

##### new ReflagClient()

```ts
new ReflagClient(opts: InitOptions): ReflagClient
```

Create a new ReflagClient instance.

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

[`ReflagClient`](globals.md#reflagclient)

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

Submit user feedback to Reflag. Must include either `score` or `comment`, or both.

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

[`Config`](globals.md#config)

##### getContext()

```ts
getContext(): ReflagContext
```

Get the current context.

###### Returns

[`ReflagContext`](globals.md#reflagcontext)

##### ~~getFeature()~~

```ts
getFeature(flagKey: string): Flag
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

`flagKey`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

[`Flag`](globals.md#flag)

###### Deprecated

Use `getFlag` instead.

##### ~~getFeatures()~~

```ts
getFeatures(): RawFlags
```

###### Returns

[`RawFlags`](globals.md#rawflags)

###### Deprecated

Use `getFlags` instead.

##### getFlag()

```ts
getFlag(flagKey: string): Flag
```

Return a flag. Accessing `isEnabled` or `config` will automatically send a `check` event.

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

`flagKey`

</td>
<td>

`string`

</td>
<td>

The key of the flag to get.

</td>
</tr>
</tbody>
</table>

###### Returns

[`Flag`](globals.md#flag)

A flag.

##### getFlags()

```ts
getFlags(): RawFlags
```

Returns a map of enabled flags.
Accessing a flag will *not* send a check event
and `isEnabled` does not take any flag overrides
into account.

###### Returns

[`RawFlags`](globals.md#rawflags)

Map of flags.

##### getState()

```ts
getState(): State
```

###### Returns

[`State`](globals.md#state)

##### initialize()

```ts
initialize(): Promise<void>
```

Initialize the Reflag SDK.

Must be called before calling other SDK methods.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### off()

```ts
off<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): void
```

Remove an event listener

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

`THookType` *extends* keyof [`HookArgs`](globals.md#hookargs)

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
<th>Description</th>
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
<td>

Type of event to remove.

</td>
</tr>
<tr>
<td>

`handler`

</td>
<td>

(`args0`: [`HookArgs`](globals.md#hookargs)\[`THookType`\]) => `void`

</td>
<td>

The same function that was passed to `on`.

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

A function to remove the hook.

##### on()

```ts
on<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): () => void
```

Add an event listener

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

`THookType` *extends* keyof [`HookArgs`](globals.md#hookargs)

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
<th>Description</th>
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
<td>

Type of events to listen for

</td>
</tr>
<tr>
<td>

`handler`

</td>
<td>

(`args0`: [`HookArgs`](globals.md#hookargs)\[`THookType`\]) => `void`

</td>
<td>

The function to call when the event is triggered.

</td>
</tr>
</tbody>
</table>

###### Returns

`Function`

A function to remove the hook.

###### Returns

`void`

##### requestFeedback()

```ts
requestFeedback(options: RequestFeedbackData): void
```

Display the Reflag feedback form UI programmatically.

This can be used to collect feedback from users in Reflag in cases where Automated Feedback Surveys isn't appropriate.

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

##### setContext()

```ts
setContext(context: ReflagDeprecatedContext): Promise<void>
```

Update the context.
Replaces the existing context with a new context.

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

`context`

</td>
<td>

[`ReflagDeprecatedContext`](globals.md#reflagdeprecatedcontext)

</td>
<td>

The context to update.

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### stop()

```ts
stop(): Promise<void>
```

Stop the SDK.
This will stop any automated feedback surveys.

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

Track an event in Reflag.

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
It will not update the context if nothing has changed.

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

##### updateFlags()

```ts
updateFlags(flags: RawFlags, triggerEvent: boolean): void
```

Update the flags.

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`flags`

</td>
<td>

[`RawFlags`](globals.md#rawflags)

</td>
<td>

`undefined`

</td>
<td>

The flags to update.

</td>
</tr>
<tr>
<td>

`triggerEvent`

</td>
<td>

`boolean`

</td>
<td>

`true`

</td>
<td>

Whether to trigger the `flagsUpdated` event.

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### updateOtherContext()

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
It will not update the context if nothing has changed.

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
It will not update the context if nothing has changed.

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

### CheckEvent

Event representing checking the flag evaluation result

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

`check-is-enabled` means `isEnabled` was checked, `check-config` means `config` was checked.

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

Flag key.

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

<a id="value"></a> `value?`

</td>
<td>

 \| `boolean` \| \{ `key`: `string`; `payload`: `any`; \}

</td>
<td>

Result of flag or configuration evaluation.
If `action` is `check-is-enabled`, this is the result of the flag evaluation and `value` is a boolean.
If `action` is `check-config`, this is the result of the configuration evaluation.

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
This is used to determine if feature targeting matches and to track events.
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

### Config

ReflagClient configuration.

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

<a id="apibaseurl"></a> `apiBaseUrl`

</td>
<td>

`string`

</td>
<td>

Base URL of Reflag servers.

</td>
</tr>
<tr>
<td>

<a id="appbaseurl"></a> `appBaseUrl`

</td>
<td>

`string`

</td>
<td>

Base URL of the Reflag web app.

</td>
</tr>
<tr>
<td>

<a id="bootstrapped"></a> `bootstrapped`

</td>
<td>

`boolean`

</td>
<td>

Whether the client is bootstrapped.

</td>
</tr>
<tr>
<td>

<a id="enabletracking"></a> `enableTracking`

</td>
<td>

`boolean`

</td>
<td>

Whether to enable tracking.

</td>
</tr>
<tr>
<td>

<a id="offline"></a> `offline`

</td>
<td>

`boolean`

</td>
<td>

Whether to enable offline mode.

</td>
</tr>
<tr>
<td>

<a id="ssebaseurl"></a> `sseBaseUrl`

</td>
<td>

`string`

</td>
<td>

Base URL of Reflag servers for SSE connections used by AutoFeedback.

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

### Flag

Represents a flag.

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

<a id="config-1"></a> `config`

</td>
<td>

[`FlagRemoteConfig`](globals.md#flagremoteconfig)

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

Result of flag flag evaluation.
Note: Does not take local overrides into account.

</td>
</tr>
<tr>
<td>

<a id="isenabledoverride"></a> `isEnabledOverride`

</td>
<td>

`null` \| `boolean`

</td>
<td>

The current override status of isEnabled for the flag.

</td>
</tr>
<tr>
<td>

<a id="requestfeedback-1"></a> `requestFeedback`

</td>
<td>

(`options`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`RequestFeedbackData`](globals.md#requestfeedbackdata), `"featureId"` \| `"flagKey"`\>) => `void`

</td>
<td>

Function to request feedback for this flag.

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

Function to send analytics events for this flag.

</td>
</tr>
</tbody>
</table>

#### Methods

##### setIsEnabledOverride()

```ts
setIsEnabledOverride(isEnabled: null | boolean): void
```

Set the override status for isEnabled for the flag.
Set to `null` to remove the override.

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

***

### HookArgs

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

<a id="check"></a> `check`

</td>
<td>

[`CheckEvent`](globals.md#checkevent)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="company"></a> `company`

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="featuresupdated"></a> ~~`featuresUpdated`~~

</td>
<td>

[`RawFlags`](globals.md#rawflags)

</td>
<td>

**Deprecated**

Use `flagsUpdated` instead.

</td>
</tr>
<tr>
<td>

<a id="flagsupdated"></a> `flagsUpdated`

</td>
<td>

[`RawFlags`](globals.md#rawflags)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stateupdated"></a> `stateUpdated`

</td>
<td>

[`State`](globals.md#state)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="track-2"></a> `track`

</td>
<td>

[`TrackEvent`](globals.md#trackevent)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="user"></a> `user`

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
<td>

&hyphen;

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

[`Position`](globals.md#position-1)

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

### ReflagContext

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.

#### Extended by

- [`ReflagDeprecatedContext`](globals.md#reflagdeprecatedcontext)

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

<a id="company-1"></a> `company?`

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
<td>

Company related context. If you provide `id` Reflag will enrich the evaluation context with
company attributes on Reflag servers.

</td>
</tr>
<tr>
<td>

<a id="other"></a> `other?`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| `string` \| `number`\>

</td>
<td>

Context which is not related to a user or a company.

</td>
</tr>
<tr>
<td>

<a id="user-1"></a> `user?`

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
<td>

User related context. If you provide `id` Reflag will enrich the evaluation context with
user attributes on Reflag servers.

</td>
</tr>
</tbody>
</table>

***

### ~~ReflagDeprecatedContext~~

**`Internal`**

#### Deprecated

Use `ReflagContext` instead, this interface will be removed in the next major version

#### Extends

- [`ReflagContext`](globals.md#reflagcontext)

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

<a id="company-2"></a> ~~`company?`~~

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
<td>

Company related context. If you provide `id` Reflag will enrich the evaluation context with
company attributes on Reflag servers.

</td>
</tr>
<tr>
<td>

<a id="other-1"></a> ~~`other?`~~

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| `string` \| `number`\>

</td>
<td>

Context which is not related to a user or a company.

</td>
</tr>
<tr>
<td>

<a id="othercontext"></a> ~~`otherContext?`~~

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| `string` \| `number`\>

</td>
<td>

Context which is not related to a user or a company.

**Deprecated**

Use `other` instead, this property will be removed in the next major version

</td>
</tr>
<tr>
<td>

<a id="user-2"></a> ~~`user?`~~

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
<td>

User related context. If you provide `id` Reflag will enrich the evaluation context with
user attributes on Reflag servers.

</td>
</tr>
</tbody>
</table>

***

### ToolbarPosition

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

<a id="offset"></a> `offset?`

</td>
<td>

[`Offset`](globals.md#offset-1)

</td>
</tr>
<tr>
<td>

<a id="placement"></a> `placement`

</td>
<td>

[`DialogPlacement`](globals.md#dialogplacement)

</td>
</tr>
</tbody>
</table>

***

### UserContext

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.
Id should always be present so that it can be referenced to an existing user.

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

Enables automatic feedback prompting if it's set up in Reflag

</td>
</tr>
<tr>
<td>

<a id="ui"></a> `ui`?

</td>
<td>

\{
  `position`: [`Position`](globals.md#position-1);
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

[`Position`](globals.md#position-1)

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

Feature ID from Reflag

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

\{
  `key`: `string`;
  `payload`: `any`;
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

`key`

</td>
<td>

`string`

</td>
<td>

The key of the matched configuration value.

</td>
</tr>
<tr>
<td>

`payload`

</td>
<td>

`any`

</td>
<td>

The optional user-supplied payload data.

</td>
</tr>
</tbody>
</table>

\{
  `key`: `undefined`;
  `payload`: `undefined`;
 \}

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

`key`

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`payload`

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

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
  timeoutMs: number;
  toolbar: ToolbarOptions;
};
```

ReflagClient initialization options.

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

`apiBaseUrl`?

</td>
<td>

`string`

</td>
<td>

Base URL of Reflag servers. You can override this to use your mocked server.

</td>
</tr>
<tr>
<td>

`appBaseUrl`?

</td>
<td>

`string`

</td>
<td>

Base URL of the Reflag web app. Links open ín this app by default.

</td>
</tr>
<tr>
<td>

`bootstrappedFlags`?

</td>
<td>

[`RawFlags`](globals.md#rawflags)

</td>
<td>

Pre-fetched flags to be used instead of fetching them from the server.

</td>
</tr>
<tr>
<td>

`credentials`?

</td>
<td>

`"include"` \| `"same-origin"` \| `"omit"`

</td>
<td>

When proxying requests, you may want to include credentials like cookies
so you can authorize the request in the proxy.
This option controls the `credentials` option of the fetch API.

</td>
</tr>
<tr>
<td>

`enableTracking`?

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

`expireTimeMs`?

</td>
<td>

`number`

</td>
<td>

If set, flags will be cached between page loads for this duration

</td>
</tr>
<tr>
<td>

`fallbackFlags`?

</td>
<td>

  \| `string`[]
  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FallbackFlagOverride`](globals.md#fallbackflagoverride)\>

</td>
<td>

Flag keys for which `isEnabled` should fallback to true
if SDK fails to fetch flags from Reflag servers. If a record
is supplied instead of array, the values of each key represent the
configuration values and `isEnabled` is assume `true`.

</td>
</tr>
<tr>
<td>

`feedback`?

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

`logger`?

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

`offline`?

</td>
<td>

`boolean`

</td>
<td>

Whether to enable offline mode. Defaults to `false`.

</td>
</tr>
<tr>
<td>

`publishableKey`

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

`sdkVersion`?

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

`sseBaseUrl`?

</td>
<td>

`string`

</td>
<td>

Base URL of Reflag servers for SSE connections used by AutoFeedback.

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

Stale flags will be returned if staleWhileRevalidate is true if no new flags can be fetched

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

If set to true stale flags will be returned while refetching flags

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

Timeout in milliseconds when fetching flags

</td>
</tr>
<tr>
<td>

`toolbar`?

</td>
<td>

[`ToolbarOptions`](globals.md#toolbaroptions)

</td>
<td>

Toolbar configuration

</td>
</tr>
</tbody>
</table>

***

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

<a id="x"></a> `x`?

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

<a id="y"></a> `y`?

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

<a id="config-2"></a> `config`?

</td>
<td>

\{
  `key`: `string`;
  `missingContextFields`: `string`[];
  `payload`: `any`;
  `ruleEvaluationResults`: `boolean`[];
  `version`: `number`;
 \}

</td>
<td>

Optional user-defined dynamic configuration.

</td>
</tr>
<tr>
<td>

`config.key`

</td>
<td>

`string`

</td>
<td>

The key of the matched configuration value.

</td>
</tr>
<tr>
<td>

`config.missingContextFields`?

</td>
<td>

`string`[]

</td>
<td>

The missing context fields.

</td>
</tr>
<tr>
<td>

`config.payload`?

</td>
<td>

`any`

</td>
<td>

The optional user-supplied payload data.

</td>
</tr>
<tr>
<td>

`config.ruleEvaluationResults`?

</td>
<td>

`boolean`[]

</td>
<td>

The rule evaluation results.

</td>
</tr>
<tr>
<td>

`config.version`?

</td>
<td>

`number`

</td>
<td>

The version of the matched configuration value.

</td>
</tr>
<tr>
<td>

<a id="isenabled-1"></a> `isEnabled`

</td>
<td>

`boolean`

</td>
<td>

Result of flag evaluation.
Note: does not take local overrides into account.

</td>
</tr>
<tr>
<td>

<a id="isenabledoverride-1"></a> `isEnabledOverride`?

</td>
<td>

`boolean` \| `null`

</td>
<td>

If not null or undefined, the result is being overridden locally

</td>
</tr>
<tr>
<td>

<a id="key-2"></a> `key`

</td>
<td>

`string`

</td>
<td>

Flag key.

</td>
</tr>
<tr>
<td>

<a id="missingcontextfields-1"></a> `missingContextFields`?

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

<a id="ruleevaluationresults-1"></a> `ruleEvaluationResults`?

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

<a id="targetingversion"></a> `targetingVersion`?

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

`flagKey`

</td>
<td>

`string`

</td>
<td>

Flag key.

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

### State

```ts
type State = "idle" | "initializing" | "initialized" | "stopped";
```

State of the client.

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

<a id="attributes"></a> `attributes`?

</td>
<td>

  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>
  \| `null`

</td>
</tr>
<tr>
<td>

<a id="company-3"></a> `company`?

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
</tr>
<tr>
<td>

<a id="eventname"></a> `eventName`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="user-3"></a> `user`

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
</tr>
</tbody>
</table>

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

User supplied comment about your flag.

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

Reflag feedback ID

</td>
</tr>
<tr>
<td>

<a id="flagkey"></a> `flagKey`

</td>
<td>

`string`

</td>
<td>

Flag key.

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

Reflag feedback prompt ID.

This only exists if the feedback was submitted
as part of an automated prompt from Reflag.

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
