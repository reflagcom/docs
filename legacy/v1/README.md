---
description: Legacy protocol-v1 documentation for the Browser, React, Vue and Node.js SDKs.
---

# Legacy SDKs (v1)

These pages document the **protocol-v1 SDKs**. For new v2 integrations, start with the [current SDK documentation](../../supported-languages/overview.md). For an existing application, read [Migrating from v1](../../supported-languages/migrating-from-v1.md) before upgrading.

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

Use `@reflag/browser-sdk@1`, `@reflag/vue-sdk@1`, or `@reflag/node-sdk@1` as appropriate. Keep CLI 1 with legacy generated declarations. Unversioned installation commands can select a breaking major after it becomes the default on npm.

## Compatibility

- Keep both ends of a server-to-browser bootstrap integration on protocol v1. A Node v2 bootstrap envelope cannot initialize a v1 Browser, React or Vue client.
- React Native and the OpenFeature providers have independent release schedules. Follow their own supported dependency versions; their presence in the main navigation does not imply protocol-v2 support.
- General guides and handbook examples show v2. Use the SDK pages in this archive for legacy wrapper APIs such as `.isEnabled` and `.config.payload`.

Legacy means an older protocol, not a claim about an end-of-support date. See the [migration guide](../../supported-languages/migrating-from-v1.md) for the breaking changes.
