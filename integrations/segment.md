# Segment

Bucket's segment integration is for customers who already use Segment for event tracking and want to use Segment for gathering adoption metrics in Bucket

{% hint style="info" %}
[Feature flagging](../product-handbook/feature-targeting-rules.md) and [automated feedback surveys](../product-handbook/feature-feedback/automated-feedback-surveys.md)  requires installing a [Bucket SDK](../supported-languages/overview.md) in addition to setting up the Segment integration
{% endhint %}

## Set up server tracking

Tracking from backend services can be done through Segment cloud destinations with the [Bucket Cloud Destination](https://segment.com/docs/connections/destinations/catalog/bucket/).

Note: There's also a "Bucket Web (Actions)" integration which is no longer recommended.&#x20;

### Implementation steps

* Set up [Bucket Cloud destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket) to receive data from a Segment source.

<figure><img src="../.gitbook/assets/5b0ce63-image.png" alt=""><figcaption></figcaption></figure>

* Copy your Bucket publishable key from the `Environments` page in `Settings` and add it to the `API Key` settings field in the destination.
* Enable the destination.
* Check the `Tracking` page in Bucket to ensure the data arrives. Data should start flowing immediately.

## Tracking page views

Bucket supports `analytics.track(),` `analytics.identify()` and `analytics.group()` , but doesn't support the Segment `analytics.page()` call to track pages and the will ignore `page()` calls.

