# Segment

Our Segment integration lets you start quickly with complete tracking and feedback collection.

{% hint style="info" %}
We recommend always using browser tracking. This can be done by enabling the [Bucket Web (Actions) destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket-web).
{% endhint %}

## Set up browser tracking (recommended)

Bowser tracking through `Segment Analytics.js` can be done with the [Bucket Web (Actions) destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket-web).&#x20;

It loads the Bucket Tracking SDK and automatically enables [automated feedback surveys](../product-handbook/feature-analysis/automated-feedback-surveys.md) for immediate customer feedback.

### Implementation steps

* Set up [Bucket Web (Actions) destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket-web) to receive data from a Segment website source.

<figure><img src="../.gitbook/assets/43e55f0-image.png" alt=""><figcaption></figcaption></figure>

* Copy your Bucket publishable key from the `Settings` page of a feature and add it to the `Publishable Key` settings field in the destination.
* If you are using the strict `Content Security Policies`, follow the [Content Security Policy](segment.md#content-security-policies-csp) setup instructions.
* Enable the destination.
* Check the `Tracking` page in Bucket to ensure the data arrives. There can be a delay as Segment caches your Analytics.js configuration.&#x20;

{% hint style="info" %}
If you use browser and server destinations from the same Segment source, consult the [Running server and browser tracking](segment.md#running-both-server-and-browser-tracking) documentation below.
{% endhint %}

## Set up server tracking

Tracking from backend services can be done through Segment cloud destinations with the [Bucket Cloud Destination](https://segment.com/docs/connections/destinations/catalog/bucket/).

### Implementation steps

* Set up [Bucket Cloud destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket) to receive data from a Segment source.

<figure><img src="../.gitbook/assets/5b0ce63-image.png" alt=""><figcaption></figcaption></figure>

* Copy your Bucket publishable key from the `Settings` page of a feature and add it to the `API Key` settings field in the destination.
* Enable the destination.
* Check the `Tracking` page in Bucket to ensure the data arrives. Data should start flowing immediately.

{% hint style="info" %}
[Automated feedback surveys](../product-handbook/feature-analysis/automated-feedback-surveys.md) won't be enabled when using a cloud destination as browser scripting is required for gathering customer feedback in your app UI.
{% endhint %}

## Running server and browser tracking

If you run server tracking and browser tracking to the same Bucket app from the same Segment source, you will recieve duplicate tracked events.&#x20;

To avoid this, disable the mapping of `Track Event` in the `Bucket Web (Actions)` destination so your mapping looks like this.

<figure><img src="../.gitbook/assets/1a439d9-image.png" alt=""><figcaption></figcaption></figure>

## Tracking page views

Bucket doesn't support the Segment `analytics.page()` call to track pages.&#x20;

If page views are important, you can convert `page` events to `track` events in the [Bucket Web (Actions) destination](https://app.segment.com/goto-my-workspace/destinations/catalog/bucket-web):

* Go to the `Mappings` tab
* Press `New Mapping`
* Select the `Track Event` action
* In the `Select events to map and send` section, change the event type from `event` to `page`
* In the `Select mappings` section, change the `Event Name` mapping to send the Segment event's `name` field.&#x20;
  * Optionally prefix it with `Page:` or append with `Viewed` to add a distinguishable pattern

{% embed url="https://www.youtube.com/watch?v=ScvqhJY8JwI" %}

## Content Security Policies (CSP)

If you have strict `Content Security Policies` active on your website, enable these directives to use this destination.

These `Content Security Policy` rules are **only** needed when using the browser-based destination `Bucket Web (Actions)` (not required when using the server-based destination Bucket Cloud).

| Directive       | Values                                                             | Module            | Reason                                                                                                                                   |
| --------------- | ------------------------------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| script-src-elem | [https://cdn.jsdelivr.net](https://cdn.jsdelivr.net)               | bootstrap         | Loads the Bucket tracking SDK from a CDN                                                                                                 |
| connect-src     | [https://tracking.bucket.co](https://tracking.bucket.co)           | tracking          | Used for all tracking methods: `analytics.identify()`, `analytics.group()` and `analytics.track()`                                       |
| connect-src     | [https://livemessaging.bucket.co](https://livemessaging.bucket.co) | live satisfaction | Server sent events from the Bucket Live Feedback service, which allows for automatically collecting feedback when a user used a feature. |
| style-src       | 'unsafe-inline'                                                    | feedback UI       | The feedback UI is styled with inline styles. Not having this directive results unstyled HTML elements.                                  |

#### As HTTP-header:

```http
Content-Security-Policy: script-src-elem https://cdn.jsdelivr.net; connect-src https://livemessaging.bucket.co https://tracking.bucket.co; style-src 'unsafe-inline'
```

As `<meta>`-tag:

```html
<meta http-equiv="Content-Security-Policy" content="script-src-elem https://cdn.jsdelivr.net; connect-src https://livemessaging.bucket.co https://tracking.bucket.co; style-src 'unsafe-inline'">
```

