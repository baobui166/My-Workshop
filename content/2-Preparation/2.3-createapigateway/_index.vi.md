---
title: "Tạo API Gateway"
date: "`r Sys.Date()`"
weight: 3
chapter: false
pre: " <b> 2.3 </b> "
---

### Tạo API Gateway

Trong bước này, bạn sẽ tạo một REST API bằng Amazon API Gateway, kết nối nó với Lambda function đã tạo ở bước trước, sau đó deploy ra một endpoint công khai để sử dụng.

Mục tiêu:

- Tạo REST API sử dụng API Gateway
- Tích hợp Lambda function làm backend
- Cấu hình phương thức (method), resource path`
- Deploy API ra endpoint công khai

Các bước thực hiện

1. Truy cập API Gateway

- Vào AWS Console: https://console.aws.amazon.com/
- Gõ **“API Gateway”** vào thanh tìm kiếm, chọn dịch vụ.

2. Tạo API mới:

- Nhấn nút **“Create API”**

![apigateway](/images/Apigateway/api1.png)

- Chọn loại API:

  - Chọn **REST API (Build)**
  - Nhấn Build

![apigateway](/images/Apigateway/api2.png)

- API detail chọn **New API**
- Sau đó đặt tên mà bạn muốn đặt cho API đó
  -Ví dụ: **Visitor**

![apigateway](/images/Apigateway/api3.png)

- Nhấn **Create** để API

![apigateway](/images/Apigateway/api4.png)

- Nhấn Created Method để tạo các phương thức cho API
  - Chọn phương thức **GET**
  - Chọn **Lambda function** mà bạn đã tạo để gắn cho API

![apigateway](/images/Apigateway/api6.png)

- Nhấn **create** để tạo
  ![apigateway](/images/Apigateway/api5.png)

3. Deloy API

- Nhấn Deloy API, sau đó cấu hình như sau:

![apigateway](/images/Apigateway/api9.png)

- Nhấn Deloy.

4. Kiểm thử API đã hoạt động hay chưa

- Sao chép **Invoke URL** của API vừa deloy
  ![apigateway](/images/Apigateway/api10.png)

- Dán vào cửa sổ trình duyệt mới, sau đó nhấn enter:

![apigateway](/images/Apigateway/api11.png)

- Vào DynamoDB để kiểm tra API đã hoạt động hay chưa, nếu thành công thì sẽ có dữ liệu thêm vào cơ sở dữ liệu.

![apigateway](/images/Apigateway/api12.png)

Phần tiếp theo chúng ta sẽ bắt đầu thực hiện theo dõi và quan sát các API của chúng ta thông qua Cloudwatch.
