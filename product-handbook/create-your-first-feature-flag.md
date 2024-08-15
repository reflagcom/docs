---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Create your first feature flag

### What's a feature flag?

Feature flags let you enable certain functionalities for certain users. Using conditions based on company and user attributes, you can [target](create-your-first-feature-flag.md#set-targeting-rules) specific groups of users and conditionally enable a feature for them. By using [rollout percentages](create-your-first-feature-flag.md#specify-rollout-percentage) you can roll the feature out to only a certain percentage of companies in the group.

### Get started

1. Navigate to Flags and click the `New feature flag` button
2. Enter a feature flag key which you will use to refer to the feature flag from code.

### Set targeting rules

#### Segment rules

Segment rules are used for targeting repeatable segments of customers. Any company in the segment you choose has access to the feature flag.

#### Context rules

Context rules let you define a set of one-off conditions without creating a segment. Additionally, you set targeting rules based on non-company data like `user.email` or similar.

You can use the following data and operators to build conditions:

**Data available for conditions:**

* Company attributes
  * `Company ID`
  * `Company name`
  * `Any user-defined custom attributes`
* User attributes
  * `User ID`
  * `Email`
  * `Any user-defined custom attributes`
* Segments
  * Existing segments created in the Companies tab that don’t use `First seen`, `Last seen`, or `Feature metrics` filters.&#x20;
* Other context
  * Other information that is not dependent on a company or user, like an event ID
  * Example:
    * You can supply `eventID` in the other context. Then, you create a context rule that only enables a feature flag when your users are in the context of a specific event with the given event ID.

**Operators**&#x20;

* Any
  * `Is`
  * `Is not`
  * `Has any value`
  * `Has no value`
* Text
  * `Contains`
  * `Does not contain`
* List
  * `Is any of`
  * `Is not any of`
* Number
  * `Less than`
  * `Greater than`
* Boolean
  * `Is true`
  * `Is false`
* Date
  * `Less than X days ago`
  * `More than X days ago`

**Examples**

Here are a few examples of targeting conditions you can express:

* Target companies with Company IDs 1 and 2: `company.id IS ANY OF [1,2]`
* Give access to newly created companies: `company.created LESS THAN [30] DAYS AGO`
* Give access to users with the `manager` role at all companies: `user.role IS [manager]`

<figure><img src="../.gitbook/assets/Targeting rules.png" alt=""><figcaption></figcaption></figure>

### Specify rollout percentage

Select a rollout percentage (default value: 100%) to give access to a percentage of companies that match the targeting rules.&#x20;

Specifying 0% will not enable the feature flag for anyone.

#### Rollout percentages

Rollout percentages are stable. If the initial rollout percentage is 1% and you roll it out to 100% before rolling it back to 1%, the companies found in the 1% rollout will be the same.&#x20;

However, companies within the rollout percentages aren’t consistent across different feature flags. &#x20;

**Example**

You have rolled out Feature Flag A and Feature Flag B to 10% of the `Beta User` segment.&#x20;

The companies within the `Beta User` segment with access to Feature Flag A and Feature Flag B will _**not**_ be the same.&#x20;

### Setting multiple targeting rules

You can create as many targeting rules as you like. Rules are made up of individual conditions.&#x20;

Companies will get access to your feature flag if they meet the criteria of any of the targeting rules. For a rule to match, they must meet all the conditions of that rule. In other words, there’s an `OR` between the rules and an `AND` between the conditions.

**Example**

You can give access to 100% of the companies in the `Beta customers` segment `AND` 1% in the `All companies` segment.&#x20;

<figure><img src="../.gitbook/assets/Setting multiple targeting rules.png" alt=""><figcaption></figcaption></figure>

### Environments&#x20;

Apply different targeting rules to distinct [environments](environments.md). You can switch between environments by clicking the `Edit in [Environment]` button.&#x20;

The default environment is Production.&#x20;

**Example**

You give access to 100% of companies in the `Dev companies` segment in the Development environment when creating the feature.

In the Staging environment, roll out the feature to 100% of companies in the `Internal` segment, giving access to everyone in your organization so you can conduct QA testing, as well as to a specific partner who prefers to test new features before they are rolled out with a `Company ID` context rule.&#x20;

After the initial QA testing in the Staging environment, you roll out the feature flag to 30% of companies within the `Beta customers` segment in the Production environment.

<figure><img src="../.gitbook/assets/Rules in other environments.png" alt=""><figcaption></figcaption></figure>

First, set up a Bucket SDK for your language and framework. Find the [supported languages here.](../quickstart/supported-languages.md)

Then, go to [Releases](create-your-first-release.md) and select the `Choose a flag` dropdown.&#x20;

### Rolling back feature flags

See past targeting rules and roll back to past rules in the `Change history` tab. Find the past version you’d like to revert to and click the `Rollback` button to reimplement past targeting rules.&#x20;

Targeting rules that use segment rules are linked to the current version of the segment even if you roll back to a previous version of the flag rules.&#x20;

**Example**

The `Beta customers` segment contains 40 companies. Version #1 of the Huddles feature flag targeted 25% of companies in the `Beta customers` segment (10 companies) on January 1st.&#x20;

On January 15th, you add 20 more companies to the `Beta customers` segment (60 companies).

On January 20th, Version #2 of the Huddles feature flag targets 50% of companies in the `Beta customers` segment (30 companies).&#x20;

The next day, you roll it back to Version #1. Since the `Beta customers` segment now contains 60 companies, the feature flag will be available to 15 companies rather than 10 companies. &#x20;

<figure><img src="../.gitbook/assets/Rolling back flags-V2.png" alt=""><figcaption></figcaption></figure>

### Other settings

In the `Settings` tab, you can do the following:

* Add or update the feature flag description
* Enable Slack notifications when the flag version changes
* Delete the feature flag
