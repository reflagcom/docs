---
description: >-
  The Reflag import tool lets you quickly migrate all your flags and segments
  from LaunchDarkly to Reflag
---

# Flag import

To import your flags into Reflag from LaunchDarkly, you need a LaunchDarkly API key. The import tool will retrieve your flags and segments and map the rules to Reflag rules. It only take a couple of minutes to kick-start your migration.

<figure><img src="../.gitbook/assets/Screenshot 2025-12-16 at 13.28.10.png" alt=""><figcaption></figcaption></figure>

### Notes

The import tool will warn you when it encounters rules that cannot be mapped directly to Reflag. This list shows when the import tool will warn you:

* Multivariate flags are skipped. These must currently be migrated manually. We can help if you get in touch.
* Flag rules that explicitly serve `false` are skipped
* Reflag supports percentage-based rollouts for flags, but not for segments. Unless the percentage is currently at 100%, percentage-based rule for segments will be skipped.
* Some LaunchDarkly operators do not map directly to Reflag. Here are the concessions:

<table><thead><tr><th>LaunchDarkly</th><th>Reflag</th><th data-hidden></th></tr></thead><tbody><tr><td><code>lessThanOrEqual</code>/<code>greaterThanOrEqual</code>  </td><td><code>lessThan</code>/<code>greaterThan</code></td><td></td></tr><tr><td><code>startsWith</code>/<code>endsWith</code>/<code>matches</code></td><td><code>contains</code></td><td></td></tr></tbody></table>

