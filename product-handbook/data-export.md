---
description: Learn more about data warehouse in Bucket
---

# Warehouse

Bucket allows you to export company adoption data in a CSV file to use in other tools or databases.  This can be done either manually or automatically, depending on your plan.

{% hint style="info" %}
Data exports are only available on Pro and Enterprise plans. Automatic data exports are only available on the Enterprise plan.&#x20;
{% endhint %}

## Getting started

* Navigate to `Settings`
* Under `Environment: [Environment Name]`, select `Data export`. &#x20;
* Under `Manual export`, select the [historical data aggregation](data-export.md#historical-data) of your choice
* Click the `Download export` button to get your CSV
* If you have access to [automatic exports](data-export.md#automatic-export), turn the `Enable automatic export` toggle to `ON` and follow the instructions below.&#x20;

## Historical data

There are 4 historical data aggregation options:

* **Just today's snapshot**: Download a snapshot of the current state of the data. The `Date` column will contain the current date.
* **30 days, daily granularity**: The file will contain data rolled up in daily increments for the last 30 days. The `Date` column will be the end of each rolled-up day data
* **3 months, weekly granularity**: The file will contain data rolled up in weekly increments for the last 3 months. A weekly increment is a full calendar week (mon-sun). The `Date` column will be the data at the end of each rolled-up interval.
* **6 months, weekly granularity**: The file will contain data rolled up in weekly increments for the last 6 months. A weekly increment is a full calendar week (mon-sun). The `Date` column will be the data at the end of each rolled-up interval.

## Automatic export

{% hint style="info" %}
Read our [AWS S3](../integrations/aws-s3.md) data export guide.
{% endhint %}

You can also schedule data exports that run on a **daily** or **weekly** cadence. If enabled, Bucket automatically generates and exports a `CSV` file for each day or week and saves it to your S3-compatible file storage provider (such as _AWS S3_, _Google Cloud Storage_, _Cloudflare R2_, and others).

* **Daily export**: Runs every day after `00:00 UTC` and exports a snapshot of the data as it was at `00:00 UTC`.&#x20;
* **Weekly export**: Runs every Monday after `00:00 UTC` and exports a snapshot of the data as it was at `00:00 UTC on Monday`.

After enabling automatic exports, fill in the required configuration details:

* **Periodic schedule**: The cadence of data export (either `daily` or `weekly`)
* **S3 Provider**: The S3-compatible cloud storage. Support is available for `AWS`, `GCP` and `Custom` which allows for the specification of a custom Endpoint value (useful for Cloudflare R2)
* **S3 bucket**: The details of the S3 bucket that will be used to store the exported data files
  * For `AWS`: Enter the S3 bucket's public URL in the following format: `https://<bucket>.s3.<region>.amazonaws.com[/key]`. The `key` component of the URL is optional. It can be used to point to a specific directory within the bucket. For more details, see the [AWS S3 setup guide](doc:aws-s3-setup-guide).
  * For `GCP` and `Custom`: The **Bucket**, **Region**, and **Key** properties need to be inserted separately in each of the input boxes on the `Settings` page.
  * For `Custom`: The **Endpoint** option becomes available. It needs to be filled with the URL of the cloud storage provider API. For instance, Cloudflare R2 will provide an individual endpoint value for each of their customers in the following format: `https://<ACCOUNT_ID>.eu.r2.cloudflarestorage.com`.
* **Access key**: The access key obtained from the cloud storage provider
* **Secret access key**: The secret access key is obtained from the cloud storage provider

After clicking `Save`, Bucket will validate that the supplied details are correct by attempting to list the files in the S3 bucket.&#x20;

If there is an error (such as misconfigured credentials, missing privileges, or misspelled names), an error message will appear.&#x20;

Bucket will run the data export the following day or the next Monday depending on the selected cadence.

Bucket records the status of the operation and displays it below the toggle. The status will show:

* When the last export ran
* The status of the last export. One of:
  * `never ran before`
  * `successful`&#x20;
  * `failed`
* When the next export will run
* In case of an error, an error message

## Company data model

The company model contains information about company adoption of all your features.

| Column             | Data type          | Format                                                           | Description                                                 |
| ------------------ | ------------------ | ---------------------------------------------------------------- | ----------------------------------------------------------- |
| Company ID         | `string`           |                                                                  | Company ID from your tracking calls                         |
| Company Name       | `string` \| `null` |                                                                  | The company's name, if sent through tracking                |
| Feature Name       | `string`           |                                                                  | Bucket feature name                                         |
| Feature ID         | `string`           |                                                                  | Bucket feature ID                                           |
| Date               | `string`           | UTC Date (ISO-8601)                                              | The date of data point                                      |
| First Seen         | `string`           | UTC Date (ISO-8601)                                              | The company's first tracking date                           |
| Last Seen          | `string`           | UTC Date (ISO-8601)                                              | The company's latest tracking date                          |
| First Used         | `string` \| `null` | UTC Date (ISO-8601)                                              | Company first feature usage                                 |
| Last Used          | `string` \| `null` | UTC Date (ISO-8601)                                              | The company's latest feature usage                          |
| STARS State Label  | `string`\| `null`  | One of the:`"never"` \| `"tried"` \| `"retained"` \| `"churned"` | Human readable value for the STARS step                     |
| STARS State        | `number`           | One of the: `1` \| `2` \| `3`\| `4`                              | The company [STARS state](broken-reference) for the feature |
| Frequency Label    | `string`           |                                                                  | Human readable label for the frequency value                |
| Frequency          | `number`           | One of: `0` \| `1` \| `2` \| `3`                                 | Company feature usage frequency. Higher means more frequent |
| Satisfaction Label | `string`           |                                                                  | Human readable label for the satisfaction score             |
| Satisfaction       | `number` \| `null` | One of: `1` \| `2` \| `3` \| `4` \| `5`                          | Company feature satisfaction score. Higher is better        |
| Feedback Count     | `number`           |                                                                  | Total number of feedbacks recorded                          |
| Segment Names      | `string`           | Comma separated list                                             | List of segment names the company is a part of              |
| Segment IDs        | `string`           | Comma separated list                                             | List of segment id's the company is a part of               |

## Articles of interest

* [GCP Hmac keys](https://cloud.google.com/storage/docs/authentication/hmackeys): Obtain Google Storage `Access key` and `Secret access key` pair
* [S3 API](https://developers.cloudflare.com/r2/api/s3/api/): Cloudflare guide for R2
* [Ingest into BigQuery](https://cloud.google.com/bigquery/docs/s3-transfer-intro): A guide on importing data into Google's BigQuery
* [Ingest into Snowflake](https://docs.snowflake.com/en/user-guide/data-load-s3) and [Automatic ingest into Snowflake](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-auto-s3): These guides show you to how to import data into Snowflake.
