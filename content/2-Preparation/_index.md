---
title: "Preparation"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

{{% notice info %}}
You need to create a Lambda function, an API Gateway endpoint, and a DynamoDB table to perform this lab.
{{% /notice %}}

To get started with Serverless services like **AWS Lambda**, **API Gateway**, and **DynamoDB**, this lab will guide you through creating and integrating these components step by step.

You can refer to the following AWS documentation for more background:

- [What is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [What is Amazon API Gateway?](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [What is Amazon DynamoDB?](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

In order for the Lambda function to interact securely with **API Gateway** and **DynamoDB**, we also need to create and assign an **IAM Role** with appropriate permissions. This will ensure our Lambda function can perform operations like reading/writing data from DynamoDB and returning responses through API Gateway.

### Content

- [Create DynamoDB](2.1-createdyanmodb/)
- [Create Lambda](2.2-createlambda/)
- [Create API Gateway](2.3-createapigateway/)
