---
title: "Tạo alarm và SNS"
date: "`r Sys.Date()`"
weight: 3
chapter: false
pre: " <b> 3.2.3 </b> "
---

#### Tạo alarm và SNS.

Sử dụng Amazon CloudWatch Alarm kết hợp với Amazon SNS để gửi thông báo qua email mỗi khi API gặp lỗi áp dụng cho trường hợp API của bạn đang chạy trên môi trường AWS (Lambda, API Gateway, v.v).

Mục tiêu

- Giám sát lỗi (ví dụ: 5XX trong API Gateway, error count trong Lambda).
- Khi lỗi xảy ra vượt ngưỡng cho phép → gửi email cảnh báo.

Các bước thực hiện

1. Vào **CloudWatch Console**

- Chọn Alarms → Create Alarm

![Connect](/images/Alarm/alarm1.png)

- Chọn Select metric
  ![Connect](/images/Alarm/step1.png)

- Chọn **Lambda** → By Resource → Error (Metric name)

![Connect](/images/Alarm/step1.1.png)

- Chọn **By Resouce**

![Connect](/images/Alarm/step1.2.png)

- Chọn Error (Metric name)

![Connect](/images/Alarm/step1.3.png)

- Cấu hình các điều kiện để có thể SNS hoạt động mượt mà khi gặp lỗi

![Connect](/images/Alarm/step1.4.1.png)
![Connect](/images/Alarm/step1.4.2.png)

- Tạo SNS mới để sử dụng cho Alarm. Nhập email muốn nhận thông báo cảnh báo vào ô **Email endpoint**

![Connect](/images/Alarm/step2.png)

- Nhấn Next, sau đó đặt tên cho alarm của chúng ta

![Connect](/images/Alarm/step3.png)

- Sau đó chuyển đến bước cuối cùng review các cấu hình mà mình đã chọn và nhấn **Create**

> **Lưu ý**: nếu bạn muốn tạo alarm cho **API Gateway** thì ở bước tạo đầu tiên Chọn Select metric → API Gateway → By Stage → Method → 5XXError.
> Các bước sau lặp lại như trên.

- Kết quả nhận qua email khi hệ thống có sự cố:

![Connect](/images/Alarm/alrm5.png)
