# Segment

Bucket's segment integration is for customers who already use Segment for event tracking and want to use those events for tracking feature adoption metrics on Bucket.

## Getting started

1.  Set up [Bucket Cloud destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket) to receive data from a Segment source.\
    \


    <figure><img src="../.gitbook/assets/5b0ce63-image.png" alt=""><figcaption></figcaption></figure>
2. Copy your **Bucket Publishable key** from the Environments page in Settings and add it to the `API Key` settings field in the destination.
3. Enable the destination.
4. Check the Tracking page in Bucket to ensure the data arrives. Data should start flowing immediately.

## Supported types

Bucket supports `analytics.track(),` `analytics.identify()` and `analytics.group()` , but doesn't support the Segment `analytics.page()` , which are ignored.

