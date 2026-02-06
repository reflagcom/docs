---
title:
  visible: true
tableOfContents:
  visible: true
outline:
  visible: true
pagination:
  visible: true
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
---

# Reference

## Interfaces

### CheckEvent

Event representing checking the flag evaluation result

#### Properties

| Property                 | Type                                                   | Description                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                 | `"check-is-enabled"` \| `"check-config"`               | `check-is-enabled` means `isEnabled` was checked, `check-config` means `config` was checked.                                                                                                                                          |
| `key`                    | `string`                                               | Flag key.                                                                                                                                                                                                                             |
| `missingContextFields?`  | `string`\[]                                            | Missing context fields.                                                                                                                                                                                                               |
| `ruleEvaluationResults?` | `boolean`\[]                                           | Rule evaluation results.                                                                                                                                                                                                              |
| `value?`                 | \| `boolean` \| { `key`: `string`; `payload`: `any`; } | Result of flag or configuration evaluation. If `action` is `check-is-enabled`, this is the result of the flag evaluation and `value` is a boolean. If `action` is `check-config`, this is the result of the configuration evaluation. |
| `version?`               | `number`                                               | Version of targeting rules.                                                                                                                                                                                                           |

***

### CompanyContext

Context is a set of key-value pairs. This is used to determine if feature targeting matches and to track events. Id should always be present so that it can be referenced to an existing company.

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

| Property | Type                                | Description  |
| -------- | ----------------------------------- | ------------ |
| `id`     | `undefined` \| `string` \| `number` | Company id   |
| `name?`  | `string`                            | Company name |

***

### Flag\<TConfig>

Describes a feature

#### Type Parameters

