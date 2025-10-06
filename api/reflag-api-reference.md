---
description: >-
  Describes the REST API that allows clients to manage and update apps, flags
  and related entities.
---

# Reflag REST API Reference

{% openapi-operation spec="reflag-api" path="/apps" method="get" %}
[OpenAPI reflag-api](https://app.reflag.com/openapi.json)
{% endopenapi-operation %}

{% openapi-operation spec="reflag-api" path="/apps/{appId}" method="get" %}
[OpenAPI reflag-api](https://app.reflag.com/openapi.json)
{% endopenapi-operation %}

{% openapi-operation spec="reflag-api" path="/apps/{appId}/flags" method="get" %}
[OpenAPI reflag-api](https://app.reflag.com/openapi.json)
{% endopenapi-operation %}

{% openapi-operation spec="reflag-api" path="/apps/{appId}/flags/{flagKey}/targeting/{envId}" method="get" %}
[OpenAPI reflag-api](https://app.reflag.com/openapi.json)
{% endopenapi-operation %}

{% openapi-operation spec="reflag-api" path="/apps/{appId}/flags/specific-targets/{envId}" method="patch" %}
[OpenAPI reflag-api](https://app.reflag.com/openapi.json)
{% endopenapi-operation %}
