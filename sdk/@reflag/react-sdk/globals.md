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

# @reflag/react-sdk <a href="#reflagreact-sdk" id="reflagreact-sdk"></a>

## Interfaces <a href="#interfaces" id="interfaces"></a>

### CheckEvent <a href="#checkevent" id="checkevent"></a>

A root read records selection identity, never its JSON payload.

#### Properties <a href="#properties" id="properties"></a>

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

[`ReflagContext`](../../../supported-languages/browser-sdk/globals.md#reflagcontext)

</td>
</tr>
<tr>
<td>

<a id="evalerrors"></a> `evalErrors?`

</td>
<td>

[`EvaluationError`](../../../supported-languages/browser-sdk/globals.md#evaluationerror)[]

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

### Flags <a href="#flags" id="flags"></a>

Optional key/value registration; singular reads infer their type from defaults.

***

### UserContext <a href="#usercontext" id="usercontext"></a>

Context is a set of key-value pairs.
This is used to determine if feature targeting matches and to track events.
Id should always be present so that it can be referenced to an existing user.

#### Indexable <a href="#indexable-1" id="indexable-1"></a>

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

[`RawFlags`](../../../supported-languages/browser-sdk/globals.md#rawflags)

</td>
</tr>
</tbody>
</table>

***

### FlagDefaultValue <a href="#flagdefaultvalue" id="flagdefaultvalue"></a>

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

### FlagKey <a href="#flagkey" id="flagkey"></a>

```ts
type FlagKey = keyof Flags extends never ? string : Extract<keyof Flags, string>;
```

***

### FlagValue <a href="#flagvalue" id="flagvalue"></a>

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

### FlagValueFromDefault\<T\> <a href="#flagvaluefromdefaultt" id="flagvaluefromdefaultt"></a>

```ts
type FlagValueFromDefault<T> = T extends null ? FlagValue : T extends boolean ? boolean : T extends number ? number : T extends string ? string : T extends readonly infer Element[] ? [Element] extends [never] ? FlagValue[] : FlagValueFromDefault<Element>[] : T extends object ? { -readonly [Key in keyof T]: FlagValueFromDefault<T[Key]> } : never;
```

Widen literals and return mutable copies. Null requests arbitrary JSON.

#### Type Parameters <a href="#type-parameters" id="type-parameters"></a>

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

### OptInFlag <a href="#optinflag" id="optinflag"></a>

```ts
type OptInFlag = Omit<OptInFlag, "key"> & {
  key: FlagKey;
};
```

An opt-in-enabled flag for the generated React SDK flag definitions.

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

`key`

</td>
<td>

[`FlagKey`](../../../supported-languages/react-sdk/globals.md#flagkey)

</td>
</tr>
</tbody>
</table>

***

### RawFlags <a href="#rawflags" id="rawflags"></a>

```ts
type RawFlags = RawFlags;
```

Describes a collection of evaluated raw flags.

***

### ReflagBootstrappedProps <a href="#reflagbootstrappedprops" id="reflagbootstrappedprops"></a>

```ts
type ReflagBootstrappedProps = ReflagPropsBase & ReflagInitOptionsBase & {
  flags: BootstrappedFlags;
};
```

Props for the ReflagBootstrappedProvider.

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

`flags`

</td>
<td>

[`BootstrappedFlags`](../../../supported-languages/react-sdk/globals.md#bootstrappedflags)

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
type ReflagClientProviderProps = Omit<ReflagPropsBase, "debug" | "logger"> & {
  client: ReflagClient;
};
```

Props for the ReflagClientProvider.

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

`client`

</td>
<td>

[`ReflagClient`](../../../supported-languages/browser-sdk/globals.md#reflagclient)

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
type ReflagProps = ReflagPropsBase & ReflagInitOptionsBase & {
  company: CompanyContext;
  context: ReflagContext;
  otherContext: Record<string, string | number | undefined>;
  user: UserContext;
};
```

Props for the ReflagProvider.

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

`company`?

</td>
<td>

[`CompanyContext`](../../../supported-languages/react-sdk/globals.md#companycontext)

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

[`ReflagContext`](../../../supported-languages/browser-sdk/globals.md#reflagcontext)

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

[`UserContext`](../../../supported-languages/react-sdk/globals.md#usercontext)

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

### ReflagPropsBase <a href="#reflagpropsbase" id="reflagpropsbase"></a>

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

[`Logger`](../../../supported-languages/browser-sdk/globals.md#logger)

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

### RequestFeedbackOptions <a href="#requestfeedbackoptions" id="requestfeedbackoptions"></a>

```ts
type RequestFeedbackOptions = Omit<RequestFeedbackData, "flagKey" | "featureId">;
```

***

### SetOptInOptions <a href="#setoptinoptions" id="setoptinoptions"></a>

```ts
type SetOptInOptions = {
  optedIn: boolean;
  scope: "user" | "company";
};
```

Represents a flag.

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

### StorageAdapter <a href="#storageadapter" id="storageadapter"></a>

```ts
type StorageAdapter = {
  getItem: Promise<null | string>;
  removeItem: Promise<void>;
  setItem: Promise<void>;
};
```

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

#### Type declaration <a href="#type-declaration-8" id="type-declaration-8"></a>

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

[`CompanyContext`](../../../supported-languages/react-sdk/globals.md#companycontext)

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

[`UserContext`](../../../supported-languages/react-sdk/globals.md#usercontext)

</td>
</tr>
</tbody>
</table>

***

### TypedFlags <a href="#typedflags" id="typedflags"></a>

```ts
type TypedFlags = keyof Flags extends never ? Record<string, FlagValue | undefined> : { [Key in keyof Flags]: Flags[Key] | undefined };
```

***

### UseOptInFlagsOptions <a href="#useoptinflagsoptions" id="useoptinflagsoptions"></a>

```ts
type UseOptInFlagsOptions = {
  suspense: boolean;
};
```

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

### UseOptInFlagsResult <a href="#useoptinflagsresult" id="useoptinflagsresult"></a>

```ts
type UseOptInFlagsResult = {
  flags: OptInFlag[];
  isLoading: boolean;
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

<a id="flags-1"></a> `flags`

</td>
<td>

[`OptInFlag`](../../../supported-languages/react-sdk/globals.md#optinflag)[]

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

## Functions <a href="#functions" id="functions"></a>

### ReflagBootstrappedProvider() <a href="#reflagbootstrappedprovider" id="reflagbootstrappedprovider"></a>

```ts
function ReflagBootstrappedProvider(__namedParameters: ReflagBootstrappedProps): Element
```

Bootstrapped Provider for the ReflagClient using pre-fetched flags.

#### Parameters <a href="#parameters" id="parameters"></a>

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

[`ReflagBootstrappedProps`](../../../supported-languages/react-sdk/globals.md#reflagbootstrappedprops)

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns" id="returns"></a>

`Element`

***

### ReflagClientProvider() <a href="#reflagclientprovider" id="reflagclientprovider"></a>

```ts
function ReflagClientProvider(__namedParameters: ReflagClientProviderProps): Element
```

#### Parameters <a href="#parameters-1" id="parameters-1"></a>

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

[`ReflagClientProviderProps`](../../../supported-languages/react-sdk/globals.md#reflagclientproviderprops)

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-1" id="returns-1"></a>

`Element`

***

### ReflagProvider() <a href="#reflagprovider" id="reflagprovider"></a>

```ts
function ReflagProvider(__namedParameters: ReflagProps): Element
```

Provider for the ReflagClient.

#### Parameters <a href="#parameters-2" id="parameters-2"></a>

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

[`ReflagProps`](../../../supported-languages/react-sdk/globals.md#reflagprops)

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-2" id="returns-2"></a>

`Element`

***

### useClient() <a href="#useclient" id="useclient"></a>

```ts
function useClient(): ReflagClient
```

Returns the current `ReflagClient` used by the `ReflagProvider`.

This is useful if you need to access the `ReflagClient` outside of the `ReflagProvider`.

#### Returns <a href="#returns-3" id="returns-3"></a>

[`ReflagClient`](../../../supported-languages/browser-sdk/globals.md#reflagclient)

The `ReflagClient`.

#### Example <a href="#example" id="example"></a>

```ts
import { useClient } from '@reflag/react-sdk';

function App() {
  const client = useClient();
  console.log(client.getContext());
}
```

***

### ~~useFeature()~~ <a href="#usefeature" id="usefeature"></a>

#### Deprecated <a href="#deprecated" id="deprecated"></a>

Use useFlag.

#### Call Signature <a href="#call-signature" id="call-signature"></a>

```ts
function useFeature(key: string, defaultValue?: undefined): boolean
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

### Returns <a href="#returns-4" id="returns-4"></a>

`boolean`

### Deprecated <a href="#deprecated-1" id="deprecated-1"></a>

Use useFlag.

#### Call Signature <a href="#call-signature-1" id="call-signature-1"></a>

```ts
function useFeature<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

### Type Parameters <a href="#type-parameters-1" id="type-parameters-1"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/react-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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

### Returns <a href="#returns-5" id="returns-5"></a>

[`FlagValueFromDefault`](../../../supported-languages/react-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

### Deprecated <a href="#deprecated-2" id="deprecated-2"></a>

Use useFlag.

#### Call Signature <a href="#call-signature-2" id="call-signature-2"></a>

```ts
function useFeature<Default>(key: string, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

### Type Parameters <a href="#type-parameters-2" id="type-parameters-2"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/react-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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

### Returns <a href="#returns-6" id="returns-6"></a>

[`FlagValueFromDefault`](../../../supported-languages/react-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

### Deprecated <a href="#deprecated-3" id="deprecated-3"></a>

Use useFlag.

***

### useFlag() <a href="#useflag" id="useflag"></a>

#### Call Signature <a href="#call-signature-3" id="call-signature-3"></a>

```ts
function useFlag(key: string, defaultValue?: undefined): boolean
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

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

### Returns <a href="#returns-7" id="returns-7"></a>

`boolean`

#### Call Signature <a href="#call-signature-4" id="call-signature-4"></a>

```ts
function useFlag<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

### Type Parameters <a href="#type-parameters-3" id="type-parameters-3"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/react-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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

### Returns <a href="#returns-8" id="returns-8"></a>

[`FlagValueFromDefault`](../../../supported-languages/react-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

#### Call Signature <a href="#call-signature-5" id="call-signature-5"></a>

```ts
function useFlag<Default>(key: string, defaultValue: Default): FlagValueFromDefault<Default>
```

Boolean-first, non-suspending reads. Supply a positional default for JSON values.

### Type Parameters <a href="#type-parameters-4" id="type-parameters-4"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/react-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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

### Returns <a href="#returns-9" id="returns-9"></a>

[`FlagValueFromDefault`](../../../supported-languages/react-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

***

### useFlagSuspense() <a href="#useflagsuspense" id="useflagsuspense"></a>

#### Call Signature <a href="#call-signature-6" id="call-signature-6"></a>

```ts
function useFlagSuspense(key: string, defaultValue?: undefined): boolean
```

Wait for initialization, then read once. Missing flags use the default, not an endless suspension.

### Parameters <a href="#parameters-9" id="parameters-9"></a>

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

### Returns <a href="#returns-10" id="returns-10"></a>

`boolean`

#### Call Signature <a href="#call-signature-7" id="call-signature-7"></a>

```ts
function useFlagSuspense<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

Wait for initialization, then read once. Missing flags use the default, not an endless suspension.

### Type Parameters <a href="#type-parameters-5" id="type-parameters-5"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/react-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

### Parameters <a href="#parameters-10" id="parameters-10"></a>

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

### Returns <a href="#returns-11" id="returns-11"></a>

[`FlagValueFromDefault`](../../../supported-languages/react-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

#### Call Signature <a href="#call-signature-8" id="call-signature-8"></a>

```ts
function useFlagSuspense<Default>(key: string, defaultValue: Default): FlagValueFromDefault<Default>
```

Wait for initialization, then read once. Missing flags use the default, not an endless suspension.

### Type Parameters <a href="#type-parameters-6" id="type-parameters-6"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/react-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

### Parameters <a href="#parameters-11" id="parameters-11"></a>

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

### Returns <a href="#returns-12" id="returns-12"></a>

[`FlagValueFromDefault`](../../../supported-languages/react-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

***

### useIsLoading() <a href="#useisloading" id="useisloading"></a>

```ts
function useIsLoading(): boolean
```

Returns a boolean indicating if the Reflag client is loading.
You can use this to check if the Reflag client is loading at any point in your application.
Initially, the value will be true until the client is initialized.

#### Returns <a href="#returns-13" id="returns-13"></a>

`boolean`

A boolean indicating if the Reflag client is loading.

#### Example <a href="#example-1" id="example-1"></a>

```ts
import { useIsLoading } from '@reflag/react-sdk';

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

Attach a callback handler to client events to act on changes. It automatically disposes itself on unmount.

#### Type Parameters <a href="#type-parameters-7" id="type-parameters-7"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`THookType` *extends* keyof [`HookArgs`](../../../supported-languages/browser-sdk/globals.md#hookargs)

</td>
</tr>
</tbody>
</table>

#### Parameters <a href="#parameters-12" id="parameters-12"></a>

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

(`arg0`: [`HookArgs`](../../../supported-languages/browser-sdk/globals.md#hookargs)\[`THookType`\]) => `void`

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

[`ReflagClient`](../../../supported-languages/browser-sdk/globals.md#reflagclient)

</td>
<td>

The Reflag client to listen to. If not provided, the client will be retrieved from the context.

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-14" id="returns-14"></a>

`void`

#### Example <a href="#example-2" id="example-2"></a>

```ts
import { useOnEvent } from '@reflag/react-sdk';

useOnEvent("flagsUpdated", () => {
  console.log("flags updated");
});
```

***

### useOptInFlags() <a href="#useoptinflags" id="useoptinflags"></a>

```ts
function useOptInFlags(options: UseOptInFlagsOptions): UseOptInFlagsResult
```

Returns opt-in-enabled flags and their loading state for the current context.

The loading state is only used with `ReflagBootstrappedProvider` while
opt-in metadata is fetched on demand. Regular providers load opt-in metadata
with the initial flags.
When suspense is enabled for the provider or this hook, it suspends instead
of returning a loading result.

#### Parameters <a href="#parameters-13" id="parameters-13"></a>

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

[`UseOptInFlagsOptions`](../../../supported-languages/react-sdk/globals.md#useoptinflagsoptions)

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-15" id="returns-15"></a>

[`UseOptInFlagsResult`](../../../supported-languages/react-sdk/globals.md#useoptinflagsresult)

***

### useRequestFeedback() <a href="#userequestfeedback" id="userequestfeedback"></a>

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => void
```

Returns a function to open up the feedback form
Note: When calling `useRequestFeedback`, user/company must already be set.

See [link](../../../supported-languages/browser-sdk/feedback.md) for more information

```ts
const requestFeedback = useRequestFeedback();
reflag.requestFeedback({
  flagKey: "file-uploads",
  title: "How satisfied are you with file uploads?",
});
```

#### Returns <a href="#returns-16" id="returns-16"></a>

`Function`

### Parameters <a href="#parameters-14" id="parameters-14"></a>

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

[`RequestFeedbackData`](../../../supported-languages/browser-sdk/globals.md#requestfeedbackdata)

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-17" id="returns-17"></a>

`void`

***

### useSendFeedback() <a href="#usesendfeedback" id="usesendfeedback"></a>

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => Promise<
  | undefined
| Response>
```

Returns a function to manually send feedback collected from a user.
Note: When calling `useSendFeedback`, user/company must already be set.

See [link](../../../supported-languages/browser-sdk/feedback.md) for more information

```ts
const sendFeedback = useSendFeedback();
sendFeedback({
  flagKey: "huddle";
  question: "How did you like the new huddle feature?";
  score: 5;
  comment: "I loved it!";
});
```

#### Returns <a href="#returns-18" id="returns-18"></a>

`Function`

### Parameters <a href="#parameters-15" id="parameters-15"></a>

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

[`UnassignedFeedback`](../../../supported-languages/browser-sdk/globals.md#unassignedfeedback)

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-19" id="returns-19"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### useSetOptIn() <a href="#usesetoptin" id="usesetoptin"></a>

```ts
function useSetOptIn(): (key: string, options: SetOptInOptions) => Promise<
  | undefined
| Response>
```

Returns a function to set whether the current user or company has opted into a flag.

#### Returns <a href="#returns-20" id="returns-20"></a>

`Function`

### Parameters <a href="#parameters-16" id="parameters-16"></a>

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

[`SetOptInOptions`](../../../supported-languages/react-sdk/globals.md#setoptinoptions)

</td>
</tr>
</tbody>
</table>

### Returns <a href="#returns-21" id="returns-21"></a>

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

Returns a function to send an event when a user performs an action
Note: When calling `useTrack`, user/company must already be set.

```ts
const track = useTrack();
track("Started Huddle", { button: "cta" });
```

#### Returns <a href="#returns-22" id="returns-22"></a>

`Function`

### Parameters <a href="#parameters-17" id="parameters-17"></a>

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

### Returns <a href="#returns-23" id="returns-23"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### useUpdateCompany() <a href="#useupdatecompany" id="useupdatecompany"></a>

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

#### Returns <a href="#returns-24" id="returns-24"></a>

`Function`

### Parameters <a href="#parameters-18" id="parameters-18"></a>

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

### Returns <a href="#returns-25" id="returns-25"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### useUpdateOtherContext() <a href="#useupdateothercontext" id="useupdateothercontext"></a>

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

#### Returns <a href="#returns-26" id="returns-26"></a>

`Function`

### Parameters <a href="#parameters-19" id="parameters-19"></a>

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

### Returns <a href="#returns-27" id="returns-27"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### useUpdateUser() <a href="#useupdateuser" id="useupdateuser"></a>

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

#### Returns <a href="#returns-28" id="returns-28"></a>

`Function`

### Parameters <a href="#parameters-20" id="parameters-20"></a>

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

### Returns <a href="#returns-29" id="returns-29"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Using v1? [Legacy docs](../../../legacy/v1/react-sdk/globals.md) · [Upgrade guide](../../../supported-languages/migrating-from-v1.md).
