---
description: How to create feature flags in Cursor
---

# Cursor

### Rule

Create a Project Rule called `.cursor/rules/featureflags.md`. Here's a template you can use:

```markdown
We use Reflag (https://reflag.com) for feature flagging and feature management.

Reflag's documentation is located at https://docs.reflag.com
You can create feature flags using the CLI (@reflag/cli).

If installed, you can use the the Reflag MCP to create flags.
Alternatively, try this command to use the Reflag CLI: npx reflag new
```

### Slash Command

Create a slash command called `.cursor/commands/flag.md` Here's a template you can use:

```
Feature flag the changes

1. Create a feature flag with Reflag with an appropriate name
2. Update the code to ensure changes are flagged

The Reflag documentation is located at https://docs.reflag.com
If installed, use the CLI to create a feature flag using the command: npx reflag new
If the Reflag MCP is installed, you can create a flag through the Reflag MCP
```

### MCP

See [mcp.md](../api/mcp.md "mention") page for Cursor instructions
