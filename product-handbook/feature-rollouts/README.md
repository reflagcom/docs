---
description: Learn more about flag rollouts in Reflag
---

# Flag rollouts

You release flags gradually to de-risk rollouts. It is better for a few beta accounts to encounter bugs than your entire user base.

Ideally, you test internally first and then roll out a limited release to beta customers. Once you catch the major bugs or points of confusion, you release the flag to general availability.

## Gradually roll out your flag

To roll out a flag in Reflag, set access rules.

## Setting access rules

[Access rules](feature-targeting-rules.md) in Reflag are designed to simplify rollouts for B2B companies.

The default access criteria are:

* Company segments
* Companies
* Users

These criteria let you add segments, companies, or users without additional configuration.

If you'd like to specify a [rollout percentage](feature-targeting-rules.md#specify-rollout-percentage) or create [advanced access rules](feature-targeting-rules.md#advanced-targeting-rules) using company attributes, user attributes, flag access, or other context, you can add additional rules with the "+ Add rule" button.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 13.14.44.png" alt="Setting targeting rules in Reflag"><figcaption></figcaption></figure>

## Using release stages

Release stages let you signal a flag's rollout progress to your team and optionally set access rules for each stage.

Release stages are designed to support the common path from development to internal testing to beta, and then to general availability.

New apps come with 4 default release stages: In development, Internal, Beta, and General availability.

{% hint style="info" %}
Release stages are fully customizable. Go to the [Release stages settings](https://app.reflag.com/env-current/settings/app-stages) to adapt them to your needs.
{% endhint %}

#### **In development**

When you create a new flag, it is placed in the "In development" stage by default. This stage signals that the flag is still being built.

#### **Internal**

The "Internal" stage signals that a flag is ready for internal QA testing.

#### **Beta**

After internal QA testing is complete, a flag can be moved to the "Beta" stage. This stage signals that the flag is ready to be tested by a limited segment of users.

<figure><img src="../../.gitbook/assets/Screenshot 2025-09-12 at 13.18.07.png" alt="Targeting rules in the Reflag UI"><figcaption></figcaption></figure>

#### **General availability**

After rolling out a flag to your beta users and making any fixes, you can move to the "General availability" stage. This stage signals that the flag is now live for your general user base.
