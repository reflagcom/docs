# STARS

STARS ([starsframework.org](https://starsframework.org)) is a framework for measuring feature engagement (quantitative) and satisfaction (qualitative) as a funnel. STARS is applied to all features on Bucket out of the box.

STARS stands for: **S**egment -> **T**ried -> **A**dopted -> **R**etained -> **S**atisfied

### Segment

The initial **Segment** is used to set the size of the funnel. As different features are only relevant to different users, practically every feature specification will begin by determining the specific segment of users that will be the target audience. This step is completed _before a feature is released_, and in Bucket the Segment value will always be 100%.

### Tried

**Tried** represents the number of users from the targeted segment that have used the feature at least once. This is shown as a percentage of the total number of customers in the segment. If Tried is low, it indicates that users are either unaware of the new feature, or it is not yet appealing enough for them to use it.

### Adopted

The next step, **Adopted**, shows how many users go beyond trying a feature to using it regularly. You can set the number of times needed for a company to move into **Adopted** in Bucket, but a good rule of thumb is that >5 uses counts as **Adopted**. The percentage figure displayed in Bucket for **Adopted** is a percentage of **Tried** users that have moved to **Adopted**.

However, some features will not have both Tried and Adopted statistics. This is because number of uses does not always make sense, as features may well be simple on/off buttons or similar. An integration with another piece of software will be activated once and then any further uses will occur elsewhere, for example. In these cases, only **Adopted** will be displayed.

### Retained

This is the critical step of the funnel. It shows how many accounts from **Adopted** keep using the feature over time.&#x20;

In SaaS products, most key features should likely be used at least once every subscription cycle, which typically means monthly.

However, some features aren’t meant to be used that frequently. Defining the right retention period per feature is critical to measuring **Retained** correctly.

Thus far, every user in the funnel has only moved onwards - you cannot _untry_ a feature. However, users can move backwards from **Retained** if they do not continue using something. This is what we term _Churn_, and a user that churns from Retained will be moved back to **Adopted**.

### Satisfied

In the **Satisfied** step, [we ask](automated-feedback-surveys.md) the Retained accounts how satisfied they are with the feature. Collecting feature satisfaction is done with the scoring framework [CSAT](https://bucket.co/glossary/csat). With CSAT, the customer provides a score between 1-5. 1 being very dissatisfied and 5 being very satisfied.

Until a user provides feedback, the Satisfied metric will be empty. Once a user provides feedback, their rating will be stored permanently, even if they drop off from **Retained**. However, the **Satisfied** bar displayed at the top of the page will only count those currently in **Retained**.

