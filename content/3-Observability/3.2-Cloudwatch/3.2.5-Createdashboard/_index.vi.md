---
title: "Tạo Daschboard"
date: "`r Sys.Date()`"
weight: 5
chapter: false
pre: " <b> 3.2.5 </b> "
---

Trong môi trường Serverless hiện đại để xây dựng các ứng dụng phân tán, việc giám sát, theo dõi và chẩn đoán sự cố là vô cùng quan trọng. Để không bị “chìm” trong hàng ngàn dòng log, Amazon CloudWatch Dashboard cung cấp một giao diện trực quan

**Mục tiêu**

- Theo dõi trạng thái hệ thống theo thời gian thực.
- Phát hiện vấn đề về hiệu suất hoặc lỗi nhanh chóng.
- Hiểu rõ hành vi người dùng và tần suất truy cập API.
- Ra quyết định dựa trên dữ liệu, không phải cảm tính.

Dashboard hoạt động như một bản đồ hệ thống thu nhỏ, kết hợp từ nhiều biểu đồ và số liệu, mang lại cái nhìn tổng quan và sâu sát.

### Các bước thực hiện

### 1. Tạo Dashboard mới

- Vào CloudWatch Console.
- Chọn mục Dashboards → Nhấn “Create dashboard”.

![Dashboard](/images/Dashboard/dashboard1.png)

- Đặt tên cho dashboard (ví dụ: `MonitoringAPI`).

![Dashboard](/images/Dashboard/dashboard2.png)

- Chọn loại widget muốn hiển thị: Line, Number, Bar, hoặc Text.

![Dashboard](/images/Dashboard/dashboard3.png)

### 2. Thêm biểu đồ giám sát API Gateway

- Loại widget: Line
- Metric:
  - Chọn API Gateway → By ApiName.

![Dashboard](/images/Dashboard/dashboard4.png)
![Dashboard](/images/Dashboard/dashboard5.png)

- Metric: Latency, 4XXError, 5XXError

![Dashboard](/images/Dashboard/dashboard6.png)

- Chọn Statistic: Average → Period: 1 Minute

### 3. Thêm biểu đồ theo dõi Lambda

- Loại widget: Line hoặc Number

- Metric:

  - Service: Lambda
  - Metrics: Duration, Invocations, Errors, Throttles
  - Chọn theo từng function (theo ARN hoặc tên)

### 4. Thêm biểu đồ DynamoDB

- Loại widget: Line hoặc Stacked Area
- Metric:

  - Service: DynamoDB
  - Metrics: ConsumedReadCapacityUnits, ConsumedWriteCapacityUnits, ThrottledRequests
  - Filter theo từng bảng (table name)

### 5. Tổ chức dashboard

- Kéo thả các widget để bố trí hợp lý.
- Đặt tên rõ ràng cho mỗi biểu đồ: “API Error Rate”, “Lambda Duration”, “DynamoDB Usage”, v.v.
- Sử dụng màu sắc tương phản để dễ nhìn.
- Lưu lại sau khi hoàn tất.

![Dashboard](/images/Dashboard/dashboard7.png)
