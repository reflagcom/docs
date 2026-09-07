---
description: Target users and companies by roles, permissions, tags, and other lists.
---

# Array attributes

Use arrays for lists such as user roles, company permissions, or event tags. You can send arrays in user, company, event, and `other` context attributes.

## Sending arrays

Send a JSON array, not a string:

```json
{
  "userId": "user-123",
  "attributes": {
    "roles": ["admin", "editor"]
  }
}
```

Send this body to [`POST /user`](../api/public-api/README.md#post-user). The same attribute format works with `POST /company`, `POST /event`, bulk requests, and Segment traits and properties.

For remote flag checks, send arrays using [`contextJson`](../api/public-api/README.md#get-featuresevaluated). If you use an SDK, choose a version that can send arrays in context. Older versions may turn an array into separate fields such as `user.roles.0` and `user.roles.1`.

## Targeting with arrays

For `user.roles: ["admin", "editor"]`, add an access condition on **User attribute → roles**. Choose **contains** and enter `admin` to match users whose roles include `admin`. Choose **IS ANY OF** to check for several roles at once.

| Operator | When it matches | Example |
| --- | --- | --- |
| IS (`IS`) | The array has just one item, equal to the value you chose. | `["admin"]` matches `IS admin`; `["admin", "editor"]` does not. |
| IS NOT (`IS_NOT`) | The array is empty, has more than one item, or its only item differs from the value you chose. | `["admin", "editor"]` and `[]` match `IS NOT admin`. |
| contains (`CONTAINS`) | The array includes the value you chose. | `["admin", "editor"]` contains `admin`, but not `adm`. |
| does not contain (`NOT_CONTAINS`) | The array does not include the value you chose. | `["admin", "editor"]` does not contain `owner`. |
| IS ANY OF (`ANY_OF`) | The array includes at least one of the values you chose. | `["admin", "editor"]` matches `IS ANY OF [admin, owner]`. |
| IS NOT ANY OF (`NOT_ANY_OF`) | The array includes none of the values you chose. | `["admin", "editor"]` matches `IS NOT ANY OF [owner, guest]`. |
| IS SET (`SET`) | The array has at least one item. | `["admin"]` is set; `[]` is not. |
| IS NOT SET (`NOT_SET`) | The array is empty. | `[]` is not set. |

Array checks compare whole values and treat uppercase and lowercase letters as different. For example, `["admin"]` does not contain `adm` or `Admin`.

Use one comparison value with `IS`, `IS_NOT`, `CONTAINS`, or `NOT_CONTAINS`. Use a list with `ANY_OF` or `NOT_ANY_OF`. `ANY_OF` needs only one match, not every value in the list.

The order of items does not matter. Repeated items matter only for `IS` and `IS_NOT`: `["admin", "admin"]` fails `IS admin` because it has two items.

For flag access, `CONTAINS` on a single string checks for part of the text and ignores letter case. For example, `"SuperAdmin" CONTAINS "admin"` is true, but `["SuperAdmin"] CONTAINS "admin"` is false.

You can also use array checks in company segments and event filters.

### Empty arrays and missing fields

For `[]`, `IS`, `CONTAINS`, and `ANY_OF` are false. `IS_NOT`, `NOT_CONTAINS`, and `NOT_ANY_OF` are true.

When checking flag access, a missing field is different from an empty array. `SET` is false for a missing field; `NOT_SET` is true. If Reflag checks a missing field with any other operator, that rule does not match.

### Checks that do not support arrays

Numeric and date operators, plus `IS_TRUE` and `IS_FALSE`, do not work with arrays. Use an ID, such as `company.id`, rather than an array for percentage rollouts.

{% hint style="warning" %}
If Reflag checks an array with an unsupported operator in a flag access rule, the whole rule does not match. Adding `NOT` does not turn that error into a match. Other rules can still match, and conditions that Reflag skips do not cause errors.
{% endhint %}

## How Reflag reads array items

* Strings stay as they are. Numbers and true/false values become strings: `[1, true]` matches the rule values `"1"` and `"true"`.
* `null` becomes an empty string. `[null]` still has one item, so it is `SET`.
* Objects and arrays inside an array become JSON strings without extra spaces. For example, `[{"level":3}, ["a","b"]]` becomes `["{\"level\":3}", "[\"a\",\"b\"]"]`. Reflag treats each of these strings as one value. You cannot target properties or items inside them.
* An array stays one attribute. Target `user.roles`, not `user.roles.0`.
* A string such as `"[\"admin\"]"` in an evaluation request stays a string, not an array. Do not call `JSON.stringify()` on each array attribute before sending it.

Remote evaluation allows one object level within an attribute, such as `user.profile.roles`. A path such as `user.profile.settings.roles` is too deep. This limit does not apply to objects inside arrays, which are treated as whole values.

## Updating and viewing arrays

Sending an updated array replaces the whole list. It does not add to the old list or merge the two. To clear a list, send `[]`.

Reflag stores the array after converting its items as described above. The app and some API responses show arrays as JSON text, such as `["admin","editor"]`. They still work as arrays in targeting rules.

## Limits and ignored keys

The default storage limits for an array are:

* 1,000 items.
* 2,000 characters after converting the items and writing the array as JSON, including brackets and quotes.

If an array exceeds either limit, Reflag replaces the whole value with the string `"[TRUNCATED]"`. It does not keep part of the list. The server may use different limits. These storage limits are separate from the size limit for remote evaluation requests.

Reflag ignores attribute keys named `__proto__`, `constructor`, or `prototype`. This also applies inside objects, in dotted names such as `profile.constructor`, and after removing null characters (`\u0000`) from names. Other attributes are still accepted.
