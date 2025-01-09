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
type BucketProps: BucketContext & {
  apiBaseUrl: string;
  children: ReactNode;
  debug: boolean;
  enableTracking: boolean;
  featureOptions: Omit<FeaturesOptions, "fallbackFeatures"> & {
     fallbackFeatures: FeatureKey[];
    };
  feedback: FeedbackOptions;
  host: string;
  loadingComponent: ReactNode;
  newBucketClient: (...args: ConstructorParameters<typeof BucketClient>) => BucketClient;
  publishableKey: string;
  sseBaseUrl: string;
  sseHost: string;
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

`featureOptions`?

</td>
<td>

`Omit`\<[`FeaturesOptions`](../browser-sdk/index/README.md#featuresoptions), `"fallbackFeatures"`\> & \{
  `fallbackFeatures`: [`FeatureKey`](globals.md#featurekey)[];
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

[`FeedbackOptions`](../browser-sdk/index/README.md#feedbackoptions)

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

(...`args`: `ConstructorParameters`\<*typeof* [`BucketClient`](../browser-sdk/index/README.md#bucketclient)\>) => [`BucketClient`](../browser-sdk/index/README.md#bucketclient)

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
</tbody>
</table>

#### Defined in

[index.tsx:48](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L48)

***

### FeatureKey

```ts
type FeatureKey: keyof keyof Features extends never ? Record<string, boolean> : Features;
```

#### Defined in

[index.tsx:29](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L29)

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

#### Defined in

[index.tsx:78](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L78)

***

### useFeature()

```ts
function useFeature(key: string): {
  isEnabled: boolean;
  isLoading: true;
  requestFeedback: (opts: Omit<RequestFeedbackData, "featureId" | "featureKey">) => undefined | void;
  track: () => undefined | Promise<undefined | Response>;
 } | {
  isLoading: false;
  requestFeedback: (opts: Omit<RequestFeedbackData, "featureId" | "featureKey">) => undefined | void;
  track: () => undefined | Promise<undefined | Response>;
  get isEnabled: boolean;
}
```

Returns the state of a given feature for the current context, e.g.

```ts
function HuddleButton() {
  const {isEnabled, track} = useFeature("huddle");
  if (isEnabled) {
   return <button onClick={() => track()}>Start Huddle</button>;
  }
}
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

\{
  `isEnabled`: `boolean`;
  `isLoading`: `true`;
  `requestFeedback`: (`opts`: `Omit`\<[`RequestFeedbackData`](../browser-sdk/index/README.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`\>) => `undefined` \| `void`;
  `track`: () => `undefined` \| `Promise`\<`undefined` \| `Response`\>;
 \} \| \{
  `isLoading`: `false`;
  `requestFeedback`: (`opts`: `Omit`\<[`RequestFeedbackData`](../browser-sdk/index/README.md#requestfeedbackdata), `"featureId"` \| `"featureKey"`\>) => `undefined` \| `void`;
  `track`: () => `undefined` \| `Promise`\<`undefined` \| `Response`\>;
  get `isEnabled`: `boolean`;
 \}

#### Defined in

[index.tsx:178](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L178)

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => undefined | void
```

Returns a function to open up the feedback form
Note: When calling `useRequestFeedback`, user/company must already be set.

See [link](../browser-sdk/documents/FEEDBACK.md) for more information

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

[`RequestFeedbackData`](../browser-sdk/index/README.md#requestfeedbackdata)

</td>
</tr>
</tbody>
</table>

##### Returns

`undefined` \| `void`

#### Defined in

[index.tsx:249](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L249)

***

### useSendFeedback()

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => undefined | Promise<undefined | Response>
```

Returns a function to manually send feedback collected from a user.
Note: When calling `useSendFeedback`, user/company must already be set.

See [link](../browser-sdk/documents/FEEDBACK.md) for more information

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

[`UnassignedFeedback`](../browser-sdk/index/README.md#unassignedfeedback)

</td>
</tr>
</tbody>
</table>

##### Returns

`undefined` \| `Promise`\<`undefined` \| `Response`\>

#### Defined in

[index.tsx:270](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L270)

***

### useTrack()

```ts
function useTrack(): (eventName: string, attributes?: null | Record<string, any>) => undefined | Promise<undefined | Response>
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

`null` \| `Record`\<`string`, `any`\>

</td>
</tr>
</tbody>
</table>

##### Returns

`undefined` \| `Promise`\<`undefined` \| `Response`\>

#### Defined in

[index.tsx:229](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L229)

***

### useUpdateCompany()

```ts
function useUpdateCompany(): (opts: {}) => undefined | Promise<void>
```

Returns a function to update the current company's information.
For example, if the company changed plan or opted into a beta-feature.

The method returned is a function which returns a promise that
resolves when after the features have been updated as a result
of the company update.

```ts
const updateCompany = useUpdateCompany();
updateCompany({ plan: "enterprise" }).then(() => console.log("Features updated"));

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

`undefined` \| `Promise`\<`void`\>

#### Defined in

[index.tsx:307](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L307)

***

### useUpdateOtherContext()

```ts
function useUpdateOtherContext(): (opts: {}) => undefined | Promise<void>
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

`undefined` \| `Promise`\<`void`\>

#### Defined in

[index.tsx:326](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L326)

***

### useUpdateUser()

```ts
function useUpdateUser(): (opts: {}) => undefined | Promise<void>
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

`undefined` \| `Promise`\<`void`\>

#### Defined in

[index.tsx:288](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/react-sdk/src/index.tsx#L288)
