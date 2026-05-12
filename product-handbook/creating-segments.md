---
description: Learn more about segments in Reflag
---

# Creating segments

## What's a segment?

Segments are reusable lists of companies or users created based off one of more of the following:

* [Company attributes](concepts/company.md#attributes)
* [User attributes](concepts/user.md)
* Flag access
* Flag metrics
* Feature feedback

Segments can be used as access rule for managing flag access.

## Getting started <a href="#get-started" id="get-started"></a>

* Go to the `Segments` page on the sidebar
* Click on the `Add filter +` menu item to build your segment conditions

## Set segment conditions

Each segment is created using a set of conditions. You can add as many segmentation conditions as you’d like.

### Conditions

There are 4 types of conditions:

* `Company attribute`
* `User attributes`
* `Flag access`
  * `is enabled`
  * `is not enabled`
* `Flag metric`
  * `Track count`
  * `Exposure count`
  * `First track`
  * `Last track`
* `Segment`
  * `in Segment`
  * `not in Segment`

<figure><img src="../.gitbook/assets/Screenshot 2025-09-12 at 15.13.45.png" alt="Using feature filters to create segments"><figcaption></figcaption></figure>

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
  * `Before date X`
  * `After date X`
* Flag access
  * `Is enabled`
  * `Is not enabled`
* Segment
  * `In segment`
  * `Not in segment`

## Save the segment

After adding any applicable conditions, you can save the segment. You can create as many segments as you need.

<figure><img src="../.gitbook/assets/Screenshot 2025-09-12 at 15.14.43.png" alt="Saving a segment"><figcaption></figcaption></figure>
