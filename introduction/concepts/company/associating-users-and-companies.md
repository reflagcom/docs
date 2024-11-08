# Associating users and companies

Events sent to Bucket are sent by individual users. To associate these events with a company, make sure to associate the user with its company.

If a user's events aren't associated with a company, they will not be included in Bucket (which is primarily based on company-level activity).

If you're using our SDK, make sure to call `company` after calling `user` : [Bucket SDK Documentation](../../../supported-languages/overview.md)

If you're using Segment, make sure to call `group` after calling `identify`: [Segment Group Spec Documentation](https://segment.com/docs/connections/spec/group/)

### Associating users with multiple companies

Bucket supports associating a user with multiple companies.&#x20;

When sending a `group`/`company` call, the following sent events will only be associated with that company. When a new `group`/`company` call is sent, the subsequent sent events will be associated with the new company.

It's also possible to manually associate events to specific companies. In the Bucket SDK you can supply a `companyId` when you call `bucket.track`.&#x20;

If you're using Segment, you can set the `companyId` in the event attributes. Please note that you must still send a `company`/`group` call to associate the user with the company.
