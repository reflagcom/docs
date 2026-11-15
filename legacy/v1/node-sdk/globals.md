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
**Protocol v1 — legacy.** [Current v2 documentation](../../../supported-languages/node-sdk/globals.md) · [Migration guide](../../../supported-languages/migrating-from-v1.md)

Generated from [`@reflag/node-sdk@1.8.3`](https://github.com/reflagcom/javascript/tree/b4fe5b3d9386b87c6546175c323862d9878e1430/packages/node-sdk); SDK READMEs and code comments remain the source of truth.
{% endhint %}

# @reflag/node-sdk <a href="#reflagnode-sdk" id="reflagnode-sdk"></a>

## Classes <a href="#classes" id="classes"></a>

### BoundReflagClient <a href="#boundreflagclient" id="boundreflagclient"></a>

A client bound with a specific user, company, and other context.

#### Constructors <a href="#constructors" id="constructors"></a>

##### new BoundReflagClient() <a href="#new-boundreflagclient" id="new-boundreflagclient"></a>

```ts
new BoundReflagClient(client: ReflagClient, options: ContextWithTracking): BoundReflagClient
```

**`Internal`**

(Internal) Creates a new BoundReflagClient. Use `bindClient` to create a new client bound with a specific context.

###### Parameters <a href="#parameters" id="parameters"></a>

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

`client`

</td>
<td>

[`ReflagClient`](globals.md#reflagclient)

</td>
<td>

The `ReflagClient` to use.

</td>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The options for the client.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns" id="returns"></a>

[`BoundReflagClient`](globals.md#boundreflagclient)

#### Accessors <a href="#accessors" id="accessors"></a>

##### company <a href="#company" id="company"></a>

###### Get Signature <a href="#get-signature" id="get-signature"></a>

```ts
get company():
  | undefined
  | {
[k: string]: any;   avatar: string;
  id: undefined | string | number;
  name: string;
}
```

Gets the company associated with the client.

###### Returns <a href="#returns-1" id="returns-1"></a>

  \| `undefined`
  \| \{
`[k: string]`: `any`;   `avatar`: `string`;
  `id`: `undefined` \| `string` \| `number`;
  `name`: `string`;
 \}

The company or `undefined` if it is not set.

##### otherContext <a href="#othercontext" id="othercontext"></a>

###### Get Signature <a href="#get-signature-1" id="get-signature-1"></a>

```ts
get otherContext():
  | undefined
| Record<string, any>
```

Gets the "other" context associated with the client.

###### Returns <a href="#returns-2" id="returns-2"></a>

  \| `undefined`
  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

The "other" context or `undefined` if it is not set.

##### user <a href="#user" id="user"></a>

###### Get Signature <a href="#get-signature-2" id="get-signature-2"></a>

```ts
get user():
  | undefined
  | {
[k: string]: any;   avatar: string;
  email: string;
  id: undefined | string | number;
  name: string;
}
```

Gets the user associated with the client.

###### Returns <a href="#returns-3" id="returns-3"></a>

  \| `undefined`
  \| \{
`[k: string]`: `any`;   `avatar`: `string`;
  `email`: `string`;
  `id`: `undefined` \| `string` \| `number`;
  `name`: `string`;
 \}

The user or `undefined` if it is not set.

#### Methods <a href="#methods" id="methods"></a>

##### bindClient() <a href="#bindclient" id="bindclient"></a>

```ts
bindClient(context: ContextWithTracking): BoundReflagClient
```

Create a new client bound with the additional context.
Note: This performs a shallow merge for user/company/other individually.

###### Parameters <a href="#parameters-1" id="parameters-1"></a>

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The context to bind the client to.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-4" id="returns-4"></a>

[`BoundReflagClient`](globals.md#boundreflagclient)

new client bound with the additional context

##### flush() <a href="#flush" id="flush"></a>

```ts
flush(): Promise<void>
```

Flushes the batch buffer.

###### Returns <a href="#returns-5" id="returns-5"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### getFlag() <a href="#getflag" id="getflag"></a>

```ts
getFlag<TKey>(key: TKey): Flag
```

Get a specific flag for the user/company/other context bound to this client.
Using the `isEnabled` property sends a `check` event to Reflag.

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

`TKey` *extends* `string`

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

The key of the flag to get.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-6" id="returns-6"></a>

[`Flag`](globals.md#flagtconfig)

Flags for the given user/company and whether each one is enabled or not

##### getFlagRemote() <a href="#getflagremote" id="getflagremote"></a>

```ts
getFlagRemote(key: string): Promise<Flag>
```

Get remotely evaluated flag for the user/company/other context bound to this client.

###### Parameters <a href="#parameters-3" id="parameters-3"></a>

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

`string`

</td>
<td>

The key of the flag to get.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-7" id="returns-7"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Flag`](globals.md#flagtconfig)\>

Flag for the given user/company and key and whether it's enabled or not

##### getFlags() <a href="#getflags" id="getflags"></a>

```ts
getFlags(): Record<string, Flag>
```

Get flags for the user/company/other context bound to this client.
Meant for use in serialization of flags for transferring to the client-side/browser.

###### Returns <a href="#returns-8" id="returns-8"></a>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Flag`](globals.md#flagtconfig)\>

Flags for the given user/company and whether each one is enabled or not

##### getFlagsForBootstrap() <a href="#getflagsforbootstrap" id="getflagsforbootstrap"></a>

```ts
getFlagsForBootstrap(): BootstrappedFlags
```

Get raw flags for the user/company/other context bound to this client without wrapping them in getters.
This method returns raw flag data suitable for bootstrapping client-side applications.

###### Returns <a href="#returns-9" id="returns-9"></a>

[`BootstrappedFlags`](globals.md#bootstrappedflags)

Raw flags for the given user/company and whether each one is enabled or not

##### getFlagsRemote() <a href="#getflagsremote" id="getflagsremote"></a>

```ts
getFlagsRemote(): Promise<Record<string, Flag>>
```

Get remotely evaluated flag for the user/company/other context bound to this client.

###### Returns <a href="#returns-10" id="returns-10"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Flag`](globals.md#flagtconfig)\>\>

Flags for the given user/company and whether each one is enabled or not

##### refreshFlags() <a href="#refreshflags" id="refreshflags"></a>

```ts
refreshFlags(waitForVersion?: number): Promise<void>
```

Refreshes the flag definitions from the server.

Fetch starts are throttled to at most once per second. Outside
`in-request` mode, a call to `refreshFlags(waitForVersion)` still waits
until the cache has applied that version or newer.

In `in-request` mode, a throttled call only records pending refresh work.
The fetch then runs on the next request/access or `refreshFlags()` call
after the throttle window expires.

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

`waitForVersion`?

</td>
<td>

`number`

</td>
<td>

Optional flag state version to wait for before returning updated definitions.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-11" id="returns-11"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

##### track() <a href="#track" id="track"></a>

```ts
track(event: string, options?: TrackOptions & {
  companyId: string;
}): Promise<void>
```

Track an event in Reflag.

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

`event`

</td>
<td>

`string`

</td>
<td>

The event to track.

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `companyId`: `string`; \}

</td>
<td>

The options for the event.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-12" id="returns-12"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws" id="throws"></a>

An error if the event is invalid or the options are invalid.

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

- [`ReflagClient`](globals.md#reflagclient)

#### Constructors <a href="#constructors-1" id="constructors-1"></a>

##### new EdgeClient() <a href="#new-edgeclient" id="new-edgeclient"></a>

```ts
new EdgeClient(options: EdgeClientOptions): EdgeClient
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

`options`

</td>
<td>

[`EdgeClientOptions`](globals.md#edgeclientoptions)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-13" id="returns-13"></a>

[`EdgeClient`](globals.md#edgeclient)

###### Overrides <a href="#overrides" id="overrides"></a>

[`ReflagClient`](globals.md#reflagclient).[`constructor`](globals.md#constructors)

#### Properties <a href="#properties" id="properties"></a>

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="httpclient"></a> `httpClient`

</td>
<td>

`public`

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

<a id="logger"></a> `logger`

</td>
<td>

`readonly`

</td>
<td>

[`Logger`](globals.md#logger)

</td>
<td>

Gets the logger associated with the client.

</td>
</tr>
</tbody>
</table>

#### Accessors <a href="#accessors-1" id="accessors-1"></a>

##### flagOverrides <a href="#flagoverrides" id="flagoverrides"></a>

###### Set Signature <a href="#set-signature" id="set-signature"></a>

```ts
set flagOverrides(overrides:
  | Partial<Record<string, FlagOverride>>
  | FlagOverridesFn): void
```

###### Deprecated <a href="#deprecated" id="deprecated"></a>

Use `setFlagOverrides()` for replacing the base override set.

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagOverride`](globals.md#flagoverride)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-14" id="returns-14"></a>

`void`

###### Inherited from <a href="#inherited-from" id="inherited-from"></a>

[`ReflagClient`](globals.md#reflagclient).[`flagOverrides`](globals.md#flagoverrides)

#### Methods <a href="#methods-1" id="methods-1"></a>

##### bindClient() <a href="#bindclient-1" id="bindclient-1"></a>

```ts
bindClient(context: ContextWithTracking): BoundReflagClient
```

Returns a new BoundReflagClient with the user/company/otherContext
set to be used in subsequent calls.
For example, for evaluating flag targeting or tracking events.

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The context to bind the client to.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-15" id="returns-15"></a>

[`BoundReflagClient`](globals.md#boundreflagclient)

A new client bound with the arguments given.

###### Throws <a href="#throws-1" id="throws-1"></a>

An error if the user/company is given but their ID is not a string.

###### Remarks <a href="#remarks" id="remarks"></a>

The `updateUser` / `updateCompany` methods will automatically be called when
the user/company is set respectively.

###### Inherited from <a href="#inherited-from-1" id="inherited-from-1"></a>

[`ReflagClient`](globals.md#reflagclient).[`bindClient`](globals.md#bindclient)

##### clearFlagOverrides() <a href="#clearflagoverrides" id="clearflagoverrides"></a>

```ts
clearFlagOverrides(): void
```

Clears the base flag overrides.

###### Returns <a href="#returns-16" id="returns-16"></a>

`void`

###### Remarks <a href="#remarks-1" id="remarks-1"></a>

This does not affect temporary layers added with `pushFlagOverrides()`.

###### Example <a href="#example-1" id="example-1"></a>

```ts
client.clearFlagOverrides();
```

###### Inherited from <a href="#inherited-from-2" id="inherited-from-2"></a>

[`ReflagClient`](globals.md#reflagclient).[`clearFlagOverrides`](globals.md#clearflagoverrides)

##### destroy() <a href="#destroy" id="destroy"></a>

```ts
destroy(): void
```

Destroys the client and cleans up all resources including timers and background processes.

###### Returns <a href="#returns-17" id="returns-17"></a>

`void`

###### Remarks <a href="#remarks-2" id="remarks-2"></a>

After calling this method, the client should not be used anymore.
This is particularly useful in development environments with hot reloading to prevent
multiple background processes from running simultaneously.

###### Inherited from <a href="#inherited-from-3" id="inherited-from-3"></a>

[`ReflagClient`](globals.md#reflagclient).[`destroy`](globals.md#destroy)

##### flush() <a href="#flush-1" id="flush-1"></a>

```ts
flush(): Promise<void>
```

Flushes and completes any in-flight fetches in the flag cache.

###### Returns <a href="#returns-18" id="returns-18"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Remarks <a href="#remarks-3" id="remarks-3"></a>

It is recommended to call this method when the application is shutting down to ensure all events are sent
before the process exits.

This method is automatically called on natural process exit (`beforeExit`) if
`batchOptions.flushOnExit` is `true` in the options (default). For signal-driven
shutdown or an explicit `process.exit()`, await this method in your application's
shutdown hook before exiting. The SDK does not install signal handlers.

###### Inherited from <a href="#inherited-from-4" id="inherited-from-4"></a>

[`ReflagClient`](globals.md#reflagclient).[`flush`](globals.md#flush)

##### getFlag() <a href="#getflag-1" id="getflag-1"></a>

```ts
getFlag<TKey>(__namedParameters: ContextWithTracking, key: TKey): Flag
```

Gets the evaluated flag for the current context which includes the user, company, and custom context.
Using the `isEnabled` property sends a `check` event to Reflag.

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

`TKey` *extends* `string`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-9" id="parameters-9"></a>

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

`__namedParameters`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`key`

</td>
<td>

`TKey`

</td>
<td>

The key of the flag to get.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-19" id="returns-19"></a>

[`Flag`](globals.md#flagtconfig)

The evaluated flag.

###### Remarks <a href="#remarks-4" id="remarks-4"></a>

Call `initialize` before calling this method to ensure the flag definitions are cached, no flags will be returned otherwise.

###### Inherited from <a href="#inherited-from-5" id="inherited-from-5"></a>

[`ReflagClient`](globals.md#reflagclient).[`getFlag`](globals.md#getflag)

##### getFlagDefinitions() <a href="#getflagdefinitions" id="getflagdefinitions"></a>

```ts
getFlagDefinitions(): FlagDefinition[]
```

Gets the flag definitions, including all config values.
To evaluate which flags are enabled for a given user/company, use `getFlags`.

###### Returns <a href="#returns-20" id="returns-20"></a>

[`FlagDefinition`](globals.md#flagdefinition)[]

The flags definitions.

###### Inherited from <a href="#inherited-from-6" id="inherited-from-6"></a>

[`ReflagClient`](globals.md#reflagclient).[`getFlagDefinitions`](globals.md#getflagdefinitions)

##### getFlagRemote() <a href="#getflagremote-1" id="getflagremote-1"></a>

```ts
getFlagRemote<TKey>(
   key: TKey,
   userId?: IdType,
   companyId?: IdType,
additionalContext?: Context): Promise<Flag>
```

Gets evaluated flag with the usage of remote context.
This method triggers a network request every time it's called.

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

`TKey` *extends* `string`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-10" id="parameters-10"></a>

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

The key of the flag to get.

</td>
</tr>
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user to get the flag for.

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The companyId of the company to get the flag for.

</td>
</tr>
<tr>
<td>

`additionalContext`?

</td>
<td>

[`Context`](globals.md#context)

</td>
<td>

The additional context to get the flag for.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-21" id="returns-21"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Flag`](globals.md#flagtconfig)\>

evaluated flag

###### Inherited from <a href="#inherited-from-7" id="inherited-from-7"></a>

[`ReflagClient`](globals.md#reflagclient).[`getFlagRemote`](globals.md#getflagremote)

##### getFlags() <a href="#getflags-1" id="getflags-1"></a>

```ts
getFlags(options: ContextWithTracking): Record<string, Flag>
```

Gets the evaluated flags for the current context which includes the user, company, and custom context.

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

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The options for the context.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-22" id="returns-22"></a>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Flag`](globals.md#flagtconfig)\>

The evaluated flags.

###### Remarks <a href="#remarks-5" id="remarks-5"></a>

Call `initialize` before calling this method to ensure the flag definitions are cached, no flags will be returned otherwise.

###### Inherited from <a href="#inherited-from-8" id="inherited-from-8"></a>

[`ReflagClient`](globals.md#reflagclient).[`getFlags`](globals.md#getflags)

##### getFlagsForBootstrap() <a href="#getflagsforbootstrap-1" id="getflagsforbootstrap-1"></a>

```ts
getFlagsForBootstrap(options: ContextWithTracking): BootstrappedFlags
```

Gets the evaluated flags for the current context without wrapping them in getters.
This method returns raw flag data suitable for bootstrapping client-side applications.

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

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The options for the context.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-23" id="returns-23"></a>

[`BootstrappedFlags`](globals.md#bootstrappedflags)

The evaluated raw flags and the context.

###### Remarks <a href="#remarks-6" id="remarks-6"></a>

Call `initialize` before calling this method to ensure the flag definitions are cached, no flags will be returned otherwise.
This method returns RawFlag objects without wrapping them in getters, making them suitable for serialization.

###### Inherited from <a href="#inherited-from-9" id="inherited-from-9"></a>

[`ReflagClient`](globals.md#reflagclient).[`getFlagsForBootstrap`](globals.md#getflagsforbootstrap)

##### getFlagsRemote() <a href="#getflagsremote-1" id="getflagsremote-1"></a>

```ts
getFlagsRemote(
   userId?: IdType,
   companyId?: IdType,
additionalContext?: Context): Promise<Record<string, Flag>>
```

Gets evaluated flags with the usage of remote context.
This method triggers a network request every time it's called.

###### Parameters <a href="#parameters-13" id="parameters-13"></a>

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

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user to get the flags for.

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The companyId of the company to get the flags for.

</td>
</tr>
<tr>
<td>

`additionalContext`?

</td>
<td>

[`Context`](globals.md#context)

</td>
<td>

The additional context to get the flags for.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-24" id="returns-24"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Flag`](globals.md#flagtconfig)\>\>

evaluated flags

###### Inherited from <a href="#inherited-from-10" id="inherited-from-10"></a>

[`ReflagClient`](globals.md#reflagclient).[`getFlagsRemote`](globals.md#getflagsremote)

##### initialize() <a href="#initialize" id="initialize"></a>

```ts
initialize(): Promise<void>
```

Initializes the client by caching the flags definitions.

###### Returns <a href="#returns-25" id="returns-25"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Remarks <a href="#remarks-7" id="remarks-7"></a>

Call this method before calling `getFlags` to ensure the flag definitions are cached.
The client will ignore subsequent calls to this method.

###### Inherited from <a href="#inherited-from-11" id="inherited-from-11"></a>

[`ReflagClient`](globals.md#reflagclient).[`initialize`](globals.md#initialize)

##### pushFlagOverrides() <a href="#pushflagoverrides" id="pushflagoverrides"></a>

```ts
pushFlagOverrides(overrides:
  | Partial<Record<string, FlagOverride>>
  | FlagOverridesFn): () => void
```

Temporarily layers flag overrides on top of the current overrides.

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagOverride`](globals.md#flagoverride)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
<td>

The flag overrides to apply for the scoped period.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-26" id="returns-26"></a>

`Function`

A remove function that removes only this override layer.

###### Returns <a href="#returns-27" id="returns-27"></a>

`void`

###### Remarks <a href="#remarks-8" id="remarks-8"></a>

This is intended for tests or other short-lived local overrides. The remove
function is idempotent and can safely be called multiple times.

###### Example <a href="#example-2" id="example-2"></a>

```ts
let remove: (() => void) | undefined;

beforeEach(() => {
  remove = client.pushFlagOverrides({ "flag-1": true });
});

afterEach(() => {
  remove?.();
  remove = undefined;
});
```

###### Inherited from <a href="#inherited-from-12" id="inherited-from-12"></a>

[`ReflagClient`](globals.md#reflagclient).[`pushFlagOverrides`](globals.md#pushflagoverrides)

##### refreshFlags() <a href="#refreshflags-1" id="refreshflags-1"></a>

```ts
refreshFlags(waitForVersion?: number): Promise<void>
```

Refreshes the flag definitions from the server.

###### Parameters <a href="#parameters-15" id="parameters-15"></a>

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

`waitForVersion`?

</td>
<td>

`number`

</td>
<td>

Optional flag state version to wait for before returning updated definitions.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-28" id="returns-28"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Remarks <a href="#remarks-9" id="remarks-9"></a>

This triggers an on-demand refresh of the cached flag definitions.
Useful when you know flags have changed and don't want to wait for the next automatic refresh cycle.

Note: updated flag rules take a few seconds to propagate to all servers.

Fetch starts are throttled to at most once per second.
Outside `in-request` mode, throttling only delays when the next fetch
begins: `refreshFlags(99)` still waits until the cache has applied flag
definitions from version `99` or newer before the promise resolves.
Concurrent callers are deduplicated and may share the same in-flight or
scheduled follow-up refresh.

In `in-request` mode, delayed follow-up refreshes are not scheduled. On edge
runtimes like Cloudflare Workers, a call during the throttle window only
records pending refresh work, and the promise may resolve before that fetch
runs. The pending refresh is executed on the next request/access or
`refreshFlags()` call after the throttle window expires.

###### Inherited from <a href="#inherited-from-13" id="inherited-from-13"></a>

[`ReflagClient`](globals.md#reflagclient).[`refreshFlags`](globals.md#refreshflags)

##### setFlagOverrides() <a href="#setflagoverrides" id="setflagoverrides"></a>

```ts
setFlagOverrides(overrides:
  | Partial<Record<string, FlagOverride>>
  | FlagOverridesFn): void
```

Replaces the base flag overrides used by the client.

###### Parameters <a href="#parameters-16" id="parameters-16"></a>

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagOverride`](globals.md#flagoverride)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
<td>

The flag overrides.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-29" id="returns-29"></a>

`void`

###### Remarks <a href="#remarks-10" id="remarks-10"></a>

Base overrides are always applied before any temporary layers added through
`pushFlagOverrides()`.

###### Example <a href="#example-3" id="example-3"></a>

```ts
client.setFlagOverrides({
  "flag-1": true,
  "flag-2": false,
});
```

###### Inherited from <a href="#inherited-from-14" id="inherited-from-14"></a>

[`ReflagClient`](globals.md#reflagclient).[`setFlagOverrides`](globals.md#setflagoverrides)

##### track() <a href="#track-1" id="track-1"></a>

```ts
track(
   userId: IdType,
   event: string,
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

Tracks an event in Reflag.

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

###### Returns <a href="#returns-30" id="returns-30"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws-2" id="throws-2"></a>

An error if the user is not set or the event is invalid or the options are invalid.

###### Remarks <a href="#remarks-11" id="remarks-11"></a>

If the company is set, the event will be associated with the company.

###### Inherited from <a href="#inherited-from-15" id="inherited-from-15"></a>

[`ReflagClient`](globals.md#reflagclient).[`track`](globals.md#track)

##### updateCompany() <a href="#updatecompany" id="updatecompany"></a>

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

Updates the associated company in Reflag.

###### Parameters <a href="#parameters-18" id="parameters-18"></a>

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

`companyId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The companyId of the company to update.

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `userId`: [`IdType`](globals.md#idtype); \}

</td>
<td>

The options for the company.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-31" id="returns-31"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws-3" id="throws-3"></a>

An error if the company is not set or the options are invalid.

###### Remarks <a href="#remarks-12" id="remarks-12"></a>

The company must be set using `withCompany` before calling this method.
If the user is set, the company will be associated with the user.

###### Inherited from <a href="#inherited-from-16" id="inherited-from-16"></a>

[`ReflagClient`](globals.md#reflagclient).[`updateCompany`](globals.md#updatecompany)

##### updateUser() <a href="#updateuser" id="updateuser"></a>

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
```

Updates the associated user in Reflag.

###### Parameters <a href="#parameters-19" id="parameters-19"></a>

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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user to update.

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions)

</td>
<td>

The options for the user.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-32" id="returns-32"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws-4" id="throws-4"></a>

An error if the company is not set or the options are invalid.

###### Remarks <a href="#remarks-13" id="remarks-13"></a>

The company must be set using `withCompany` before calling this method.
If the user is set, the company will be associated with the user.

###### Inherited from <a href="#inherited-from-17" id="inherited-from-17"></a>

[`ReflagClient`](globals.md#reflagclient).[`updateUser`](globals.md#updateuser)

***

### ReflagClient <a href="#reflagclient" id="reflagclient"></a>

The SDK client.

#### Remarks <a href="#remarks-14" id="remarks-14"></a>

This is the main class for interacting with Reflag.
It is used to evaluate flags, update user and company contexts, and track events.

#### Example <a href="#example-4" id="example-4"></a>

```ts
// set the REFLAG_SECRET_KEY environment variable or pass the secret key to the constructor
const client = new ReflagClient();

// evaluate a flag
const isFlagEnabled = client.getFlag("flag-key", {
  user: { id: "user-id" },
  company: { id: "company-id" },
});
```

#### Extended by <a href="#extended-by" id="extended-by"></a>

- [`EdgeClient`](globals.md#edgeclient)

#### Constructors <a href="#constructors-2" id="constructors-2"></a>

##### new ReflagClient() <a href="#new-reflagclient" id="new-reflagclient"></a>

```ts
new ReflagClient(options: ClientOptions): ReflagClient
```

Creates a new SDK client.
See README for configuration options.

###### Parameters <a href="#parameters-20" id="parameters-20"></a>

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

`options`

</td>
<td>

[`ClientOptions`](globals.md#clientoptions)

</td>
<td>

The options for the client or an existing client to clone.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-33" id="returns-33"></a>

[`ReflagClient`](globals.md#reflagclient)

###### Throws <a href="#throws-5" id="throws-5"></a>

An error if the options are invalid.

#### Properties <a href="#properties-1" id="properties-1"></a>

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="httpclient-1"></a> `httpClient`

</td>
<td>

`public`

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

<a id="logger-1"></a> `logger`

</td>
<td>

`readonly`

</td>
<td>

[`Logger`](globals.md#logger)

</td>
<td>

Gets the logger associated with the client.

</td>
</tr>
</tbody>
</table>

#### Accessors <a href="#accessors-2" id="accessors-2"></a>

##### flagOverrides <a href="#flagoverrides-1" id="flagoverrides-1"></a>

###### Set Signature <a href="#set-signature-1" id="set-signature-1"></a>

```ts
set flagOverrides(overrides:
  | Partial<Record<string, FlagOverride>>
  | FlagOverridesFn): void
```

###### Deprecated <a href="#deprecated-1" id="deprecated-1"></a>

Use `setFlagOverrides()` for replacing the base override set.

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagOverride`](globals.md#flagoverride)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-34" id="returns-34"></a>

`void`

#### Methods <a href="#methods-2" id="methods-2"></a>

##### bindClient() <a href="#bindclient-2" id="bindclient-2"></a>

```ts
bindClient(context: ContextWithTracking): BoundReflagClient
```

Returns a new BoundReflagClient with the user/company/otherContext
set to be used in subsequent calls.
For example, for evaluating flag targeting or tracking events.

###### Parameters <a href="#parameters-22" id="parameters-22"></a>

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The context to bind the client to.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-35" id="returns-35"></a>

[`BoundReflagClient`](globals.md#boundreflagclient)

A new client bound with the arguments given.

###### Throws <a href="#throws-6" id="throws-6"></a>

An error if the user/company is given but their ID is not a string.

###### Remarks <a href="#remarks-15" id="remarks-15"></a>

The `updateUser` / `updateCompany` methods will automatically be called when
the user/company is set respectively.

##### clearFlagOverrides() <a href="#clearflagoverrides-1" id="clearflagoverrides-1"></a>

```ts
clearFlagOverrides(): void
```

Clears the base flag overrides.

###### Returns <a href="#returns-36" id="returns-36"></a>

`void`

###### Remarks <a href="#remarks-16" id="remarks-16"></a>

This does not affect temporary layers added with `pushFlagOverrides()`.

###### Example <a href="#example-5" id="example-5"></a>

```ts
client.clearFlagOverrides();
```

##### destroy() <a href="#destroy-1" id="destroy-1"></a>

```ts
destroy(): void
```

Destroys the client and cleans up all resources including timers and background processes.

###### Returns <a href="#returns-37" id="returns-37"></a>

`void`

###### Remarks <a href="#remarks-17" id="remarks-17"></a>

After calling this method, the client should not be used anymore.
This is particularly useful in development environments with hot reloading to prevent
multiple background processes from running simultaneously.

##### flush() <a href="#flush-2" id="flush-2"></a>

```ts
flush(): Promise<void>
```

Flushes and completes any in-flight fetches in the flag cache.

###### Returns <a href="#returns-38" id="returns-38"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Remarks <a href="#remarks-18" id="remarks-18"></a>

It is recommended to call this method when the application is shutting down to ensure all events are sent
before the process exits.

This method is automatically called on natural process exit (`beforeExit`) if
`batchOptions.flushOnExit` is `true` in the options (default). For signal-driven
shutdown or an explicit `process.exit()`, await this method in your application's
shutdown hook before exiting. The SDK does not install signal handlers.

##### getFlag() <a href="#getflag-2" id="getflag-2"></a>

```ts
getFlag<TKey>(__namedParameters: ContextWithTracking, key: TKey): Flag
```

Gets the evaluated flag for the current context which includes the user, company, and custom context.
Using the `isEnabled` property sends a `check` event to Reflag.

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

`TKey` *extends* `string`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-23" id="parameters-23"></a>

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

`__namedParameters`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`key`

</td>
<td>

`TKey`

</td>
<td>

The key of the flag to get.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-39" id="returns-39"></a>

[`Flag`](globals.md#flagtconfig)

The evaluated flag.

###### Remarks <a href="#remarks-19" id="remarks-19"></a>

Call `initialize` before calling this method to ensure the flag definitions are cached, no flags will be returned otherwise.

##### getFlagDefinitions() <a href="#getflagdefinitions-1" id="getflagdefinitions-1"></a>

```ts
getFlagDefinitions(): FlagDefinition[]
```

Gets the flag definitions, including all config values.
To evaluate which flags are enabled for a given user/company, use `getFlags`.

###### Returns <a href="#returns-40" id="returns-40"></a>

[`FlagDefinition`](globals.md#flagdefinition)[]

The flags definitions.

##### getFlagRemote() <a href="#getflagremote-2" id="getflagremote-2"></a>

```ts
getFlagRemote<TKey>(
   key: TKey,
   userId?: IdType,
   companyId?: IdType,
additionalContext?: Context): Promise<Flag>
```

Gets evaluated flag with the usage of remote context.
This method triggers a network request every time it's called.

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

`TKey` *extends* `string`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-24" id="parameters-24"></a>

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

The key of the flag to get.

</td>
</tr>
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user to get the flag for.

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The companyId of the company to get the flag for.

</td>
</tr>
<tr>
<td>

`additionalContext`?

</td>
<td>

[`Context`](globals.md#context)

</td>
<td>

The additional context to get the flag for.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-41" id="returns-41"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Flag`](globals.md#flagtconfig)\>

evaluated flag

##### getFlags() <a href="#getflags-2" id="getflags-2"></a>

```ts
getFlags(options: ContextWithTracking): Record<string, Flag>
```

Gets the evaluated flags for the current context which includes the user, company, and custom context.

###### Parameters <a href="#parameters-25" id="parameters-25"></a>

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

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The options for the context.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-42" id="returns-42"></a>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Flag`](globals.md#flagtconfig)\>

The evaluated flags.

###### Remarks <a href="#remarks-20" id="remarks-20"></a>

Call `initialize` before calling this method to ensure the flag definitions are cached, no flags will be returned otherwise.

##### getFlagsForBootstrap() <a href="#getflagsforbootstrap-2" id="getflagsforbootstrap-2"></a>

```ts
getFlagsForBootstrap(options: ContextWithTracking): BootstrappedFlags
```

Gets the evaluated flags for the current context without wrapping them in getters.
This method returns raw flag data suitable for bootstrapping client-side applications.

###### Parameters <a href="#parameters-26" id="parameters-26"></a>

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

`options`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
<td>

The options for the context.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-43" id="returns-43"></a>

[`BootstrappedFlags`](globals.md#bootstrappedflags)

The evaluated raw flags and the context.

###### Remarks <a href="#remarks-21" id="remarks-21"></a>

Call `initialize` before calling this method to ensure the flag definitions are cached, no flags will be returned otherwise.
This method returns RawFlag objects without wrapping them in getters, making them suitable for serialization.

##### getFlagsRemote() <a href="#getflagsremote-2" id="getflagsremote-2"></a>

```ts
getFlagsRemote(
   userId?: IdType,
   companyId?: IdType,
additionalContext?: Context): Promise<Record<string, Flag>>
```

Gets evaluated flags with the usage of remote context.
This method triggers a network request every time it's called.

###### Parameters <a href="#parameters-27" id="parameters-27"></a>

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

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user to get the flags for.

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The companyId of the company to get the flags for.

</td>
</tr>
<tr>
<td>

`additionalContext`?

</td>
<td>

[`Context`](globals.md#context)

</td>
<td>

The additional context to get the flags for.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-44" id="returns-44"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`Flag`](globals.md#flagtconfig)\>\>

evaluated flags

##### initialize() <a href="#initialize-1" id="initialize-1"></a>

```ts
initialize(): Promise<void>
```

Initializes the client by caching the flags definitions.

###### Returns <a href="#returns-45" id="returns-45"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Remarks <a href="#remarks-22" id="remarks-22"></a>

Call this method before calling `getFlags` to ensure the flag definitions are cached.
The client will ignore subsequent calls to this method.

##### pushFlagOverrides() <a href="#pushflagoverrides-1" id="pushflagoverrides-1"></a>

```ts
pushFlagOverrides(overrides:
  | Partial<Record<string, FlagOverride>>
  | FlagOverridesFn): () => void
```

Temporarily layers flag overrides on top of the current overrides.

###### Parameters <a href="#parameters-28" id="parameters-28"></a>

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagOverride`](globals.md#flagoverride)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
<td>

The flag overrides to apply for the scoped period.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-46" id="returns-46"></a>

`Function`

A remove function that removes only this override layer.

###### Returns <a href="#returns-47" id="returns-47"></a>

`void`

###### Remarks <a href="#remarks-23" id="remarks-23"></a>

This is intended for tests or other short-lived local overrides. The remove
function is idempotent and can safely be called multiple times.

###### Example <a href="#example-6" id="example-6"></a>

```ts
let remove: (() => void) | undefined;

beforeEach(() => {
  remove = client.pushFlagOverrides({ "flag-1": true });
});

afterEach(() => {
  remove?.();
  remove = undefined;
});
```

##### refreshFlags() <a href="#refreshflags-2" id="refreshflags-2"></a>

```ts
refreshFlags(waitForVersion?: number): Promise<void>
```

Refreshes the flag definitions from the server.

###### Parameters <a href="#parameters-29" id="parameters-29"></a>

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

`waitForVersion`?

</td>
<td>

`number`

</td>
<td>

Optional flag state version to wait for before returning updated definitions.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-48" id="returns-48"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Remarks <a href="#remarks-24" id="remarks-24"></a>

This triggers an on-demand refresh of the cached flag definitions.
Useful when you know flags have changed and don't want to wait for the next automatic refresh cycle.

Note: updated flag rules take a few seconds to propagate to all servers.

Fetch starts are throttled to at most once per second.
Outside `in-request` mode, throttling only delays when the next fetch
begins: `refreshFlags(99)` still waits until the cache has applied flag
definitions from version `99` or newer before the promise resolves.
Concurrent callers are deduplicated and may share the same in-flight or
scheduled follow-up refresh.

In `in-request` mode, delayed follow-up refreshes are not scheduled. On edge
runtimes like Cloudflare Workers, a call during the throttle window only
records pending refresh work, and the promise may resolve before that fetch
runs. The pending refresh is executed on the next request/access or
`refreshFlags()` call after the throttle window expires.

##### setFlagOverrides() <a href="#setflagoverrides-1" id="setflagoverrides-1"></a>

```ts
setFlagOverrides(overrides:
  | Partial<Record<string, FlagOverride>>
  | FlagOverridesFn): void
```

Replaces the base flag overrides used by the client.

###### Parameters <a href="#parameters-30" id="parameters-30"></a>

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

`overrides`

</td>
<td>

 \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`FlagOverride`](globals.md#flagoverride)\>\> \| [`FlagOverridesFn`](globals.md#flagoverridesfn)

</td>
<td>

The flag overrides.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-49" id="returns-49"></a>

`void`

###### Remarks <a href="#remarks-25" id="remarks-25"></a>

Base overrides are always applied before any temporary layers added through
`pushFlagOverrides()`.

###### Example <a href="#example-7" id="example-7"></a>

```ts
client.setFlagOverrides({
  "flag-1": true,
  "flag-2": false,
});
```

##### track() <a href="#track-2" id="track-2"></a>

```ts
track(
   userId: IdType,
   event: string,
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

Tracks an event in Reflag.

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

###### Returns <a href="#returns-50" id="returns-50"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws-7" id="throws-7"></a>

An error if the user is not set or the event is invalid or the options are invalid.

###### Remarks <a href="#remarks-26" id="remarks-26"></a>

If the company is set, the event will be associated with the company.

##### updateCompany() <a href="#updatecompany-1" id="updatecompany-1"></a>

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

Updates the associated company in Reflag.

###### Parameters <a href="#parameters-32" id="parameters-32"></a>

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

`companyId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The companyId of the company to update.

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `userId`: [`IdType`](globals.md#idtype); \}

</td>
<td>

The options for the company.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-51" id="returns-51"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws-8" id="throws-8"></a>

An error if the company is not set or the options are invalid.

###### Remarks <a href="#remarks-27" id="remarks-27"></a>

The company must be set using `withCompany` before calling this method.
If the user is set, the company will be associated with the user.

##### updateUser() <a href="#updateuser-1" id="updateuser-1"></a>

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
```

Updates the associated user in Reflag.

###### Parameters <a href="#parameters-33" id="parameters-33"></a>

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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user to update.

</td>
</tr>
<tr>
<td>

`options`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions)

</td>
<td>

The options for the user.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-52" id="returns-52"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

###### Throws <a href="#throws-9" id="throws-9"></a>

An error if the company is not set or the options are invalid.

###### Remarks <a href="#remarks-28" id="remarks-28"></a>

The company must be set using `withCompany` before calling this method.
If the user is set, the company will be associated with the user.

## Interfaces <a href="#interfaces" id="interfaces"></a>

### ContextWithTracking <a href="#contextwithtracking" id="contextwithtracking"></a>

A context with tracking option.

#### Extends <a href="#extends-1" id="extends-1"></a>

- [`Context`](globals.md#context)

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

<a id="company-1"></a> `company?`

</td>
<td>

\{ `[k: string]`: `any`; `avatar`: `string`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; \}

</td>
<td>

The company context. If no `id` key is set, the whole object is ignored.

</td>
</tr>
<tr>
<td>

`company.avatar?`

</td>
<td>

`string`

</td>
<td>

The avatar URL of the company.

</td>
</tr>
<tr>
<td>

`company.id`

</td>
<td>

`undefined` \| `string` \| `number`

</td>
<td>

The identifier of the company.

</td>
</tr>
<tr>
<td>

`company.name?`

</td>
<td>

`string`

</td>
<td>

The name of the company.

</td>
</tr>
<tr>
<td>

<a id="enabletracking"></a> `enableTracking?`

</td>
<td>

`boolean`

</td>
<td>

Enable tracking for the context.
If set to `false`, tracking will be disabled for the context. Default is `true`.

</td>
</tr>
<tr>
<td>

<a id="meta"></a> `meta?`

</td>
<td>

[`TrackingMeta`](globals.md#trackingmeta)

</td>
<td>

The meta context used to update the user or company when syncing is required during
feature retrieval.

</td>
</tr>
<tr>
<td>

<a id="other"></a> `other?`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
<td>

The other context. This is used for any additional context that is not related to user or company.

</td>
</tr>
<tr>
<td>

<a id="user-1"></a> `user?`

</td>
<td>

\{ `[k: string]`: `any`; `avatar`: `string`; `email`: `string`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; \}

</td>
<td>

The user context. If no `id` key is set, the whole object is ignored.

</td>
</tr>
<tr>
<td>

`user.avatar?`

</td>
<td>

`string`

</td>
<td>

The avatar URL of the user.

</td>
</tr>
<tr>
<td>

`user.email?`

</td>
<td>

`string`

</td>
<td>

The email of the user.

</td>
</tr>
<tr>
<td>

`user.id`

</td>
<td>

`undefined` \| `string` \| `number`

</td>
<td>

The identifier of the user.

</td>
</tr>
<tr>
<td>

`user.name?`

</td>
<td>

`string`

</td>
<td>

The name of the user.

</td>
</tr>
</tbody>
</table>

***

### Flag\<TConfig\> <a href="#flagtconfig" id="flagtconfig"></a>

Describes a feature

#### Type Parameters <a href="#type-parameters-5" id="type-parameters-5"></a>

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

<a id="config"></a> `config`

</td>
<td>

 \| [`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig) \| \{ `key`: `string`; \} & `TConfig`

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

If the feature is enabled.

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

The key of the feature.

</td>
</tr>
</tbody>
</table>

#### Methods <a href="#methods-3" id="methods-3"></a>

##### track() <a href="#track-3" id="track-3"></a>

```ts
track(): Promise<void>
```

Track feature usage in Reflag.

###### Returns <a href="#returns-53" id="returns-53"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### Flags <a href="#flags" id="flags"></a>

Describes a collection of evaluated features.

#### Remarks <a href="#remarks-29" id="remarks-29"></a>

You should extend the Flags interface to define the available features.

***

### FlagsFallbackProvider <a href="#flagsfallbackprovider" id="flagsfallbackprovider"></a>

Provider used to load and save raw flag definition snapshots.

#### Methods <a href="#methods-4" id="methods-4"></a>

##### load() <a href="#load" id="load"></a>

```ts
load(context: FlagsFallbackProviderContext): Promise<undefined | FlagsFallbackSnapshot>
```

Load a previously saved snapshot.

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

`context`

</td>
<td>

[`FlagsFallbackProviderContext`](globals.md#flagsfallbackprovidercontext)

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-54" id="returns-54"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| [`FlagsFallbackSnapshot`](globals.md#flagsfallbacksnapshot)\>

##### save() <a href="#save" id="save"></a>

```ts
save(context: FlagsFallbackProviderContext, snapshot: FlagsFallbackSnapshot): Promise<void>
```

Persist a snapshot after a successful live fetch.

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

###### Returns <a href="#returns-55" id="returns-55"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### HttpClient <a href="#httpclient" id="httpclient"></a>

Defines the interface for an HTTP client.

#### Remarks <a href="#remarks-30" id="remarks-30"></a>

This interface is used to abstract the HTTP client implementation from the SDK.
Define your own implementation of this interface to use a different HTTP client.

#### Methods <a href="#methods-5" id="methods-5"></a>

##### get() <a href="#get" id="get"></a>

```ts
get<TResponse>(
   url: string,
   headers: Record<string, string>,
timeoutMs: number): Promise<HttpClientResponse<TResponse>>
```

Sends a GET request to the specified URL.

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

`TResponse`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-36" id="parameters-36"></a>

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

`url`

</td>
<td>

`string`

</td>
<td>

The URL to send the request to.

</td>
</tr>
<tr>
<td>

`headers`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

</td>
<td>

The headers to include in the request.

</td>
</tr>
<tr>
<td>

`timeoutMs`

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

###### Returns <a href="#returns-56" id="returns-56"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HttpClientResponse`](globals.md#httpclientresponsetresponse)\<`TResponse`\>\>

The response from the server.

##### post() <a href="#post" id="post"></a>

```ts
post<TBody, TResponse>(
   url: string,
   headers: Record<string, string>,
body: TBody): Promise<HttpClientResponse<TResponse>>
```

Sends a POST request to the specified URL.

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

`TBody`

</td>
</tr>
<tr>
<td>

`TResponse`

</td>
</tr>
</tbody>
</table>

###### Parameters <a href="#parameters-37" id="parameters-37"></a>

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

`url`

</td>
<td>

`string`

</td>
<td>

The URL to send the request to.

</td>
</tr>
<tr>
<td>

`headers`

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

</td>
<td>

The headers to include in the request.

</td>
</tr>
<tr>
<td>

`body`

</td>
<td>

`TBody`

</td>
<td>

The body of the request.

</td>
</tr>
</tbody>
</table>

###### Returns <a href="#returns-57" id="returns-57"></a>

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`HttpClientResponse`](globals.md#httpclientresponsetresponse)\<`TResponse`\>\>

The response from the server.

***

### Logger <a href="#logger" id="logger"></a>

Logger interface for logging messages

#### Properties <a href="#properties-4" id="properties-4"></a>

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

<a id="debug"></a> `debug`

</td>
<td>

(`message`: `string`, `data`?: `any`) => `void`

</td>
<td>

Log a debug messages

</td>
</tr>
<tr>
<td>

<a id="error"></a> `error`

</td>
<td>

(`message`: `string`, `data`?: `any`) => `void`

</td>
<td>

Log an error messages

</td>
</tr>
<tr>
<td>

<a id="info"></a> `info`

</td>
<td>

(`message`: `string`, `data`?: `any`) => `void`

</td>
<td>

Log an info messages

</td>
</tr>
<tr>
<td>

<a id="warn"></a> `warn`

</td>
<td>

(`message`: `string`, `data`?: `any`) => `void`

</td>
<td>

Log a warning messages

</td>
</tr>
</tbody>
</table>

***

### RawFlag <a href="#rawflag" id="rawflag"></a>

Describes a feature.

#### Properties <a href="#properties-5" id="properties-5"></a>

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

<a id="config-1"></a> `config?`

</td>
<td>

[`RawFlagRemoteConfig`](globals.md#rawflagremoteconfig)

</td>
<td>

The remote configuration value for the feature.

</td>
</tr>
<tr>
<td>

<a id="evaluationerrors"></a> `evaluationErrors?`

</td>
<td>

`EvaluationError`[]

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

If the feature is enabled.

</td>
</tr>
<tr>
<td>

<a id="key-1"></a> `key`

</td>
<td>

`string`

</td>
<td>

The key of the feature.

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

The missing fields in the evaluation context (optional).

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

The rule results of the evaluation (optional).

</td>
</tr>
<tr>
<td>

<a id="targetingversion"></a> `targetingVersion?`

</td>
<td>

`number`

</td>
<td>

The version of the targeting used to evaluate if the feature is enabled (optional).

</td>
</tr>
</tbody>
</table>

## Type Aliases <a href="#type-aliases" id="type-aliases"></a>

### Attributes <a href="#attributes" id="attributes"></a>

```ts
type Attributes = Record<string, any>;
```

Describes the attributes of a user, company or event.

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

Options for configuring the BatchBuffer.

#### Type Parameters <a href="#type-parameters-8" id="type-parameters-8"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The type of items in the buffer.

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

A function that handles flushing the items in the buffer.

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

Whether to flush the buffer on natural process exit (`beforeExit`).
This does not install signal handlers. For signal-driven shutdown or an
explicit `process.exit()`, await `client.flush()` in your application's
shutdown hook before exiting.

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

The interval in milliseconds at which the buffer is flushed.

**Remarks**

If `0`, the buffer is flushed only when `maxSize` is reached.

</td>
</tr>
<tr>
<td>

<a id="logger-3"></a> `logger`?

</td>
<td>

[`Logger`](globals.md#logger)

</td>
<td>

The logger to use for logging (optional).

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

The maximum size of the buffer before it is flushed.

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
};
```

Describes a collection of evaluated raw flags and the context for bootstrapping.

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
     | Record<TypedFlagKey, Exclude<FlagOverride, false>>;
  fetchTimeoutMs: number;
  flagOverrides:   | FlagOverrides
     | (context: Context) => FlagOverrides;
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

Defines the options for the SDK client.

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

The host to send requests to (optional).

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

The options for the batch buffer (optional).
If not provided, the default options are used.

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

Use `flagsSyncMode`.

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

The path to the config file. If supplied, the config file will be loaded.
Defaults to `reflag.config.json` when NODE_ENV is not production. Can also be
set through the environment variable REFLAG_CONFIG_FILE.

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

Deprecated: evaluation events are no longer emitted.

**Deprecated**

This option has no effect and will be removed in the next major version.

</td>
</tr>
<tr>
<td>

<a id="fallbackflags"></a> `fallbackFlags`?

</td>
<td>

  \| [`TypedFlagKey`](globals.md#typedflagkey)[]
  \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`TypedFlagKey`](globals.md#typedflagkey), [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)\<[`FlagOverride`](globals.md#flagoverride), `false`\>\>

</td>
<td>

The features to "enable" as fallbacks when the API is unavailable (optional).
Can be an array of feature keys, or a record of feature keys and boolean or object values.

If a record is supplied instead of array, the values of each key are either the
configuration values or the boolean value `true`.

**Deprecated**

Use `flagsFallbackProvider` instead.

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

The timeout in milliseconds for fetching feature targeting data (optional).
Default is 10000 ms.

</td>
</tr>
<tr>
<td>

<a id="flagoverrides-2"></a> `flagOverrides`?

</td>
<td>

  \| [`FlagOverrides`](globals.md#flagoverrides)
  \| (`context`: [`Context`](globals.md#context)) => [`FlagOverrides`](globals.md#flagoverrides)

</td>
<td>

Local flag overrides for testing or development.

If a function is specified, the function will be called with the context
and should return a record of flag keys and boolean or object values.

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

Optional provider used to load and save raw flag definitions for fallback startup.
Ignored in offline mode.

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

Number of times to retry fetching feature definitions (optional).
Default is 3 times.

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

Push endpoint used when `flagsSyncMode` is `"push"`.

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

How flag definitions are synchronized.

- `push` (default): live updates over SSE keep flag definitions up to date.
- `polling`: periodic background refresh.
- `in-request`: stale refresh is triggered during request handling.

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

Use `apiBaseUrl` instead.

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

The HTTP client to use for sending requests (optional). Default is the built-in fetch client.

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

The logger to use for logging (optional). Default is info level logging to console.

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

Use the console logger, but set a log level. Ineffective if a custom logger is provided.

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

In offline mode, no data is sent or fetched from the the Reflag API,
and `flagsFallbackProvider` is not used.
This is useful for testing or development.

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

The secret key used to authenticate with the Reflag API.

</td>
</tr>
</tbody>
</table>

***

### Context <a href="#context" id="context"></a>

```ts
type Context = {
  company: {
   [k: string]: any;   avatar: string;
     id: string | number | undefined;
     name: string;
    };
  other: Record<string, any>;
  user: {
   [k: string]: any;   avatar: string;
     email: string;
     id: string | number | undefined;
     name: string;
    };
};
```

Describes the current user context, company context, and other context.
This is used to determine if feature targeting matches and to track events.

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

<a id="company-2"></a> `company`?

</td>
<td>

\{
`[k: string]`: `any`;   `avatar`: `string`;
  `id`: `string` \| `number` \| `undefined`;
  `name`: `string`;
 \}

</td>
<td>

The company context. If no `id` key is set, the whole object is ignored.

</td>
</tr>
<tr>
<td>

`company.avatar`?

</td>
<td>

`string`

</td>
<td>

The avatar URL of the company.

</td>
</tr>
<tr>
<td>

`company.id`

</td>
<td>

`string` \| `number` \| `undefined`

</td>
<td>

The identifier of the company.

</td>
</tr>
<tr>
<td>

`company.name`?

</td>
<td>

`string`

</td>
<td>

The name of the company.

</td>
</tr>
<tr>
<td>

<a id="other-1"></a> `other`?

</td>
<td>

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>

</td>
<td>

The other context. This is used for any additional context that is not related to user or company.

</td>
</tr>
<tr>
<td>

<a id="user-2"></a> `user`?

</td>
<td>

\{
`[k: string]`: `any`;   `avatar`: `string`;
  `email`: `string`;
  `id`: `string` \| `number` \| `undefined`;
  `name`: `string`;
 \}

</td>
<td>

The user context. If no `id` key is set, the whole object is ignored.

</td>
</tr>
<tr>
<td>

`user.avatar`?

</td>
<td>

`string`

</td>
<td>

The avatar URL of the user.

</td>
</tr>
<tr>
<td>

`user.email`?

</td>
<td>

`string`

</td>
<td>

The email of the user.

</td>
</tr>
<tr>
<td>

`user.id`

</td>
<td>

`string` \| `number` \| `undefined`

</td>
<td>

The identifier of the user.

</td>
</tr>
<tr>
<td>

`user.name`?

</td>
<td>

`string`

</td>
<td>

The name of the user.

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

### EmptyFlagRemoteConfig <a href="#emptyflagremoteconfig" id="emptyflagremoteconfig"></a>

```ts
type EmptyFlagRemoteConfig = {
  key: undefined;
  payload: undefined;
};
```

#### Type declaration <a href="#type-declaration-4" id="type-declaration-4"></a>

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

### FileFallbackProviderOptions <a href="#filefallbackprovideroptions" id="filefallbackprovideroptions"></a>

```ts
type FileFallbackProviderOptions = {
  directory: string;
};
```

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

### FlagAPIResponse <a href="#flagapiresponse" id="flagapiresponse"></a>

```ts
type FlagAPIResponse = {
  config: {
     variants: FlagConfigVariant[];
     version: number;
    };
  description: string | null;
  key: string;
  targeting: {
     rules: {
        filter: RuleFilter;
       }[];
     version: number;
    };
};
```

**`Internal`**

(Internal) Describes a specific feature in the API response.

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

<a id="config-2"></a> `config`?

</td>
<td>

\{
  `variants`: [`FlagConfigVariant`](globals.md#flagconfigvariant)[];
  `version`: `number`;
 \}

</td>
<td>

The remote configuration for the feature.

</td>
</tr>
<tr>
<td>

`config.variants`

</td>
<td>

[`FlagConfigVariant`](globals.md#flagconfigvariant)[]

</td>
<td>

The variants of the remote configuration.

</td>
</tr>
<tr>
<td>

`config.version`

</td>
<td>

`number`

</td>
<td>

The version of the remote configuration.

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

Description of the feature.

</td>
</tr>
<tr>
<td>

<a id="key-3"></a> `key`

</td>
<td>

`string`

</td>
<td>

The key of the feature.

</td>
</tr>
<tr>
<td>

<a id="targeting"></a> `targeting`

</td>
<td>

\{
  `rules`: \{
     `filter`: `RuleFilter`;
    \}[];
  `version`: `number`;
 \}

</td>
<td>

The targeting rules for the feature.

</td>
</tr>
<tr>
<td>

`targeting.rules`

</td>
<td>

\{
  `filter`: `RuleFilter`;
 \}[]

</td>
<td>

The targeting rules.

</td>
</tr>
<tr>
<td>

`targeting.version`

</td>
<td>

`number`

</td>
<td>

The version of the targeting rules.

</td>
</tr>
</tbody>
</table>

***

### FlagConfigVariant <a href="#flagconfigvariant" id="flagconfigvariant"></a>

```ts
type FlagConfigVariant = {
  filter: RuleFilter;
  key: string;
  payload: any;
};
```

Describes a remote feature config variant.

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

<a id="filter"></a> `filter`

</td>
<td>

`RuleFilter`

</td>
<td>

The filter for the variant.

</td>
</tr>
<tr>
<td>

<a id="key-4"></a> `key`

</td>
<td>

`string`

</td>
<td>

The key of the variant.

</td>
</tr>
<tr>
<td>

<a id="payload-1"></a> `payload`

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

***

### FlagDefinition <a href="#flagdefinition" id="flagdefinition"></a>

```ts
type FlagDefinition = {
  config: {
     variants: FlagConfigVariant[];
     version: number;
    };
  description: string | null;
  flag: {
     rules: {
        filter: RuleFilter;
       }[];
     version: number;
    };
  key: string;
};
```

Describes a feature definition.

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

<a id="config-3"></a> `config`?

</td>
<td>

\{
  `variants`: [`FlagConfigVariant`](globals.md#flagconfigvariant)[];
  `version`: `number`;
 \}

</td>
<td>

The remote configuration for the feature.

</td>
</tr>
<tr>
<td>

`config.variants`

</td>
<td>

[`FlagConfigVariant`](globals.md#flagconfigvariant)[]

</td>
<td>

The variants of the remote configuration.

</td>
</tr>
<tr>
<td>

`config.version`

</td>
<td>

`number`

</td>
<td>

The version of the remote configuration.

</td>
</tr>
<tr>
<td>

<a id="description-1"></a> `description`

</td>
<td>

`string` \| `null`

</td>
<td>

Description of the feature.

</td>
</tr>
<tr>
<td>

<a id="flag"></a> `flag`

</td>
<td>

\{
  `rules`: \{
     `filter`: `RuleFilter`;
    \}[];
  `version`: `number`;
 \}

</td>
<td>

The targeting rules for the feature.

</td>
</tr>
<tr>
<td>

`flag.rules`

</td>
<td>

\{
  `filter`: `RuleFilter`;
 \}[]

</td>
<td>

The targeting rules.

</td>
</tr>
<tr>
<td>

`flag.version`

</td>
<td>

`number`

</td>
<td>

The version of the targeting rules.

</td>
</tr>
<tr>
<td>

<a id="key-5"></a> `key`

</td>
<td>

`string`

</td>
<td>

The key of the feature.

</td>
</tr>
</tbody>
</table>

***

### FlagOverride <a href="#flagoverride" id="flagoverride"></a>

```ts
type FlagOverride =
  | FlagType & {
  config: {
     key: string;
    };
  isEnabled: boolean;
 }
  | boolean;
```

***

### FlagOverrides <a href="#flagoverrides-2" id="flagoverrides-2"></a>

```ts
type FlagOverrides = Partial<keyof Flags extends never ? Record<string, FlagOverride> : { [FlagKey in keyof Flags]: Flags[FlagKey] extends FlagOverride ? Flags[FlagKey] : Exclude<FlagOverride, "config"> }>;
```

Describes the feature overrides.

***

### FlagOverridesFn() <a href="#flagoverridesfn" id="flagoverridesfn"></a>

```ts
type FlagOverridesFn = (context: Context) => FlagOverrides;
```

#### Parameters <a href="#parameters-38" id="parameters-38"></a>

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

#### Returns <a href="#returns-58" id="returns-58"></a>

[`FlagOverrides`](globals.md#flagoverrides)

***

### FlagRemoteConfig <a href="#flagremoteconfig" id="flagremoteconfig"></a>

```ts
type FlagRemoteConfig =
  | {
  key: string;
  payload: any;
 }
  | EmptyFlagRemoteConfig;
```

A remotely managed configuration value for a feature.

#### Type declaration <a href="#type-declaration-9" id="type-declaration-9"></a>

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

[`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig)

***

### FlagsAPIResponse <a href="#flagsapiresponse" id="flagsapiresponse"></a>

```ts
type FlagsAPIResponse = {
  features: FlagAPIResponse[];
  flagStateVersion: number;
};
```

**`Internal`**

(Internal) Describes the response of the features endpoint.

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

<a id="features"></a> `features`

</td>
<td>

[`FlagAPIResponse`](globals.md#flagapiresponse)[]

</td>
<td>

The feature definitions.

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

Optional for backward compatibility; when absent, the snapshot version
should be treated as unknown by consumers.

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

Non-secret context passed to fallback providers so they can derive
storage keys without access to the raw secret key.

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

<a id="secretkeyhash"></a> `secretKeyHash`

</td>
<td>

`string`

</td>
<td>

Deterministic hash of the configured secret key.

</td>
</tr>
</tbody>
</table>

***

### FlagsFallbackSnapshot <a href="#flagsfallbacksnapshot" id="flagsfallbacksnapshot"></a>

```ts
type FlagsFallbackSnapshot = {
  flags: FlagAPIResponse[];
  savedAt: string;
  version: number;
};
```

Snapshot of flag definitions used for fallback initialization.

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

<a id="flags-2"></a> `flags`

</td>
<td>

[`FlagAPIResponse`](globals.md#flagapiresponse)[]

</td>
<td>

Raw flag definitions as returned by the API.

</td>
</tr>
<tr>
<td>

<a id="savedat"></a> `savedAt`

</td>
<td>

`string`

</td>
<td>

ISO timestamp indicating when the snapshot was saved.

</td>
</tr>
<tr>
<td>

<a id="version"></a> `version`

</td>
<td>

`number`

</td>
<td>

Snapshot schema version.

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

### FlagType <a href="#flagtype" id="flagtype"></a>

```ts
type FlagType = {
  config: {
     payload: any;
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

<a id="config-4"></a> `config`?

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

#### Type declaration <a href="#type-declaration-16" id="type-declaration-16"></a>

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

### HttpClientResponse\<TResponse\> <a href="#httpclientresponsetresponse" id="httpclientresponsetresponse"></a>

```ts
type HttpClientResponse<TResponse> = {
  body: TResponse | undefined;
  etag: string;
  ok: boolean;
  status: number;
};
```

Describes the response of a HTTP client.

#### Type Parameters <a href="#type-parameters-9" id="type-parameters-9"></a>

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

The type of the response body.

</td>
</tr>
</tbody>
</table>

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

<a id="body"></a> `body`

</td>
<td>

`TResponse` \| `undefined`

</td>
<td>

The body of the response if available.

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

The response's ETag, if available. Return its exact value to enable
conditional flag-definition refreshes with a custom HTTP client.

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

Indicates that the request succeeded.

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

The status code of the response.

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

### RawFlagRemoteConfig <a href="#rawflagremoteconfig" id="rawflagremoteconfig"></a>

```ts
type RawFlagRemoteConfig = {
  evaluationErrors: EvaluationError[];
  key: string;
  missingContextFields: string[];
  payload: any;
  ruleEvaluationResults: boolean[];
  targetingVersion: number;
};
```

A remotely managed configuration value for a feature.

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

<a id="evaluationerrors-1"></a> `evaluationErrors`?

</td>
<td>

`EvaluationError`[]

</td>
<td>

Non-fatal diagnostics produced while evaluating targeting rules.

</td>
</tr>
<tr>
<td>

<a id="key-6"></a> `key`

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

<a id="missingcontextfields-1"></a> `missingContextFields`?

</td>
<td>

`string`[]

</td>
<td>

The missing fields in the evaluation context (optional).

**Deprecated**

Use `evaluationErrors` and check for `MISSING_CONTEXT_FIELD`.

</td>
</tr>
<tr>
<td>

<a id="payload-2"></a> `payload`

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

<a id="ruleevaluationresults-1"></a> `ruleEvaluationResults`?

</td>
<td>

`boolean`[]

</td>
<td>

The rule results of the evaluation (optional).

</td>
</tr>
<tr>
<td>

<a id="targetingversion-1"></a> `targetingVersion`?

</td>
<td>

`number`

</td>
<td>

The version of the targeting rules used to select the config value.

</td>
</tr>
</tbody>
</table>

***

### RawFlags <a href="#rawflags" id="rawflags"></a>

```ts
type RawFlags = Record<TypedFlagKey, RawFlag>;
```

Describes a collection of evaluated raw flags.

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

#### Type declaration <a href="#type-declaration-20" id="type-declaration-20"></a>

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
  flags: Record<string, boolean>;
};
```

#### Type declaration <a href="#type-declaration-21" id="type-declaration-21"></a>

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

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `boolean`\>

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

Describes the meta context associated with tracking.

#### Type declaration <a href="#type-declaration-22" id="type-declaration-22"></a>

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

<a id="active"></a> `active`?

</td>
<td>

`boolean`

</td>
<td>

Whether the user or company is active.

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

Defines the options for tracking of entities.

#### Type declaration <a href="#type-declaration-23" id="type-declaration-23"></a>

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

<a id="attributes-1"></a> `attributes`?

</td>
<td>

[`Attributes`](globals.md#attributes)

</td>
<td>

The attributes associated with the event.

</td>
</tr>
<tr>
<td>

<a id="meta-1"></a> `meta`?

</td>
<td>

[`TrackingMeta`](globals.md#trackingmeta)

</td>
<td>

The meta context associated with the event.

</td>
</tr>
</tbody>
</table>

***

### TypedFlagKey <a href="#typedflagkey" id="typedflagkey"></a>

```ts
type TypedFlagKey = keyof TypedFlags;
```

***

### TypedFlags <a href="#typedflags" id="typedflags"></a>

```ts
type TypedFlags = keyof Flags extends never ? Record<string, Flag> : { [FlagKey in keyof Flags]: Flags[FlagKey] extends FlagType ? Flag<Flags[FlagKey]["config"]> : Flag };
```

Describes a collection of evaluated feature.

#### Remarks <a href="#remarks-31" id="remarks-31"></a>

This types falls back to a generic Record<string, Flag> if the Flags interface
has not been extended.

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

#### Type declaration <a href="#type-declaration-24" id="type-declaration-24"></a>

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

***

### LOG\_LEVELS <a href="#log_levels" id="log_levels"></a>

```ts
const LOG_LEVELS: readonly ["DEBUG", "INFO", "WARN", "ERROR"];
```
