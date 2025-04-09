---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) to
  external data. Follow this guide to connect your LLM to your Bucket data.
---

# MCP

### Whats's MCP?

The Model Context Protocol (MCP) is an open protocol that provides a standardized way to connect AI models to different data sources and tools. In the context of Bucket, MCP enables your development environment to understand your feature flags, their states, and their relationships within your codebase. This creates a seamless bridge between your feature management workflow and AI-powered development tools. MCP is in a very early stage of development and changes are frequent, if something isn't working please check out the [Model Context Protocol Website](https://modelcontextprotocol.io/) and open an [issue ticket here](https://github.com/bucketco/bucket-javascript-sdk/issues).

### Install the [CLI](../sdk/documents/cli/)

```bash
npm install --save-dev @bucketco/cli
npx bucket init
```

### Setting up MCP

MCP servers currently run locally on your machine. To start the MCP server run the CLI command from your Bucket initialized project directory:

```bash
npx bucket mcp [--port <number|"auto">] [--app-id ap123456789]
```

Options:

* `--port`: Port to run the SSE server on (defaults to 8050, "auto" for random port).
* `--app-id`: App ID to use.

This will start an SSE server at `http://localhost:8050/sse` by default which you can connect to using your [client of choice](https://modelcontextprotocol.io/clients). Below are examples that work for [Cursor IDE](https://www.cursor.com/) and [Claude Desktop](https://claude.ai/download).

**Server-Side Events (SSE)**

```json
{
  "mcpServers": {
    "Bucket": {
      "url": "http://localhost:8050/sse"
    }
  }
}
```

**STDIO Proxy**

Some clients don't support SSE and can instead interface with the MCP server over a STDIO proxy.

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

#### Cursor IDE

To enable MCP features in [Cursor IDE](https://www.cursor.com/):

1. Open Cursor IDE.
2. Go to `Settings > MCP`.
3. Click `Add new global MCP server` and paste the `SSE` config.
4. Save and go back to Cursor.

#### Claude Desktop

To enable MCP features in [Claude Desktop](https://claude.ai/download):

1. Open Claude Desktop.
2. Go to `Settings > Developer`.
3. Click `Edit config` and paste the `STDIO` config.
4. Save and restart Claude Desktop.
