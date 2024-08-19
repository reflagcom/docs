# Create your first feature

### What's a feature?

A feature feature is an entity that tracks events or company attribute changes over time. It also defines an adoption threshold and a target segment.

### Getting started

* Navigate to Features and click the `New feature` button
* Give the feature a name

### Select a feature view

Feature views let you group and organize features, customize Slack reporting, and save column configurations. You can create as many feature views as you need.\
\
Bucket includes two default feature views: All features and Key features.

### Enable Live Satisfaction

Enable [Live Satisfaction](automated-feedback-changes.md) to collect in-app user feedback on a feature after the user surpasses the minimum number of interactions.&#x20;

You can also customize the prompt when creating a new feature.

<figure><img src="../.gitbook/assets/Track new feature V2-min.png" alt=""><figcaption></figcaption></figure>

### Choose the source

You can select either Event or Company attributes.

#### **Events**

Events track user interactions. For example, this could include clicking a button or changing a value. You can choose from the list of previously recorded events or specify another value that you expect will be tracked in the future.

You can add attribute filters to restrict which events are taken into consideration. Only events that match the attribute filters will track activity for the feature.&#x20;

**Selecting multiple events**

The `OR` operator lets you specify multiple events with the feature. If any specified events are triggered, they will be logged and aggregated under the feature.

#### **Company attributes**

Company attributes let you track workspace features using user-defined company attributes.

Company attributes are permanent properties of the company. They change only when you explicitly track a different value. For example, this could include changes to a company's name, logo, plan, or number of seats.&#x20;

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

**Selecting multiple company attributes**&#x20;

The `AND` operator lets you set more granular filters by requiring multiple conditions to be met. Companies need to meet all attribute conditions to trigger the feature.

### Select a target segment

Choose the [segment](../introduction/concepts/segment.md) of companies that the feature will be rolled out to.&#x20;

All companies is the default value.&#x20;

**Example**

Only companies on the Business Plan should have access to the Huddles feature. You would select the Business Plan segment to ensure only companies within that segment have access.

### Start tracking the feature

Set up a Bucket SDK for your language and framework. Find the [supported languages here.](../quickstart/supported-languages.md)

Then, go to [Releases](create-your-first-release.md) and select the `Choose a feature` dropdown.&#x20;
