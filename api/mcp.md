---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) to
  external data. Follow this guide to connect your LLM to your Bucket data.
---

# MCP

{% hint style="warning" %}
The MCP server is still under development.
{% endhint %}

To get started, follow these steps:

{% stepper %}
{% step %}
### Install the [CLI](../sdk/documents/cli/) that comes with the MCP server

```bash
npm install --save-dev @bucketco/cli
npx bucket init
```
{% endstep %}

{% step %}
### Start the MCP

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
