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
**Protocol v1 — legacy.** [Current v2 documentation](../../../supported-languages/vue-sdk/globals.md) · [Migration guide](../../../supported-languages/migrating-from-v1.md)

Generated from [`@reflag/vue-sdk@1.5.7`](https://github.com/reflagcom/javascript/tree/b4fe5b3d9386b87c6546175c323862d9878e1430/packages/vue-sdk); SDK READMEs and code comments remain the source of truth.
{% endhint %}

# @reflag/vue-sdk <a href="#reflagvue-sdk" id="reflagvue-sdk"></a>

## Interfaces <a href="#interfaces" id="interfaces"></a>

### CheckEvent <a href="#checkevent" id="checkevent"></a>

Event representing checking the flag evaluation result

#### Properties <a href="#properties" id="properties"></a>

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

### Flag\<TConfig\> <a href="#flagtconfig" id="flagtconfig"></a>

#### Type Parameters <a href="#type-parameters" id="type-parameters"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Default type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TConfig` *extends* [`FlagType`](globals.md#flagtype)\[`"config"`\]

</td>
<td>

[`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig)

</td>
</tr>
</tbody>
</table>

#### Properties <a href="#properties-2" id="properties-2"></a>

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

<a id="config"></a> `config`

</td>
<td>

`Ref`\< \| [`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig) \| \{ `key`: `string`; \} & `TConfig`, \| [`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig) \| \{ `key`: `string`; \} & `TConfig`\>

</td>
</tr>
<tr>
<td>

<a id="isenabled"></a> `isEnabled`

</td>
<td>

`Ref`\<`boolean`, `boolean`\>

</td>
</tr>
<tr>
<td>

<a id="isloading"></a> `isLoading`

</td>
<td>

`Ref`\<`boolean`, `boolean`\>

</td>
</tr>
<tr>
<td>

<a id="key-1"></a> `key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="requestfeedback"></a> `requestFeedback`

</td>
<td>

(`opts`: [`RequestFlagFeedbackOptions`](globals.md#requestflagfeedbackoptions)) => `void`

</td>
</tr>
</tbody>
</table>

#### Methods <a href="#methods" id="methods"></a>

### track() <a href="#track" id="track"></a>

```ts
track():
  | undefined
  | Promise<
  | undefined
| Response>
```

###### Returns <a href="#returns" id="returns"></a>

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### Flags <a href="#flags" id="flags"></a>

***

### UserContext <a href="#usercontext" id="usercontext"></a>

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.
Id should always be present so that it can be referenced to an existing user.

#### Indexable <a href="#indexable-1" id="indexable-1"></a>

```ts
[key: string]: ContextValue
```

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

### BootstrappedFlags <a href="#bootstrappedflags" id="bootstrappedflags"></a>

```ts
type BootstrappedFlags = BootstrappedState & {
  flags: RawFlags;
};
```

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

`flags`

</td>
<td>

[`RawFlags`](../browser-sdk/globals.md#rawflags)

</td>
</tr>
</tbody>
</table>

***

### EmptyFlagRemoteConfig <a href="#emptyflagremoteconfig" id="emptyflagremoteconfig"></a>

```ts
type EmptyFlagRemoteConfig = {
  key: undefined;
  payload: undefined;
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

<a id="key-2"></a> `key`

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

<a id="payload"></a> `payload`

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

***

### FlagKey <a href="#flagkey" id="flagkey"></a>

```ts
type FlagKey = keyof TypedFlags;
```

***

### FlagType <a href="#flagtype" id="flagtype"></a>

```ts
type FlagType = {
  config: {
     payload: any;
    };
};
```

#### Type declaration <a href="#type-declaration-2" id="type-declaration-2"></a>

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

<a id="config-1"></a> `config`?

</td>
<td>

\{
  `payload`: `any`;
 \}

</td>
</tr>
<tr>
<td>

`config.payload`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

***

### OptInFlag <a href="#optinflag" id="optinflag"></a>

```ts
type OptInFlag = Omit<import("@reflag/browser-sdk").OptInFlag, "key"> & {
  key: FlagKey;
};
```

An opt-in-enabled flag for the generated Vue SDK flag definitions.

Includes all fields from [BrowserOptInFlag](../browser-sdk/globals.md#optinflag): `name`, `description`,
`isEnabled`, `userOptedIn`, `companyOptedIn`, and `isOptedIn`.
Only `key` is narrowed to the generated [FlagKey](globals.md#flagkey) type.

#### Type declaration <a href="#type-declaration-3" id="type-declaration-3"></a>

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

[`FlagKey`](globals.md#flagkey)

</td>
</tr>
</tbody>
</table>

***

### ReflagBaseProps <a href="#reflagbaseprops" id="reflagbaseprops"></a>

```ts
type ReflagBaseProps = {
  debug: boolean;
  initialLoading: boolean;
  logger: Logger;
};
```

**`Internal`**

Base props for the ReflagProvider and ReflagBootstrappedProvider.

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

<a id="debug"></a> `debug`?

</td>
<td>

`boolean`

</td>
<td>

Set to `true` to enable debug logging to the console.

</td>
</tr>
<tr>
<td>

<a id="initialloading"></a> `initialLoading`?

</td>
<td>

`boolean`

</td>
<td>

Set to `true` to show the loading component while the client is initializing.

</td>
</tr>
<tr>
<td>

<a id="logger"></a> `logger`?

</td>
<td>

[`Logger`](../browser-sdk/globals.md#logger)

</td>
<td>

A custom logger to use for SDK logs.
Use this for advanced control or filtering of SDK logs.
If both `logger` and `debug` are provided, `logger` takes precedence.

</td>
</tr>
</tbody>
</table>

***

### ReflagBootstrappedProps <a href="#reflagbootstrappedprops" id="reflagbootstrappedprops"></a>

```ts
type ReflagBootstrappedProps = ReflagInitOptionsBase & ReflagBaseProps & {
  flags: BootstrappedFlags;
};
```

Props for the ReflagBootstrappedProvider.

#### Type declaration <a href="#type-declaration-5" id="type-declaration-5"></a>

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

`flags`

</td>
<td>

[`BootstrappedFlags`](globals.md#bootstrappedflags)

</td>
<td>

Pre-fetched flags used for the initial render. The browser client fetches opt-in
metadata on demand when opt-in flags are requested.

</td>
</tr>
</tbody>
</table>

***

### ReflagClientProviderProps <a href="#reflagclientproviderprops" id="reflagclientproviderprops"></a>

```ts
type ReflagClientProviderProps = Omit<ReflagBaseProps, "debug" | "logger"> & {
  client: ReflagClient;
};
```

Props for the ReflagClientProvider.

#### Type declaration <a href="#type-declaration-6" id="type-declaration-6"></a>

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

`client`

</td>
<td>

[`ReflagClient`](../browser-sdk/globals.md#reflagclient)

</td>
<td>

A pre-initialized ReflagClient to use.

</td>
</tr>
</tbody>
</table>

***

### ReflagInitOptionsBase <a href="#reflaginitoptionsbase" id="reflaginitoptionsbase"></a>

```ts
type ReflagInitOptionsBase = Omit<InitOptions,
  | "user"
  | "company"
  | "other"
  | "otherContext"
  | "bootstrappedFlags"
  | "bootstrappedState"
| "logger">;
```

**`Internal`**

Base init options for the ReflagProvider and ReflagBootstrappedProvider.

***

### ReflagProps <a href="#reflagprops" id="reflagprops"></a>

```ts
type ReflagProps = ReflagInitOptionsBase & ReflagBaseProps & {
  company: CompanyContext;
  context: ReflagContext;
  otherContext: Record<string, string | number | undefined>;
  user: UserContext;
};
```

Props for the ReflagProvider.

#### Type declaration <a href="#type-declaration-7" id="type-declaration-7"></a>

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

`company`?

</td>
<td>

[`CompanyContext`](globals.md#companycontext)

</td>
<td>

Company related context. If you provide `id` Reflag will enrich the evaluation context with
company attributes on Reflag servers.

**Deprecated**

Use `context` instead, this property will be removed in the next major version

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ReflagContext`](../browser-sdk/globals.md#reflagcontext)

</td>
<td>

The context to use for the ReflagClient containing user, company, and other context.

</td>
</tr>
<tr>
<td>

`otherContext`?

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| `number` \| `undefined`\>

</td>
<td>

Context which is not related to a user or a company.

**Deprecated**

Use `context` instead, this property will be removed in the next major version

</td>
</tr>
<tr>
<td>

`user`?

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
<td>

User related context. If you provide `id` Reflag will enrich the evaluation context with
user attributes on Reflag servers.

**Deprecated**

Use `context` instead, this property will be removed in the next major version

</td>
</tr>
</tbody>
</table>

***

### RequestFlagFeedbackOptions <a href="#requestflagfeedbackoptions" id="requestflagfeedbackoptions"></a>

```ts
type RequestFlagFeedbackOptions = Omit<RequestFeedbackData, "flagKey" | "featureId">;
```

***

### SetOptInOptions <a href="#setoptinoptions" id="setoptinoptions"></a>

```ts
type SetOptInOptions = {
  optedIn: boolean;
  scope?: "user" | "company";
};
```

Options for changing the current user or company's opt-in membership.

#### Type declaration <a href="#type-declaration-8" id="type-declaration-8"></a>

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

#### Type declaration <a href="#type-declaration-9" id="type-declaration-9"></a>

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

<a id="company"></a> `company`?

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

<a id="user"></a> `user`

</td>
<td>

[`UserContext`](globals.md#usercontext)

</td>
</tr>
</tbody>
</table>

***

### TypedFlags <a href="#typedflags" id="typedflags"></a>

```ts
type TypedFlags = keyof Flags extends never ? Record<string, Flag> : { [TypedFlagKey in keyof Flags]: Flags[TypedFlagKey] extends FlagType ? Flag<Flags[TypedFlagKey]["config"]> : Flag };
```

***

### UseOptInFlagsResult <a href="#useoptinflagsresult" id="useoptinflagsresult"></a>

```ts
type UseOptInFlagsResult = {
  flags: ComputedRef<OptInFlag[]>;
  isLoading: ComputedRef<boolean>;
};
```

#### Type declaration <a href="#type-declaration-10" id="type-declaration-10"></a>

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

<a id="flags-1"></a> `flags`

</td>
<td>

`ComputedRef`\<[`OptInFlag`](globals.md#optinflag)[]\>

</td>
</tr>
<tr>
<td>

<a id="isloading-1"></a> `isLoading`

</td>
<td>

`ComputedRef`\<`boolean`\>

</td>
</tr>
</tbody>
</table>

## Variables <a href="#variables" id="variables"></a>

### default <a href="#default" id="default"></a>

```ts
default: {
  install: void;
};
```

#### Type declaration <a href="#type-declaration-11" id="type-declaration-11"></a>

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

<a id="install"></a> `install()`

</td>
<td>

`void`

</td>
</tr>
</tbody>
</table>

***

### ReflagBootstrappedProvider <a href="#reflagbootstrappedprovider" id="reflagbootstrappedprovider"></a>

```ts
const ReflagBootstrappedProvider: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
```

## Functions <a href="#functions" id="functions"></a>

### useClient() <a href="#useclient" id="useclient"></a>

```ts
function useClient(): ReflagClient
```

Vue composable for getting the Reflag client.

This composable returns the Reflag client. You can use this to get the Reflag
client at any point in your application.

#### Returns <a href="#returns-1" id="returns-1"></a>

[`ReflagClient`](../browser-sdk/globals.md#reflagclient)

The Reflag client.

#### Example <a href="#example" id="example"></a>

```ts
import { useClient } from '@reflag/vue-sdk';

const client = useClient();

console.log(client.getContext());
```

***

### useFlag() <a href="#useflag" id="useflag"></a>

```ts
function useFlag<TKey>(key: TKey): TypedFlags[TKey]
```

Vue composable for getting the state of a given flag for the current context.

This composable returns an object with the state of the flag for the current context.

#### Type Parameters <a href="#type-parameters-1" id="type-parameters-1"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TKey` *extends* `string`

</td>
</tr>
</tbody>
</table>

#### Parameters <a href="#parameters" id="parameters"></a>

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

`key`

</td>
<td>

`TKey`

</td>
<td>

The key of the flag to get the state of.

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-2" id="returns-2"></a>

[`TypedFlags`](globals.md#typedflags)\[`TKey`\]

An object with the state of the flag.

#### Example <a href="#example-1" id="example-1"></a>

```ts
import { useFlag } from '@reflag/vue-sdk';

const { isEnabled, config, track, requestFeedback } = useFlag("huddles");

function StartHuddlesButton() {
  const { isEnabled, config: { payload }, track } = useFlag("huddles");
  if (isEnabled) {
   return <button onClick={() => track()}>{payload?.buttonTitle ?? "Start Huddles"}</button>;
}
```

***

### useIsLoading() <a href="#useisloading" id="useisloading"></a>

```ts
function useIsLoading(): Ref<boolean, boolean>
```

Vue composable for checking if the Reflag client is loading.

This composable returns a boolean value that indicates whether the Reflag client is loading.
You can use this to check if the Reflag client is loading at any point in your application.
Initially, the value will be true until the client is initialized.

#### Returns <a href="#returns-3" id="returns-3"></a>

`Ref`\<`boolean`, `boolean`\>

#### Example <a href="#example-2" id="example-2"></a>

```ts
import { useIsLoading } from '@reflag/vue-sdk';

const isLoading = useIsLoading();

console.log(isLoading);
```

***

### useOnEvent() <a href="#useonevent" id="useonevent"></a>

```ts
function useOnEvent<THookType>(
   event: THookType,
   handler: (arg0: HookArgs[THookType]) => void,
   client?: ReflagClient): void
```

Vue composable for listening to Reflag client events.

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

`THookType` *extends* keyof [`HookArgs`](../browser-sdk/globals.md#hookargs)

</td>
</tr>
</tbody>
</table>

#### Parameters <a href="#parameters-1" id="parameters-1"></a>

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

`event`

</td>
<td>

`THookType`

</td>
<td>

The event to listen to.

</td>
</tr>
<tr>
<td>

`handler`

</td>
<td>

(`arg0`: [`HookArgs`](../browser-sdk/globals.md#hookargs)\[`THookType`\]) => `void`

</td>
<td>

The function to call when the event is triggered.

</td>
</tr>
<tr>
<td>

`client`?

</td>
<td>

[`ReflagClient`](../browser-sdk/globals.md#reflagclient)

</td>
<td>

The Reflag client to listen to. If not provided, the client will be retrieved from the context.

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-4" id="returns-4"></a>

`void`

#### Example <a href="#example-3" id="example-3"></a>

```ts
import { useOnEvent } from '@reflag/vue-sdk';

useOnEvent("flagsUpdated", () => {
  console.log("flags updated");
});
```

***

### useOptInFlags() <a href="#useoptinflags" id="useoptinflags"></a>

```ts
function useOptInFlags(): UseOptInFlagsResult
```

Vue composable for getting opt-in-enabled flags and their loading state for
the current context.

The loading state is only used with `ReflagBootstrappedProvider` while
opt-in metadata is fetched on demand. Regular providers load opt-in metadata
with the initial flags; use [useIsLoading](globals.md#useisloading) for their loading state.

If fetching opt-in metadata fails, loading ends without exposing an error.
Call `refresh()` on the client returned by [useClient](globals.md#useclient) to retry.

#### Returns <a href="#returns-5" id="returns-5"></a>

[`UseOptInFlagsResult`](globals.md#useoptinflagsresult)

***

### useRequestFeedback() <a href="#userequestfeedback" id="userequestfeedback"></a>

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => void
```

Vue composable for requesting user feedback.

This composable returns a function that can be used to trigger the feedback
collection flow with the Reflag SDK. You can use this to prompt users for
feedback at any point in your application.

#### Returns <a href="#returns-6" id="returns-6"></a>

`Function`

A function that requests feedback from the user. The function accepts:
  - `options`: An object containing feedback request options.

### Parameters <a href="#parameters-2" id="parameters-2"></a>

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

[`RequestFeedbackData`](../browser-sdk/globals.md#requestfeedbackdata)

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-7" id="returns-7"></a>

`void`

#### Example <a href="#example-4" id="example-4"></a>

```ts
import { useRequestFeedback } from '@reflag/vue-sdk';

const requestFeedback = useRequestFeedback();

// Request feedback from the user
requestFeedback({
  prompt: "How was your experience?",
  metadata: { page: "dashboard" }
});
```

***

### useSendFeedback() <a href="#usesendfeedback" id="usesendfeedback"></a>

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => Promise<
  | undefined
| Response>
```

Vue composable for sending feedback.

This composable returns a function that can be used to send feedback to the
Reflag SDK. You can use this to send feedback from your application.

#### Returns <a href="#returns-8" id="returns-8"></a>

`Function`

A function that sends feedback to the Reflag SDK. The function accepts:
  - `options`: An object containing feedback options.

### Parameters <a href="#parameters-3" id="parameters-3"></a>

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

[`UnassignedFeedback`](../browser-sdk/globals.md#unassignedfeedback)

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-9" id="returns-9"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

#### Example <a href="#example-5" id="example-5"></a>

```ts
import { useSendFeedback } from '@reflag/vue-sdk';

const sendFeedback = useSendFeedback();

// Send feedback from the user
sendFeedback({
  feedback: "I love this flag!",
  metadata: { page: "dashboard" }
});
```

***

### useSetOptIn() <a href="#usesetoptin" id="usesetoptin"></a>

```ts
function useSetOptIn(): (key: string, options: SetOptInOptions) => Promise<
  | undefined
| Response>
```

Vue composable for setting whether the current user or company has opted into a flag.

Check the returned Response's `ok` property and catch promise rejections.
HTTP failures return a non-OK Response; offline mode, invalid arguments, or
missing scoped context return undefined. Confirmation failures can reject
after the membership changed remotely. See [ReflagClient.setOptIn](../browser-sdk/globals.md#setoptin).

#### Returns <a href="#returns-10" id="returns-10"></a>

`Function`

### Parameters <a href="#parameters-4" id="parameters-4"></a>

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

`options`

</td>
<td>

[`SetOptInOptions`](globals.md#setoptinoptions)

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-11" id="returns-11"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### useTrack() <a href="#usetrack" id="usetrack"></a>

```ts
function useTrack(): (eventName: string, attributes?:
  | null
  | Record<string, any>) => Promise<
  | undefined
| Response>
```

Vue composable for tracking custom events.

This composable returns a function that can be used to track custom events
with the Reflag SDK.

#### Returns <a href="#returns-12" id="returns-12"></a>

`Function`

A function that tracks an event. The function accepts:
  - `eventName`: The name of the event to track.
  - `attributes`: (Optional) Additional attributes to associate with the event.

### Parameters <a href="#parameters-5" id="parameters-5"></a>

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

`eventName`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`attributes`?

</td>
<td>

 \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-13" id="returns-13"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

#### Example <a href="#example-6" id="example-6"></a>

```ts
import { useTrack } from '@reflag/vue-sdk';

const track = useTrack();

// Track a custom event
track('button_clicked', { buttonName: 'Start Huddles' });
```

***

### useUpdateCompany() <a href="#useupdatecompany" id="useupdatecompany"></a>

```ts
function useUpdateCompany(): (opts: {}) => Promise<void>
```

Vue composable for updating the company context.

This composable returns a function that can be used to update the company
context with the Reflag SDK. You can use this to update the company context
at any point in your application.

#### Returns <a href="#returns-14" id="returns-14"></a>

`Function`

A function that updates the company context. The function accepts:
  - `opts`: An object containing the company context to update.

### Parameters <a href="#parameters-6" id="parameters-6"></a>

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

\{\}

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-15" id="returns-15"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example <a href="#example-7" id="example-7"></a>

```ts
import { useUpdateCompany } from '@reflag/vue-sdk';

const updateCompany = useUpdateCompany();

// Update the company context
updateCompany({ id: "123", name: "Acme Inc." });
```

***

### useUpdateOtherContext() <a href="#useupdateothercontext" id="useupdateothercontext"></a>

```ts
function useUpdateOtherContext(): (opts: {}) => Promise<void>
```

Vue composable for updating the other context.

This composable returns a function that can be used to update the other
context with the Reflag SDK. You can use this to update the other context
at any point in your application.

#### Returns <a href="#returns-16" id="returns-16"></a>

`Function`

A function that updates the other context. The function accepts:
  - `opts`: An object containing the other context to update.

### Parameters <a href="#parameters-7" id="parameters-7"></a>

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

\{\}

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-17" id="returns-17"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example <a href="#example-8" id="example-8"></a>

```ts
import { useUpdateOtherContext } from '@reflag/vue-sdk';

const updateOtherContext = useUpdateOtherContext();

// Update the other context
updateOtherContext({ id: "123", name: "Acme Inc." });
```

***

### useUpdateUser() <a href="#useupdateuser" id="useupdateuser"></a>

```ts
function useUpdateUser(): (opts: {}) => Promise<void>
```

Vue composable for updating the user context.

This composable returns a function that can be used to update the user context
with the Reflag SDK. You can use this to update the user context at any point
in your application.

#### Returns <a href="#returns-18" id="returns-18"></a>

`Function`

A function that updates the user context. The function accepts:
  - `opts`: An object containing the user context to update.

### Parameters <a href="#parameters-8" id="parameters-8"></a>

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

\{\}

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-19" id="returns-19"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example <a href="#example-9" id="example-9"></a>

```ts
import { useUpdateUser } from '@reflag/vue-sdk';

const updateUser = useUpdateUser();

// Update the user context
updateUser({ id: "123", name: "John Doe" });
```

## References <a href="#references" id="references"></a>

### ReflagClientProvider <a href="#reflagclientprovider" id="reflagclientprovider"></a>

Renames and re-exports [ReflagBootstrappedProvider](globals.md#reflagbootstrappedprovider)

### ReflagProvider <a href="#reflagprovider" id="reflagprovider"></a>

Renames and re-exports [ReflagBootstrappedProvider](globals.md#reflagbootstrappedprovider)
