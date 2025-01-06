---
layout:
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

# API Reference

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/features" method="get" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

#### Rules schema

| Attribute | Type   | Description                                                                                                                                          |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| filter    | Filter | Object containing filtering rules which will evaluate against context object. Filter can be an instance of 5 different filter types described below. |

#### Filter Schema

{% tabs %}
{% tab title="Group" %}
| Attribute | Type              | Desription                                                                                  |
| --------- | ----------------- | ------------------------------------------------------------------------------------------- |
| type      | `group`           | Filter group will evaluate by applying a logical operation to the array of filters provided |
| filters   | Filter\[]         | Array of filters                                                                            |
| operator  | enum(`and`, `or`) | Logical operation                                                                           |
{% endtab %}

{% tab title="Negation" %}
| Attribute | Type       | Desription                                                                         |
| --------- | ---------- | ---------------------------------------------------------------------------------- |
| type      | `negation` | Negation filter is used to negate the evaluation result of the underlying filters. |
| filter    | Filter     | Filter object to be negated                                                        |
{% endtab %}

{% tab title="Context" %}
| Attribute | Type                                                                                                                                    | Desription                                                                                                                                                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | `context`                                                                                                                               |                                                                                                                                                                                                                                                 |
| field     | string                                                                                                                                  | <p>Refers to a field of the context object.<br>Example: company.tier</p>                                                                                                                                                                        |
| values    | string\[]                                                                                                                               | Array of values which will be compared with the value of the context field. Operators SET, NOT\_SET, IS\_TRUE, IS\_FALSE require 0 values, ANY\_OF and NOT\_ANY\_OF support multiple values. All the other operators require exactly one value. |
| operator  | enum(`IS`,`IS_NOT`,`ANY_OF`,`NOT_ANY_OF`,`CONTAINS`,`NOT_CONTAINS`","`GT`" ,`LT`,`AFTER`,`BEFORE`,`SET`,`NOT_SET`,`IS_TRUE`,`IS_FALSE`) | Operator for comparison of the context field with provided values.                                                                                                                                                                              |
{% endtab %}

{% tab title="Rollout Percentage" %}
| Attribute               | Type                | Desription                                                                                                                                                                                                                                                                                                        |
| ----------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                    | `rolloutPercentage` | Rollout percentage filter is used for gradual rollouts. It evaluates to true or false proportionally based on the rollout threshold provided. Bucket evaluates the filter by calculating a numeric hash from the rollout attribute. Contexts of which hash is under the threshold provided will evaluate to true. |
| partialRolloutAttribute | `company.id`        | Currently only "company.id" is supported.                                                                                                                                                                                                                                                                         |
| partialRolloutThreshold | number              | Number from 0 to 10000 where 0 means no one will have access and 10000 means everyone will have access.                                                                                                                                                                                                           |
{% endtab %}

{% tab title="Constant" %}
| Attribute | Type       | Desription                                                                                                                       |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| type      | `constant` | Filter constant will evaluate to the value provided. This is expected when the feature is enabled either for everyone or no one. |
| value     | boolean    | Value to which the filter should evaluate                                                                                        |
{% endtab %}
{% endtabs %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/features/enabled" method="get" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/features/evaluated" method="get" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/features/events" method="post" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/user" method="post" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/company" method="post" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/event" method="post" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/feedback" method="post" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}

{% swagger src="https://staging.front.bucket.co/openapi.yaml" path="/bulk" method="post" expanded="true" %}
https://staging.front.bucket.co/openapi.yaml
{% endswagger %}
