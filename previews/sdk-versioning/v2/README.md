# JavaScript SDKs — v2

{% hint style="warning" %}
**Candidate documentation, not a release announcement.** These pages are generated from SDK candidate commit [`9f3a0ae`](https://github.com/reflagcom/javascript/commit/9f3a0ae027e386747a2d4cf7683a68dcab70b355), version **2.0.0-next.0**. Matching SDK/CLI releases and server readiness are still required. A staging server deployment alone does not release these packages.
{% endhint %}

When both SDK variants are connected to the JavaScript SDKs section, use its **v1 / v2 variant picker** to change versions. A single-space revision preview does not provide that picker. Both variants use the same package and reference paths so equivalent pages can be matched.

## SDK documentation

- [React SDK](./@reflag/react-sdk/README.md) · [API reference](./@reflag/react-sdk/globals.md)
- [Vue SDK](./@reflag/vue-sdk/README.md) · [API reference](./@reflag/vue-sdk/globals.md)
- [Browser SDK](./@reflag/browser-sdk/README.md) · [API reference](./@reflag/browser-sdk/globals.md) · [Feedback](documents/browser-sdk/FEEDBACK.md)
- [Node.js SDK](./@reflag/node-sdk/README.md) · [API reference](./@reflag/node-sdk/globals.md)

## Compatibility

V2 reads return direct Boolean/JSON values, with positional defaults for JSON reads. Tracking and feedback are separate APIs. For server bootstrap, use matching Node and Browser/framework v2 packages. Regenerate direct-value declarations with CLI 2 when that release is available.

React Native, OpenFeature and Management retain their independently supported contracts; this selector does not claim v2 support for them.

SDK READMEs and API comments remain authored in the [JavaScript repository](https://github.com/reflagcom/javascript). The pages here are generated, version-labelled copies—not a second manually maintained SDK reference.
