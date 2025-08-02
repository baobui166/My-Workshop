---
title: "Tạo Lambda function"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 2.2 </b> "
---

### Tạo Lambda function

Trong bước này, chúng ta sẽ tạo một **AWS Lambda Function**, cấu hình đầy đủ các yếu tố như: mã nguồn, quyền truy cập (IAM Role), biến môi trường và test thử hàm để ghi log vào DynamoDB.

Mục tiêu:

- Tạo một Lambda function xử lý logic API.
- Cấu hình IAM Role để Lambda có quyền ghi dữ liệu.
- Thêm biến môi trường để lưu thông tin kết nối MongoDB (URI, DB name, collection).
- Viết mã xử lý và deploy trực tiếp.
- Tạo và chạy một test event.
- Kiểm tra dữ liệu trong MongoDB.

Các bước thực hiện:

1. Truy cập **Lambda Service**:

- Truy cập AWS Console: [AWS console](https://console.aws.amazon.com/)
- Gõ **“Lambda”** trong thanh tìm kiếm và chọn dịch vụ AWS Lambda.

2. Tạo Lambda function:

- Nhấn nút **“Create function”**.
- Chọn Author from scratch.
- Nhập thông tin:

  - Function name: **GetVisitor**.
  - Runtime: **Python 3.11**.

  ![lambda](/images/Lambda/lambda2.png)

- Nhấn Create Function.
  ![lambda](/images/Lambda/lambda3.png)

3. Deploy mã nguồn

- Dán mã xử lý sau vào trong khung editor.

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

- Sau đó nhấn **Deloy**.

![lambda](/images/Lambda/lambda5.png)

4. Thêm biến môi trường

- Chuyển sang tab **Configuration**, sau đó chọn **Environment variables**.

![lambda](/images/Lambda/lambda6.png)

- Nhấn **Edit** và nhấn **Add eviromment variable**

![lambda](/images/Lambda/lambda7.png)

- Sau đó thêm cặp key - value sau:
  - Key: **WebsiteVisitors**
  - Value: **WebsiteVisitors**

![lambda](/images/Lambda/lambda8.png)

- Nhấn save để hoàn tất.

5. Cập nhật **IAM Role**

- Chuyển sang tab **Configuration**, sau đó chọn **Environment variables**.
- Sau đó nhấn vào Role name.

![lambda](/images/Lambda/lambda9.png)

- Sau khi chuyển sang tab role thì chọn **Add Permission**, sau đó chọn **Attch Policies**

![lambda](/images/Lambda/lambda10.png)

- Chọn polices có tên: **AmazonDynamoDBFullAccess**
- Sau đó nhấn **Add permission**.

![lambda](/images/Lambda/lambda11.png)

Thực hiện lặp lại các bước trên để tạo thêm 1 lambda function:

- Function name: **createUser**.
- Runtime: **Python 3.11**.
- Deloy đoạn code sau.

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

- Lặp lại bước thêm **IAM Role**.

Tiếp theo chúng ta sẽ tạo các **API Gateway**.
