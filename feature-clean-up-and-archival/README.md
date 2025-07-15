---
description: >-
  Managing feature flag lifecycle on Bucket is straight forward with the
  "clean-up guide",  notifications and automatic clean-up pull requests.
---

# Feature clean-up and archival

## Clean-up guide

Once a feature has been rolled out to everyone, it might be time to start thinking about archiving it. The built in "Clean-up guide" helps you through the steps required to safely archive a feature.

<figure><img src="../.gitbook/assets/Screenshot 2025-07-10 at 14.04.07.png" alt="" width="563"><figcaption></figcaption></figure>

There are three **checks** that must pass for the feature to be safe to archive:

* Stale: Feature was rolled out to everyone some time ago
* Flag removed from the code in a GitHub repository
* No access checks for some time

There are two **automations** that can be enabled at the feature level:

* Auto-creating a Pull Request once the feature turns stale
* Auto-archiving once all checks pass

See the [AI code clean-up](ai-code-clean-up-beta.md) page for more information on automating code clean-up

## Organization clean-up settings

In organization settings, you control requirements for each checks to pass:

* How soon after rollout features should be considered stale
* If GitHub is connected, you'll see which repository will be checked for the presence of flags
* How long to wait for the last access check

You can also set the default automation settings for newly created features.

<figure><img src="../.gitbook/assets/Screenshot 2025-07-10 at 14.11.01.png" alt=""><figcaption></figcaption></figure>



