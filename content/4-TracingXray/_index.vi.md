---
title: "X-Ray"
date: "`r Sys.Date()`"
weight: 4
chapter: false
pre: " <b> 4. </b> "
---

Trong hệ thống vi mô (microservices) hoặc serverless hiện đại, các truy vấn thường đi qua nhiều thành phần hoặc các dịch vụ khác nhau. Việc phát hiện "request nào đang chậm?", "phần nào đang bị tắc?", hay "lỗi nằm ở đâu?" là rất khó nếu chỉ dùng log.

### 🌐 AWS X-Ray là công cụ tracing mạnh mẽ giúp:

- Theo dõi toàn bộ hành trình của một request xuyên suốt các dịch vụ.
- Hiển thị biểu đồ trực quan (service map) về luồng xử lý và thời gian.
- Tìm ra nút thắt cổ chai, lỗi, và các truy vấn chậm.
- Giúp debug production mà không cần xem log thủ công từng phần.

---

### 🔧 Hướng dẫn Cấu hình & Sử dụng AWS X-Ray

#### 1. Bật X-Ray cho Lambda

- Vào AWS Console → Lambda
- Chọn function bạn muốn theo dõi
- Trong phần **Monitoring and operations tools**, bật **Lambda service traces**

#### 2. Bật X-Ray cho API Gateway

- Đã được cấu hình sẵn trong phần Logging and Tracing trước đó (phần 3)

#### 3. Xem biểu đồ Service Map

- Vào **Lambda** → chọn function cần quan sát
- Chọn tab **Monitor**
- Chọn **View X-Ray Traces**

![Traces](/images/Traces/traces1.png)

#### 4. Truy vết từng request

- Vào tab **Traces**

![Traces](/images/Traces/traces2.png)

- Chọn một trace bất kỳ để xem chi tiết:

![Traces](/images/Traces/traces3.png)

##### ✨ Trace Flow:

- Biểu đồ dạng flow mô tả luồng xử lý từ Client → API Gateway → Lambda
- Request POST tới UserAPI/Create → Lambda xử lý tạo user → Response 201
- Hiển thị thời gian xử lý (66ms) và các bước trung gian

![Traces](/images/Traces/traces4.png)

##### 📊 Segments Timeline:

- **UserAPI/Create (API Gateway Stage)**: Nhận request POST, xử lý ~48ms
- **Lambda Invoke**: Gọi Lambda function `create_user`, ~44ms
- **Lambda Context**: Thực thi logic ~20ms, overhead ~19ms
- Tổng thời gian phản hồi: ~66ms với mã 201 (thành công)

---

### ⚠️ Trace bị lỗi

![Traces](/images/Traces/traces5.png)
![Traces](/images/Traces/traces6.png)
