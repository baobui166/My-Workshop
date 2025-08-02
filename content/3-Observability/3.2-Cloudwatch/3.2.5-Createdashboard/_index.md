---
title: "Create Dashboard"
date: "`r Sys.Date()`"
weight: 5
chapter: false
pre: " <b> 3.2.5 </b> "
---

In modern serverless environments where distributed applications are built, monitoring, tracking, and diagnosing issues are critically important. To avoid getting "lost" in thousands of log lines, **Amazon CloudWatch Dashboard** provides an intuitive visual interface.

**Objectives**

- Monitor system status in real-time.
- Quickly detect performance issues or errors.
- Understand user behavior and API access frequency.
- Make data-driven decisions, not based on assumptions.

The dashboard works like a miniature system map, composed of various charts and metrics, providing both a high-level and in-depth view.

---

### Steps to Implement

#### 1. Create a new Dashboard

- Go to **CloudWatch Console**
- Select **Dashboards** → click **Create dashboard**

![Dashboard](/images/Dashboard/dashboard1.png)

- Name your dashboard (e.g., `MonitoringAPI`)

![Dashboard](/images/Dashboard/dashboard2.png)

- Choose the widget type to display: Line, Number, Bar, or Text

![Dashboard](/images/Dashboard/dashboard3.png)

---

#### 2. Add API Gateway Monitoring Chart

- **Widget Type**: Line
- **Metric**:
  - Select **API Gateway → By ApiName**

![Dashboard](/images/Dashboard/dashboard4.png)  
![Dashboard](/images/Dashboard/dashboard5.png)

- Choose the following metrics: `Latency`, `4XXError`, `5XXError`

![Dashboard](/images/Dashboard/dashboard6.png)

- Statistic: **Average**
- Period: **1 Minute**

---

#### 3. Add Lambda Monitoring Chart

- **Widget Type**: Line or Number
- **Metric**:
  - Service: **Lambda**
  - Metrics: `Duration`, `Invocations`, `Errors`, `Throttles`
  - Filter by individual function (by ARN or name)

---

#### 4. Add DynamoDB Monitoring Chart

- **Widget Type**: Line or Stacked Area
- **Metric**:
  - Service: **DynamoDB**
  - Metrics: `ConsumedReadCapacityUnits`, `ConsumedWriteCapacityUnits`, `ThrottledRequests`
  - Filter by each table (table name)

---

#### 5. Organize the Dashboard

- Drag and drop widgets to arrange them neatly
- Use clear names for each chart: “API Error Rate”, “Lambda Duration”, “DynamoDB Usage”, etc.
- Apply contrasting colors for readability
- Save after completing the layout

![Dashboard](/images/Dashboard/dashboard7.png)
