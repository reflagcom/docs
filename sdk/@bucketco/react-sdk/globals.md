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

(...`args`: [`ConstructorParameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)\<*typeof* `BucketClient`\>) => `BucketClient`

</td>
<td>

**`Internal`**

New BucketClient constructor.

</td>
</tr>
</tbody>
</table>

***

### Feature\<TKey\>

```ts
type Feature<TKey> = {
  config: MaterializedFeatures[TKey] extends boolean ? EmptyConfig : 
     | {
     key: string;
     payload: MaterializedFeatures[TKey];
    }
     | EmptyConfig;
  isEnabled: boolean;
  isLoading: boolean;
  requestFeedback: (opts: RequestFeedbackOptions) => void;
  track: () => void;
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

`TKey` *extends* [`FeatureKey`](globals.md#featurekey)

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

<a id="config"></a> `config`

</td>
<td>

`MaterializedFeatures`\[`TKey`\] *extends* `boolean` ? `EmptyConfig` : 
  \| \{
  `key`: `string`;
  `payload`: `MaterializedFeatures`\[`TKey`\];
 \}
  \| `EmptyConfig`

</td>
</tr>
<tr>
<td>

<a id="isenabled"></a> `isEnabled`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

<a id="isloading"></a> `isLoading`

</td>
<td>

`boolean`

</td>
</tr>
<tr>
<td>

<a id="requestfeedback"></a> `requestFeedback`

</td>
<td>

(`opts`: `RequestFeedbackOptions`) => `void`

</td>
</tr>
<tr>
<td>

<a id="track"></a> `track`

</td>
<td>

() => `void`

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
client.on("configCheck", () => {
  console.log("configCheck hook called");
});
```

#### Returns

`undefined` \| `BucketClient`

***

### useFeature()

```ts
function useFeature<TKey>(key: TKey): Feature<typeof key>
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

[`Feature`](globals.md#featuretkey)\<*typeof* `key`\>

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

`RequestFeedbackData`

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

`UnassignedFeedback`

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
