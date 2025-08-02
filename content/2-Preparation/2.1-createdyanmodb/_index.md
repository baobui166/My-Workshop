---
title: "Create DynamoDB"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 2.1 </b> "
---

### Create DynamoDB Table

In the API monitoring system, we will use Amazon DynamoDB as a NoSQL database to store information such as user logs, API queries, or other data that needs to be tracked in real time.

**Objective of this step:**

- Create a DynamoDB table to be used during the Lambda deployment process.
- Configure the primary key and basic settings.

**Steps to follow:**

1. Log in to AWS Console:

- Visit: [AWS console](https://console.aws.amazon.com/)
- Ensure you have selected the correct region (e.g., us-east-1 or ap-southeast-1).

2. Navigate to the DynamoDB service:

- Search for **DynamoDB** in the search bar and select the service.

3. Create a new table:

- Click the **"Create table"** button.
  ![dynamoDB](/images/DynamoDB/dynamo1.png)

4. Enter table details:

- Table name: WebsiteVisitors (or any custom name)

  - Partition key: userKey
  - Data type: String
  - (Optional) You can add a Sort key to organize data by time or endpoint.

    - Example: timestamp - Number

  ![dynamoDB](/images/DynamoDB/dynamo2.png)

5. Create the table:

- Finally, click **"Create table"** to complete the setup.
  ![dynamoDB](/images/DynamoDB/dynamo3.png)

6. Confirm table creation success:
   ![dynamoDB](/images/DynamoDB/dynamo4.png)

Next, we will create the **Lambda Functions**.
