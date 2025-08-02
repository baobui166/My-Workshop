---
title: "Create API Gateway"
date: "`r Sys.Date()`"
weight: 3
chapter: false
pre: " <b> 2.3 </b> "
---

### Create API Gateway

In this step, you will create a REST API using Amazon API Gateway, connect it to the Lambda function created in the previous step, and then deploy it to expose a public endpoint.

Objectives:

- Create a REST API using API Gateway
- Integrate the Lambda function as the backend
- Configure the method and resource path
- Deploy the API to a public endpoint

Steps to follow:

1. Access **API Gateway**

- Go to AWS Console: https://console.aws.amazon.com/
- Type **“API Gateway”** in the search bar and select the service.

2. Create a new API:

- Click the **“Create API”** button

![apigateway](/images/Apigateway/api1.png)

- Choose the API type:

  - Select **REST API (Build)**
  - Click **Build**

![apigateway](/images/Apigateway/api2.png)

- In **API details**, choose **New API**
- Enter a name for your API
  -Example: **Visitor**

![apigateway](/images/Apigateway/api3.png)

- Click Create API

![apigateway](/images/Apigateway/api4.png)

- Click Create Method to add methods to the API
  - Select the **GET** method
  - Choose the **Lambda function** you created earlier as the integration target

![apigateway](/images/Apigateway/api6.png)

- Click **Create** to finish
  ![apigateway](/images/Apigateway/api5.png)

3. Deloy API

- Click **Deploy** API, then configure as follows:

![apigateway](/images/Apigateway/api9.png)

- Click Deloy.

4. Test if the API is working

- Copy the **Invoke URL** of the newly deployed API
  ![apigateway](/images/Apigateway/api10.png)

- Paste it into a new browser tab and press Enter:

![apigateway](/images/Apigateway/api11.png)

- Go to DynamoDB to verify if the API is functioning correctly. If successful, you should see new data added to the database.

![apigateway](/images/Apigateway/api12.png)

In the next section, we will begin monitoring and observing our APIs through CloudWatch.
