---
title: "Chuẩn bị"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

{{% notice info %}}
Bạn cần tạo một hàm Lambda, một endpoint API Gateway, và một bảng DynamoDB để thực hiện bài lab này.
{{% /notice %}}

Để bắt đầu với mô hình **Serverless** trên AWS, bài lab này sẽ hướng dẫn bạn từng bước tạo và tích hợp các thành phần quan trọng như **AWS Lambda**, **API Gateway**, và **Amazon DynamoDB**.

Bạn có thể tham khảo tài liệu chính thức của AWS để hiểu rõ hơn:

- [Giới thiệu về AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Giới thiệu về Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)
- [Giới thiệu về Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

Ngoài ra, để hàm Lambda có thể truy cập và làm việc với **API Gateway** và **DynamoDB**, bạn cũng cần tạo và gán một **IAM Role** phù hợp. Vai trò này sẽ cho phép Lambda có quyền đọc/ghi dữ liệu vào DynamoDB và phản hồi thông qua API Gateway một cách an toàn.

### Nội dung

- [Tạo DynamoDB](2.1-createdyanmodb/)
- [Tạo Lambda](2.2-createlambda/)
- [Tạo API Gateway](2.3-createapigateway/)
