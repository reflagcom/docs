# Data export

You can export your app data manually, which gives you a CSV file with company data. Navigate to `Settings` → `Data export`. &#x20;

### Historical data

You can select between four different historical data aggregations in the resulting export:

* **Just today's snapshot**: Download a snapshot of the current state of the data. The `Date` column will contain the current date.
* **30 days, daily granularity**: The file will contain data rolled up in daily increments for the last 30 days. The `Date` column will be the end of each rolled-up day data
* **3 months, weekly granularity**: The file will contain data rolled up in weekly increments for the last 3 months. A weekly increment is a full calendar week (mon-sun). The `Date` column will be the data at the end of each rolled-up interval.
* **6 months, weekly granularity**: The file will contain data rolled up in weekly increments for the last 6 months. A weekly increment is a full calendar week (mon-sun). The `Date` column will be the data at the end of each rolled-up interval.

### Scheduled export

{% hint style="info" %}
Read our AWS S3 data export guide [here](../integrations/aws-s3.md).
{% endhint %}

Bucket includes the ability to set a scheduled data export process that runs on a **daily** or **weekly** cadence. This feature, if enabled, automatically generates an export `CSV` file for each day or week, and saves it on the customer's S3-compatible file storage provider (such as _AWS S3_, _Google Cloud Storage_, _Cloudflare R2_, and others).

The daily export runs every day after `00:00 UTC` and exports a snapshot of the data as it was at `00:00 UTC`. For weekly exports, the process runs every Monday after `00:00 UTC` and exports a snapshot of the data as it was at `00:00 UTC on Monday`.

To enable this functionality, toggle the **Enable automatic export** to **ON** and fill in all the required configuration details in the fields below the toggle:

* **Periodic schedule**: The cadence of data export. Can be either `daily` or `weekly`,
* **S3 Provider**: The S3-compatible cloud storage. Support is available for `AWS`, `GCP` and `Custom` which allows specifying custom **Endpoint** value (useful for Cloudflare R2),
* **S3 bucket**: The details of the S3 bucket that will be used to store the exported data files,
  * For `AWS`, enter the S3 bucket's public URL in the following format: `https://<bucket>.s3.<region>.amazonaws.com[/key]`. The `key` component of the URL is optional. It can be used to point to a specific directory within the bucket. For more details see [AWS S3 setup guide](doc:aws-s3-setup-guide),
  * For `GCP` and `Custom`, the **Bucket**, **Region**, and **Key** properties need to be inserted separately in each of the input boxes presented on the settings page,
  * And finally, for `Custom`, another option becomes available: **Endpoint**. It needs to be filled in with the URL of the cloud storage provider API. For instance, Cloudflare R2 will provide an individual endpoint value for each of their customers in the following format: `https://<ACCOUNT_ID>.eu.r2.cloudflarestorage.com`,
* **Access key**: The access key obtained from the cloud storage provider,
* **Secret access key**: The secret access key is obtained from the cloud storage provider.

Upon clicking **Save**, Bucket will validate that the supplied details are correct by attempting to list the files in the S3 bucket. If there is any error (such as misconfigured credentials, missing privileges or simply misspelled names) an error will be displayed giving one the chance to correct the settings.

Assuming the settings have been set up correctly, Bucket will run the data export the next day or Monday (depending on the selected cadence) and will record the status of the operation:

Notice the status is displayed below the toggle and indicates:

* when the last export ran,
* the status of the last export, which can be one of `never ran before`, `successful` and `failed`,
* when the next export will run,
* and finally, in case of an error, the error message will be displayed as well.

### Company data model

The company model contains information about the company usage of all your features

| Column             | Data type          | Format                                                           | Description                                                                |
| ------------------ | ------------------ | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Company ID         | `string`           |                                                                  | Company ID from your tracking calls                                        |
| Company Name       | `string` \| `null` |                                                                  | The company's name, if sent through tracking                               |
| Feature Name       | `string`           |                                                                  | Bucket feature name                                                        |
| Feature ID         | `string`           |                                                                  | Bucket feature ID                                                          |
| Date               | `string`           | UTC Date (ISO-8601)                                              | The date of data point                                                     |
| First Seen         | `string`           | UTC Date (ISO-8601)                                              | The company's first tracking date                                          |
| Last Seen          | `string`           | UTC Date (ISO-8601)                                              | The company's latest tracking date                                         |
| First Used         | `string` \| `null` | UTC Date (ISO-8601)                                              | Company first feature usage                                                |
| Last Used          | `string` \| `null` | UTC Date (ISO-8601)                                              | The company's latest feature usage                                         |
| STARS State Label  | `string`\| `null`  | One of the:`"never"` \| `"tried"` \| `"retained"` \| `"churned"` | Human readable value for the STARS step                                    |
| STARS State        | `number`           | One of the: `1` \| `2` \| `3`\| `4`                              | The company [STARS-state](https://www.starsframework.org/) for the feature |
| Frequency Label    | `string`           |                                                                  | Human readable label for the frequency value                               |
| Frequency          | `number`           | One of: `0` \| `1` \| `2` \| `3`                                 | Company feature usage frequency. Higher means more frequent                |
| Satisfaction Label | `string`           |                                                                  | Human readable label for the satisfaction score                            |
| Satisfaction       | `number` \| `null` | One of: `1` \| `2` \| `3` \| `4` \| `5`                          | Company feature satisfaction score. Higher is better                       |
| Feedback Count     | `number`           |                                                                  | Total number of feedbacks recorded                                         |
| Segment Names      | `string`           | Comma separated list                                             | List of segment names the company is a part of                             |
| Segment IDs        | `string`           | Comma separated list                                             | List of segment id's the company is a part of                              |

### Articles of interest

* [GCP Hmac keys](https://cloud.google.com/storage/docs/authentication/hmackeys), obtain Google Storage **Access key** and **Secret access key** pair,
* [S3 API](https://developers.cloudflare.com/r2/api/s3/api/), Cloudflare guide for R2,
* [Ingest into BigQuery](https://cloud.google.com/bigquery/docs/s3-transfer-intro), a guide on importing data into Google's BigQuery,
* [Ingest into Snowflake](https://docs.snowflake.com/en/user-guide/data-load-s3) and [Automatic ingest into Snowflake](https://docs.snowflake.com/en/user-guide/data-load-snowpipe-auto-s3), are guides on importing data into Snowflake.
