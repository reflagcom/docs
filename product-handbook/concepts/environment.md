# Environment

### Definition

Environments, in Reflag, serve to fully segregate the collected data. In practice, this means that any data received by our [public API](../../api/api-reference.md) in the "_Production_" environment for example, will be completely different from the data collected in other environments. Specifically, this pertains to:

* [Companies](company.md)' details that have been collected
* [Users](user.md)' details
* [Track events](event.md)
* Collected [feedback](feedback.md)
* [Feature events](feature-events.md)

Aside from the collected data itself, there are a number of environment-specific settings and behaviors that can be configured on [features](feature.md) and [feature views](../feature-views.md). Additionally, any [targeting rules](targeting-rules.md) used within the app use environment-specific data.

Each new [app](app.md), comes with three predefined environments: **Production**, **Staging** and **Development**.

You can create or delete any environment at any time, except the Production environment.&#x20;

{% hint style="danger" %}
Deleted environments cannot be restored, and all collected data for that environment will essentially be lost.&#x20;
{% endhint %}

The main use case for environments is to test if data is coming through as expected and if features are set up correctly on local or staging environments before releasing to production.

### Next steps

* Learn about [users](user.md) and [companies](company.md),
* Learn how to [manage environments ](../creating-and-managing-apps/environments.md)within Reflag UI.
