---
description: >-
  Model Context Protocol lets you connect your Large Language Model (LLM) to
  external data. Follow this guide to connect your LLM to your Bucket data.
---

# MCP

{% embed url="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F6wSC8SR2SupI4hONkYqp%2Fuploads%2F3ldWF5ngJR7yUMAysZKa%2Fcursor-mcp-demo_h264.mp4?alt=media&token=8e77c2e5-24fd-4451-85ee-5120008626c7" %}

### Quickly get started with the Bucket MCP

The Model Context Protocol (MCP) is an open protocol that provides a standardized way to connect AI models to different data sources and tools. In the context of Bucket, MCP enables your development environment to understand your feature flags, their states, and their relationships within your codebase. This creates a seamless bridge between your feature management workflow and AI-powered development tools.&#x20;

#### 1. Install the [Bucket CLI](../sdk/documents/cli/)

Using [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/) install the CLI inside your project directory:

```bash
npm install --save-dev @bucketco/cli
npx bucket init
```

#### 2. Start the Bucket MCP

Start the MCP server using the CLI inside your project directory:

```bash
npx bucket mcp
```

#### 3. Connect your IDE (Cursor, Claude, Cline...)

To enable MCP features in [Cursor IDE](https://www.cursor.com/):

1. Open Cursor IDE.
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

4. Save and go back to Cursor.

#### **3.5 STDIO Proxy**

Some clients don't support SSE and can instead interface with the MCP server over a STDIO proxy:

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

#### Notes

MCP is in a very early stage of development, and changes are frequent. If something isn't working, please check out the [Model Context Protocol Website](https://modelcontextprotocol.io/) and open an [issue ticket here](https://github.com/bucketco/bucket-javascript-sdk/issues). We are looking into hosting the Bucket MCP server for you, making the setup even easier!
