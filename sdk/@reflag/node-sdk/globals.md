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

# @reflag/node-sdk <a href="#reflagnode-sdk" id="reflagnode-sdk"></a>

This page covers SDK v2.

## Classes <a href="#classes" id="classes"></a>

### BoundReflagClient <a href="#boundreflagclient" id="boundreflagclient"></a>

Context-bound reads have the same direct-value and immediate-check semantics.

### Constructors <a href="#constructors" id="constructors"></a>

### new BoundReflagClient() <a href="#new-boundreflagclient" id="new-boundreflagclient"></a>

```ts
new BoundReflagClient(client: ReflagClient, options: ContextWithTracking): BoundReflagClient
```

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

`client`

</td>
<td>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient)

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns" id="returns"></a>

[`BoundReflagClient`](../../../supported-languages/node-sdk/globals.md#boundreflagclient)

#### Accessors <a href="#accessors" id="accessors"></a>

### company <a href="#company" id="company"></a>

###### Get Signature <a href="#get-signature" id="get-signature"></a>

```ts
get company():
  | undefined
  | {
[key: string]: any;   avatar: string;
  id: undefined | IdType;
  name: string;
}
```

###### Returns <a href="#returns-1" id="returns-1"></a>

  \| `undefined`
  \| \{
`[key: string]`: `any`;   `avatar`: `string`;
  `id`: `undefined` \| [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype);
  `name`: `string`;
 \}

### otherContext <a href="#othercontext" id="othercontext"></a>

###### Get Signature <a href="#get-signature-1" id="get-signature-1"></a>

```ts
get otherContext():
  | undefined
| Record<string, any>
```

###### Returns <a href="#returns-2" id="returns-2"></a>

  \| `undefined`
  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

### user <a href="#user" id="user"></a>

###### Get Signature <a href="#get-signature-2" id="get-signature-2"></a>

```ts
get user():
  | undefined
  | {
[key: string]: any;   avatar: string;
  email: string;
  id: undefined | IdType;
  name: string;
}
```

###### Returns <a href="#returns-3" id="returns-3"></a>

  \| `undefined`
  \| \{
`[key: string]`: `any`;   `avatar`: `string`;
  `email`: `string`;
  `id`: `undefined` \| [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype);
  `name`: `string`;
 \}

#### Methods <a href="#methods" id="methods"></a>

### bindClient() <a href="#bindclient" id="bindclient"></a>

```ts
bindClient(next: ContextWithTracking): BoundReflagClient
```

###### Parameters <a href="#parameters-1" id="parameters-1"></a>

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

`next`

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-4" id="returns-4"></a>

[`BoundReflagClient`](../../../supported-languages/node-sdk/globals.md#boundreflagclient)

### flush() <a href="#flush" id="flush"></a>

```ts
flush(): Promise<void>
```

###### Returns <a href="#returns-5" id="returns-5"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### getFlag() <a href="#getflag" id="getflag"></a>

###### Call Signature <a href="#call-signature" id="call-signature"></a>

```ts
getFlag<Key>(key: Key, defaultValue?: undefined): boolean
```

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

`Key` *extends* `string`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-2" id="parameters-2"></a>

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

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-6" id="returns-6"></a>

`boolean`

###### Call Signature <a href="#call-signature-1" id="call-signature-1"></a>

```ts
getFlag<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

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

`Key` *extends* `string`

</td>
</tr>
<tr>
<td>

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/node-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

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

###### Returns <a href="#returns-7" id="returns-7"></a>

[`FlagValueFromDefault`](../../../supported-languages/node-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

### getFlagRemote() <a href="#getflagremote" id="getflagremote"></a>

###### Call Signature <a href="#call-signature-2" id="call-signature-2"></a>

```ts
getFlagRemote<Key>(key: Key, defaultValue?: undefined): Promise<boolean>
```

###### Type Parameters <a href="#type-parameters-2" id="type-parameters-2"></a>

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
</tbody>
</table>

###### Parameters <a href="#parameters-4" id="parameters-4"></a>

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

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-8" id="returns-8"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

###### Call Signature <a href="#call-signature-3" id="call-signature-3"></a>

```ts
getFlagRemote<Key, Default>(key: Key, defaultValue: Default): Promise<FlagValueFromDefault<Default>>
```

###### Type Parameters <a href="#type-parameters-3" id="type-parameters-3"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/node-sdk/globals.md#flagdefaultvalue)

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

###### Returns <a href="#returns-9" id="returns-9"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagValueFromDefault`](../../../supported-languages/node-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>\>

### getFlags() <a href="#getflags" id="getflags"></a>

```ts
getFlags(): Record<string, undefined | FlagValue>
```

###### Returns <a href="#returns-10" id="returns-10"></a>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>

### getFlagsForBootstrap() <a href="#getflagsforbootstrap" id="getflagsforbootstrap"></a>

```ts
getFlagsForBootstrap(): BootstrappedFlags
```

###### Returns <a href="#returns-11" id="returns-11"></a>

[`BootstrappedFlags`](../../../supported-languages/node-sdk/globals.md#bootstrappedflags)

### getFlagsRemote() <a href="#getflagsremote" id="getflagsremote"></a>

```ts
getFlagsRemote(): Promise<Record<string, undefined | FlagValue>>
```

###### Returns <a href="#returns-12" id="returns-12"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\>

### refreshFlags() <a href="#refreshflags" id="refreshflags"></a>

```ts
refreshFlags(waitForVersion?: number): Promise<void>
```

###### Parameters <a href="#parameters-6" id="parameters-6"></a>

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

`waitForVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-13" id="returns-13"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### track() <a href="#track" id="track"></a>

```ts
track(event: string, options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

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

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions) & \{ `companyId`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-14" id="returns-14"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### EdgeClient <a href="#edgeclient" id="edgeclient"></a>

The EdgeClient is ReflagClient pre-configured to be used in edge runtimes, like
Cloudflare Workers.

It always uses `flagsSyncMode: "in-request"`. Refresh fetch starts are
throttled to at most once per second. A `refreshFlags()` call made during
that throttle window only records pending refresh work, so the call may
resolve before the fetch runs. That pending refresh is executed on the next
request/access or `refreshFlags()` call after the window expires.

#### Example <a href="#example" id="example"></a>

```ts
// set the REFLAG_SECRET_KEY environment variable or pass the secret key in the constructor
const client = new EdgeClient();

// evaluate a flag
const context = {
  user: { id: "user-id" },
  company: { id: "company-id" },
}
const { isEnabled } = client.getFlag(context, "flag-key");

```

#### Extends <a href="#extends" id="extends"></a>

- [`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient)

#### Constructors <a href="#constructors-1" id="constructors-1"></a>

### new EdgeClient() <a href="#new-edgeclient" id="new-edgeclient"></a>

```ts
new EdgeClient(options: EdgeClientOptions): EdgeClient
```

###### Parameters <a href="#parameters-8" id="parameters-8"></a>

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

[`EdgeClientOptions`](../../../supported-languages/node-sdk/globals.md#edgeclientoptions)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-15" id="returns-15"></a>

[`EdgeClient`](../../../supported-languages/node-sdk/globals.md#edgeclient)

###### Overrides <a href="#overrides" id="overrides"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`constructor`](../../../supported-languages/node-sdk/globals.md#constructors)

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

<a id="httpclient"></a> `httpClient`

</td>
<td>

`readonly`

</td>
<td>

[`HttpClient`](../../../supported-languages/node-sdk/globals.md#httpclient)

</td>
</tr>
<tr>
<td>

<a id="logger"></a> `logger`

</td>
<td>

`readonly`

</td>
<td>

[`Logger`](../../../supported-languages/node-sdk/globals.md#logger)

</td>
</tr>
</tbody>
</table>

#### Accessors <a href="#accessors-1" id="accessors-1"></a>

### flagOverrides <a href="#flagoverrides-1" id="flagoverrides-1"></a>

###### Set Signature <a href="#set-signature" id="set-signature"></a>

```ts
set flagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
```

###### Deprecated <a href="#deprecated" id="deprecated"></a>

Use setFlagOverrides.

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-16" id="returns-16"></a>

`void`

###### Inherited from <a href="#inherited-from" id="inherited-from"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`flagOverrides`](../../../supported-languages/node-sdk/globals.md#flagoverrides)

#### Methods <a href="#methods-1" id="methods-1"></a>

### bindClient() <a href="#bindclient-1" id="bindclient-1"></a>

```ts
bindClient(options: ContextWithTracking): BoundReflagClient
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

`options`

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-17" id="returns-17"></a>

[`BoundReflagClient`](../../../supported-languages/node-sdk/globals.md#boundreflagclient)

###### Inherited from <a href="#inherited-from-1" id="inherited-from-1"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`bindClient`](../../../supported-languages/node-sdk/globals.md#bindclient)

### clearFlagOverrides() <a href="#clearflagoverrides" id="clearflagoverrides"></a>

```ts
clearFlagOverrides(): void
```

###### Returns <a href="#returns-18" id="returns-18"></a>

`void`

###### Inherited from <a href="#inherited-from-2" id="inherited-from-2"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`clearFlagOverrides`](../../../supported-languages/node-sdk/globals.md#clearflagoverrides)

### destroy() <a href="#destroy" id="destroy"></a>

```ts
destroy(): void
```

###### Returns <a href="#returns-19" id="returns-19"></a>

`void`

###### Inherited from <a href="#inherited-from-3" id="inherited-from-3"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`destroy`](../../../supported-languages/node-sdk/globals.md#destroy)

### flush() <a href="#flush-1" id="flush-1"></a>

```ts
flush(): Promise<void>
```

###### Returns <a href="#returns-20" id="returns-20"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from <a href="#inherited-from-4" id="inherited-from-4"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`flush`](../../../supported-languages/node-sdk/globals.md#flush)

### getFlag() <a href="#getflag-1" id="getflag-1"></a>

###### Call Signature <a href="#call-signature-4" id="call-signature-4"></a>

```ts
getFlag<Key>(
   options: ContextWithTracking,
   key: Key,
   defaultValue?: undefined): boolean
```

Read a Boolean with an implicit false default, or supply an explicit value default.

###### Type Parameters <a href="#type-parameters-4" id="type-parameters-4"></a>

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
</tbody>
</table>

###### Parameters <a href="#parameters-11" id="parameters-11"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
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

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-21" id="returns-21"></a>

`boolean`

###### Inherited from <a href="#inherited-from-5" id="inherited-from-5"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlag`](../../../supported-languages/node-sdk/globals.md#getflag)

###### Call Signature <a href="#call-signature-5" id="call-signature-5"></a>

```ts
getFlag<Key, Default>(
   options: ContextWithTracking,
   key: Key,
defaultValue: Default): FlagValueFromDefault<Default>
```

Read a Boolean with an implicit false default, or supply an explicit value default.

###### Type Parameters <a href="#type-parameters-5" id="type-parameters-5"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/node-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-12" id="parameters-12"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
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

###### Returns <a href="#returns-22" id="returns-22"></a>

[`FlagValueFromDefault`](../../../supported-languages/node-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

###### Inherited from <a href="#inherited-from-6" id="inherited-from-6"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlag`](../../../supported-languages/node-sdk/globals.md#getflag)

### getFlagDefinitions() <a href="#getflagdefinitions" id="getflagdefinitions"></a>

```ts
getFlagDefinitions(): FlagCollection
```

Complete definitions, including segments needed for offline evaluation.

###### Returns <a href="#returns-23" id="returns-23"></a>

[`FlagCollection`](../../../supported-languages/node-sdk/globals.md#flagcollection)

###### Inherited from <a href="#inherited-from-7" id="inherited-from-7"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlagDefinitions`](../../../supported-languages/node-sdk/globals.md#getflagdefinitions)

### getFlagRemote() <a href="#getflagremote-1" id="getflagremote-1"></a>

###### Call Signature <a href="#call-signature-6" id="call-signature-6"></a>

```ts
getFlagRemote<Key>(
   key: Key,
   defaultValue?: undefined,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<boolean>
```

###### Type Parameters <a href="#type-parameters-6" id="type-parameters-6"></a>

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
</tbody>
</table>

###### Parameters <a href="#parameters-13" id="parameters-13"></a>

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

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-24" id="returns-24"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

###### Inherited from <a href="#inherited-from-8" id="inherited-from-8"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlagRemote`](../../../supported-languages/node-sdk/globals.md#getflagremote)

###### Call Signature <a href="#call-signature-7" id="call-signature-7"></a>

```ts
getFlagRemote<Key, Default>(
   key: Key,
   defaultValue: Default,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<FlagValueFromDefault<Default>>
```

###### Type Parameters <a href="#type-parameters-7" id="type-parameters-7"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/node-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-14" id="parameters-14"></a>

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
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-25" id="returns-25"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagValueFromDefault`](../../../supported-languages/node-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>\>

###### Inherited from <a href="#inherited-from-9" id="inherited-from-9"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlagRemote`](../../../supported-languages/node-sdk/globals.md#getflagremote)

### getFlags() <a href="#getflags-1" id="getflags-1"></a>

```ts
getFlags(options: ContextWithTracking): Record<string, undefined | FlagValue>
```

Return all values and immediately register checks for the returned roots.

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

`options`

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-26" id="returns-26"></a>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>

###### Inherited from <a href="#inherited-from-10" id="inherited-from-10"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlags`](../../../supported-languages/node-sdk/globals.md#getflags)

### getFlagsForBootstrap() <a href="#getflagsforbootstrap-1" id="getflagsforbootstrap-1"></a>

```ts
getFlagsForBootstrap(options: ContextWithTracking): BootstrappedFlags
```

Get public flag data for a browser without recording flag checks.
Secret flags can still be read on the server and used by public flags.
Flags without `secret: false` are left out. Dependency names are removed
from error details. Include only browser-safe attributes in the context.

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

`options`

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-27" id="returns-27"></a>

[`BootstrappedFlags`](../../../supported-languages/node-sdk/globals.md#bootstrappedflags)

###### Inherited from <a href="#inherited-from-11" id="inherited-from-11"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlagsForBootstrap`](../../../supported-languages/node-sdk/globals.md#getflagsforbootstrap)

### getFlagsRemote() <a href="#getflagsremote-1" id="getflagsremote-1"></a>

```ts
getFlagsRemote(
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<Record<string, undefined | FlagValue>>
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

`userId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-28" id="returns-28"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\>

###### Inherited from <a href="#inherited-from-12" id="inherited-from-12"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`getFlagsRemote`](../../../supported-languages/node-sdk/globals.md#getflagsremote)

### initialize() <a href="#initialize" id="initialize"></a>

```ts
initialize(): Promise<void>
```

###### Returns <a href="#returns-29" id="returns-29"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from <a href="#inherited-from-13" id="inherited-from-13"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`initialize`](../../../supported-languages/node-sdk/globals.md#initialize)

### pushFlagOverrides() <a href="#pushflagoverrides" id="pushflagoverrides"></a>

```ts
pushFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): () => void
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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-30" id="returns-30"></a>

`Function`

###### Returns <a href="#returns-31" id="returns-31"></a>

`void`

###### Inherited from <a href="#inherited-from-14" id="inherited-from-14"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`pushFlagOverrides`](../../../supported-languages/node-sdk/globals.md#pushflagoverrides)

### refreshFlags() <a href="#refreshflags-1" id="refreshflags-1"></a>

```ts
refreshFlags(waitForVersion?: number): Promise<void>
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

`waitForVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-32" id="returns-32"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from <a href="#inherited-from-15" id="inherited-from-15"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`refreshFlags`](../../../supported-languages/node-sdk/globals.md#refreshflags)

### setFlagOverrides() <a href="#setflagoverrides" id="setflagoverrides"></a>

```ts
setFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-33" id="returns-33"></a>

`void`

###### Inherited from <a href="#inherited-from-16" id="inherited-from-16"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`setFlagOverrides`](../../../supported-languages/node-sdk/globals.md#setflagoverrides)

### track() <a href="#track-1" id="track-1"></a>

```ts
track(
   userId: IdType,
   event: string,
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

###### Parameters <a href="#parameters-21" id="parameters-21"></a>

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

`userId`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions) & \{ `companyId`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-34" id="returns-34"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from <a href="#inherited-from-17" id="inherited-from-17"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`track`](../../../supported-languages/node-sdk/globals.md#track)

### updateCompany() <a href="#updatecompany" id="updatecompany"></a>

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

###### Parameters <a href="#parameters-22" id="parameters-22"></a>

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

`companyId`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions) & \{ `userId`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-35" id="returns-35"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from <a href="#inherited-from-18" id="inherited-from-18"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`updateCompany`](../../../supported-languages/node-sdk/globals.md#updatecompany)

### updateUser() <a href="#updateuser" id="updateuser"></a>

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
```

###### Parameters <a href="#parameters-23" id="parameters-23"></a>

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

`userId`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-36" id="returns-36"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from <a href="#inherited-from-19" id="inherited-from-19"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient).[`updateUser`](../../../supported-languages/node-sdk/globals.md#updateuser)

***

### ReflagClient <a href="#reflagclient" id="reflagclient"></a>

V2 client: flag reads return values and immediately register checks.

#### Extended by <a href="#extended-by" id="extended-by"></a>

- [`EdgeClient`](../../../supported-languages/node-sdk/globals.md#edgeclient)

#### Constructors <a href="#constructors-2" id="constructors-2"></a>

### new ReflagClient() <a href="#new-reflagclient" id="new-reflagclient"></a>

```ts
new ReflagClient(options: ClientOptions): ReflagClient
```

###### Parameters <a href="#parameters-24" id="parameters-24"></a>

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

[`ClientOptions`](../../../supported-languages/node-sdk/globals.md#clientoptions)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-37" id="returns-37"></a>

[`ReflagClient`](../../../supported-languages/node-sdk/globals.md#reflagclient)

#### Properties <a href="#properties-1" id="properties-1"></a>

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

<a id="httpclient-1"></a> `httpClient`

</td>
<td>

`readonly`

</td>
<td>

[`HttpClient`](../../../supported-languages/node-sdk/globals.md#httpclient)

</td>
</tr>
<tr>
<td>

<a id="logger-1"></a> `logger`

</td>
<td>

`readonly`

</td>
<td>

[`Logger`](../../../supported-languages/node-sdk/globals.md#logger)

</td>
</tr>
</tbody>
</table>

#### Accessors <a href="#accessors-2" id="accessors-2"></a>

### flagOverrides <a href="#flagoverrides-2" id="flagoverrides-2"></a>

###### Set Signature <a href="#set-signature-1" id="set-signature-1"></a>

```ts
set flagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
```

###### Deprecated <a href="#deprecated-1" id="deprecated-1"></a>

Use setFlagOverrides.

###### Parameters <a href="#parameters-25" id="parameters-25"></a>

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-38" id="returns-38"></a>

`void`

#### Methods <a href="#methods-2" id="methods-2"></a>

### bindClient() <a href="#bindclient-2" id="bindclient-2"></a>

```ts
bindClient(options: ContextWithTracking): BoundReflagClient
```

###### Parameters <a href="#parameters-26" id="parameters-26"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-39" id="returns-39"></a>

[`BoundReflagClient`](../../../supported-languages/node-sdk/globals.md#boundreflagclient)

### clearFlagOverrides() <a href="#clearflagoverrides-1" id="clearflagoverrides-1"></a>

```ts
clearFlagOverrides(): void
```

###### Returns <a href="#returns-40" id="returns-40"></a>

`void`

### destroy() <a href="#destroy-1" id="destroy-1"></a>

```ts
destroy(): void
```

###### Returns <a href="#returns-41" id="returns-41"></a>

`void`

### flush() <a href="#flush-2" id="flush-2"></a>

```ts
flush(): Promise<void>
```

###### Returns <a href="#returns-42" id="returns-42"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### getFlag() <a href="#getflag-2" id="getflag-2"></a>

###### Call Signature <a href="#call-signature-8" id="call-signature-8"></a>

```ts
getFlag<Key>(
   options: ContextWithTracking,
   key: Key,
   defaultValue?: undefined): boolean
```

Read a Boolean with an implicit false default, or supply an explicit value default.

###### Type Parameters <a href="#type-parameters-8" id="type-parameters-8"></a>

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
</tbody>
</table>

###### Parameters <a href="#parameters-27" id="parameters-27"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
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

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-43" id="returns-43"></a>

`boolean`

###### Call Signature <a href="#call-signature-9" id="call-signature-9"></a>

```ts
getFlag<Key, Default>(
   options: ContextWithTracking,
   key: Key,
defaultValue: Default): FlagValueFromDefault<Default>
```

Read a Boolean with an implicit false default, or supply an explicit value default.

###### Type Parameters <a href="#type-parameters-9" id="type-parameters-9"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/node-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-28" id="parameters-28"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
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

###### Returns <a href="#returns-44" id="returns-44"></a>

[`FlagValueFromDefault`](../../../supported-languages/node-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>

### getFlagDefinitions() <a href="#getflagdefinitions-1" id="getflagdefinitions-1"></a>

```ts
getFlagDefinitions(): FlagCollection
```

Complete definitions, including segments needed for offline evaluation.

###### Returns <a href="#returns-45" id="returns-45"></a>

[`FlagCollection`](../../../supported-languages/node-sdk/globals.md#flagcollection)

### getFlagRemote() <a href="#getflagremote-2" id="getflagremote-2"></a>

###### Call Signature <a href="#call-signature-10" id="call-signature-10"></a>

```ts
getFlagRemote<Key>(
   key: Key,
   defaultValue?: undefined,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<boolean>
```

###### Type Parameters <a href="#type-parameters-10" id="type-parameters-10"></a>

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
</tbody>
</table>

###### Parameters <a href="#parameters-29" id="parameters-29"></a>

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

`defaultValue`?

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-46" id="returns-46"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

###### Call Signature <a href="#call-signature-11" id="call-signature-11"></a>

```ts
getFlagRemote<Key, Default>(
   key: Key,
   defaultValue: Default,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<FlagValueFromDefault<Default>>
```

###### Type Parameters <a href="#type-parameters-11" id="type-parameters-11"></a>

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

`Default` *extends* `object` \| [`FlagDefaultValue`](../../../supported-languages/node-sdk/globals.md#flagdefaultvalue)

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-30" id="parameters-30"></a>

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
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-47" id="returns-47"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagValueFromDefault`](../../../supported-languages/node-sdk/globals.md#flagvaluefromdefaultt)\<`Default`\>\>

### getFlags() <a href="#getflags-2" id="getflags-2"></a>

```ts
getFlags(options: ContextWithTracking): Record<string, undefined | FlagValue>
```

Return all values and immediately register checks for the returned roots.

###### Parameters <a href="#parameters-31" id="parameters-31"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-48" id="returns-48"></a>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>

### getFlagsForBootstrap() <a href="#getflagsforbootstrap-2" id="getflagsforbootstrap-2"></a>

```ts
getFlagsForBootstrap(options: ContextWithTracking): BootstrappedFlags
```

Get public flag data for a browser without recording flag checks.
Secret flags can still be read on the server and used by public flags.
Flags without `secret: false` are left out. Dependency names are removed
from error details. Include only browser-safe attributes in the context.

###### Parameters <a href="#parameters-32" id="parameters-32"></a>

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

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-49" id="returns-49"></a>

[`BootstrappedFlags`](../../../supported-languages/node-sdk/globals.md#bootstrappedflags)

### getFlagsRemote() <a href="#getflagsremote-2" id="getflagsremote-2"></a>

```ts
getFlagsRemote(
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<Record<string, undefined | FlagValue>>
```

###### Parameters <a href="#parameters-33" id="parameters-33"></a>

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

`userId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](../../../supported-languages/node-sdk/globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-50" id="returns-50"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\>

### initialize() <a href="#initialize-1" id="initialize-1"></a>

```ts
initialize(): Promise<void>
```

###### Returns <a href="#returns-51" id="returns-51"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### pushFlagOverrides() <a href="#pushflagoverrides-1" id="pushflagoverrides-1"></a>

```ts
pushFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): () => void
```

###### Parameters <a href="#parameters-34" id="parameters-34"></a>

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-52" id="returns-52"></a>

`Function`

###### Returns <a href="#returns-53" id="returns-53"></a>

`void`

### refreshFlags() <a href="#refreshflags-2" id="refreshflags-2"></a>

```ts
refreshFlags(waitForVersion?: number): Promise<void>
```

###### Parameters <a href="#parameters-35" id="parameters-35"></a>

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

`waitForVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-54" id="returns-54"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### setFlagOverrides() <a href="#setflagoverrides-1" id="setflagoverrides-1"></a>

```ts
setFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
```

###### Parameters <a href="#parameters-36" id="parameters-36"></a>

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-55" id="returns-55"></a>

`void`

### track() <a href="#track-2" id="track-2"></a>

```ts
track(
   userId: IdType,
   event: string,
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

###### Parameters <a href="#parameters-37" id="parameters-37"></a>

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

`userId`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions) & \{ `companyId`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-56" id="returns-56"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### updateCompany() <a href="#updatecompany-1" id="updatecompany-1"></a>

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

###### Parameters <a href="#parameters-38" id="parameters-38"></a>

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

`companyId`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions) & \{ `userId`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-57" id="returns-57"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

### updateUser() <a href="#updateuser-1" id="updateuser-1"></a>

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
```

###### Parameters <a href="#parameters-39" id="parameters-39"></a>

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

`userId`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](../../../supported-languages/node-sdk/globals.md#trackoptions)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-58" id="returns-58"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Interfaces <a href="#interfaces" id="interfaces"></a>

### ContextWithTracking <a href="#contextwithtracking" id="contextwithtracking"></a>

#### Extends <a href="#extends-1" id="extends-1"></a>

- [`Context`](../../../supported-languages/node-sdk/globals.md#context)

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

<a id="company-1"></a> `company?`

</td>
<td>

\{ `[key: string]`: `any`; `avatar`: `string`; `id`: `undefined` \| [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); `name`: `string`; \}

</td>
</tr>
<tr>
<td>

`company.avatar?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`company.id`

</td>
<td>

`undefined` \| [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`company.name?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="enabletracking"></a> `enableTracking?`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

<a id="meta"></a> `meta?`

</td>
<td>

[`TrackingMeta`](../../../supported-languages/node-sdk/globals.md#trackingmeta)

</td>
</tr>
<tr>
<td>

<a id="other"></a> `other?`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
</tr>
<tr>
<td>

<a id="user-1"></a> `user?`

</td>
<td>

\{ `[key: string]`: `any`; `avatar`: `string`; `email`: `string`; `id`: `undefined` \| [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype); `name`: `string`; \}

</td>
</tr>
<tr>
<td>

`user.avatar?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`user.email?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`user.id`

</td>
<td>

`undefined` \| [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype)

</td>
</tr>
<tr>
<td>

`user.name?`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### Flags <a href="#flags" id="flags"></a>

Augment this interface with flag keys and their returned value types.

***

### FlagsFallbackProvider <a href="#flagsfallbackprovider" id="flagsfallbackprovider"></a>

#### Methods <a href="#methods-3" id="methods-3"></a>

### load() <a href="#load" id="load"></a>

```ts
load(context: FlagsFallbackProviderContext): Promise<undefined | FlagsFallbackSnapshot>
```

###### Parameters <a href="#parameters-40" id="parameters-40"></a>

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

`context`

</td>
<td>

[`FlagsFallbackProviderContext`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovidercontext)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-59" id="returns-59"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| [`FlagsFallbackSnapshot`](../../../supported-languages/node-sdk/globals.md#flagsfallbacksnapshot)\>

### save() <a href="#save" id="save"></a>

```ts
save(context: FlagsFallbackProviderContext, snapshot: FlagsFallbackSnapshot): Promise<void>
```

###### Parameters <a href="#parameters-41" id="parameters-41"></a>

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

`context`

</td>
<td>

[`FlagsFallbackProviderContext`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovidercontext)

</td>
</tr>
<tr>
<td>

`snapshot`

</td>
<td>

[`FlagsFallbackSnapshot`](../../../supported-languages/node-sdk/globals.md#flagsfallbacksnapshot)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-60" id="returns-60"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### HttpClient <a href="#httpclient" id="httpclient"></a>

#### Methods <a href="#methods-4" id="methods-4"></a>

### get() <a href="#get" id="get"></a>

```ts
get<Response>(
   url: string,
   headers: Record<string, string>,
timeoutMs: number): Promise<HttpClientResponse<Response>>
```

###### Type Parameters <a href="#type-parameters-12" id="type-parameters-12"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Response`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-42" id="parameters-42"></a>

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
<tr>
<td>

`headers`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

</td>
</tr>
<tr>
<td>

`timeoutMs`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-61" id="returns-61"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HttpClientResponse`](../../../supported-languages/node-sdk/globals.md#httpclientresponseresponse)\<`Response`\>\>

### post() <a href="#post" id="post"></a>

```ts
post<Body, Response>(
   url: string,
   headers: Record<string, string>,
body: Body): Promise<HttpClientResponse<Response>>
```

###### Type Parameters <a href="#type-parameters-13" id="type-parameters-13"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Body`

</td>
</tr>
<tr>
<td>

`Response`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-43" id="parameters-43"></a>

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
<tr>
<td>

`headers`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

</td>
</tr>
<tr>
<td>

`body`

</td>
<td>

`Body`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-62" id="returns-62"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HttpClientResponse`](../../../supported-languages/node-sdk/globals.md#httpclientresponseresponse)\<`Response`\>\>

***

### Logger <a href="#logger" id="logger"></a>

#### Methods <a href="#methods-5" id="methods-5"></a>

### debug() <a href="#debug" id="debug"></a>

```ts
debug(message: string, data?: any): void
```

###### Parameters <a href="#parameters-44" id="parameters-44"></a>

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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-63" id="returns-63"></a>

`void`

### error() <a href="#error" id="error"></a>

```ts
error(message: string, data?: any): void
```

###### Parameters <a href="#parameters-45" id="parameters-45"></a>

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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-64" id="returns-64"></a>

`void`

### info() <a href="#info" id="info"></a>

```ts
info(message: string, data?: any): void
```

###### Parameters <a href="#parameters-46" id="parameters-46"></a>

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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-65" id="returns-65"></a>

`void`

### warn() <a href="#warn" id="warn"></a>

```ts
warn(message: string, data?: any): void
```

###### Parameters <a href="#parameters-47" id="parameters-47"></a>

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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-66" id="returns-66"></a>

`void`

## Type Aliases <a href="#type-aliases" id="type-aliases"></a>

### Attributes <a href="#attributes" id="attributes"></a>

```ts
type Attributes = Record<string, any>;
```

***

### BatchBufferOptions\<T\> <a href="#batchbufferoptionst" id="batchbufferoptionst"></a>

```ts
type BatchBufferOptions<T> = {
  flushHandler: (items: T[]) => Promise<void>;
  flushOnExit: boolean;
  intervalMs: number;
  logger: Logger;
  maxSize: number;
};
```

#### Type Parameters <a href="#type-parameters-14" id="type-parameters-14"></a>

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

#### Type declaration <a href="#type-declaration" id="type-declaration"></a>

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

<a id="flushhandler"></a> `flushHandler`

</td>
<td>

(`items`: `T`[]) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="flushonexit"></a> `flushOnExit`?

</td>
<td>

`boolean`

</td>
<td>

Flush on natural process exit (beforeExit), without installing signal handlers.
For signals or process.exit(), await client.flush() in the application hook.

</td>
</tr>
<tr>
<td>

<a id="intervalms"></a> `intervalMs`?

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

<a id="logger-3"></a> `logger`?

</td>
<td>

[`Logger`](../../../supported-languages/node-sdk/globals.md#logger)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="maxsize"></a> `maxSize`?

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### BootstrappedFlags <a href="#bootstrappedflags" id="bootstrappedflags"></a>

```ts
type BootstrappedFlags = {
  context: Context;
  flags: RawFlags;
  flagStateVersion: number;
  protocolVersion: 2;
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

<a id="context"></a> `context`

</td>
<td>

[`Context`](../../../supported-languages/node-sdk/globals.md#context)

</td>
</tr>
<tr>
<td>

<a id="flags-1"></a> `flags`

</td>
<td>

[`RawFlags`](../../../supported-languages/node-sdk/globals.md#rawflags)

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
<tr>
<td>

<a id="protocolversion"></a> `protocolVersion`

</td>
<td>

`2`

</td>
</tr>
</tbody>
</table>

***

### CacheStrategy <a href="#cachestrategy" id="cachestrategy"></a>

```ts
type CacheStrategy = "periodically-update" | "in-request";
```

***

### ClientOptions <a href="#clientoptions" id="clientoptions"></a>

```ts
type ClientOptions = {
  apiBaseUrl: string;
  batchOptions: Omit<BatchBufferOptions<any>, "flushHandler" | "logger">;
  cacheStrategy: CacheStrategy;
  configFile: string;
  emitEvaluationEvents: boolean;
  fallbackFlags:   | TypedFlagKey[]
     | FlagOverrides;
  fetchTimeoutMs: number;
  flagOverrides:   | FlagOverrides
     | FlagOverridesFn;
  flagsFallbackProvider: FlagsFallbackProvider;
  flagsFetchRetries: number;
  flagsPushUrl: string;
  flagsSyncMode: FlagsSyncMode;
  host: string;
  httpClient: HttpClient;
  logger: Logger;
  logLevel: LogLevel;
  offline: boolean;
  secretKey: string;
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

<a id="apibaseurl"></a> `apiBaseUrl`?

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

<a id="batchoptions"></a> `batchOptions`?

</td>
<td>

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`BatchBufferOptions`](../../../supported-languages/node-sdk/globals.md#batchbufferoptionst)\<`any`\>, `"flushHandler"` \| `"logger"`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="cachestrategy-1"></a> `cacheStrategy`?

</td>
<td>

[`CacheStrategy`](../../../supported-languages/node-sdk/globals.md#cachestrategy)

</td>
<td>

**Deprecated**

Use flagsSyncMode.

</td>
</tr>
<tr>
<td>

<a id="configfile"></a> `configFile`?

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

<a id="emitevaluationevents"></a> `emitEvaluationEvents`?

</td>
<td>

`boolean`

</td>
<td>

**Deprecated**

Evaluation events are not emitted.

</td>
</tr>
<tr>
<td>

<a id="fallbackflags"></a> `fallbackFlags`?

</td>
<td>

  \| [`TypedFlagKey`](../../../supported-languages/node-sdk/globals.md#typedflagkey)[]
  \| [`FlagOverrides`](../../../supported-languages/node-sdk/globals.md#flagoverrides)

</td>
<td>

Value-only startup fallbacks. Prefer a complete saved collection.

</td>
</tr>
<tr>
<td>

<a id="fetchtimeoutms"></a> `fetchTimeoutMs`?

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

<a id="flagoverrides-2"></a> `flagOverrides`?

</td>
<td>

  \| [`FlagOverrides`](../../../supported-languages/node-sdk/globals.md#flagoverrides)
  \| [`FlagOverridesFn`](../../../supported-languages/node-sdk/globals.md#flagoverridesfn)

</td>
<td>

Applied after evaluation; overrides do not change dependency results.

</td>
</tr>
<tr>
<td>

<a id="flagsfallbackprovider-1"></a> `flagsFallbackProvider`?

</td>
<td>

[`FlagsFallbackProvider`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovider)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="flagsfetchretries"></a> `flagsFetchRetries`?

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

<a id="flagspushurl"></a> `flagsPushUrl`?

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

<a id="flagssyncmode"></a> `flagsSyncMode`?

</td>
<td>

[`FlagsSyncMode`](../../../supported-languages/node-sdk/globals.md#flagssyncmode)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="host"></a> `host`?

</td>
<td>

`string`

</td>
<td>

**Deprecated**

Use apiBaseUrl.

</td>
</tr>
<tr>
<td>

<a id="httpclient-3"></a> `httpClient`?

</td>
<td>

[`HttpClient`](../../../supported-languages/node-sdk/globals.md#httpclient)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="logger-4"></a> `logger`?

</td>
<td>

[`Logger`](../../../supported-languages/node-sdk/globals.md#logger)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="loglevel"></a> `logLevel`?

</td>
<td>

[`LogLevel`](../../../supported-languages/node-sdk/globals.md#loglevel)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="offline"></a> `offline`?

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

<a id="secretkey"></a> `secretKey`?

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### Context <a href="#context" id="context"></a>

```ts
type Context = {
  company: {
   [key: string]: any;   avatar: string;
     id: IdType | undefined;
     name: string;
    };
  other: Record<string, any>;
  user: {
   [key: string]: any;   avatar: string;
     email: string;
     id: IdType | undefined;
     name: string;
    };
};
```

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

<a id="company-2"></a> `company`?

</td>
<td>

\{
`[key: string]`: `any`;   `avatar`: `string`;
  `id`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype) \| `undefined`;
  `name`: `string`;
 \}

</td>
</tr>
<tr>
<td>

`company.avatar`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`company.id`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype) \| `undefined`

</td>
</tr>
<tr>
<td>

`company.name`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="other-1"></a> `other`?

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
</tr>
<tr>
<td>

<a id="user-2"></a> `user`?

</td>
<td>

\{
`[key: string]`: `any`;   `avatar`: `string`;
  `email`: `string`;
  `id`: [`IdType`](../../../supported-languages/node-sdk/globals.md#idtype) \| `undefined`;
  `name`: `string`;
 \}

</td>
</tr>
<tr>
<td>

`user.avatar`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`user.email`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`user.id`

</td>
<td>

[`IdType`](../../../supported-languages/node-sdk/globals.md#idtype) \| `undefined`

</td>
</tr>
<tr>
<td>

`user.name`?

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### EdgeClientOptions <a href="#edgeclientoptions" id="edgeclientoptions"></a>

```ts
type EdgeClientOptions = Omit<ClientOptions, "flagsSyncMode" | "cacheStrategy" | "flushIntervalMs" | "batchOptions">;
```

***

### FileFallbackProviderOptions <a href="#filefallbackprovideroptions" id="filefallbackprovideroptions"></a>

```ts
type FileFallbackProviderOptions = {
  directory: string;
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

<a id="directory"></a> `directory`?

</td>
<td>

`string`

</td>
<td>

Directory where per-environment snapshots are stored.

</td>
</tr>
</tbody>
</table>

***

### FlagCollection <a href="#flagcollection" id="flagcollection"></a>

```ts
type FlagCollection = {
  flags: FlagDefinition[];
  segments: NonNullable<CompiledCollection["segments"]>;
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

<a id="flags-2"></a> `flags`

</td>
<td>

[`FlagDefinition`](../../../supported-languages/node-sdk/globals.md#flagdefinition)[]

</td>
</tr>
<tr>
<td>

<a id="segments"></a> `segments`

</td>
<td>

[`NonNullable`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)\<`CompiledCollection`\[`"segments"`\]\>

</td>
</tr>
</tbody>
</table>

***

### FlagDefaultFor\<Registry, Key\> <a href="#flagdefaultforregistry-key" id="flagdefaultforregistry-key"></a>

```ts
type FlagDefaultFor<Registry, Key> = keyof Registry extends never ? FlagDefaultValue | object : Key extends keyof Registry ? ReadonlyFlagValue<Registry[Key]> | null : never;
```

Registered defaults match the value schema; null explicitly requests arbitrary JSON.

#### Type Parameters <a href="#type-parameters-15" id="type-parameters-15"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Registry`

</td>
</tr>
<tr>
<td>

`Key` *extends* `PropertyKey`

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

JSON defaults may be readonly; returned values are independent mutable copies.

***

### FlagDefinition <a href="#flagdefinition" id="flagdefinition"></a>

```ts
type FlagDefinition = CompiledFlag<FlagValue> & {
  secret: boolean;
};
```

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

`secret`?

</td>
<td>

`boolean`

</td>
<td>

Only explicit false authorizes export to a browser bootstrap payload.

</td>
</tr>
</tbody>
</table>

***

### FlagEvent <a href="#flagevent" id="flagevent"></a>

```ts
type FlagEvent = {
  action: "check";
  evalContext: Record<string, unknown>;
  evalErrors: (
     | EvaluationError
     | {
     code: "CLIENT_NOT_INITIALIZED";
     field: string;
     message: string;
    })[];
  evalMissingFields: string[];
  evalResult: string;
  evalRuleResults: boolean[];
  flagStateVersion: number;
  key: string;
  sourceVersionId: string;
};
```

A check records the selected variant key, never its JSON payload.

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

<a id="action"></a> `action`

</td>
<td>

`"check"`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="evalcontext"></a> `evalContext`?

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="evalerrors"></a> `evalErrors`?

</td>
<td>

(
  \| `EvaluationError`
  \| \{
  `code`: `"CLIENT_NOT_INITIALIZED"`;
  `field`: `string`;
  `message`: `string`;
 \})[]

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="evalmissingfields"></a> `evalMissingFields`?

</td>
<td>

`string`[]

</td>
<td>

**Deprecated**

Use evalErrors and check for MISSING_CONTEXT_FIELD.

</td>
</tr>
<tr>
<td>

<a id="evalresult"></a> `evalResult`?

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

<a id="evalruleresults"></a> `evalRuleResults`?

</td>
<td>

`boolean`[]

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="flagstateversion-1"></a> `flagStateVersion`?

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

<a id="key"></a> `key`

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

<a id="sourceversionid"></a> `sourceVersionId`?

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### FlagOverrides <a href="#flagoverrides" id="flagoverrides"></a>

```ts
type FlagOverrides = Partial<keyof Flags extends never ? Record<string, FlagValue> : { [Key in keyof Flags]: Flags[Key] }>;
```

***

### FlagOverridesFn() <a href="#flagoverridesfn" id="flagoverridesfn"></a>

```ts
type FlagOverridesFn = (context: Context) => FlagOverrides;
```

#### Parameters <a href="#parameters-48" id="parameters-48"></a>

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

`context`

</td>
<td>

[`Context`](../../../supported-languages/node-sdk/globals.md#context)

</td>
</tr>
</tbody>
</table>

#### Returns <a href="#returns-67" id="returns-67"></a>

[`FlagOverrides`](../../../supported-languages/node-sdk/globals.md#flagoverrides)

***

### FlagsAPIResponse <a href="#flagsapiresponse" id="flagsapiresponse"></a>

```ts
type FlagsAPIResponse = FlagCollection & {
  flagStateVersion: number;
  protocolVersion: 2;
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

`flagStateVersion`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`protocolVersion`

</td>
<td>

`2`

</td>
</tr>
</tbody>
</table>

***

### FlagsFallbackProviderContext <a href="#flagsfallbackprovidercontext" id="flagsfallbackprovidercontext"></a>

```ts
type FlagsFallbackProviderContext = {
  secretKeyHash: string;
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

<a id="secretkeyhash"></a> `secretKeyHash`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### FlagsFallbackSnapshot <a href="#flagsfallbacksnapshot" id="flagsfallbacksnapshot"></a>

```ts
type FlagsFallbackSnapshot = FlagCollection & {
  flagStateVersion: number;
  savedAt: string;
  source: "static";
  version: 2;
};
```

V1 snapshots cannot be evaluated by the collection evaluator.

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

`flagStateVersion`?

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`savedAt`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`source`?

</td>
<td>

`"static"`

</td>
</tr>
<tr>
<td>

`version`

</td>
<td>

`2`

</td>
</tr>
</tbody>
</table>

***

### FlagsSyncMode <a href="#flagssyncmode" id="flagssyncmode"></a>

```ts
type FlagsSyncMode = "polling" | "in-request" | "push";
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

Infer values from defaults, widening literals. Null explicitly requests arbitrary JSON.

#### Type Parameters <a href="#type-parameters-16" id="type-parameters-16"></a>

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

### GCSFallbackProviderClient <a href="#gcsfallbackproviderclient" id="gcsfallbackproviderclient"></a>

```ts
type GCSFallbackProviderClient =
  | GCSLegacyClient
  | GCSGoogleApisClient;
```

***

### GCSFallbackProviderOptions <a href="#gcsfallbackprovideroptions" id="gcsfallbackprovideroptions"></a>

```ts
type GCSFallbackProviderOptions = {
  bucket: string;
  client: GCSFallbackProviderClient;
  keyPrefix: string;
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

<a id="bucket"></a> `bucket`

</td>
<td>

`string`

</td>
<td>

Bucket where snapshots are stored.

</td>
</tr>
<tr>
<td>

<a id="client"></a> `client`?

</td>
<td>

[`GCSFallbackProviderClient`](../../../supported-languages/node-sdk/globals.md#gcsfallbackproviderclient)

</td>
<td>

Optional GCS client. A default client is created when omitted.

Accepts either a legacy `bucket().file()` client or a generated
`@googleapis/storage` client.

TODO(next major): Replace this with a simpler object-store interface.

</td>
</tr>
<tr>
<td>

<a id="keyprefix"></a> `keyPrefix`?

</td>
<td>

`string`

</td>
<td>

Prefix for generated per-environment keys.

</td>
</tr>
</tbody>
</table>

***

### GCSGoogleApisClient <a href="#gcsgoogleapisclient" id="gcsgoogleapisclient"></a>

```ts
type GCSGoogleApisClient = {
  objects: {
     get: Promise<{
        data: unknown;
       }>;
     insert: Promise<unknown>;
    };
};
```

#### Type declaration <a href="#type-declaration-12" id="type-declaration-12"></a>

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

<a id="objects"></a> `objects`

</td>
<td>

\{
  `get`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{
     `data`: `unknown`;
    \}\>;
  `insert`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>;
 \}

</td>
</tr>
<tr>
<td>

<a id="get-1"></a> `get()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{
  `data`: `unknown`;
 \}\>

</td>
</tr>
<tr>
<td>

<a id="insert"></a> `insert()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

</td>
</tr>
</tbody>
</table>

***

### GCSLegacyClient <a href="#gcslegacyclient" id="gcslegacyclient"></a>

```ts
type GCSLegacyClient = {
  bucket: {
     file: {
        download: Promise<[Uint8Array]>;
        exists: Promise<[boolean]>;
        save: Promise<unknown>;
       };
    };
};
```

#### Type declaration <a href="#type-declaration-13" id="type-declaration-13"></a>

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

<a id="bucket-1"></a> `bucket()`

</td>
<td>

\{
  `file`: \{
     `download`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\[[`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)\]\>;
     `exists`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\[`boolean`\]\>;
     `save`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>;
    \};
 \}

</td>
</tr>
</tbody>
</table>

***

### HttpClientResponse\<Response\> <a href="#httpclientresponseresponse" id="httpclientresponseresponse"></a>

```ts
type HttpClientResponse<Response> = {
  body: Response | undefined;
  etag: string;
  ok: boolean;
  status: number;
};
```

#### Type Parameters <a href="#type-parameters-17" id="type-parameters-17"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`Response`

</td>
</tr>
</tbody>
</table>

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

<a id="body"></a> `body`

</td>
<td>

`Response` \| `undefined`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="etag"></a> `etag`?

</td>
<td>

`string`

</td>
<td>

Exact response ETag for conditional definition refreshes, when available.

</td>
</tr>
<tr>
<td>

<a id="ok"></a> `ok`

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

<a id="status"></a> `status`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### IdType <a href="#idtype" id="idtype"></a>

```ts
type IdType = string | number;
```

***

### LogLevel <a href="#loglevel" id="loglevel"></a>

```ts
type LogLevel = typeof LOG_LEVELS[number];
```

***

### RawFlag <a href="#rawflag" id="rawflag"></a>

```ts
type RawFlag = Omit<FlagEvaluationResult<FlagValue>, "sourceVersionId" | "value" | "resolved"> & {
  resolved: boolean;
  sourceVersionId: string;
  value: FlagValue | undefined;
};
```

#### Type declaration <a href="#type-declaration-15" id="type-declaration-15"></a>

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

`resolved`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`sourceVersionId`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`value`

</td>
<td>

[`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue) \| `undefined`

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

### RedisFallbackProviderOptions <a href="#redisfallbackprovideroptions" id="redisfallbackprovideroptions"></a>

```ts
type RedisFallbackProviderOptions = {
  client: {
     get: Promise<undefined | null | string>;
     set: Promise<unknown>;
    };
  keyPrefix: string;
};
```

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

<a id="client-1"></a> `client`?

</td>
<td>

\{
  `get`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `null` \| `string`\>;
  `set`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>;
 \}

</td>
<td>

Optional Redis client. When omitted, a client is created using `REDIS_URL`.

</td>
</tr>
<tr>
<td>

<a id="get-2"></a> `get()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `null` \| `string`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="set"></a> `set()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="keyprefix-1"></a> `keyPrefix`?

</td>
<td>

`string`

</td>
<td>

Prefix for generated per-environment keys.

</td>
</tr>
</tbody>
</table>

***

### S3FallbackProviderOptions <a href="#s3fallbackprovideroptions" id="s3fallbackprovideroptions"></a>

```ts
type S3FallbackProviderOptions = {
  bucket: string;
  client: {
     send: Promise<any>;
    };
  keyPrefix: string;
};
```

#### Type declaration <a href="#type-declaration-17" id="type-declaration-17"></a>

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

<a id="bucket-2"></a> `bucket`

</td>
<td>

`string`

</td>
<td>

Bucket where snapshots are stored.

</td>
</tr>
<tr>
<td>

<a id="client-2"></a> `client`?

</td>
<td>

\{
  `send`: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>;
 \}

</td>
<td>

Optional S3 client. A default client is created when omitted.

</td>
</tr>
<tr>
<td>

<a id="send"></a> `send()`

</td>
<td>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="keyprefix-2"></a> `keyPrefix`?

</td>
<td>

`string`

</td>
<td>

Prefix for generated per-environment keys.

</td>
</tr>
</tbody>
</table>

***

### StaticFallbackProviderOptions <a href="#staticfallbackprovideroptions" id="staticfallbackprovideroptions"></a>

```ts
type StaticFallbackProviderOptions = {
  flags: Record<string, FlagValue>;
};
```

#### Type declaration <a href="#type-declaration-18" id="type-declaration-18"></a>

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

<a id="flags-3"></a> `flags`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](../../../supported-languages/node-sdk/globals.md#flagvalue)\>

</td>
<td>

Static fallback flags keyed by flag key.

</td>
</tr>
</tbody>
</table>

***

### TrackingMeta <a href="#trackingmeta" id="trackingmeta"></a>

```ts
type TrackingMeta = {
  active: boolean;
};
```

#### Type declaration <a href="#type-declaration-19" id="type-declaration-19"></a>

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

<a id="active"></a> `active`?

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

***

### TrackOptions <a href="#trackoptions" id="trackoptions"></a>

```ts
type TrackOptions = {
  attributes: Attributes;
  meta: TrackingMeta;
};
```

#### Type declaration <a href="#type-declaration-20" id="type-declaration-20"></a>

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

<a id="attributes-1"></a> `attributes`?

</td>
<td>

[`Attributes`](../../../supported-languages/node-sdk/globals.md#attributes)

</td>
</tr>
<tr>
<td>

<a id="meta-1"></a> `meta`?

</td>
<td>

[`TrackingMeta`](../../../supported-languages/node-sdk/globals.md#trackingmeta)

</td>
</tr>
</tbody>
</table>

***

### TypedFlagKey <a href="#typedflagkey" id="typedflagkey"></a>

```ts
type TypedFlagKey = keyof Flags extends never ? string : Extract<keyof Flags, string>;
```

***

### TypedFlags <a href="#typedflags" id="typedflags"></a>

```ts
type TypedFlags = keyof Flags extends never ? Record<string, FlagValue | undefined> : { [Key in keyof Flags]: Flags[Key] | undefined };
```

## Variables <a href="#variables" id="variables"></a>

### fallbackProviders <a href="#fallbackproviders" id="fallbackproviders"></a>

```ts
const fallbackProviders: {
  file: (__namedParameters: FileFallbackProviderOptions) => FlagsFallbackProvider;
  gcs: (__namedParameters: GCSFallbackProviderOptions) => FlagsFallbackProvider;
  redis: (__namedParameters: RedisFallbackProviderOptions) => FlagsFallbackProvider;
  s3: (__namedParameters: S3FallbackProviderOptions) => FlagsFallbackProvider;
  static: (__namedParameters: StaticFallbackProviderOptions) => FlagsFallbackProvider;
};
```

#### Type declaration <a href="#type-declaration-21" id="type-declaration-21"></a>

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="file"></a> `file`

</td>
<td>

(`__namedParameters`: [`FileFallbackProviderOptions`](../../../supported-languages/node-sdk/globals.md#filefallbackprovideroptions)) => [`FlagsFallbackProvider`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovider)

</td>
<td>

createFileFallbackProvider

</td>
</tr>
<tr>
<td>

<a id="gcs"></a> `gcs`

</td>
<td>

(`__namedParameters`: [`GCSFallbackProviderOptions`](../../../supported-languages/node-sdk/globals.md#gcsfallbackprovideroptions)) => [`FlagsFallbackProvider`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovider)

</td>
<td>

createGCSFallbackProvider

</td>
</tr>
<tr>
<td>

<a id="redis"></a> `redis`

</td>
<td>

(`__namedParameters`: [`RedisFallbackProviderOptions`](../../../supported-languages/node-sdk/globals.md#redisfallbackprovideroptions)) => [`FlagsFallbackProvider`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovider)

</td>
<td>

createRedisFallbackProvider

</td>
</tr>
<tr>
<td>

<a id="s3"></a> `s3`

</td>
<td>

(`__namedParameters`: [`S3FallbackProviderOptions`](../../../supported-languages/node-sdk/globals.md#s3fallbackprovideroptions)) => [`FlagsFallbackProvider`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovider)

</td>
<td>

createS3FallbackProvider

</td>
</tr>
<tr>
<td>

<a id="static"></a> `static`

</td>
<td>

(`__namedParameters`: [`StaticFallbackProviderOptions`](../../../supported-languages/node-sdk/globals.md#staticfallbackprovideroptions)) => [`FlagsFallbackProvider`](../../../supported-languages/node-sdk/globals.md#flagsfallbackprovider)

</td>
<td>

createStaticFallbackProvider

</td>
</tr>
</tbody>
</table>

Using v1? [Legacy docs](../../../legacy/v1/node-sdk/globals.md) · [Upgrade guide](../../../supported-languages/migrating-from-v1.md).
