# Associating users and companies

Events sent to Bucket are sent by individual users. To associate these Events with a company make sure to associate the user with its company.

If a users**'** events aren't associated with a company, they will not be included in the Bucket UI, which is primarily based on company-level activity.

If you're using Segment, make sure to call `group` after calling `identify`: [Segment Group Spec Documentation](https://segment.com/docs/connections/spec/group/)

If you're using our SDK, make sure to call `company` after calling `user` : [Bucket JS SDK Documentation](https://github.com/bucketco/bucket-tracking-sdk)

### Associating users with multiple companies

Bucket has great support for associating a user with multiple companies. When sending a `group`/`company` call, the following events sent will be associated with that company only. When a new `group`/`company` call is sent, the subsequent events sent will then be associated with the new company.

It's also possible to manually associate events to specific companies. In the Bucket SDK you can supply a `companyId` when you call bucket.track. If you're using segment, you can set the `companyId` in the event attributes. Please note that you must still send a `company`/`group` call to actually associate the user with the company.
