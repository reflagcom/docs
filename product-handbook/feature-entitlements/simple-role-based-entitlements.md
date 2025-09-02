---
description: Learn more about simple role-based entitlements in Reflag
---

# Simple role-based entitlements

If you need to enforce feature access at the company subscription level _**and**_ user role level (user permissions), you can combine your user role and permission services with Reflag.

For example, let's say your "Export to CSV" feature is only available to customers on the "Business" or "Enterprise" plans _**and**_ only users with the "admin" role should be allowed to use it.

If you have complex user permissions, you likely need to use a dedicated user authentication service with Role-Based Access Control (RBAC) support.

If you have simple and static user permissions, like "admin" and "member", that don't change frequently, you may be able to hard code the access controls.

### Managing simple role-based user permissions

Let's look at how to handle the simple use case with Reflag.&#x20;

If you zoom out, this is what controlling feature access at the customer subscription level looks like.

<figure><img src="../../.gitbook/assets/example 1 (1).png" alt=""><figcaption></figcaption></figure>

To add simple user role controls to the mix, you can choose to hard code the user role check within the `isEnabled` check.

<figure><img src="../../.gitbook/assets/example 2 (1).png" alt=""><figcaption></figcaption></figure>



