---
title: "Using CloudWatch Metrics to Monitor API Gateway"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 3.2.2 </b> "
---

#### Using CloudWatch Metrics to Monitor API Gateway

Use **CloudWatch Metrics** to monitor **API Gateway** directly from the AWS Console interface.

**Objectives**:

- Monitor the number of requests, 4xx and 5xx errors, latency, integration latency, etc., of API Gateway
- No need to create additional CloudWatch Log Groups or write manual code

**Steps to follow**:

1. Access CloudWatch

- Log in to the AWS Console
- Type "CloudWatch" in the search bar → select CloudWatch

2. Choose **Metrics > All Metrics**

![metrics](/images/Metrics/metrics1.png)

- In the left menu, choose **Metrics** → click **All metrics**
- In the Browse section, select **Lambda**:

![metrics](/images/Metrics/metrics2.png)

3. Select the Metrics to Monitor:

- Choose **By Resource**

![metrics](/images/Metrics/metrics3.png)

- Then select the function name(s) you want to monitor (we will focus on 3 main components: Throttles, Errors, and Duration)

![metrics](/images/Metrics/metrics4.png)

- Observe them on the chart

![metrics](/images/Metrics/metrics5.png)

- The 3 displayed metrics are:

  - **Duration**: The average execution time of the Lambda function (in ms) at each point in time. Displayed in green.
  - **Errors**: The number of errors that occurred at that point. Displayed in orange.
  - **Throttles**: The number of times the Lambda was throttled (exceeded allowed requests). Displayed in light blue.

- When you hover over the data point at 07-30 09:35 UTC, **CloudWatch** shows:

  - **Duration**: 121.79 ms → Lambda took about 122 ms to execute

  - **Errors**: 0.4 → An average error rate (e.g., 2 errors in 5 requests or a rounded value)

  - **Throttles**: 0 → No requests were throttled at that time
