---
description: Learn more about environments in Reflag
---

# Environments

What are environments?

An environment is an instance of an app that is specified by a group of shared parameters or servers. Environments are usually used to isolate a production app from testing, however, they can also differentiate multiple single-tenant deployments of the same app.

Reflag has three default environments: `Production`, `Staging`, and `Development`.

You can add, edit, and delete as many additional environments as you’d like.

All environments except `Production` can be edited or deleted at any time.

## Getting started

* When you create your account, there are three default environments: `Production`, `Staging`, and `Development`.
* Go to `Settings`
* Under `App: [Your App Name]`, click `Environments`
* Fetch your unique `publishable keys` and/or `secret keys` to implement with an [SDK or HTTP API](../../supported-languages/overview.md).
  * This key is essential for integrating your applications with our platform. It ensures that events and data are attributed to the correct environment.

<figure><img src="../../.gitbook/assets/Getting started-min.png" alt="Reflag Environments"><figcaption></figcaption></figure>

## Managing environments

### Create a new environment

To create a new environment:

* Head to the `Settings` page
* Select the `Environments` menu item listed `App: [Your App Name]`
* Click the `+ New environment` button and give a name for your new environment.
  * If needed, you can rename the environment later
* After clicking the `Create` button, the new environment will appear in the list alongside its associated `publishable key` and `secret key.`

<figure><img src="../../.gitbook/assets/Create a new environment-min.png" alt="Environments after adding a new environment"><figcaption><p>Environments after adding "Pre-Production"</p></figcaption></figure>

{% hint style="info" %}
The `Production` environment cannot be deleted or edited. New environments can be edited or deleted at any time.
{% endhint %}

### Switching Between Environments

You can switch between environments by:

* Click the environment listed in the left-hand navigation bar
* The current active environment name is highlighted in left-hand the navigation bar.

<figure><img src="../../.gitbook/assets/Switching Between Environments-min.png" alt="Switching between environments"><figcaption></figcaption></figure>

## Environment settings

There are three levels of settings in Reflag:

* `Organization`: _&#x43;_&#x6F;ntains the organization-wide settings
* `App: [Your App Name]`: Contains the application-wide settings
* `Environment: [Name]`: Contain environment-specific settings for the current application.

### Application-wide functionalities

When you're configuring application-wide settings, environments aren't applicable.

The following entities and configuration options are application-wide and not dependent on an environment:

* `Feature Views`: They're application-wide except for their `Slack Reporting` settings,
* `Company Segments`: They are shared across all environments. However, the companies in these segments will vary across environments.

### Production environment-based functionalities

There are environment-specific functionalities that are only allowed in the `Production` environment. These are:

* `Slack`: Reporting settings in Features and [Feature views](https://reflag.com/glossary/feature-views) can be configured from any environment, but are also reflected in the `Production` environment
* Some configuration sections are disabled if the selected environment is not `Production`.

{% hint style="info" %}
Some settings are `Production environment`-only and are disabled when a non-`Production` environment is active.
{% endhint %}

### Environment-based functionalities

All other settings and functionalities are environment-specific. Anything that requires data to be sent from the clients is inherently environment-specific. This includes:

* [Access rules](../feature-rollouts/feature-targeting-rules.md)
* [Automate feedback surveys](../launch-monitor/automated-feedback-surveys.md)
* [Feedback](../product-overview.md#feedback)
* [Tracking](../product-overview.md#tracking)
* Data export
