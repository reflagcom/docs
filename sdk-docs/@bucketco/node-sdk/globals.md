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

# @bucketco/node-sdk

## Classes

<a id="boundbucketclient"></a>

### BoundBucketClient

A client bound with a specific user, company, and other context.

#### Constructors

<a id="constructors-1"></a>

##### new BoundBucketClient()

```ts
new BoundBucketClient(client: BucketClient, __namedParameters: ContextWithTracking): BoundBucketClient
```

###### Parameters

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

`client`

</td>
<td>

[`BucketClient`](globals.md#bucketclient)

</td>
</tr>
<tr>
<td>

`__namedParameters`

</td>
<td>

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundBucketClient`](globals.md#boundbucketclient)

#### Accessors

<a id="company-2"></a>

##### company

###### Get Signature

```ts
get company(): 
  | undefined
  | {
[k: string]: any;   id: undefined | string | number;
  name: string;
}
```

Gets the company associated with the client.

###### Returns

  \| `undefined`
  \| \{
`[k: string]`: `any`;   `id`: `undefined` \| `string` \| `number`;
  `name`: `string`;
 \}

The company or `undefined` if it is not set.

***

<a id="othercontext-2"></a>

##### otherContext

###### Get Signature

```ts
get otherContext(): undefined | Record<string, any>
```

Gets the "other" context associated with the client.

###### Returns

`undefined` \| `Record`\<`string`, `any`\>

The "other" context or `undefined` if it is not set.

***

<a id="user-2"></a>

##### user

###### Get Signature

```ts
get user(): 
  | undefined
  | {
[k: string]: any;   email: string;
  id: undefined | string | number;
  name: string;
}
```

Gets the user associated with the client.

###### Returns

  \| `undefined`
  \| \{
`[k: string]`: `any`;   `email`: `string`;
  `id`: `undefined` \| `string` \| `number`;
  `name`: `string`;
 \}

The user or `undefined` if it is not set.

#### Methods

<a id="bindclient-2"></a>

##### bindClient()

```ts
bindClient(__namedParameters: Context & {
  enableTracking: boolean;
 }): BoundBucketClient
```

Create a new client bound with the additional context.
Note: This performs a shallow merge for user/company/other individually.

###### Parameters

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

[`Context`](globals.md#context) & \{ `enableTracking`: `boolean`; \}

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundBucketClient`](globals.md#boundbucketclient)

new client bound with the additional context

***

<a id="flush-2"></a>

##### flush()

```ts
flush(): Promise<void>
```

Flushes the batch buffer.

###### Returns

`Promise`\<`void`\>

***

<a id="getfeature-2"></a>

##### getFeature()

```ts
getFeature(key: string): Feature
```

Get a specific feature for the user/company/other context bound to this client.
Using the `isEnabled` property sends a `check` event to Bucket.

###### Parameters

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

###### Returns

[`Feature`](globals.md#feature)

Features for the given user/company and whether each one is enabled or not

***

<a id="getfeatureremote-2"></a>

##### getFeatureRemote()

```ts
getFeatureRemote(key: string): Promise<Feature>
```

Get remotely evaluated feature for the user/company/other context bound to this client.

###### Parameters

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

###### Returns

`Promise`\<[`Feature`](globals.md#feature)\>

Feature for the given user/company and key and whether it's enabled or not

***

<a id="getfeatures-2"></a>

##### getFeatures()

```ts
getFeatures(): Record<string, Feature>
```

Get features for the user/company/other context bound to this client.
Meant for use in serialization of features for transferring to the client-side/browser.

###### Returns

`Record`\<`string`, [`Feature`](globals.md#feature)\>

Features for the given user/company and whether each one is enabled or not

***

<a id="getfeaturesremote-2"></a>

##### getFeaturesRemote()

```ts
getFeaturesRemote(): Promise<Record<string, Feature>>
```

Get remotely evaluated feature for the user/company/other context bound to this client.

###### Returns

`Promise`\<`Record`\<`string`, [`Feature`](globals.md#feature)\>\>

Features for the given user/company and whether each one is enabled or not

***

<a id="track-2"></a>

##### track()

```ts
track(event: string, opts?: TrackOptions & {
  companyId: string;
}): Promise<void>
```

Track an event in Bucket.

###### Parameters

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

`string`

</td>
<td>

The event to track.

</td>
</tr>
<tr>
<td>

`opts`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `companyId`: `string`; \}

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

###### Throws

An error if the event is invalid or the options are invalid.

***

<a id="bucketclient"></a>

### BucketClient

The SDK client.

#### Constructors

<a id="constructors-3"></a>

##### new BucketClient()

```ts
new BucketClient(options: ClientOptions): BucketClient
```

Creates a new SDK client.
See README for configuration options.

###### Parameters

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

`options`

</td>
<td>

[`ClientOptions`](globals.md#clientoptions)

</td>
<td>

The options for the client or an existing client to clone.

</td>
</tr>
</tbody>
</table>

###### Returns

[`BucketClient`](globals.md#bucketclient)

###### Throws

An error if the options are invalid.

#### Accessors

<a id="featureoverrides-2"></a>

##### featureOverrides

###### Set Signature

```ts
set featureOverrides(overrides: FeatureOverridesFn): void
```

###### Parameters

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

`overrides`

</td>
<td>

[`FeatureOverridesFn`](globals.md#featureoverridesfn)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

***

<a id="logger-2"></a>

##### logger

###### Get Signature

```ts
get logger(): undefined | Logger
```

Gets the logger associated with the client.

###### Returns

`undefined` \| [`Logger`](globals.md#logger-4)

The logger or `undefined` if it is not set.

#### Methods

<a id="bindclient-6"></a>

##### bindClient()

```ts
bindClient(__namedParameters: ContextWithTracking): BoundBucketClient
```

Returns a new BoundBucketClient with the user/company/otherContext
set to be used in subsequent calls.
For example, for evaluating feature targeting or tracking events.

###### Parameters

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BoundBucketClient`](globals.md#boundbucketclient)

A new client bound with the arguments given.

###### Throws

An error if the user/company is given but their ID is not a string.

###### Remarks

The `updateUser` / `updateCompany` methods will automatically be called when
the user/company is set respectively.

***

<a id="flush-6"></a>

##### flush()

```ts
flush(): Promise<void>
```

Flushes the batch buffer.

###### Returns

`Promise`\<`void`\>

###### Remarks

It is recommended to call this method when the application is shutting down to ensure all events are sent
before the process exits.

***

<a id="getfeature-6"></a>

##### getFeature()

```ts
getFeature(__namedParameters: ContextWithTracking, key: string): Feature
```

Gets the evaluated feature for the current context which includes the user, company, and custom context.
Using the `isEnabled` property sends a `check` event to Bucket.

###### Parameters

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
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

###### Returns

[`Feature`](globals.md#feature)

The evaluated features.

###### Remarks

Call `initialize` before calling this method to ensure the feature definitions are cached, no features will be returned otherwise.

***

<a id="getfeatureremote-6"></a>

##### getFeatureRemote()

```ts
getFeatureRemote(
   key: string, 
   userId?: IdType, 
   companyId?: IdType, 
additionalContext?: Context): Promise<Feature>
```

Gets evaluated feature with the usage of remote context.
This method triggers a network request every time it's called.

###### Parameters

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
<tr>
<td>

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`additionalContext`?

</td>
<td>

[`Context`](globals.md#context)

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<[`Feature`](globals.md#feature)\>

evaluated feature

***

<a id="getfeatures-6"></a>

##### getFeatures()

```ts
getFeatures(__namedParameters: ContextWithTracking): Record<string, Feature>
```

Gets the evaluated feature for the current context which includes the user, company, and custom context.

###### Parameters

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

[`ContextWithTracking`](globals.md#contextwithtracking)

</td>
</tr>
</tbody>
</table>

###### Returns

`Record`\<`string`, [`Feature`](globals.md#feature)\>

The evaluated features.

###### Remarks

Call `initialize` before calling this method to ensure the feature definitions are cached, no features will be returned otherwise.

***

<a id="getfeaturesremote-6"></a>

##### getFeaturesRemote()

```ts
getFeaturesRemote(
   userId?: IdType, 
   companyId?: IdType, 
additionalContext?: Context): Promise<Record<string, Feature>>
```

Gets evaluated features with the usage of remote context.
This method triggers a network request every time it's called.

###### Parameters

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

`userId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`companyId`?

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`additionalContext`?

</td>
<td>

[`Context`](globals.md#context)

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`Record`\<`string`, [`Feature`](globals.md#feature)\>\>

evaluated features

***

<a id="initialize-2"></a>

##### initialize()

```ts
initialize(): Promise<void>
```

Initializes the client by caching the features definitions.

###### Returns

`Promise`\<`void`\>

void

###### Remarks

Call this method before calling `getFeatures` to ensure the feature definitions are cached.
The client will ignore subsequent calls to this method.

***

<a id="track-6"></a>

##### track()

```ts
track(
   userId: IdType, 
   event: string, 
   opts?: TrackOptions & {
  companyId: IdType;
}): Promise<void>
```

Tracks an event in Bucket.

###### Parameters

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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
<td>

The userId of the user who performed the event

</td>
</tr>
<tr>
<td>

`event`

</td>
<td>

`string`

</td>
<td>

The event to track.

</td>
</tr>
<tr>
<td>

`opts`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `companyId`: [`IdType`](globals.md#idtype); \}

</td>
<td>

The options.

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

###### Throws

An error if the user is not set or the event is invalid or the options are invalid.

###### Remarks

If the company is set, the event will be associated with the company.

***

<a id="updatecompany-2"></a>

##### updateCompany()

```ts
updateCompany(companyId: IdType, opts?: TrackOptions & {
  userId: IdType;
}): Promise<void>
```

Updates the associated company in Bucket.

###### Parameters

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

`companyId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`opts`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions) & \{ `userId`: [`IdType`](globals.md#idtype); \}

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

###### Throws

An error if the company is not set or the options are invalid.

###### Remarks

The company must be set using `withCompany` before calling this method.
If the user is set, the company will be associated with the user.

***

<a id="updateuser-2"></a>

##### updateUser()

```ts
updateUser(userId: IdType, opts?: TrackOptions): Promise<void>
```

Updates the associated user in Bucket.

###### Parameters

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

`userId`

</td>
<td>

[`IdType`](globals.md#idtype)

</td>
</tr>
<tr>
<td>

`opts`?

</td>
<td>

[`TrackOptions`](globals.md#trackoptions)

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<`void`\>

###### Throws

An error if the company is not set or the options are invalid.

###### Remarks

The company must be set using `withCompany` before calling this method.
If the user is set, the company will be associated with the user.

## Interfaces

<a id="contextwithtracking"></a>

### ContextWithTracking

A context with tracking option.

#### Extends

- [`Context`](globals.md#context)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="company-5"></a> `company?` | \{ `[k: string]`: `any`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; \} | The company context. If no `id` key is set, the whole object is ignored. |
| `company.id` | `undefined` \| `string` \| `number` | - |
| `company.name?` | `string` | - |
| <a id="enabletracking-1"></a> `enableTracking?` | `boolean` | Enable tracking for the context. If set to `false`, tracking will be disabled for the context. Default is `true`. |
| <a id="other-1"></a> `other?` | `Record`\<`string`, `any`\> | The other context. This is used for any additional context that is not related to user or company. |
| <a id="user-5"></a> `user?` | \{ `[k: string]`: `any`; `email`: `string`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; \} | The user context. If no `id` key is set, the whole object is ignored. |
| `user.email?` | `string` | - |
| `user.id` | `undefined` \| `string` \| `number` | - |
| `user.name?` | `string` | - |

***

<a id="feature"></a>

### Feature

Describes a feature

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="isenabled-1"></a> `isEnabled` | `boolean` | If the feature is enabled. |
| <a id="key-9"></a> `key` | `string` | The key of the feature. |

#### Methods

<a id="track-10"></a>

##### track()

```ts
track(): Promise<void>
```

Track feature usage in Bucket.

###### Returns

`Promise`\<`void`\>

***

<a id="features"></a>

### Features

Describes a collection of evaluated features.

#### Remarks

You should extend the Features interface to define the available features.

***

<a id="httpclient"></a>

### HttpClient

Defines the interface for an HTTP client.

#### Remarks

This interface is used to abstract the HTTP client implementation from the SDK.
Define your own implementation of this interface to use a different HTTP client.

#### Methods

<a id="get-1"></a>

##### get()

```ts
get<TResponse>(url: string, headers: Record<string, string>): Promise<HttpClientResponse<TResponse>>
```

Sends a GET request to the specified URL.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
</tr>
</tbody>
</table>

###### Parameters

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

`url`

</td>
<td>

`string`

</td>
<td>

The URL to send the request to.

</td>
</tr>
<tr>
<td>

`headers`

</td>
<td>

`Record`\<`string`, `string`\>

</td>
<td>

The headers to include in the request.

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<[`HttpClientResponse`](globals.md#httpclientresponsetresponse)\<`TResponse`\>\>

The response from the server.

***

<a id="post-1"></a>

##### post()

```ts
post<TBody, TResponse>(
   url: string, 
   headers: Record<string, string>, 
body: TBody): Promise<HttpClientResponse<TResponse>>
```

Sends a POST request to the specified URL.

###### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TBody`

</td>
</tr>
<tr>
<td>

`TResponse`

</td>
</tr>
</tbody>
</table>

###### Parameters

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

`url`

</td>
<td>

`string`

</td>
<td>

The URL to send the request to.

</td>
</tr>
<tr>
<td>

`headers`

</td>
<td>

`Record`\<`string`, `string`\>

</td>
<td>

The headers to include in the request.

</td>
</tr>
<tr>
<td>

`body`

</td>
<td>

`TBody`

</td>
<td>

The body of the request.

</td>
</tr>
</tbody>
</table>

###### Returns

`Promise`\<[`HttpClientResponse`](globals.md#httpclientresponsetresponse)\<`TResponse`\>\>

The response from the server.

***

<a id="logger-4"></a>

### Logger

Logger interface for logging messages

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="debug-1"></a> `debug` | (`message`: `string`, `data`?: `any`) => `void` | Log a debug messages |
| <a id="error-1"></a> `error` | (`message`: `string`, `data`?: `any`) => `void` | Log an error messages |
| <a id="info-1"></a> `info` | (`message`: `string`, `data`?: `any`) => `void` | Log an info messages |
| <a id="warn-1"></a> `warn` | (`message`: `string`, `data`?: `any`) => `void` | Log a warning messages |

***

<a id="rawfeature"></a>

### RawFeature

Describes a feature

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="isenabled-3"></a> `isEnabled` | `boolean` | If the feature is enabled. |
| <a id="key-11"></a> `key` | `string` | The key of the feature. |
| <a id="missingcontextfields-1"></a> `missingContextFields?` | `string`[] | The missing fields in the evaluation context (optional). |
| <a id="targetingversion-1"></a> `targetingVersion?` | `number` | The version of the targeting used to evaluate if the feature is enabled (optional). |

## Type Aliases

<a id="attributes"></a>

### Attributes

```ts
type Attributes = Record<string, any>;
```

Describes the attributes of a user, company or event.

***

<a id="batchbufferoptionst"></a>

### BatchBufferOptions\<T\>

```ts
type BatchBufferOptions<T> = {
  flushHandler: (items: T[]) => Promise<void>;
  intervalMs: number;
  logger: Logger;
  maxSize: number;
};
```

Options for configuring the BatchBuffer.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
<td>

The type of items in the buffer.

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
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="flushhandler-2"></a> `flushHandler`

</td>
<td>

(`items`: `T`[]) => `Promise`\<`void`\>

</td>
<td>

A function that handles flushing the items in the buffer.

</td>
</tr>
<tr>
<td>

<a id="intervalms-2"></a> `intervalMs`?

</td>
<td>

`number`

</td>
<td>

The interval in milliseconds at which the buffer is flushed.

</td>
</tr>
<tr>
<td>

<a id="logger-7"></a> `logger`?

</td>
<td>

[`Logger`](globals.md#logger-4)

</td>
<td>

The logger to use for logging (optional).

</td>
</tr>
<tr>
<td>

<a id="maxsize-2"></a> `maxSize`?

</td>
<td>

`number`

</td>
<td>

The maximum size of the buffer before it is flushed.

</td>
</tr>
</tbody>
</table>

***

<a id="clientoptions"></a>

### ClientOptions

```ts
type ClientOptions = {
  apiBaseUrl: string;
  batchOptions: Omit<BatchBufferOptions<any>, "flushHandler" | "logger">;
  configFile: string;
  fallbackFeatures: keyof TypedFeatures[];
  featureOverrides:   | string
     | (context: Context) => Partial<Record<keyof TypedFeatures, boolean>>;
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

<a id="apibaseurl-2"></a> `apiBaseUrl`?

</td>
<td>

`string`

</td>
<td>

The host to send requests to (optional).

</td>
</tr>
<tr>
<td>

<a id="batchoptions-2"></a> `batchOptions`?

</td>
<td>

`Omit`\<[`BatchBufferOptions`](globals.md#batchbufferoptionst)\<`any`\>, `"flushHandler"` \| `"logger"`\>

</td>
<td>

The options for the batch buffer (optional).
If not provided, the default options are used.

</td>
</tr>
<tr>
<td>

<a id="configfile-2"></a> `configFile`?

</td>
<td>

`string`

</td>
<td>

The path to the config file. If supplied, the config file will be loaded.
Defaults to `bucket.json` when NODE_ENV is not production. Can also be
set through the environment variable BUCKET_CONFIG_FILE.

</td>
</tr>
<tr>
<td>

<a id="fallbackfeatures-2"></a> `fallbackFeatures`?

</td>
<td>

keyof [`TypedFeatures`](globals.md#typedfeatures)[]

</td>
<td>

The features to "enable" as fallbacks when the API is unavailable (optional).

</td>
</tr>
<tr>
<td>

<a id="featureoverrides-6"></a> `featureOverrides`?

</td>
<td>

  \| `string`
  \| (`context`: [`Context`](globals.md#context)) => `Partial`\<`Record`\<keyof [`TypedFeatures`](globals.md#typedfeatures), `boolean`\>\>

</td>
<td>

If a filename is specified, feature targeting results be overridden with
the values from this file. The file should be a JSON object with feature
keys as keys and boolean values as values.

If a function is specified, the function will be called with the context
and should return a record of feature keys and boolean values.

Defaults to "bucketFeatures.json".

</td>
</tr>
<tr>
<td>

<a id="host-2"></a> `host`?

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

<a id="httpclient-3"></a> `httpClient`?

</td>
<td>

[`HttpClient`](globals.md#httpclient)

</td>
<td>

The HTTP client to use for sending requests (optional). Default is the built-in fetch client.

</td>
</tr>
<tr>
<td>

<a id="logger-10"></a> `logger`?

</td>
<td>

[`Logger`](globals.md#logger-4)

</td>
<td>

The logger to use for logging (optional). Default is info level logging to console.

</td>
</tr>
<tr>
<td>

<a id="loglevel-2"></a> `logLevel`?

</td>
<td>

[`LogLevel`](globals.md#loglevel-3)

</td>
<td>

Use the console logger, but set a log level. Ineffective if a custom logger is provided.

</td>
</tr>
<tr>
<td>

<a id="offline-2"></a> `offline`?

</td>
<td>

`boolean`

</td>
<td>

In offline mode, no data is sent or fetched from the the Bucket API.
This is useful for testing or development.

</td>
</tr>
<tr>
<td>

<a id="secretkey-2"></a> `secretKey`?

</td>
<td>

`string`

</td>
<td>

The secret key used to authenticate with the Bucket API.

</td>
</tr>
</tbody>
</table>

***

<a id="context"></a>

### Context

```ts
type Context = {
  company: {
   [k: string]: any;   id: string | number | undefined;
     name: string;
    };
  other: Record<string, any>;
  user: {
   [k: string]: any;   email: string;
     id: string | number | undefined;
     name: string;
    };
};
```

Describes the current user context, company context, and other context.
This is used to determine if feature targeting matches and to track events.

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

<a id="company-8"></a> `company`?

</td>
<td>

\{
`[k: string]`: `any`;   `id`: `string` \| `number` \| `undefined`;
  `name`: `string`;
 \}

</td>
<td>

The company context. If no `id` key is set, the whole object is ignored.

</td>
</tr>
<tr>
<td>

`company.id`

</td>
<td>

`string` \| `number` \| `undefined`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`company.name`?

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

<a id="other-4"></a> `other`?

</td>
<td>

`Record`\<`string`, `any`\>

</td>
<td>

The other context. This is used for any additional context that is not related to user or company.

</td>
</tr>
<tr>
<td>

<a id="user-8"></a> `user`?

</td>
<td>

\{
`[k: string]`: `any`;   `email`: `string`;
  `id`: `string` \| `number` \| `undefined`;
  `name`: `string`;
 \}

</td>
<td>

The user context. If no `id` key is set, the whole object is ignored.

</td>
</tr>
<tr>
<td>

`user.email`?

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

`user.id`

</td>
<td>

`string` \| `number` \| `undefined`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

`user.name`?

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

<a id="featureoverrides-7"></a>

### FeatureOverrides

```ts
type FeatureOverrides = Partial<Record<keyof TypedFeatures, boolean>>;
```

Describes the feature overrides.

***

<a id="featureoverridesfn"></a>

### FeatureOverridesFn()

```ts
type FeatureOverridesFn = (context: Context) => FeatureOverrides;
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

`context`

</td>
<td>

[`Context`](globals.md#context)

</td>
</tr>
</tbody>
</table>

#### Returns

[`FeatureOverrides`](globals.md#featureoverrides-7)

***

<a id="httpclientresponsetresponse"></a>

### HttpClientResponse\<TResponse\>

```ts
type HttpClientResponse<TResponse> = {
  body: TResponse | undefined;
  ok: boolean;
  status: number;
};
```

Describes the response of a HTTP client.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`TResponse`

</td>
<td>

The type of the response body.

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
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="body-4"></a> `body`

</td>
<td>

`TResponse` \| `undefined`

</td>
<td>

The body of the response if available.

</td>
</tr>
<tr>
<td>

<a id="ok-2"></a> `ok`

</td>
<td>

`boolean`

</td>
<td>

Indicates that the request succeeded.

</td>
</tr>
<tr>
<td>

<a id="status-2"></a> `status`

</td>
<td>

`number`

</td>
<td>

The status code of the response.

</td>
</tr>
</tbody>
</table>

***

<a id="idtype"></a>

### IdType

```ts
type IdType = string | number;
```

***

<a id="loglevel-3"></a>

### LogLevel

```ts
type LogLevel = typeof LOG_LEVELS[number];
```

***

<a id="trackingmeta"></a>

### TrackingMeta

```ts
type TrackingMeta = {
  active: boolean;
};
```

Describes the meta context associated with tracking.

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

<a id="active-2"></a> `active`?

</td>
<td>

`boolean`

</td>
<td>

Whether the user or company is active.

</td>
</tr>
</tbody>
</table>

***

<a id="trackoptions"></a>

### TrackOptions

```ts
type TrackOptions = {
  attributes: Attributes;
  meta: TrackingMeta;
};
```

Defines the options for tracking of entities.

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

<a id="attributes-3"></a> `attributes`?

</td>
<td>

[`Attributes`](globals.md#attributes)

</td>
<td>

The attributes associated with the event.

</td>
</tr>
<tr>
<td>

<a id="meta-2"></a> `meta`?

</td>
<td>

[`TrackingMeta`](globals.md#trackingmeta)

</td>
<td>

The meta context associated with the event.

</td>
</tr>
</tbody>
</table>

***

<a id="typedfeatures"></a>

### TypedFeatures

```ts
type TypedFeatures = keyof Features extends never ? Record<string, Feature> : Record<keyof Features, Feature>;
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record<string, Feature> if the Features interface
has not been extended.

## Variables

<a id="log_levels"></a>

### LOG\_LEVELS

```ts
const LOG_LEVELS: readonly ["DEBUG", "INFO", "WARN", "ERROR"];
```
