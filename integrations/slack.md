---
description: Integrate Slack to get notified about new flag changes and feedback
---

# Slack

With the integration for Slack, you can get notifications whenever flags change and whenever an end-user submit feature feedback.

**AI disclaimer:** Reflag’s AI agent uses a large language model (LLM) and may generate inaccurate responses, summaries, or other outputs. A paid Slack plan is required to access the AI agent in the app container. Other Reflag Slack app features continue to work on free Slack plans.

## Authenticate with Slack

Authentication happens at the environment level. Once you've authenticated, all environments, apps and flags can be connected to Slack.

* Go to **Settings**
* Select **Slack** under Environment.

<figure><img src="../.gitbook/assets/slackDisconnected (1).png" alt=""><figcaption><p>Click "Connect to Slack" to authenticate</p></figcaption></figure>

## Choose default Slack channel

You can set a default Slack channel for an app. This means that all flags within the app will all inherit the default channel unless you overwrite it.

* Go to Settings
* Select **Slack** under **Environment: Production**

Note: Slack notifications are only supported in the Production [environment](../product-handbook/concepts/environment.md).

<figure><img src="../.gitbook/assets/slackConnected (1).png" alt=""><figcaption><p>Choose default Slack channel for this app's production environment</p></figcaption></figure>

## Available Slack notifications

<table><thead><tr><th width="557">What</th><th>When</th></tr></thead><tbody><tr><td>Flag access or stage changes</td><td>Real-time</td></tr><tr><td>Flag archive updates</td><td>Real-time</td></tr><tr><td>Flag feedback submissions</td><td>Real-time</td></tr></tbody></table>
