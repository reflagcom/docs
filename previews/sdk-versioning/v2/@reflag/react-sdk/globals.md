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
SDK v2 candidate documentation, not a published release. Installation commands target the planned major; matching SDK/CLI releases are still required. Generated from `@reflag/react-sdk@2.0.0-next.0` in [the JavaScript repository](https://github.com/reflagcom/javascript/tree/9f3a0ae027e386747a2d4cf7683a68dcab70b355/packages/react-sdk). SDK READMEs and code comments there remain authoritative.
{% endhint %}

# @reflag/react-sdk

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

Optional key/value registration; singular reads infer their type from defaults.

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
type BootstrappedFlags = BootstrappedState & {
  flags: RawFlags;
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

`flags`

</td>
<td>

[`RawFlags`](../browser-sdk/globals.md#rawflags)

</td>
</tr>
</tbody>
</table>

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

An opt-in-enabled flag for the generated React SDK flag definitions.

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

### RawFlags

```ts
type RawFlags = RawFlags;
```

Describes a collection of evaluated raw flags.

***

### ReflagBootstrappedProps

```ts
type ReflagBootstrappedProps = ReflagPropsBase & ReflagInitOptionsBase & {
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
type ReflagClientProviderProps = Omit<ReflagPropsBase, "debug" | "logger"> & {
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
type ReflagProps = ReflagPropsBase & ReflagInitOptionsBase & {
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

### ReflagPropsBase

```ts
type ReflagPropsBase = {
  children: ReactNode;
  debug: boolean;
  initialLoading: boolean;
  loadingComponent: ReactNode;
  logger: Logger;
  suspense: boolean;
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

<a id="children"></a> `children`?

</td>
<td>

`ReactNode`

</td>
<td>

The children to render after the client is initialized.

</td>
</tr>
<tr>
<td>

<a id="debug"></a> `debug`?

</td>
<td>

`boolean`

</td>
<td>

Set to `true` to enable debug logging to the console,

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

<a id="loadingcomponent"></a> `loadingComponent`?

</td>
<td>

`ReactNode`

</td>
<td>

A React component to show while the client is initializing.

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
<tr>
<td>

<a id="suspense"></a> `suspense`?

</td>
<td>

`boolean`

</td>
<td>

Set to `true` to make `useOptInFlags` suspend while its metadata loads.
Use `useFlagSuspense` for suspending direct-value reads.

</td>
</tr>
</tbody>
</table>

***

### RequestFeedbackOptions

```ts
type RequestFeedbackOptions = Omit<RequestFeedbackData, "flagKey" | "featureId">;
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

### StorageAdapter

```ts
type StorageAdapter = {
  getItem: Promise<null | string>;
  removeItem: Promise<void>;
  setItem: Promise<void>;
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

### UseOptInFlagsOptions

```ts
type UseOptInFlagsOptions = {
  suspense: boolean;
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

<a id="suspense-1"></a> `suspense`?

</td>
<td>

`boolean`

</td>
<td>

Override the provider suspense setting for this `useOptInFlags` call.
When true, `useOptInFlags` throws a promise while opt-in flags are loading.

</td>
</tr>
</tbody>
</table>

***

### UseOptInFlagsResult

```ts
type UseOptInFlagsResult = {
  flags: OptInFlag[];
  isLoading: boolean;
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

<a id="flags-1"></a> `flags`

</td>
<td>

[`OptInFlag`](globals.md#optinflag)[]

</td>
<td>

Opt-in-enabled flags for the current context.

</td>
</tr>
<tr>
<td>

<a id="isloading"></a> `isLoading`

</td>
<td>

`boolean`

</td>
<td>

Whether a bootstrapped provider is fetching opt-in metadata.

</td>
</tr>
</tbody>
</table>

## Functions

### ReflagBootstrappedProvider()

```ts
function ReflagBootstrappedProvider(__namedParameters: ReflagBootstrappedProps): Element
```

Bootstrapped Provider for the ReflagClient using pre-fetched flags.

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

`__namedParameters`

</td>
<td>

[`ReflagBootstrappedProps`](globals.md#reflagbootstrappedprops)

</td>
</tr>
</tbody>
</table>

#### Returns

`Element`

***

### ReflagClientProvider()

```ts
function ReflagClientProvider(__namedParameters: ReflagClientProviderProps): Element
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

`__namedParameters`

</td>
<td>

[`ReflagClientProviderProps`](globals.md#reflagclientproviderprops)

</td>
</tr>
</tbody>
</table>

#### Returns

`Element`

***

### ReflagProvider()

```ts
function ReflagProvider(__namedParameters: ReflagProps): Element
```

Provider for the ReflagClient.

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

`__namedParameters`

</td>
<td>

[`ReflagProps`](globals.md#reflagprops)

</td>
</tr>
</tbody>
</table>

#### Returns

`Element`

***

### useClient()

```ts
function useClient(): ReflagClient
```

Returns the current `ReflagClient` used by the `ReflagProvider`.

This is useful if you need to access the `ReflagClient` outside of the `ReflagProvider`.

#### Returns

[`ReflagClient`](../browser-sdk/globals.md#reflagclient)

The `ReflagClient`.

#### Example

```ts
import { useClient } from '@reflag/react-sdk';

function App() {
  const client = useClient();
  console.log(client.getContext());
}
```

***

### ~~useFeature()~~

#### Deprecated

Use useFlag.

#### Call Signature

```ts
function useFeature(key: string, defaultValue?: undefined): boolean
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

`boolean`

##### Deprecated

Use useFlag.

#### Call Signature

```ts
function useFeature<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

##### Deprecated

Use useFlag.

#### Call Signature

```ts
function useFeature<Default>(key: string, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

##### Deprecated

Use useFlag.

***

### useFlag()

#### Call Signature

```ts
function useFlag(key: string, defaultValue?: undefined): boolean
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

`boolean`

#### Call Signature

```ts
function useFlag<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

#### Call Signature

```ts
function useFlag<Default>(key: string, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

***

### useFlagSuspense()

#### Call Signature

```ts
function useFlagSuspense(key: string, defaultValue?: undefined): boolean
```

Wait for initialization, then read once. Missing flags use the default, not an endless suspension.

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

`boolean`

#### Call Signature

```ts
function useFlagSuspense<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

Wait for initialization, then read once. Missing flags use the default, not an endless suspension.

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

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

#### Call Signature

```ts
function useFlagSuspense<Default>(key: string, defaultValue: Default): FlagValueFromDefault<Default>
```

Wait for initialization, then read once. Missing flags use the default, not an endless suspension.

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

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

***

### useIsLoading()

```ts
function useIsLoading(): boolean
```

Returns a boolean indicating if the Reflag client is loading.
You can use this to check if the Reflag client is loading at any point in your application.
Initially, the value will be true until the client is initialized.

#### Returns

`boolean`

A boolean indicating if the Reflag client is loading.

#### Example

```ts
import { useIsLoading } from '@reflag/react-sdk';

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

Attach a callback handler to client events to act on changes. It automatically disposes itself on unmount.

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
import { useOnEvent } from '@reflag/react-sdk';

useOnEvent("flagsUpdated", () => {
  console.log("flags updated");
});
```

***

### useOptInFlags()

```ts
function useOptInFlags(options: UseOptInFlagsOptions): UseOptInFlagsResult
```

Returns opt-in-enabled flags and their loading state for the current context.

The loading state is only used with `ReflagBootstrappedProvider` while
opt-in metadata is fetched on demand. Regular providers load opt-in metadata
with the initial flags.
When suspense is enabled for the provider or this hook, it suspends instead
of returning a loading result.

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

`options`

</td>
<td>

[`UseOptInFlagsOptions`](globals.md#useoptinflagsoptions)

</td>
</tr>
</tbody>
</table>

#### Returns

[`UseOptInFlagsResult`](globals.md#useoptinflagsresult)

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => void
```

Returns a function to open up the feedback form
Note: When calling `useRequestFeedback`, user/company must already be set.

See [link](../../documents/browser-sdk/FEEDBACK.md) for more information

```ts
const requestFeedback = useRequestFeedback();
reflag.requestFeedback({
  flagKey: "file-uploads",
  title: "How satisfied are you with file uploads?",
});
```

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

***

### useSendFeedback()

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => Promise<
  | undefined
| Response>
```

Returns a function to manually send feedback collected from a user.
Note: When calling `useSendFeedback`, user/company must already be set.

See [link](../../documents/browser-sdk/FEEDBACK.md) for more information

```ts
const sendFeedback = useSendFeedback();
sendFeedback({
  flagKey: "huddle";
  question: "How did you like the new huddle feature?";
  score: 5;
  comment: "I loved it!";
});
```

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

***

### useSetOptIn()

```ts
function useSetOptIn(): (key: string, options: SetOptInOptions) => Promise<
  | undefined
| Response>
```

Returns a function to set whether the current user or company has opted into a flag.

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

Returns a function to send an event when a user performs an action
Note: When calling `useTrack`, user/company must already be set.

```ts
const track = useTrack();
track("Started Huddle", { button: "cta" });
```

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

***

### useUpdateCompany()

```ts
function useUpdateCompany(): (opts: {}) => Promise<void>
```

Returns a function to update the current company's information.
For example, if the company changed plan or opted into a beta-feature.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the company update.

```ts
const updateCompany = useUpdateCompany();
updateCompany({ plan: "enterprise" }).then(() => console.log("Flags updated"));
```

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

***

### useUpdateOtherContext()

```ts
function useUpdateOtherContext(): (opts: {}) => Promise<void>
```

Returns a function to update the "other" context information.
For example, if the user changed workspace, you can set the workspace id here.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the update to the "other" context.

```ts
const updateOtherContext = useUpdateOtherContext();
updateOtherContext({ workspaceId: newWorkspaceId })
  .then(() => console.log("Flags updated"));
```

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

***

### useUpdateUser()

```ts
function useUpdateUser(): (opts: {}) => Promise<void>
```

Returns a function to update the current user's information.
For example, if the user changed role or opted into a beta-feature.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the user update.

```ts
const updateUser = useUpdateUser();
updateUser({ optInHuddles: "true" }).then(() => console.log("Flags updated"));
```

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
