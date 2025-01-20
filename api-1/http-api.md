# Introduction

## What is the HTTP API?

Our front-facing API is a simple JSON HTTP API that can be used from browsers and backend services.&#x20;

## Authentication

Authentication happens by way of either a _publishable key_ or a _secret key_.  Publishable keys and secret keys are unique for each Bucket environment. You can find the keys in the `Settings`  tab under `Environments`.

Publishable keys are meant to be used in clients where your code is public in some form, for example browser or mobile applications. The secret key should stay secret and only be used on your backend services.

Secret keys can be provided to the API in the `Authorization` header as:

`Authorization: Bearer <key>`

Publishable keys can be either provided in the `Authorization` header similar to secret keys or simply as a query parameter:

`GET /features/enabled?publishableKey=<key>`

## Global infrastructure

The HTTP API resides at: `https://front.bucket.co/`

Request to the front-facing API are automatically routed to a datacenter near you and should thus have a relative low latency regardless of where your customers are. Get in touch if you have many customers who are experiencing >100ms latency and we'd be happy to look into setting up a point of presence closer to you.

Use `https://front-eu.bucket.co` if you want to avoid your requests being served by a non-EU server due to regulatory concerns.&#x20;

## API Endpoints

<table><thead><tr><th width="266">Endpoint</th><th width="149" data-type="checkbox">Publishable Key</th><th width="121" data-type="checkbox">Secret key</th><th>Description</th></tr></thead><tbody><tr><td><code>GET /features</code></td><td>false</td><td>true</td><td>Retrieve <em>all</em> features with their respective access rules</td></tr><tr><td><code>GET /features/enabled</code></td><td>true</td><td>true</td><td>Retrieve features that are enabled for the provided user/company</td></tr><tr><td><code>POST /features/events</code></td><td>true</td><td>true</td><td>Send events related to feature access</td></tr><tr><td><code>POST /user</code></td><td>true</td><td>true</td><td>Update user in Bucket</td></tr><tr><td><code>POST /company</code></td><td>true</td><td>true</td><td>Update company in Bucket</td></tr><tr><td><code>POST /event</code></td><td>true</td><td>true</td><td>Send events related to feature usage or user actions</td></tr><tr><td><code>POST /bulk</code></td><td>true</td><td>true</td><td>Send multiple calls in bulk.</td></tr></tbody></table>

Note: For POST requests, the API only accepts JSON. The Content-Type header must be set to `application/json`.

### `GET /features`

This endpoint lets you get the full list of features along with their access rules. The endpoint is useful for backend SDKs to pull the access rules and evaluate them locally to determine which features should be enabled for a giver user/company instead of using the `features/enabled` endpoint for each user/company.

