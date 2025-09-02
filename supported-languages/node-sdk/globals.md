---
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

## Classes

### BoundBucketClient

A client bound with a specific user, company, and other context.

#### Constructors

**new BoundBucketClient()**

```ts
new BoundBucketClient(client: BucketClient, options: ContextWithTracking): BoundBucketClient
```

**`Internal`**

(Internal) Creates a new BoundBucketClient. Use `bindClient` to create a new client bound with a specific context.

**Parameters**

| Parameter | Type                                                    | Description                 |
| --------- | ------------------------------------------------------- | --------------------------- |
| `client`  | [`BucketClient`](globals.md#bucketclient)               | The `BucketClient` to use.  |
| `options` | [`ContextWithTracking`](globals.md#contextwithtracking) | The options for the client. |

**Returns**

[`BoundBucketClient`](globals.md#boundbucketclient)

#### Accessors

**company**

**Get Signature**

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

**Returns**

\| `undefined` | { `[k: string]`: `any`; `avatar`: `string`; `id`: `undefined` | `string` | `number`; `name`: `string`; }

The company or `undefined` if it is not set.

**otherContext**

**Get Signature**

```ts
get otherContext(): 
  | undefined
| Record<string, any>
```

Gets the "other" context associated with the client.

**Returns**

\| `undefined` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`>

The "other" context or `undefined` if it is not set.

**user**

**Get Signature**

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

**Returns**

\| `undefined` | { `[k: string]`: `any`; `avatar`: `string`; `email`: `string`; `id`: `undefined` | `string` | `number`; `name`: `string`; }

The user or `undefined` if it is not set.

#### Methods

**bindClient()**

```ts
bindClient(context: ContextWithTracking): BoundBucketClient
```

Create a new client bound with the additional context. Note: This performs a shallow merge for user/company/other individually.

**Parameters**

| Parameter | Type                                                    | Description                        |
| --------- | ------------------------------------------------------- | ---------------------------------- |
| `context` | [`ContextWithTracking`](globals.md#contextwithtracking) | The context to bind the client to. |

**Returns**

[`BoundBucketClient`](globals.md#boundbucketclient)

new client bound with the additional context

**flush()**

```ts
flush(): Promise<void>
```

Flushes the batch buffer.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**getFeature()**

```ts
getFeature<TKey>(key: TKey): Feature
```

Get a specific feature for the user/company/other context bound to this client. Using the `isEnabled` property sends a `check` event to Bucket.

**Type Parameters**

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

**Parameters**

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| `key`     | `TKey` | The key of the feature to get. |

**Returns**

[`Feature`](globals.md#featuretconfig)

Features for the given user/company and whether each one is enabled or not

**getFeatureRemote()**

```ts
getFeatureRemote(key: string): Promise<Feature>
```

Get remotely evaluated feature for the user/company/other context bound to this client.

**Parameters**

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `key`     | `string` | The key of the feature to get. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Feature`](globals.md#featuretconfig)>

Feature for the given user/company and key and whether it's enabled or not

**getFeatures()**

```ts
getFeatures(): Record<string, Feature>
```

Get features for the user/company/other context bound to this client. Meant for use in serialization of features for transferring to the client-side/browser.

**Returns**

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Feature`](globals.md#featuretconfig)>

Features for the given user/company and whether each one is enabled or not

**getFeaturesRemote()**

```ts
getFeaturesRemote(): Promise<Record<string, Feature>>
```

Get remotely evaluated feature for the user/company/other context bound to this client.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Feature`](globals.md#featuretconfig)>>

Features for the given user/company and whether each one is enabled or not

**track()**

```ts
track(event: string, options?: TrackOptions & {
  companyId: string;
}): Promise<void>
```

Track an event in Bucket.

**Parameters**

| Parameter  | Type                                                                   | Description                |
| ---------- | ---------------------------------------------------------------------- | -------------------------- |
| `event`    | `string`                                                               | The event to track.        |
| `options`? | [`TrackOptions`](globals.md#trackoptions) & { `companyId`: `string`; } | The options for the event. |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the event is invalid or the options are invalid.

***

### BucketClient

The SDK client.

#### Remarks

This is the main class for interacting with Bucket. It is used to evaluate feature flags, update user and company contexts, and track events.

#### Example

```ts
// set the BUCKET_SECRET_KEY environment variable or pass the secret key to the constructor
const client = new BucketClient();

// evaluate a feature flag
const isFeatureEnabled = client.getFeature("feature-flag-key", {
  user: { id: "user-id" },
  company: { id: "company-id" },
});
```

#### Extended by

* [`EdgeClient`](globals.md#edgeclient)

#### Constructors

**new BucketClient()**

```ts
new BucketClient(options: ClientOptions): BucketClient
```

Creates a new SDK client. See README for configuration options.

**Parameters**

| Parameter | Type                                        | Description                                                |
| --------- | ------------------------------------------- | ---------------------------------------------------------- |
| `options` | [`ClientOptions`](globals.md#clientoptions) | The options for the client or an existing client to clone. |

**Returns**

[`BucketClient`](globals.md#bucketclient)

**Throws**

An error if the options are invalid.

#### Properties

| Property     | Modifier   | Type                                    | Description                                 |
| ------------ | ---------- | --------------------------------------- | ------------------------------------------- |
| `httpClient` | `public`   | [`HttpClient`](globals.md#httpclient-2) | ‐                                           |
| `logger`     | `readonly` | [`Logger`](globals.md#logger-2)         | Gets the logger associated with the client. |

#### Accessors

**featureOverrides**

**Set Signature**

```ts
set featureOverrides(overrides: 
  | Partial<Record<string, FeatureOverride>>
  | FeatureOverridesFn): void
```

Sets the feature overrides.

**Remarks**

The feature overrides are used to override the feature definitions. This is useful for testing or development.

**Example**

```ts
client.featureOverrides = {
  "feature-1": true,
  "feature-2": false,
};
```

**Parameters**

| Parameter   | Type                                                                                                                                                                                                                                                                                                         | Description            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `overrides` | \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`FeatureOverride`](globals.md#featureoverride)>> \| [`FeatureOverridesFn`](globals.md#featureoverridesfn) | The feature overrides. |

**Returns**

`void`

#### Methods

**bindClient()**

```ts
bindClient(context: ContextWithTracking): BoundBucketClient
```

Returns a new BoundBucketClient with the user/company/otherContext set to be used in subsequent calls. For example, for evaluating feature targeting or tracking events.

**Parameters**

| Parameter | Type                                                    | Description                        |
| --------- | ------------------------------------------------------- | ---------------------------------- |
| `context` | [`ContextWithTracking`](globals.md#contextwithtracking) | The context to bind the client to. |

**Returns**

[`BoundBucketClient`](globals.md#boundbucketclient)

A new client bound with the arguments given.

**Throws**

An error if the user/company is given but their ID is not a string.

**Remarks**

The `updateUser` / `updateCompany` methods will automatically be called when the user/company is set respectively.

**clearFeatureOverrides()**

```ts
clearFeatureOverrides(): void
```

Clears the feature overrides.

**Returns**

`void`

**Remarks**

This is useful for testing or development.

**Example**

```ts
afterAll(() => {
  client.clearFeatureOverrides();
});
```

**flush()**

```ts
flush(): Promise<void>
```

Flushes and completes any in-flight fetches in the feature cache.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Remarks**

It is recommended to call this method when the application is shutting down to ensure all events are sent before the process exits.

This method is automatically called when the process exits if `batchOptions.flushOnExit` is `true` in the options (default).

**getFeature()**

```ts
getFeature<TKey>(__namedParameters: ContextWithTracking, key: TKey): Feature
```

Gets the evaluated feature for the current context which includes the user, company, and custom context. Using the `isEnabled` property sends a `check` event to Bucket.

**Type Parameters**

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

**Parameters**

| Parameter           | Type                                                    | Description                    |
| ------------------- | ------------------------------------------------------- | ------------------------------ |
| `__namedParameters` | [`ContextWithTracking`](globals.md#contextwithtracking) | ‐                              |
| `key`               | `TKey`                                                  | The key of the feature to get. |

**Returns**

[`Feature`](globals.md#featuretconfig)

The evaluated feature.

**Remarks**

Call `initialize` before calling this method to ensure the feature definitions are cached, no features will be returned otherwise.

**getFeatureDefinitions()**

```ts
getFeatureDefinitions(): FeatureDefinition[]
```

Gets the feature definitions, including all config values. To evaluate which features are enabled for a given user/company, use `getFeatures`.

**Returns**

[`FeatureDefinition`](globals.md#featuredefinition)\[]

The features definitions.

**getFeatureRemote()**

```ts
getFeatureRemote<TKey>(
   key: TKey, 
   userId?: IdType, 
   companyId?: IdType, 
additionalContext?: Context): Promise<Feature>
```

Gets evaluated feature with the usage of remote context. This method triggers a network request every time it's called.

**Type Parameters**

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

**Parameters**

| Parameter            | Type                            | Description                                          |
| -------------------- | ------------------------------- | ---------------------------------------------------- |
| `key`                | `TKey`                          | The key of the feature to get.                       |
| `userId`?            | [`IdType`](globals.md#idtype)   | The userId of the user to get the feature for.       |
| `companyId`?         | [`IdType`](globals.md#idtype)   | The companyId of the company to get the feature for. |
| `additionalContext`? | [`Context`](globals.md#context) | The additional context to get the feature for.       |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Feature`](globals.md#featuretconfig)>

evaluated feature

**getFeatures()**

```ts
getFeatures(options: ContextWithTracking): Record<string, Feature>
```

Gets the evaluated features for the current context which includes the user, company, and custom context.

**Parameters**

| Parameter | Type                                                    | Description                  |
| --------- | ------------------------------------------------------- | ---------------------------- |
| `options` | [`ContextWithTracking`](globals.md#contextwithtracking) | The options for the context. |

**Returns**

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Feature`](globals.md#featuretconfig)>

The evaluated features.

**Remarks**

Call `initialize` before calling this method to ensure the feature definitions are cached, no features will be returned otherwise.

**getFeaturesRemote()**

```ts
getFeaturesRemote(
   userId?: IdType, 
   companyId?: IdType, 
additionalContext?: Context): Promise<Record<string, Feature>>
```

Gets evaluated features with the usage of remote context. This method triggers a network request every time it's called.

**Parameters**

| Parameter            | Type                            | Description                                           |
| -------------------- | ------------------------------- | ----------------------------------------------------- |
| `userId`?            | [`IdType`](globals.md#idtype)   | The userId of the user to get the features for.       |
| `companyId`?         | [`IdType`](globals.md#idtype)   | The companyId of the company to get the features for. |
| `additionalContext`? | [`Context`](globals.md#context) | The additional context to get the features for.       |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Feature`](globals.md#featuretconfig)>>

evaluated features

**initialize()**

```ts
initialize(): Promise<void>
```

Initializes the client by caching the features definitions.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Remarks**

Call this method before calling `getFeatures` to ensure the feature definitions are cached. The client will ignore subsequent calls to this method.

**track()**

```ts
track(
   userId: IdType, 
   event: string, 
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

Tracks an event in Bucket.

**Parameters**

| Parameter  | Type                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------- |
| `userId`   | [`IdType`](globals.md#idtype)                                                               |
| `event`    | `string`                                                                                    |
| `options`? | [`TrackOptions`](globals.md#trackoptions) & { `companyId`: [`IdType`](globals.md#idtype); } |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the user is not set or the event is invalid or the options are invalid.

**Remarks**

If the company is set, the event will be associated with the company.

**updateCompany()**

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

Updates the associated company in Bucket.

**Parameters**

| Parameter   | Type                                                                                     | Description                             |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| `companyId` | [`IdType`](globals.md#idtype)                                                            | The companyId of the company to update. |
| `options`?  | [`TrackOptions`](globals.md#trackoptions) & { `userId`: [`IdType`](globals.md#idtype); } | The options for the company.            |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the company is not set or the options are invalid.

**Remarks**

The company must be set using `withCompany` before calling this method. If the user is set, the company will be associated with the user.

**updateUser()**

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
```

Updates the associated user in Bucket.

**Parameters**

| Parameter  | Type                                      | Description                       |
| ---------- | ----------------------------------------- | --------------------------------- |
| `userId`   | [`IdType`](globals.md#idtype)             | The userId of the user to update. |
| `options`? | [`TrackOptions`](globals.md#trackoptions) | The options for the user.         |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the company is not set or the options are invalid.

**Remarks**

The company must be set using `withCompany` before calling this method. If the user is set, the company will be associated with the user.

***

### EdgeClient

The EdgeClient is BucketClient pre-configured to be used in edge runtimes, like Cloudflare Workers.

#### Example

```ts
// set the BUCKET_SECRET_KEY environment variable or pass the secret key in the constructor
const client = new EdgeClient();

// evaluate a feature flag
const context = {
  user: { id: "user-id" },
  company: { id: "company-id" },
}
const { isEnabled } = client.getFeature(context, "feature-flag-key");

```

#### Extends

* [`BucketClient`](globals.md#bucketclient)

#### Constructors

**new EdgeClient()**

```ts
new EdgeClient(options: EdgeClientOptions): EdgeClient
```

**Parameters**

| Parameter | Type                                                |
| --------- | --------------------------------------------------- |
| `options` | [`EdgeClientOptions`](globals.md#edgeclientoptions) |

**Returns**

[`EdgeClient`](globals.md#edgeclient)

**Overrides**

[`BucketClient`](globals.md#bucketclient).[`constructor`](globals.md#constructors-1)

#### Properties

| Property     | Modifier   | Type                                    | Description                                 |
| ------------ | ---------- | --------------------------------------- | ------------------------------------------- |
| `httpClient` | `public`   | [`HttpClient`](globals.md#httpclient-2) | ‐                                           |
| `logger`     | `readonly` | [`Logger`](globals.md#logger-2)         | Gets the logger associated with the client. |

#### Accessors

**featureOverrides**

**Set Signature**

```ts
set featureOverrides(overrides: 
  | Partial<Record<string, FeatureOverride>>
  | FeatureOverridesFn): void
```

Sets the feature overrides.

**Remarks**

The feature overrides are used to override the feature definitions. This is useful for testing or development.

**Example**

```ts
client.featureOverrides = {
  "feature-1": true,
  "feature-2": false,
};
```

**Parameters**

| Parameter   | Type                                                                                                                                                                                                                                                                                                         | Description            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `overrides` | \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`FeatureOverride`](globals.md#featureoverride)>> \| [`FeatureOverridesFn`](globals.md#featureoverridesfn) | The feature overrides. |

**Returns**

`void`

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`featureOverrides`](globals.md#featureoverrides)

#### Methods

**bindClient()**

```ts
bindClient(context: ContextWithTracking): BoundBucketClient
```

Returns a new BoundBucketClient with the user/company/otherContext set to be used in subsequent calls. For example, for evaluating feature targeting or tracking events.

**Parameters**

| Parameter | Type                                                    | Description                        |
| --------- | ------------------------------------------------------- | ---------------------------------- |
| `context` | [`ContextWithTracking`](globals.md#contextwithtracking) | The context to bind the client to. |

**Returns**

[`BoundBucketClient`](globals.md#boundbucketclient)

A new client bound with the arguments given.

**Throws**

An error if the user/company is given but their ID is not a string.

**Remarks**

The `updateUser` / `updateCompany` methods will automatically be called when the user/company is set respectively.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`bindClient`](globals.md#bindclient-1)

**clearFeatureOverrides()**

```ts
clearFeatureOverrides(): void
```

Clears the feature overrides.

**Returns**

`void`

**Remarks**

This is useful for testing or development.

**Example**

```ts
afterAll(() => {
  client.clearFeatureOverrides();
});
```

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`clearFeatureOverrides`](globals.md#clearfeatureoverrides)

**flush()**

```ts
flush(): Promise<void>
```

Flushes and completes any in-flight fetches in the feature cache.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Remarks**

It is recommended to call this method when the application is shutting down to ensure all events are sent before the process exits.

This method is automatically called when the process exits if `batchOptions.flushOnExit` is `true` in the options (default).

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`flush`](globals.md#flush-1)

**getFeature()**

```ts
getFeature<TKey>(__namedParameters: ContextWithTracking, key: TKey): Feature
```

Gets the evaluated feature for the current context which includes the user, company, and custom context. Using the `isEnabled` property sends a `check` event to Bucket.

**Type Parameters**

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

**Parameters**

| Parameter           | Type                                                    | Description                    |
| ------------------- | ------------------------------------------------------- | ------------------------------ |
| `__namedParameters` | [`ContextWithTracking`](globals.md#contextwithtracking) | ‐                              |
| `key`               | `TKey`                                                  | The key of the feature to get. |

**Returns**

[`Feature`](globals.md#featuretconfig)

The evaluated feature.

**Remarks**

Call `initialize` before calling this method to ensure the feature definitions are cached, no features will be returned otherwise.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`getFeature`](globals.md#getfeature-1)

**getFeatureDefinitions()**

```ts
getFeatureDefinitions(): FeatureDefinition[]
```

Gets the feature definitions, including all config values. To evaluate which features are enabled for a given user/company, use `getFeatures`.

**Returns**

[`FeatureDefinition`](globals.md#featuredefinition)\[]

The features definitions.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`getFeatureDefinitions`](globals.md#getfeaturedefinitions)

**getFeatureRemote()**

```ts
getFeatureRemote<TKey>(
   key: TKey, 
   userId?: IdType, 
   companyId?: IdType, 
additionalContext?: Context): Promise<Feature>
```

Gets evaluated feature with the usage of remote context. This method triggers a network request every time it's called.

**Type Parameters**

| Type Parameter            |
| ------------------------- |
| `TKey` _extends_ `string` |

**Parameters**

| Parameter            | Type                            | Description                                          |
| -------------------- | ------------------------------- | ---------------------------------------------------- |
| `key`                | `TKey`                          | The key of the feature to get.                       |
| `userId`?            | [`IdType`](globals.md#idtype)   | The userId of the user to get the feature for.       |
| `companyId`?         | [`IdType`](globals.md#idtype)   | The companyId of the company to get the feature for. |
| `additionalContext`? | [`Context`](globals.md#context) | The additional context to get the feature for.       |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Feature`](globals.md#featuretconfig)>

evaluated feature

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`getFeatureRemote`](globals.md#getfeatureremote-1)

**getFeatures()**

```ts
getFeatures(options: ContextWithTracking): Record<string, Feature>
```

Gets the evaluated features for the current context which includes the user, company, and custom context.

**Parameters**

| Parameter | Type                                                    | Description                  |
| --------- | ------------------------------------------------------- | ---------------------------- |
| `options` | [`ContextWithTracking`](globals.md#contextwithtracking) | The options for the context. |

**Returns**

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Feature`](globals.md#featuretconfig)>

The evaluated features.

**Remarks**

Call `initialize` before calling this method to ensure the feature definitions are cached, no features will be returned otherwise.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`getFeatures`](globals.md#getfeatures-1)

**getFeaturesRemote()**

```ts
getFeaturesRemote(
   userId?: IdType, 
   companyId?: IdType, 
additionalContext?: Context): Promise<Record<string, Feature>>
```

Gets evaluated features with the usage of remote context. This method triggers a network request every time it's called.

**Parameters**

| Parameter            | Type                            | Description                                           |
| -------------------- | ------------------------------- | ----------------------------------------------------- |
| `userId`?            | [`IdType`](globals.md#idtype)   | The userId of the user to get the features for.       |
| `companyId`?         | [`IdType`](globals.md#idtype)   | The companyId of the company to get the features for. |
| `additionalContext`? | [`Context`](globals.md#context) | The additional context to get the features for.       |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, [`Feature`](globals.md#featuretconfig)>>

evaluated features

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`getFeaturesRemote`](globals.md#getfeaturesremote-1)

**initialize()**

```ts
initialize(): Promise<void>
```

Initializes the client by caching the features definitions.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Remarks**

Call this method before calling `getFeatures` to ensure the feature definitions are cached. The client will ignore subsequent calls to this method.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`initialize`](globals.md#initialize)

**track()**

```ts
track(
   userId: IdType, 
   event: string, 
   options?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

Tracks an event in Bucket.

**Parameters**

| Parameter  | Type                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------- |
| `userId`   | [`IdType`](globals.md#idtype)                                                               |
| `event`    | `string`                                                                                    |
| `options`? | [`TrackOptions`](globals.md#trackoptions) & { `companyId`: [`IdType`](globals.md#idtype); } |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the user is not set or the event is invalid or the options are invalid.

**Remarks**

If the company is set, the event will be associated with the company.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`track`](globals.md#track-1)

**updateCompany()**

```ts
updateCompany(companyId: IdType, options?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

Updates the associated company in Bucket.

**Parameters**

| Parameter   | Type                                                                                     | Description                             |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| `companyId` | [`IdType`](globals.md#idtype)                                                            | The companyId of the company to update. |
| `options`?  | [`TrackOptions`](globals.md#trackoptions) & { `userId`: [`IdType`](globals.md#idtype); } | The options for the company.            |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the company is not set or the options are invalid.

**Remarks**

The company must be set using `withCompany` before calling this method. If the user is set, the company will be associated with the user.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`updateCompany`](globals.md#updatecompany)

**updateUser()**

```ts
updateUser(userId: IdType, options?: TrackOptions): Promise<void>
```

Updates the associated user in Bucket.

**Parameters**

| Parameter  | Type                                      | Description                       |
| ---------- | ----------------------------------------- | --------------------------------- |
| `userId`   | [`IdType`](globals.md#idtype)             | The userId of the user to update. |
| `options`? | [`TrackOptions`](globals.md#trackoptions) | The options for the user.         |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

**Throws**

An error if the company is not set or the options are invalid.

**Remarks**

The company must be set using `withCompany` before calling this method. If the user is set, the company will be associated with the user.

**Inherited from**

[`BucketClient`](globals.md#bucketclient).[`updateUser`](globals.md#updateuser)

## Interfaces

### ContextWithTracking

A context with tracking option.

#### Extends

* [`Context`](globals.md#context)

#### Properties

| Property          | Type                                                                                                                          | Description                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `company?`        | { `[k: string]`: `any`; `avatar`: `string`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; }                    | The company context. If no `id` key is set, the whole object is ignored.                                          |
| `company.avatar?` | `string`                                                                                                                      | The avatar URL of the company.                                                                                    |
| `company.id`      | `undefined` \| `string` \| `number`                                                                                           | The identifier of the company.                                                                                    |
| `company.name?`   | `string`                                                                                                                      | The name of the company.                                                                                          |
| `enableTracking?` | `boolean`                                                                                                                     | Enable tracking for the context. If set to `false`, tracking will be disabled for the context. Default is `true`. |
| `meta?`           | [`TrackingMeta`](globals.md#trackingmeta)                                                                                     | The meta context used to update the user or company when syncing is required during feature retrieval.            |
| `other?`          | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`>                  | The other context. This is used for any additional context that is not related to user or company.                |
| `user?`           | { `[k: string]`: `any`; `avatar`: `string`; `email`: `string`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; } | The user context. If no `id` key is set, the whole object is ignored.                                             |
| `user.avatar?`    | `string`                                                                                                                      | The avatar URL of the user.                                                                                       |
| `user.email?`     | `string`                                                                                                                      | The email of the user.                                                                                            |
| `user.id`         | `undefined` \| `string` \| `number`                                                                                           | The identifier of the user.                                                                                       |
| `user.name?`      | `string`                                                                                                                      | The name of the user.                                                                                             |

***

### Feature\<TConfig>

Describes a feature

#### Type Parameters

| Type Parameter                                                           | Default type                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `TConfig` _extends_ [`FeatureType`](globals.md#featuretype)\[`"config"`] | [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) |

#### Properties

| Property    | Type                                                                                                     | Description                |
| ----------- | -------------------------------------------------------------------------------------------------------- | -------------------------- |
| `config`    | \| [`EmptyFeatureRemoteConfig`](globals.md#emptyfeatureremoteconfig) \| { `key`: `string`; } & `TConfig` | ‐                          |
| `isEnabled` | `boolean`                                                                                                | If the feature is enabled. |
| `key`       | `string`                                                                                                 | The key of the feature.    |

#### Methods

**track()**

```ts
track(): Promise<void>
```

Track feature usage in Bucket.

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`>

***

### Features

Describes a collection of evaluated features.

#### Remarks

You should extend the Features interface to define the available features.

***

### HttpClient

Defines the interface for an HTTP client.

#### Remarks

This interface is used to abstract the HTTP client implementation from the SDK. Define your own implementation of this interface to use a different HTTP client.

#### Methods

**get()**

```ts
get<TResponse>(
   url: string, 
   headers: Record<string, string>, 
timeoutMs: number): Promise<HttpClientResponse<TResponse>>
```

Sends a GET request to the specified URL.

**Type Parameters**

| Type Parameter |
| -------------- |
| `TResponse`    |

**Parameters**

| Parameter   | Type                                                                                                            | Description                            |
| ----------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `url`       | `string`                                                                                                        | The URL to send the request to.        |
| `headers`   | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `string`> | The headers to include in the request. |
| `timeoutMs` | `number`                                                                                                        | ‐                                      |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`HttpClientResponse`](globals.md#httpclientresponsetresponse)<`TResponse`>>

The response from the server.

**post()**

```ts
post<TBody, TResponse>(
   url: string, 
   headers: Record<string, string>, 
body: TBody): Promise<HttpClientResponse<TResponse>>
```

Sends a POST request to the specified URL.

**Type Parameters**

| Type Parameter |
| -------------- |
| `TBody`        |
| `TResponse`    |

**Parameters**

| Parameter | Type                                                                                                            | Description                            |
| --------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `url`     | `string`                                                                                                        | The URL to send the request to.        |
| `headers` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `string`> | The headers to include in the request. |
| `body`    | `TBody`                                                                                                         | The body of the request.               |

**Returns**

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`HttpClientResponse`](globals.md#httpclientresponsetresponse)<`TResponse`>>

The response from the server.

***

### Logger

Logger interface for logging messages

#### Properties

| Property | Type                                            | Description            |
| -------- | ----------------------------------------------- | ---------------------- |
| `debug`  | (`message`: `string`, `data`?: `any`) => `void` | Log a debug messages   |
| `error`  | (`message`: `string`, `data`?: `any`) => `void` | Log an error messages  |
| `info`   | (`message`: `string`, `data`?: `any`) => `void` | Log an info messages   |
| `warn`   | (`message`: `string`, `data`?: `any`) => `void` | Log a warning messages |

***

### RawFeature

Describes a feature.

#### Properties

| Property                 | Type                                                          | Description                                                                         |
| ------------------------ | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `config?`                | [`RawFeatureRemoteConfig`](globals.md#rawfeatureremoteconfig) | The remote configuration value for the feature.                                     |
| `isEnabled`              | `boolean`                                                     | If the feature is enabled.                                                          |
| `key`                    | `string`                                                      | The key of the feature.                                                             |
| `missingContextFields?`  | `string`\[]                                                   | The missing fields in the evaluation context (optional).                            |
| `ruleEvaluationResults?` | `boolean`\[]                                                  | The rule results of the evaluation (optional).                                      |
| `targetingVersion?`      | `number`                                                      | The version of the targeting used to evaluate if the feature is enabled (optional). |

## Type Aliases

### Attributes

```ts
type Attributes = Record<string, any>;
```

Describes the attributes of a user, company or event.

***

### BatchBufferOptions\<T>

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

#### Type Parameters

| Type Parameter | Description                      |
| -------------- | -------------------------------- |
| `T`            | The type of items in the buffer. |

#### Type declaration

| Name           | Type                                                                                                                         | Description                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `flushHandler` | (`items`: `T`\[]) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`> | A function that handles flushing the items in the buffer.                                                                                                                                    |
| `flushOnExit`? | `boolean`                                                                                                                    | Whether to flush the buffer on exit.                                                                                                                                                         |
| `intervalMs`?  | `number`                                                                                                                     | <p>The interval in milliseconds at which the buffer is flushed.</p><p><strong>Remarks</strong></p><p>If <code>0</code>, the buffer is flushed only when <code>maxSize</code> is reached.</p> |
| `logger`?      | [`Logger`](globals.md#logger-2)                                                                                              | The logger to use for logging (optional).                                                                                                                                                    |
| `maxSize`?     | `number`                                                                                                                     | The maximum size of the buffer before it is flushed.                                                                                                                                         |

***

### CacheStrategy

```ts
type CacheStrategy = "periodically-update" | "in-request";
```

***

### ClientOptions

```ts
type ClientOptions = {
  apiBaseUrl: string;
  batchOptions: Omit<BatchBufferOptions<any>, "flushHandler" | "logger">;
  cacheStrategy: CacheStrategy;
  configFile: string;
  emitEvaluationEvents: boolean;
  fallbackFeatures:   | TypedFeatureKey[]
     | Record<TypedFeatureKey, Exclude<FeatureOverride, false>>;
  featureOverrides:   | string
     | (context: Context) => FeatureOverrides;
  featuresFetchRetries: number;
  fetchTimeoutMs: number;
  host: string;
  httpClient: HttpClient;
  logger: Logger;
  logLevel: LogLevel;
  offline: boolean;
  secretKey: string;
};
```

Defines the options for the SDK client.

#### Type declaration

| Name                    | Type                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiBaseUrl`?           | `string`                                                                                                                                                                                                                                                                                                                                                                       | The host to send requests to (optional).                                                                                                                                                                                                                                                                                                                                                                 |
| `batchOptions`?         | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`BatchBufferOptions`](globals.md#batchbufferoptionst)<`any`>, `"flushHandler"` \| `"logger"`>                                                                                                                                                                                         | The options for the batch buffer (optional). If not provided, the default options are used.                                                                                                                                                                                                                                                                                                              |
| `cacheStrategy`?        | [`CacheStrategy`](globals.md#cachestrategy)                                                                                                                                                                                                                                                                                                                                    | The cache strategy to use for the client (optional, defaults to "periodically-update").                                                                                                                                                                                                                                                                                                                  |
| `configFile`?           | `string`                                                                                                                                                                                                                                                                                                                                                                       | The path to the config file. If supplied, the config file will be loaded. Defaults to `bucket.json` when NODE\_ENV is not production. Can also be set through the environment variable BUCKET\_CONFIG\_FILE.                                                                                                                                                                                             |
| `emitEvaluationEvents`? | `boolean`                                                                                                                                                                                                                                                                                                                                                                      | If set to `false`, no evaluation events will be emitted.                                                                                                                                                                                                                                                                                                                                                 |
| `fallbackFeatures`?     | \| [`TypedFeatureKey`](globals.md#typedfeaturekey)\[] \| [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<[`TypedFeatureKey`](globals.md#typedfeaturekey), [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)<[`FeatureOverride`](globals.md#featureoverride), `false`>> | <p>The features to "enable" as fallbacks when the API is unavailable (optional). Can be an array of feature keys, or a record of feature keys and boolean or object values.</p><p>If a record is supplied instead of array, the values of each key are either the configuration values or the boolean value <code>true</code>.</p>                                                                       |
| `featureOverrides`?     | \| `string` \| (`context`: [`Context`](globals.md#context)) => [`FeatureOverrides`](globals.md#featureoverrides-3)                                                                                                                                                                                                                                                             | <p>If a filename is specified, feature targeting results be overridden with the values from this file. The file should be a JSON object with feature keys as keys, and boolean or object as values.</p><p>If a function is specified, the function will be called with the context and should return a record of feature keys and boolean or object values.</p><p>Defaults to "bucketFeatures.json".</p> |
| `featuresFetchRetries`? | `number`                                                                                                                                                                                                                                                                                                                                                                       | Number of times to retry fetching feature definitions (optional). Default is 3 times.                                                                                                                                                                                                                                                                                                                    |
| `fetchTimeoutMs`?       | `number`                                                                                                                                                                                                                                                                                                                                                                       | The timeout in milliseconds for fetching feature targeting data (optional). Default is 10000 ms.                                                                                                                                                                                                                                                                                                         |
| `host`?                 | `string`                                                                                                                                                                                                                                                                                                                                                                       | <p><strong>Deprecated</strong></p><p>Use <code>apiBaseUrl</code> instead.</p>                                                                                                                                                                                                                                                                                                                            |
| `httpClient`?           | [`HttpClient`](globals.md#httpclient-2)                                                                                                                                                                                                                                                                                                                                        | The HTTP client to use for sending requests (optional). Default is the built-in fetch client.                                                                                                                                                                                                                                                                                                            |
| `logger`?               | [`Logger`](globals.md#logger-2)                                                                                                                                                                                                                                                                                                                                                | The logger to use for logging (optional). Default is info level logging to console.                                                                                                                                                                                                                                                                                                                      |
| `logLevel`?             | [`LogLevel`](globals.md#loglevel-1)                                                                                                                                                                                                                                                                                                                                            | Use the console logger, but set a log level. Ineffective if a custom logger is provided.                                                                                                                                                                                                                                                                                                                 |
| `offline`?              | `boolean`                                                                                                                                                                                                                                                                                                                                                                      | In offline mode, no data is sent or fetched from the the Bucket API. This is useful for testing or development.                                                                                                                                                                                                                                                                                          |
| `secretKey`?            | `string`                                                                                                                                                                                                                                                                                                                                                                       | The secret key used to authenticate with the Bucket API.                                                                                                                                                                                                                                                                                                                                                 |

***

### Context

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

Describes the current user context, company context, and other context. This is used to determine if feature targeting matches and to track events.

#### Type declaration

| Name              | Type                                                                                                                          | Description                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `company`?        | { `[k: string]`: `any`; `avatar`: `string`; `id`: `string` \| `number` \| `undefined`; `name`: `string`; }                    | The company context. If no `id` key is set, the whole object is ignored.                           |
| `company.avatar`? | `string`                                                                                                                      | The avatar URL of the company.                                                                     |
| `company.id`      | `string` \| `number` \| `undefined`                                                                                           | The identifier of the company.                                                                     |
| `company.name`?   | `string`                                                                                                                      | The name of the company.                                                                           |
| `other`?          | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`>                  | The other context. This is used for any additional context that is not related to user or company. |
| `user`?           | { `[k: string]`: `any`; `avatar`: `string`; `email`: `string`; `id`: `string` \| `number` \| `undefined`; `name`: `string`; } | The user context. If no `id` key is set, the whole object is ignored.                              |
| `user.avatar`?    | `string`                                                                                                                      | The avatar URL of the user.                                                                        |
| `user.email`?     | `string`                                                                                                                      | The email of the user.                                                                             |
| `user.id`         | `string` \| `number` \| `undefined`                                                                                           | The identifier of the user.                                                                        |
| `user.name`?      | `string`                                                                                                                      | The name of the user.                                                                              |

***

### EdgeClientOptions

```ts
type EdgeClientOptions = Omit<ClientOptions, "cacheStrategy" | "flushIntervalMs" | "batchOptions">;
```

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

### FeatureConfigVariant

```ts
type FeatureConfigVariant = {
  filter: RuleFilter;
  key: string;
  payload: any;
};
```

Describes a remote feature config variant.

#### Type declaration

| Name      | Type         | Description                              |
| --------- | ------------ | ---------------------------------------- |
| `filter`  | `RuleFilter` | The filter for the variant.              |
| `key`     | `string`     | The key of the variant.                  |
| `payload` | `any`        | The optional user-supplied payload data. |

***

### FeatureDefinition

```ts
type FeatureDefinition = {
  config: {
     variants: FeatureConfigVariant[];
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

#### Type declaration

| Name              | Type                                                                                               | Description                               |
| ----------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `config`?         | { `variants`: [`FeatureConfigVariant`](globals.md#featureconfigvariant)\[]; `version`: `number`; } | The remote configuration for the feature. |
| `config.variants` | [`FeatureConfigVariant`](globals.md#featureconfigvariant)\[]                                       | The variants of the remote configuration. |
| `config.version`  | `number`                                                                                           | The version of the remote configuration.  |
| `description`     | `string` \| `null`                                                                                 | Description of the feature.               |
| `flag`            | { `rules`: { `filter`: `RuleFilter`; }\[]; `version`: `number`; }                                  | The targeting rules for the feature.      |
| `flag.rules`      | { `filter`: `RuleFilter`; }\[]                                                                     | The targeting rules.                      |
| `flag.version`    | `number`                                                                                           | The version of the targeting rules.       |
| `key`             | `string`                                                                                           | The key of the feature.                   |

***

### FeatureOverride

```ts
type FeatureOverride = 
  | FeatureType & {
  config: {
     key: string;
    };
  isEnabled: boolean;
 }
  | boolean;
```

***

### FeatureOverrides

```ts
type FeatureOverrides = Partial<keyof Features extends never ? Record<string, FeatureOverride> : { [FeatureKey in keyof Features]: Features[FeatureKey] extends FeatureOverride ? Features[FeatureKey] : Exclude<FeatureOverride, "config"> }>;
```

Describes the feature overrides.

***

### FeatureOverridesFn()

```ts
type FeatureOverridesFn = (context: Context) => FeatureOverrides;
```

#### Parameters

| Parameter | Type                            |
| --------- | ------------------------------- |
| `context` | [`Context`](globals.md#context) |

#### Returns

[`FeatureOverrides`](globals.md#featureoverrides-3)

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

### HttpClientResponse\<TResponse>

```ts
type HttpClientResponse<TResponse> = {
  body: TResponse | undefined;
  ok: boolean;
  status: number;
};
```

Describes the response of a HTTP client.

#### Type Parameters

| Type Parameter | Description                    |
| -------------- | ------------------------------ |
| `TResponse`    | The type of the response body. |

#### Type declaration

| Name     | Type                       | Description                            |
| -------- | -------------------------- | -------------------------------------- |
| `body`   | `TResponse` \| `undefined` | The body of the response if available. |
| `ok`     | `boolean`                  | Indicates that the request succeeded.  |
| `status` | `number`                   | The status code of the response.       |

***

### IdType

```ts
type IdType = string | number;
```

***

### LogLevel

```ts
type LogLevel = typeof LOG_LEVELS[number];
```

***

### RawFeatureRemoteConfig

```ts
type RawFeatureRemoteConfig = {
  key: string;
  missingContextFields: string[];
  payload: any;
  ruleEvaluationResults: boolean[];
  targetingVersion: number;
};
```

A remotely managed configuration value for a feature.

#### Type declaration

| Name                     | Type         | Description                                                         |
| ------------------------ | ------------ | ------------------------------------------------------------------- |
| `key`                    | `string`     | The key of the matched configuration value.                         |
| `missingContextFields`?  | `string`\[]  | The missing fields in the evaluation context (optional).            |
| `payload`                | `any`        | The optional user-supplied payload data.                            |
| `ruleEvaluationResults`? | `boolean`\[] | The rule results of the evaluation (optional).                      |
| `targetingVersion`?      | `number`     | The version of the targeting rules used to select the config value. |

***

### TrackingMeta

```ts
type TrackingMeta = {
  active: boolean;
};
```

Describes the meta context associated with tracking.

#### Type declaration

| Name      | Type      | Description                            |
| --------- | --------- | -------------------------------------- |
| `active`? | `boolean` | Whether the user or company is active. |

***

### TrackOptions

```ts
type TrackOptions = {
  attributes: Attributes;
  meta: TrackingMeta;
};
```

Defines the options for tracking of entities.

#### Type declaration

| Name          | Type                                      | Description                                 |
| ------------- | ----------------------------------------- | ------------------------------------------- |
| `attributes`? | [`Attributes`](globals.md#attributes)     | The attributes associated with the event.   |
| `meta`?       | [`TrackingMeta`](globals.md#trackingmeta) | The meta context associated with the event. |

***

### TypedFeatureKey

```ts
type TypedFeatureKey = keyof TypedFeatures;
```

***

### TypedFeatures

```ts
type TypedFeatures = keyof Features extends never ? Record<string, Feature> : { [FeatureKey in keyof Features]: Features[FeatureKey] extends FeatureType ? Feature<Features[FeatureKey]["config"]> : Feature };
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record\<string, Feature> if the Features interface has not been extended.

## Variables

### LOG\_LEVELS

```ts
const LOG_LEVELS: readonly ["DEBUG", "INFO", "WARN", "ERROR"];
```
