---
description: Integrate Bucket into your Linear workflow
---

# Linear

Bucket integrates with Linear to streamline your workflow:

* Post project updates or comments when there are changes in the [feature access rules](../product-handbook/feature-rollouts/feature-targeting-rules.md)
* [Add a quick link](linear.md#creating-feature-flags-from-linear) to create feature flags from Linear

## Connecting to your Linear organization

To connect Bucket with your Linear account, navigate to the [Integrations](https://app.bucket.co/envs/current/settings/org-integrations) section for your organization, and use the "_Connect to Line&#x61;_&#x72;" button to initiate the authorization process.

<figure><img src="../.gitbook/assets/image (11).png" alt="" width="225"><figcaption><p>Integrations section in your organization</p></figcaption></figure>

<figure><img src="../.gitbook/assets/image (17).png" alt="" width="375"><figcaption><p>The Linear integration, when not connected</p></figcaption></figure>

Follow the steps displayed in Linear when authorizing the Bucket app. If the connection is successful, you will see the integration status updated accordingly:

<figure><img src="../.gitbook/assets/image (13).png" alt="" width="375"><figcaption><p>Linear integration set up</p></figcaption></figure>

## Connect Bucket features to Linear issues or projects

Once you have connected your Bucket organization to your Linear account, you can start using the integration by associating Bucket features with Linear issues or projects.&#x20;

To start, navigate to a feature you want to associate, open its "_Settings_" tab, and find the "_Linear_" section:

<figure><img src="../.gitbook/assets/image (14).png" alt=""><figcaption><p>The dropdown allows searching for issues or projects in Linear</p></figcaption></figure>

## Posting change summaries to Linear

Once you associate a Linear issue or project with a Bucket feature, you can toggle the "_Post a project update when access rules are changed_" option. This default value will be used when changes are made to [targeting rules](../introduction/concepts/targeting-rules.md).

Finally, each time you update the feature's targeting rules, you will be presented with the confirmation dialog that includes the option to post a summary of the updates to Linear:

<figure><img src="../.gitbook/assets/image (15).png" alt=""><figcaption><p>You can post the summary of the targeting rules changes to Linear</p></figcaption></figure>

Once you click "_Confirm_", an update will be posted to Linear — either as a "_Project Update_" when the feature is associated with a project or a "_Comment_" when the feature is associated with an issue.

<figure><img src="../.gitbook/assets/image (18).png" alt=""><figcaption><p>A project update posted from Bucket</p></figcaption></figure>

## Creating feature flags from Linear

When you start working on a new feature in Linear, we recommend adding a "_Create feature in Bucket_"  issue to your project to help you start flagging new features.&#x20;

This way, when you start a new project, part of the initial work will be setting up a feature in Bucket. Here's an example for Linear:

<figure><img src="../.gitbook/assets/Screenshot 2024-10-10 at 14.04.34.png" alt=""><figcaption><p>A Linear project template with an issue included by default to make it easy to get started with features in Bucket</p></figcaption></figure>

You can link directly to the "_New feature_" page by using the [flag.new](https://flag.new) shortcut.

## Additional information

* [Create project templates in Linear](https://linear.app/docs/project-templates#create-templates) — Remember to configure your new template to be the _default_ template for new projects.
