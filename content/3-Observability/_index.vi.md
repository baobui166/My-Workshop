---
title: "Giám sát và theo dõi API với Cloudwatch"
date: "`r Sys.Date()`"
weight: 3
chapter: false
pre: " <b> 3. </b> "
---

## Giám sát và theo dõi API với CloudWatch

Trong kiến trúc **serverless hiện đại**, việc đảm bảo chất lượng dịch vụ không chỉ dừng lại ở khâu triển khai mà còn phụ thuộc rất lớn vào khả năng **quan sát (Observability)** của hệ thống.

Observability giúp chúng ta hiểu được **những gì đang xảy ra bên trong** hệ thống thông qua việc thu thập, phân tích và hiển thị dữ liệu liên quan đến:

- Hoạt động
- Hiệu năng
- Các lỗi phát sinh

---

### 🎯 **Tại sao giám sát lại quan trọng?**

#### 📌 Hiểu rõ hành vi hệ thống

Việc thu thập **log**, số liệu **metrics**, và truy vấn thông qua **CloudWatch Logs Insight** giúp bạn:

- Nắm bắt chi tiết quy trình xử lý
- Hiểu rõ hành vi API và Lambda
- Dễ dàng xác định nguyên nhân gốc rễ của lỗi

#### 📌 Phát hiện và xử lý sự cố kịp thời

- Tích hợp **CloudWatch Alarms** với **Amazon SNS**
- Gửi **email cảnh báo tự động** nếu có lỗi hoặc vượt ngưỡng
- Can thiệp kịp thời trước khi ảnh hưởng đến người dùng cuối

#### 📌 Đo lường hiệu suất và tối ưu hóa

- Theo dõi chỉ số: **độ trễ**, **số request**, **tỷ lệ lỗi**
- Giúp tối ưu hiệu năng
- Cải tiến theo SLA (Service Level Agreement)

#### 📌 Truy vấn và phân tích nâng cao

- Dùng **Logs Insight** để lọc và thống kê log nâng cao
- Phân tích theo thời gian thực hoặc lịch sử hệ thống
- Rút ra các bài học vận hành, phát hiện mẫu lỗi định kỳ

---

### 📚 Nội dung chi tiết

- **3.1. [Chuẩn bị](3.1-Preparation/)**  
  Chuẩn bị tài nguyên và kích hoạt log/tracing

- **3.2. [Giám sát API với CloudWatch Metrics](3.2-Cloudwatch/)**  
  Sử dụng Metrics để theo dõi hiệu suất API Gateway, Lambda

---

✅ Với việc kết hợp **log**, **metric**, **alarm**, **dashboard** và **truy vấn nâng cao**, bạn sẽ có một hệ thống quan sát mạnh mẽ, chủ động kiểm soát chất lượng dịch vụ API ngay cả khi chạy trong môi trường không máy chủ (serverless).
