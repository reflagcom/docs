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

The exact structure of the data will vary by the SDK in use. Custom attributes can also hold arrays, such as `user.roles: ["admin", "editor"]`.

Use `CONTAINS` to check for a role such as `admin`, or `ANY_OF` to check for any of several roles. See [array attribute operators](../creating-segments.md#array-attributes) for examples and the full list of operators.

### Missing context fields

During the evaluation of targeting rules against a context it might happen that context is missing some details that the rules require. In such cases, those rules are discarded from evaluation as it would be unsafe to do otherwise.

Reflag reports these missing context fields using [feature events](feature-events.md). Reflag SDKs will also generate warnings in these cases making it easy to find these situations in your application.

### Checks that do not support arrays

Some operators, such as `GT`, `DATE_AFTER`, and `IS_TRUE`, do not work with arrays. Arrays also cannot be used for percentage rollouts.

If Reflag runs one of these checks on an array, the whole rule does not match. Adding `NOT` does not turn that error into a match. Other rules can still match.

Reflag does not report errors for conditions it skips. For example, if the first condition in an `OR` group matches, Reflag does not check the remaining conditions in that group.

The [evaluation API](../../api/public-api/README.md#evaluation-errors) reports these errors in `evaluationErrors`, with code `UNSUPPORTED_ARRAY_OPERATOR`. Missing fields use `MISSING_CONTEXT_FIELD`. The older `missingContextFields` field is still available but lists missing fields only.

### Next steps

* Learn about [filters](filter.md),
* Learn how to [setup feature access rules](../feature-rollouts/feature-targeting-rules.md) within Reflag UI.

