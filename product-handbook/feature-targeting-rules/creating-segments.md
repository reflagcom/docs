# Creating segments

## What's a segment?

Segments are reusable lists of companies created based off one of more of the following:

* [Company attributes](../../introduction/concepts/company/attribute.md)&#x20;
* Feature access
* Feature metrics
* Feature feedback

Company segments can be used as access rule for managing feature access.

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
  * `any custom attributes`
* `Feature access`&#x20;
  * `isEnabled`
* `Feature metric`&#x20;
  * `STARS`
  * `Frequency`
  * `Satisfaction`
  * `Event count`
  * `First used`
  * `Last used`
* `Segment`&#x20;
  * `in Segment`
  * `not in Segment`

<figure><img src="../../.gitbook/assets/Set segment conditions-min.png" alt="Using feature filters to create segments"><figcaption></figcaption></figure>

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
* Feature access
  * `Is enabled`
  * `Is not enabled`
* Segment
  * `In segment`
  * `Not in segment`

## Save the segment

After adding any applicable conditions, you can save the segment. You can create as many segments as you need.

<figure><img src="../../.gitbook/assets/Save the segment-min.png" alt="Saving a segment"><figcaption></figcaption></figure>
