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

### BoundBucketClient

A client bound with a specific user, company, and other context.

#### Constructors

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

###### Defined in

[client.ts:990](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L990)

#### Accessors

##### company

###### Get Signature

```ts
get company(): undefined | {
[k: string]: any;   id: undefined | string | number;
  name: string;
}
```

Gets the company associated with the client.

###### Returns

`undefined` \| \{
`[k: string]`: `any`;   `id`: `undefined` \| `string` \| `number`;
  `name`: `string`;
 \}

The company or `undefined` if it is not set.

###### Defined in

[client.ts:1025](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1025)

***

##### otherContext

###### Get Signature

```ts
get otherContext(): undefined | Record<string, any>
```

Gets the "other" context associated with the client.

###### Returns

`undefined` \| `Record`\<`string`, `any`\>

The "other" context or `undefined` if it is not set.

###### Defined in

[client.ts:1007](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1007)

***

##### user

###### Get Signature

```ts
get user(): undefined | {
[k: string]: any;   email: string;
  id: undefined | string | number;
  name: string;
}
```

Gets the user associated with the client.

###### Returns

`undefined` \| \{
`[k: string]`: `any`;   `email`: `string`;
  `id`: `undefined` \| `string` \| `number`;
  `name`: `string`;
 \}

The user or `undefined` if it is not set.

###### Defined in

[client.ts:1016](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1016)

#### Methods

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

###### Defined in

[client.ts:1121](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1121)

***

##### flush()

```ts
flush(): Promise<void>
```

Flushes the batch buffer.

###### Returns

`Promise`\<`void`\>

###### Defined in

[client.ts:1142](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1142)

***

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

###### Defined in

[client.ts:1045](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1045)

***

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

###### Defined in

[client.ts:1065](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1065)

***

##### getFeatures()

```ts
getFeatures(): Record<string, Feature>
```

Get features for the user/company/other context bound to this client.
Meant for use in serialization of features for transferring to the client-side/browser.

###### Returns

