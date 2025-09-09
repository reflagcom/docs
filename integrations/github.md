---
description: >-
  Integrate GitHub to automatically check feature flag code references and
  receive automatic AI code clean-up pull requests
---

# GitHub

Using the integration for GitHub, Reflag does two things:

* Automatically searches your repository for references to feature flags. This way you can know if a flag was cleaned up from your codebase or whether it's still being used. See how the clean-up guide uses this in [feature-clean-up-and-archival-beta](../product-handbook/feature-clean-up-and-archival-beta/ "mention").
* Reflag can automatically clean up your code once a feature has been rolled out to everyone. See [ai-code-clean-up-beta.md](../product-handbook/feature-clean-up-and-archival-beta/ai-code-clean-up-beta.md "mention") for more information.

{% hint style="info" %}
GitHub integration is available on Pro and Enterprise [plans](https://reflag.com/pricing)
{% endhint %}

## Connect to GitHub

Connecting to GitHub happens at the Organization level. Go to [Organization settings](https://app.reflag.com/env-current/settings/org-integrations) and:

1. Click "Connect" for the GitHub integration.
2. You'll be taken to an authentication consent screen.
3. Once you've approved, you'll need to pick a repository.
