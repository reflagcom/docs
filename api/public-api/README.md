---
description: Introduction to Reflag Public API
---

# Public API

## What is the Public API?

Our public API utilizes JSON over HTTP, allowing both browsers and backend services to access flag data and share information, including companies, users, and events.

## Authentication

To start, you need to obtain either a [_publishable_ or _secret_ SDK key](../api-access.md) from within your Reflag app settings.

Publishable keys can be either passed in the `Authorization` header using the `bearer` scheme, or as a query parameter when calling our Public API. Secret keys, on the other hand, can only be passed in the  `Authorization` header:

```
// using headers
Authorization: Bearer <secret_or_publishable_key>

// using query argument
GET /features/enabled?publishableKey=<publishable_key>
```

## Global Infrastructure

The Public API currently resides at: `https://front.reflag.com/` and `https://front-eu.reflag.com`&#x20;

Requests to the front-facing API are automatically routed to a data center near you and should thus have a relatively low latency regardless of where your customers are located.

{% hint style="info" %}
Contact us if your customers often experience latency over `100ms`. We're happy to help by establishing a closer point of presence.
{% endhint %}

{% hint style="warning" %}
Use `https://front-eu.reflag.com` to ensure your requests are processed by an EU-based server, addressing regulatory concerns.
{% endhint %}

## API Endpoints

This section provides a streamlined overview of the API endpoints available through Reflag. Each endpoint is listed with its requirement for either a publishable or secret key, and a brief description of its functionality.

<table data-full-width="false"><thead><tr><th width="266">Endpoint</th><th width="149" data-type="checkbox">Publishable Key</th><th width="121" data-type="checkbox">Secret key</th><th>Description</th></tr></thead><tbody><tr><td><code>GET /features</code></td><td>false</td><td>true</td><td>Retrieve <em>all</em> features with their respective access rules</td></tr><tr><td><code>GET /features/evaluated</code></td><td>true</td><td>true</td><td>Retrieve features that are evaluated for the provided user/company</td></tr><tr><td><code>GET /features/enabled</code></td><td>true</td><td>true</td><td>Retrieve features that are enabled for the provided user/company</td></tr><tr><td><code>POST /features/events</code></td><td>true</td><td>true</td><td>Send events related to feature access</td></tr><tr><td><code>POST /user</code></td><td>true</td><td>true</td><td>Update user in Reflag</td></tr><tr><td><code>POST /company</code></td><td>true</td><td>true</td><td>Update company in Reflag</td></tr><tr><td><code>POST /event</code></td><td>true</td><td>true</td><td>Send events related to feature usage or user actions</td></tr><tr><td><code>POST /bulk</code></td><td>true</td><td>true</td><td>Send multiple calls in bulk.</td></tr></tbody></table>

{% hint style="info" %}
To successfully make a POST request, ensure that the API receives data in JSON format. Set the `Content-Type` header to `application/json` for proper processing.
{% endhint %}

### `GET /features`

This endpoint provides a complete list of flags along with their targeting rules. It's particularly useful for backend SDKs that need to retrieve and evaluate these rules locally. This approach enables determining which flags to activate for a specific user or company, eliminating the need to repeatedly call the `features/enabled` endpoint for each user or company.

#### Example

{% code title="Request" %}
```http
GET /features
Authorization: Bearer <secret_key>
```
{% endcode %}

