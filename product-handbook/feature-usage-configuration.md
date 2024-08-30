# Feature usage configuration

## Introduction

Bucket tracks feature usage through `events` or `company attributes`.&#x20;

`Events` track user interactions and are generated from your application whenever a user _does something_.&#x20;

#### Example

A user clicks a button or changes a value.&#x20;

You can also track feature usage with `company attributes`.&#x20;

When a user enables a feature in your application, you set a `company attribute`.&#x20;

#### Example

If a user in a company sets up a new integration, you can set  `has_some_integration: true`.&#x20;

<figure><img src="../.gitbook/assets/Feature usage configuration-v2-min.png" alt=""><figcaption></figcaption></figure>

## **Event-based usage**

Features are event-based by default. Bucket uses events containing a `feature key` to track usage. &#x20;

However, you can specify a different event or filter out select events. If you use [Segment](https://segment.com) or similar, this is quite common.

You can find the `Usage configuration` section under the `Settings` tab in each feature.&#x20;

You can choose from previously recorded events or specify another value that will be tracked in the future.

You can add `attribute filters` to restrict which events are taken into consideration. Only events that match the `attribute filters` will be tracked.&#x20;

The `OR` operator lets you specify multiple events with the feature. If any specified events are triggered, they will be logged and aggregated under the feature.

## **Company attribute-based features**

`Company attributes` let you track workspace features using user-defined company attributes.

`Company attributes` are permanent properties of a company. They only change when a different value is tracked.

#### Example

This could include changes to a company's name, logo, plan, or number of seats.&#x20;

### **Operators**&#x20;

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

The `AND` operator lets you set more granular filters by requiring multiple conditions to be met. Companies need to meet all attribute conditions to trigger the feature.
