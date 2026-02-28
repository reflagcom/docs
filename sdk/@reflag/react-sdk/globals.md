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

# @reflag/react-sdk

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

### Flag\<TConfig\>

Describes a feature

#### Type Parameters

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

<a id="isloading"></a> `isLoading`

</td>
<td>

`boolean`

</td>
<td>

If the feature is loading.

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

<a id="requestfeedback"></a> `requestFeedback`

</td>
<td>

(`opts`: [`RequestFeedbackOptions`](globals.md#requestfeedbackoptions)) => `void`

</td>
<td>

Request feedback from the user.

</td>
</tr>
</tbody>
</table>

#### Methods

##### track()

```ts
track(): 
  | undefined
  | Promise<
  | undefined
| Response>
```

Track feature usage in Reflag.

###### Returns

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### Flags

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

### BootstrappedFlags

```ts
type BootstrappedFlags = {
  context: ReflagContext;
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

<a id="context"></a> `context`

</td>
<td>

[`ReflagContext`](../browser-sdk/globals.md#reflagcontext)

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
</tbody>
</table>

***

### EmptyFlagRemoteConfig

```ts
type EmptyFlagRemoteConfig = {
  key: undefined;
  payload: undefined;
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

### FlagKey

```ts
type FlagKey = keyof TypedFlags;
```

***

### FlagRemoteConfig

```ts
type FlagRemoteConfig = 
  | {
  key: string;
  payload: any;
 }
  | EmptyFlagRemoteConfig;
```

A remotely managed configuration value for a feature.

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

[`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig)

***

### FlagType

```ts
type FlagType = {
  config: {
     payload: any;
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

### RawFlags

```ts
type RawFlags = Record<FlagKey, RawFlag>;
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

Pre-fetched flags to be used instead of fetching them from the server.

</td>
</tr>
</tbody>
</table>

***

### ReflagClientProviderProps

```ts
type ReflagClientProviderProps = Omit<ReflagPropsBase, "debug"> & {
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
type ReflagInitOptionsBase = Omit<InitOptions, "user" | "company" | "other" | "otherContext" | "bootstrappedFlags">;
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
</tbody>
</table>

***

### RequestFeedbackOptions

```ts
type RequestFeedbackOptions = Omit<RequestFeedbackData, "flagKey" | "featureId">;
```

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
type TypedFlags = keyof Flags extends never ? Record<string, Flag> : { [TypedFlagKey in keyof Flags]: Flags[TypedFlagKey] extends FlagType ? Flag<Flags[TypedFlagKey]["config"]> : Flag };
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record<string, Flag> if the Flags interface
has not been extended.

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

```ts
function useFeature<TKey>(key: TKey): Flag
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

`TKey` *extends* `string`

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

`key`

</td>
<td>

`TKey`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Flag`](globals.md#flagtconfig)

#### Deprecated

use `useFlag` instead

***

### useFlag()

```ts
function useFlag<TKey>(key: TKey): TypedFlags[TKey]
```

Returns the state of a given feature for the current context, e.g.

```ts
function HuddleButton() {
  const {isEnabled, config: { payload }, track} = useFlag("huddle");
  if (isEnabled) {
   return <button onClick={() => track()}>{payload?.buttonTitle ?? "Start Huddle"}</button>;
}
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

`TKey` *extends* `string`

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

`key`

</td>
<td>

`TKey`

</td>
</tr>
</tbody>
</table>

#### Returns

[`TypedFlags`](globals.md#typedflags)\[`TKey`\]

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
