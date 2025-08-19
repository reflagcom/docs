---
description: Integrate Slack to get notified about new feature changes and feedback
---

# Slack

With the integration for Slack, you can get notifications whenever a feature's access and/or stage changes and whenever an end-user submit feature feedback. You can also get a feature view report.

## Authenticate with Slack

Authentication happens at the environment level. Once you've authenticated, all environments, apps and features can be connected to Slack.

* Go to **Settings**
* Select **Slack** under Environment.

<figure><img src="../.gitbook/assets/CleanShot 2025-01-07 at 1 .22.27@2x.png" alt=""><figcaption><p>Click "Connect to Slack" to authenticate</p></figcaption></figure>

## Choose default Slack channel

You can set a default Slack channel for an app. This means that all features within the app will all inherit the default channel unless you overwrite it.

* Go to Settings
* Select **Slack** under **Environment: Production**

Note: Slack notifications are only supported in the Production [environment](../introduction/concepts/environment.md).

<figure><img src="../.gitbook/assets/CleanShot 2025-01-07 at 12 .39.12@2x (1).png" alt=""><figcaption><p>Choose default Slack channel for this app's production environment</p></figcaption></figure>



## Available Slack notifications

<table><thead><tr><th width="557">What</th><th>When</th></tr></thead><tbody><tr><td>Feature access or state changes</td><td>Real-time</td></tr><tr><td>Feature archive updates</td><td>Real-time</td></tr><tr><td>Feature feedback submissions</td><td>Real-time</td></tr></tbody></table>

