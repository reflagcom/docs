---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) to
  external data. Follow this guide to connect you LLM to your Bucket data
---

# MCP

{% hint style="warning" %}
The MCP server is still in development
{% endhint %}

To get started follow these few steps:\


1.  Install the [CLI](../sdk/documents/cli/) which comes with the MCP server:\


    ```
    $ npm install --save-dev @bucketco/cli
    $ npx bucket init
    ```
2. Start the MCP by running `npx bucket mcp` .
3.  Add the MCP server to e.g. Cursor,\


    ```json
    {
        "mcpServers": {
          "Bucket feature flag MCP": {
            "url": "http://localhost:8050/sse"
          }
        }
      }
    ```
4. That's it!
