---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) in,
  for example, your code editor to external data. Follow this guide to connect
  your editor to your Bucket data.
---

# MCP

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6wSC8SR2SupI4hONkYqp%2Fuploads%2F3ldWF5ngJR7yUMAysZKa%2Fcursor-mcp-demo_h264.mp4?alt=media&token=8e77c2e5-24fd-4451-85ee-5120008626c7" %}

## Get started with Bucket Remote MCP

The Model Context Protocol (MCP) is an open protocol that provides a standardized way to connect AI models to different data sources and tools. In the context of Bucket, MCP enables your code editor to understand your feature flags, their states, and their relationships within your codebase. This creates a seamless bridge between your feature management workflow and AI-powered development tools. Bucket hosts the MCP server, making it very easy to get started!

{% stepper %}
{% step %}
### Set up the MCP connection with the [Bucket CLI](../sdk/documents/cli/)

Simply run our one-line command in your project directory and select the options that best suit you.

```bash
npx @bucketco/cli@latest mcp
```
{% endstep %}

{% step %}
### That's it!
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Make sure your editor/client and [Node.js](https://nodejs.org/en/download) versions are up-to-date.
{% endhint %}

{% embed url="https://2489416983-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6wSC8SR2SupI4hONkYqp%2Fuploads%2FAvCYllmE5g5WBDiUSeez%2Fmcp-remote.mp4?alt=media&token=9b5f31bd-d94b-4831-a7d0-85410265dab3" %}

## Manual setup

Below are the manual setup steps for some of the popular editors, but there are [more MCP-compatible clients](https://modelcontextprotocol.io/clients). Before you start with the manual setup, you first need the `App ID` from [your app settings page](https://app.bucket.co/envs/current/settings/app-general).

{% hint style="info" %}
We use [mcp-remote](https://www.npmjs.com/package/mcp-remote) to enable authentication and remote MCP connections in clients that don't yet support it.
{% endhint %}

### [Cursor](https://docs.cursor.com/context/model-context-protocol)

1. Open Cursor.
2. Go to `Settings > MCP`.
3. Click `Add new global MCP server` and paste the `STDIO` configure with your `App ID`:

```json
{
  "mcpServers": {
    "Bucket": {
      "command": "npx",
      "args": [
        "mcp-remote@latest",
        "https://app.bucket.co/api/mcp?appId=<YOUR APP ID>"
      ]
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
4. Select `Command (stdio)` .
5. Enter `npx mcp-remote@latest https://app.bucket.co/api/mcp?appId=<YOUR APP ID>` as the command, with your `App ID`.
6. Enter `Bucket` as the server ID.
7. Select either `User Settings` or `Workspace Settings`.

{% hint style="info" %}
VS Code also supports workspace-specific MCP servers by adding the above configuration to `.vscode/mcp.json` inside your project directory.
{% endhint %}

9. Start prompting!

### [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)

1. Open Cursor Desktop.
2. Go to `Settings > Developer`.
3. Click `Edit Config` , open `claude_desktop_config.json` and paste the `STDIO` configuration with your `App ID`:

```json
{
  "mcpServers": {
    "Bucket": {
      "command": "npx",
      "args": [
        "mcp-remote@latest",
        "https://app.bucket.co/api/mcp?appId=<YOUR APP ID>"
      ]
    }
  }
}
```

4. Save, restart Claude Desktop, and start prompting!

## Additional notes

MCP is in a very early stage of development, and changes are frequent. If something isn't working, please check out the [Model Context Protocol Website](https://modelcontextprotocol.io/), [mcp-remote](https://www.npmjs.com/package/mcp-remote?activeTab=versions), and open an [issue ticket here](https://github.com/bucketco/bucket-javascript-sdk/issues).&#x20;
