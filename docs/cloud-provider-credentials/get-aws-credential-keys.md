---
title: Get Amazon Web Services (AWS) Credential Keys
intro: In order to allow Devopness to manage Amazon Web Services (AWS) resources for you, you need to provide us AWS Secret Key and Access Key.
links:
    overview:
    quickstart:
    previous:
    next:
        - /docs/cloud-provider-credentials/add-cloud-provider-credential
    guides:
    related:
    featured:
---

# Get AWS Credential Keys

1. Access [AWS Management Console](https://aws.amazon.com/pt/console/)
1. On the Search box, enter “IAM” and select it from search results
1. On the left side menu under `Access management`, select the `Users` option
1. If you dont have a user, create a new one:
    - To add a new user, click `Add user`
    - Set user name on `User name` input field
    - Select AWS credential type `Access Key`
    - If you wish this user to have access to AWS Management Console, select `Password` option and fill password input fields
    - Click `Next: Permissions`
    - Select or create a permission group containing the `AmazonEC2FullAccess` permission
    - Select `Next: Tags`, `Next: Review` and finally `Create user`
    - Click `Download .csv` to store your AWS Credential Keys
1. If you already have a user, create new AWS Credential keys:
    - Click your user on IAM list
    - Under the Summary section, select `Security Credentials`
    - Under the Access keys, click `Create access key`
    - Click `Download .csv` to store your AWS Credential Keys
1. Having your service account credentials, follow the [Add a Cloud Provider Credential](./add-cloud-providers-credentials.md) guide.
> These credentials cannot be downloaded more than once, be sure to store them securely.
