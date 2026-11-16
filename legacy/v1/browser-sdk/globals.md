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

{% hint style="info" %}
**Protocol v1 — legacy.** [Current v2 documentation](../../../supported-languages/browser-sdk/globals.md) · [Migration guide](../../../supported-languages/migrating-from-v1.md)
{% endhint %}

# @reflag/browser-sdk <a href="#reflagbrowser-sdk" id="reflagbrowser-sdk"></a>

## Classes <a href="#classes" id="classes"></a>

### ReflagClient <a href="#reflagclient" id="reflagclient"></a>

ReflagClient lets you interact with the Reflag API.

#### Constructors <a href="#constructors" id="constructors"></a>

### new ReflagClient() <a href="#new-reflagclient" id="new-reflagclient"></a>

```ts
new ReflagClient(opts: InitOptions): ReflagClient
```

Create a new ReflagClient instance.

###### Parameters <a href="#parameters" id="parameters"></a>

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

###### Returns <a href="#returns" id="returns"></a>

[`ReflagClient`](globals.md#reflagclient)

#### Properties <a href="#properties" id="properties"></a>

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

[`Logger`](globals.md#logger)

</td>
</tr>
</tbody>
</table>

#### Methods <a href="#methods" id="methods"></a>

### applyBootstrappedState() <a href="#applybootstrappedstate" id="applybootstrappedstate"></a>

```ts
applyBootstrappedState(bootstrappedState: BootstrappedState, triggerEvent: boolean): void
```

###### Parameters <a href="#parameters-1" id="parameters-1"></a>

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`bootstrappedState`

</td>
<td>

[`BootstrappedState`](globals.md#bootstrappedstate)

</td>
<td>

`undefined`

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
</tr>
</tbody>
</table>

###### Returns <a href="#returns-1" id="returns-1"></a>

`void`

### feedback() <a href="#feedback-1" id="feedback-1"></a>

```ts
feedback(payload: Feedback): Promise<
  | undefined
| Response>
```

Submit user feedback to Reflag. Must include either `score` or `comment`, or both.

###### Parameters <a href="#parameters-2" id="parameters-2"></a>

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

[`Feedback`](globals.md#feedback)

</td>
<td>

The feedback details to submit.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-2" id="returns-2"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

The server response.

### getConfig() <a href="#getconfig" id="getconfig"></a>

```ts
getConfig(): Config
```

Get the current configuration.

###### Returns <a href="#returns-3" id="returns-3"></a>

[`Config`](globals.md#config)

### getContext() <a href="#getcontext" id="getcontext"></a>

```ts
getContext(): ReflagContext
```

Get the current context.

###### Returns <a href="#returns-4" id="returns-4"></a>

[`ReflagContext`](globals.md#reflagcontext)

### ~~getFeature()~~ <a href="#getfeature" id="getfeature"></a>

```ts
getFeature(flagKey: string): Flag
```

###### Parameters <a href="#parameters-3" id="parameters-3"></a>

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

###### Returns <a href="#returns-5" id="returns-5"></a>

[`Flag`](globals.md#flag)

###### Deprecated <a href="#deprecated" id="deprecated"></a>

Use `getFlag` instead.

### ~~getFeatures()~~ <a href="#getfeatures" id="getfeatures"></a>

```ts
getFeatures(): RawFlags
```

###### Returns <a href="#returns-6" id="returns-6"></a>

[`RawFlags`](globals.md#rawflags)

###### Deprecated <a href="#deprecated-1" id="deprecated-1"></a>

Use `getFlags` instead.

### getFlag() <a href="#getflag" id="getflag"></a>

```ts
getFlag(flagKey: string): Flag
```

Return a flag. Accessing `isEnabled` or `config` will automatically send a `check` event.

###### Parameters <a href="#parameters-4" id="parameters-4"></a>

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

###### Returns <a href="#returns-7" id="returns-7"></a>

[`Flag`](globals.md#flag)

A flag.

### getFlags() <a href="#getflags" id="getflags"></a>

```ts
getFlags(): RawFlags
```

Returns a map of enabled flags.
Accessing a flag will *not* send a check event
and `isEnabled` does not take any flag overrides
into account.

###### Returns <a href="#returns-8" id="returns-8"></a>

[`RawFlags`](globals.md#rawflags)

Map of flags.

### getIsLoadingOptInFlags() <a href="#getisloadingoptinflags" id="getisloadingoptinflags"></a>

```ts
getIsLoadingOptInFlags(): boolean
```

Returns whether opt-in flags are loading for the current context.

Calling this method requests opt-in metadata if it is not already available.

###### Returns <a href="#returns-9" id="returns-9"></a>

`boolean`

### getOptInFlags() <a href="#getoptinflags" id="getoptinflags"></a>

```ts
getOptInFlags(): OptInFlag[]
```

Returns opt-in-enabled flags for the current context.

###### Returns <a href="#returns-10" id="returns-10"></a>

[`OptInFlag`](globals.md#optinflag)[]

### getState() <a href="#getstate" id="getstate"></a>

```ts
getState(): State
```

###### Returns <a href="#returns-11" id="returns-11"></a>

[`State`](globals.md#state)

### initialize() <a href="#initialize" id="initialize"></a>

```ts
initialize(): Promise<void>
```

Initialize the Reflag SDK.

Must be called before calling other SDK methods.

###### Returns <a href="#returns-12" id="returns-12"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### off() <a href="#off" id="off"></a>

```ts
off<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): void
```

Remove an event listener

###### Type Parameters <a href="#type-parameters" id="type-parameters"></a>

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

###### Parameters <a href="#parameters-5" id="parameters-5"></a>

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

###### Returns <a href="#returns-13" id="returns-13"></a>

`void`

A function to remove the hook.

### on() <a href="#on" id="on"></a>

```ts
on<THookType>(type: THookType, handler: (args0: HookArgs[THookType]) => void): () => void
```

Add an event listener

###### Type Parameters <a href="#type-parameters-1" id="type-parameters-1"></a>

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

###### Parameters <a href="#parameters-6" id="parameters-6"></a>

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

###### Returns <a href="#returns-14" id="returns-14"></a>

`Function`

A function to remove the hook.

###### Returns <a href="#returns-15" id="returns-15"></a>

`void`

### refresh() <a href="#refresh" id="refresh"></a>

```ts
refresh(): Promise<undefined | RawFlags>
```

Force refresh flags from the API, bypassing cache.

###### Returns <a href="#returns-16" id="returns-16"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| [`RawFlags`](globals.md#rawflags)\>

### requestFeedback() <a href="#requestfeedback" id="requestfeedback"></a>

```ts
requestFeedback(options: RequestFeedbackData): void
```

Display the Reflag feedback form UI programmatically.

This can be used to collect feedback from users in Reflag in cases where Automated Feedback Surveys isn't appropriate.

###### Parameters <a href="#parameters-7" id="parameters-7"></a>

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

###### Returns <a href="#returns-17" id="returns-17"></a>

`void`

### setContext() <a href="#setcontext" id="setcontext"></a>

```ts
setContext(context: ReflagDeprecatedContext): Promise<void>
```

Update the context.
Replaces the existing context with a new context.

###### Parameters <a href="#parameters-8" id="parameters-8"></a>

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

###### Returns <a href="#returns-18" id="returns-18"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### setOptIn() <a href="#setoptin" id="setoptin"></a>

```ts
setOptIn(flagKey: string, options: SetOptInOptions): Promise<
  | undefined
| Response>
```

Set whether the current user or company has opted into a flag.

A successful Response is returned after the refreshed flag state confirms
the membership change. HTTP failures return a non-OK Response without
refreshing flags. Offline mode, invalid arguments, or missing scoped context
return undefined. Network and confirmation failures reject the promise;
a confirmation failure may occur after membership changed remotely.

###### Parameters <a href="#parameters-9" id="parameters-9"></a>

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
<tr>
<td>

`options`

</td>
<td>

[`SetOptInOptions`](globals.md#setoptinoptions)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-19" id="returns-19"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

### showToolbarToggle() <a href="#showtoolbartoggle" id="showtoolbartoggle"></a>

```ts
showToolbarToggle(position?: ToolbarPosition): void
```

###### Parameters <a href="#parameters-10" id="parameters-10"></a>

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

`position`?

</td>
<td>

[`ToolbarPosition`](globals.md#toolbarposition)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-20" id="returns-20"></a>

`void`

### stop() <a href="#stop" id="stop"></a>

```ts
stop(): Promise<void>
```

Stop the SDK.
This will stop any automated feedback surveys.

###### Returns <a href="#returns-21" id="returns-21"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### track() <a href="#track" id="track"></a>

```ts
track(eventName: string, attributes?:
  | null
  | Record<string, any>): Promise<
  | undefined
| Response>
```

Track an event in Reflag.

###### Parameters <a href="#parameters-11" id="parameters-11"></a>

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

###### Returns <a href="#returns-22" id="returns-22"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

### updateCompany() <a href="#updatecompany" id="updatecompany"></a>

```ts
updateCompany(company: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
It will not update the context if nothing has changed.

###### Parameters <a href="#parameters-12" id="parameters-12"></a>

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

###### Returns <a href="#returns-23" id="returns-23"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### updateFlags() <a href="#updateflags" id="updateflags"></a>

```ts
updateFlags(
   flags: RawFlags,
   triggerEvent: boolean,
   flagStateVersion?: number): void
```

Update the flags.

###### Parameters <a href="#parameters-13" id="parameters-13"></a>

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
<tr>
<td>

`flagStateVersion`?

</td>
<td>

`number`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-24" id="returns-24"></a>

`void`

### updateOtherContext() <a href="#updateothercontext" id="updateothercontext"></a>

```ts
updateOtherContext(otherContext: {}): Promise<void>
```

Update the company context.
Performs a shallow merge with the existing company context.
It will not update the context if nothing has changed.

###### Parameters <a href="#parameters-14" id="parameters-14"></a>

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

###### Returns <a href="#returns-25" id="returns-25"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### updateUser() <a href="#updateuser" id="updateuser"></a>

```ts
updateUser(user: {}): Promise<void>
```

Update the user context.
Performs a shallow merge with the existing user context.
It will not update the context if nothing has changed.

###### Parameters <a href="#parameters-15" id="parameters-15"></a>

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

###### Returns <a href="#returns-26" id="returns-26"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Interfaces <a href="#interfaces" id="interfaces"></a>

### CheckEvent <a href="#checkevent" id="checkevent"></a>

Event representing checking the flag evaluation result

#### Properties <a href="#properties-1" id="properties-1"></a>

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

<a id="evaluationerrors"></a> `evaluationErrors?`

</td>
<td>

\{ `code`: `string`; `field`: `string`; `message`: `string`; `operator`: `string`; \}[]

</td>
<td>

Non-fatal diagnostics produced while evaluating the flag.

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

<a id="missingcontextfields"></a> ~~`missingContextFields?`~~

</td>
<td>

`string`[]

</td>
<td>

Missing context fields.

**Deprecated**

Use `evaluationErrors` and check for `MISSING_CONTEXT_FIELD`.

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

### CompanyContext <a href="#companycontext" id="companycontext"></a>

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.
Id should always be present so that it can be referenced to an existing company.

#### Indexable <a href="#indexable" id="indexable"></a>

```ts
[key: string]: ContextValue
```

#### Properties <a href="#properties-2" id="properties-2"></a>

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

### Config <a href="#config" id="config"></a>

ReflagClient configuration.

#### Properties <a href="#properties-3" id="properties-3"></a>

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

Base URL used for pubsub SSE connections.
Defaults to `apiBaseUrl`.

</td>
</tr>
</tbody>
</table>

***

### FeedbackScoreSubmission <a href="#feedbackscoresubmission" id="feedbackscoresubmission"></a>

#### Properties <a href="#properties-4" id="properties-4"></a>

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

### FeedbackSubmission <a href="#feedbacksubmission" id="feedbacksubmission"></a>

#### Properties <a href="#properties-5" id="properties-5"></a>

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

### Flag <a href="#flag" id="flag"></a>

#### Properties <a href="#properties-6" id="properties-6"></a>

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

#### Methods <a href="#methods-1" id="methods-1"></a>

### setIsEnabledOverride() <a href="#setisenabledoverride" id="setisenabledoverride"></a>

```ts
setIsEnabledOverride(isEnabled: null | boolean): void
```

Set the override status for isEnabled for the flag.
Set to `null` to remove the override.

###### Parameters <a href="#parameters-16" id="parameters-16"></a>

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

###### Returns <a href="#returns-27" id="returns-27"></a>

`void`

***

### HookArgs <a href="#hookargs" id="hookargs"></a>

#### Properties <a href="#properties-7" id="properties-7"></a>

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

<a id="optinflagsloadingupdated"></a> `optInFlagsLoadingUpdated`

</td>
<td>

`boolean`

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

### Logger <a href="#logger" id="logger"></a>

#### Methods <a href="#methods-2" id="methods-2"></a>

### debug() <a href="#debug" id="debug"></a>

```ts
debug(message: string, ...args: any[]): void
```

###### Parameters <a href="#parameters-17" id="parameters-17"></a>

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

###### Returns <a href="#returns-28" id="returns-28"></a>

`void`

### error() <a href="#error" id="error"></a>

```ts
error(message: string, ...args: any[]): void
```

###### Parameters <a href="#parameters-18" id="parameters-18"></a>

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

###### Returns <a href="#returns-29" id="returns-29"></a>

`void`

### info() <a href="#info" id="info"></a>

```ts
info(message: string, ...args: any[]): void
```

###### Parameters <a href="#parameters-19" id="parameters-19"></a>

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

###### Returns <a href="#returns-30" id="returns-30"></a>

`void`

### warn() <a href="#warn" id="warn"></a>

```ts
warn(message: string, ...args: any[]): void
```

###### Parameters <a href="#parameters-20" id="parameters-20"></a>

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

###### Returns <a href="#returns-31" id="returns-31"></a>

`void`

***

### OnScoreSubmitResult <a href="#onscoresubmitresult" id="onscoresubmitresult"></a>

#### Properties <a href="#properties-8" id="properties-8"></a>

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

### OpenFeedbackFormOptions <a href="#openfeedbackformoptions" id="openfeedbackformoptions"></a>

#### Properties <a href="#properties-9" id="properties-9"></a>

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

[`Position`](globals.md#position)

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

### ReflagContext <a href="#reflagcontext" id="reflagcontext"></a>

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.

#### Extended by <a href="#extended-by" id="extended-by"></a>

- [`ReflagDeprecatedContext`](globals.md#reflagdeprecatedcontext)

#### Properties <a href="#properties-10" id="properties-10"></a>

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

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ContextValue`](globals.md#contextvalue)\>

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

### ~~ReflagDeprecatedContext~~ <a href="#reflagdeprecatedcontext" id="reflagdeprecatedcontext"></a>

**`Internal`**

#### Deprecated <a href="#deprecated-2" id="deprecated-2"></a>

Use `ReflagContext` instead, this interface will be removed in the next major version

#### Extends <a href="#extends" id="extends"></a>

- [`ReflagContext`](globals.md#reflagcontext)

#### Properties <a href="#properties-11" id="properties-11"></a>

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

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ContextValue`](globals.md#contextvalue)\>

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

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`ContextValue`](globals.md#contextvalue)\>

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

### ToolbarPosition <a href="#toolbarposition" id="toolbarposition"></a>

#### Properties <a href="#properties-12" id="properties-12"></a>

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

[`Offset`](globals.md#offset)

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

### UserContext <a href="#usercontext" id="usercontext"></a>

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.
Id should always be present so that it can be referenced to an existing user.

#### Indexable <a href="#indexable-1" id="indexable-1"></a>

```ts
[key: string]: ContextValue
```

#### Properties <a href="#properties-13" id="properties-13"></a>

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

## Type Aliases <a href="#type-aliases" id="type-aliases"></a>

### BootstrappedState <a href="#bootstrappedstate" id="bootstrappedstate"></a>

```ts
type BootstrappedState = {
  context: ReflagContext;
  flags: RawFlags;
  flagStateVersion: number;
};
```

Pre-fetched evaluated state used to bootstrap the client.

#### Type declaration <a href="#type-declaration" id="type-declaration"></a>

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

<a id="context"></a> `context`

</td>
<td>

[`ReflagContext`](globals.md#reflagcontext)

</td>
</tr>
<tr>
<td>

<a id="flags"></a> `flags`

</td>
<td>

[`RawFlags`](globals.md#rawflags)

</td>
</tr>
<tr>
<td>

<a id="flagstateversion"></a> `flagStateVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

### ContextValue <a href="#contextvalue" id="contextvalue"></a>

```ts
type ContextValue = DefinedContextValue | undefined;
```

A context value. Object properties set to `undefined` are omitted.

***

### DefinedContextValue <a href="#definedcontextvalue" id="definedcontextvalue"></a>

```ts
type DefinedContextValue =
  | string
  | number
  | boolean
  | null
  | DefinedContextValue[]
| {};
```

A JSON-compatible context value that is not `undefined`.

***

### DialogPlacement <a href="#dialogplacement" id="dialogplacement"></a>

```ts
type DialogPlacement = "bottom-right" | "bottom-left" | "top-right" | "top-left";
```

***

### EventSourceFactory() <a href="#eventsourcefactory" id="eventsourcefactory"></a>

```ts
type EventSourceFactory = (url: string) => EventSourceLike;
```

#### Parameters <a href="#parameters-21" id="parameters-21"></a>

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

`url`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-32" id="returns-32"></a>

[`EventSourceLike`](globals.md#eventsourcelike)

***

### EventSourceLike <a href="#eventsourcelike" id="eventsourcelike"></a>

```ts
type EventSourceLike = {
  addEventListener: (type: string, cb: (event: any) => void) => void;
  close: () => void;
};
```

#### Type declaration <a href="#type-declaration-1" id="type-declaration-1"></a>

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

<a id="addeventlistener"></a> `addEventListener`

</td>
<td>

(`type`: `string`, `cb`: (`event`: `any`) => `void`) => `void`

</td>
</tr>
<tr>
<td>

<a id="close"></a> `close`

</td>
<td>

() => `void`

</td>
</tr>
</tbody>
</table>

***

### FallbackFlagOverride <a href="#fallbackflagoverride" id="fallbackflagoverride"></a>

```ts
type FallbackFlagOverride =
  | {
  key: string;
  payload: any;
 }
  | true;
```

***

### Feedback <a href="#feedback" id="feedback"></a>

```ts
type Feedback = UnassignedFeedback & {
  companyId: string;
  userId: string;
};
```

#### Type declaration <a href="#type-declaration-2" id="type-declaration-2"></a>

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

### FeedbackOptions <a href="#feedbackoptions" id="feedbackoptions"></a>

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

#### Type declaration <a href="#type-declaration-3" id="type-declaration-3"></a>

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
  `position`: [`Position`](globals.md#position);
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

[`Position`](globals.md#position)

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

### FeedbackPrompt <a href="#feedbackprompt" id="feedbackprompt"></a>

```ts
type FeedbackPrompt = {
  featureId: string;
  promptId: string;
  question: string;
  showAfter: Date;
  showBefore: Date;
};
```

#### Type declaration <a href="#type-declaration-4" id="type-declaration-4"></a>

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

### FeedbackPromptHandler() <a href="#feedbackprompthandler" id="feedbackprompthandler"></a>

```ts
type FeedbackPromptHandler = (prompt: FeedbackPrompt, handlers: FeedbackPromptHandlerCallbacks) => void;
```

#### Parameters <a href="#parameters-22" id="parameters-22"></a>

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

#### Returns <a href="#returns-33" id="returns-33"></a>

`void`

***

### FeedbackPromptHandlerCallbacks <a href="#feedbackprompthandlercallbacks" id="feedbackprompthandlercallbacks"></a>

```ts
type FeedbackPromptHandlerCallbacks = {
  openFeedbackForm: (options: FeedbackPromptHandlerOpenFeedbackFormOptions) => void;
  reply: FeedbackPromptReplyHandler;
};
```

#### Type declaration <a href="#type-declaration-5" id="type-declaration-5"></a>

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

### FeedbackPromptHandlerOpenFeedbackFormOptions <a href="#feedbackprompthandleropenfeedbackformoptions" id="feedbackprompthandleropenfeedbackformoptions"></a>

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

### FeedbackPromptReply <a href="#feedbackpromptreply" id="feedbackpromptreply"></a>

```ts
type FeedbackPromptReply = {
  comment: string;
  companyId: string;
  question: string;
  score: number;
};
```

#### Type declaration <a href="#type-declaration-6" id="type-declaration-6"></a>

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

### FeedbackPromptReplyHandler() <a href="#feedbackpromptreplyhandler" id="feedbackpromptreplyhandler"></a>

```ts
type FeedbackPromptReplyHandler = <T>(reply: T) => T extends null ? Promise<void> : Promise<{
  feedbackId: string;
}>;
```

#### Type Parameters <a href="#type-parameters-2" id="type-parameters-2"></a>

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

#### Parameters <a href="#parameters-23" id="parameters-23"></a>

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

#### Returns <a href="#returns-34" id="returns-34"></a>

`T` *extends* `null` ? [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\> : [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{
  `feedbackId`: `string`;
 \}\>

***

### FeedbackTranslations <a href="#feedbacktranslations" id="feedbacktranslations"></a>

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

#### Type declaration <a href="#type-declaration-7" id="type-declaration-7"></a>

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

### FlagOverrides <a href="#flagoverrides" id="flagoverrides"></a>

```ts
type FlagOverrides = Record<string, boolean | undefined>;
```

***

### FlagRemoteConfig <a href="#flagremoteconfig" id="flagremoteconfig"></a>

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

#### Type declaration <a href="#type-declaration-8" id="type-declaration-8"></a>

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

### InitOptions <a href="#initoptions" id="initoptions"></a>

```ts
type InitOptions = ReflagDeprecatedContext & {
  apiBaseUrl: string;
  appBaseUrl: string;
  bootstrappedFlags: RawFlags;
  bootstrappedState: BootstrappedState;
  credentials: "include" | "same-origin" | "omit";
  enableLiveFlagUpdates: boolean;
  enableTracking: boolean;
  eventSourceFactory: EventSourceFactory;
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
  trackingQueue: {
     flushDelayMs: number;
     maxSize: number;
     retryBaseDelayMs: number;
     retryMaxDelayMs: number;
    };
};
```

ReflagClient initialization options.

#### Type declaration <a href="#type-declaration-9" id="type-declaration-9"></a>

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

Pre-fetched flags used for the initial flag state.
The client fetches opt-in metadata on demand when opt-in flags are requested.

**Deprecated**

Use `bootstrappedState` instead.

</td>
</tr>
<tr>
<td>

`bootstrappedState`?

</td>
<td>

[`BootstrappedState`](globals.md#bootstrappedstate)

</td>
<td>

Pre-fetched evaluated state used for the initial flag state.
The client fetches opt-in metadata on demand when opt-in flags are requested.

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

`enableLiveFlagUpdates`?

</td>
<td>

`boolean`

</td>
<td>

Whether to enable live flag updates.

When enabled, the SDK opens a Server-Sent Events (SSE) connection and
refreshes flag definitions automatically whenever they change on the
server, without relying on context changes or manual refreshes.

Defaults to `false` in the browser SDK.

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

`eventSourceFactory`?

</td>
<td>

[`EventSourceFactory`](globals.md#eventsourcefactory)

</td>
<td>

Optional factory used to create SSE connections.

By default the SDK uses the global `EventSource` implementation available
in browsers. This option is intended for alternative runtimes where you
need to provide an EventSource-compatible transport manually. The React
Native wrapper already injects a transport automatically.

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

[`Logger`](globals.md#logger)

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

**Deprecated**

SSE now uses the same origin as `apiBaseUrl` by default.
Override only if you need a separate pubsub host temporarily.

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

`storage`?

</td>
<td>

[`StorageAdapter`](globals.md#storageadapter)

</td>
<td>

Optional storage adapter used for caching flags and overrides.
Useful for React Native (AsyncStorage).

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
<tr>
<td>

`trackingQueue`?

</td>
<td>

\{
  `flushDelayMs`: `number`;
  `maxSize`: `number`;
  `retryBaseDelayMs`: `number`;
  `retryMaxDelayMs`: `number`;
 \}

</td>
<td>

Queue settings for tracking updates sent to `/bulk`.
Applies to user/company updates, check events, and prompt events.
Events are buffered in memory and flushed in the background.

</td>
</tr>
<tr>
<td>

`trackingQueue.flushDelayMs`?

</td>
<td>

`number`

</td>
<td>

Delay in milliseconds before flushing queued events.
Lower values send sooner; slightly higher values batch better.
Defaults to 200ms.

</td>
</tr>
<tr>
<td>

`trackingQueue.maxSize`?

</td>
<td>

`number`

</td>
<td>

Maximum number of queued events retained locally.
Oldest events are dropped when the cap is exceeded.
Defaults to 100.

</td>
</tr>
<tr>
<td>

`trackingQueue.retryBaseDelayMs`?

</td>
<td>

`number`

</td>
<td>

Deprecated: retries are no longer performed for bulk delivery.

</td>
</tr>
<tr>
<td>

`trackingQueue.retryMaxDelayMs`?

</td>
<td>

`number`

</td>
<td>

Deprecated: retries are no longer performed for bulk delivery.

</td>
</tr>
</tbody>
</table>

***

### Offset <a href="#offset" id="offset"></a>

```ts
type Offset = {
  x: string | number;
  y: string | number;
};
```

#### Type declaration <a href="#type-declaration-10" id="type-declaration-10"></a>

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

### OptInFlag <a href="#optinflag" id="optinflag"></a>

```ts
type OptInFlag = RawFlagOptIn & {
  isEnabled: boolean;
  key: string;
};
```

#### Type declaration <a href="#type-declaration-11" id="type-declaration-11"></a>

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

Result of flag evaluation.

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

Flag key.

</td>
</tr>
</tbody>
</table>

***

### PopoverPlacement <a href="#popoverplacement" id="popoverplacement"></a>

```ts
type PopoverPlacement = Placement;
```

***

### Position <a href="#position" id="position"></a>

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

### RawFlag <a href="#rawflag" id="rawflag"></a>

```ts
type RawFlag = {
  config: {
     evaluationErrors: RawFlag["evaluationErrors"];
     key: string;
     missingContextFields: string[];
     payload: any;
     ruleEvaluationResults: boolean[];
     version: number;
    };
  evaluationErrors: {
     code: string;
     field: string;
     message: string;
     operator: string;
    }[];
  isEnabled: boolean;
  isEnabledOverride: boolean | null;
  key: string;
  missingContextFields: string[];
  optIn: RawFlagOptIn | null;
  optInEnabled: boolean;
  ruleEvaluationResults: boolean[];
  targetingVersion: number;
};
```

A flag fetched from the server.

#### Type declaration <a href="#type-declaration-12" id="type-declaration-12"></a>

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
  `evaluationErrors`: [`RawFlag`](globals.md#rawflag)\[`"evaluationErrors"`\];
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

`config.evaluationErrors`?

</td>
<td>

[`RawFlag`](globals.md#rawflag)\[`"evaluationErrors"`\]

</td>
<td>

Non-fatal diagnostics produced while evaluating targeting rules.

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

**Deprecated**

Use `evaluationErrors` and check for `MISSING_CONTEXT_FIELD`.

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

<a id="evaluationerrors-1"></a> `evaluationErrors`?

</td>
<td>

\{
  `code`: `string`;
  `field`: `string`;
  `message`: `string`;
  `operator`: `string`;
 \}[]

</td>
<td>

Non-fatal diagnostics produced while evaluating targeting rules.

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

**Deprecated**

Use `evaluationErrors` and check for `MISSING_CONTEXT_FIELD`.

</td>
</tr>
<tr>
<td>

<a id="optin"></a> `optIn`?

</td>
<td>

[`RawFlagOptIn`](globals.md#rawflagoptin) \| `null`

</td>
<td>

Opt-in metadata for this flag and the current context.

</td>
</tr>
<tr>
<td>

<a id="optinenabled"></a> `optInEnabled`?

</td>
<td>

`boolean`

</td>
<td>

Whether end-user opt-in is enabled for this flag.

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

### RawFlagOptIn <a href="#rawflagoptin" id="rawflagoptin"></a>

```ts
type RawFlagOptIn = {
  companyOptedIn: boolean;
  description: string | null;
  isOptedIn: boolean;
  name: string;
  userOptedIn: boolean;
};
```

#### Type declaration <a href="#type-declaration-13" id="type-declaration-13"></a>

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

<a id="companyoptedin"></a> `companyOptedIn`

</td>
<td>

`boolean`

</td>
<td>

Whether the current company has opted into the flag.

</td>
</tr>
<tr>
<td>

<a id="description"></a> `description`

</td>
<td>

`string` \| `null`

</td>
<td>

SDK-facing opt-in description.

</td>
</tr>
<tr>
<td>

<a id="isoptedin"></a> `isOptedIn`

</td>
<td>

`boolean`

</td>
<td>

Whether either the current user or company has opted into the flag.

</td>
</tr>
<tr>
<td>

<a id="name-2"></a> `name`

</td>
<td>

`string`

</td>
<td>

Display name of the opt-in flag.

</td>
</tr>
<tr>
<td>

<a id="useroptedin"></a> `userOptedIn`

</td>
<td>

`boolean`

</td>
<td>

Whether the current user has opted into the flag.

</td>
</tr>
</tbody>
</table>

***

### RawFlags <a href="#rawflags" id="rawflags"></a>

```ts
type RawFlags = Record<string, RawFlag>;
```

***

### RequestFeedbackData <a href="#requestfeedbackdata" id="requestfeedbackdata"></a>

```ts
type RequestFeedbackData = Omit<OpenFeedbackFormOptions, "key" | "onSubmit"> & {
  companyId: string;
  flagKey: string;
  onAfterSubmit: (data: FeedbackSubmission) => void;
};
```

#### Type declaration <a href="#type-declaration-14" id="type-declaration-14"></a>

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

### RequestFeedbackOptions <a href="#requestfeedbackoptions" id="requestfeedbackoptions"></a>

```ts
type RequestFeedbackOptions = RequestFeedbackData & {
  userId: string;
};
```

#### Type declaration <a href="#type-declaration-15" id="type-declaration-15"></a>

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

### SetOptInOptions <a href="#setoptinoptions" id="setoptinoptions"></a>

```ts
type SetOptInOptions = {
  optedIn: boolean;
  scope?: "user" | "company";
};
```

Options for changing the current user or company's opt-in membership.

#### Type declaration <a href="#type-declaration-16" id="type-declaration-16"></a>

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

<a id="optedin"></a> `optedIn`

</td>
<td>

`boolean`

</td>
<td>

Whether the scoped subject has opted in.

</td>
</tr>
<tr>
<td>

<a id="scope"></a> `scope`?

</td>
<td>

`"user"` \| `"company"`

</td>
<td>

Whether to update the current user or current company. Defaults to `user`.

</td>
</tr>
</tbody>
</table>

***

### State <a href="#state" id="state"></a>

```ts
type State = "idle" | "initializing" | "initialized" | "stopped";
```

State of the client.

***

### StorageAdapter <a href="#storageadapter" id="storageadapter"></a>

```ts
type StorageAdapter = {
  getItem: Promise<null | string>;
  removeItem: Promise<void>;
  setItem: Promise<void>;
};
```

#### Type declaration <a href="#type-declaration-17" id="type-declaration-17"></a>

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

<a id="getitem"></a> `getItem()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`null` \| `string`\>

</td>
</tr>
<tr>
<td>

<a id="removeitem"></a> `removeItem()`?

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

</td>
</tr>
<tr>
<td>

<a id="setitem"></a> `setItem()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

</td>
</tr>
</tbody>
</table>

***

### ToolbarOptions <a href="#toolbaroptions" id="toolbaroptions"></a>

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

### TrackEvent <a href="#trackevent" id="trackevent"></a>

```ts
type TrackEvent = {
  attributes:   | Record<string, any>
     | null;
  company: CompanyContext;
  eventName: string;
  user: UserContext;
};
```

#### Type declaration <a href="#type-declaration-18" id="type-declaration-18"></a>

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

### UnassignedFeedback <a href="#unassignedfeedback" id="unassignedfeedback"></a>

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

#### Type declaration <a href="#type-declaration-19" id="type-declaration-19"></a>

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

## Variables <a href="#variables" id="variables"></a>

### DEFAULT\_TRANSLATIONS <a href="#default_translations" id="default_translations"></a>

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

### feedbackContainerId <a href="#feedbackcontainerid" id="feedbackcontainerid"></a>

```ts
const feedbackContainerId: "reflag-feedback-dialog-container" = "reflag-feedback-dialog-container";
```

ID of HTML DIV element which contains the feedback dialog

***

### propagatedEvents <a href="#propagatedevents" id="propagatedevents"></a>

```ts
const propagatedEvents: string[];
```

These events will be propagated to the feedback dialog

#### See <a href="#see" id="see"></a>

[https://developer.mozilla.org/en-US/docs/Web/API/Element#events](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)
