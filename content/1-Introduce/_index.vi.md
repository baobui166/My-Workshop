---
title: "Giới thiệu"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

Trước khi bắt tay vào triển khai một giải pháp giám sát API hoàn chỉnh, bạn cần hiểu rõ các khái niệm cốt lõi về **Giám sát Serverless (Serverless Monitoring)** và cách các công cụ quan sát của AWS tích hợp trơn tru vào môi trường không máy chủ (serverless).

### Giám sát & Quan sát Serverless

Các ứng dụng serverless tuy giúp loại bỏ gánh nặng quản lý hạ tầng, nhưng lại mang đến nhiều thách thức mới trong việc theo dõi, gỡ lỗi và đảm bảo SLA. AWS cung cấp bộ công cụ mạnh mẽ giúp:

- Theo dõi hiệu suất
- Truy vết (trace) chi tiết luồng xử lý
- Cảnh báo tức thì khi có sự cố

Tất cả đều được thực hiện mà không cần quản lý máy chủ.

### Các dịch vụ AWS được sử dụng

Trong dự án này, chúng ta sẽ xây dựng một hệ thống giám sát API **end-to-end** trên nền tảng serverless, sử dụng các dịch vụ sau:

- **Xử lý:** AWS Lambda
- **Quản lý API:** Amazon API Gateway
- **Cơ sở dữ liệu:** Amazon DynamoDB
- **Giám sát & Quan sát:**
  - Amazon CloudWatch Logs: ghi log tập trung
  - CloudWatch Metrics: theo dõi độ trễ, lưu lượng, lỗi
  - CloudWatch Alarms + SNS: cảnh báo theo thời gian thực
  - AWS X-Ray: truy vết phân tán và phân tích hiệu suất

### Giới thiệu về AWS Lambda

AWS Lambda cho phép bạn chạy logic backend mà không cần quản lý server. Lambda hỗ trợ:

- Tự động scale và khả dụng cao
- Tích hợp liền mạch với API Gateway & CloudWatch
- Kích hoạt theo sự kiện với cấu hình bộ nhớ và thời gian thực thi linh hoạt

### Thực hành triển khai

Trong workshop này, bạn sẽ được hướng dẫn xây dựng hệ thống giám sát serverless từ đầu, bao gồm:

- Tạo API sử dụng Lambda và API Gateway
- Ghi log và theo dõi hiệu suất bằng CloudWatch Logs & Metrics
- Tạo cảnh báo với CloudWatch Alarms & SNS
- Bật X-Ray để truy vết toàn bộ luồng xử lý và tìm lỗi gốc
- Trực quan hóa dữ liệu để theo dõi liên tục
- Viết tài liệu cơ bản cho các API đã giám sát

  **Kết quả:** Sau workshop, bạn sẽ sở hữu hệ thống API serverless được giám sát đầy đủ, tự động cảnh báo và có khả năng phân tích lỗi phân tán, hoàn toàn sử dụng các dịch vụ gốc của AWS.
