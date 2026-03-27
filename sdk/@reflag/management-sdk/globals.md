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

# @reflag/management-sdk

## Classes

### Api

DefaultApi - interface

 DefaultApiInterface

#### Extends

- [`DefaultApi`](globals.md#defaultapi)

#### Constructors

##### new Api()

```ts
new Api(config?: ConfigurationParameters): Api
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

`config`?

</td>
<td>

[`ConfigurationParameters`](globals.md#configurationparameters)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Api`](globals.md#api)

###### Overrides

[`DefaultApi`](globals.md#defaultapi).[`constructor`](globals.md#constructors-4)

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="configuration"></a> `configuration`

</td>
<td>

`protected`

</td>
<td>

[`Configuration`](globals.md#configuration-2)

</td>
<td>

`DefaultConfig`

</td>
</tr>
</tbody>
</table>

#### Methods

##### createFlag()

```ts
createFlag(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<CreateFlag200Response>
```

Create a new flag in the application. Returns the created flag details.
Create a flag

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

`requestParameters`

</td>
<td>

[`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CreateFlag200Response`](globals.md#createflag200response)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`createFlag`](globals.md#createflag-1)

##### createFlagRaw()

```ts
createFlagRaw(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<CreateFlag200Response>>
```

Create a new flag in the application. Returns the created flag details.
Create a flag

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

`requestParameters`

</td>
<td>

[`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`CreateFlag200Response`](globals.md#createflag200response)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`createFlagRaw`](globals.md#createflagraw-1)

##### getApp()

```ts
getApp(requestParameters: GetAppRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<App>
```

Retrieve a specific application by its identifier
Get details of an application

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

`requestParameters`

</td>
<td>

[`GetAppRequest`](globals.md#getapprequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`App`](globals.md#app)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getApp`](globals.md#getapp-1)

##### getAppRaw()

```ts
getAppRaw(requestParameters: GetAppRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<App>>
```

Retrieve a specific application by its identifier
Get details of an application

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

`requestParameters`

</td>
<td>

[`GetAppRequest`](globals.md#getapprequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`App`](globals.md#app)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getAppRaw`](globals.md#getappraw-1)

##### getCompanyFlags()

```ts
getCompanyFlags(requestParameters: GetCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Retrieve all flags with their targeting status for a specific company
Get flags for a company

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

`requestParameters`

</td>
<td>

[`GetCompanyFlagsRequest`](globals.md#getcompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getCompanyFlags`](globals.md#getcompanyflags-1)

##### getCompanyFlagsRaw()

```ts
getCompanyFlagsRaw(requestParameters: GetCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Retrieve all flags with their targeting status for a specific company
Get flags for a company

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

`requestParameters`

</td>
<td>

[`GetCompanyFlagsRequest`](globals.md#getcompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getCompanyFlagsRaw`](globals.md#getcompanyflagsraw-1)

##### getEnvironment()

```ts
getEnvironment(requestParameters: GetEnvironmentRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<Environment>
```

Retrieve details for a specific environment
Get environment details

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

`requestParameters`

</td>
<td>

[`GetEnvironmentRequest`](globals.md#getenvironmentrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Environment`](globals.md#environment)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getEnvironment`](globals.md#getenvironment-1)

##### getEnvironmentRaw()

```ts
getEnvironmentRaw(requestParameters: GetEnvironmentRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<Environment>>
```

Retrieve details for a specific environment
Get environment details

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

`requestParameters`

</td>
<td>

[`GetEnvironmentRequest`](globals.md#getenvironmentrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`Environment`](globals.md#environment)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getEnvironmentRaw`](globals.md#getenvironmentraw-1)

##### getFlagTargeting()

```ts
getFlagTargeting(requestParameters: GetFlagTargetingRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<FlagTargeting>
```

Retrieve targeting for a flag in an environment
Get flag targeting for an environment

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

`requestParameters`

</td>
<td>

[`GetFlagTargetingRequest`](globals.md#getflagtargetingrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagTargeting`](globals.md#flagtargeting)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getFlagTargeting`](globals.md#getflagtargeting-1)

##### getFlagTargetingRaw()

```ts
getFlagTargetingRaw(requestParameters: GetFlagTargetingRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<FlagTargeting>>
```

Retrieve targeting for a flag in an environment
Get flag targeting for an environment

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

`requestParameters`

</td>
<td>

[`GetFlagTargetingRequest`](globals.md#getflagtargetingrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`FlagTargeting`](globals.md#flagtargeting)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getFlagTargetingRaw`](globals.md#getflagtargetingraw-1)

##### getUserFlags()

```ts
getUserFlags(requestParameters: GetUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Retrieve all flags with their targeting status for a specific user
Get flags for a user

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

`requestParameters`

</td>
<td>

[`GetUserFlagsRequest`](globals.md#getuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getUserFlags`](globals.md#getuserflags-1)

##### getUserFlagsRaw()

```ts
getUserFlagsRaw(requestParameters: GetUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Retrieve all flags with their targeting status for a specific user
Get flags for a user

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

`requestParameters`

</td>
<td>

[`GetUserFlagsRequest`](globals.md#getuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`getUserFlagsRaw`](globals.md#getuserflagsraw-1)

##### isJsonMime()

```ts
protected isJsonMime(mime: undefined | null | string): boolean
```

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

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

`mime`

</td>
<td>

`undefined` \| `null` \| `string`

</td>
<td>

MIME (Multipurpose Internet Mail Extensions)

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`isJsonMime`](globals.md#isjsonmime-2)

##### listApps()

```ts
listApps(requestParameters: ListAppsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<AppHeaderCollection>
```

Retrieve all accessible applications
List of applications

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

`requestParameters`

</td>
<td>

[`ListAppsRequest`](globals.md#listappsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppHeaderCollection`](globals.md#appheadercollection)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`listApps`](globals.md#listapps-1)

##### listAppsRaw()

```ts
listAppsRaw(requestParameters: ListAppsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<AppHeaderCollection>>
```

Retrieve all accessible applications
List of applications

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

`requestParameters`

</td>
<td>

[`ListAppsRequest`](globals.md#listappsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`AppHeaderCollection`](globals.md#appheadercollection)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`listAppsRaw`](globals.md#listappsraw-1)

##### listEnvironments()

```ts
listEnvironments(requestParameters: ListEnvironmentsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EnvironmentHeaderCollection>
```

Retrieve all environments for a specific application
List environments for application

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

`requestParameters`

</td>
<td>

[`ListEnvironmentsRequest`](globals.md#listenvironmentsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`listEnvironments`](globals.md#listenvironments-1)

##### listEnvironmentsRaw()

```ts
listEnvironmentsRaw(requestParameters: ListEnvironmentsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EnvironmentHeaderCollection>>
```

Retrieve all environments for a specific application
List environments for application

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

`requestParameters`

</td>
<td>

[`ListEnvironmentsRequest`](globals.md#listenvironmentsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`listEnvironmentsRaw`](globals.md#listenvironmentsraw-1)

##### listFlags()

```ts
listFlags(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<FlagHeaderCollection>
```

Retrieve all flags for a specific application
List flags for application

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

`requestParameters`

</td>
<td>

[`ListFlagsRequest`](globals.md#listflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagHeaderCollection`](globals.md#flagheadercollection)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`listFlags`](globals.md#listflags-1)

##### listFlagsRaw()

```ts
listFlagsRaw(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<FlagHeaderCollection>>
```

Retrieve all flags for a specific application
List flags for application

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

`requestParameters`

</td>
<td>

[`ListFlagsRequest`](globals.md#listflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`FlagHeaderCollection`](globals.md#flagheadercollection)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`listFlagsRaw`](globals.md#listflagsraw-1)

##### request()

```ts
protected request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response>
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

`context`

</td>
<td>

[`RequestOpts`](globals.md#requestopts)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

###### Overrides

[`DefaultApi`](globals.md#defaultapi).[`request`](globals.md#request-2)

##### updateCompanyFlags()

```ts
updateCompanyFlags(requestParameters: UpdateCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Update specific targeting for flags for a company in an environment
Update flag targeting for a company

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

`requestParameters`

</td>
<td>

[`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`updateCompanyFlags`](globals.md#updatecompanyflags-1)

##### updateCompanyFlagsRaw()

```ts
updateCompanyFlagsRaw(requestParameters: UpdateCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Update specific targeting for flags for a company in an environment
Update flag targeting for a company

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

`requestParameters`

</td>
<td>

[`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`updateCompanyFlagsRaw`](globals.md#updatecompanyflagsraw-1)

##### updateFlag()

```ts
updateFlag(requestParameters: UpdateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<CreateFlag200Response>
```

Update an existing flag
Update a flag

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

`requestParameters`

</td>
<td>

[`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CreateFlag200Response`](globals.md#createflag200response)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`updateFlag`](globals.md#updateflag-1)

##### updateFlagRaw()

```ts
updateFlagRaw(requestParameters: UpdateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<CreateFlag200Response>>
```

Update an existing flag
Update a flag

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

`requestParameters`

</td>
<td>

[`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`CreateFlag200Response`](globals.md#createflag200response)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`updateFlagRaw`](globals.md#updateflagraw-1)

##### updateUserFlags()

```ts
updateUserFlags(requestParameters: UpdateUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Update specific targeting for flags for a user in an environment
Update flag targeting for a user

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

`requestParameters`

</td>
<td>

[`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`updateUserFlags`](globals.md#updateuserflags-1)

##### updateUserFlagsRaw()

```ts
updateUserFlagsRaw(requestParameters: UpdateUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Update specific targeting for flags for a user in an environment
Update flag targeting for a user

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

`requestParameters`

</td>
<td>

[`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`updateUserFlagsRaw`](globals.md#updateuserflagsraw-1)

##### withMiddleware()

```ts
withMiddleware<T>(this: T, ...middlewares: Middleware[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`middlewares`

</td>
<td>

[`Middleware`](globals.md#middleware-2)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`withMiddleware`](globals.md#withmiddleware-2)

##### withPostMiddleware()

```ts
withPostMiddleware<T>(this: T, ...postMiddlewares: (
  | undefined
  | (context: ResponseContext) => Promise<
  | void
  | Response>)[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`postMiddlewares`

</td>
<td>

( \| `undefined` \| (`context`: [`ResponseContext`](globals.md#responsecontext)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< \| `void` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`withPostMiddleware`](globals.md#withpostmiddleware-2)

##### withPreMiddleware()

```ts
withPreMiddleware<T>(this: T, ...preMiddlewares: (
  | undefined
  | (context: RequestContext) => Promise<void | FetchParams>)[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`preMiddlewares`

</td>
<td>

( \| `undefined` \| (`context`: [`RequestContext`](globals.md#requestcontext)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| [`FetchParams`](globals.md#fetchparams)\>)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

###### Inherited from

[`DefaultApi`](globals.md#defaultapi).[`withPreMiddleware`](globals.md#withpremiddleware-2)

***

### BaseAPI

This is the base class for all generated API classes.

#### Extended by

- [`DefaultApi`](globals.md#defaultapi)

#### Constructors

##### new BaseAPI()

```ts
new BaseAPI(configuration: Configuration): BaseAPI
```

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`configuration`

</td>
<td>

[`Configuration`](globals.md#configuration-2)

</td>
<td>

`DefaultConfig`

</td>
</tr>
</tbody>
</table>

###### Returns

[`BaseAPI`](globals.md#baseapi)

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="configuration-1"></a> `configuration`

</td>
<td>

`protected`

</td>
<td>

[`Configuration`](globals.md#configuration-2)

</td>
<td>

`DefaultConfig`

</td>
</tr>
</tbody>
</table>

#### Methods

##### isJsonMime()

```ts
protected isJsonMime(mime: undefined | null | string): boolean
```

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

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

`mime`

</td>
<td>

`undefined` \| `null` \| `string`

</td>
<td>

MIME (Multipurpose Internet Mail Extensions)

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

##### request()

```ts
protected request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response>
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

`context`

</td>
<td>

[`RequestOpts`](globals.md#requestopts)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

##### withMiddleware()

```ts
withMiddleware<T>(this: T, ...middlewares: Middleware[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`middlewares`

</td>
<td>

[`Middleware`](globals.md#middleware-2)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

##### withPostMiddleware()

```ts
withPostMiddleware<T>(this: T, ...postMiddlewares: (
  | undefined
  | (context: ResponseContext) => Promise<
  | void
  | Response>)[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`postMiddlewares`

</td>
<td>

( \| `undefined` \| (`context`: [`ResponseContext`](globals.md#responsecontext)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< \| `void` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

##### withPreMiddleware()

```ts
withPreMiddleware<T>(this: T, ...preMiddlewares: (
  | undefined
  | (context: RequestContext) => Promise<void | FetchParams>)[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`preMiddlewares`

</td>
<td>

( \| `undefined` \| (`context`: [`RequestContext`](globals.md#requestcontext)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| [`FetchParams`](globals.md#fetchparams)\>)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

***

### BlobApiResponse

#### Constructors

##### new BlobApiResponse()

```ts
new BlobApiResponse(raw: Response): BlobApiResponse
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

`raw`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

###### Returns

[`BlobApiResponse`](globals.md#blobapiresponse)

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="raw"></a> `raw`

</td>
<td>

`public`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

#### Methods

##### value()

```ts
value(): Promise<Blob>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Blob`](https://developer.mozilla.org/docs/Web/API/Blob)\>

***

### Configuration

#### Constructors

##### new Configuration()

```ts
new Configuration(configuration: ConfigurationParameters): Configuration
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

`configuration`

</td>
<td>

[`ConfigurationParameters`](globals.md#configurationparameters)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Configuration`](globals.md#configuration-2)

#### Accessors

##### accessToken

###### Get Signature

```ts
get accessToken(): 
  | undefined
  | (name?: string, scopes?: string[]) => 
  | string
| Promise<string>
```

###### Returns

  \| `undefined`
  \| (`name`?: `string`, `scopes`?: `string`[]) => 
  \| `string`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

##### apiKey

###### Get Signature

```ts
get apiKey(): 
  | undefined
  | (name: string) => 
  | string
| Promise<string>
```

###### Returns

  \| `undefined`
  \| (`name`: `string`) => 
  \| `string`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

##### basePath

###### Get Signature

```ts
get basePath(): string
```

###### Returns

`string`

##### config

###### Set Signature

```ts
set config(configuration: Configuration): void
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

`configuration`

</td>
<td>

[`Configuration`](globals.md#configuration-2)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

##### credentials

###### Get Signature

```ts
get credentials(): undefined | RequestCredentials
```

###### Returns

`undefined` \| `RequestCredentials`

##### fetchApi

###### Get Signature

```ts
get fetchApi(): 
  | undefined
| (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```

###### Returns

  \| `undefined`
  \| (`input`: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL), `init`?: `RequestInit`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

##### headers

###### Get Signature

```ts
get headers(): undefined | HTTPHeaders
```

###### Returns

`undefined` \| [`HTTPHeaders`](globals.md#httpheaders)

##### middleware

###### Get Signature

```ts
get middleware(): Middleware[]
```

###### Returns

[`Middleware`](globals.md#middleware-2)[]

##### password

###### Get Signature

```ts
get password(): undefined | string
```

###### Returns

`undefined` \| `string`

##### queryParamsStringify

###### Get Signature

```ts
get queryParamsStringify(): (params: HTTPQuery) => string
```

###### Returns

`Function`

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

`params`

</td>
<td>

[`HTTPQuery`](globals.md#httpquery)

</td>
</tr>
</tbody>
</table>

###### Returns

`string`

##### username

###### Get Signature

```ts
get username(): undefined | string
```

###### Returns

`undefined` \| `string`

***

### DefaultApi

DefaultApi - interface

 DefaultApiInterface

#### Extends

- [`BaseAPI`](globals.md#baseapi)

#### Extended by

- [`Api`](globals.md#api)

#### Implements

- [`DefaultApiInterface`](globals.md#defaultapiinterface)

#### Constructors

##### new DefaultApi()

```ts
new DefaultApi(configuration: Configuration): DefaultApi
```

###### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`configuration`

</td>
<td>

[`Configuration`](globals.md#configuration-2)

</td>
<td>

`DefaultConfig`

</td>
</tr>
</tbody>
</table>

###### Returns

[`DefaultApi`](globals.md#defaultapi)

###### Inherited from

[`BaseAPI`](globals.md#baseapi).[`constructor`](globals.md#constructors-1)

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="configuration-3"></a> `configuration`

</td>
<td>

`protected`

</td>
<td>

[`Configuration`](globals.md#configuration-2)

</td>
<td>

`DefaultConfig`

</td>
</tr>
</tbody>
</table>

#### Methods

##### createFlag()

```ts
createFlag(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<CreateFlag200Response>
```

Create a new flag in the application. Returns the created flag details.
Create a flag

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

`requestParameters`

</td>
<td>

[`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CreateFlag200Response`](globals.md#createflag200response)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`createFlag`](globals.md#createflag-2)

##### createFlagRaw()

```ts
createFlagRaw(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<CreateFlag200Response>>
```

Create a new flag in the application. Returns the created flag details.
Create a flag

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

`requestParameters`

</td>
<td>

[`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`CreateFlag200Response`](globals.md#createflag200response)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`createFlagRaw`](globals.md#createflagraw-2)

##### getApp()

```ts
getApp(requestParameters: GetAppRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<App>
```

Retrieve a specific application by its identifier
Get details of an application

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

`requestParameters`

</td>
<td>

[`GetAppRequest`](globals.md#getapprequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`App`](globals.md#app)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getApp`](globals.md#getapp-2)

##### getAppRaw()

```ts
getAppRaw(requestParameters: GetAppRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<App>>
```

Retrieve a specific application by its identifier
Get details of an application

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

`requestParameters`

</td>
<td>

[`GetAppRequest`](globals.md#getapprequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`App`](globals.md#app)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getAppRaw`](globals.md#getappraw-2)

##### getCompanyFlags()

```ts
getCompanyFlags(requestParameters: GetCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Retrieve all flags with their targeting status for a specific company
Get flags for a company

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

`requestParameters`

</td>
<td>

[`GetCompanyFlagsRequest`](globals.md#getcompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getCompanyFlags`](globals.md#getcompanyflags-2)

##### getCompanyFlagsRaw()

```ts
getCompanyFlagsRaw(requestParameters: GetCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Retrieve all flags with their targeting status for a specific company
Get flags for a company

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

`requestParameters`

</td>
<td>

[`GetCompanyFlagsRequest`](globals.md#getcompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getCompanyFlagsRaw`](globals.md#getcompanyflagsraw-2)

##### getEnvironment()

```ts
getEnvironment(requestParameters: GetEnvironmentRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<Environment>
```

Retrieve details for a specific environment
Get environment details

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

`requestParameters`

</td>
<td>

[`GetEnvironmentRequest`](globals.md#getenvironmentrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Environment`](globals.md#environment)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getEnvironment`](globals.md#getenvironment-2)

##### getEnvironmentRaw()

```ts
getEnvironmentRaw(requestParameters: GetEnvironmentRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<Environment>>
```

Retrieve details for a specific environment
Get environment details

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

`requestParameters`

</td>
<td>

[`GetEnvironmentRequest`](globals.md#getenvironmentrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`Environment`](globals.md#environment)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getEnvironmentRaw`](globals.md#getenvironmentraw-2)

##### getFlagTargeting()

```ts
getFlagTargeting(requestParameters: GetFlagTargetingRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<FlagTargeting>
```

Retrieve targeting for a flag in an environment
Get flag targeting for an environment

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

`requestParameters`

</td>
<td>

[`GetFlagTargetingRequest`](globals.md#getflagtargetingrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagTargeting`](globals.md#flagtargeting)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getFlagTargeting`](globals.md#getflagtargeting-2)

##### getFlagTargetingRaw()

```ts
getFlagTargetingRaw(requestParameters: GetFlagTargetingRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<FlagTargeting>>
```

Retrieve targeting for a flag in an environment
Get flag targeting for an environment

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

`requestParameters`

</td>
<td>

[`GetFlagTargetingRequest`](globals.md#getflagtargetingrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`FlagTargeting`](globals.md#flagtargeting)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getFlagTargetingRaw`](globals.md#getflagtargetingraw-2)

##### getUserFlags()

```ts
getUserFlags(requestParameters: GetUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Retrieve all flags with their targeting status for a specific user
Get flags for a user

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

`requestParameters`

</td>
<td>

[`GetUserFlagsRequest`](globals.md#getuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getUserFlags`](globals.md#getuserflags-2)

##### getUserFlagsRaw()

```ts
getUserFlagsRaw(requestParameters: GetUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Retrieve all flags with their targeting status for a specific user
Get flags for a user

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

`requestParameters`

</td>
<td>

[`GetUserFlagsRequest`](globals.md#getuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`getUserFlagsRaw`](globals.md#getuserflagsraw-2)

##### isJsonMime()

```ts
protected isJsonMime(mime: undefined | null | string): boolean
```

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

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

`mime`

</td>
<td>

`undefined` \| `null` \| `string`

</td>
<td>

MIME (Multipurpose Internet Mail Extensions)

</td>
</tr>
</tbody>
</table>

###### Returns

`boolean`

True if the given MIME is JSON, false otherwise.

###### Inherited from

[`BaseAPI`](globals.md#baseapi).[`isJsonMime`](globals.md#isjsonmime-1)

##### listApps()

```ts
listApps(requestParameters: ListAppsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<AppHeaderCollection>
```

Retrieve all accessible applications
List of applications

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

`requestParameters`

</td>
<td>

[`ListAppsRequest`](globals.md#listappsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppHeaderCollection`](globals.md#appheadercollection)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`listApps`](globals.md#listapps-2)

##### listAppsRaw()

```ts
listAppsRaw(requestParameters: ListAppsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<AppHeaderCollection>>
```

Retrieve all accessible applications
List of applications

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

`requestParameters`

</td>
<td>

[`ListAppsRequest`](globals.md#listappsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`AppHeaderCollection`](globals.md#appheadercollection)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`listAppsRaw`](globals.md#listappsraw-2)

##### listEnvironments()

```ts
listEnvironments(requestParameters: ListEnvironmentsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EnvironmentHeaderCollection>
```

Retrieve all environments for a specific application
List environments for application

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

`requestParameters`

</td>
<td>

[`ListEnvironmentsRequest`](globals.md#listenvironmentsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`listEnvironments`](globals.md#listenvironments-2)

##### listEnvironmentsRaw()

```ts
listEnvironmentsRaw(requestParameters: ListEnvironmentsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EnvironmentHeaderCollection>>
```

Retrieve all environments for a specific application
List environments for application

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

`requestParameters`

</td>
<td>

[`ListEnvironmentsRequest`](globals.md#listenvironmentsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`listEnvironmentsRaw`](globals.md#listenvironmentsraw-2)

##### listFlags()

```ts
listFlags(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<FlagHeaderCollection>
```

Retrieve all flags for a specific application
List flags for application

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

`requestParameters`

</td>
<td>

[`ListFlagsRequest`](globals.md#listflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagHeaderCollection`](globals.md#flagheadercollection)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`listFlags`](globals.md#listflags-2)

##### listFlagsRaw()

```ts
listFlagsRaw(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<FlagHeaderCollection>>
```

Retrieve all flags for a specific application
List flags for application

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

`requestParameters`

</td>
<td>

[`ListFlagsRequest`](globals.md#listflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`FlagHeaderCollection`](globals.md#flagheadercollection)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`listFlagsRaw`](globals.md#listflagsraw-2)

##### request()

```ts
protected request(context: RequestOpts, initOverrides?: RequestInit | InitOverrideFunction): Promise<Response>
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

`context`

</td>
<td>

[`RequestOpts`](globals.md#requestopts)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

###### Inherited from

[`BaseAPI`](globals.md#baseapi).[`request`](globals.md#request-1)

##### updateCompanyFlags()

```ts
updateCompanyFlags(requestParameters: UpdateCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Update specific targeting for flags for a company in an environment
Update flag targeting for a company

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

`requestParameters`

</td>
<td>

[`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`updateCompanyFlags`](globals.md#updatecompanyflags-2)

##### updateCompanyFlagsRaw()

```ts
updateCompanyFlagsRaw(requestParameters: UpdateCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Update specific targeting for flags for a company in an environment
Update flag targeting for a company

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

`requestParameters`

</td>
<td>

[`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`updateCompanyFlagsRaw`](globals.md#updatecompanyflagsraw-2)

##### updateFlag()

```ts
updateFlag(requestParameters: UpdateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<CreateFlag200Response>
```

Update an existing flag
Update a flag

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

`requestParameters`

</td>
<td>

[`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CreateFlag200Response`](globals.md#createflag200response)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`updateFlag`](globals.md#updateflag-2)

##### updateFlagRaw()

```ts
updateFlagRaw(requestParameters: UpdateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<CreateFlag200Response>>
```

Update an existing flag
Update a flag

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

`requestParameters`

</td>
<td>

[`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`CreateFlag200Response`](globals.md#createflag200response)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`updateFlagRaw`](globals.md#updateflagraw-2)

##### updateUserFlags()

```ts
updateUserFlags(requestParameters: UpdateUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Update specific targeting for flags for a user in an environment
Update flag targeting for a user

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

`requestParameters`

</td>
<td>

[`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`updateUserFlags`](globals.md#updateuserflags-2)

##### updateUserFlagsRaw()

```ts
updateUserFlagsRaw(requestParameters: UpdateUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Update specific targeting for flags for a user in an environment
Update flag targeting for a user

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

`requestParameters`

</td>
<td>

[`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Implementation of

[`DefaultApiInterface`](globals.md#defaultapiinterface).[`updateUserFlagsRaw`](globals.md#updateuserflagsraw-2)

##### withMiddleware()

```ts
withMiddleware<T>(this: T, ...middlewares: Middleware[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`middlewares`

</td>
<td>

[`Middleware`](globals.md#middleware-2)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

###### Inherited from

[`BaseAPI`](globals.md#baseapi).[`withMiddleware`](globals.md#withmiddleware-1)

##### withPostMiddleware()

```ts
withPostMiddleware<T>(this: T, ...postMiddlewares: (
  | undefined
  | (context: ResponseContext) => Promise<
  | void
  | Response>)[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`postMiddlewares`

</td>
<td>

( \| `undefined` \| (`context`: [`ResponseContext`](globals.md#responsecontext)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< \| `void` \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

###### Inherited from

[`BaseAPI`](globals.md#baseapi).[`withPostMiddleware`](globals.md#withpostmiddleware-1)

##### withPreMiddleware()

```ts
withPreMiddleware<T>(this: T, ...preMiddlewares: (
  | undefined
  | (context: RequestContext) => Promise<void | FetchParams>)[]): T
```

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

`T` *extends* [`BaseAPI`](globals.md#baseapi)

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
</tr>
</thead>
<tbody>
<tr>
<td>

`this`

</td>
<td>

`T`

</td>
</tr>
<tr>
<td>

...`preMiddlewares`

</td>
<td>

( \| `undefined` \| (`context`: [`RequestContext`](globals.md#requestcontext)) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| [`FetchParams`](globals.md#fetchparams)\>)[]

</td>
</tr>
</tbody>
</table>

###### Returns

`T`

###### Inherited from

[`BaseAPI`](globals.md#baseapi).[`withPreMiddleware`](globals.md#withpremiddleware-1)

***

### FetchError

#### Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

#### Constructors

##### new FetchError()

```ts
new FetchError(cause: Error, msg?: string): FetchError
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

`cause`

</td>
<td>

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

</td>
</tr>
<tr>
<td>

`msg`?

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

[`FetchError`](globals.md#fetcherror)

###### Overrides

```ts
Error.constructor
```

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
<th>Overrides</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="cause"></a> `cause`

</td>
<td>

`public`

</td>
<td>

[`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="message"></a> `message`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="name"></a> `name`

</td>
<td>

`public`

</td>
<td>

`"FetchError"`

</td>
<td>

`"FetchError"`

</td>
<td>

&hyphen;

</td>
<td>

```ts
Error.name
```

</td>
</tr>
<tr>
<td>

<a id="stack"></a> `stack?`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="preparestacktrace"></a> `prepareStackTrace?`

</td>
<td>

`static`

</td>
<td>

(`err`: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `stackTraces`: `CallSite`[]) => `any`

</td>
<td>

`undefined`

</td>
<td>

Optional override for formatting stack traces

**See**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stacktracelimit"></a> `stackTraceLimit`

</td>
<td>

`static`

</td>
<td>

`number`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void
```

Create .stack property on a target object

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

`targetObject`

</td>
<td>

`object`

</td>
</tr>
<tr>
<td>

`constructorOpt`?

</td>
<td>

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Inherited from

```ts
Error.captureStackTrace
```

***

### JSONApiResponse\<T\>

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

`T`

</td>
</tr>
</tbody>
</table>

#### Constructors

##### new JSONApiResponse()

```ts
new JSONApiResponse<T>(raw: Response, transformer: ResponseTransformer<T>): JSONApiResponse<T>
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

`raw`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
<tr>
<td>

`transformer`

</td>
<td>

[`ResponseTransformer`](globals.md#responsetransformert)\<`T`\>

</td>
</tr>
</tbody>
</table>

###### Returns

[`JSONApiResponse`](globals.md#jsonapiresponset)\<`T`\>

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="raw-1"></a> `raw`

</td>
<td>

`public`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

#### Methods

##### value()

```ts
value(): Promise<T>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

***

### ReflagApiError

#### Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

#### Constructors

##### new ReflagApiError()

```ts
new ReflagApiError(
   status: number, 
   message: string, 
   code?: string, 
   details?: unknown): ReflagApiError
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

`status`

</td>
<td>

`number`

</td>
</tr>
<tr>
<td>

`message`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`code`?

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`details`?

</td>
<td>

`unknown`

</td>
</tr>
</tbody>
</table>

###### Returns

[`ReflagApiError`](globals.md#reflagapierror)

###### Overrides

```ts
Error.constructor
```

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="code"></a> `code?`

</td>
<td>

`public`

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

<a id="details"></a> `details?`

</td>
<td>

`public`

</td>
<td>

`unknown`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="message-1"></a> `message`

</td>
<td>

`public`

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

<a id="name-1"></a> `name`

</td>
<td>

`public`

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

<a id="stack-1"></a> `stack?`

</td>
<td>

`public`

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

<a id="status"></a> `status`

</td>
<td>

`public`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="preparestacktrace-1"></a> `prepareStackTrace?`

</td>
<td>

`static`

</td>
<td>

(`err`: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `stackTraces`: `CallSite`[]) => `any`

</td>
<td>

Optional override for formatting stack traces

**See**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

</td>
</tr>
<tr>
<td>

<a id="stacktracelimit-1"></a> `stackTraceLimit`

</td>
<td>

`static`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void
```

Create .stack property on a target object

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

`targetObject`

</td>
<td>

`object`

</td>
</tr>
<tr>
<td>

`constructorOpt`?

</td>
<td>

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Inherited from

```ts
Error.captureStackTrace
```

***

### RequiredError

#### Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

#### Constructors

##### new RequiredError()

```ts
new RequiredError(field: string, msg?: string): RequiredError
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

`field`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`msg`?

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

[`RequiredError`](globals.md#requirederror)

###### Overrides

```ts
Error.constructor
```

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
<th>Overrides</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="field"></a> `field`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="message-2"></a> `message`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="name-2"></a> `name`

</td>
<td>

`public`

</td>
<td>

`"RequiredError"`

</td>
<td>

`"RequiredError"`

</td>
<td>

&hyphen;

</td>
<td>

```ts
Error.name
```

</td>
</tr>
<tr>
<td>

<a id="stack-2"></a> `stack?`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="preparestacktrace-2"></a> `prepareStackTrace?`

</td>
<td>

`static`

</td>
<td>

(`err`: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `stackTraces`: `CallSite`[]) => `any`

</td>
<td>

`undefined`

</td>
<td>

Optional override for formatting stack traces

**See**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stacktracelimit-2"></a> `stackTraceLimit`

</td>
<td>

`static`

</td>
<td>

`number`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void
```

Create .stack property on a target object

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

`targetObject`

</td>
<td>

`object`

</td>
</tr>
<tr>
<td>

`constructorOpt`?

</td>
<td>

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Inherited from

```ts
Error.captureStackTrace
```

***

### ResponseError

#### Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

#### Constructors

##### new ResponseError()

```ts
new ResponseError(response: Response, msg?: string): ResponseError
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

`response`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
<tr>
<td>

`msg`?

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

###### Returns

[`ResponseError`](globals.md#responseerror)

###### Overrides

```ts
Error.constructor
```

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Default value</th>
<th>Description</th>
<th>Overrides</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="message-3"></a> `message`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="name-3"></a> `name`

</td>
<td>

`public`

</td>
<td>

`"ResponseError"`

</td>
<td>

`"ResponseError"`

</td>
<td>

&hyphen;

</td>
<td>

```ts
Error.name
```

</td>
</tr>
<tr>
<td>

<a id="response"></a> `response`

</td>
<td>

`public`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stack-3"></a> `stack?`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="preparestacktrace-3"></a> `prepareStackTrace?`

</td>
<td>

`static`

</td>
<td>

(`err`: [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error), `stackTraces`: `CallSite`[]) => `any`

</td>
<td>

`undefined`

</td>
<td>

Optional override for formatting stack traces

**See**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stacktracelimit-3"></a> `stackTraceLimit`

</td>
<td>

`static`

</td>
<td>

`number`

</td>
<td>

`undefined`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

#### Methods

##### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void
```

Create .stack property on a target object

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

`targetObject`

</td>
<td>

`object`

</td>
</tr>
<tr>
<td>

`constructorOpt`?

</td>
<td>

[`Function`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function)

</td>
</tr>
</tbody>
</table>

###### Returns

`void`

###### Inherited from

```ts
Error.captureStackTrace
```

***

### TextApiResponse

#### Constructors

##### new TextApiResponse()

```ts
new TextApiResponse(raw: Response): TextApiResponse
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

`raw`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

###### Returns

[`TextApiResponse`](globals.md#textapiresponse)

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="raw-2"></a> `raw`

</td>
<td>

`public`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

#### Methods

##### value()

```ts
value(): Promise<string>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

***

### VoidApiResponse

#### Constructors

##### new VoidApiResponse()

```ts
new VoidApiResponse(raw: Response): VoidApiResponse
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

`raw`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

###### Returns

[`VoidApiResponse`](globals.md#voidapiresponse)

#### Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="raw-3"></a> `raw`

</td>
<td>

`public`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

#### Methods

##### value()

```ts
value(): Promise<void>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## Interfaces

### ApiResponse\<T\>

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

`T`

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

<a id="raw-4"></a> `raw`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
</tbody>
</table>

#### Methods

##### value()

```ts
value(): Promise<T>
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

***

### App

App information with related collections
 App

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

<a id="demo"></a> `demo`

</td>
<td>

`boolean`

</td>
<td>

Whether the app is a demo app

</td>
</tr>
<tr>
<td>

<a id="environments"></a> `environments`

</td>
<td>

[`Environment`](globals.md#environment)[]

</td>
<td>

Environments within the app

</td>
</tr>
<tr>
<td>

<a id="flagkeyformat"></a> `flagKeyFormat`

</td>
<td>

[`FlagKeyFormat`](globals.md#flagkeyformat-2)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="id"></a> `id`

</td>
<td>

`string`

</td>
<td>

App identifier

</td>
</tr>
<tr>
<td>

<a id="name-4"></a> `name`

</td>
<td>

`string`

</td>
<td>

App name

</td>
</tr>
<tr>
<td>

<a id="org"></a> `org`

</td>
<td>

[`OrgHeader`](globals.md#orgheader)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="segments"></a> `segments`

</td>
<td>

[`SegmentHeader`](globals.md#segmentheader)[]

</td>
<td>

Segments within the app

</td>
</tr>
<tr>
<td>

<a id="stages"></a> `stages`

</td>
<td>

[`StageHeader`](globals.md#stageheader)[]

</td>
<td>

Stages within the app

</td>
</tr>
</tbody>
</table>

***

### AppHeader

Basic app information
 AppHeader

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

<a id="demo-1"></a> `demo`

</td>
<td>

`boolean`

</td>
<td>

Whether the app is a demo app

</td>
</tr>
<tr>
<td>

<a id="environments-1"></a> `environments`

</td>
<td>

[`EnvironmentHeader`](globals.md#environmentheader)[]

</td>
<td>

Environments within the app

</td>
</tr>
<tr>
<td>

<a id="flagkeyformat-1"></a> `flagKeyFormat`

</td>
<td>

[`FlagKeyFormat`](globals.md#flagkeyformat-2)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="id-1"></a> `id`

</td>
<td>

`string`

</td>
<td>

App identifier

</td>
</tr>
<tr>
<td>

<a id="name-5"></a> `name`

</td>
<td>

`string`

</td>
<td>

App name

</td>
</tr>
<tr>
<td>

<a id="org-1"></a> `org`

</td>
<td>

[`OrgHeader`](globals.md#orgheader)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### AppHeaderCollection

Collection of Basic app information
 AppHeaderCollection

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

<a id="data"></a> `data`

</td>
<td>

[`AppHeader`](globals.md#appheader)[]

</td>
<td>

The individual items in the collection

</td>
</tr>
</tbody>
</table>

***

### ConfigurationParameters

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

<a id="accesstoken-1"></a> `accessToken?`

</td>
<td>

 \| `string` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\> \| (`name`?: `string`, `scopes`?: `string`[]) => \| `string` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

</td>
</tr>
<tr>
<td>

<a id="apikey-1"></a> `apiKey?`

</td>
<td>

 \| `string` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\> \| (`name`: `string`) => \| `string` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

</td>
</tr>
<tr>
<td>

<a id="basepath-1"></a> `basePath?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="credentials-1"></a> `credentials?`

</td>
<td>

`RequestCredentials`

</td>
</tr>
<tr>
<td>

<a id="fetchapi-1"></a> `fetchApi?`

</td>
<td>

(`input`: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL), `init`?: `RequestInit`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

</td>
</tr>
<tr>
<td>

<a id="headers-1"></a> `headers?`

</td>
<td>

[`HTTPHeaders`](globals.md#httpheaders)

</td>
</tr>
<tr>
<td>

<a id="middleware-1"></a> `middleware?`

</td>
<td>

[`Middleware`](globals.md#middleware-2)[]

</td>
</tr>
<tr>
<td>

<a id="password-1"></a> `password?`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="queryparamsstringify-1"></a> `queryParamsStringify?`

</td>
<td>

(`params`: [`HTTPQuery`](globals.md#httpquery)) => `string`

</td>
</tr>
<tr>
<td>

<a id="username-1"></a> `username?`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### Consume

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

<a id="contenttype"></a> `contentType`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### CreateFlag200Response

CreateFlag200Response

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

<a id="flag"></a> `flag`

</td>
<td>

[`CreateFlag200ResponseFlag`](globals.md#createflag200responseflag)

</td>
</tr>
</tbody>
</table>

***

### CreateFlag200ResponseFlag

CreateFlag200ResponseFlag

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

<a id="archived"></a> `archived`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is archived

</td>
</tr>
<tr>
<td>

<a id="coderefscleanedup"></a> `codeRefsCleanedUp`

</td>
<td>

`boolean`

</td>
<td>

Whether code references for this flag have been cleaned up

</td>
</tr>
<tr>
<td>

<a id="coderefsmarkedcleanat"></a> `codeRefsMarkedCleanAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when code references were marked as cleaned up

</td>
</tr>
<tr>
<td>

<a id="coderefsmarkedcleanusername"></a> `codeRefsMarkedCleanUserName?`

</td>
<td>

`string`

</td>
<td>

Name of the user who marked code references as cleaned up

</td>
</tr>
<tr>
<td>

<a id="createdat"></a> `createdAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was created

</td>
</tr>
<tr>
<td>

<a id="description"></a> `description?`

</td>
<td>

`string`

</td>
<td>

Flag description

</td>
</tr>
<tr>
<td>

<a id="id-2"></a> `id`

</td>
<td>

`string`

</td>
<td>

Flag ID

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

Unique flag key

</td>
</tr>
<tr>
<td>

<a id="lastcheckat"></a> `lastCheckAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was last checked

</td>
</tr>
<tr>
<td>

<a id="lasttrackat"></a> `lastTrackAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was last tracked

</td>
</tr>
<tr>
<td>

<a id="name-6"></a> `name`

</td>
<td>

`string`

</td>
<td>

Flag name

</td>
</tr>
<tr>
<td>

<a id="norecentchecks"></a> `noRecentChecks`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag has no recent access checks

</td>
</tr>
<tr>
<td>

<a id="owner"></a> `owner?`

</td>
<td>

[`ReflagUserHeader`](globals.md#reflaguserheader)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="parentflagid"></a> `parentFlagId?`

</td>
<td>

`string`

</td>
<td>

Parent flag ID

</td>
</tr>
<tr>
<td>

<a id="permanent"></a> `permanent`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is permanent

</td>
</tr>
<tr>
<td>

<a id="rolledouttoeveryoneat"></a> `rolledOutToEveryoneAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was rolled out to everyone

</td>
</tr>
<tr>
<td>

<a id="stage"></a> `stage?`

</td>
<td>

[`StageHeader`](globals.md#stageheader)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stale"></a> `stale`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is stale

</td>
</tr>
</tbody>
</table>

***

### CreateFlagOperationRequest

CreateFlagRequest

#### Extends

- [`CreateFlagRequest`](globals.md#createflagrequest)

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

<a id="appid"></a> `appId`

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

<a id="description-1"></a> `description?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

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

Key of the flag

</td>
</tr>
<tr>
<td>

<a id="name-7"></a> `name`

</td>
<td>

`string`

</td>
<td>

Name of the flag

</td>
</tr>
<tr>
<td>

<a id="owneruserid"></a> `ownerUserId?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="permanent-1"></a> `permanent?`

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

<a id="secret"></a> `secret?`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is secret

</td>
</tr>
<tr>
<td>

<a id="stageid"></a> `stageId?`

</td>
<td>

`string`

</td>
<td>

Stage ID of the flag

</td>
</tr>
</tbody>
</table>

***

### CreateFlagRequest

CreateFlagRequest

#### Extended by

- [`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

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

<a id="description-2"></a> `description?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="key-2"></a> `key`

</td>
<td>

`string`

</td>
<td>

Key of the flag

</td>
</tr>
<tr>
<td>

<a id="name-8"></a> `name`

</td>
<td>

`string`

</td>
<td>

Name of the flag

</td>
</tr>
<tr>
<td>

<a id="owneruserid-1"></a> `ownerUserId?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="permanent-2"></a> `permanent?`

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

<a id="secret-1"></a> `secret?`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is secret

</td>
</tr>
<tr>
<td>

<a id="stageid-1"></a> `stageId?`

</td>
<td>

`string`

</td>
<td>

Stage ID of the flag

</td>
</tr>
</tbody>
</table>

***

### DefaultApiInterface

DefaultApi - interface

 DefaultApiInterface

#### Methods

##### createFlag()

```ts
createFlag(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<CreateFlag200Response>
```

Create a new flag in the application. Returns the created flag details.
Create a flag

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

`requestParameters`

</td>
<td>

[`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CreateFlag200Response`](globals.md#createflag200response)\>

##### createFlagRaw()

```ts
createFlagRaw(requestParameters: CreateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<CreateFlag200Response>>
```

Create a new flag in the application. Returns the created flag details.

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

`requestParameters`

</td>
<td>

[`CreateFlagOperationRequest`](globals.md#createflagoperationrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`CreateFlag200Response`](globals.md#createflag200response)\>\>

###### Throws

##### getApp()

```ts
getApp(requestParameters: GetAppRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<App>
```

Retrieve a specific application by its identifier
Get details of an application

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

`requestParameters`

</td>
<td>

[`GetAppRequest`](globals.md#getapprequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`App`](globals.md#app)\>

##### getAppRaw()

```ts
getAppRaw(requestParameters: GetAppRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<App>>
```

Retrieve a specific application by its identifier

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

`requestParameters`

</td>
<td>

[`GetAppRequest`](globals.md#getapprequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`App`](globals.md#app)\>\>

###### Throws

##### getCompanyFlags()

```ts
getCompanyFlags(requestParameters: GetCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Retrieve all flags with their targeting status for a specific company
Get flags for a company

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

`requestParameters`

</td>
<td>

[`GetCompanyFlagsRequest`](globals.md#getcompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

##### getCompanyFlagsRaw()

```ts
getCompanyFlagsRaw(requestParameters: GetCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Retrieve all flags with their targeting status for a specific company

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

`requestParameters`

</td>
<td>

[`GetCompanyFlagsRequest`](globals.md#getcompanyflagsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Throws

##### getEnvironment()

```ts
getEnvironment(requestParameters: GetEnvironmentRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<Environment>
```

Retrieve details for a specific environment
Get environment details

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

`requestParameters`

</td>
<td>

[`GetEnvironmentRequest`](globals.md#getenvironmentrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Environment`](globals.md#environment)\>

##### getEnvironmentRaw()

```ts
getEnvironmentRaw(requestParameters: GetEnvironmentRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<Environment>>
```

Retrieve details for a specific environment

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

`requestParameters`

</td>
<td>

[`GetEnvironmentRequest`](globals.md#getenvironmentrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`Environment`](globals.md#environment)\>\>

###### Throws

##### getFlagTargeting()

```ts
getFlagTargeting(requestParameters: GetFlagTargetingRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<FlagTargeting>
```

Retrieve targeting for a flag in an environment
Get flag targeting for an environment

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

`requestParameters`

</td>
<td>

[`GetFlagTargetingRequest`](globals.md#getflagtargetingrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagTargeting`](globals.md#flagtargeting)\>

##### getFlagTargetingRaw()

```ts
getFlagTargetingRaw(requestParameters: GetFlagTargetingRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<FlagTargeting>>
```

Retrieve targeting for a flag in an environment

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

`requestParameters`

</td>
<td>

[`GetFlagTargetingRequest`](globals.md#getflagtargetingrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`FlagTargeting`](globals.md#flagtargeting)\>\>

###### Throws

##### getUserFlags()

```ts
getUserFlags(requestParameters: GetUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Retrieve all flags with their targeting status for a specific user
Get flags for a user

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

`requestParameters`

</td>
<td>

[`GetUserFlagsRequest`](globals.md#getuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

##### getUserFlagsRaw()

```ts
getUserFlagsRaw(requestParameters: GetUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Retrieve all flags with their targeting status for a specific user

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

`requestParameters`

</td>
<td>

[`GetUserFlagsRequest`](globals.md#getuserflagsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Throws

##### listApps()

```ts
listApps(requestParameters: ListAppsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<AppHeaderCollection>
```

Retrieve all accessible applications
List of applications

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

`requestParameters`

</td>
<td>

[`ListAppsRequest`](globals.md#listappsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AppHeaderCollection`](globals.md#appheadercollection)\>

##### listAppsRaw()

```ts
listAppsRaw(requestParameters: ListAppsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<AppHeaderCollection>>
```

Retrieve all accessible applications

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

`requestParameters`

</td>
<td>

[`ListAppsRequest`](globals.md#listappsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`AppHeaderCollection`](globals.md#appheadercollection)\>\>

###### Throws

##### listEnvironments()

```ts
listEnvironments(requestParameters: ListEnvironmentsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EnvironmentHeaderCollection>
```

Retrieve all environments for a specific application
List environments for application

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

`requestParameters`

</td>
<td>

[`ListEnvironmentsRequest`](globals.md#listenvironmentsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)\>

##### listEnvironmentsRaw()

```ts
listEnvironmentsRaw(requestParameters: ListEnvironmentsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EnvironmentHeaderCollection>>
```

Retrieve all environments for a specific application

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

`requestParameters`

</td>
<td>

[`ListEnvironmentsRequest`](globals.md#listenvironmentsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)\>\>

###### Throws

##### listFlags()

```ts
listFlags(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<FlagHeaderCollection>
```

Retrieve all flags for a specific application
List flags for application

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

`requestParameters`

</td>
<td>

[`ListFlagsRequest`](globals.md#listflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`FlagHeaderCollection`](globals.md#flagheadercollection)\>

##### listFlagsRaw()

```ts
listFlagsRaw(requestParameters: ListFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<FlagHeaderCollection>>
```

Retrieve all flags for a specific application

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

`requestParameters`

</td>
<td>

[`ListFlagsRequest`](globals.md#listflagsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`FlagHeaderCollection`](globals.md#flagheadercollection)\>\>

###### Throws

##### updateCompanyFlags()

```ts
updateCompanyFlags(requestParameters: UpdateCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Update specific targeting for flags for a company in an environment
Update flag targeting for a company

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

`requestParameters`

</td>
<td>

[`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

##### updateCompanyFlagsRaw()

```ts
updateCompanyFlagsRaw(requestParameters: UpdateCompanyFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Update specific targeting for flags for a company in an environment

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

`requestParameters`

</td>
<td>

[`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Throws

##### updateFlag()

```ts
updateFlag(requestParameters: UpdateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<CreateFlag200Response>
```

Update an existing flag
Update a flag

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

`requestParameters`

</td>
<td>

[`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`CreateFlag200Response`](globals.md#createflag200response)\>

##### updateFlagRaw()

```ts
updateFlagRaw(requestParameters: UpdateFlagOperationRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<CreateFlag200Response>>
```

Update an existing flag

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

`requestParameters`

</td>
<td>

[`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`CreateFlag200Response`](globals.md#createflag200response)\>\>

###### Throws

##### updateUserFlags()

```ts
updateUserFlags(requestParameters: UpdateUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<EntityFlagsResponse>
```

Update specific targeting for flags for a user in an environment
Update flag targeting for a user

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

`requestParameters`

</td>
<td>

[`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>

##### updateUserFlagsRaw()

```ts
updateUserFlagsRaw(requestParameters: UpdateUserFlagsRequest, initOverrides?: RequestInit | InitOverrideFunction): Promise<ApiResponse<EntityFlagsResponse>>
```

Update specific targeting for flags for a user in an environment

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

`requestParameters`

</td>
<td>

[`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

</td>
<td>

Request parameters for this operation.

</td>
</tr>
<tr>
<td>

`initOverrides`?

</td>
<td>

`RequestInit` \| [`InitOverrideFunction`](globals.md#initoverridefunction)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ApiResponse`](globals.md#apiresponset)\<[`EntityFlagsResponse`](globals.md#entityflagsresponse)\>\>

###### Throws

***

### EntityFlag

Flag information with enabled status for an entity
 EntityFlag

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

<a id="createdat-1"></a> `createdAt`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was created

</td>
</tr>
<tr>
<td>

<a id="exposurecount"></a> `exposureCount`

</td>
<td>

`number`

</td>
<td>

Number of times the entity was exposed to this flag

</td>
</tr>
<tr>
<td>

<a id="firstexposureat"></a> `firstExposureAt`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="firsttrackat"></a> `firstTrackAt`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="id-3"></a> `id`

</td>
<td>

`string`

</td>
<td>

Flag ID

</td>
</tr>
<tr>
<td>

<a id="key-3"></a> `key`

</td>
<td>

`string`

</td>
<td>

Unique flag key

</td>
</tr>
<tr>
<td>

<a id="lastcheckat-1"></a> `lastCheckAt`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="lastexposureat"></a> `lastExposureAt`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="lasttrackat-1"></a> `lastTrackAt`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="name-9"></a> `name`

</td>
<td>

`string`

</td>
<td>

Flag name

</td>
</tr>
<tr>
<td>

<a id="specifictargetvalue"></a> `specificTargetValue`

</td>
<td>

`null` \| `boolean`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="trackcount"></a> `trackCount`

</td>
<td>

`number`

</td>
<td>

Number of track events for this flag

</td>
</tr>
<tr>
<td>

<a id="value-5"></a> `value`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is enabled for this entity

</td>
</tr>
</tbody>
</table>

***

### EntityFlagsResponse

Response containing flags for an entity
 EntityFlagsResponse

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

<a id="data-1"></a> `data`

</td>
<td>

[`EntityFlag`](globals.md#entityflag)[]

</td>
<td>

List of flags with their enabled status

</td>
</tr>
<tr>
<td>

<a id="pageindex"></a> `pageIndex`

</td>
<td>

`number`

</td>
<td>

Page index

</td>
</tr>
<tr>
<td>

<a id="pagesize"></a> `pageSize`

</td>
<td>

`number`

</td>
<td>

Page size

</td>
</tr>
<tr>
<td>

<a id="totalcount"></a> `totalCount`

</td>
<td>

`number`

</td>
<td>

Total number of flags

</td>
</tr>
</tbody>
</table>

***

### EntityFlagUpdate

Update for a single flag's explicit targeting override
 EntityFlagUpdate

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

<a id="flagkey"></a> `flagKey`

</td>
<td>

`string`

</td>
<td>

Unique flag key

</td>
</tr>
<tr>
<td>

<a id="specifictargetvalue-1"></a> `specificTargetValue`

</td>
<td>

`null` \| `true`

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### Environment

Environment details
 Environment

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

<a id="flagstateversion"></a> `flagStateVersion`

</td>
<td>

`number`

</td>
<td>

Environment version incremented when flag state changes

</td>
</tr>
<tr>
<td>

<a id="id-4"></a> `id`

</td>
<td>

`string`

</td>
<td>

Environment identifier

</td>
</tr>
<tr>
<td>

<a id="isproduction"></a> `isProduction`

</td>
<td>

`boolean`

</td>
<td>

Whether the environment is a production environment

</td>
</tr>
<tr>
<td>

<a id="name-10"></a> `name`

</td>
<td>

`string`

</td>
<td>

Environment name

</td>
</tr>
<tr>
<td>

<a id="order"></a> `order`

</td>
<td>

`number`

</td>
<td>

Environment order in the app (zero-indexed)

</td>
</tr>
<tr>
<td>

<a id="sdkaccess"></a> `sdkAccess`

</td>
<td>

[`EnvironmentSdkAccess`](globals.md#environmentsdkaccess)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### EnvironmentHeader

Basic environment information
 EnvironmentHeader

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

<a id="flagstateversion-1"></a> `flagStateVersion`

</td>
<td>

`number`

</td>
<td>

Environment version incremented when flag state changes

</td>
</tr>
<tr>
<td>

<a id="id-5"></a> `id`

</td>
<td>

`string`

</td>
<td>

Environment identifier

</td>
</tr>
<tr>
<td>

<a id="isproduction-1"></a> `isProduction`

</td>
<td>

`boolean`

</td>
<td>

Whether the environment is a production environment

</td>
</tr>
<tr>
<td>

<a id="name-11"></a> `name`

</td>
<td>

`string`

</td>
<td>

Environment name

</td>
</tr>
<tr>
<td>

<a id="order-1"></a> `order`

</td>
<td>

`number`

</td>
<td>

Environment order in the app (zero-indexed)

</td>
</tr>
</tbody>
</table>

***

### EnvironmentHeaderCollection

Collection of Basic environment information
 EnvironmentHeaderCollection

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

<a id="data-2"></a> `data`

</td>
<td>

[`EnvironmentHeader`](globals.md#environmentheader)[]

</td>
<td>

The individual items in the collection

</td>
</tr>
<tr>
<td>

<a id="sortby"></a> `sortBy`

</td>
<td>

[`EnvironmentHeaderSortByColumn`](globals.md#environmentheadersortbycolumn)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="sortorder"></a> `sortOrder`

</td>
<td>

[`SortOrder`](globals.md#sortorder-3)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### EnvironmentSdkAccess

SDK access details
 EnvironmentSdkAccess

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

<a id="publishablekey"></a> `publishableKey`

</td>
<td>

`string`

</td>
<td>

Publishable key

</td>
</tr>
<tr>
<td>

<a id="secretkey"></a> `secretKey`

</td>
<td>

`string`

</td>
<td>

Secret key

</td>
</tr>
</tbody>
</table>

***

### ErrorContext

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

<a id="error"></a> `error`

</td>
<td>

`unknown`

</td>
</tr>
<tr>
<td>

<a id="fetch"></a> `fetch`

</td>
<td>

(`input`: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL), `init`?: `RequestInit`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

</td>
</tr>
<tr>
<td>

<a id="init"></a> `init`

</td>
<td>

`RequestInit`

</td>
</tr>
<tr>
<td>

<a id="response-1"></a> `response?`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
<tr>
<td>

<a id="url"></a> `url`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### ErrorResponse

The error response, including individual issues, if applicable
 ErrorResponse

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

<a id="error-1"></a> `error`

</td>
<td>

[`ErrorResponseError`](globals.md#errorresponseerror)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="issues"></a> `issues?`

</td>
<td>

\{\}

</td>
<td>

Individual validation issues, if applicable

</td>
</tr>
</tbody>
</table>

***

### ErrorResponseError

The error
 ErrorResponseError

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

<a id="code-1"></a> `code`

</td>
<td>

[`ErrorResponseErrorCodeEnum`](globals.md#errorresponseerrorcodeenum)

</td>
<td>

Error code

</td>
</tr>
<tr>
<td>

<a id="message-4"></a> `message`

</td>
<td>

`string`

</td>
<td>

Human readable error message

</td>
</tr>
</tbody>
</table>

***

### FetchParams

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

<a id="init-1"></a> `init`

</td>
<td>

`RequestInit`

</td>
</tr>
<tr>
<td>

<a id="url-1"></a> `url`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### FlagHeader

Basic flag information
 FlagHeader

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

<a id="archived-1"></a> `archived`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is archived

</td>
</tr>
<tr>
<td>

<a id="coderefscleanedup-1"></a> `codeRefsCleanedUp`

</td>
<td>

`boolean`

</td>
<td>

Whether code references for this flag have been cleaned up

</td>
</tr>
<tr>
<td>

<a id="coderefsmarkedcleanat-1"></a> `codeRefsMarkedCleanAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when code references were marked as cleaned up

</td>
</tr>
<tr>
<td>

<a id="coderefsmarkedcleanusername-1"></a> `codeRefsMarkedCleanUserName?`

</td>
<td>

`string`

</td>
<td>

Name of the user who marked code references as cleaned up

</td>
</tr>
<tr>
<td>

<a id="createdat-2"></a> `createdAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was created

</td>
</tr>
<tr>
<td>

<a id="description-3"></a> `description?`

</td>
<td>

`string`

</td>
<td>

Flag description

</td>
</tr>
<tr>
<td>

<a id="id-6"></a> `id`

</td>
<td>

`string`

</td>
<td>

Flag ID

</td>
</tr>
<tr>
<td>

<a id="key-4"></a> `key`

</td>
<td>

`string`

</td>
<td>

Unique flag key

</td>
</tr>
<tr>
<td>

<a id="lastcheckat-2"></a> `lastCheckAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was last checked

</td>
</tr>
<tr>
<td>

<a id="lasttrackat-2"></a> `lastTrackAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was last tracked

</td>
</tr>
<tr>
<td>

<a id="name-12"></a> `name`

</td>
<td>

`string`

</td>
<td>

Flag name

</td>
</tr>
<tr>
<td>

<a id="norecentchecks-1"></a> `noRecentChecks`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag has no recent access checks

</td>
</tr>
<tr>
<td>

<a id="owner-1"></a> `owner?`

</td>
<td>

[`ReflagUserHeader`](globals.md#reflaguserheader)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="permanent-3"></a> `permanent`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is permanent

</td>
</tr>
<tr>
<td>

<a id="rolledouttoeveryoneat-1"></a> `rolledOutToEveryoneAt?`

</td>
<td>

`string`

</td>
<td>

Timestamp when the flag was rolled out to everyone

</td>
</tr>
<tr>
<td>

<a id="stage-1"></a> `stage?`

</td>
<td>

[`StageHeader`](globals.md#stageheader)

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="stale-1"></a> `stale`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is stale

</td>
</tr>
</tbody>
</table>

***

### FlagHeaderCollection

Collection response containing flags
 FlagHeaderCollection

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

<a id="data-3"></a> `data`

</td>
<td>

[`FlagHeader`](globals.md#flagheader)[]

</td>
<td>

Page of the collection of flags

</td>
</tr>
<tr>
<td>

<a id="pageindex-1"></a> `pageIndex`

</td>
<td>

`number`

</td>
<td>

Page index

</td>
</tr>
<tr>
<td>

<a id="pagesize-1"></a> `pageSize`

</td>
<td>

`number`

</td>
<td>

Page size

</td>
</tr>
<tr>
<td>

<a id="sortby-1"></a> `sortBy`

</td>
<td>

[`FlagHeaderCollectionSortByEnum`](globals.md#flagheadercollectionsortbyenum)

</td>
<td>

Sort by

</td>
</tr>
<tr>
<td>

<a id="sortorder-1"></a> `sortOrder`

</td>
<td>

[`SortOrder`](globals.md#sortorder-3)

</td>
<td>

Sort order

</td>
</tr>
<tr>
<td>

<a id="totalcount-1"></a> `totalCount`

</td>
<td>

`number`

</td>
<td>

Total number of flags in collection

</td>
</tr>
</tbody>
</table>

***

### FlagTargeting

Flag targeting information and its audience
 FlagTargeting

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

<a id="flagkey-1"></a> `flagKey`

</td>
<td>

`string`

</td>
<td>

Unique flag key

</td>
</tr>
<tr>
<td>

<a id="specifictargets"></a> `specificTargets`

</td>
<td>

\{\}

</td>
<td>

The flag targeting for each value

</td>
</tr>
<tr>
<td>

<a id="updatedat"></a> `updatedAt`

</td>
<td>

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

</td>
<td>

Last time the targeting was updated

</td>
</tr>
<tr>
<td>

<a id="version"></a> `version`

</td>
<td>

`number`

</td>
<td>

Flag targeting version

</td>
</tr>
</tbody>
</table>

***

### FlagValueTargeting

Flag targeting value and its audience
 FlagValueTargeting

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

<a id="companyids"></a> `companyIds`

</td>
<td>

`string`[]

</td>
<td>

Companies that were explicitly given the value

</td>
</tr>
<tr>
<td>

<a id="userids"></a> `userIds`

</td>
<td>

`string`[]

</td>
<td>

Users that were explicitly given the value

</td>
</tr>
</tbody>
</table>

***

### GetAppRequest

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

<a id="appid-1"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### GetCompanyFlagsRequest

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

<a id="appid-2"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="companyid"></a> `companyId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="envid"></a> `envId`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### GetEnvironmentRequest

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

<a id="appid-3"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="envid-1"></a> `envId`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### GetFlagTargetingRequest

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

<a id="appid-4"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="envid-2"></a> `envId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="flagkey-2"></a> `flagKey`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### GetUserFlagsRequest

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

<a id="appid-5"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="envid-3"></a> `envId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="userid"></a> `userId`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### ListAppsRequest

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

<a id="orgid"></a> `orgId?`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### ListEnvironmentsRequest

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

<a id="appid-6"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="sortby-2"></a> `sortBy?`

</td>
<td>

[`EnvironmentHeaderSortByColumn`](globals.md#environmentheadersortbycolumn)

</td>
</tr>
<tr>
<td>

<a id="sortorder-2"></a> `sortOrder?`

</td>
<td>

[`SortOrder`](globals.md#sortorder-3)

</td>
</tr>
</tbody>
</table>

***

### ListFlagsRequest

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

<a id="appid-7"></a> `appId`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### Middleware

#### Methods

##### onError()?

```ts
optional onError(context: ErrorContext): Promise<
  | void
| Response>
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

`context`

</td>
<td>

[`ErrorContext`](globals.md#errorcontext)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `void`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

##### post()?

```ts
optional post(context: ResponseContext): Promise<
  | void
| Response>
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

`context`

</td>
<td>

[`ResponseContext`](globals.md#responsecontext)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<
  \| `void`
  \| [`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

##### pre()?

```ts
optional pre(context: RequestContext): Promise<void | FetchParams>
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

`context`

</td>
<td>

[`RequestContext`](globals.md#requestcontext)

</td>
</tr>
</tbody>
</table>

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| [`FetchParams`](globals.md#fetchparams)\>

***

### OrgHeader

Organization's basic information
 OrgHeader

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

<a id="id-7"></a> `id`

</td>
<td>

`string`

</td>
<td>

Organization identifier

</td>
</tr>
<tr>
<td>

<a id="name-13"></a> `name`

</td>
<td>

`string`

</td>
<td>

Organization name

</td>
</tr>
</tbody>
</table>

***

### ReflagUserHeader

Reflag user's basic information
 ReflagUserHeader

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

<a id="avatarurl"></a> `avatarUrl?`

</td>
<td>

`string`

</td>
<td>

User's avatar URL

</td>
</tr>
<tr>
<td>

<a id="email"></a> `email`

</td>
<td>

`string`

</td>
<td>

User's email

</td>
</tr>
<tr>
<td>

<a id="id-8"></a> `id`

</td>
<td>

`string`

</td>
<td>

Reflag user identifier

</td>
</tr>
<tr>
<td>

<a id="name-14"></a> `name`

</td>
<td>

`string`

</td>
<td>

User's name

</td>
</tr>
</tbody>
</table>

***

### RequestContext

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

<a id="fetch-1"></a> `fetch`

</td>
<td>

(`input`: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL), `init`?: `RequestInit`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

</td>
</tr>
<tr>
<td>

<a id="init-2"></a> `init`

</td>
<td>

`RequestInit`

</td>
</tr>
<tr>
<td>

<a id="url-2"></a> `url`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### RequestOpts

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

<a id="body"></a> `body?`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

<a id="headers-2"></a> `headers`

</td>
<td>

[`HTTPHeaders`](globals.md#httpheaders)

</td>
</tr>
<tr>
<td>

<a id="method"></a> `method`

</td>
<td>

[`HTTPMethod`](globals.md#httpmethod)

</td>
</tr>
<tr>
<td>

<a id="path"></a> `path`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

<a id="query"></a> `query?`

</td>
<td>

[`HTTPQuery`](globals.md#httpquery)

</td>
</tr>
</tbody>
</table>

***

### ResponseContext

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

<a id="fetch-2"></a> `fetch`

</td>
<td>

(`input`: `RequestInfo` \| [`URL`](https://developer.mozilla.org/docs/Web/API/URL), `init`?: `RequestInit`) => [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

</td>
</tr>
<tr>
<td>

<a id="init-3"></a> `init`

</td>
<td>

`RequestInit`

</td>
</tr>
<tr>
<td>

<a id="response-2"></a> `response`

</td>
<td>

[`Response`](https://developer.mozilla.org/docs/Web/API/Response)

</td>
</tr>
<tr>
<td>

<a id="url-3"></a> `url`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

***

### ResponseTransformer()\<T\>

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

`T`

</td>
</tr>
</tbody>
</table>

```ts
interface ResponseTransformer(json: any): T
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`T`

***

### SegmentHeader

Segment's basic information
 SegmentHeader

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

<a id="id-9"></a> `id`

</td>
<td>

`string`

</td>
<td>

Segment identifier

</td>
</tr>
<tr>
<td>

<a id="name-15"></a> `name`

</td>
<td>

`string`

</td>
<td>

Segment name

</td>
</tr>
<tr>
<td>

<a id="type"></a> `type`

</td>
<td>

[`SegmentType`](globals.md#segmenttype)

</td>
<td>

&hyphen;

</td>
</tr>
</tbody>
</table>

***

### StageHeader

Stage's basic information
 StageHeader

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

<a id="color"></a> `color`

</td>
<td>

`string`

</td>
<td>

Stage color (HTML color name or hex code)

</td>
</tr>
<tr>
<td>

<a id="id-10"></a> `id`

</td>
<td>

`string`

</td>
<td>

Stage identifier

</td>
</tr>
<tr>
<td>

<a id="name-16"></a> `name`

</td>
<td>

`string`

</td>
<td>

Stage name

</td>
</tr>
<tr>
<td>

<a id="order-2"></a> `order`

</td>
<td>

`number`

</td>
<td>

Stage order

</td>
</tr>
</tbody>
</table>

***

### UpdateCompanyFlagsRequest

Request body for updating flags for an entity
 UpdateEntityFlagsBody

#### Extends

- [`UpdateEntityFlagsBody`](globals.md#updateentityflagsbody)

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

<a id="appid-8"></a> `appId`

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

<a id="changedescription"></a> `changeDescription?`

</td>
<td>

`string`

</td>
<td>

Description of the change for audit history

</td>
</tr>
<tr>
<td>

<a id="companyid-1"></a> `companyId`

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

<a id="envid-4"></a> `envId`

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

<a id="notifications"></a> `notifications?`

</td>
<td>

[`UpdateEntityFlagsBodyNotificationsEnum`](globals.md#updateentityflagsbodynotificationsenum)[]

</td>
<td>

Destination list for notifications about the change. Use [] to disable notifications. Omit to use configured defaults.

</td>
</tr>
<tr>
<td>

<a id="updates"></a> `updates`

</td>
<td>

[`EntityFlagUpdate`](globals.md#entityflagupdate)[]

</td>
<td>

List of flag updates to apply

</td>
</tr>
</tbody>
</table>

***

### UpdateEntityFlagsBody

Request body for updating flags for an entity
 UpdateEntityFlagsBody

#### Extended by

- [`UpdateCompanyFlagsRequest`](globals.md#updatecompanyflagsrequest)
- [`UpdateUserFlagsRequest`](globals.md#updateuserflagsrequest)

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

<a id="changedescription-1"></a> `changeDescription?`

</td>
<td>

`string`

</td>
<td>

Description of the change for audit history

</td>
</tr>
<tr>
<td>

<a id="notifications-1"></a> `notifications?`

</td>
<td>

[`UpdateEntityFlagsBodyNotificationsEnum`](globals.md#updateentityflagsbodynotificationsenum)[]

</td>
<td>

Destination list for notifications about the change. Use [] to disable notifications. Omit to use configured defaults.

</td>
</tr>
<tr>
<td>

<a id="updates-1"></a> `updates`

</td>
<td>

[`EntityFlagUpdate`](globals.md#entityflagupdate)[]

</td>
<td>

List of flag updates to apply

</td>
</tr>
</tbody>
</table>

***

### UpdateFlagOperationRequest

UpdateFlagRequest

#### Extends

- [`UpdateFlagRequest`](globals.md#updateflagrequest)

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

<a id="appid-9"></a> `appId`

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

<a id="description-4"></a> `description?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="flagid"></a> `flagId`

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

<a id="isarchived"></a> `isArchived?`

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

<a id="name-17"></a> `name?`

</td>
<td>

`string`

</td>
<td>

Name of the flag

</td>
</tr>
<tr>
<td>

<a id="owneruserid-2"></a> `ownerUserId?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="permanent-4"></a> `permanent?`

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

<a id="secret-2"></a> `secret?`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is secret

</td>
</tr>
<tr>
<td>

<a id="stageid-2"></a> `stageId?`

</td>
<td>

`string`

</td>
<td>

Stage ID of the flag

</td>
</tr>
</tbody>
</table>

***

### UpdateFlagRequest

UpdateFlagRequest

#### Extended by

- [`UpdateFlagOperationRequest`](globals.md#updateflagoperationrequest)

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

<a id="description-5"></a> `description?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="isarchived-1"></a> `isArchived?`

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

<a id="name-18"></a> `name?`

</td>
<td>

`string`

</td>
<td>

Name of the flag

</td>
</tr>
<tr>
<td>

<a id="owneruserid-3"></a> `ownerUserId?`

</td>
<td>

`null` \| `string`

</td>
<td>

&hyphen;

</td>
</tr>
<tr>
<td>

<a id="permanent-5"></a> `permanent?`

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

<a id="secret-3"></a> `secret?`

</td>
<td>

`boolean`

</td>
<td>

Whether the flag is secret

</td>
</tr>
<tr>
<td>

<a id="stageid-3"></a> `stageId?`

</td>
<td>

`string`

</td>
<td>

Stage ID of the flag

</td>
</tr>
</tbody>
</table>

***

### UpdateUserFlagsRequest

Request body for updating flags for an entity
 UpdateEntityFlagsBody

#### Extends

- [`UpdateEntityFlagsBody`](globals.md#updateentityflagsbody)

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

<a id="appid-10"></a> `appId`

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

<a id="changedescription-2"></a> `changeDescription?`

</td>
<td>

`string`

</td>
<td>

Description of the change for audit history

</td>
</tr>
<tr>
<td>

<a id="envid-5"></a> `envId`

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

<a id="notifications-2"></a> `notifications?`

</td>
<td>

[`UpdateEntityFlagsBodyNotificationsEnum`](globals.md#updateentityflagsbodynotificationsenum)[]

</td>
<td>

Destination list for notifications about the change. Use [] to disable notifications. Omit to use configured defaults.

</td>
</tr>
<tr>
<td>

<a id="updates-2"></a> `updates`

</td>
<td>

[`EntityFlagUpdate`](globals.md#entityflagupdate)[]

</td>
<td>

List of flag updates to apply

</td>
</tr>
<tr>
<td>

<a id="userid-1"></a> `userId`

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

## Type Aliases

### AppScopedApi\<T\>

```ts
type AppScopedApi<T> = { [K in keyof T]: OmitAppIdParam<T[K]> };
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

`T`

</td>
</tr>
</tbody>
</table>

***

### EntityFlagUpdateSpecificTargetValueEnum

```ts
type EntityFlagUpdateSpecificTargetValueEnum = typeof EntityFlagUpdateSpecificTargetValueEnum[keyof typeof EntityFlagUpdateSpecificTargetValueEnum];
```

***

### EnvironmentHeaderSortByColumn

```ts
type EnvironmentHeaderSortByColumn = typeof EnvironmentHeaderSortByColumn[keyof typeof EnvironmentHeaderSortByColumn];
```

***

### ErrorResponseErrorCodeEnum

```ts
type ErrorResponseErrorCodeEnum = typeof ErrorResponseErrorCodeEnum[keyof typeof ErrorResponseErrorCodeEnum];
```

***

### FetchAPI

```ts
type FetchAPI = WindowOrWorkerGlobalScope["fetch"];
```

***

### FlagHeaderCollectionSortByEnum

```ts
type FlagHeaderCollectionSortByEnum = typeof FlagHeaderCollectionSortByEnum[keyof typeof FlagHeaderCollectionSortByEnum];
```

***

### FlagKeyFormat

```ts
type FlagKeyFormat = typeof FlagKeyFormat[keyof typeof FlagKeyFormat];
```

***

### FlagValue

```ts
type FlagValue = typeof FlagValue[keyof typeof FlagValue];
```

***

### HTTPBody

```ts
type HTTPBody = 
  | Json
  | FormData
  | URLSearchParams;
```

***

### HTTPHeaders

```ts
type HTTPHeaders = {};
```

#### Index Signature

```ts
[key: string]: string
```

***

### HTTPMethod

```ts
type HTTPMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
```

***

### HTTPQuery

```ts
type HTTPQuery = {};
```

#### Index Signature

```ts
[key: string]: 
  | null
  | string
  | number
  | boolean
  | HTTPQuery
  | (null | string | number | boolean)[]
| Set<null | string | number | boolean>
```

***

### HTTPRequestInit

```ts
type HTTPRequestInit = {
  body: HTTPBody;
  credentials: RequestCredentials;
  headers: HTTPHeaders;
  method: HTTPMethod;
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

<a id="body-1"></a> `body`?

</td>
<td>

[`HTTPBody`](globals.md#httpbody)

</td>
</tr>
<tr>
<td>

<a id="credentials-2"></a> `credentials`?

</td>
<td>

`RequestCredentials`

</td>
</tr>
<tr>
<td>

<a id="headers-3"></a> `headers`?

</td>
<td>

[`HTTPHeaders`](globals.md#httpheaders)

</td>
</tr>
<tr>
<td>

<a id="method-1"></a> `method`

</td>
<td>

[`HTTPMethod`](globals.md#httpmethod)

</td>
</tr>
</tbody>
</table>

***

### InitOverrideFunction()

```ts
type InitOverrideFunction = (requestContext: {
  context: RequestOpts;
  init: HTTPRequestInit;
}) => Promise<RequestInit>;
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

`requestContext`

</td>
<td>

\{ `context`: [`RequestOpts`](globals.md#requestopts); `init`: [`HTTPRequestInit`](globals.md#httprequestinit); \}

</td>
</tr>
<tr>
<td>

`requestContext.context`

</td>
<td>

[`RequestOpts`](globals.md#requestopts)

</td>
</tr>
<tr>
<td>

`requestContext.init`

</td>
<td>

[`HTTPRequestInit`](globals.md#httprequestinit)

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`RequestInit`\>

***

### Json

```ts
type Json = any;
```

***

### ModelPropertyNaming

```ts
type ModelPropertyNaming = "camelCase" | "snake_case" | "PascalCase" | "original";
```

***

### OmitAppIdParam\<F\>

```ts
type OmitAppIdParam<F> = F extends (arg1: infer A, ...rest: infer R) => infer Ret ? A extends {
  appId: string;
 } ? (arg1: Omit<A, "appId">, ...rest: R) => Ret : F : F;
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

`F`

</td>
</tr>
</tbody>
</table>

***

### SegmentType

```ts
type SegmentType = typeof SegmentType[keyof typeof SegmentType];
```

***

### SortOrder

```ts
type SortOrder = typeof SortOrder[keyof typeof SortOrder];
```

***

### UpdateEntityFlagsBodyNotificationsEnum

```ts
type UpdateEntityFlagsBodyNotificationsEnum = typeof UpdateEntityFlagsBodyNotificationsEnum[keyof typeof UpdateEntityFlagsBodyNotificationsEnum];
```

## Variables

### BASE\_PATH

```ts
const BASE_PATH: string;
```

Reflag Management API
Feature flag Management API

The version of the OpenAPI document: 3.0.1

NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
https://openapi-generator.tech
Do not edit the class manually.

***

### COLLECTION\_FORMATS

```ts
const COLLECTION_FORMATS: {
  csv: string;
  pipes: string;
  ssv: string;
  tsv: string;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="csv"></a> `csv`

</td>
<td>

`string`

</td>
<td>

","

</td>
</tr>
<tr>
<td>

<a id="pipes"></a> `pipes`

</td>
<td>

`string`

</td>
<td>

"\|"

</td>
</tr>
<tr>
<td>

<a id="ssv"></a> `ssv`

</td>
<td>

`string`

</td>
<td>

" "

</td>
</tr>
<tr>
<td>

<a id="tsv"></a> `tsv`

</td>
<td>

`string`

</td>
<td>

"\t"

</td>
</tr>
</tbody>
</table>

***

### DefaultConfig

```ts
const DefaultConfig: Configuration;
```

***

### EntityFlagUpdateSpecificTargetValueEnum

```ts
const EntityFlagUpdateSpecificTargetValueEnum: {
  True: true;
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="true"></a> `True`

</td>
<td>

`true`

</td>
<td>

true

</td>
</tr>
</tbody>
</table>

***

### EnvironmentHeaderSortByColumn

```ts
const EnvironmentHeaderSortByColumn: {
  Name: "name";
  Order: "order";
};
```

The column to sort by

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="name-19"></a> `Name`

</td>
<td>

`"name"`

</td>
<td>

'name'

</td>
</tr>
<tr>
<td>

<a id="order-3"></a> `Order`

</td>
<td>

`"order"`

</td>
<td>

'order'

</td>
</tr>
</tbody>
</table>

***

### ErrorResponseErrorCodeEnum

```ts
const ErrorResponseErrorCodeEnum: {
  InvalidRequest: "invalid_request";
  NotAllowed: "not_allowed";
  NotAvailable: "not_available";
  NotFound: "not_found";
  NotPossible: "not_possible";
  Unauthenticated: "unauthenticated";
  Unauthorized: "unauthorized";
  UnknownError: "unknown_error";
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="invalidrequest"></a> `InvalidRequest`

</td>
<td>

`"invalid_request"`

</td>
<td>

'invalid\_request'

</td>
</tr>
<tr>
<td>

<a id="notallowed"></a> `NotAllowed`

</td>
<td>

`"not_allowed"`

</td>
<td>

'not\_allowed'

</td>
</tr>
<tr>
<td>

<a id="notavailable"></a> `NotAvailable`

</td>
<td>

`"not_available"`

</td>
<td>

'not\_available'

</td>
</tr>
<tr>
<td>

<a id="notfound"></a> `NotFound`

</td>
<td>

`"not_found"`

</td>
<td>

'not\_found'

</td>
</tr>
<tr>
<td>

<a id="notpossible"></a> `NotPossible`

</td>
<td>

`"not_possible"`

</td>
<td>

'not\_possible'

</td>
</tr>
<tr>
<td>

<a id="unauthenticated"></a> `Unauthenticated`

</td>
<td>

`"unauthenticated"`

</td>
<td>

'unauthenticated'

</td>
</tr>
<tr>
<td>

<a id="unauthorized"></a> `Unauthorized`

</td>
<td>

`"unauthorized"`

</td>
<td>

'unauthorized'

</td>
</tr>
<tr>
<td>

<a id="unknownerror"></a> `UnknownError`

</td>
<td>

`"unknown_error"`

</td>
<td>

'unknown\_error'

</td>
</tr>
</tbody>
</table>

***

### FlagHeaderCollectionSortByEnum

```ts
const FlagHeaderCollectionSortByEnum: {
  ArchivingChecks: "archivingChecks";
  AutoFeedbackSurveysEnabled: "autoFeedbackSurveysEnabled";
  CreatedAt: "createdAt";
  EnvironmentStatus: "environmentStatus";
  Key: "key";
  LastCheck: "lastCheck";
  LastTrack: "lastTrack";
  Name: "name";
  Owner: "owner";
  RolledOutToEveryoneAt: "rolledOutToEveryoneAt";
  Stage: "stage";
  Stale: "stale";
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="archivingchecks"></a> `ArchivingChecks`

</td>
<td>

`"archivingChecks"`

</td>
<td>

'archivingChecks'

</td>
</tr>
<tr>
<td>

<a id="autofeedbacksurveysenabled"></a> `AutoFeedbackSurveysEnabled`

</td>
<td>

`"autoFeedbackSurveysEnabled"`

</td>
<td>

'autoFeedbackSurveysEnabled'

</td>
</tr>
<tr>
<td>

<a id="createdat-3"></a> `CreatedAt`

</td>
<td>

`"createdAt"`

</td>
<td>

'createdAt'

</td>
</tr>
<tr>
<td>

<a id="environmentstatus"></a> `EnvironmentStatus`

</td>
<td>

`"environmentStatus"`

</td>
<td>

'environmentStatus'

</td>
</tr>
<tr>
<td>

<a id="key-5"></a> `Key`

</td>
<td>

`"key"`

</td>
<td>

'key'

</td>
</tr>
<tr>
<td>

<a id="lastcheck"></a> `LastCheck`

</td>
<td>

`"lastCheck"`

</td>
<td>

'lastCheck'

</td>
</tr>
<tr>
<td>

<a id="lasttrack"></a> `LastTrack`

</td>
<td>

`"lastTrack"`

</td>
<td>

'lastTrack'

</td>
</tr>
<tr>
<td>

<a id="name-20"></a> `Name`

</td>
<td>

`"name"`

</td>
<td>

'name'

</td>
</tr>
<tr>
<td>

<a id="owner-2"></a> `Owner`

</td>
<td>

`"owner"`

</td>
<td>

'owner'

</td>
</tr>
<tr>
<td>

<a id="rolledouttoeveryoneat-2"></a> `RolledOutToEveryoneAt`

</td>
<td>

`"rolledOutToEveryoneAt"`

</td>
<td>

'rolledOutToEveryoneAt'

</td>
</tr>
<tr>
<td>

<a id="stage-2"></a> `Stage`

</td>
<td>

`"stage"`

</td>
<td>

'stage'

</td>
</tr>
<tr>
<td>

<a id="stale-2"></a> `Stale`

</td>
<td>

`"stale"`

</td>
<td>

'stale'

</td>
</tr>
</tbody>
</table>

***

### FlagKeyFormat

```ts
const FlagKeyFormat: {
  CamelCase: "camelCase";
  Custom: "custom";
  KebabCaseLower: "kebabCaseLower";
  KebabCaseUpper: "kebabCaseUpper";
  PascalCase: "pascalCase";
  SnakeCaseLower: "snakeCaseLower";
  SnakeCaseUpper: "snakeCaseUpper";
};
```

The enforced key format when creating flags

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="camelcase"></a> `CamelCase`

</td>
<td>

`"camelCase"`

</td>
<td>

'camelCase'

</td>
</tr>
<tr>
<td>

<a id="custom"></a> `Custom`

</td>
<td>

`"custom"`

</td>
<td>

'custom'

</td>
</tr>
<tr>
<td>

<a id="kebabcaselower"></a> `KebabCaseLower`

</td>
<td>

`"kebabCaseLower"`

</td>
<td>

'kebabCaseLower'

</td>
</tr>
<tr>
<td>

<a id="kebabcaseupper"></a> `KebabCaseUpper`

</td>
<td>

`"kebabCaseUpper"`

</td>
<td>

'kebabCaseUpper'

</td>
</tr>
<tr>
<td>

<a id="pascalcase"></a> `PascalCase`

</td>
<td>

`"pascalCase"`

</td>
<td>

'pascalCase'

</td>
</tr>
<tr>
<td>

<a id="snakecaselower"></a> `SnakeCaseLower`

</td>
<td>

`"snakeCaseLower"`

</td>
<td>

'snakeCaseLower'

</td>
</tr>
<tr>
<td>

<a id="snakecaseupper"></a> `SnakeCaseUpper`

</td>
<td>

`"snakeCaseUpper"`

</td>
<td>

'snakeCaseUpper'

</td>
</tr>
</tbody>
</table>

***

### FlagValue

```ts
const FlagValue: {
  True: "true";
};
```

The value of the flag served to the audience.

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="true-1"></a> `True`

</td>
<td>

`"true"`

</td>
<td>

'true'

</td>
</tr>
</tbody>
</table>

***

### SegmentType

```ts
const SegmentType: {
  All: "all";
  Custom: "custom";
};
```

Segment type

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="all"></a> `All`

</td>
<td>

`"all"`

</td>
<td>

'all'

</td>
</tr>
<tr>
<td>

<a id="custom-1"></a> `Custom`

</td>
<td>

`"custom"`

</td>
<td>

'custom'

</td>
</tr>
</tbody>
</table>

***

### SortOrder

```ts
const SortOrder: {
  Asc: "asc";
  Desc: "desc";
};
```

Sort order applied to the sorting column

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="asc"></a> `Asc`

</td>
<td>

`"asc"`

</td>
<td>

'asc'

</td>
</tr>
<tr>
<td>

<a id="desc"></a> `Desc`

</td>
<td>

`"desc"`

</td>
<td>

'desc'

</td>
</tr>
</tbody>
</table>

***

### UpdateEntityFlagsBodyNotificationsEnum

```ts
const UpdateEntityFlagsBodyNotificationsEnum: {
  LinearComment: "linearComment";
  Slack: "slack";
};
```

#### Type declaration

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

<a id="linearcomment"></a> `LinearComment`

</td>
<td>

`"linearComment"`

</td>
<td>

'linearComment'

</td>
</tr>
<tr>
<td>

<a id="slack"></a> `Slack`

</td>
<td>

`"slack"`

</td>
<td>

'slack'

</td>
</tr>
</tbody>
</table>

## Functions

### AppFromJSON()

```ts
function AppFromJSON(json: any): App
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`App`](globals.md#app)

***

### AppFromJSONTyped()

```ts
function AppFromJSONTyped(json: any, ignoreDiscriminator: boolean): App
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`App`](globals.md#app)

***

### AppHeaderCollectionFromJSON()

```ts
function AppHeaderCollectionFromJSON(json: any): AppHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppHeaderCollection`](globals.md#appheadercollection)

***

### AppHeaderCollectionFromJSONTyped()

```ts
function AppHeaderCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppHeaderCollection`](globals.md#appheadercollection)

***

### AppHeaderCollectionToJSON()

```ts
function AppHeaderCollectionToJSON(json: any): AppHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppHeaderCollection`](globals.md#appheadercollection)

***

### AppHeaderCollectionToJSONTyped()

```ts
function AppHeaderCollectionToJSONTyped(value?: null | AppHeaderCollection, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`AppHeaderCollection`](globals.md#appheadercollection)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### AppHeaderFromJSON()

```ts
function AppHeaderFromJSON(json: any): AppHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppHeader`](globals.md#appheader)

***

### AppHeaderFromJSONTyped()

```ts
function AppHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppHeader`](globals.md#appheader)

***

### AppHeaderToJSON()

```ts
function AppHeaderToJSON(json: any): AppHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppHeader`](globals.md#appheader)

***

### AppHeaderToJSONTyped()

```ts
function AppHeaderToJSONTyped(value?: null | AppHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`AppHeader`](globals.md#appheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### AppToJSON()

```ts
function AppToJSON(json: any): App
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`App`](globals.md#app)

***

### AppToJSONTyped()

```ts
function AppToJSONTyped(value?: null | App, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`App`](globals.md#app)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### canConsumeForm()

```ts
function canConsumeForm(consumes: Consume[]): boolean
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

`consumes`

</td>
<td>

[`Consume`](globals.md#consume)[]

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### createAppClient()

```ts
function createAppClient(appId: string, config?: ConfigurationParameters): AppScopedApi<Api>
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

`appId`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`config`?

</td>
<td>

[`ConfigurationParameters`](globals.md#configurationparameters)

</td>
</tr>
</tbody>
</table>

#### Returns

[`AppScopedApi`](globals.md#appscopedapit)\<[`Api`](globals.md#api)\>

***

### CreateFlag200ResponseFlagFromJSON()

```ts
function CreateFlag200ResponseFlagFromJSON(json: any): CreateFlag200ResponseFlag
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlag200ResponseFlag`](globals.md#createflag200responseflag)

***

### CreateFlag200ResponseFlagFromJSONTyped()

```ts
function CreateFlag200ResponseFlagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFlag200ResponseFlag
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlag200ResponseFlag`](globals.md#createflag200responseflag)

***

### CreateFlag200ResponseFlagToJSON()

```ts
function CreateFlag200ResponseFlagToJSON(json: any): CreateFlag200ResponseFlag
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlag200ResponseFlag`](globals.md#createflag200responseflag)

***

### CreateFlag200ResponseFlagToJSONTyped()

```ts
function CreateFlag200ResponseFlagToJSONTyped(value?: 
  | null
  | CreateFlag200ResponseFlag, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

 \| `null` \| [`CreateFlag200ResponseFlag`](globals.md#createflag200responseflag)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### CreateFlag200ResponseFromJSON()

```ts
function CreateFlag200ResponseFromJSON(json: any): CreateFlag200Response
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlag200Response`](globals.md#createflag200response)

***

### CreateFlag200ResponseFromJSONTyped()

```ts
function CreateFlag200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFlag200Response
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlag200Response`](globals.md#createflag200response)

***

### CreateFlag200ResponseToJSON()

```ts
function CreateFlag200ResponseToJSON(json: any): CreateFlag200Response
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlag200Response`](globals.md#createflag200response)

***

### CreateFlag200ResponseToJSONTyped()

```ts
function CreateFlag200ResponseToJSONTyped(value?: null | CreateFlag200Response, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`CreateFlag200Response`](globals.md#createflag200response)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### CreateFlagRequestFromJSON()

```ts
function CreateFlagRequestFromJSON(json: any): CreateFlagRequest
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlagRequest`](globals.md#createflagrequest)

***

### CreateFlagRequestFromJSONTyped()

```ts
function CreateFlagRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFlagRequest
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlagRequest`](globals.md#createflagrequest)

***

### CreateFlagRequestToJSON()

```ts
function CreateFlagRequestToJSON(json: any): CreateFlagRequest
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`CreateFlagRequest`](globals.md#createflagrequest)

***

### CreateFlagRequestToJSONTyped()

```ts
function CreateFlagRequestToJSONTyped(value?: null | CreateFlagRequest, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`CreateFlagRequest`](globals.md#createflagrequest)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EntityFlagFromJSON()

```ts
function EntityFlagFromJSON(json: any): EntityFlag
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlag`](globals.md#entityflag)

***

### EntityFlagFromJSONTyped()

```ts
function EntityFlagFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityFlag
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlag`](globals.md#entityflag)

***

### EntityFlagsResponseFromJSON()

```ts
function EntityFlagsResponseFromJSON(json: any): EntityFlagsResponse
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlagsResponse`](globals.md#entityflagsresponse)

***

### EntityFlagsResponseFromJSONTyped()

```ts
function EntityFlagsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityFlagsResponse
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlagsResponse`](globals.md#entityflagsresponse)

***

### EntityFlagsResponseToJSON()

```ts
function EntityFlagsResponseToJSON(json: any): EntityFlagsResponse
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlagsResponse`](globals.md#entityflagsresponse)

***

### EntityFlagsResponseToJSONTyped()

```ts
function EntityFlagsResponseToJSONTyped(value?: null | EntityFlagsResponse, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`EntityFlagsResponse`](globals.md#entityflagsresponse)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EntityFlagToJSON()

```ts
function EntityFlagToJSON(json: any): EntityFlag
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlag`](globals.md#entityflag)

***

### EntityFlagToJSONTyped()

```ts
function EntityFlagToJSONTyped(value?: null | EntityFlag, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`EntityFlag`](globals.md#entityflag)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EntityFlagUpdateFromJSON()

```ts
function EntityFlagUpdateFromJSON(json: any): EntityFlagUpdate
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlagUpdate`](globals.md#entityflagupdate)

***

### EntityFlagUpdateFromJSONTyped()

```ts
function EntityFlagUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityFlagUpdate
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlagUpdate`](globals.md#entityflagupdate)

***

### EntityFlagUpdateToJSON()

```ts
function EntityFlagUpdateToJSON(json: any): EntityFlagUpdate
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EntityFlagUpdate`](globals.md#entityflagupdate)

***

### EntityFlagUpdateToJSONTyped()

```ts
function EntityFlagUpdateToJSONTyped(value?: null | EntityFlagUpdate, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`EntityFlagUpdate`](globals.md#entityflagupdate)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EnvironmentFromJSON()

```ts
function EnvironmentFromJSON(json: any): Environment
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Environment`](globals.md#environment)

***

### EnvironmentFromJSONTyped()

```ts
function EnvironmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Environment
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Environment`](globals.md#environment)

***

### EnvironmentHeaderCollectionFromJSON()

```ts
function EnvironmentHeaderCollectionFromJSON(json: any): EnvironmentHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)

***

### EnvironmentHeaderCollectionFromJSONTyped()

```ts
function EnvironmentHeaderCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)

***

### EnvironmentHeaderCollectionToJSON()

```ts
function EnvironmentHeaderCollectionToJSON(json: any): EnvironmentHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)

***

### EnvironmentHeaderCollectionToJSONTyped()

```ts
function EnvironmentHeaderCollectionToJSONTyped(value?: 
  | null
  | EnvironmentHeaderCollection, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

 \| `null` \| [`EnvironmentHeaderCollection`](globals.md#environmentheadercollection)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EnvironmentHeaderFromJSON()

```ts
function EnvironmentHeaderFromJSON(json: any): EnvironmentHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeader`](globals.md#environmentheader)

***

### EnvironmentHeaderFromJSONTyped()

```ts
function EnvironmentHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeader`](globals.md#environmentheader)

***

### EnvironmentHeaderSortByColumnFromJSON()

```ts
function EnvironmentHeaderSortByColumnFromJSON(json: any): EnvironmentHeaderSortByColumn
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeaderSortByColumn`](globals.md#environmentheadersortbycolumn)

***

### EnvironmentHeaderSortByColumnFromJSONTyped()

```ts
function EnvironmentHeaderSortByColumnFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentHeaderSortByColumn
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeaderSortByColumn`](globals.md#environmentheadersortbycolumn)

***

### EnvironmentHeaderSortByColumnToJSON()

```ts
function EnvironmentHeaderSortByColumnToJSON(value?: 
  | null
  | EnvironmentHeaderSortByColumn): any
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

`value`?

</td>
<td>

 \| `null` \| [`EnvironmentHeaderSortByColumn`](globals.md#environmentheadersortbycolumn)

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EnvironmentHeaderSortByColumnToJSONTyped()

```ts
function EnvironmentHeaderSortByColumnToJSONTyped(value: any, ignoreDiscriminator: boolean): EnvironmentHeaderSortByColumn
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

`value`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeaderSortByColumn`](globals.md#environmentheadersortbycolumn)

***

### EnvironmentHeaderToJSON()

```ts
function EnvironmentHeaderToJSON(json: any): EnvironmentHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentHeader`](globals.md#environmentheader)

***

### EnvironmentHeaderToJSONTyped()

```ts
function EnvironmentHeaderToJSONTyped(value?: null | EnvironmentHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`EnvironmentHeader`](globals.md#environmentheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EnvironmentSdkAccessFromJSON()

```ts
function EnvironmentSdkAccessFromJSON(json: any): EnvironmentSdkAccess
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentSdkAccess`](globals.md#environmentsdkaccess)

***

### EnvironmentSdkAccessFromJSONTyped()

```ts
function EnvironmentSdkAccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentSdkAccess
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentSdkAccess`](globals.md#environmentsdkaccess)

***

### EnvironmentSdkAccessToJSON()

```ts
function EnvironmentSdkAccessToJSON(json: any): EnvironmentSdkAccess
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`EnvironmentSdkAccess`](globals.md#environmentsdkaccess)

***

### EnvironmentSdkAccessToJSONTyped()

```ts
function EnvironmentSdkAccessToJSONTyped(value?: null | EnvironmentSdkAccess, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`EnvironmentSdkAccess`](globals.md#environmentsdkaccess)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### EnvironmentToJSON()

```ts
function EnvironmentToJSON(json: any): Environment
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`Environment`](globals.md#environment)

***

### EnvironmentToJSONTyped()

```ts
function EnvironmentToJSONTyped(value?: null | Environment, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`Environment`](globals.md#environment)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### ErrorResponseErrorFromJSON()

```ts
function ErrorResponseErrorFromJSON(json: any): ErrorResponseError
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ErrorResponseError`](globals.md#errorresponseerror)

***

### ErrorResponseErrorFromJSONTyped()

```ts
function ErrorResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponseError
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ErrorResponseError`](globals.md#errorresponseerror)

***

### ErrorResponseErrorToJSON()

```ts
function ErrorResponseErrorToJSON(json: any): ErrorResponseError
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ErrorResponseError`](globals.md#errorresponseerror)

***

### ErrorResponseErrorToJSONTyped()

```ts
function ErrorResponseErrorToJSONTyped(value?: null | ErrorResponseError, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`ErrorResponseError`](globals.md#errorresponseerror)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### ErrorResponseFromJSON()

```ts
function ErrorResponseFromJSON(json: any): ErrorResponse
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ErrorResponse`](globals.md#errorresponse)

***

### ErrorResponseFromJSONTyped()

```ts
function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ErrorResponse`](globals.md#errorresponse)

***

### ErrorResponseToJSON()

```ts
function ErrorResponseToJSON(json: any): ErrorResponse
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ErrorResponse`](globals.md#errorresponse)

***

### ErrorResponseToJSONTyped()

```ts
function ErrorResponseToJSONTyped(value?: null | ErrorResponse, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`ErrorResponse`](globals.md#errorresponse)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### exists()

```ts
function exists(json: any, key: string): boolean
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

`json`

</td>
<td>

`any`

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

#### Returns

`boolean`

***

### FlagHeaderCollectionFromJSON()

```ts
function FlagHeaderCollectionFromJSON(json: any): FlagHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagHeaderCollection`](globals.md#flagheadercollection)

***

### FlagHeaderCollectionFromJSONTyped()

```ts
function FlagHeaderCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagHeaderCollection`](globals.md#flagheadercollection)

***

### FlagHeaderCollectionToJSON()

```ts
function FlagHeaderCollectionToJSON(json: any): FlagHeaderCollection
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagHeaderCollection`](globals.md#flagheadercollection)

***

### FlagHeaderCollectionToJSONTyped()

```ts
function FlagHeaderCollectionToJSONTyped(value?: null | FlagHeaderCollection, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`FlagHeaderCollection`](globals.md#flagheadercollection)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### FlagHeaderFromJSON()

```ts
function FlagHeaderFromJSON(json: any): FlagHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagHeader`](globals.md#flagheader)

***

### FlagHeaderFromJSONTyped()

```ts
function FlagHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagHeader`](globals.md#flagheader)

***

### FlagHeaderToJSON()

```ts
function FlagHeaderToJSON(json: any): FlagHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagHeader`](globals.md#flagheader)

***

### FlagHeaderToJSONTyped()

```ts
function FlagHeaderToJSONTyped(value?: null | FlagHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`FlagHeader`](globals.md#flagheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### FlagKeyFormatFromJSON()

```ts
function FlagKeyFormatFromJSON(json: any): FlagKeyFormat
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagKeyFormat`](globals.md#flagkeyformat-2)

***

### FlagKeyFormatFromJSONTyped()

```ts
function FlagKeyFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagKeyFormat
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagKeyFormat`](globals.md#flagkeyformat-2)

***

### FlagKeyFormatToJSON()

```ts
function FlagKeyFormatToJSON(value?: null | FlagKeyFormat): any
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

`value`?

</td>
<td>

`null` \| [`FlagKeyFormat`](globals.md#flagkeyformat-2)

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### FlagKeyFormatToJSONTyped()

```ts
function FlagKeyFormatToJSONTyped(value: any, ignoreDiscriminator: boolean): FlagKeyFormat
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

`value`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagKeyFormat`](globals.md#flagkeyformat-2)

***

### FlagTargetingFromJSON()

```ts
function FlagTargetingFromJSON(json: any): FlagTargeting
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagTargeting`](globals.md#flagtargeting)

***

### FlagTargetingFromJSONTyped()

```ts
function FlagTargetingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagTargeting
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagTargeting`](globals.md#flagtargeting)

***

### FlagTargetingToJSON()

```ts
function FlagTargetingToJSON(json: any): FlagTargeting
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagTargeting`](globals.md#flagtargeting)

***

### FlagTargetingToJSONTyped()

```ts
function FlagTargetingToJSONTyped(value?: null | FlagTargeting, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`FlagTargeting`](globals.md#flagtargeting)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### FlagValueFromJSON()

```ts
function FlagValueFromJSON(json: any): FlagValue
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagValue`](globals.md#flagvalue)

***

### FlagValueFromJSONTyped()

```ts
function FlagValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagValue
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagValue`](globals.md#flagvalue)

***

### FlagValueTargetingFromJSON()

```ts
function FlagValueTargetingFromJSON(json: any): FlagValueTargeting
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagValueTargeting`](globals.md#flagvaluetargeting)

***

### FlagValueTargetingFromJSONTyped()

```ts
function FlagValueTargetingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlagValueTargeting
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagValueTargeting`](globals.md#flagvaluetargeting)

***

### FlagValueTargetingToJSON()

```ts
function FlagValueTargetingToJSON(json: any): FlagValueTargeting
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagValueTargeting`](globals.md#flagvaluetargeting)

***

### FlagValueTargetingToJSONTyped()

```ts
function FlagValueTargetingToJSONTyped(value?: null | FlagValueTargeting, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`FlagValueTargeting`](globals.md#flagvaluetargeting)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### FlagValueToJSON()

```ts
function FlagValueToJSON(value?: null | "true"): any
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

`value`?

</td>
<td>

`null` \| `"true"`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### FlagValueToJSONTyped()

```ts
function FlagValueToJSONTyped(value: any, ignoreDiscriminator: boolean): FlagValue
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

`value`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`FlagValue`](globals.md#flagvalue)

***

### instanceOfApp()

```ts
function instanceOfApp(value: object): value is App
```

Check if a given object implements the App interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is App`

***

### instanceOfAppHeader()

```ts
function instanceOfAppHeader(value: object): value is AppHeader
```

Check if a given object implements the AppHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is AppHeader`

***

### instanceOfAppHeaderCollection()

```ts
function instanceOfAppHeaderCollection(value: object): value is AppHeaderCollection
```

Check if a given object implements the AppHeaderCollection interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is AppHeaderCollection`

***

### instanceOfCreateFlag200Response()

```ts
function instanceOfCreateFlag200Response(value: object): value is CreateFlag200Response
```

Check if a given object implements the CreateFlag200Response interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is CreateFlag200Response`

***

### instanceOfCreateFlag200ResponseFlag()

```ts
function instanceOfCreateFlag200ResponseFlag(value: object): value is CreateFlag200ResponseFlag
```

Check if a given object implements the CreateFlag200ResponseFlag interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is CreateFlag200ResponseFlag`

***

### instanceOfCreateFlagRequest()

```ts
function instanceOfCreateFlagRequest(value: object): value is CreateFlagRequest
```

Check if a given object implements the CreateFlagRequest interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is CreateFlagRequest`

***

### instanceOfEntityFlag()

```ts
function instanceOfEntityFlag(value: object): value is EntityFlag
```

Check if a given object implements the EntityFlag interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is EntityFlag`

***

### instanceOfEntityFlagsResponse()

```ts
function instanceOfEntityFlagsResponse(value: object): value is EntityFlagsResponse
```

Check if a given object implements the EntityFlagsResponse interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is EntityFlagsResponse`

***

### instanceOfEntityFlagUpdate()

```ts
function instanceOfEntityFlagUpdate(value: object): value is EntityFlagUpdate
```

Check if a given object implements the EntityFlagUpdate interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is EntityFlagUpdate`

***

### instanceOfEnvironment()

```ts
function instanceOfEnvironment(value: object): value is Environment
```

Check if a given object implements the Environment interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is Environment`

***

### instanceOfEnvironmentHeader()

```ts
function instanceOfEnvironmentHeader(value: object): value is EnvironmentHeader
```

Check if a given object implements the EnvironmentHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is EnvironmentHeader`

***

### instanceOfEnvironmentHeaderCollection()

```ts
function instanceOfEnvironmentHeaderCollection(value: object): value is EnvironmentHeaderCollection
```

Check if a given object implements the EnvironmentHeaderCollection interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is EnvironmentHeaderCollection`

***

### instanceOfEnvironmentHeaderSortByColumn()

```ts
function instanceOfEnvironmentHeaderSortByColumn(value: any): boolean
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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### instanceOfEnvironmentSdkAccess()

```ts
function instanceOfEnvironmentSdkAccess(value: object): value is EnvironmentSdkAccess
```

Check if a given object implements the EnvironmentSdkAccess interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is EnvironmentSdkAccess`

***

### instanceOfErrorResponse()

```ts
function instanceOfErrorResponse(value: object): value is ErrorResponse
```

Check if a given object implements the ErrorResponse interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is ErrorResponse`

***

### instanceOfErrorResponseError()

```ts
function instanceOfErrorResponseError(value: object): value is ErrorResponseError
```

Check if a given object implements the ErrorResponseError interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is ErrorResponseError`

***

### instanceOfFlagHeader()

```ts
function instanceOfFlagHeader(value: object): value is FlagHeader
```

Check if a given object implements the FlagHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is FlagHeader`

***

### instanceOfFlagHeaderCollection()

```ts
function instanceOfFlagHeaderCollection(value: object): value is FlagHeaderCollection
```

Check if a given object implements the FlagHeaderCollection interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is FlagHeaderCollection`

***

### instanceOfFlagKeyFormat()

```ts
function instanceOfFlagKeyFormat(value: any): boolean
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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### instanceOfFlagTargeting()

```ts
function instanceOfFlagTargeting(value: object): value is FlagTargeting
```

Check if a given object implements the FlagTargeting interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is FlagTargeting`

***

### instanceOfFlagValue()

```ts
function instanceOfFlagValue(value: any): boolean
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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### instanceOfFlagValueTargeting()

```ts
function instanceOfFlagValueTargeting(value: object): value is FlagValueTargeting
```

Check if a given object implements the FlagValueTargeting interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is FlagValueTargeting`

***

### instanceOfOrgHeader()

```ts
function instanceOfOrgHeader(value: object): value is OrgHeader
```

Check if a given object implements the OrgHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is OrgHeader`

***

### instanceOfReflagUserHeader()

```ts
function instanceOfReflagUserHeader(value: object): value is ReflagUserHeader
```

Check if a given object implements the ReflagUserHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is ReflagUserHeader`

***

### instanceOfSegmentHeader()

```ts
function instanceOfSegmentHeader(value: object): value is SegmentHeader
```

Check if a given object implements the SegmentHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is SegmentHeader`

***

### instanceOfSegmentType()

```ts
function instanceOfSegmentType(value: any): boolean
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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### instanceOfSortOrder()

```ts
function instanceOfSortOrder(value: any): boolean
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

`value`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

`boolean`

***

### instanceOfStageHeader()

```ts
function instanceOfStageHeader(value: object): value is StageHeader
```

Check if a given object implements the StageHeader interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is StageHeader`

***

### instanceOfUpdateEntityFlagsBody()

```ts
function instanceOfUpdateEntityFlagsBody(value: object): value is UpdateEntityFlagsBody
```

Check if a given object implements the UpdateEntityFlagsBody interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is UpdateEntityFlagsBody`

***

### instanceOfUpdateFlagRequest()

```ts
function instanceOfUpdateFlagRequest(value: object): value is UpdateFlagRequest
```

Check if a given object implements the UpdateFlagRequest interface.

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

`value`

</td>
<td>

`object`

</td>
</tr>
</tbody>
</table>

#### Returns

`value is UpdateFlagRequest`

***

### mapValues()

```ts
function mapValues(data: any, fn: (item: any) => any): {}
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

`data`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`fn`

</td>
<td>

(`item`: `any`) => `any`

</td>
</tr>
</tbody>
</table>

#### Returns

```ts
{}
```

***

### OrgHeaderFromJSON()

```ts
function OrgHeaderFromJSON(json: any): OrgHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`OrgHeader`](globals.md#orgheader)

***

### OrgHeaderFromJSONTyped()

```ts
function OrgHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrgHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`OrgHeader`](globals.md#orgheader)

***

### OrgHeaderToJSON()

```ts
function OrgHeaderToJSON(json: any): OrgHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`OrgHeader`](globals.md#orgheader)

***

### OrgHeaderToJSONTyped()

```ts
function OrgHeaderToJSONTyped(value?: null | OrgHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`OrgHeader`](globals.md#orgheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### querystring()

```ts
function querystring(params: HTTPQuery, prefix: string): string
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`params`

</td>
<td>

[`HTTPQuery`](globals.md#httpquery)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`prefix`

</td>
<td>

`string`

</td>
<td>

`''`

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

***

### ReflagUserHeaderFromJSON()

```ts
function ReflagUserHeaderFromJSON(json: any): ReflagUserHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ReflagUserHeader`](globals.md#reflaguserheader)

***

### ReflagUserHeaderFromJSONTyped()

```ts
function ReflagUserHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReflagUserHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ReflagUserHeader`](globals.md#reflaguserheader)

***

### ReflagUserHeaderToJSON()

```ts
function ReflagUserHeaderToJSON(json: any): ReflagUserHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ReflagUserHeader`](globals.md#reflaguserheader)

***

### ReflagUserHeaderToJSONTyped()

```ts
function ReflagUserHeaderToJSONTyped(value?: null | ReflagUserHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`ReflagUserHeader`](globals.md#reflaguserheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### SegmentHeaderFromJSON()

```ts
function SegmentHeaderFromJSON(json: any): SegmentHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SegmentHeader`](globals.md#segmentheader)

***

### SegmentHeaderFromJSONTyped()

```ts
function SegmentHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SegmentHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SegmentHeader`](globals.md#segmentheader)

***

### SegmentHeaderToJSON()

```ts
function SegmentHeaderToJSON(json: any): SegmentHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SegmentHeader`](globals.md#segmentheader)

***

### SegmentHeaderToJSONTyped()

```ts
function SegmentHeaderToJSONTyped(value?: null | SegmentHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`SegmentHeader`](globals.md#segmentheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### SegmentTypeFromJSON()

```ts
function SegmentTypeFromJSON(json: any): SegmentType
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SegmentType`](globals.md#segmenttype)

***

### SegmentTypeFromJSONTyped()

```ts
function SegmentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SegmentType
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SegmentType`](globals.md#segmenttype)

***

### SegmentTypeToJSON()

```ts
function SegmentTypeToJSON(value?: null | SegmentType): any
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

`value`?

</td>
<td>

`null` \| [`SegmentType`](globals.md#segmenttype)

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### SegmentTypeToJSONTyped()

```ts
function SegmentTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): SegmentType
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

`value`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SegmentType`](globals.md#segmenttype)

***

### SortOrderFromJSON()

```ts
function SortOrderFromJSON(json: any): SortOrder
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SortOrder`](globals.md#sortorder-3)

***

### SortOrderFromJSONTyped()

```ts
function SortOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortOrder
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SortOrder`](globals.md#sortorder-3)

***

### SortOrderToJSON()

```ts
function SortOrderToJSON(value?: null | SortOrder): any
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

`value`?

</td>
<td>

`null` \| [`SortOrder`](globals.md#sortorder-3)

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### SortOrderToJSONTyped()

```ts
function SortOrderToJSONTyped(value: any, ignoreDiscriminator: boolean): SortOrder
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

`value`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`SortOrder`](globals.md#sortorder-3)

***

### StageHeaderFromJSON()

```ts
function StageHeaderFromJSON(json: any): StageHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`StageHeader`](globals.md#stageheader)

***

### StageHeaderFromJSONTyped()

```ts
function StageHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`StageHeader`](globals.md#stageheader)

***

### StageHeaderToJSON()

```ts
function StageHeaderToJSON(json: any): StageHeader
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`StageHeader`](globals.md#stageheader)

***

### StageHeaderToJSONTyped()

```ts
function StageHeaderToJSONTyped(value?: null | StageHeader, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`StageHeader`](globals.md#stageheader)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### UpdateEntityFlagsBodyFromJSON()

```ts
function UpdateEntityFlagsBodyFromJSON(json: any): UpdateEntityFlagsBody
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`UpdateEntityFlagsBody`](globals.md#updateentityflagsbody)

***

### UpdateEntityFlagsBodyFromJSONTyped()

```ts
function UpdateEntityFlagsBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEntityFlagsBody
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`UpdateEntityFlagsBody`](globals.md#updateentityflagsbody)

***

### UpdateEntityFlagsBodyToJSON()

```ts
function UpdateEntityFlagsBodyToJSON(json: any): UpdateEntityFlagsBody
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`UpdateEntityFlagsBody`](globals.md#updateentityflagsbody)

***

### UpdateEntityFlagsBodyToJSONTyped()

```ts
function UpdateEntityFlagsBodyToJSONTyped(value?: null | UpdateEntityFlagsBody, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`UpdateEntityFlagsBody`](globals.md#updateentityflagsbody)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`

***

### UpdateFlagRequestFromJSON()

```ts
function UpdateFlagRequestFromJSON(json: any): UpdateFlagRequest
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`UpdateFlagRequest`](globals.md#updateflagrequest)

***

### UpdateFlagRequestFromJSONTyped()

```ts
function UpdateFlagRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFlagRequest
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

`json`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`

</td>
<td>

`boolean`

</td>
</tr>
</tbody>
</table>

#### Returns

[`UpdateFlagRequest`](globals.md#updateflagrequest)

***

### UpdateFlagRequestToJSON()

```ts
function UpdateFlagRequestToJSON(json: any): UpdateFlagRequest
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

`json`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

#### Returns

[`UpdateFlagRequest`](globals.md#updateflagrequest)

***

### UpdateFlagRequestToJSONTyped()

```ts
function UpdateFlagRequestToJSONTyped(value?: null | UpdateFlagRequest, ignoreDiscriminator?: boolean): any
```

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`value`?

</td>
<td>

`null` \| [`UpdateFlagRequest`](globals.md#updateflagrequest)

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`ignoreDiscriminator`?

</td>
<td>

`boolean`

</td>
<td>

`false`

</td>
</tr>
</tbody>
</table>

#### Returns

`any`
