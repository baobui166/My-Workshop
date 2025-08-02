---
title: "Log Insight"
date: "`r Sys.Date()`"
weight: 4
chapter: false
pre: " <b> 3.2.4 </b> "
---

#### Observing via Log Insight

**Objectives**

- Monitor queries and performance of the entire request flow.
- Log in a standardized structured format (JSON).
- Efficiently query logs using CloudWatch Logs Insights to optimize performance.
- Analyze slow queries, 4xx/5xx errors, DynamoDB throttling, and cost impacts.

---

### Steps

#### 1. Go to **CloudWatch Console**

- Navigate to **CloudWatch → Logs Insights**
- Select a log group: `/aws/lambda/my-function` or `/aws/apigateway/...`

---

#### 2. Sample Logs Insights Queries for Lambda

- **Query Lambda errors (status code 4xx, 5xx):**

```js
fields @timestamp, @message
| filter @message like /ERROR/
| sort @timestamp desc
| limit 100
```

![Connect](/images/Insight/insight2.png)
![Connect](/images/Insight/insight1.png)

Sample log analysis content:

- Error type: [ERROR] ClientError: An error occurred (AccessDenied) when calling the PutMetricData operation.
- Description: The Lambda function is trying to call CloudWatch’s PutMetricData API to push metrics but was denied access (AccessDenied).
- Cause: The user or role assigned to the Lambda function lacks permission to call PutMetricData.
- Location: Lambda function named create_user in the ap-southeast-1 region.
- Other log info includes: timestamp, account ID, environment, log stream, and traceback from the Python Lambda code.

Statistics on Lambda runtime and resource usage (duration, memory):

```js
	filter @type = "REPORT"
	| stats avg(@duration) as AverageDuration,
        max(@duration) as MaxDuration,
        min(@duration) as MinDuration,
        avg(@maxMemoryUsed/1024/1024) as AverageMemoryUsedMB,
        max(@maxMemoryUsed/1024/1024) as MaxMemoryUsedMB,
        min(@maxMemoryUsed/1024/1024) as MinMemoryUsedMB
```

![Connect](/images/Insight/insight3.png)

Explanation:

- AverageDurationMS: Average execution time of the Lambda function within the queried time range (in milliseconds).
- MaxDuration: Maximum execution time during that period.
- MinDuration: Minimum execution time.
- AverageMemoryUsedMB: Average memory used (MB).
- MaxMemoryUsedMB: Maximum memory used.
- MinMemoryUsedMB: Minimum memory used.

- Analyze Lambda latency (duration) over time:

```js
	filter @type = "REPORT"
	| stats avg(@duration), max(@duration), min(@duration) by bin(5m)
```

![Connect](/images/Insight/insight4.png)

3. Generate queries using the prompt

- Enter your desired query in the Prompt field.

![Connect](/images/Insight/insight5.png)

- Click Generate new query to create the query, then click Run query to execute it.

```js
	Cold start rate as a percentage of total Lambda invocations
```

![Connect](/images/Insight/insight6.png)
