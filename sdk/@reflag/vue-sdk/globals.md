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

# @reflag/vue-sdk

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

#### Methods

##### track()

```ts
track(): 
  | undefined
  | Promise<
  | undefined
| Response>
```

###### Returns

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### UserContext

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

### ReflagProps

```ts
type ReflagProps = ReflagContext & InitOptions & {
  debug: boolean;
  newReflagClient: (...args: ConstructorParameters<typeof ReflagClient>) => ReflagClient;
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

`debug`?

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

`newReflagClient`?

</td>
<td>

(...`args`: [`ConstructorParameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)\<*typeof* [`ReflagClient`](../browser-sdk/globals.md#reflagclient)\>) => [`ReflagClient`](../browser-sdk/globals.md#reflagclient)

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

### ReflagProvider

```ts
const ReflagProvider: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
```

## Functions

### useClient()

```ts
function useClient(): Ref<ReflagClient, ReflagClient>
```

Vue composable for getting the Reflag client.

This composable returns the Reflag client. You can use this to get the Reflag
client at any point in your application.

#### Returns

`Ref`\<[`ReflagClient`](../browser-sdk/globals.md#reflagclient), [`ReflagClient`](../browser-sdk/globals.md#reflagclient)\>

The Reflag client.

***

### useFlag()

```ts
function useFlag(key: string): Flag<any>
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

`key`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Flag`](globals.md#flagtconfig)\<`any`\>

***

### useIsLoading()

```ts
function useIsLoading(): Ref<boolean, boolean>
```

Vue composable for checking if the Reflag client is loading.

This composable returns a boolean value that indicates whether the Reflag client is loading.
You can use this to check if the Reflag client is loading at any point in your application.

#### Returns

`Ref`\<`boolean`, `boolean`\>

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
  feedback: "I love this feature!",
  metadata: { page: "dashboard" }
});
```

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
track('button_clicked', { buttonName: 'Start Huddle' });
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
