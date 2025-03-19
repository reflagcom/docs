---
description: >-
  We ship product updates weekly. Follow us @bucketdotco on Twitter/X for the
  latest.
---

# Changelog

## Event log

`2025-03-19`

The Event log shows the data your apps send to Bucket. Filter them by type and get detailed context for quick debugging.

## Toolbar

`2025-03-18`

Toggle features on and off when building locally.

## CLI

`2025-03-17`

Create new features from the command line and maintain type safety while building. When creating a new feature, the [CLI](../sdk/documents/cli/) updates your local types to make sure they match types defined in Bucket.

Start now:

```bash
npm i @bucketco/cli
```

## Add in bulk

`2025-03-13`

For Pro customers, we just released bulk actions. Select multiple customers and give them access to features in bulk.

## Event listeners

`2025-03-06`

Integrate Bucket through event listeners in the Bucket SDKs.

## Beta Remote Config

`2025-02-27`

**New in Beta**: Introducing [remote feature configuration](../product-handbook/remote-config.md) to Bucket — a dynamic, flexible approach to configuring feature behavior outside of your app, without needing to re-deploy it.

## Custom feature key naming convention

`2025-02-20`

Define your feature key naming convention when creating a new feature: kebab-case, camelCase, SNAKE\_UPPER\_CASE...

## Secret features

`2025-02-18`

Mark features as secret so you can use them on your backend and ensure that the feature key is not revealed to any users.

## Custom avatars

`2025-02-12`

When browsing companies or users, we now display company logos and user pics, rather than randomly generated avatars.

## Improved feature tabs

`2025-01-21`

We've updated the feature tabs to align with your rollout process with a dedicated tab per use case.

## Toggle feature access per company

`2025-01-15`

You can now toggle features access directly on the company pages. This makes it simpler to grant companies access to features in the Bucket UI.

## OpenFeature Tracking API support

`2025-01-08`

You can now use your [adoption metrics](../product-handbook/feature-usage-configuration.md) and [automated feedback surveys](../product-handbook/feature-analysis/automated-feedback-surveys.md) through [OpenFeature](../supported-languages/openfeature.md).

## Deeplinks

`2025-12-23`

We've added support for deep linking to the Bucket app. Replace the environment name and ID in the URL with `/current/`.

## Simplified Targeting UI

`2025-12-10`

We've simplified the targeting UI to make it more intuitive.

## Adding Feedback button

`2024-12-02`

We've made adding a feedback button for features much simpler. It's as easy as adding the button to your UI and calling the `requestFeedback` function.

## Demo app

`2024-11-25`

