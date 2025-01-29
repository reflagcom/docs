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

### Features

## Type Aliases

### BucketProps

```ts
type BucketProps = BucketContext & {
  apiBaseUrl: string;
  appBaseUrl: string;
  children: ReactNode;
  debug: boolean;
  enableTracking: boolean;
  featureList: Readonly<string[]>;
  featureOptions: Omit<FeaturesOptions, "fallbackFeatures"> & {
     fallbackFeatures:   | FeatureKey[]
        | Record<FeatureKey, any>;
    };
  feedback: FeedbackOptions;
  host: string;
  loadingComponent: ReactNode;
  newBucketClient: (...args: ConstructorParameters<typeof BucketClient>) => BucketClient;
  publishableKey: string;
  sseBaseUrl: string;
  sseHost: string;
  toolbar: ToolbarOptions;
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

`apiBaseUrl`?

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

`appBaseUrl`?

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

`children`?

</td>
<td>

`ReactNode`

</td>
<td>

&hyphen;

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

&hyphen;

</td>
</tr>
<tr>
<td>

`enableTracking`?

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

`featureList`?

</td>
<td>

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`string`[]\>

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`featureOptions`?

</td>
<td>

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`FeaturesOptions`](../browser-sdk/globals.md#featuresoptions), `"fallbackFeatures"`\> & \{
  `fallbackFeatures`:   \| [`FeatureKey`](globals.md#featurekey)[]
     \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`FeatureKey`](globals.md#featurekey), `any`\>;
 \}

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`feedback`?

</td>
<td>

[`FeedbackOptions`](../browser-sdk/globals.md#feedbackoptions)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`host`?

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

`loadingComponent`?

</td>
<td>

`ReactNode`

</td>
<td>

&hyphen;

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

&hyphen;

</td>
</tr>
<tr>
<td>

`publishableKey`

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

`sseBaseUrl`?

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

`sseHost`?

</td>
<td>

`string`

</td>
<td>

**Deprecated**

Use `sseBaseUrl` instead.

</td>
</tr>
<tr>
<td>

`toolbar`?

</td>
<td>

[`ToolbarOptions`](../browser-sdk/globals.md#toolbaroptions)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### FeatureConfig\<TKey\>

```ts
type FeatureConfig<TKey> = MaterializedFeatures[TKey] extends boolean ? never : MaterializedFeatures[TKey];
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

`TKey` *extends* [`FeatureKey`](globals.md#featurekey)

</td>
</tr>
</tbody>
</table>

***

### FeatureKey

```ts
type FeatureKey = keyof MaterializedFeatures;
```

## Functions

### BucketProvider()

```ts
function BucketProvider(__namedParameters: BucketProps): Element
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

[`BucketProps`](globals.md#bucketprops)

</td>
</tr>
</tbody>
</table>

#### Returns

`Element`

***

### useFeature()

```ts
function useFeature<TKey>(key: TKey): Feature<TKey>
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

`Feature`\<`TKey`\>

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => undefined | void
```

Returns a function to open up the feedback form
Note: When calling `useRequestFeedback`, user/company must already be set.

See [link](../../documents/FEEDBACK.md) for more information

```ts
const requestFeedback = useRequestFeedback();
bucket.requestFeedback({
  featureId: "bucket-feature-id",
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

See [link](../../documents/FEEDBACK.md) for more information

```ts
const sendFeedback = useSendFeedback();
sendFeedback({
  featureId: "fe2323223";;
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
