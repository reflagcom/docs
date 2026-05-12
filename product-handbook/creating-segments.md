---
description: Learn more about segments in Reflag
---

# Creating segments

## What segments are

Segments are reusable audiences built from companies, users, or both together.

You build them from filters such as company lists, user lists, [company attributes](concepts/company.md#attributes), [user attributes](concepts/user.md), flag access, and flag metrics.

Use segments when you want to save an audience once and reuse it across multiple flags in [access rules](feature-rollouts/feature-targeting-rules.md).

## Create a segment <a href="#create-a-segment" id="create-a-segment"></a>

1. Open **Segments** in the sidebar.
2. Click **Add filter +**.
3. Add the conditions for the companies, users, or combined audience you want to include.
4. Save the segment.

## Choose segment conditions

Each segment uses one or more conditions. Add as many conditions as you need.

### Condition types

You can build a segment from these condition types:

* `Company attribute` — match company data such as `plan IS 'pro'`
* `User attribute` — match user data such as `role CONTAINS 'admin'`
* `Company list` — search by company name or paste company IDs
* `User list` — search by user name or paste user IDs
* `Flag access`
  * `Is enabled`
  * `Is not enabled`
* `Flag metric`
  * `Track count`
  * `Exposure count`
  * `First track`
  * `Last track`
* `Segment`
  * `In segment`
  * `Not in segment`

<figure><img src="../.gitbook/assets/Screenshot 2025-09-12 at 15.13.45.png" alt="Using flag filters to create segments"><figcaption></figcaption></figure>

### How conditions work

All conditions in a segment must match.

That means segment conditions work like `AND`.

You can combine company conditions and user conditions in the same segment.

### Common examples

* Pro customers — `Company attribute: plan IS 'pro'`
* Admin users at beta companies — `User attribute: role CONTAINS 'admin'` and `Segment: In segment 'Beta customers'`
* Companies with access to a flag — `Flag access: [Flag name] is enabled`

### Available operators

Operators depend on the condition type:

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

## Save and reuse the segment

After you save a segment, you can reuse it in flag [access rules](feature-rollouts/feature-targeting-rules.md) and rollout workflows.

You can create as many segments as you need.

<figure><img src="../.gitbook/assets/Screenshot 2025-09-12 at 15.14.43.png" alt="Saving a segment"><figcaption></figcaption></figure>
