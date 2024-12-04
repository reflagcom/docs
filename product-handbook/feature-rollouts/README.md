# Feature rollouts

You release features gradually to de-risk rollouts. It's better that only a few beta accounts encounter bugs rather than the entire user base.&#x20;

Ideally, you first test internally and then roll out a limited release to beta customers. Once you've caught the major bugs or points of confusion, you release the feature to general availability.&#x20;

This is how to use Bucket to safely roll out [new features](../create-your-first-feature.md).

## Gradually roll out your feature

To roll out a feature in Bucket, you can use release stages or manually set targeting rules.

## Setting targeting rules

[Targeting rules](feature-targeting-rules.md) on Bucket are designed to simplify the rollout process in B2B companies.

The default targeting criteria are:

* Company segments
* Companies
* Users

These criteria let you add segments, companies, or users without additional configuration.

If you'd like to specify a [rollout percentage](feature-targeting-rules.md#specify-rollout-percentage) or create [advanced targeting rules](feature-targeting-rules.md#advanced-targeting-rules) using company attributes, user attributes, feature targeting, or other contexts, you can add additional targeting rules with the "+ Add Rule" button.

<figure><img src="../../.gitbook/assets/Setting targeting rules-min.png" alt="Setting targeting rules in Bucket"><figcaption></figcaption></figure>

## Using release stages

[Release stages](release-stages.md) let you easily signal features' rollout progress to your team and, optionally, set targeting rules for each stage of the rollout process.&#x20;

Release stages are designed to support the common use case of taking a feature from development to internal testing to a beta testing phase, then finally released to everyone.

New apps come with 4 default release stages: In development, Internal, Beta, and General availability.

### **Configure release stages**

Release stages come with a set of [default targeting rules](release-stages.md#default-settings).&#x20;

{% hint style="info" %}
The Beta stage _**doesn't**_ include any default targeting rules. This makes it simple to select the relevant beta customers for each feature.
{% endhint %}

Targeting rules can be easily configured under the [App Settings](https://app.bucket.co/envs/current/settings/app-stages).  You can update the rules to include No one, Everyone, or only specific segments, companies, or users.

You are also able to select a roll-out percentage for any chosen segments.&#x20;

You can use release stages purely to signal a feature's rollout progress to the rest of the team without setting any default targeting rules.

Simply remove the default targeting rules and set the targeting rules to "Some" with no specified segments, companies, or users for your desired environments. This will give you empty [targeting rules](feature-targeting-rules.md) that can be manually defined for each feature.

<figure><img src="../../.gitbook/assets/Global settings - Manual Targeting-min.png" alt="Manual targeting rules with Release Stages in Bucket"><figcaption></figcaption></figure>

### **Rolling out a feature**

#### **In development**

When you create a new feature, it is placed in the "In development" stage by default. This release stage signals that a feature is currently being built.&#x20;

#### **Internal**

The "Internal" stage signals that a feature is ready for internal QA testing.&#x20;

#### **Beta**

After internal QA testing is complete, a feature can be moved to the "Beta" stage. This stage signals that a feature is ready to be tested by a limited segment of users.

<figure><img src="../../.gitbook/assets/Release Stage Beta Targeting Rules-min.png" alt="Targeting rules in the Bucket UI"><figcaption></figcaption></figure>

#### **General availability**

After rolling out a feature to your beta users and making any fixes, you can move to the "General availability" stage. This stage signals that a feature is now live to your general user base.
