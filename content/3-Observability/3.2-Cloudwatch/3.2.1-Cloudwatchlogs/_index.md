---
title: "Monitoring Logs of a Lambda Function"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 3.2.1 </b> "
---

#### Monitoring Logs of a Lambda Function

1. Access the Lambda Function

- Go to the **AWS Console**
- Navigate to the **Lambda** service
- Select the function you want to view logs for

![log](/images/Log/log1.png)

2. Click on the **"Monitor"** tab

- In the **Lambda function** interface → click on the **Monitor** tab
- Then click on **View CloudWatch Logs**

3. View Detailed Logs

- Once you're on the **Log events** screen, **select** the **latest log stream** (based on timestamp)

![log](/images/Log/log2.png)

- Here, you will see logs like:

![log](/images/Log/log3.png)

- **Analysis**:
  - **INIT_START**: Appears when the Lambda starts for the first time (cold start); shows the runtime version used (e.g., Python 3.11), and the actual runtime ARN. This does not appear on every invocation—only when a new container is created.
  - **START**: Indicates the Lambda function has begun processing a new request includes:
    - **RequestId**: A unique ID for each invocation
    - **Version**: The version of the Lambda function being executed (**$LATEST** is the default).
  - **END**: Indicates the Lambda function has finished processing the request, with the same RequestId as START.
  - **REPORT**: Displays performance metrics:
    - **Duration**: Actual execution time (e.g., 490.34 ms)
    - **Billed Duration**: AWS rounds up to the nearest millisecond for billing (491 ms)
    - **Memory Size**: Configured memory for the function (128 MB)
    - **Max Memory Used**: Actual memory used during that invocation (e.g., 58 MB)
