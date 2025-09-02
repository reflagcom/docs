---
description: Learn more about access rules in Reflag
---

# Access rules

## What are access rules?

Feature access lets you conditionally enable features for a company or a user.&#x20;

Using conditions based on company and user attributes, you can target specific groups of users and conditionally enable a feature for them.&#x20;

By using rollout percentages you can roll the feature out to only a certain percentage of companies in the group.

You'll find the feature access configuration under the `Access` tab in each feature.

## Getting started <a href="#get-started" id="get-started"></a>

* Create your [feature](https://app.reflag.com/)
* Select the `Access` tab

## Access rules

Reflag's access UI has been designed to cover the most common use cases in B2B companies.&#x20;

The default access criteria are:

* Company segments
* Companies
* Users

The default access criteria let you add segments, companies, and users without additional configuration.

<figure><img src="../../.gitbook/assets/Access (1).png" alt=""><figcaption></figcaption></figure>

## Advanced access rules

You can also create advanced access rules with the "+ Add Rule" button.

Advanced rules let you specify rollout percentages and create access rules using company attributes, user attributes, feature access, or other contexts.

### Conditions

Each access rule has a set of conditions. You can create as many rules with as many conditions as you’d like.&#x20;

There are 5 types of conditions:

* `Company attribute`
  * `Company ID`
  * `Company name`
  * `Any user-defined custom attributes`
* `User attribute`
  * `User ID`
  * `Email`
  * `Any user-defined custom attributes`
* `Segment`&#x20;
  * Existing segments created in the [Companies](../creating-segments.md) tab that don’t use `First seen`, `Last seen`, or `Feature metrics` filters.
  * You can include or exclude companies that are part of a segment.
* `Feature access`&#x20;
  * Re-use access rules from another feature. You can choose to include or exclude companies that have access to another feature.&#x20;
* `Other context`
  * Set access rules based on custom data that does not belong to a company or user but rather a specific situation that a company or user is in, like an `eventID`.
  * Example:
    * You can supply `eventID` in the other context. Then, you create a context rule that only enables a feature when your users are in the context of a specific event with the given event ID.

### Examples

Here are examples of access conditions:

* Companies with Company IDs 1 and 2: `Company attribute: Company ID IS ANY OF [1,2]`
* Give access to newly created companies: `Company attribute: createdAt LESS THAN [30] DAYS AGO`
* Give access to users with the manager role at all companies: `User attribute: role IS [manager]`
* Give access to companies in the Pro plan segment: `Segment: In segment ['Pro']`
* Give access to companies in the Beta users’  segment: `Segment: In segment ['Beta users']`
* Give access to companies who already have access to the Huddle feature: `Feature access: Feature [Huddle] is enabled`
* Enable feature for a single company but only when managing a particular event: `Company attribute: Company ID IS [42] AND Other context: eventID IS [641]`

<figure><img src="../../.gitbook/assets/There are 5 different types of conditions to chose from-min.png" alt="Bucket feature flag targeting rules"><figcaption><p>There are 5 different types of conditions to chose from</p></figcaption></figure>

## Setting multiple access rules <a href="#setting-multiple-targeting-rules" id="setting-multiple-targeting-rules"></a>

You can create as many access rules as you like. Rules are made up of individual conditions.

Companies will get access to your feature if they meet the criteria of any of the access rules. For a rule to match, they must meet all the conditions of that rule. In other words, there’s an `OR` between the rules and an `AND` between the conditions.

### Example

We’ve added two rules. The first rule has two conditions while the second rule has a single condition.&#x20;

If _**any**_ rules match, the feature will be enabled for a given company or user. A rule matches if _**all**_ conditions within it match.&#x20;

Another way to say this is that there’s an `OR` between the rules and an `AND` between the conditions.&#x20;

The rules you create will be different between [environments](feature-targeting-rules.md#environments).

<figure><img src="../../.gitbook/assets/An example targeting configuration with two rules.-min.png" alt="An example targeting configuration with two rules. "><figcaption><p>An example access configuration with two rules. In the first rule there are two conditions and one condition in the second rule. If any of the rules match and if all the conditions in a given rules match, the company/user will have access.</p></figcaption></figure>

## Specify rollout percentage

Select a rollout percentage (default value: 100%) to give access to a percentage of companies that match the access rules.

Specifying 0% will not enable the feature flag for anyone.

### **Rollout percentages**

Rollout percentages are stable. If the initial rollout percentage is 1% and you roll it out to 100% before rolling it back to 1%, the companies found in the 1% rollout will be the same.

However, companies within the rollout percentages aren’t consistent across features. The companies found in a 1% rollout percentage may be different for different features. To roll out two features to the same set of companies, use the `Feature access` condition.&#x20;

**Example**

You have rolled out `Feature A` and `Feature B` to 10% of the `Beta User` segment.

The set of companies within the `Beta User` segment with access to `Feature A` and `Feature B` will not be the same.

## Environments

You can switch between environments by clicking the environments in the left sidebar.

### **Example**

You give access to 100% of companies in the `Dev companies` segment in the Development environment when creating the feature.

In the Staging environment, roll out the feature to 100% of companies in the `Internal` segment, giving access to everyone in your organization so you can conduct QA testing, as well as to a specific partner who prefers to test new features before they are rolled out with a `Company ID` context rule.

After the initial QA testing in the Staging environment, you roll out the feature flag to 30% of companies within the `Beta customers` segment in the Production environment.

<figure><img src="../../.gitbook/assets/Feature targeting rules example-min.png" alt="Feature targeting example"><figcaption></figcaption></figure>

## Rolling back feature access changes

See previous access rules and roll back to past rules by following the `Version history` link.&#x20;

Find past versions and click the `Rollback button` to reimplement previous access rules.

Access rules that use segment rules are linked to the current version of the segment even if you roll back to a previous version of the access rules.

### **Example**

The `Beta customers` segment contains 40 companies. Version #1 of the Huddles gives access to 25% of companies in the `Beta customers` segment (10 companies) on January 1st.

On January 15th, you add 20 more companies to the `Beta customers` segment (60 companies).

On January 20th, Version #2 of the Huddles feature gives 50% of companies in the `Beta customers` segment (30 companies) access.

The next day, you roll it back to Version #1. Since the `Beta customers` segment now contains 60 companies, the feature will be available to 15 companies rather than 10 companies.

