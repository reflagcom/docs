# Feedback

### Definition

A feedback entity in Reflag is sent by the client when an user provides feedback within your application. You must be using Reflag SDKs to gain access to feedback collection functionality. Feedback can be submitted by the user when your application triggers the collection manually, or automatically, when [automatic feedback surveys](../../product-handbook/launch-monitor/automated-feedback-surveys.md) are enabled.

### Collected data

The feedback, submitted by an user of your application will contain the following details:

* The [user](user.md) and user's [company](company.md) IDs,
* The [feature key](feature.md#feature-key) for which the feedback is provided,
* The **score**, if configured to ask for one,
* A **free-form message**, if configured to ask for one.
* A **feedback request** ID if the feedback was submitted in response to an automatic request from Reflag.

All feedback is collected in Reflag and used for various metrics including [STARS](broken-reference).

### Next steps

* Learn how to set up [automatic feedback surveys](../../product-handbook/launch-monitor/automated-feedback-surveys.md) within Reflag UI.

