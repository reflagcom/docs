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
SDK v2 candidate documentation, not a published release. Installation commands target the planned major; matching SDK/CLI releases are still required. Generated from `@reflag/node-sdk@2.0.0-next.0` in [the JavaScript repository](https://github.com/reflagcom/javascript/tree/9f3a0ae027e386747a2d4cf7683a68dcab70b355/packages/node-sdk). SDK READMEs and code comments there remain authoritative.
{% endhint %}

# @reflag/node-sdk

## Classes

### BoundReflagClient

Context-bound reads have the same direct-value and immediate-check semantics.

#### Constructors

##### new BoundReflagClient()

```ts
new BoundReflagClient(client: ReflagClient, options: ContextWithTracking): BoundReflagClient
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

`client`

</td>
<td>

[`ReflagClient`](globals.md#reflagclient)

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundReflagClient`](globals.md#boundreflagclient)

#### Accessors

##### company

###### Get Signature

```ts
get company():
  | undefined
  | {
[key: string]: any;   avatar: string;
  id: undefined | IdType;
  name: string;
}
```

###### Returns

  \| `undefined`
  \| \{
`[key: string]`: `any`;   `avatar`: `string`;
  `id`: `undefined` \| [`IdType`](globals.md#idtype);
  `name`: `string`;
 \}

##### otherContext

###### Get Signature

```ts
get otherContext():
  | undefined
| Record<string, any>
```

###### Returns

  \| `undefined`
  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

##### user

###### Get Signature

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

###### Returns

  \| `undefined`
  \| \{
`[key: string]`: `any`;   `avatar`: `string`;
  `email`: `string`;
  `id`: `undefined` \| [`IdType`](globals.md#idtype);
  `name`: `string`;
 \}

#### Methods

##### bindClient()

```ts
bindClient(next: ContextWithTracking): BoundReflagClient
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

`next`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundReflagClient`](globals.md#boundreflagclient)

##### flush()

```ts
flush(): Promise<void>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### getFlag()

###### Call Signature

```ts
getFlag<Key>(key: Key, defaultValue?: undefined): boolean
```

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

`Key` *extends* `string`

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

###### Returns

`boolean`

###### Call Signature

```ts
getFlag<Key, Default>(key: Key, defaultValue: Default): FlagValueFromDefault<Default>
```

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

###### Returns

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

##### getFlagRemote()

###### Call Signature

```ts
getFlagRemote<Key>(key: Key, defaultValue?: undefined): Promise<boolean>
```

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

`Key` *extends* `string`

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

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

###### Call Signature

```ts
getFlagRemote<Key, Default>(key: Key, defaultValue: Default): Promise<FlagValueFromDefault<Default>>
```

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

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>\>

##### getFlags()

```ts
getFlags(): Record<string, undefined | FlagValue>
```

###### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](globals.md#flagvalue)\>

##### getFlagsForBootstrap()

```ts
getFlagsForBootstrap(): BootstrappedFlags
```

###### Returns

[`BootstrappedFlags`](globals.md#bootstrappedflags)

##### getFlagsRemote()

```ts
getFlagsRemote(): Promise<Record<string, undefined | FlagValue>>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](globals.md#flagvalue)\>\>

##### refreshFlags()

```ts
refreshFlags(waitForVersion?: number): Promise<void>
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

`waitForVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### track()

```ts
track(event: string, options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
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

[`TrackOptions`](globals.md#trackoptions) & \{ `companyId`: [`IdType`](globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### EdgeClient

The EdgeClient is ReflagClient pre-configured to be used in edge runtimes, like
Cloudflare Workers.

It always uses `flagsSyncMode: "in-request"`. Refresh fetch starts are
throttled to at most once per second. A `refreshFlags()` call made during
that throttle window only records pending refresh work, so the call may
resolve before the fetch runs. That pending refresh is executed on the next
request/access or `refreshFlags()` call after the window expires.

#### Example

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

#### Extends

- [`ReflagClient`](globals.md#reflagclient)

#### Constructors

##### new EdgeClient()

```ts
new EdgeClient(options: EdgeClientOptions): EdgeClient
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

`options`

</td>
<td>

[`EdgeClientOptions`](globals.md#edgeclientoptions)

</td>
</tr>
</tbody>
</table>

###### Returns

[`EdgeClient`](globals.md#edgeclient)

###### Overrides

[`ReflagClient`](globals.md#reflagclient).[`constructor`](globals.md#constructors)

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

<a id="httpclient"></a> `httpClient`

</td>
<td>

`readonly`

</td>
<td>

[`HttpClient`](globals.md#httpclient)

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

[`Logger`](globals.md#logger)

</td>
</tr>
</tbody>
</table>

#### Accessors

##### flagOverrides

###### Set Signature

```ts
set flagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
```

###### Deprecated

Use setFlagOverrides.

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`flagOverrides`](globals.md#flagoverrides)

#### Methods

##### bindClient()

```ts
bindClient(options: ContextWithTracking): BoundReflagClient
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

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundReflagClient`](globals.md#boundreflagclient)

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`bindClient`](globals.md#bindclient)

##### clearFlagOverrides()

```ts
clearFlagOverrides(): void
```

###### Returns

`void`

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`clearFlagOverrides`](globals.md#clearflagoverrides)

##### destroy()

```ts
destroy(): void
```

###### Returns

`void`

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`destroy`](globals.md#destroy)

##### flush()

```ts
flush(): Promise<void>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`flush`](globals.md#flush)

##### getFlag()

###### Call Signature

```ts
getFlag<Key>(
   options: ContextWithTracking,
   key: Key,
   defaultValue?: undefined): boolean
```

Read a Boolean with an implicit false default, or supply an explicit value default.

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

`Key` *extends* `string`

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
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

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

###### Returns

`boolean`

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlag`](globals.md#getflag)

###### Call Signature

```ts
getFlag<Key, Default>(
   options: ContextWithTracking,
   key: Key,
defaultValue: Default): FlagValueFromDefault<Default>
```

Read a Boolean with an implicit false default, or supply an explicit value default.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

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

###### Returns

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlag`](globals.md#getflag)

##### getFlagDefinitions()

```ts
getFlagDefinitions(): FlagCollection
```

Complete definitions, including segments needed for offline evaluation.

###### Returns

[`FlagCollection`](globals.md#flagcollection)

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlagDefinitions`](globals.md#getflagdefinitions)

##### getFlagRemote()

###### Call Signature

```ts
getFlagRemote<Key>(
   key: Key,
   defaultValue?: undefined,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<boolean>
```

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

`Key` *extends* `string`

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

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlagRemote`](globals.md#getflagremote)

###### Call Signature

```ts
getFlagRemote<Key, Default>(
   key: Key,
   defaultValue: Default,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<FlagValueFromDefault<Default>>
```

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

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlagRemote`](globals.md#getflagremote)

##### getFlags()

```ts
getFlags(options: ContextWithTracking): Record<string, undefined | FlagValue>
```

Return all values and immediately register checks for the returned roots.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](globals.md#flagvalue)\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlags`](globals.md#getflags)

##### getFlagsForBootstrap()

```ts
getFlagsForBootstrap(options: ContextWithTracking): BootstrappedFlags
```

Serialization is not a read by the browser; it must not emit check events.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BootstrappedFlags`](globals.md#bootstrappedflags)

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlagsForBootstrap`](globals.md#getflagsforbootstrap)

##### getFlagsRemote()

```ts
getFlagsRemote(
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<Record<string, undefined | FlagValue>>
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

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](globals.md#flagvalue)\>\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`getFlagsRemote`](globals.md#getflagsremote)

##### initialize()

```ts
initialize(): Promise<void>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`initialize`](globals.md#initialize)

##### pushFlagOverrides()

```ts
pushFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): () => void
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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`Function`

###### Returns

`void`

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`pushFlagOverrides`](globals.md#pushflagoverrides)

##### refreshFlags()

```ts
refreshFlags(waitForVersion?: number): Promise<void>
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

`waitForVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`refreshFlags`](globals.md#refreshflags)

##### setFlagOverrides()

```ts
setFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`setFlagOverrides`](globals.md#setflagoverrides)

##### track()

```ts
track(
   userId: IdType,
   event: string,
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

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

[`TrackOptions`](globals.md#trackoptions) & \{ `companyId`: [`IdType`](globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`track`](globals.md#track)

##### updateCompany()

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
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

`companyId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `userId`: [`IdType`](globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`updateCompany`](globals.md#updatecompany)

##### updateUser()

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Inherited from

[`ReflagClient`](globals.md#reflagclient).[`updateUser`](globals.md#updateuser)

***

### ReflagClient

V2 client: flag reads return values and immediately register checks.

#### Extended by

- [`EdgeClient`](globals.md#edgeclient)

#### Constructors

##### new ReflagClient()

```ts
new ReflagClient(options: ClientOptions): ReflagClient
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

`options`

</td>
<td>

[`ClientOptions`](globals.md#clientoptions)

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

<a id="httpclient-1"></a> `httpClient`

</td>
<td>

`readonly`

</td>
<td>

[`HttpClient`](globals.md#httpclient)

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

[`Logger`](globals.md#logger)

</td>
</tr>
</tbody>
</table>

#### Accessors

##### flagOverrides

###### Set Signature

```ts
set flagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
```

###### Deprecated

Use setFlagOverrides.

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

#### Methods

##### bindClient()

```ts
bindClient(options: ContextWithTracking): BoundReflagClient
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

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundReflagClient`](globals.md#boundreflagclient)

##### clearFlagOverrides()

```ts
clearFlagOverrides(): void
```

###### Returns

`void`

##### destroy()

```ts
destroy(): void
```

###### Returns

`void`

##### flush()

```ts
flush(): Promise<void>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### getFlag()

###### Call Signature

```ts
getFlag<Key>(
   options: ContextWithTracking,
   key: Key,
   defaultValue?: undefined): boolean
```

Read a Boolean with an implicit false default, or supply an explicit value default.

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

`Key` *extends* `string`

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
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

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

###### Returns

`boolean`

###### Call Signature

```ts
getFlag<Key, Default>(
   options: ContextWithTracking,
   key: Key,
defaultValue: Default): FlagValueFromDefault<Default>
```

Read a Boolean with an implicit false default, or supply an explicit value default.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

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

###### Returns

[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>

##### getFlagDefinitions()

```ts
getFlagDefinitions(): FlagCollection
```

Complete definitions, including segments needed for offline evaluation.

###### Returns

[`FlagCollection`](globals.md#flagcollection)

##### getFlagRemote()

###### Call Signature

```ts
getFlagRemote<Key>(
   key: Key,
   defaultValue?: undefined,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<boolean>
```

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

`Key` *extends* `string`

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

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

###### Call Signature

```ts
getFlagRemote<Key, Default>(
   key: Key,
   defaultValue: Default,
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<FlagValueFromDefault<Default>>
```

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

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagValueFromDefault`](globals.md#flagvaluefromdefaultt)\<`Default`\>\>

##### getFlags()

```ts
getFlags(options: ContextWithTracking): Record<string, undefined | FlagValue>
```

Return all values and immediately register checks for the returned roots.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](globals.md#flagvalue)\>

##### getFlagsForBootstrap()

```ts
getFlagsForBootstrap(options: ContextWithTracking): BootstrappedFlags
```

Serialization is not a read by the browser; it must not emit check events.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BootstrappedFlags`](globals.md#bootstrappedflags)

##### getFlagsRemote()

```ts
getFlagsRemote(
   userId?: IdType,
   companyId?: IdType,
context?: ContextWithTracking): Promise<Record<string, undefined | FlagValue>>
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

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`context`?

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `undefined` \| [`FlagValue`](globals.md#flagvalue)\>\>

##### initialize()

```ts
initialize(): Promise<void>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### pushFlagOverrides()

```ts
pushFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): () => void
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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`Function`

###### Returns

`void`

##### refreshFlags()

```ts
refreshFlags(waitForVersion?: number): Promise<void>
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

`waitForVersion`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### setFlagOverrides()

```ts
setFlagOverrides(overrides:
  | Partial<Record<string, FlagValue>>
  | FlagOverridesFn): void
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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### track()

```ts
track(
   userId: IdType,
   event: string,
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

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

[`TrackOptions`](globals.md#trackoptions) & \{ `companyId`: [`IdType`](globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### updateCompany()

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
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

`companyId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `userId`: [`IdType`](globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### updateUser()

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Interfaces

### ContextWithTracking

#### Extends

- [`Context`](globals.md#context)

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

<a id="company-1"></a> `company?`

</td>
<td>

\{ `[key: string]`: `any`; `avatar`: `string`; `id`: `undefined` \| [`IdType`](globals.md#idtype); `name`: `string`; \}

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

`undefined` \| [`IdType`](globals.md#idtype)

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

[`TrackingMeta`](globals.md#trackingmeta)

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

\{ `[key: string]`: `any`; `avatar`: `string`; `email`: `string`; `id`: `undefined` \| [`IdType`](globals.md#idtype); `name`: `string`; \}

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

`undefined` \| [`IdType`](globals.md#idtype)

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

### Flags

Augment this interface with flag keys and their returned value types.

***

### FlagsFallbackProvider

#### Methods

##### load()

```ts
load(context: FlagsFallbackProviderContext): Promise<undefined | FlagsFallbackSnapshot>
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

`context`

</td>
<td>

[`FlagsFallbackProviderContext`](globals.md#flagsfallbackprovidercontext)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| [`FlagsFallbackSnapshot`](globals.md#flagsfallbacksnapshot)\>

##### save()

```ts
save(context: FlagsFallbackProviderContext, snapshot: FlagsFallbackSnapshot): Promise<void>
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

`context`

</td>
<td>

[`FlagsFallbackProviderContext`](globals.md#flagsfallbackprovidercontext)

</td>
</tr>
<tr>
<td>

`snapshot`

</td>
<td>

[`FlagsFallbackSnapshot`](globals.md#flagsfallbacksnapshot)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### HttpClient

#### Methods

##### get()

```ts
get<Response>(
   url: string,
   headers: Record<string, string>,
timeoutMs: number): Promise<HttpClientResponse<Response>>
```

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

`Response`

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

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HttpClientResponse`](globals.md#httpclientresponseresponse)\<`Response`\>\>

##### post()

```ts
post<Body, Response>(
   url: string,
   headers: Record<string, string>,
body: Body): Promise<HttpClientResponse<Response>>
```

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

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HttpClientResponse`](globals.md#httpclientresponseresponse)\<`Response`\>\>

***

### Logger

#### Methods

##### debug()

```ts
debug(message: string, data?: any): void
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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### error()

```ts
error(message: string, data?: any): void
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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### info()

```ts
info(message: string, data?: any): void
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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### warn()

```ts
warn(message: string, data?: any): void
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

`data`?

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

## Type Aliases

### Attributes

```ts
type Attributes = Record<string, any>;
```

***

### BatchBufferOptions\<T\>

```ts
type BatchBufferOptions<T> = {
  flushHandler: (items: T[]) => Promise<void>;
  flushOnExit: boolean;
  intervalMs: number;
  logger: Logger;
  maxSize: number;
};
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

`T`

</td>
</tr>
</tbody>
</table>

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

<a id="flushhandler"></a> `flushHandler`

</td>
<td>

(`items`: `T`[]) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

</td>
</tr>
<tr>
<td>

<a id="flushonexit"></a> `flushOnExit`?

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

<a id="intervalms"></a> `intervalMs`?

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

<a id="logger-3"></a> `logger`?

</td>
<td>

[`Logger`](globals.md#logger)

</td>
</tr>
<tr>
<td>

<a id="maxsize"></a> `maxSize`?

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

### BootstrappedFlags

```ts
type BootstrappedFlags = {
  context: Context;
  flags: RawFlags;
  flagStateVersion: number;
  protocolVersion: 2;
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

<a id="context"></a> `context`

</td>
<td>

[`Context`](globals.md#context)

</td>
</tr>
<tr>
<td>

<a id="flags-1"></a> `flags`

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

### CacheStrategy

```ts
type CacheStrategy = "periodically-update" | "in-request";
```

***

### ClientOptions

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

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`BatchBufferOptions`](globals.md#batchbufferoptionst)\<`any`\>, `"flushHandler"` \| `"logger"`\>

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

[`CacheStrategy`](globals.md#cachestrategy)

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

  \| [`TypedFlagKey`](globals.md#typedflagkey)[]
  \| [`FlagOverrides`](globals.md#flagoverrides)

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

  \| [`FlagOverrides`](globals.md#flagoverrides)
  \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

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

[`FlagsFallbackProvider`](globals.md#flagsfallbackprovider)

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

[`FlagsSyncMode`](globals.md#flagssyncmode)

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

[`HttpClient`](globals.md#httpclient)

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

[`Logger`](globals.md#logger)

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

[`LogLevel`](globals.md#loglevel)

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

### Context

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

<a id="company-2"></a> `company`?

</td>
<td>

\{
`[key: string]`: `any`;   `avatar`: `string`;
  `id`: [`IdType`](globals.md#idtype) \| `undefined`;
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

[`IdType`](globals.md#idtype) \| `undefined`

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
  `id`: [`IdType`](globals.md#idtype) \| `undefined`;
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

[`IdType`](globals.md#idtype) \| `undefined`

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

### EdgeClientOptions

```ts
type EdgeClientOptions = Omit<ClientOptions, "flagsSyncMode" | "cacheStrategy" | "flushIntervalMs" | "batchOptions">;
```

***

### FileFallbackProviderOptions

```ts
type FileFallbackProviderOptions = {
  directory: string;
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

### FlagCollection

```ts
type FlagCollection = CompiledCollection<FlagValue> & {
  segments: NonNullable<CompiledCollection["segments"]>;
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

`segments`

</td>
<td>

[`NonNullable`](https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype)\<`CompiledCollection`\[`"segments"`\]\>

</td>
</tr>
</tbody>
</table>

***

### FlagDefaultFor\<Registry, Key\>

```ts
type FlagDefaultFor<Registry, Key> = keyof Registry extends never ? FlagDefaultValue | object : Key extends keyof Registry ? ReadonlyFlagValue<Registry[Key]> | null : never;
```

Registered defaults match the value schema; null explicitly requests arbitrary JSON.

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

JSON defaults may be readonly; returned values are independent mutable copies.

***

### FlagDefinition

```ts
type FlagDefinition = CompiledFlag<FlagValue>;
```

***

### FlagEvent

```ts
type FlagEvent = {
  action: "check";
  evalContext: Record<string, unknown>;
  evalErrors: EvaluationError[];
  evalMissingFields: string[];
  evalResult: string;
  evalRuleResults: boolean[];
  flagStateVersion: number;
  key: string;
  sourceVersionId: string;
};
```

A check records the selected variant key, never its JSON payload.

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

<a id="action"></a> `action`

</td>
<td>

`"check"`

</td>
</tr>
<tr>
<td>

<a id="evalcontext"></a> `evalContext`?

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

</td>
</tr>
<tr>
<td>

<a id="evalerrors"></a> `evalErrors`?

</td>
<td>

`EvaluationError`[]

</td>
</tr>
<tr>
<td>

<a id="evalmissingfields"></a> `evalMissingFields`?

</td>
<td>

`string`[]

</td>
</tr>
<tr>
<td>

<a id="evalresult"></a> `evalResult`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="evalruleresults"></a> `evalRuleResults`?

</td>
<td>

`boolean`[]

</td>
</tr>
<tr>
<td>

<a id="flagstateversion-1"></a> `flagStateVersion`?

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

<a id="sourceversionid"></a> `sourceVersionId`?

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
type FlagOverrides = Partial<keyof Flags extends never ? Record<string, FlagValue> : { [Key in keyof Flags]: Flags[Key] }>;
```

***

### FlagOverridesFn()

```ts
type FlagOverridesFn = (context: Context) => FlagOverrides;
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

`context`

</td>
<td>

[`Context`](globals.md#context)

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagOverrides`](globals.md#flagoverrides)

***

### FlagsAPIResponse

```ts
type FlagsAPIResponse = FlagCollection & {
  flagStateVersion: number;
  protocolVersion: 2;
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

### FlagsFallbackProviderContext

```ts
type FlagsFallbackProviderContext = {
  secretKeyHash: string;
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

<a id="secretkeyhash"></a> `secretKeyHash`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### FlagsFallbackSnapshot

```ts
type FlagsFallbackSnapshot = FlagCollection & {
  flagStateVersion: number;
  savedAt: string;
  source: "static";
  version: 2;
};
```

V1 snapshots cannot be evaluated by the collection evaluator.

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

### FlagsSyncMode

```ts
type FlagsSyncMode = "polling" | "in-request" | "push";
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

Infer values from defaults, widening literals. Null explicitly requests arbitrary JSON.

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

### GCSFallbackProviderClient

```ts
type GCSFallbackProviderClient =
  | GCSLegacyClient
  | GCSGoogleApisClient;
```

***

### GCSFallbackProviderOptions

```ts
type GCSFallbackProviderOptions = {
  bucket: string;
  client: GCSFallbackProviderClient;
  keyPrefix: string;
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

[`GCSFallbackProviderClient`](globals.md#gcsfallbackproviderclient)

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

### GCSGoogleApisClient

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

### GCSLegacyClient

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

### HttpClientResponse\<Response\>

```ts
type HttpClientResponse<Response> = {
  body: Response | undefined;
  ok: boolean;
  status: number;
};
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

`Response`

</td>
</tr>
</tbody>
</table>

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

<a id="body"></a> `body`

</td>
<td>

`Response` \| `undefined`

</td>
</tr>
<tr>
<td>

<a id="ok"></a> `ok`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

<a id="status"></a> `status`

</td>
<td>

`number`

</td>
</tr>
</tbody>
</table>

***

### IdType

```ts
type IdType = string | number;
```

***

### LogLevel

```ts
type LogLevel = typeof LOG_LEVELS[number];
```

***

### RawFlag

```ts
type RawFlag = Omit<FlagEvaluationResult<FlagValue>, "sourceVersionId" | "value" | "resolved"> & {
  resolved: boolean;
  sourceVersionId: string;
  value: FlagValue | undefined;
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

[`FlagValue`](globals.md#flagvalue) \| `undefined`

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

### RedisFallbackProviderOptions

```ts
type RedisFallbackProviderOptions = {
  client: {
     get: Promise<undefined | null | string>;
     set: Promise<unknown>;
    };
  keyPrefix: string;
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

### S3FallbackProviderOptions

```ts
type S3FallbackProviderOptions = {
  bucket: string;
  client: {
     send: Promise<any>;
    };
  keyPrefix: string;
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

### StaticFallbackProviderOptions

```ts
type StaticFallbackProviderOptions = {
  flags: Record<string, FlagValue>;
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

<a id="flags-2"></a> `flags`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagValue`](globals.md#flagvalue)\>

</td>
<td>

Static fallback flags keyed by flag key.

</td>
</tr>
</tbody>
</table>

***

### TrackingMeta

```ts
type TrackingMeta = {
  active: boolean;
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

<a id="active"></a> `active`?

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

***

### TrackOptions

```ts
type TrackOptions = {
  attributes: Attributes;
  meta: TrackingMeta;
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

<a id="attributes-1"></a> `attributes`?

</td>
<td>

[`Attributes`](globals.md#attributes)

</td>
</tr>
<tr>
<td>

<a id="meta-1"></a> `meta`?

</td>
<td>

[`TrackingMeta`](globals.md#trackingmeta)

</td>
</tr>
</tbody>
</table>

***

### TypedFlagKey

```ts
type TypedFlagKey = keyof Flags extends never ? string : Extract<keyof Flags, string>;
```

***

### TypedFlags

```ts
type TypedFlags = keyof Flags extends never ? Record<string, FlagValue | undefined> : { [Key in keyof Flags]: Flags[Key] | undefined };
```

## Variables

### fallbackProviders

```ts
const fallbackProviders: {
  file: (__namedParameters: FileFallbackProviderOptions) => FlagsFallbackProvider;
  gcs: (__namedParameters: GCSFallbackProviderOptions) => FlagsFallbackProvider;
  redis: (__namedParameters: RedisFallbackProviderOptions) => FlagsFallbackProvider;
  s3: (__namedParameters: S3FallbackProviderOptions) => FlagsFallbackProvider;
  static: (__namedParameters: StaticFallbackProviderOptions) => FlagsFallbackProvider;
};
```

#### Type declaration

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

(`__namedParameters`: [`FileFallbackProviderOptions`](globals.md#filefallbackprovideroptions)) => [`FlagsFallbackProvider`](globals.md#flagsfallbackprovider)

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

(`__namedParameters`: [`GCSFallbackProviderOptions`](globals.md#gcsfallbackprovideroptions)) => [`FlagsFallbackProvider`](globals.md#flagsfallbackprovider)

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

(`__namedParameters`: [`RedisFallbackProviderOptions`](globals.md#redisfallbackprovideroptions)) => [`FlagsFallbackProvider`](globals.md#flagsfallbackprovider)

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

(`__namedParameters`: [`S3FallbackProviderOptions`](globals.md#s3fallbackprovideroptions)) => [`FlagsFallbackProvider`](globals.md#flagsfallbackprovider)

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

(`__namedParameters`: [`StaticFallbackProviderOptions`](globals.md#staticfallbackprovideroptions)) => [`FlagsFallbackProvider`](globals.md#flagsfallbackprovider)

</td>
<td>

createStaticFallbackProvider

</td>
</tr>
</tbody>
</table>