{% code title="Response" %}
```json
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
{% endcode %}

### `GET /features/evaluated`

This endpoint retrieves a list of flag values evaluated for a particular user or company.

{% hint style="info" %}
The endpoint is a `GET` request to ensure that the request can be completed without a `CORS Preflight` request to reduce latency.
{% endhint %}

The context must be flattened and provided as query parameters. For instance, given the following nested object:

```typescript
{
    company: {
        id: 42,
    },
    user: {
        id: 99,
    },
}
```

It needs to be flattened out into the following form: `context.company.id=42&context.user.id=99` .

#### Example

<pre class="language-http" data-title="Request" data-overflow="wrap"><code class="lang-http"><strong>GET https://front.reflag.com/features/enabled?context.company.id=42&#x26;context.user.id=99&#x26;publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
</strong></code></pre>

{% code title="Response" %}
```json
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
```
{% endcode %}

{% hint style="danger" %}
Reflag utilizes attributes from the `company` endpoint to identify which features are enabled for specific companies. Ensure all `company` attributes referenced in the `context` are also provided through the `company` endpoint.
{% endhint %}

### `GET /features/enabled`

This endpoint is similar to `features/evaluated` but only includes flags that have been evaluated as `true`.

### `POST /features/events`

This endpoint is designed to relay flag "check" events for various functions within the Reflag. Check events automatically generated by Reflag SDKs when user code checks if a specific flag is activated.

#### Example

<pre class="language-http" data-title="Request" data-overflow="wrap"><code class="lang-http"><strong>POST https://front.reflag.com/features/events?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
</strong><strong>Content-Type: application/json
</strong><strong>
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
</code></pre>

### `POST /user`

#### User Endpoint Documentation

This endpoint is designed to track individual users within your application. It will create a new user if one doesn't exist or update existing users if their IDs were previously recorded.

* **Unique ID**: Use a stable unique identifier, such as a database ID or a stable hash, to reference users.
* **User Attributes**: You can include additional attributes for the user.

{% hint style="info" %}
If a user isn't associated with a company, their events will not be taken into account by Reflag in certain situations (such as [Automatic Feedback Surveys](../../product-handbook/launch-monitor/automated-feedback-surveys.md)). See the `POST /company` endpoint for details.
{% endhint %}

#### Expected Body

<table><thead><tr><th width="377">Field</th><th width="126" data-type="checkbox">Required</th><th>Type</th></tr></thead><tbody><tr><td>userId</td><td>true</td><td>String</td></tr><tr><td>attributes</td><td>false</td><td>Object</td></tr><tr><td>timestamp</td><td>false</td><td>ISO 8601</td></tr></tbody></table>

#### Example

<pre class="language-http" data-title="Request" data-overflow="wrap"><code class="lang-http"><strong>POST https://front.reflag.com/user?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
</strong><strong>Content-Type: application/json
</strong><strong>
</strong><strong>{
</strong>  "userId": 1234567890,
  "attributes": {
    "name": "Rasmus Makwarth",
    "custom_property": true,
    "some_number": 12,
    "role": "button-pusher"
  }
}
</code></pre>

### `POST /company`

This endpoint is designed to track individual companies _(organizations)_ within your application. It will create a new company if one doesn't exist, or update existing companies if their IDs were previously recorded.

* **Unique ID**: Use a stable unique identifier, such as a database ID or a stable hash, to reference companies.
* **Company Attributes**: You can include additional attributes for the company.
* **User ID**:  You can associate a user with a company by providing the `userId`. This is important as flags in Reflag look at company-level data.

#### Expected Body

<table><thead><tr><th width="358">Field</th><th width="133" data-type="checkbox">Required</th><th>Type</th></tr></thead><tbody><tr><td>companyId</td><td>true</td><td>String</td></tr><tr><td>attributes</td><td>false</td><td>Object</td></tr><tr><td>timestamp</td><td>false</td><td>ISO 8601 String</td></tr><tr><td>userId</td><td>false</td><td>String</td></tr></tbody></table>

#### Example

To monitor which companies have Slack enabled, set `has_slack_enabled: true` for the desired companies. Then, create a flag in Reflag that uses  `has_slack_enabled` attribute in its targeting rules.

{% code title="Request" overflow="wrap" %}
```http
POST https://front.reflag.com/company?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
Content-Type: application/json

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
{% endcode %}

### `POST /event`

In your application, events help you monitor user interactions. It's recommended to focus on a few essential features and those under development. To track an event, invoke this method during user interaction.

In general, event names match the keys associated with your flags, allowing Reflag to align these events with the specific flag guarding the triggered code. However, when needed, you can utilize custom events for more tailored workflows.

#### Request Body

<table><thead><tr><th width="422">Field</th><th width="141.5" data-type="checkbox">Required</th><th>Type</th></tr></thead><tbody><tr><td>event</td><td>true</td><td>String</td></tr><tr><td>userId</td><td>true</td><td>String</td></tr><tr><td>companyId</td><td>false</td><td>String</td></tr><tr><td>attributes</td><td>false</td><td>Object</td></tr><tr><td>timestamp</td><td>false</td><td>ISO 8601</td></tr></tbody></table>

#### Example

{% code title="Request" overflow="wrap" %}
```http
POST https://front.reflag.com/event?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
Content-Type: application/json

{
  "event": "Sent message",
  "userId": 1234567890,
  "attributes": {
    "position": "popover",
    "version": 3
  },
}
```
{% endcode %}

### `POST Feedback`

Submit qualitative feedback on a specific feature to complement your quantitative metrics. Collect a 1-5 satisfaction score, qualitative feedback, or both.

#### Request Body

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Type</th></tr></thead><tbody><tr><td>featureId</td><td>true</td><td>String</td></tr><tr><td>userId</td><td>true</td><td>String</td></tr><tr><td>companyId</td><td>false</td><td>String</td></tr><tr><td>score</td><td>false</td><td>Number (1-5)</td></tr><tr><td>comment</td><td>false</td><td>String</td></tr></tbody></table>

{% hint style="info" %}
Submit at least one of the optional fields: `score` or `comment`. Feedback is invalid if neither of the two is provided.
{% endhint %}

#### Example

{% code title="Request" overflow="wrap" %}
```http
POST https://front.reflag.com/feedback?publishableKey=pub_prod_Cqx4DGo1lk3Lcct5NHLjWy
Content-Type: application/json

{
  "key": "flag_key",
  "userId": 1234567890,
  "companyId": 101112231415,
  "score": 4,
  "comment": "It's pretty nice, but I expect slightly more to be fully satisfied"
}
```
{% endcode %}

## Responses

The API returns a `200` status code for successful calls and a `400` status code for errors, including invalid request bodies.

{% hint style="info" %}
When you encounter a `400` response code, it indicates an invalid request. The response body includes detailed information useful for debugging. Retry attempts are ineffective without troubleshooting first.
{% endhint %}

A `403` response indicates that the provided publishable or secret keys are invalid or not allowed with this endpoint.

If you encounter a `500` status code, retry the request. Sending events to Reflag might result in duplicate entries, but this is rare.

## Further Documentation <a href="#install-the-sdk" id="install-the-sdk"></a>

For a comprehensive overview of the available Public API endpoints, refer to the [API Reference](public-api-reference.md) section.