`Record`\<`string`, [`Feature`](globals.md#feature)\>

Features for the given user/company and whether each one is enabled or not

###### Defined in

[client.ts:1035](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1035)

***

##### getFeaturesRemote()

```ts
getFeaturesRemote(): Promise<Record<string, Feature>>
```

Get remotely evaluated feature for the user/company/other context bound to this client.

###### Returns

`Promise`\<`Record`\<`string`, [`Feature`](globals.md#feature)\>\>

Features for the given user/company and whether each one is enabled or not

###### Defined in

[client.ts:1054](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1054)

***

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

###### Defined in

[client.ts:1086](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L1086)

***

### BucketClient

The SDK client.

#### Constructors

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

###### Defined in

[client.ts:119](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L119)

#### Accessors

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

###### Defined in

[client.ts:234](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L234)

***

##### logger

###### Get Signature

```ts
get logger(): undefined | Logger
```

Gets the logger associated with the client.

###### Returns

`undefined` \| [`Logger`](globals.md#logger-4)

The logger or `undefined` if it is not set.

###### Defined in

[client.ts:230](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L230)

#### Methods

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

###### Defined in

[client.ts:249](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L249)

***

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

###### Defined in

[client.ts:408](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L408)

***

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

###### Defined in

[client.ts:442](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L442)

***

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

###### Defined in

[client.ts:489](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L489)

***

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

###### Defined in

[client.ts:419](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L419)

***

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

###### Defined in

[client.ts:466](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L466)

***

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

###### Defined in

[client.ts:396](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L396)

***

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

###### Defined in

[client.ts:353](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L353)

***

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

###### Defined in

[client.ts:304](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L304)

***

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

###### Defined in

[client.ts:267](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/client.ts#L267)

## Interfaces

### ContextWithTracking

A context with tracking option.

#### Extends

- [`Context`](globals.md#context)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `company?` | \{ `[k: string]`: `any`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; \} | The company context. If no `id` key is set, the whole object is ignored. |
| `company.id` | `undefined` \| `string` \| `number` | - |
| `company.name?` | `string` | - |
| `enableTracking?` | `boolean` | Enable tracking for the context. If set to `false`, tracking will be disabled for the context. Default is `true`. |
| `other?` | `Record`\<`string`, `any`\> | The other context. This is used for any additional context that is not related to user or company. |
| `user?` | \{ `[k: string]`: `any`; `email`: `string`; `id`: `undefined` \| `string` \| `number`; `name`: `string`; \} | The user context. If no `id` key is set, the whole object is ignored. |
| `user.email?` | `string` | - |
| `user.id` | `undefined` \| `string` \| `number` | - |
| `user.name?` | `string` | - |

***

### Feature

Describes a feature

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isEnabled` | `boolean` | If the feature is enabled. |
| `key` | `string` | The key of the feature. |

#### Methods

##### track()

```ts
track(): Promise<void>
```

Track feature usage in Bucket.

###### Returns

`Promise`\<`void`\>

###### Defined in

[types.ts:100](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L100)

***

### Features

Describes a collection of evaluated features.

#### Remarks

You should extend the Features interface to define the available features.

***

### HttpClient

Defines the interface for an HTTP client.

#### Remarks

This interface is used to abstract the HTTP client implementation from the SDK.
Define your own implementation of this interface to use a different HTTP client.

#### Methods

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

###### Defined in

[types.ts:210](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L210)

***

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

###### Defined in

[types.ts:197](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L197)

***

### Logger

Logger interface for logging messages

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `debug` | (`message`: `string`, `data`?: `any`) => `void` | Log a debug messages |
| `error` | (`message`: `string`, `data`?: `any`) => `void` | Log an error messages |
| `info` | (`message`: `string`, `data`?: `any`) => `void` | Log an info messages |
| `warn` | (`message`: `string`, `data`?: `any`) => `void` | Log a warning messages |

***

### RawFeature

Describes a feature

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `isEnabled` | `boolean` | If the feature is enabled. |
| `key` | `string` | The key of the feature. |
| `missingContextFields?` | `string`[] | The missing fields in the evaluation context (optional). |
| `targetingVersion?` | `number` | The version of the targeting used to evaluate if the feature is enabled (optional). |

## Type Aliases

### Attributes

```ts
type Attributes: Record<string, any>;
```

Describes the attributes of a user, company or event.

#### Defined in

[types.ts:16](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L16)

***

### BatchBufferOptions\<T\>

```ts
type BatchBufferOptions<T>: {
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

`flushHandler`

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

`intervalMs`?

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

`logger`?

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

`maxSize`?

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

#### Defined in

[types.ts:278](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L278)

***

### ClientOptions

```ts
type ClientOptions: {
  apiBaseUrl: string;
  batchOptions: Omit<BatchBufferOptions<any>, "flushHandler" | "logger">;
  configFile: string;
  fallbackFeatures: keyof TypedFeatures[];
  featureOverrides: string | (context: Context) => Partial<Record<keyof TypedFeatures, boolean>>;
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

`apiBaseUrl`?

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

`batchOptions`?

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

`configFile`?

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

`fallbackFeatures`?

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

`featureOverrides`?

</td>
<td>

`string` \| (`context`: [`Context`](globals.md#context)) => `Partial`\<`Record`\<keyof [`TypedFeatures`](globals.md#typedfeatures), `boolean`\>\>

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

`httpClient`?

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

`logger`?

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

`logLevel`?

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

`offline`?

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

`secretKey`?

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

#### Defined in

[types.ts:304](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L304)

***

### Context

```ts
type Context: {
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

`company`?

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

`other`?

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

`user`?

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

#### Defined in

[types.ts:395](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L395)

***

### FeatureOverrides

```ts
type FeatureOverrides: Partial<Record<keyof TypedFeatures, boolean>>;
```

Describes the feature overrides.

#### Defined in

[types.ts:126](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L126)

***

### FeatureOverridesFn()

```ts
type FeatureOverridesFn: (context: Context) => FeatureOverrides;
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

#### Defined in

[types.ts:127](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L127)

***

### HttpClientResponse\<TResponse\>

```ts
type HttpClientResponse<TResponse>: {
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

`body`

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

`ok`

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

`status`

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

#### Defined in

[types.ts:164](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L164)

***

### IdType

```ts
type IdType: string | number;
```

#### Defined in

[types.ts:433](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L433)

***

### LogLevel

```ts
type LogLevel: typeof LOG_LEVELS[number];
```

#### Defined in

[types.ts:431](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L431)

***

### TrackingMeta

```ts
type TrackingMeta: {
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

`active`?

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

#### Defined in

[types.ts:6](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L6)

***

### TrackOptions

```ts
type TrackOptions: {
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

`attributes`?

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

`meta`?

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

#### Defined in

[types.ts:379](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L379)

***

### TypedFeatures

```ts
type TypedFeatures: keyof Features extends never ? Record<string, Feature> : Record<keyof Features, Feature>;
```

Describes a collection of evaluated feature.

#### Remarks

This types falls back to a generic Record<string, Feature> if the Features interface
has not been extended.

#### Defined in

[types.ts:119](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L119)

## Variables

### LOG\_LEVELS

```ts
const LOG_LEVELS: readonly ["DEBUG", "INFO", "WARN", "ERROR"];
```

#### Defined in

[types.ts:430](https://github.com/bucketco/bucket-javascript-sdk/blob/f43d9157bcc39321c511c8de821640b109901748/packages/node-sdk/src/types.ts#L430)
