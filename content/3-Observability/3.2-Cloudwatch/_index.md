---
title: "Using CloudWatch to Collect and Analyze Data"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

During the application monitoring process on AWS, we will use a suite of powerful **Amazon CloudWatch** tools to collect and analyze operational data. **CloudWatch Logs** allows you to record logs from services like API Gateway, supporting debugging and error tracing. **CloudWatch Metrics** helps track performance indicators such as latency, request count, and error rates. Based on these metrics, we can set up **Alarms** to automatically detect incidents and trigger alerts through **Amazon SNS** to email or other services. In addition, **CloudWatch Log Insights** offers a powerful query tool to analyze logs in an intuitive and efficient way. Finally, we will use **CloudWatch Dashboards** to create visual dashboards that centralize all metrics, logs, and alert charts, making it easier to monitor the overall system activity in real time.

### Contents:

- [Analyzing with CloudWatch Logs](./3.2.1-Cloudwatchlogs//)
- [Monitoring with CloudWatch Metrics](./3.2.2-Cloudwatchmetrics//)
- [Incident Detection and Alerts via Alarm and SNS](./3.2.3-Cloudwatchalarmsns//)
- [Querying Errors with Log Insight](./3.2.4-Cloudwatchloginsight//)
- [Querying Logs with CloudWatch Log Insights](./3.2.4-Cloudwatchloginsight/)
- [Creating Dashboards](./3.2.5-Createdashboard/)
