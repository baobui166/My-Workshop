---
title: "Creating Alarm and SNS"
date: "`r Sys.Date()`"
weight: 3
chapter: false
pre: " <b> 3.2.3 </b> "
---

#### Creating Alarm and SNS

Use **Amazon CloudWatch Alarm** combined with **Amazon SNS** to send email notifications whenever your API encounters an error. This is applicable when your API is running on AWS (Lambda, API Gateway, etc.).

**Objectives**

- Monitor errors (e.g., 5XX in API Gateway, error count in Lambda).
- When errors exceed a specified threshold → send email alerts.

**Steps to implement**

1. Go to the **CloudWatch Console**

- Choose **Alarms** → **Create Alarm**

![Connect](/images/Alarm/alarm1.png)

- Click **Select metric**  
  ![Connect](/images/Alarm/step1.png)

- Select **Lambda** → **By Resource** → choose **Error** (Metric name)

![Connect](/images/Alarm/step1.1.png)

- Select **By Resource**

![Connect](/images/Alarm/step1.2.png)

- Choose **Error** (Metric name)

![Connect](/images/Alarm/step1.3.png)

- Configure the conditions for SNS to work smoothly when an error occurs

![Connect](/images/Alarm/step1.4.1.png)  
![Connect](/images/Alarm/step1.4.2.png)

- Create a new **SNS topic** to use with the Alarm. Enter the email address you want to receive alerts in the **Email endpoint** field.

![Connect](/images/Alarm/step2.png)

- Click **Next**, then name your alarm

![Connect](/images/Alarm/step3.png)

- Finally, review the selected configurations and click **Create**

> **Note:** If you want to create an alarm for **API Gateway**, at the initial **Select metric** step, choose API Gateway → By Stage → Method → 5XXError.  
> The remaining steps are the same as above.

- Email Notification Result When the System Encounters an Issue:

![Connect](/images/Alarm/alrm5.png)
