---
title: "Chuẩn bị"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

## Chuẩn bị

Việc bật và chỉnh sửa **logs** (nhật ký) và **tracing** (theo dõi truy vết) trong **API Gateway** (REST API) giúp bạn dễ dàng giám sát, debug và phân tích hành vi ứng dụng.

### 🎯 Mục tiêu:

- Bật **Access Logs** để theo dõi các request/response chi tiết.
- Bật **Execution Logs** để theo dõi quá trình xử lý (với REST API).
- Bật **X-Ray Tracing** để theo dõi luồng request qua các dịch vụ AWS như API Gateway → Lambda → DynamoDB.

---

### 🛠️ Các bước thực hiện:

#### 1. Truy cập API Gateway

- Đăng nhập AWS Console: https://console.aws.amazon.com/
- Gõ “**API Gateway**” vào thanh tìm kiếm, chọn dịch vụ.

#### 2. Chọn API bạn muốn theo dõi

- Vào **API Gateway** → Chọn API bạn đang sử dụng
- Điều hướng đến **Stages** → chọn stage (ví dụ: dev, prod)
- Nhấn **Edit** trong phần **Logs and Tracing**

![Edit](/images/Editlogandtracing/edit1.png)

#### 3. Tích các tùy chọn sau:

![Edit](/images/Editlogandtracing/edit2.png)

- ✅ **Errors and info logs**: Ghi lại cả lỗi và thông tin request/response (nên bật khi debug).
- ✅ **Data tracing**: Ghi lại toàn bộ request và response payload.
- ✅ **Detailed metrics**: Bật ghi số liệu chi tiết về API vào CloudWatch Metrics: count, latency, 4XX, 5XX.
- ✅ **X-Ray tracing**: Bật AWS X-Ray để trace toàn bộ luồng request.

---

👉 Bước tiếp theo: phân tích API với **CloudWatch Metrics**, **Logs Insight**, **Alarm**, **Dashboard** và **X-Ray**.
