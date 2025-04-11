---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) to
  external data. Follow this guide to connect your LLM to your Bucket data.
---

# MCP

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6wSC8SR2SupI4hONkYqp%2Fuploads%2F3ldWF5ngJR7yUMAysZKa%2Fcursor-mcp-demo_h264.mp4?alt=media&token=8e77c2e5-24fd-4451-85ee-5120008626c7" %}

## Get started with Bucket MCP

The Model Context Protocol (MCP) is an open protocol that provides a standardized way to connect AI models to different data sources and tools. In the context of Bucket, MCP enables your development environment to understand your feature flags, their states, and their relationships within your codebase. This creates a seamless bridge between your feature management workflow and AI-powered development tools.&#x20;

{% stepper %}
{% step %}
### Install the [Bucket CLI](../sdk/documents/cli/)

Using [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) install the CLI inside your project directory:

```bash
npm install --save-dev @bucketco/cli
npx bucket init
```
{% endstep %}

{% step %}
### Start the Bucket MCP server

Start the MCP server using the CLI inside your project directory:

```bash
npx bucket mcp
```
{% endstep %}

{% step %}
### Connect your editor

Use this [quick install link for Visual Studio Code](vscode:mcp/install?%7B%22name%22%3A%22Bucket%22%2C%22type%22%3A%22sse%22%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A8050%2Fsse%22%7D) to add the MCP directly to your VS Code user settings.

To install the MCP in Cursor or another editor, see [#manual-setup](mcp.md#manual-setup "mention") below.
{% endstep %}

{% step %}
### That's it!
{% endstep %}
{% endstepper %}

## Manual setup

Below you can find the manual setup steps for some popular editors. [More MCP compatible clients](https://modelcontextprotocol.io/clients).

### [Cursor](https://docs.cursor.com/context/model-context-protocol)

1. Open Cursor.
2. Go to `Settings > MCP`.
3. Click `Add new global MCP server` and paste the `SSE` config:

```json
{
  "mcpServers": {
    "Bucket": {
      "url": "http://localhost:8050/sse"
    }
  }
}
```

4. Save, go back to Cursor, and start prompting!

### [Visual Studio Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

{% hint style="info" %}
You must enable the [Copilot agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) to use MCP in Visual Studio Code Copilot chat.
{% endhint %}

1. Open VS Code.
2. Open the command palette, typically `CMD + SHIFT + P` or `CTRL + SHIFT + P`.
3. Type and select `MCP: Add Server...` .
4. Select `HTTP (server-sent events)` .
5. Enter `http://localhost:8050/sse` the Server URL.
6. Enter `Bucket` as the Server ID.
7. Select either `User Settings` or `Workspace Settings`.
8. Start prompting!

### [Claude Desktop](https://modelcontextprotocol.io/quickstart/user)

1. Open Cursor Desktop.
2. Go to `Settings > Developer`.
3. Click `Edit Config` , open `claude_desktop_config.json` and paste the `STDIO` config:

{% hint style="info" %}
Some clients don't support SSE and can instead interface with the MCP server over a STDIO proxy.
{% endhint %}

```json
{
  "mcpServers": {
    "Bucket": {
      "command": "npx",
      "args": ["-y", "supergateway", "--sse", "http://localhost:8050/sse"]
    }
  }
}
```

4. Save, restart Claude Desktop, and start prompting!

## Additional notes

MCP is in a very early stage of development, and changes are frequent. If something isn't working, please check out the [Model Context Protocol Website](https://modelcontextprotocol.io/) and open an [issue ticket here](https://github.com/bucketco/bucket-javascript-sdk/issues).&#x20;

We're looking into hosting the Bucket MCP server for you, making the setup even easier!
