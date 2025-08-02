---
title: "Tạo DynamoDB"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 2.1 </b> "
---

### Tạo bảng DynamoDB

Trong hệ thống giám sát API, chúng ta sẽ sử dụng Amazon DynamoDB như một cơ sở dữ liệu NoSQL để lưu trữ các thông tin như log người dùng, truy vấn API hoặc các dữ liệu cần theo dõi theo thời gian thực.

**Mục tiêu của bước này:**

- Tạo bảng DynamoDB dùng trong quá trình triển khai Lambda.
- Cấu hình khóa chính và các thiết lập cơ bản.

**Các bước thực hiện:**

1. Đăng nhập vào AWS Console:

- Truy cập: [AWS console](https://console.aws.amazon.com/)
- Chọn đúng vùng miền (ví dụ: us-east-1 hoặc ap-southeast-1).

2. Truy cập dịch vụ DynamoDB:

- Tìm kiếm **DynamoDB** trong thanh tìm kiếm và chọn dịch vụ.

3. Tạo bảng mới:

- Nhấn nút **"Create table"**.
  ![dynamoDB](/images/DynamoDB/dynamo1.png)

4. Nhập thông tin bảng:

- Tên bảng: WebsiteVisitors (hoặc tên bạn muốn)

  - Khóa phân vùng (Partition key): userKey
  - Kiểu dữ liệu: String
  - (Tuỳ chọn) Bạn có thể thêm khóa sắp xếp (Sort key) để tổ chức dữ liệu theo thời gian hoặc endpoint.

    - Ví dụ: timestamp - Number

  ![dynamoDB](/images/DynamoDB/dynamo2.png)

5. Tạo bảng:

- Cuối cùng, nhấn **"Create table"** để hoàn tất.
  ![dynamoDB](/images/DynamoDB/dynamo3.png)

6. Xác nhận bảng đã được tạo thành công:
   ![dynamoDB](/images/DynamoDB/dynamo4.png)

Tiếp theo, chúng ta sẽ tạo **Lambda Functions**.
