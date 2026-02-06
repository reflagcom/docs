---
description: >-
  Reflag supports the MCP protocol. Understand how to connect the agent in your
  code editor to your Reflag account.
---

# MCP

## Set up MCP

Model Context Protocol enables seamless integration of your Large Language Model (LLM) with external data sources, such as a code editor. This guide will walk you through connecting your editor to Reflag data efficiently.

{% embed url="https://139729605.fs1.hubspotusercontent-eu1.net/hubfs/139729605/Videos/bucketco-website/cursor-mcp-flag-feature_full-height_h264.mp4" %}

<p align="center">Guide to Integrating Model Context Protocol with Reflag Data</p>

### Get started with Reflag Remote MCP

The Model Context Protocol (MCP) is an open standard that facilitates seamless integration of AI models with various data sources and tools. In Reflag, MCP enhances your code editor's ability to interpret and manage feature flags, comprehending their states and interconnections within the codebase. This forms an efficient link between feature management workflows and AI-driven development tools. With Reflag hosting the MCP server, getting started is incredibly straightforward.

{% stepper %}
{% step %}
#### One-click to add Reflag MCP in your IDE

* [Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=Reflag\&config=eyJ1cmwiOiJodHRwczovL2FwcC5yZWZsYWcuY29tL2FwaS9tY3AiLCJ0eXBlIjoiaHR0cCJ9)
* [VSCode](vscode:mcp/install?%7B%22name%22%3A%22Reflag%22%2C%22gallery%22%3Afalse%2C%22url%22%3A%22https%3A%2F%2Fapp.reflag.com%2Fapi%2Fmcp%22%7D)
{% endstep %}

{% step %}
#### That's it!
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Ensure your editor/client and [Node.js](https://nodejs.org/en/download) versions are up to date.
{% endhint %}

### Using Reflag CLI

To install the MCP into your preferred editor, use the Reflag CLI. This tool will configure your editor and provide agent guidelines, enhancing editor intelligence.

To set up the [MCP support](cli.md#setting-up-mcp), invoke:

```sh
npx reflag mcp
```

### Manual setup

Below are the manual setup steps for some of the popular editors, but there are [more MCP-compatible clients](https://modelcontextprotocol.io/clients). Before you start with the manual setup, you first need the `App ID` from [your app settings page](https://app.reflag.com/env-current/settings/app-general).

{% hint style="info" %}
You can use [mcp-remote](https://www.npmjs.com/package/mcp-remote) to enable authentication and remote MCP connections in clients that don't yet support these features.
{% endhint %}

### [Cursor](https://docs.cursor.com/context/model-context-protocol)

1. Open Cursor.
2. Go to `Settings > Cursor Settings`.
3. Click `MCP` and `New MCP Server`  and make sure the Reflag MCP server entry is present:

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
4. Enter "Reflag" as the name and paste the MCP URL in: `https://app.reflag.com/api/mcp`

### Claude Code

1. On the command line inside your project directory, enter: `claude mcp add --transport http Reflag https://app.reflag.com/api/mcp`
2. Start `claude` and enter `/mcp` to begin the authentication process
