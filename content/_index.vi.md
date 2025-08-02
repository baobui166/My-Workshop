---
title: "Session Management"
date: "`r Sys.Date()`"
weight: 1
chapter: false
---

# Làm việc với Amazon System Manager - Session Manager

### Tổng quan

Trong thời đại các ứng dụng hiện đại đòi hỏi sự phản hồi nhanh chóng và khả năng mở rộng linh hoạt, việc giám sát và theo dõi hoạt động của API đóng vai trò then chốt trong việc đảm bảo chất lượng dịch vụ (SLA), hiệu năng hệ thống và phát hiện sớm các sự cố. Workshop này được xây dựng nhằm hướng dẫn từng bước cách triển khai một hệ thống API Monitoring toàn diện trên nền tảng Serverless AWS, kết hợp giữa các dịch vụ chủ lực như AWS Lambda, API Gateway và DynamoDB, đồng thời tích hợp các công cụ giám sát như CloudWatch Logs, CloudWatch Metrics, CloudWatch Alarms, SNS và AWS X-Ray để:

- Theo dõi hiệu năng thực thi của từng API endpoint.

- Phân tích lỗi chi tiết ở từng tầng xử lý.

- Cảnh báo theo thời gian thực khi vượt ngưỡng hiệu năng hoặc xảy ra lỗi nghiêm trọng.

- Đảm bảo tuân thủ các chỉ số SLA đặt ra.

- Tự động hóa việc ghi nhận và phân tích log, giúp tối ưu hóa quy trình vận hành.

![ConnectPrivate](/images/arc.png)

### Nội dung

1.  [Giới thiệu](1-introduce/)
2.  [Các bước chuẩn bị](2-preparation/)
3.  [Observability](3-Observability/)
4.  [Tracing](4-TracingXray/)
5.  [Documentation](5-Documentation/)
6.  [Dọn dẹp tài nguyên](6-Cleanup/)