| Type Parameter                                                     | Default type                                                |
| ------------------------------------------------------------------ | ----------------------------------------------------------- |
| `TConfig` _extends_ [`FlagType`](globals.md#flagtype)\[`"config"`] | [`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig) |

#### Properties

| Property          | Type                                                                                               | Description                     |
| ----------------- | -------------------------------------------------------------------------------------------------- | ------------------------------- |
| `config`          | \| [`EmptyFlagRemoteConfig`](globals.md#emptyflagremoteconfig) \| { `key`: `string`; } & `TConfig` | ‐                               |
| `isEnabled`       | `boolean`                                                                                          | If the feature is enabled.      |
| `isLoading`       | `boolean`                                                                                          | If the feature is loading.      |
| `key`             | `string`                                                                                           | The key of the feature.         |
| `requestFeedback` | (`opts`: [`RequestFeedbackOptions`](globals.md#requestfeedbackoptions)) => `void`                  | Request feedback from the user. |

#### Methods

**track()**

```ts
track(): 
  | undefined
  | Promise<
  | undefined
| Response>
```

Track feature usage in Reflag.

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

***

### Flags

***

### UserContext

Context is a set of key-value pairs. This is used to determine if feature targeting matches and to track events. Id should always be present so that it can be referenced to an existing user.

#### Indexable

```ts
[key: string]: undefined | string | number
```

#### Properties

| Property | Type                                | Description |
| -------- | ----------------------------------- | ----------- |
| `email?` | `string`                            | User email  |
| `id`     | `undefined` \| `string` \| `number` | User id     |
| `name?`  | `string`                            | User name   |

## Type Aliases

### BootstrappedFlags

```ts
type BootstrappedFlags = {
  context: ReflagContext;
  flags: RawFlags;
};
```

#### Type declaration

| Name      | Type                                                       |
| --------- | ---------------------------------------------------------- |
| `context` | [`ReflagContext`](../browser-sdk/globals.md#reflagcontext) |
| `flags`   | [`RawFlags`](globals.md#rawflags)                          |

***

### EmptyFlagRemoteConfig

```ts
type EmptyFlagRemoteConfig = {
  key: undefined;
  payload: undefined;
};
```

#### Type declaration

| Name      | Type        |
| --------- | ----------- |
| `key`     | `undefined` |
| `payload` | `undefined` |

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

{ `key`: `string`; `payload`: `any`; }

| Name      | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `key`     | `string` | The key of the matched configuration value. |
| `payload` | `any`    | The optional user-supplied payload data.    |

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

| Name             | Type                  |
| ---------------- | --------------------- |
| `config`?        | { `payload`: `any`; } |
| `config.payload` | `any`                 |

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

| Name    | Type                                                | Description                                                            |
| ------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| `flags` | [`BootstrappedFlags`](globals.md#bootstrappedflags) | Pre-fetched flags to be used instead of fetching them from the server. |

***

### ReflagClientProviderProps

```ts
type ReflagClientProviderProps = Omit<ReflagPropsBase, "debug"> & {
  client: ReflagClient;
};
```

Props for the ReflagClientProvider.

#### Type declaration

| Name     | Type                                                     |
| -------- | -------------------------------------------------------- |
| `client` | [`ReflagClient`](../browser-sdk/globals.md#reflagclient) |

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

| Name            | Type                                                                                                                                       | Description                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `company`?      | [`CompanyContext`](globals.md#companycontext)                                                                                              | <p>Company related context. If you provide <code>id</code> Reflag will enrich the evaluation context with company attributes on Reflag servers.</p><p><strong>Deprecated</strong></p><p>Use <code>context</code> instead, this property will be removed in the next major version</p> |
| `context`?      | [`ReflagContext`](../browser-sdk/globals.md#reflagcontext)                                                                                 | The context to use for the ReflagClient containing user, company, and other context.                                                                                                                                                                                                  |
| `otherContext`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `string` \| `number` \| `undefined`> | <p>Context which is not related to a user or a company.</p><p><strong>Deprecated</strong></p><p>Use <code>context</code> instead, this property will be removed in the next major version</p>                                                                                         |
| `user`?         | [`UserContext`](globals.md#usercontext)                                                                                                    | <p>User related context. If you provide <code>id</code> Reflag will enrich the evaluation context with user attributes on Reflag servers.</p><p><strong>Deprecated</strong></p><p>Use <code>context</code> instead, this property will be removed in the next major version</p>       |

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

| Name                | Type        | Description                                                                   |
| ------------------- | ----------- | ----------------------------------------------------------------------------- |
| `children`?         | `ReactNode` | The children to render after the client is initialized.                       |
| `debug`?            | `boolean`   | Set to `true` to enable debug logging to the console,                         |
| `initialLoading`?   | `boolean`   | Set to `true` to show the loading component while the client is initializing. |
| `loadingComponent`? | `ReactNode` | A React component to show while the client is initializing.                   |

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

| Name            | Type                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `getItem()`     | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` \| `string`> |
| `removeItem()`? | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>             |
| `setItem()`     | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>             |

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

| Name          | Type                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `attributes`? | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> \| `null` |
| `company`?    | [`CompanyContext`](globals.md#companycontext)                                                                             |
| `eventName`   | `string`                                                                                                                  |
| `user`        | [`UserContext`](globals.md#usercontext)                                                                                   |

***

### TypedFlags

```ts
type TypedFlags = keyof Flags extends never ? Record<string, Flag> : { [TypedFlagKey in keyof Flags]: Flags[TypedFlagKey] extends FlagType ? Flag<Flags[TypedFlagKey]["config"]> : Flag };
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record\<string, Flag> if the Flags interface has not been extended.

## Functions

### ReflagBootstrappedProvider()

```ts
function ReflagBootstrappedProvider(__namedParameters: ReflagBootstrappedProps): Element
```

Bootstrapped Provider for the ReflagClient using pre-fetched flags.

#### Parameters

| Parameter           | Type                                                            |
| ------------------- | --------------------------------------------------------------- |
| `__namedParameters` | [`ReflagBootstrappedProps`](globals.md#reflagbootstrappedprops) |

#### Returns

`Element`

***

### ReflagClientProvider()

```ts
function ReflagClientProvider(__namedParameters: ReflagClientProviderProps): Element
```

#### Parameters

| Parameter           | Type                                                                |
| ------------------- | ------------------------------------------------------------------- |
| `__namedParameters` | [`ReflagClientProviderProps`](globals.md#reflagclientproviderprops) |

#### Returns

`Element`

***

### ReflagProvider()

```ts
function ReflagProvider(__namedParameters: ReflagProps): Element
```

Provider for the ReflagClient.

#### Parameters

| Parameter           | Type                                    |
| ------------------- | --------------------------------------- |
| `__namedParameters` | [`ReflagProps`](globals.md#reflagprops) |

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

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

#### Parameters

| Parameter | Type   |
| --------- | ------ |
| `key`     | `TKey` |

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

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

#### Parameters

| Parameter | Type   |
| --------- | ------ |
| `key`     | `TKey` |

#### Returns

[`TypedFlags`](globals.md#typedflags)\[`TKey`]

***

### useIsLoading()

```ts
function useIsLoading(): boolean
```

Returns a boolean indicating if the Reflag client is loading. You can use this to check if the Reflag client is loading at any point in your application. Initially, the value will be true until the client is initialized.

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

| Type Parameter                                                               |
| ---------------------------------------------------------------------------- |
| `THookType` _extends_ keyof [`HookArgs`](../browser-sdk/globals.md#hookargs) |

#### Parameters

| Parameter | Type                                                                               | Description                                                                                     |
| --------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `event`   | `THookType`                                                                        | The event to listen to.                                                                         |
| `handler` | (`arg0`: [`HookArgs`](../browser-sdk/globals.md#hookargs)\[`THookType`]) => `void` | The function to call when the event is triggered.                                               |
| `client`? | [`ReflagClient`](../browser-sdk/globals.md#reflagclient)                           | The Reflag client to listen to. If not provided, the client will be retrieved from the context. |

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

Returns a function to open up the feedback form Note: When calling `useRequestFeedback`, user/company must already be set.

See [link](../browser-sdk/feedback.md) for more information

```ts
const requestFeedback = useRequestFeedback();
reflag.requestFeedback({
  flagKey: "file-uploads",
  title: "How satisfied are you with file uploads?",
});
```

#### Returns

`Function`

**Parameters**

| Parameter | Type                                                                   |
| --------- | ---------------------------------------------------------------------- |
| `options` | [`RequestFeedbackData`](../browser-sdk/globals.md#requestfeedbackdata) |

**Returns**

`void`

***

### useSendFeedback()

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => Promise<
  | undefined
| Response>
```

Returns a function to manually send feedback collected from a user. Note: When calling `useSendFeedback`, user/company must already be set.

See [link](../browser-sdk/feedback.md) for more information

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

**Parameters**

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| `opts`    | [`UnassignedFeedback`](../browser-sdk/globals.md#unassignedfeedback) |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

***

### useTrack()

```ts
function useTrack(): (eventName: string, attributes?: 
  | null
  | Record<string, any>) => Promise<
  | undefined
| Response>
```

Returns a function to send an event when a user performs an action Note: When calling `useTrack`, user/company must already be set.

```ts
const track = useTrack();
track("Started Huddle", { button: "cta" });
```

#### Returns

`Function`

**Parameters**

| Parameter     | Type                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `eventName`   | `string`                                                                                                                  |
| `attributes`? | \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

***

### useUpdateCompany()

```ts
function useUpdateCompany(): (opts: {}) => Promise<void>
```

Returns a function to update the current company's information. For example, if the company changed plan or opted into a beta-feature.

The method returned is a function which returns a promise that resolves when after the features have been updated as a result of the company update.

```ts
const updateCompany = useUpdateCompany();
updateCompany({ plan: "enterprise" }).then(() => console.log("Flags updated"));
```

#### Returns

`Function`

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

***

### useUpdateOtherContext()

```ts
function useUpdateOtherContext(): (opts: {}) => Promise<void>
```

Returns a function to update the "other" context information. For example, if the user changed workspace, you can set the workspace id here.

The method returned is a function which returns a promise that resolves when after the features have been updated as a result of the update to the "other" context.

```ts
const updateOtherContext = useUpdateOtherContext();
updateOtherContext({ workspaceId: newWorkspaceId })
  .then(() => console.log("Flags updated"));
```

#### Returns

`Function`

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

***

### useUpdateUser()

```ts
function useUpdateUser(): (opts: {}) => Promise<void>
```

Returns a function to update the current user's information. For example, if the user changed role or opted into a beta-feature.

The method returned is a function which returns a promise that resolves when after the features have been updated as a result of the user update.

```ts
const updateUser = useUpdateUser();
updateUser({ optInHuddles: "true" }).then(() => console.log("Flags updated"));
```

#### Returns

`Function`

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>
