---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) to
  external data. Follow this guide to connect your LLM to your Bucket data.
---

# MCP

To get started, follow these steps:

{% stepper %}
{% step %}
### Install the [CLI](../sdk/documents/cli/)

```bash
npm install --save-dev @bucketco/cli
npx bucket init
```
{% endstep %}

{% step %}
### Start the MCP server

```bash
npx bucket mcp
```
{% endstep %}

{% step %}
### Add the MCP server to your IDE

```json
{
    "mcpServers": {
      "Bucket feature flag MCP": {
        "url": "http://localhost:8050/sse"
      }
    }
  }
```
{% endstep %}

{% step %}
### That's it!
{% endstep %}
{% endstepper %}
