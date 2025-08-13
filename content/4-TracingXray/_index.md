---
title: "X-Ray"
date: "`r Sys.Date()`"
weight: 4
chapter: false
pre: " <b> 4. </b> "
---

In modern microservices or serverless architectures, requests typically travel across multiple components and services. It's difficult to pinpoint "which request is slow?", "where's the bottleneck?", or "where did the error occur?" using logs alone.

### AWS X-Ray is a powerful tracing tool that allows you to:

- Track the full lifecycle of a request across multiple AWS services.
- Visualize the execution flow and timing with a **service map**.
- Identify performance bottlenecks, failures, and latency issues.
- Debug production issues without digging through logs manually.

---

### How to Configure & Use AWS X-Ray

#### 1. Enable X-Ray for Lambda

- Go to AWS Console → Lambda
- Choose your desired Lambda function
- In **Monitoring and operations tools**, enable **Lambda service traces**

#### 2. Enable X-Ray for API Gateway

- Already configured in the Logging & Tracing setup step (see section 3)

#### 3. View Service Map

- Navigate to **Lambda** → select the function
- Click **Monitor** tab
- Click **View X-Ray Traces**

![Traces](/images/Traces/traces1.png)

#### 4. Trace Individual Requests

- Go to the **Traces** tab

![Traces](/images/Traces/traces2.png)

- Select any trace to view detailed flow:

![Traces](/images/Traces/traces3.png)

##### Trace Flow:

- Shows flow from Client → API Gateway → Lambda Function
- POST request to `UserAPI/Create`, Lambda processes and returns 201
- Shows timing (66ms) and each component involved

![Traces](/images/Traces/traces4.png)

##### Segments Timeline:

- **UserAPI/Create (API Gateway Stage)**: Received POST, took ~48ms
- **Lambda Invoke**: Called `create_user` function, took ~44ms
- **Lambda Execution**: Actual logic took ~20ms + 19ms overhead
- Total response time: ~66ms, status code 201 (success)

---

### Trace with Errors

![Traces](/images/Traces/traces5.png)
![Traces](/images/Traces/traces6.png)
