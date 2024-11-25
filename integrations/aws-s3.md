# AWS S3

To configure an [automatic data export](../product-handbook/data-export.md#scheduled-export) to an Amazon S3 bucket, follow the steps below.

## Implementation steps

1.  Log into the AWS Console. Navigate to `Identity and Access Management (IAM)` and select the `Users` option.\


    <figure><img src="../.gitbook/assets/630b5e9-image.png" alt=""><figcaption></figcaption></figure>
2. For security reasons, we recommend creating a new restricted user to access the designated S3 bucket. Use the `Create user` button to create a new user.
3.  Select the desired user in the `Users` window, then click on the `Security credentials tab` and scroll down to the `Access Keys` section. \
    \
    There, click `Create Access Key` to obtain a new **Access Key** and **Secret Access Key.**\


    <figure><img src="../.gitbook/assets/1a0b50d-image.png" alt=""><figcaption></figcaption></figure>
4. Copy the user's ARN (AWS unique resource number). The ARN will be required when setting up the permissions on the S3 bucket.
5. Navigate to [https://s3.console.aws.amazon.com/s3/buckets/](https://s3.console.aws.amazon.com/s3/buckets/) to open the S3 configuration section.
6. Create or select an existing S3 bucket. \
   \
   In the bucket details pane, create a new folder (optional), and use the `Copy URL` functionality to get the public URL. \
   \
   This URL will be required when configuring the `Scheduled Data Export` in Bucket.
7. Switch to the `Permissions` tab of the S3 bucket details window.&#x20;
8. Scroll down to the `Bucket policy` section. Normally, if no other policies have been set up, it will be empty.&#x20;
9. Click on `Edit` and paste the policy below into the editor. \
   \
   If there are already other statements in the S3 bucket's policy, copy the statement object and paste it into the list. \
   \
   Replace `<user_arn>` and `<bucket_arn>` with the real values from your AWS account.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowBucketDotCo",
            "Effect": "Allow",
            "Principal": {
                "AWS": "<user_arn>"
            },
            "Action": [
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:ListBucket",
                "s3:AbortMultipartUpload",
                "s3:PutObjectTagging"
            ],
            "Resource": [
                "<bucket_arn>",
                "<bucket_arn>/*"
            ]
        }
    ]
}
```

Following the steps above should give you the **URL**, **Access Key**, and **Secret Access Key** settings required to configure an [automatic data export](doc:data-export#scheduled-export).
