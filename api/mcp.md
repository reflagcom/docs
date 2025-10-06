---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) in,
  for example, your code editor to external data. Follow this guide to connect
  your editor to your Reflag data.
---

# MCP

{% embed url="https://139729605.fs1.hubspotusercontent-eu1.net/hubfs/139729605/Videos/bucketco-website/cursor-mcp-flag-feature_full-height_h264.mp4" %}

## Get started with Reflag Remote MCP

The Model Context Protocol (MCP) is an open protocol that provides a standardized way to connect AI models to different data sources and tools. In the context of Reflag, MCP enables your code editor to understand your feature flags, their states, and their relationships within your codebase. This creates a seamless bridge between your feature management workflow and AI-powered development tools. Reflag hosts the MCP server, making it very easy to get started!

{% stepper %}
{% step %}
#### One-click add Reflag MCP in your IDE

* [Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=Reflag\&config=eyJ1cmwiOiJodHRwczovL2FwcC5yZWZsYWcuY29tL2FwaS9tY3AiLCJ0eXBlIjoiaHR0cCJ9)
* [VSCode](vscode:mcp/install?%7B%22name%22%3A%22Reflag%22%2C%22gallery%22%3Afalse%2C%22url%22%3A%22https%3A%2F%2Fapp.reflag.com%2Fapi%2Fmcp%22%7D)
{% endstep %}

{% step %}
#### That's it!
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Make sure your editor/client and [Node.js](https://nodejs.org/en/download) versions are up-to-date.
{% endhint %}

## Manual setup

Below are the manual setup steps for some of the popular editors, but there are [more MCP-compatible clients](https://modelcontextprotocol.io/clients). Before you start with the manual setup, you first need the `App ID` from [your app settings page](https://app.reflag.com/env-current/settings/app-general).

{% hint style="info" %}
You can use [mcp-remote](https://www.npmjs.com/package/mcp-remote) to enable authentication and remote MCP connections in clients that don't yet support these features.
{% endhint %}

### [Cursor](https://docs.cursor.com/context/model-context-protocol)

1. Open Cursor.
2. Go to `Settings > Cursor Settings`.
3. Click `MCP` and `New MCP Server`  make sure the Reflag MCP server entry is present:

```json
{
  "mcpServers": {
    "Reflag": {
      "url": "https://app.reflag.com/api/mcp"
    }
  }
}
```

{% hint style="info" %}
Cursor also supports workspace-specific MCP servers by adding the above configuration to `.cursor/mcp.json` inside your project directory.
{% endhint %}

4. Save, go back to Cursor, and start prompting!

### [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

{% hint style="info" %}
You must enable the [Copilot agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) to use MCP in Visual Studio Code Copilot chat.
{% endhint %}

1. Open VS Code.
2. Open the command palette, typically `CMD + SHIFT + P` or `CTRL + SHIFT + P`.
3. Type and select `MCP: Add Server...` .
4. Select `HTTP` .
5. Enter `https://app.reflag.com/api/mcp` as the URL
6. Enter `Reflag` as the server ID.

{% hint style="info" %}
VS Code also supports workspace-specific MCP servers by adding the above configuration to `.vscode/mcp.json` inside your project directory.
{% endhint %}

9. Start prompting!

### [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)

1. Open Cursor Desktop.
2. Go to `Settings > General > Claude Settings (Configure) > Connectors`
3. Click Add Custom Connector
4. Enter "Reflag" as the name and paste the MCP url in: `https://app.reflag.com/api/mcp`

### Claude Code

1. On the command line inside your project directory, enter: `claude mcp add --transport http Reflag https://app.reflag.com/api/mcp`
2. Start `claude` and enter `/mcp` to begin the authentication process
