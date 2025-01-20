# Release stages

## What are release stages?

Release stages make it easy for your team to easily follow a feature's rollout progress.

They reflect the common use case of taking a feature from development to internal testing to an optional beta testing phase, then finally released to everyone.&#x20;

A release stage consists of a name, color, set of [access rules](feature-targeting-rules.md), and rollout percentage.&#x20;

## How to use release stages

To apply a stage to a feature, go to the Access tab and select a release stage that best reflects the feature's current rollout state.

Release stages act as signals of the progression of a feature release to your team.

You can also configure default access rules for each release stage that will be automatically applied when you change the stage. You have complete flexibility to add [custom release stage access rules](release-stages.md#customizing-release-stage-targeting-rules).

<figure><img src="../../.gitbook/assets/How to use release stages-min (1).png" alt="How to use release stages in Bucket"><figcaption></figcaption></figure>

## Default settings

New apps come with 4 default release stages: In development, Internal, Beta, and General availability.&#x20;

The default release stages come with the following default access rules:

### In development

| Environment     | Access Rules |
| --------------- | ------------ |
| Development[^1] | Everyone     |
| Staging         | No one       |
| Production      | No one       |

### Internal

| Environment     | Access Rules                            |
| --------------- | --------------------------------------- |
| Development[^2] | Everyone                                |
| Staging         | Everyone                                |
| Production      | email contains "@yourcompanydomain.com" |

{% hint style="info" %}
If you don't have a domain set for your organization (for example, you are using a @gmail.com email address), the "Internal" and "Beta" stages won't contain any default access rules in the Production environment.
{% endhint %}

### Beta

| Environment     | Access Rules                            |
| --------------- | --------------------------------------- |
| Development[^3] | Everyone                                |
| Staging         | Everyone                                |
| Production      | email contains "@yourcompanydomain.com" |

### General availability

| Environment     | Access Rules |
| --------------- | ------------ |
| Development[^4] | Everyone     |
| Staging         | Everyone     |
| Production      | Everyone     |

## Customizing release stage access rules

You can easily configure access rules for release stages, add new stages, or delete existing stages in the [App Settings](https://app.bucket.co/envs/current/settings/app-stages). &#x20;

{% hint style="info" %}
You can add or delete release stages based on your rollout process. However, you always need to have _**at least one**_ release stage.
{% endhint %}

<figure><img src="../../.gitbook/assets/Global settings - Release Stages-min.png" alt=""><figcaption></figcaption></figure>

You can update each release stage's access rules to include No one, Everyone, or only specific segments, companies, or users.

{% hint style="info" %}
If you modify a release stage’s access rules, the updated rules are only applied to _**future features**_ in that stage. Existing features in the stage will retain their existing access rules.
{% endhint %}

<figure><img src="../../.gitbook/assets/Global settings - Release Stages Editing V4-min.png" alt=""><figcaption></figcaption></figure>

\


[^1]: 

[^2]: 

[^3]: 

[^4]: 
