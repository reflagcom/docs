---
description: >-
  Managing the flag lifecycle in Reflag is straightforward with the clean-up
  guide, notifications, and automatic clean-up pull requests.
---

# Flag clean-up and archival

## Stale flags

After flags have been rolled out to everyone, they turn stale after a set period of time. Stale flags show a broom next to their name. You also receive a Slack notification if that integration is enabled.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-15 at 21.31.16.png" alt=""><figcaption></figcaption></figure>

## Stale flags view

The stale flags view shows all flags that are currently stale and what still needs to happen before they can be archived.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-02 at 17.19.44 (1).png" alt=""><figcaption></figcaption></figure>

## Clean-up guide

Open a flag and find the built-in "Clean-up guide". It walks you through the steps required to archive a flag safely.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-10 at 14.04.07.png" alt="" width="563"><figcaption></figcaption></figure>

There are three **checks** that must pass before the flag is safe to archive:

* Stale: the flag was rolled out to everyone some time ago
* Flag removed from the code in a GitHub repository
* No access checks for some time

There are two **automations** that can be enabled at the flag level:

* Auto-creating a Pull Request once the flag turns stale
* Auto-archiving once all checks pass

See [AI code clean-up](ai-code-clean-up-beta.md) for more on automating code clean-up.

## Organization clean-up settings

In organization settings, you control the requirements for each check to pass:

* Configure how soon after rollout flags should be considered stale
* If GitHub is connected, you'll see which repository will be checked for the presence of flags
* How long to wait for the last access check

You can also set the default automation settings for newly created flags.

<figure><img src="../../.gitbook/assets/Screenshot 2025-07-10 at 14.11.01.png" alt=""><figcaption></figcaption></figure>
