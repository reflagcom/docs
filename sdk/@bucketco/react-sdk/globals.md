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

# @bucketco/react-sdk

## Interfaces

### CheckEvent

Event representing checking the feature flag evaluation result

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

Feature key.

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

Result of feature flag or configuration evaluation.
If `action` is `check-is-enabled`, this is the result of the feature flag evaluation and `value` is a boolean.
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

### Feature\<TConfig\>

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

`TConfig` *extends* [`FeatureType`](globals.md#featuretype)\[`"config"`\]

</td>
<td>

[`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig)

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

 \| [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) \| \{ `key`: `string`; \} & `TConfig`

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

Track feature usage in Bucket.

###### Returns

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### Features

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

### BucketProps

```ts
type BucketProps = BucketContext & InitOptions & {
  children: ReactNode;
  debug: boolean;
  loadingComponent: ReactNode;
  newBucketClient: (...args: ConstructorParameters<typeof BucketClient>) => BucketClient;
};
```

Props for the BucketProvider.

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

`children`?

</td>
<td>

`ReactNode`

</td>
<td>

Children to be rendered.

</td>
</tr>
<tr>
<td>

`debug`?

</td>
<td>

`boolean`

</td>
<td>

Whether to enable debug mode (optional).

</td>
</tr>
<tr>
<td>

`loadingComponent`?

</td>
<td>

`ReactNode`

</td>
<td>

Loading component to be rendered while features are loading.

</td>
</tr>
<tr>
<td>

`newBucketClient`?

</td>
<td>

(...`args`: [`ConstructorParameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)\<*typeof* [`BucketClient`](../browser-sdk/globals.md#bucketclient)\>) => [`BucketClient`](../browser-sdk/globals.md#bucketclient)

</td>
<td>

**`Internal`**

New BucketClient constructor.

</td>
</tr>
</tbody>
</table>

***

### EmptyFeatureRemoteConfig

```ts
type EmptyFeatureRemoteConfig = {
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

### FeatureKey

```ts
type FeatureKey = keyof TypedFeatures;
```

***

### FeatureRemoteConfig

```ts
type FeatureRemoteConfig = 
  | {
  key: string;
  payload: any;
 }
  | EmptyFeatureRemoteConfig;
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

[`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig)

***

### FeatureType

```ts
type FeatureType = {
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

### RawFeatures

```ts
type RawFeatures = Record<string, RawFeature>;
```

***

### RequestFeedbackOptions

```ts
type RequestFeedbackOptions = Omit<RequestFeedbackData, "featureKey" | "featureId">;
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

***

### TypedFeatures

```ts
type TypedFeatures = keyof Features extends never ? Record<string, Feature> : { [TypedFeatureKey in keyof Features]: Features[TypedFeatureKey] extends FeatureType ? Feature<Features[TypedFeatureKey]["config"]> : Feature };
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record<string, Feature> if the Features interface
has not been extended.

## Functions

### BucketProvider()

```ts
function BucketProvider(__namedParameters: BucketProps): Element
```

Provider for the BucketClient.

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

[`BucketProps`](globals.md#bucketprops)

</td>
</tr>
</tbody>
</table>

#### Returns

`Element`

***

### useClient()

```ts
function useClient(): undefined | BucketClient
```

Returns the current `BucketClient` used by the `BucketProvider`.

This is useful if you need to access the `BucketClient` outside of the `BucketProvider`.

```ts
const client = useClient();
useEffect(() => {
  return client?.on("check", () => {
    console.log("check hook called");
  });
}, [client]);
```

#### Returns

`undefined` \| [`BucketClient`](../browser-sdk/globals.md#bucketclient)

***

### useFeature()

```ts
function useFeature<TKey>(key: TKey): TypedFeatures[TKey]
```

Returns the state of a given feature for the current context, e.g.

```ts
function HuddleButton() {
  const {isEnabled, config: { payload }, track} = useFeature("huddle");
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

[`TypedFeatures`](globals.md#typedfeatures)\[`TKey`\]

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => undefined | void
```

Returns a function to open up the feedback form
Note: When calling `useRequestFeedback`, user/company must already be set.

See [link](../../documents/browser-sdk/FEEDBACK.md) for more information

```ts
const requestFeedback = useRequestFeedback();
bucket.requestFeedback({
  featureKey: "file-uploads",
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

`undefined` \| `void`

***

### useSendFeedback()

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => 
  | undefined
  | Promise<
  | undefined
| Response>
```

Returns a function to manually send feedback collected from a user.
Note: When calling `useSendFeedback`, user/company must already be set.

See [link](../../documents/browser-sdk/FEEDBACK.md) for more information

```ts
const sendFeedback = useSendFeedback();
sendFeedback({
  featureKey: "huddle";
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

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### useTrack()

```ts
function useTrack(): (eventName: string, attributes?: 
  | null
  | Record<string, any>) => 
  | undefined
  | Promise<
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

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `undefined`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

***

### useUpdateCompany()

```ts
function useUpdateCompany(): (opts: {}) => 
  | undefined
| Promise<void>
```

Returns a function to update the current company's information.
For example, if the company changed plan or opted into a beta-feature.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the company update.

```ts
const updateCompany = useUpdateCompany();
updateCompany({ plan: "enterprise" }).then(() => console.log("Features updated"));
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

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### useUpdateOtherContext()

```ts
function useUpdateOtherContext(): (opts: {}) => 
  | undefined
| Promise<void>
```

Returns a function to update the "other" context information.
For example, if the user changed workspace, you can set the workspace id here.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the update to the "other" context.

```ts
const updateOtherContext = useUpdateOtherContext();
updateOtherContext({ workspaceId: newWorkspaceId })
  .then(() => console.log("Features updated"));
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

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### useUpdateUser()

```ts
function useUpdateUser(): (opts: {}) => 
  | undefined
| Promise<void>
```

Returns a function to update the current user's information.
For example, if the user changed role or opted into a beta-feature.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the user update.

```ts
const updateUser = useUpdateUser();
updateUser({ optInHuddles: "true" }).then(() => console.log("Features updated"));
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

  \| `undefined`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
