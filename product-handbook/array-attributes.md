---
description: Target users and companies by roles, permissions, tags, and other lists.
---

# Array attributes

Custom attributes can contain arrays as well as scalar values. Use arrays for lists such as user roles, company entitlements, or event tags. Arrays are supported in user, company, event, and `other` evaluation-context attributes.

## Sending arrays

Send a JSON array, not a JSON-encoded string:

```json
{
  "userId": "user-123",
  "attributes": {
    "roles": ["admin", "editor"]
  }
}
```

Send this body to [`POST /user`](../api/public-api/README.md#post-user). The same attribute format works with `POST /company`, `POST /event`, bulk requests, and Segment traits/properties.

For remote flag evaluation, send arrays using [`contextJson`](../api/public-api/README.md#get-featuresevaluated). If using an SDK, use a version that supports array-valued context transport; older clients may flatten arrays into indexed fields instead.

## Targeting with arrays

For `user.roles: ["admin", "editor"]`, create an access condition on **User attribute → roles**. Choose **contains** and enter `admin` to match users whose roles include `admin`. Choose **IS ANY OF** when you want to match any of several roles.

| Operator | Array behavior | Example |
| --- | --- | --- |
| IS (`IS`) | Matches if the array has exactly one element and it equals the specified value. | `["admin"]` is `admin`; `["admin", "editor"]` is not. |
| IS NOT (`IS_NOT`) | Matches any other present array. | `["admin", "editor"]` and `[]` are not `admin`. |
| contains (`CONTAINS`) | Matches if the array includes the specified value. | `["admin", "editor"]` contains `admin`, but not `adm`. |
| does not contain (`NOT_CONTAINS`) | Matches if the array does not include the specified value. | `["admin", "editor"]` does not contain `owner`. |
| IS ANY OF (`ANY_OF`) | Matches if the array includes at least one of the specified values. | `["admin", "editor"]` matches `admin` or `owner`. |
| IS NOT ANY OF (`NOT_ANY_OF`) | Matches if the array includes none of the specified values. | `["admin", "editor"]` does not match a condition excluding `admin`. |
| IS SET (`SET`) | Matches a non-empty array. | `["admin"]` is set; `[]` is not. |
| IS NOT SET (`NOT_SET`) | Matches an empty array. | `[]` is not set. |

Matching compares whole values, not substrings, and is case-sensitive. Array order and duplicate elements do not affect membership matching. `IS`, `IS_NOT`, `CONTAINS`, and `NOT_CONTAINS` take one comparison value. Unlike membership checks, `IS` also requires the array to have exactly one element: `["admin", "admin"] IS "admin"` is false. `ANY_OF` and `NOT_ANY_OF` take a list; `ANY_OF` requires only one overlap, not all configured values.

For an empty array, `IS`, `CONTAINS`, and `ANY_OF` are false, while `IS_NOT`, `NOT_CONTAINS`, and `NOT_ANY_OF` are true. A missing field is different from an empty array: use `SET` or `NOT_SET` to test presence. Other operators on a missing evaluation-context field cause the targeting rule not to match.

Scalar behavior is unchanged: `ANY_OF` still checks whether a single scalar value is among the configured values. For flag evaluation, `CONTAINS` on a scalar string remains a case-insensitive substring check, so `"SuperAdmin" CONTAINS "admin"` is true. In contrast, `["SuperAdmin"] CONTAINS "admin"` is false.

{% hint style="warning" %}
Use `CONTAINS` or `ANY_OF` to test array membership. Use `IS` only when the array must contain exactly one matching element. Numeric, date, and boolean operators do not support array-valued attributes. Arrays also cannot be used as percentage-rollout identifiers; use a scalar such as `company.id`.

During flag evaluation, encountering an unsupported array operation makes that entire targeting rule fail to match, even inside a negated condition. Other targeting rules can still match. Conditions skipped by boolean short-circuiting do not produce errors.
{% endhint %}

These membership operators also work in company segments and event-attribute filters.

## Values and nesting

* String elements remain strings. Numbers and booleans are converted to strings: `[1, true]` matches configured values `1` and `true`.
* A `null` element becomes an empty string. `[null]` is still a non-empty array and therefore is set.
* Objects and nested arrays inside an array become compact JSON strings. For example, `[{"level":3}, ["a","b"]]` becomes `["{\"level\":3}", "[\"a\",\"b\"]"]`. They are opaque values: targeting inside their properties or array positions is not supported.
* Arrays remain single attributes. Target `user.roles`, not `user.roles.0`.
* In an evaluation request, a string such as `"[\"admin\"]"` remains a scalar string, not an array. Do not call `JSON.stringify()` on individual array attributes before sending them.

Remote evaluation permits one object level within an attribute, for example `user.profile.roles`. Deeper object nesting outside arrays is rejected.

## Storage and display

Updating an array replaces the whole attribute; it does not append or merge elements. To clear a list, send `[]`.

Ingest stores arrays natively after normalizing their elements. User/company attribute views and existing scalar-valued API responses may display them as compact JSON text, such as `["admin","editor"]`. This display format does not change their targeting behavior.

Oversized stored arrays are replaced entirely with the scalar string `"[TRUNCATED]"`, rather than keeping a partial list. The default limits are 1,000 elements and 2,000 characters in the normalized serialized array; deployments may configure a different serialized-value limit. These storage limits are separate from remote evaluation's request-size limit.

Ingest silently skips reserved keys `__proto__`, `constructor`, and `prototype`, including nested keys, dotted path segments, and variants containing null bytes. Other attributes are accepted normally.
