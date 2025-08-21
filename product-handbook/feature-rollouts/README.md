---
description: Learn more about feature rollouts in Bucket
---

# Feature rollouts

You release features gradually to de-risk rollouts. It's better that only a few beta accounts encounter bugs rather than the entire user base.&#x20;

Ideally, you first test internally and then roll out a limited release to beta customers. Once you've caught the major bugs or points of confusion, you release the feature to general availability.&#x20;

This is how to use Bucket to safely roll out [new features](broken-reference).

## Gradually roll out your feature

To roll out a feature in Bucket, you can set access rules.

## Setting access rules

[Access rules](feature-targeting-rules.md) on Bucket are designed to simplify the rollout process in B2B companies.

The default access criteria are:

* Company segments
* Companies
* Users

These criteria let you add segments, companies, or users without additional configuration.

If you'd like to specify a [rollout percentage](feature-targeting-rules.md#specify-rollout-percentage) or create [advanced access rules](feature-targeting-rules.md#advanced-targeting-rules) using company attributes, user attributes, feature access, or other contexts, you can add additional access rules with the "+ Add Rule" button.

<figure><img src="../../.gitbook/assets/Setting targeting rules v3-min.png" alt="Setting targeting rules in Bucket"><figcaption></figcaption></figure>

## Using release stages

Release stages let you easily signal features' rollout progress to your team and, optionally, set access rules for each stage of the rollout process.&#x20;

Release stages are designed to support the common use case of taking a feature from development to internal testing to a beta testing phase, then finally released to everyone.

New apps come with 4 default release stages: In development, Internal, Beta, and General availability.

{% hint style="info" %}
Release stages are fully customizable. Go the the [Release stages settings](https://app.bucket.co/env-current/settings/app-stages) to adopt them to your needs.
{% endhint %}

#### **In development**

When you create a new feature, it is placed in the "In development" stage by default. This release stage signals that a feature is currently being built.&#x20;

#### **Internal**

The "Internal" stage signals a feature is ready for internal QA testing.&#x20;

#### **Beta**

After internal QA testing is complete, a feature can be moved to the "Beta" stage. This stage signals that a feature is ready to be tested by a limited segment of users.

<figure><img src="../../.gitbook/assets/Release Stage Beta Targeting Rules v3-min.png" alt="Targeting rules in the Bucket UI"><figcaption></figcaption></figure>

#### **General availability**

After rolling out a feature to your beta users and making any fixes, you can move to the "General availability" stage. This stage signals that a feature is now live to your general user base.