When you [sign up](https://app.bucket.co/signup) for the first time, you now get a feel for Bucket with a demo app full of realistic data.

## Stages

`2024-11-12`

We've just added release stages to make it simpler to gradually release features. Stages make it easy for your team to see which rollout stage a feature has reached.

## Remote attributes

`2024-11-07`

Introducing remote attributes to make Bucket faster and easier to implement. Company and user attributes stored on our servers can now be used when evaluating feature flags.

## Stale flags detection

`2024-10-31`

Detect stale feature flags by adding the “Last check” view column to the feature tab.

## Feature descriptions

`2024-10-29`

We've just added feature descriptions to Bucket. Document each feature’s functionalities with full markdown support.

## Fast data tables

`2024-10-25`

We've finished a comprehensive refactoring of our data tables, mainly used on feature views and segments, to significantly improve performance.

## Sign up with email and password

`2024-10-03`

We've made it possible for non-Google SSO users to get started with Bucket. You can now [sign up](https://app.bucket.co/signup) with Google or a regular email and password.

## Improved automated feedback indicator

`2024-09-06`

See which features have [automated feedback surveys](../product-handbook/feature-analysis/automated-feedback-surveys.md) activated.

## OpenFeature support

`2024-09-19`

Quickly migrate to Bucket with our OpenFeature Node.js and Browser SDKs.

## Auto-join

`2024-09-12`

Invite your colleagues to Bucket. Anyone who signs up for Bucket with your company domain will automatically join your organization.

## Segment filters

`2024-08-15`

We’ve added feature flag and segment filters to [targeting rules](../introduction/concepts/targeting-rules.md) and company segmentation.

## Segments archiving&#x20;

`2024-08-07`

Segments attached to one or more feature flags are now automatically archived instead of deleted.

## Downtime protection and improved latency with Local Evaluation

`2024-07-25`

We've added local evaluation to Bucket to improve latency and provide downtime protection.

## Multi-select filter operators

`2024-07-11`

Filter using the `ANY OF` and `NOT ANY OF` operators.

## Environments

`2024-06-26`

We’ve added [environments](../product-handbook/feature-targeting-rules/environments.md) to Bucket to let you create and manage distinct environments within Bucket, like development, staging, and production.

## Feature flags

`2024-06-19`

We've launched feature flags on Bucket. It's built for SaaS and tightly integrated with Releases.

## Adding a global feedback page

`2024-05-22`

We've made it simpler to review feedback on all your features in one place with the global feedback page.&#x20;

## Behavioral segments

`2024-05-14`

Now, you can create company-based segments by STARS state, usage frequency, customer satisfaction, event counts, and first or last usage date.&#x20;

## Improved Goals

`2024-05-09`

Stay on top of your feature releases' goal progression. You can now get more details of goal progression directly in Releases and more.&#x20;

## Visualize feature satisfaction over time

`2024-04-30`

We've made it simple to visualize overall feature satisfaction over time for companies in any STARS state. The visualization gives you a simple way to ensure you're making iterations that improve feature satisfaction scores.&#x20;

## Clear sidebar

`2024-04-24`

We've added new core functionalities to Bucket: Releases and feature flags. With the release of these new features, we’ve cleaned up the sidebar.&#x20;

## Search for companies and features

`2024-04-09`

You can now search by company or feature name to find key customers and see how they're using your features.

## Persisting columns for feature views and segments

`2024-04-02`

Now, you can (finally) save your customized feature view and segment tables so they are there waiting for you on your next login.

## Implement Bucket without engineering resources

`2024-03-22`

We've made it even easier to get Bucket up and running without involving the engineering team with the new Bucket Tracking SDK on Segment. Setting up browser tracking can be done in as little as three steps.&#x20;

## Introducing Releases: Tracking feature releases from idea through iteration

`2024-02-27`

We've released our most impactful feature yet: Releases. Releases lets you monitor feature engagement and satisfaction goal progression for each release in real-time from ideation to iteration.

## Grouping features with hierarchies

`2024-02-20`

We're introducing feature hierarchies to make managing features in Bucket more intuitive! You can create parent features that encompass all sub-features by simply dragging and dropping.

## Track multiple events in a feature

`2024-02-08`

Previously, each feature on Bucket was tied to a single event, limiting its adaptability. We've introduced a significant change that lets you associate multiple events with a single feature.

## Bucket data is hosted in the EU

`2024-01-23`

We're excited to announce that we have migrated all our servers to locations within the European Union (EU), taking our commitment to privacy and security even further.

## Adding frequency-based strategy capabilities to the STARS configuration

`2024-01-17`

We've just made the STARS configuration more customizable by adding frequency-based strategy capabilities. This lets you factor in the frequency of interactions for the Adopted criteria.

## Feature and attribute columns in segments

`2024-01-10`

Segments allow you to group companies by login activity and custom attributes. This is useful for making a segment of monthly active companies or paying customers, for example. However, when browsing a segment, it isn't possible to add columns that also show feature engagement or satisfaction. Until now!&#x20;

## Surfacing churned companies better&#x20;

`2024-01-04`

Bucket is built on the [STARS framework](../product-handbook/feature-analysis/stars-framework.md) and gives you a STARS funnel out of the box, for any feature. Provided with a single event, the STARS funnel shows you how far your customers have reached in the “feature success funnel” for a feature.&#x20;

## Automatic data export for custom analysis

`2023-11-30`

With the automatic data export to S3 you can now seamlessly enrich your data with Bucket’s data to unlock insights and enable collaboration across teams.&#x20;

## Track response rates for Live Satisfaction

`2023-11-15`

With the new statistics in the Feedback tab you can get a quick visual overview over the performance of your feedback collection over the past 7 days.&#x20;

## Configure and customize table columns

`2023-11-09`

You can now add, remove and reorder table columns across the Bucket app.&#x20;

## Live Satisfaction

`2023-11-01`

Harness the power of qualitative feedback right from within Bucket.&#x20;

## Subsegmentation

`2023-10-12`

We've rolled out Subsegmentation to enable comparisons of feature adoption, retention, and satisfaction across different customer segments.&#x20;

## Data Export

`2023-09-27`

We've added the option to export your Bucket data as a CSV file.&#x20;

## Inspect event attributes and see related features&#x20;

`2023-08-31`

We've just made it easier to debug event data and to turn any event into a Bucket feature.&#x20;

## Analyze feature usage and satisfaction at the company-level&#x20;

`2023-08-10`

We've just shipped an update to the company view that enables you to view feature engagement and satisfaction through the lens of a single company account.&#x20;

## Sorting the features table&#x20;

`2023-08-03`

It's now possible to sort the feature views by column. This enables you to quickly get a list of features with the highest retention, the lowest satisfaction, most frequency of use or latest release date.&#x20;

## Audit Matrix

`2023-07-06`

Using the [STARS framework](../product-handbook/feature-analysis/stars-framework.md) on Bucket, you can quickly establish a consistent baseline for customer engagement and satisfaction of any feature. But how does one feature compare to other key features in your product? And how do those comparisons change over time? Answering those critical questions has just gotten a whole lot easier as we’re introducing the Bucket Audit Matrix!&#x20;

## Qualitative feedback&#x20;

`2023-04-04`

Our mission is to empower product teams to deliver impactful features that delight and retain customers. Today, we’ve added a major addition to our service that brings us closer to our mission: Introducing in-app qualitative feedback!&#x20;

## Feature evaluation workflow&#x20;

`2023-03-14`

Todo -> Doing -> Done. But what happens when a feature is marked as Done? It’s deployed and live with the customers. That’s undoubtedly the most crucial time in the feature cycle, and that’s exactly where existing tools and workflows stop today. It’s nuts!&#x20;

## Planned features&#x20;

`2023-03-03`

Adding tracking to a feature release is often an afterthought or forgotten altogether. Many engineers have received a DM from a PM around the time of feature release saying something frantic like: “did you remember to add tracking? we need to track this feature!”&#x20;

## Reach out to users of specific features&#x20;

`2023-02-16`

If you're detecting high churn or low activation on a key feature, you want to reach out to the relevant accounts for feedback, and learn how you might improve the feature.&#x20;

## Segments&#x20;

`2023-01-10`

We've just shipped a highly requested feature: Saved segments. This feature allows you to group companies into reusable segments, which you can apply to any feature report. You group companies by company attributes.&#x20;

## Feature tracking health&#x20;

`2022-12-06`

Dashboards always come with a trust issue: Can you trust the metrics? Is the tracking still working? To address this issue, the Bucket feature report now includes tracking health indicators to help ensure that the data is still coming through and that the report is based on the most recent data.&#x20;

## Make Bucket your own with custom logo&#x20;

`2022-11-30`

You can now customize your organization with your own logo.&#x20;

## Get a weekly Focus report per Feature View&#x20;

`2022-11-17`

We've recently released Focus Mode and Feature Views. Today, we've fully integrated the two which enables you to set up Focus Slack reports per Feature View!&#x20;

## Organize features with Views&#x20;

`2022-11-08`

Large accounts quickly track a lot of features, which means a growing need to get those features organized. A common way to group features is by product team or by product area.&#x20;

## New sidebar and UI polish

`2022-10-27`

We've just updated our UI with a brand new sidebar, and a bunch of general UI polish to ensure the app stays clean and keeps focus on the content.&#x20;

## Focus Mode

`2022-10-13`

Focus Mode enables product teams to keep an eye on the features that need attention the most - often newly released features - by pinning those in the UI and reporting their metrics to Slack, every Monday.&#x20;

## Support for event attribute filtering on funnel steps

`2022-08-31`

If your feature has an onboarding funnel, you can now filter on event attributes when creating funnel steps.&#x20;

## Sort by when companies used a feature

`2022-08-15`

You can now sort companies by when they first or last used a feature. When shipping a new feature, this view enables you to easily track its new adopters.&#x20;

## Performance boost for larger accounts

`2022-08-04`

We've spent the past weeks making significant improvements to load times in Bucket. The application was getting pretty slow for accounts with a large number of end-users (\~20K+) that also tracked a large number of features.&#x20;

## Selecting events by attributes

`2022-07-21`

When creating a feature in Bucket it is now possible to specify that only events with attributes which fulfill certain criteria be included in the feature report. This makes it even easier to start tracking advanced features in Bucket!&#x20;

## Onboarding funnels for attribute-based features

`2022-07-15`

This week we extended the functionality we shipped last week - feature onboarding funnels - to work for features that track feature-usage using attributes.&#x20;

## Feature onboarding funnel

`2022-07-08`

The Bucket feature report has four feature adoption states. All of your companies are placed in one of these states based on their usage of the respective feature.&#x20;

## Feature frequency score

`2022-07-01`

When you track an event-based feature on Bucket, you want to know how often your users interact with the feature. The Bucket frequency score tells you exactly that.&#x20;

## Design and layout upgrade

`2022-06-24`

We've given our UI a facelift and improved the layout. Most changes are subtle, but they add up and give a much more polished look and feel, and a more scalable interface.&#x20;

## Attribute-based feature tracking

`2022-06-10`

It's common to track company-level features using attributes. For example, at Bucket, we're tracking if customers use our weekly reporting feature. We do this by passing an attribute called "weekly\_reporting" via Segment’s "group" call.&#x20;

## Typeahead search in dropdowns

`2022-05-27`

We've added typeahead search to the various dropdowns in the Bucket UI. It's now much faster to find the event you’re looking for when tracking a new feature.&#x20;

## Toggle “Stopped”-metrics in your feature report

`2022-05-20`

This week, we're adding to last week's release, which focused on making the feature adoption criteria configurable. Today, we’ve added another configuration, which allows you to toggle the “Stopped”-metrics on or off in your report.&#x20;

## Custom feature adoption criteria

`2022-05-12`

One of the most powerful features on Bucket, is the pre-defined adoption states. Out of the box, Bucket buckets (see what we did there?) companies into the following states based on their historic feature usage pattern. Until today, those state definitions were hard-coded.&#x20;

## Partial data marker and new daily Slack report

`2022-05-05`

Our charts now show a partial data marker when looking at the current week's incomplete data set, and we've added a daily digest to our Slack integration that lets you track new feature adoption.&#x20;

## Delta movements

`2022-04-29`

When looking at adoption of a feature, you might wonder: Is this feature not growing in usage because no new users are trying it or because existing users churn away? Or both? With delta movements, now you know!
