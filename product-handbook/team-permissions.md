---
description: Invite, remove and manage roles for your team members
---

# Team permissions

## Team management basics

The Team Management page in your Reflag organization provides essential features for overseeing your team:

* **Invitations**: Easily copy the secret invite link to allow new members to join your organization. Admins can refresh the invite link as needed.
* **User listing**: View the complete list of current organization members. The table displays each user's details, including their join date and role.

Team member roles can be changed by selecting them from the dropdown. Additionally, any member can be removed from the organization by clicking the "_delete_" icon situated next to the role selector.

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>Team management page</p></figcaption></figure>

## Roles and permissions

{% hint style="info" %}
Team roles are only available on **Pro** and **Enterprise** plans. In organizations not on these plans, roles are not enforced, and every team member is implicitly an **Admin**.
{% endhint %}

* **Viewer**: Can view content within your organization, but cannot make any changes.
* **Writer (except production)**: Can create and update features, feature views, and manage feedback. Can modify non-production targeting for features and remote configs. Cannot alter organization-wide settings and most app settings.
* **Writer**: Can do everything that **Writer (except production)** can, plus production targeting updates and segment management.
* **Admin**: Full access to all features and settings, including managing other members' roles and removing users from the organization.

{% hint style="info" %}
**Note**: All new users invited to the organization will be assigned the **Viewer** role by default, ensuring they have appropriate access without making any changes.
{% endhint %}