```http
GET /features
Authorization: Bearer <secretKey>

{
  "success": true,
  "features": [
    {
      "key": "huddle",
      "targeting": {
        "version": 42,
        "rules": [
          {
            "filter": {
              "type": "group",
              "operator": "and",
              "filters": [
                {
                  "type": "context",
                  "field": "company.id",
                  "operator": "IS",
                  "values": ["acme_inc"],
                },
                {
                  "type": "rolloutPercentage",
                  "partialRolloutAttribute": "company.id",
                  "partialRolloutThreshold": 100000
                }
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### `GET /features/enabled`

The `features/enabled` endpoint lets you get a list of features that are enabled for a specific _user/company_.&#x20;

#### Example

The `feature/enabled` HTTP endpoint is a `GET` request to ensure that the request can be completed without a `CORS Preflight` request to reduce latency.

The context must be flattened and provided as query parameters.

#### Example

&#x20;`context.company.id=42&context.user.id=99`

<pre class="language-http"><code class="lang-http"><strong>GET https://front.bucket.co/features/enabled?context.company.id=42&#x26;context.user.id=99&#x26;publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
</strong>
{
  "success": true,
  "features": {
    "huddles": {
      "isEnabled": true,
      "key": "huddles",
      "targetingVersion": 42
    }
  }
}
</code></pre>

#### Second Example

This is a more realistic example of `context` that lets you write advanced feature access rules.

{% hint style="danger" %}
Note: The Bucket UI uses the attributes provided in the `company` endpoint to determine which companies have which features enabled. Ensure any `company` attributes used in the `context` are also provided through the `company` endpoint.&#x20;
{% endhint %}

### `POST /features/events`

The `/features/events` endpoint is used to send "evaluate" and "check" events. These events are used for various purposes in the Bucket UI. An evaluation event should be emitted when an access rule is evaluated. This happens automatically for the `/features/enabled` endpoint. A "check" event should be generated whenever code checks for whether a specific feature is enabled.

<pre class="language-http"><code class="lang-http"><strong>POST https://front.bucket.co/features/events?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
</strong><strong>{
</strong>  "action": "evaluate",
  "key": "feature1",
  "targetingVersion": 42,
  "evalContext": {
    "user": { "id": "john_doe" }, "company": {"id": "acme_inc"} 
  },
  "evalResult": false,
  "evalRuleResults": [false, false],
  "evalMissingFields": ["f1"],
}
  
{
  "success": true,
}
</code></pre>

### `POST /user`

The `user` endpoint is used to track individual users in your application. This method will create a user if it doesn't exist already. For existing users, it will update it.&#x20;

`userId` should use a unique identifier that won't change, like a database ID.

You can pass along attributes that will be set for the given user.  User attributes are not useful in Bucket at this time.

#### Example

<pre class="language-javascript"><code class="lang-javascript"><strong>POST https://front.bucket.co/user?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
</strong>{
  "userId": 1234567890,
  "attributes": {
    "name": "Rasmus Makwarth",
    "custom_property": true,
    "some_number": 12,
    "role": "button-pusher"
  }
}
</code></pre>

| Field      | Required | Type     |
| ---------- | -------- | -------- |
| userId     | Required | String   |
| attributes | Optional | Object   |
| timestamp  | Optional | ISO 8601 |

### `POST /company`

The `Company` method is used to track companies (organizations) in your B2B application.&#x20;

`companyId` should use a unique identifier that won't change, like a database ID.

You can associate a user with a company by providing the `userId`. This is important as features in Bucket look at company-level data.&#x20;

In other words, if a user isn't associated with a company, their events will not be included.&#x20;

The [`Tracking`](../product-handbook/product-overview.md#tracking) tab will let you know if you have unassociated events.

You can send attributes to be associated with a company. In addition to traditional event-based user tracking, you can track feature usage based on attributes.&#x20;

#### Example

If you set `hasSlackEnabled: true` for specific companies, you can create an `Attribute-based feature` in Bucket to track which companies have Slack enabled.

You're also likely to call this method when a user signs in to ensure they are associated with a company.

```http
POST https://front.bucket.co/company?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
{
  "companyId": 101112231415,
  "attributes": {
    "name": "Acme Corp",
    "domain": "acmeinc.com",
    "plan": "enterprise",
    "monthly_spend": 99,
    "createdAt": "2024-01-01T10:00:00Z"
  },
  "userId": 1234567890
}
```

| field      | required | Type            |
| ---------- | -------- | --------------- |
| companyId  | Required | String          |
| attributes | Optional | Object          |
| timestamp  | Optional | ISO 8601 String |
| userId     | Optional | String          |

### `POST /event`

Events are used to track user interactions within your application. We recommend tracking a handful of key features and features being currently worked on.

To track an `event`, call this method when users interact with a feature.

```
POST https://front.bucket.co/event?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
{
  "event": "Sent message",
  "userId": 1234567890,
  "attributes": {
    "position": "popover",
    "version": 3
  },

}
```

| field      | required | Type     |
| ---------- | -------- | -------- |
| event      | Required | String   |
| userId     | Required | String   |
| attributes | Optional | Object   |
| timestamp  | Optional | ISO 8601 |

## Feedback

You can submit qualitative feedback related to a specific feature to pair your quantitative metrics with qualitative insights.&#x20;

You can collect a 1-5 satisfaction score, qualitative feedback, or both.

At least one of the optional fields, `score` or `comment`, must be submitted.

```
POST https://front.bucket.co/feedback?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
{
  "featureId": "my_feature_id",
  "userId": 1234567890,
  "companyId": 101112231415,
  "score": 4,
  "comment": "It's pretty nice, but I expect slightly more to be fully satisfied"
}
```

| field     | required | Type         |
| --------- | -------- | ------------ |
| featureId | Required | String       |
| userId    | Required | String       |
| companyId | Optional | String       |
| score     | Optional | Number (1-5) |
| comment   | Optional | String       |

Note: You can find the `featureId` in under "Settings" for a given feature.

## Responses

The API will return a `200` status code when calls are successful and a `400` if there are errors, including an invalid request body.&#x20;

The response body will contain detailed information on the invalid request which can be used to debug. If you receive a 400 response code, there's no point in retrying without first debugging.

You may receive a `500` status code. If so, you can retry the request. If you send events to Bucket, this can technically result in duplicate entries but this is increasingly rare.
