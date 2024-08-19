# Slack

### What is the Slack integration?

The Slack integration lets you receive Weekly Digest reports on Releases and Feature views as well as real-time customer feedback submitted through Live Satisfaction. They’re a great way to keep up with feature adoption and satisfaction progression.&#x20;

### Getting started

* Go to `Settings`
* Under `Organization`, select `Slack`
* Click the `Connect to Slack` button
* Follow the instructions to connect your Slack account

### Slack and Features

You can manage Slack notifications for individual features.

* [Create a feature](../product-handbook/create-your-first-feature.md)&#x20;
* Click the `Integrations` navigation toggle
* Choose Slack channel from the `Slack channel` dropdown
* Toggle on (or off):
  * [`Weekly report`](slack.md#feature-reports)
  * [`Daily report`](slack.md#feature-reports)
  * [`Notify on user feedback`](slack.md#user-feedback)
* Click `Save`

### Slack and Releases

You can also manage Slack notifications for individual Releases.

* [Create a Release](../product-handbook/create-your-first-release.md)&#x20;
* Click the `Configure release` button
* In the bottom right corner,  Toggle on (or off) `Slack`&#x20;
* Choose Slack channel from the `Slack channel` dropdown

### Slack and Production environments

Bucket allows you to set a default channel and manage Slack notifications for the Production environment.&#x20;

* Go to `Settings`
* Under `Environment: Production`, select `Slack`
* Select a Slack channel to send `Weekly digests` to with the `Slack channel` dropdown
* Toggle on (or off):
  * [`Weekly releases digest`](slack.md#weekly-release-digest)
  * [`Weekly feature digest for all features`](slack.md#feature-view-weekly-digest)
* Click `Save`

<figure><img src="../.gitbook/assets/Slack and Environments-min.png" alt=""><figcaption></figcaption></figure>

### Slack and Feature views

Bucket also lets you manage Slack channels and notifications for different [Feature views](https://bucket.co/glossary/feature-views). This is useful if, for example, you’d only like to see a summary of engagement and satisfaction for a certain subset of features.&#x20;

* Go to `Settings`
* Under `App: [Your App]`, select `Feature views`
* Select a Feature view
* Choose Slack channel to send Weekly digests with the `Slack channel` dropdown
* Toggle on (or off) the `Weekly digest`
* Click `Save`

This only applies to custom Feature views. The default Feature view, `All Features`, is managed using the Production environment settings.\


<figure><img src="../.gitbook/assets/Slack and Feature views-min.png" alt=""><figcaption></figcaption></figure>

### Types of Slack reports

There are four types of Slack notifications:

* Feature reports
* User feedback
* Release reports
* Weekly digests&#x20;

### Feature reports

Feature reports are designed for features whose adoption and satisfaction you want to follow closely. There are two types of feature reports:

* `Weekly report`: A summary that includes the STARS funnel and a graph showing its progression over the past weeks.
* `Daily report`: Shows the companies that have adopted the feature in the past 24 hours.

### User feedback

Sends an immediate notification when a user leaves feedback on a feature with [Live Satisfaction](../product-handbook/automated-feedback-surveys.md).&#x20;

Notifications include the user’s name, company, CSAT score, and feedback (if provided).&#x20;

### Release reports

These keep you up-to-date with the goal progression Releases you are currently evaluating.&#x20;

These notifications include graphs that visualize progress for the goals set for the Release.

<figure><img src="../.gitbook/assets/Slack (with auto-layout)-min.png" alt=""><figcaption></figcaption></figure>

### Weekly digests

Weekly digests are summary reports sent weekly.

#### Feature view weekly digest

A summary of all features found in a selected Feature view. These reports contain STARS funnels and progression graphs of the features within the Feature view.

#### Weekly release digest

A summary of the progress of the Releases that are currently being evaluated. These reports show you Release goals and their goal progression.&#x20;

\
