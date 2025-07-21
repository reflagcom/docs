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

#### Type Parameters

| Type Parameter                                                           | Default type                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `TConfig` _extends_ [`FeatureType`](globals.md#featuretype)\[`"config"`] | [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) |

#### Properties

| Property          | Type                                                                                                                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `config`          | `Ref`< \| [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) \| { `key`: `string`; } & `TConfig`, \| [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) \| { `key`: `string`; } & `TConfig`> |
| `isEnabled`       | `Ref`<`boolean`, `boolean`>                                                                                                                                                                                                |
| `isLoading`       | `Ref`<`boolean`, `boolean`>                                                                                                                                                                                                |
| `key`             | `string`                                                                                                                                                                                                                   |
| `requestFeedback` | (`opts`: [`RequestFeatureFeedbackOptions`](globals.md#requestfeaturefeedbackoptions)) => `void`                                                                                                                            |

#### Methods

**track()**

```ts
track(): 
  | undefined
  | Promise<
  | undefined
| Response>
```

**Returns**

\| `undefined` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

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
  debug: boolean;
  newBucketClient: (...args: ConstructorParameters<typeof BucketClient>) => BucketClient;
};
```

#### Type declaration

| Name               | Type                                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debug`?           | `boolean`                                                                                                                                                                    |
| `newBucketClient`? | (...`args`: [`ConstructorParameters`](https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype)<_typeof_ `BucketClient`>) => `BucketClient` |

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

### RequestFeatureFeedbackOptions

```ts
type RequestFeatureFeedbackOptions = Omit<RequestFeedbackData, "featureKey" | "featureId">;
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

## Variables

### BucketProvider

```ts
const BucketProvider: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
```

***

### default

```ts
default: {
  install: void;
};
```

#### Type declaration

| Name        | Type   |
| ----------- | ------ |
| `install()` | `void` |

## Functions

### useClient()

```ts
function useClient(): Ref<BucketClient, BucketClient>
```

Vue composable for getting the Bucket client.

This composable returns the Bucket client. You can use this to get the Bucket client at any point in your application.

#### Returns

`Ref`<`BucketClient`, `BucketClient`>

The Bucket client.

***

### useFeature()

```ts
function useFeature(key: string): Feature<any>
```

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `key`     | `string` |

#### Returns

[`Feature`](globals.md#featuretconfig)<`any`>

***

### useIsLoading()

```ts
function useIsLoading(): Ref<boolean, boolean>
```

Vue composable for checking if the Bucket client is loading.

This composable returns a boolean value that indicates whether the Bucket client is loading. You can use this to check if the Bucket client is loading at any point in your application.

#### Returns

`Ref`<`boolean`, `boolean`>

***

### useRequestFeedback()

```ts
function useRequestFeedback(): (options: RequestFeedbackData) => void
```

Vue composable for requesting user feedback.

This composable returns a function that can be used to trigger the feedback collection flow with the Bucket SDK. You can use this to prompt users for feedback at any point in your application.

#### Returns

`Function`

A function that requests feedback from the user. The function accepts:

* `options`: An object containing feedback request options.

**Parameters**

| Parameter | Type                  |
| --------- | --------------------- |
| `options` | `RequestFeedbackData` |

**Returns**

`void`

#### Example

```ts
import { useRequestFeedback } from '@bucketco/vue-sdk';

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

This composable returns a function that can be used to send feedback to the Bucket SDK. You can use this to send feedback from your application.

#### Returns

`Function`

A function that sends feedback to the Bucket SDK. The function accepts:

* `options`: An object containing feedback options.

**Parameters**

| Parameter | Type                 |
| --------- | -------------------- |
| `opts`    | `UnassignedFeedback` |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

#### Example

```ts
import { useSendFeedback } from '@bucketco/vue-sdk';

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

This composable returns a function that can be used to track custom events with the Bucket SDK.

#### Returns

`Function`

A function that tracks an event. The function accepts:

* `eventName`: The name of the event to track.
* `attributes`: (Optional) Additional attributes to associate with the event.

**Parameters**

| Parameter     | Type                                                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `eventName`   | `string`                                                                                                                  |
| `attributes`? | \| `null` \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`> |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | `undefined` | [`Response`](https://developer.mozilla.org/docs/Web/API/Response)>

#### Example

```ts
import { useTrack } from '@bucketco/vue-sdk';

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

This composable returns a function that can be used to update the company context with the Bucket SDK. You can use this to update the company context at any point in your application.

#### Returns

`Function`

A function that updates the company context. The function accepts:

* `opts`: An object containing the company context to update.

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

#### Example

```ts
import { useUpdateCompany } from '@bucketco/vue-sdk';

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

This composable returns a function that can be used to update the other context with the Bucket SDK. You can use this to update the other context at any point in your application.

#### Returns

`Function`

A function that updates the other context. The function accepts:

* `opts`: An object containing the other context to update.

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

#### Example

```ts
import { useUpdateOtherContext } from '@bucketco/vue-sdk';

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

This composable returns a function that can be used to update the user context with the Bucket SDK. You can use this to update the user context at any point in your application.

#### Returns

`Function`

A function that updates the user context. The function accepts:

* `opts`: An object containing the user context to update.

**Parameters**

| Parameter | Type |
| --------- | ---- |
| `opts`    | {}   |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

#### Example

```ts
import { useUpdateUser } from '@bucketco/vue-sdk';

const updateUser = useUpdateUser();

// Update the user context
updateUser({ id: "123", name: "John Doe" });
```
