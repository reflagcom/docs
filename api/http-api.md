# HTTP API

{% hint style="info" %}
Bucket is designed for the B2B use case where a user belongs to a company.
{% endhint %}

The Bucket front-facing API is a simple JSON HTTP API which can be used both from browsers and from backends. The path is:

`https://front.bucket.co/{publishable_key}/{method}`

The API has four methods: `flags/evaluate`, `user`, `company` and `events`.

#### Content-Type

For POST requests, the API only accepts JSON so the Content-Type header must be set to `application/json`

#### Responses

The API will return `200` status code when calls are successful and `400` if there's any errors, including an invalid request body. The response body will contain detailed information on the invalid request sent which you can use to debug the request. In case of a 400 response code there's no point in retrying the request.

In rare cases, you may experience a 500 response code. In those cases you can retry the request. If you are sending events to Bucket, this can technically result in duplicate entries, but is increasingly rare.

#### Publishable Key

The publishable key is unique per Bucket environment. Look for the keys under Settings / Environment in Bucket. Include the publishable key in the URL, like so `https://front.bucket.co/{publishable_key}/{method}`

### Flags/evaluate

The `flags/evaluate` method lets you get a list of flags that are enabled given a specific _context_.&#x20;

The _context_ describes the data on rules for flags are applied to evaluate if a flag is enable or not. You must include everything in the context you need to decide whether a flag is enabled. An example of a very simple context is:

```json
{
  "company": { "id": 42 },
  "user": { "id": 99 }
}
```

The `flags/evaluate` HTTP endpoint is a `GET` request to ensure that request can be completed without the need for a CORS Preflight request. The context must be flattened and provided as query parameters. In this case: `context.company.id=42&context.user.id=99`

The full example is like so:

```http
GET https://front.bucket.co/pub_prod_Cqx4DGo1lk3Lcct5NHLjWy/flags/evaluate?context.company.id=42&context.user.id=99
```

Here's a much more realistic example of context which will let you write more advanced flag targeting rules:

```json
{
  "company": {
    "id": 101112231415,
    "name": "Acme Corp",
    "domain": "acmeinc.com",
    "plan": "enterprise",
    "monthly_spend": 99,
    "createdAt": "2024-01-01T10:00:00Z"
  },
  "user": {
    "id": 99,
    "name": "Rasmus Makwarth",
    "role": "button-pusher"
  }
}
```

{% hint style="danger" %}
Note: The Bucket UI uses the attributes provided in the `company` endpoint to determine which companies have which flags enabled. Make sure that any `company` attributes you use in the context are also provided through the `company` endpoint.&#x20;
{% endhint %}

**Response:**

```json
{
    "success": true,
    "flags": {
        "expense-management": {
            "value": true,
            "key": "expense-management"
        },
        "member-ui": {
            "value": true,
            "key": "member-ui"
        }
}
```

### User

The User method is used to track individual users in your application. This method will create a user, if it doesn't exist already. For existing users, it will update it. Use a unique identifier that won't change for `userId`, e.g. the database ID.

You can pass along attributes which will be set for the given user. Attributes on users are not useful in Bucket yet.

You'll likely call this method when a user signs into your app.

Here's an example:

<pre class="language-javascript"><code class="lang-javascript"><strong>POST https://front.bucket.co/pub_prod_Cqx4DGo1lk3Lcct5NHLjWy/user
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

| field      | required |     Type |
| ---------- | :------: | -------: |
| userId     | Required |   String |
| attributes | Optional |   Object |
| timestamp  | Optional | ISO 8601 |

### Company

The Company method is used to track companies (organizations) in your B2B application. Use a unique identifier that won't change for `companyId`, e.g. the database ID.

You can associate a user to a company by providing `userId`. This is important as most features in Bucket will look at company-level data. In other words, if a user isn't associated with a company, the users' events will not be included in most of the results. The "Tracking" tab in the Bucket UI will let you know if you have unassociated events.

Just as with the `user` call, you can send attributes to be associated with that company. In addition to traditional user tracking based on events sent, you can also track feature usage based on attributes with Bucket. For example, if you set `hasSlackEnabled: true` on specific companies, you can create an "attribute based Feature" in the Bucket UI to track which companies have slack enabled.

You're also likely to call this method when a user signs in to ensure that the user is associated with a company.

```
POST https://front.bucket.co/pub_prod_Cqx4DGo1lk3Lcct5NHLjWy/company
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

| field      | required |            Type |
| ---------- | :------: | --------------: |
| companyId  | Required |          String |
| attributes | Optional |          Object |
| timestamp  | Optional | ISO 8601 String |
| userId     | Optional |          String |

### Event

Events are used to track user interactions within your application. We recommend tracking a handful of _key features_ and features you're currently working on.

To track an event, call this method when users interact with a feature.

```
POST https://front.bucket.co/pub_prod_Cqx4DGo1lk3Lcct5NHLjWy/event
{
  "event": "Sent message",
  "userId": 1234567890,
  "attributes": {
    "position": "popover",
    "version": 3
  },

}
```

| field      | required |     Type |
| ---------- | :------: | -------: |
| event      | Required |   String |
| userId     | Required |   String |
| attributes | Optional |   Object |
| timestamp  | Optional | ISO 8601 |

### Feedback

You can submit qualitative feedback related to a specific feature in order to pair your quantitative metrics with qualitative insigths. You can collect either a 1-5 satisfaction score or a comment or both.

At least one of the optional fields `score` or `comment` must be submitted

```
POST https://front.bucket.co/pub_prod_Cqx4DGo1lk3Lcct5NHLjWy/feedback
{

  "featureId": "my_feature_id",
  "userId": 1234567890,
  "companyId": 101112231415,
  "score": 4,
  "comment": "It's pretty nice, but I expect slightly more to be fully satisfied"
}
```

| field     | required |         Type |
| --------- | :------: | -----------: |
| featureId | Required |       String |
| userId    | Required |       String |
| companyId | Optional |       String |
| score     | Optional | Number (1-5) |
| comment   | Optional |       String |
