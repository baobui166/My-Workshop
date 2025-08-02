---
title: "Log Insight"
date: "`r Sys.Date()`"
weight: 4
chapter: false
pre: " <b> 3.2.4 </b> "
---

#### Quan sát thông qua Log Insight.

Mục tiêu

- Theo dõi truy vấn và hiệu suất toàn bộ luồng.
- Ghi log đúng chuẩn theo structured logging (JSON).
- Truy vấn log với CloudWatch Logs Insights hiệu quả, tối ưu hiệu suất.
- Phân tích truy vấn chậm, lỗi 4xx/5xx, DynamoDB throttling, chi phí.

Các bước thực hiện

1. Vào **CloudWatch Console**

- Vào CloudWatch → Logs Insights

- Chọn log group: `/aws/lambda/my-function` hoặc `/aws/apigateway/`...

2. Các Truy vấn Mẫu Logs Insights Cho Lambda

- Truy vấn các lỗi Lambda (status code 4xx, 5xx)

  ```js
  	fields @timestamp, @message
  | filter @message like /ERROR/
  | sort @timestamp desc
  | limit 100

  ```

![Connect](/images/Insight/insight2.png)
![Connect](/images/Insight/insight1.png)

Nội dung chính trong log báo lỗi như sau:

- Loại lỗi: [ERROR] ClientError: An error occurred (AccessDenied) when calling the PutMetricData operation.
- Mô tả: **Lambda function** đang cố gắng gọi API PutMetricData của CloudWatch để đẩy dữ liệu metric nhưng bị từ chối truy cập (AccessDenied).
- Nguyên nhân: User hoặc vai trò (role) mà Lambda đang sử dụng không có quyền gọi PutMetricData.
- Địa điểm xảy ra lỗi: Lambda function tên create_user ở vùng ap-southeast-1.
- Thông tin khác trong log có: timestamp, account ID, environment, log stream, đoạn mã lỗi traceback trong code Python Lambda.

- Thống kê thời gian chạy và tài nguyên Lambda (duration, memory)

  ```js
  	filter @type = "REPORT"
  | stats avg(@duration) as AverageDuration, max(@duration) as MaxDuration, min(@duration) as MinDuration, avg(@maxMemoryUsed/1024/1024) as AverageMemoryUsedMB, max(@maxMemoryUsed/1024/1024) as MaxMemoryUsedMB, min(@maxMemoryUsed/1024/1024) as MinMemoryUsedMB
  ```

![Connect](/images/Insight/insight3.png)

- AverageDurationMS: Thời gian chạy trung bình của Lambda function trong khoảng thời gian truy vấn (ở đây đang tính theo mili giây).
- MaxDuration: Thời gian chạy tối đa của Lambda function trong khoảng thời gian đó (tính bằng mili giây).
- MinDuration: Thời gian chạy tối thiểu của Lambda function trong khung thời gian đó (ms)
- AverageMemoryUsedMB: Bộ nhớ trung bình Lambda function đã sử dụng trong thời gian chạy, tính theo đơn vị MB.
- MaxMemoryUsedMB: Bộ nhớ tối đa mà Lambda function đã sử dụng trong khoảng thời gian đó (MB).
- MinMemoryUsedMB: Bộ nhớ tối thiểu Lambda function đã sử dụng trong cụm dữ liệu đó (MB).

- Phân tích độ trễ của Lambda (duration) theo thời gian:

```js
	filter @type = "REPORT"
	| stats avg(@duration), max(@duration), min(@duration) by bin(5m)
```

![Connect](/images/Insight/insight4.png)

3. Tạo ra các câu lện query thông qua prompt

- Nhập câu lệnh query bạn mong muốn vào ô Prompt

![Connect](/images/Insight/insight5.png)

- Nhấn **Generate new query** để tạo câu lệnh, sau đó nhấn **run query** để chạy câu lệnh:

```js
	Cold start rate as a percentage of total Lambda invocations
```

![Connect](/images/Insight/insight6.png)
