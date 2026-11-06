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
SDK v2 candidate documentation, not a published release. Installation commands target the planned major; matching SDK/CLI releases are still required. Generated from `@reflag/vue-sdk@2.0.0-next.0` in [the JavaScript repository](https://github.com/reflagcom/javascript/tree/9f3a0ae027e386747a2d4cf7683a68dcab70b355/packages/vue-sdk). SDK READMEs and code comments there remain authoritative.
{% endhint %}

# @reflag/vue-sdk

## Interfaces

### CheckEvent

A root read records selection identity, never its JSON payload.

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

<a id="action"></a> `action`

</td>
<td>

`"check"`

</td>
</tr>
<tr>
<td>

<a id="evalcontext"></a> `evalContext?`

</td>
<td>

[`ReflagContext`](../browser-sdk/globals.md#reflagcontext)

</td>
</tr>
<tr>
<td>

<a id="evalerrors"></a> `evalErrors?`

</td>
<td>

[`EvaluationError`](../browser-sdk/globals.md#evaluationerror)[]

</td>
</tr>
<tr>
<td>

<a id="evalmissingfields"></a> `evalMissingFields?`

</td>
<td>

`string`[]

</td>
</tr>
<tr>
<td>

<a id="evalresult"></a> `evalResult?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="evalruleresults"></a> `evalRuleResults?`

</td>
<td>

`boolean`[]

</td>
</tr>
<tr>
<td>

<a id="flagstateversion"></a> `flagStateVersion?`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

<a id="key"></a> `key`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="sourceversionid"></a> `sourceVersionId?`

</td>
<td>

`string`

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
[key: string]: ContextValue
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

### Flags

***

### UserContext

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.
Id should always be present so that it can be referenced to an existing user.

#### Indexable

```ts
[key: string]: ContextValue
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

### BootstrappedFlags

```ts
type BootstrappedFlags = BootstrappedState;
```

***

### FlagDefaultValue

```ts
type FlagDefaultValue =
  | null
  | boolean
  | number
  | string
  | readonly FlagDefaultValue[]
| {};
```

***

### FlagKey

```ts
type FlagKey = keyof Flags extends never ? string : Extract<keyof Flags, string>;
```

***

### FlagValue

```ts
type FlagValue =
  | null
  | boolean
  | number
  | string
  | FlagValue[]
| {};
```

***

### FlagValueFromDefault\<T\>

```ts
type FlagValueFromDefault<T> = T extends null ? FlagValue : T extends boolean ? boolean : T extends number ? number : T extends string ? string : T extends readonly infer Element[] ? [Element] extends [never] ? FlagValue[] : FlagValueFromDefault<Element>[] : T extends object ? { -readonly [Key in keyof T]: FlagValueFromDefault<T[Key]> } : never;
```

Widen literals and return mutable copies. Null requests arbitrary JSON.

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

`T`

</td>
</tr>
</tbody>
</table>

***

### OptInFlag

```ts
type OptInFlag = Omit<OptInFlag, "key"> & {
  key: FlagKey;
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

`key`

</td>
<td>

[`FlagKey`](globals.md#flagkey)

</td>
</tr>
</tbody>
</table>

***

### ReflagBaseProps

```ts
type ReflagBaseProps = {
  debug: boolean;
  initialLoading: boolean;
  logger: Logger;
};
```

**`Internal`**

Base props for the ReflagProvider and ReflagBootstrappedProvider.

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

### ReflagBootstrappedProps

```ts
type ReflagBootstrappedProps = ReflagInitOptionsBase & ReflagBaseProps & {
  flags: BootstrappedFlags;
};
```

Props for the ReflagBootstrappedProvider.

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

### ReflagClientProviderProps

```ts
type ReflagClientProviderProps = Omit<ReflagBaseProps, "debug" | "logger"> & {
  client: ReflagClient;
};
```

Props for the ReflagClientProvider.

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

### ReflagInitOptionsBase

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

### ReflagProps

```ts
type ReflagProps = ReflagInitOptionsBase & ReflagBaseProps & {
  company: CompanyContext;
  context: ReflagContext;
  otherContext: Record<string, string | number | undefined>;
  user: UserContext;
};
```

Props for the ReflagProvider.

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

### RequestFlagFeedbackOptions

```ts
type RequestFlagFeedbackOptions = Omit<RequestFeedbackData, "flagKey" | "featureId">;
```

***

### SetOptInOptions

```ts
type SetOptInOptions = {
  optedIn: boolean;
  scope: "user" | "company";
};
```

Represents a flag.

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

### TypedFlags

```ts
type TypedFlags = keyof Flags extends never ? Record<string, FlagValue | undefined> : { [Key in keyof Flags]: Flags[Key] | undefined };
```

***

### UseOptInFlagsResult

```ts
type UseOptInFlagsResult = {
  flags: ComputedRef<OptInFlag[]>;
  isLoading: ComputedRef<boolean>;
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

<a id="flags-1"></a> `flags`

</td>
<td>

`ComputedRef`\<[`OptInFlag`](globals.md#optinflag)[]\>

</td>
</tr>
<tr>
<td>

<a id="isloading"></a> `isLoading`

</td>
<td>

`ComputedRef`\<`boolean`\>

</td>
</tr>
</tbody>
</table>

## Variables

### default

```ts
default: {
  install: void;
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

<a id="install"></a> `install()`

</td>
<td>

`void`

</td>
</tr>
</tbody>
</table>

***

### ReflagBootstrappedProvider

```ts
const ReflagBootstrappedProvider: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
```

## Functions

### useClient()

```ts
function useClient(): ReflagClient
```

Vue composable for getting the Reflag client.

This composable returns the Reflag client. You can use this to get the Reflag
client at any point in your application.

#### Returns

[`ReflagClient`](../browser-sdk/globals.md#reflagclient)

The Reflag client.

#### Example

```ts
import { useClient } from '@reflag/vue-sdk';

const client = useClient();

console.log(client.getContext());
```

***

### useFlag()

#### Call Signature

```ts
function useFlag(key: string, defaultValue?: undefined): ShallowRef<boolean>
```

Reactive direct values: Boolean/false by default, or infer a positional JSON default.

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
<tr>
<td>

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

##### Returns

`ShallowRef`\<`boolean`\>

#### Call Signature

```ts
function useFlag<Key, Default>(key: Key, defaultValue: Default): ShallowRef<FlagValueFromDefault<Default>>
```

Reactive direct values: Boolean/false by default, or infer a positional JSON default.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Key` *extends* `string`

</td>
</tr>
<tr>
<td>

`Default` *extends* `object` \| [`FlagDefaultValue`](globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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

`Key`

</td>
</tr>
<tr>
<td>

`defaultValue`

</td>
<td>

`Default`

</td>
</tr>
</tbody>
</table>

##### Returns

`ShallowRef`\<[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>\>

#### Call Signature

```ts
function useFlag<Default>(key: string, defaultValue: Default): ShallowRef<FlagValueFromDefault<Default>>
```

Reactive direct values: Boolean/false by default, or infer a positional JSON default.

##### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Default` *extends* `object` \| [`FlagDefaultValue`](globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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
<tr>
<td>

`defaultValue`

</td>
<td>

`Default`

</td>
</tr>
</tbody>
</table>

##### Returns

`ShallowRef`\<[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>\>

***

### useIsLoading()

```ts
function useIsLoading(): Ref<boolean, boolean>
```

Vue composable for checking if the Reflag client is loading.

This composable returns a boolean value that indicates whether the Reflag client is loading.
You can use this to check if the Reflag client is loading at any point in your application.
Initially, the value will be true until the client is initialized.

#### Returns

`Ref`\<`boolean`, `boolean`\>

#### Example

```ts
import { useIsLoading } from '@reflag/vue-sdk';

const isLoading = useIsLoading();

console.log(isLoading);
```

***

### useOnEvent()

```ts
function useOnEvent<THookType>(
   event: THookType,
   handler: (arg0: HookArgs[THookType]) => void,
   client?: ReflagClient): void
```

Vue composable for listening to Reflag client events.

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

`THookType` *extends* keyof [`HookArgs`](../browser-sdk/globals.md#hookargs)

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

#### Returns

`void`

#### Example

```ts
import { useOnEvent } from '@reflag/vue-sdk';

useOnEvent("flagsUpdated", () => {
  console.log("flags updated");
});
```

***

### useOptInFlags()

```ts
function useOptInFlags(): UseOptInFlagsResult
```

Vue composable for getting opt-in-enabled flags and their loading state for
the current context.

The loading state is only used with `ReflagBootstrappedProvider` while
opt-in metadata is fetched on demand. Regular providers load opt-in metadata
with the initial flags.

#### Returns

[`UseOptInFlagsResult`](globals.md#useoptinflagsresult)

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => void
```

Vue composable for requesting user feedback.

This composable returns a function that can be used to trigger the feedback
collection flow with the Reflag SDK. You can use this to prompt users for
feedback at any point in your application.

#### Returns

`Function`

A function that requests feedback from the user. The function accepts:
  - `options`: An object containing feedback request options.

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

[`RequestFeedbackData`](../browser-sdk/globals.md#requestfeedbackdata)

</td>
</tr>
</tbody>
</table>

##### Returns

`void`

#### Example

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

### useSendFeedback()

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => Promise<
  | undefined
| Response>
```

Vue composable for sending feedback.

This composable returns a function that can be used to send feedback to the
Reflag SDK. You can use this to send feedback from your application.

#### Returns

`Function`

A function that sends feedback to the Reflag SDK. The function accepts:
  - `options`: An object containing feedback options.

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

[`UnassignedFeedback`](../browser-sdk/globals.md#unassignedfeedback)

</td>
</tr>
</tbody>
</table>

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

#### Example

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

### useSetOptIn()

```ts
function useSetOptIn(): (key: string, options: SetOptInOptions) => Promise<
  | undefined
| Response>
```

Vue composable for setting whether the current user or company has opted into a flag.

#### Returns

`Function`

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

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### useTrack()

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

#### Returns

`Function`

A function that tracks an event. The function accepts:
  - `eventName`: The name of the event to track.
  - `attributes`: (Optional) Additional attributes to associate with the event.

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

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

#### Example

```ts
import { useTrack } from '@reflag/vue-sdk';

const track = useTrack();

// Track a custom event
track('button_clicked', { buttonName: 'Start Huddles' });
```

***

### useUpdateCompany()

```ts
function useUpdateCompany(): (opts: {}) => Promise<void>
```

Vue composable for updating the company context.

This composable returns a function that can be used to update the company
context with the Reflag SDK. You can use this to update the company context
at any point in your application.

#### Returns

`Function`

A function that updates the company context. The function accepts:
  - `opts`: An object containing the company context to update.

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

\{\}

</td>
</tr>
</tbody>
</table>

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
import { useUpdateCompany } from '@reflag/vue-sdk';

const updateCompany = useUpdateCompany();

// Update the company context
updateCompany({ id: "123", name: "Acme Inc." });
```

***

### useUpdateOtherContext()

```ts
function useUpdateOtherContext(): (opts: {}) => Promise<void>
```

Vue composable for updating the other context.

This composable returns a function that can be used to update the other
context with the Reflag SDK. You can use this to update the other context
at any point in your application.

#### Returns

`Function`

A function that updates the other context. The function accepts:
  - `opts`: An object containing the other context to update.

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

\{\}

</td>
</tr>
</tbody>
</table>

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
import { useUpdateOtherContext } from '@reflag/vue-sdk';

const updateOtherContext = useUpdateOtherContext();

// Update the other context
updateOtherContext({ id: "123", name: "Acme Inc." });
```

***

### useUpdateUser()

```ts
function useUpdateUser(): (opts: {}) => Promise<void>
```

Vue composable for updating the user context.

This composable returns a function that can be used to update the user context
with the Reflag SDK. You can use this to update the user context at any point
in your application.

#### Returns

`Function`

A function that updates the user context. The function accepts:
  - `opts`: An object containing the user context to update.

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

\{\}

</td>
</tr>
</tbody>
</table>

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Example

```ts
import { useUpdateUser } from '@reflag/vue-sdk';

const updateUser = useUpdateUser();

// Update the user context
updateUser({ id: "123", name: "John Doe" });
```

## References

### ReflagClientProvider

Renames and re-exports [ReflagBootstrappedProvider](globals.md#reflagbootstrappedprovider)

### ReflagProvider

Renames and re-exports [ReflagBootstrappedProvider](globals.md#reflagbootstrappedprovider)
