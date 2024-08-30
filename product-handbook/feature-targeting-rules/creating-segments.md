# Creating segments

## What is a segment?

Segments are reusable lists of companies created based on one or more shared attributes and/or feature metrics, such as `First seen` or `STARS step`.

In Bucket, segmentation is automatically conducted at the company level. Company segments can be used to create targeting rules.&#x20;

## Getting started <a href="#get-started" id="get-started"></a>

* Go to the `Companies` page on the sidebar
* Click on the `Add filter +` menu item to build your segment conditions

## Set segment conditions

Each segment is created using a set of conditions. You can add as many segmentation conditions as you’d like.&#x20;

### Conditions

There are 4 types of conditions:

* `Company attribute`
  * `Company ID`
  * `Company name`
  * `Any user-defined custom attributes`
* `Feature metric`&#x20;
  * `STARS`
  * `Frequency`
  * `Satisfaction`
  * `Event count`
  * `First used`
  * `Last used`
* `Feature targeting`&#x20;
  * Re-use targeting rules from another feature. You can choose to include or exclude companies that are targeted by another feature.&#x20;
* `Segment`&#x20;
  * Target existing segments that don’t use `First seen`, `Last seen`, or `Feature metrics` filters.
  * You can include or exclude companies that are part of a segment.

<figure><img src="../../.gitbook/assets/Company segment filters-min.png" alt=""><figcaption></figcaption></figure>

### **Operators**

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
* Feature targeting
  * `Is enabled`
  * `Is not enabled`
* Segment
  * `In segment`
  * `Not in segment`

## Save the segment

After adding any applicable conditions, you can save the segment. You can create as many segments as you need.

<figure><img src="../../.gitbook/assets/Saving New Segment-min.png" alt=""><figcaption></figcaption></figure>
