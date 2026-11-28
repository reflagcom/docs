---
description: Documentation for v1 of the Browser, React, Vue and Node.js SDKs.
---

# Legacy SDKs (v1)

These pages document **v1** of the Browser, React, Vue and Node.js SDKs. For a new integration, start with the [current SDK documentation](../../supported-languages/overview.md). To upgrade an existing application, read [Migrating from v1](../../supported-languages/migrating-from-v1.md).

| SDK | Package major | Documentation | API reference |
| --- | --- | --- | --- |
| Browser | `@reflag/browser-sdk@1` | [Browser SDK v1](browser-sdk/README.md) | [Reference](browser-sdk/globals.md) |
| React | `@reflag/react-sdk@1` | [React SDK v1](react-sdk/README.md) | [Reference](react-sdk/globals.md) |
| Vue | `@reflag/vue-sdk@1` | [Vue SDK v1](vue-sdk/README.md) | [Reference](vue-sdk/globals.md) |
| Node.js | `@reflag/node-sdk@1` | [Node.js SDK v1](node-sdk/README.md) | [Reference](node-sdk/globals.md) |

The archive also includes [Browser feedback documentation](browser-sdk/feedback.md).

## Installing v1

Pin the major when maintaining a v1 application:

```sh
npm install @reflag/react-sdk@1
```

Use `@reflag/browser-sdk@1`, `@reflag/vue-sdk@1` or `@reflag/node-sdk@1` in the same way, and keep generating types with CLI 1. Without `@1`, npm installs the latest major version.

## Compatibility

- If you bootstrap flags from the server, keep the Node.js SDK and your Browser, React or Vue SDK on the same major version. v1 clients can't read v2 bootstrap data.
- React Native and the OpenFeature providers are released separately. Check their own documentation for the versions they support.
- Guides and handbook examples use v2. For v1 APIs such as `.isEnabled` and `.config.payload`, use the SDK pages in this section.

"Legacy" means v1 is no longer the latest version. It doesn't announce an end-of-support date. See the [migration guide](../../supported-languages/migrating-from-v1.md) for what changes in v2.
