# Feature

A feature is an abstraction on events that also includes things like the feature's target segment. It's nicer and less prone to work with than raw events.&#x20;

A feature can also be based on a company attribute.&#x20;

### How company adoption is calculated

Companies are counted as having used a feature when a user of the company initiates the event(s) associated with the feature.

For example, let's say your application is tracking `FeatureA` whenever someone interacts with `ButtonA`. Let's also say `UserA` is part of `CompanyA`.

When `UserA` interacts with `ButtonA`, an event is sent to Bucket. Since `UserA` is associated with `CompanyA`, that company has now been counted as having interacted with `FeatureA`.
