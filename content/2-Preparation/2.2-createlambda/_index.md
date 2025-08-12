---
title: "Create Lambda function"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 2.2 </b> "
---

### Create Lambda function

In this step, we will create an **AWS Lambda Function**, fully configuring elements such as: source code, access permissions (IAM Role), environment variables, and testing the function to log data into **DynamoDB**.

Goals:

- Create a Lambda function to handle API logic..
- Configure an IAM Role that grants write permissions.
- Add environment variables to store MongoDB connection info (URI, DB name, collection).
- Write and directly deploy the handler code.

Steps:

1. Access the **Lambda Service**:

- Go to AWS Console: [AWS console](https://console.aws.amazon.com/)
- Search for **“Lambda”** in the search bar and select AWS Lambda service.

2. Create a **Lambda function**:

- Click **“Create function”**.
- Choose on Author from scratch.
- Enter the details:

  - Function name: **GetVisitor**.
  - Runtime: **Python 3.11**.

  ![lambda](/images/Lambda/lambda2.png)

- Click Create Function.
  ![lambda](/images/Lambda/lambda3.png)

3. Deploy the source code

- Paste the following code into the editor.

```js
import json
import boto3
from datetime import datetime
import urllib.request

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('WebsiteVisitors')

def get_location(ip):
    try:
        with urllib.request.urlopen(f"http://ip-api.com/json/{ip}") as url:
            data = json.loads(url.read().decode())
            return {
                'country': data.get('country'),
                'region': data.get('regionName'),
                'city': data.get('city'),
                'lat': data.get('lat'),
                'lon': data.get('lon'),
            }
    except:
        return {}


def lambda_handler(event, context):
    headers = event.get('headers', {})
    request_context = event.get('requestContext', {})

    ip = request_context.get('identity', {}).get('sourceIp', 'unknown')
    user_agent = headers.get('User-Agent', headers.get('user-agent', 'unknown'))
    visit_time = str(datetime.utcnow())
    location = get_location(ip)
    key = f"{ip}_{user_agent}" if ip != 'unknown' else 'unknown'

    try:
        response = table.get_item(Key={'user_key': key})
        item = response.get('Item', {})

        if item:
            item['count'] = int(item.get('count', 0)) + 1
            item['last_visit'] = visit_time
        else:
            item = {
                'user_key': key,
                'ip': ip,
                'user_agent': user_agent,
                'count': 1,
                'first_visit': visit_time,
                'last_visit': visit_time,
                'country': location.get('country'),
                'city': location.get('city'),
                'lat': str(location.get('lat')),
                'lon': str(location.get('lon'))
            }

        table.put_item(Item=item)

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "message": "Visitor tracked successfully",
                "user_key": key,
                "count": item['count']
            })
        }


        cloudwatch = boto3.client('cloudwatch')

        cloudwatch.put_metric_data(
            Namespace='VisitorAnalytics',
            MetricData=[
                {
                    'MetricName': 'TotalVisits',
                    'Dimensions': [{'Name': 'Country', 'Value': location.get('country', 'Unknown')}],
                    'Value': 1,
                    'Unit': 'Count'
                }
            ]
        )


    except Exception as e:
        print(f"Error: {e}")
        return {
            "statusCode": 500,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "message": "Error processing request",
                "error": str(e)
            })
        }
```

- Then click **Deloy**.

![lambda](/images/Lambda/lambda5.png)

4. Add Environment Variables

- Go to **Configuration** tab, then click **Environment variables**.

![lambda](/images/Lambda/lambda6.png)

- Click **Edit** and click **Add eviromment variable**

![lambda](/images/Lambda/lambda7.png)

- Add the following key-value pair::
  - Key: **WebsiteVisitors**
  - Value: **WebsiteVisitors**

![lambda](/images/Lambda/lambda8.png)

- Click save to completed.

5. Update **IAM Role**

- Go to **Configuration** tab, then chosse **Environment variables**.
- Click on Role name.

![lambda](/images/Lambda/lambda9.png)

- Once on the IAM Role page, click **Add permissions**, then choose **Attach policies**.

![lambda](/images/Lambda/lambda10.png)

- Select the policy named: **AmazonDynamoDBFullAccess**
- Then choose **Add permission**.

![lambda](/images/Lambda/lambda11.png)

Now repeat the steps above to create another Lambda function::

- Function name: **createUser**.
- Runtime: **Python 3.11**.
- Deploy the following code.

```js
import json
import uuid
from datetime import datetime
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')
cloudwatch = boto3.client('cloudwatch')

def put_custom_metric(metric_name):
    cloudwatch.put_metric_data(
        Namespace='YourApp/Lambda',
        MetricData=[{
            'MetricName': metric_name,
            'Value': 1,
            'Unit': 'Count'
        }]
    )

def lambda_handler(event, context):
    print("Received event:", json.dumps(event))

    try:
        body = json.loads(event.get('body', '{}'))
        name = body.get('name')
        email = body.get('email')

        if not name or not email:
            # Gửi metric cho lỗi Client
            put_custom_metric('ClientErrors')

            return {
                "statusCode": 400,
                "body": json.dumps({"message": "Name and email are required"})
            }

        user = {
            'user_id': str(uuid.uuid4()),
            'name': name,
            'email': email,
            'created_at': datetime.utcnow().isoformat()
        }

        table.put_item(Item=user)

        return {
            "statusCode": 201,
            "body": json.dumps({
                "message": "User created successfully",
                "user": user
            })
        }

    except Exception as e:
        print("Error:", str(e))

        # Gửi metric cho lỗi Server
        put_custom_metric('ServerErrors')

        return {
            "statusCode": 500,
            "body": json.dumps({
                "message": "Internal server error",
                "error": str(e)
            })
        }

```

- Repeat the **IAM Role** configuration step.

Next, we will create the **API Gateways**.
