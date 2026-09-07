# Targeting rules

### Definition

Targeting rules are entities used in Reflag to describe the target audience of a given [feature](feature.md). The target audience refers to the users that can interact with the feature within your application. Additionally, each targeting rule contains a value that is used for the target audience.

### Filters

Targeting rules are essentially a collection [filters](filter.md) that are matched against a specific evaluation context. The first rule with a filter matching the context is selected, and its value used as result. In the case of feature access it can either be `true` , indicating that the feature is accessible. If no rules match the context, a value of `false` is used — feature not accessible.

### Evaluation context

The evaluation context refers simply to a collection of **key** — **value** pairs that are passed to the rules' filters. Reflag expects the evaluation context to contains the following data:

* User's `ID` as a minimum,&#x20;
* Any other [user attributes](user.md#attributes) that might be used by the filters in the rules,
* Company's `ID` is necessary in the vast majority of cases, though it's not mandatory,
* Any other [company attributes](company.md#attributes) that might be used by the filters in the rules,
* A collection of "_**other**_" attributes that can be used by the feature access targeting rules.

The exact structure of the data will vary by the SDK in use. Custom attributes can also be [arrays](../array-attributes.md), such as `user.roles: ["admin", "editor"]`. `CONTAINS` matches if the array includes the specified value; `NOT_CONTAINS` matches if it does not. `ANY_OF` matches if the array includes at least one of the specified values; `NOT_ANY_OF` matches if it includes none of them. `IS` matches only if the array has exactly one element equal to the specified value; `IS_NOT` matches all other present arrays. Use `SET` and `NOT_SET` for empty/non-empty checks. For example, `user.roles CONTAINS ["admin"]` matches `["admin", "editor"]`. `user.roles ANY_OF ["admin", "owner"]` matches if either value is present. Array membership compares whole values and is case-sensitive; `CONTAINS` on a scalar string retains case-insensitive substring matching.

### Missing context fields

During the evaluation of targeting rules against a context it might happen that context is missing some details that the rules require. In such cases, those rules are discarded from evaluation as it would be unsafe to do otherwise.

Reflag reports these missing context fields using [feature events](feature-events.md). Reflag SDKs will also generate warnings in these cases making it easy to find these situations in your application.

### Unsupported array operations

If an evaluated condition uses a scalar-only operator such as `GT`, `DATE_AFTER`, or `IS_TRUE` on an array, or uses an array for a percentage rollout, the entire targeting rule fails to match. Negating that condition does not make the rule match. Boolean short-circuiting is preserved: conditions that are not reached do not produce errors, and other targeting rules may still match.

The [evaluation API](../../api/public-api/README.md#get-featuresevaluated) reports these cases in `evaluationErrors` with code `UNSUPPORTED_ARRAY_OPERATOR`. Missing context fields use `MISSING_CONTEXT_FIELD`. The deprecated `missingContextFields` field remains available for older clients.

### Next steps

* Learn about [filters](filter.md),
* Learn how to [setup feature access rules](../feature-rollouts/feature-targeting-rules.md) within Reflag UI.

