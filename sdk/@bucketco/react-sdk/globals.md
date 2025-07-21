---
title:
  visible: true
tableOfContents:
  visible: true
outline:
  visible: true
pagination:
  visible: true
---

# Reference

## Interfaces

### CheckEvent

Event representing checking the feature flag evaluation result

#### Properties

| Property                 | Type                                                   | Description                                                                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                 | `"check-is-enabled"` \| `"check-config"`               | `check-is-enabled` means `isEnabled` was checked, `check-config` means `config` was checked.                                                                                                                                                          |
| `key`                    | `string`                                               | Feature key.                                                                                                                                                                                                                                          |
| `missingContextFields?`  | `string`\[]                                            | Missing context fields.                                                                                                                                                                                                                               |
| `ruleEvaluationResults?` | `boolean`\[]                                           | Rule evaluation results.                                                                                                                                                                                                                              |
| `value?`                 | \| `boolean` \| { `key`: `string`; `payload`: `any`; } | Result of feature flag or configuration evaluation. If `action` is `check-is-enabled`, this is the result of the feature flag evaluation and `value` is a boolean. If `action` is `check-config`, this is the result of the configuration evaluation. |
| `version?`               | `number`                                               | Version of targeting rules.                                                                                                                                                                                                                           |

***

### CompanyContext

Context is a set of key-value pairs. Id should always be present so that it can be referenced to an existing company.

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

### Feature\<TConfig>

Describes a feature

#### Type Parameters

| Type Parameter                                                           | Default type                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `TConfig` _extends_ [`FeatureType`](globals.md#featuretype)\[`"config"`] | [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) |

#### Properties

| Property          | Type                                                                                                     | Description                     |
| ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `config`          | \| [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) \| { `key`: `string`; } & `TConfig` | ‐                               |
| `isEnabled`       | `boolean`                                                                                                | If the feature is enabled.      |
| `isLoading`       | `boolean`                                                                                                | If the feature is loading.      |
| `key`             | `string`                                                                                                 | The key of the feature.         |
| `requestFeedback` | (`opts`: [`RequestFeedbackOptions`](globals.md#requestfeedbackoptions)) => `void`                        | Request feedback from the user. |

#### Methods

**track()**

```ts
track(): 
  | undefined
  | Promise<
  | undefined
| Response>
```

Track feature usage in Bucket.

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

***

### Features

***

### UserContext

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

| Name                | Type                                                                                                                                                                                                                                                             | Description                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `children`?         | `ReactNode`                                                                                                                                                                                                                                                      | Children to be rendered.                                                          |
| `debug`?            | `boolean`                                                                                                                                                                                                                                                        | Whether to enable debug mode (optional).                                          |
| `loadingComponent`? | `ReactNode`                                                                                                                                                                                                                                                      | Loading component to be rendered while features are loading.                      |
| `newBucketClient`?  | (...`args`: [`ConstructorParameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)<_typeof_ [`BucketClient`](../browser-sdk/globals.md#bucketclient)>) => [`BucketClient`](../browser-sdk/globals.md#bucketclient) | <p><strong><code>Internal</code></strong></p><p>New BucketClient constructor.</p> |

***

### EmptyFeatureRemoteConfig

```ts
type EmptyFeatureRemoteConfig = {
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

{ `key`: `string`; `payload`: `any`; }

| Name      | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `key`     | `string` | The key of the matched configuration value. |
| `payload` | `any`    | The optional user-supplied payload data.    |

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

| Name             | Type                  |
| ---------------- | --------------------- |
| `config`?        | { `payload`: `any`; } |
| `config.payload` | `any`                 |

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

| Name          | Type                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `attributes`? | \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> \| `null` |
| `company`?    | [`CompanyContext`](globals.md#companycontext)                                                                             |
| `eventName`   | `string`                                                                                                                  |
| `user`        | [`UserContext`](globals.md#usercontext)                                                                                   |

***

### TypedFeatures

```ts
type TypedFeatures = keyof Features extends never ? Record<string, Feature> : { [TypedFeatureKey in keyof Features]: Features[TypedFeatureKey] extends FeatureType ? Feature<Features[TypedFeatureKey]["config"]> : Feature };
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record\<string, Feature> if the Features interface has not been extended.

## Functions

### BucketProvider()

```ts
function BucketProvider(__namedParameters: BucketProps): Element
```

Provider for the BucketClient.

#### Parameters

| Parameter           | Type                                    |
| ------------------- | --------------------------------------- |
| `__namedParameters` | [`BucketProps`](globals.md#bucketprops) |

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

`undefined` | [`BucketClient`](../browser-sdk/globals.md#bucketclient)

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

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

#### Parameters

| Parameter | Type   |
| --------- | ------ |
| `key`     | `TKey` |

#### Returns

[`TypedFeatures`](globals.md#typedfeatures)\[`TKey`]

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => undefined | void
```

Returns a function to open up the feedback form Note: When calling `useRequestFeedback`, user/company must already be set.

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

**Parameters**

| Parameter | Type                                                                   |
| --------- | ---------------------------------------------------------------------- |
| `options` | [`RequestFeedbackData`](../browser-sdk/globals.md#requestfeedbackdata) |

**Returns**

`undefined` | `void`

***

### useSendFeedback()

```ts
function useSendFeedback(): (opts: UnassignedFeedback) => 
  | undefined
  | Promise<
  | undefined
| Response>
```

Returns a function to manually send feedback collected from a user. Note: When calling `useSendFeedback`, user/company must already be set.

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

**Parameters**

| Parameter | Type                                                                 |
| --------- | -------------------------------------------------------------------- |
| `opts`    | [`UnassignedFeedback`](../browser-sdk/globals.md#unassignedfeedback) |

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

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

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

***

### useUpdateCompany()

```ts
function useUpdateCompany(): (opts: {}) => 
  | undefined
| Promise<void>
```

Returns a function to update the current company's information. For example, if the company changed plan or opted into a beta-feature.

The method returned is a function which returns a promise that resolves when after the features have been updated as a result of the company update.

```ts
const updateCompany = useUpdateCompany();
updateCompany({ plan: "enterprise" }).then(() => console.log("Features updated"));
```

#### Returns

`Function`

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

***

### useUpdateOtherContext()

```ts
function useUpdateOtherContext(): (opts: {}) => 
  | undefined
| Promise<void>
```

Returns a function to update the "other" context information. For example, if the user changed workspace, you can set the workspace id here.

The method returned is a function which returns a promise that resolves when after the features have been updated as a result of the update to the "other" context.

```ts
const updateOtherContext = useUpdateOtherContext();
updateOtherContext({ workspaceId: newWorkspaceId })
  .then(() => console.log("Features updated"));
```

#### Returns

`Function`

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

***

### useUpdateUser()

```ts
function useUpdateUser(): (opts: {}) => 
  | undefined
| Promise<void>
```

Returns a function to update the current user's information. For example, if the user changed role or opted into a beta-feature.

The method returned is a function which returns a promise that resolves when after the features have been updated as a result of the user update.

```ts
const updateUser = useUpdateUser();
updateUser({ optInHuddles: "true" }).then(() => console.log("Features updated"));
```

#### Returns

`Function`

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>
