---
title: "Sử dụng CloudWatch Metrics theo dõi API Gateway"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 3.2.2 </b> "
---

#### Sử dụng CloudWatch Metrics theo dõi API Gateway

Sử dụng **CloudWatch Metrics** theo dõi **API Gateway** trực tiếp trên giao diện AWS Console.

Mục tiêu:

- Giám sát số lượng request, lỗi 4xx, 5xx, độ trễ (latency), integration latency,… của API Gateway
- Không cần tạo thêm CloudWatch Log group hoặc viết code thủ công

Các bước thực hiện:

1. Truy cập CloudWatch

- Đăng nhập AWS Console
- Gõ CloudWatch vào thanh tìm kiếm > chọn CloudWatch

2. Chọn Metrics > All Metrics

![metrics](/images/Metrics/metrics1.png)

- Trong menu bên trái, chọn Metrics → click All metrics
- Ở phần Browse, chọn **Lambda**:

![metrics](/images/Metrics/metrics2.png)

3. Chọn các metrics cần giám sát:

- Chọn **By Resource**

![metrics](/images/Metrics/metrics3.png)

- Sau đó chọn các function name mà bạn muốn theo dõi (chúng ta sẽ theo dõi 3 thành phần chính đó là: Throttles, Erros, Duration)

![metrics](/images/Metrics/metrics4.png)

- Theo dõi trên biểu đồ

![metrics](/images/Metrics/metrics5.png)

- 3 thông số hiển thị trên màn hình:

  - **Duration**: Thời gian thực thi trung bình của Lambda (tính bằng ms) tại mỗi thời điểm. Màu xanh lá cây.
  - **Errors**: Số lượng lỗi xảy ra tại thời điểm đó. Màu cam.
  - **Throttles**: Số lượng lần Lambda bị giới hạn (quá số lượng request cho phép).Màu xanh dương nhạt.

- Khi bạn rê chuột vào điểm dữ liệu lúc 07-30 09:35 UTC, **CloudWatch** hiển thị:

  - **Duration**: 121.79 ms
    → Lambda mất ~122ms để thực thi

  - **Errors**: 0.4
    → Trung bình có lỗi xảy ra (có thể là 2 lỗi trong 5 request hoặc do làm tròn)

  - **Throttles**: 0
    → Không có request nào bị giới hạn tại thời điểm đó
