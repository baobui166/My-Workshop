---
title: "Theo dõi các log của 1 lambda function"
date: "`r Sys.Date()`"
weight: 1
chapter: false
pre: " <b> 3.2.1 </b> "
---

#### Theo dõi các log của 1 lambda function.

1. Truy cập Lambda function

- Vào **AWS Console**
- Vào dịch vụ **Lambda**
- Chọn function bạn muốn xem log

![log](/images/Log/log1.png)

2. Chọn tab **"Monitor"**.

- Trong giao diện **Lambda function** → chọn tab **Monitor**
- Bấm vào mục **View Cloudwatch Log**

3. Xem log chi tiết

- Sau khi chuyển sang màn hình **Log events** thì **chọn** vào **log stream** mới nhất (theo thời gian)

![log](/images/Log/log2.png)

- Tại đây bạn sẽ thấy log như:

![log](/images/Log/log3.png)

- Phân tích:
  - **INIT_START**: Xuất hiện khi Lambda khởi động lần đầu (cold start), hiển thị: Runtime version đang dùng (Python 3.11), ARN của runtime thực tế. Không xuất hiện mỗi lần gọi – chỉ khi tạo container mới
  - **START**: Báo hiệu Lambda function bắt đầu xử lý một request mới, gồm:
    - **RequestId**: Mã duy nhất cho mỗi lần gọi,
    - **Version**: Phiên bản Lambda đang chạy (**$LATEST** là mặc định).
  - **END**: Thông báo Lambda function đã kết thúc xử lý request, cùng RequestId với START
  - **REPORT**: Thông báo hiệu năng: **Duration**: Thời gian thực thi thực tế (490.34 ms), **Billed Duration**: AWS làm tròn lên (491 ms → tính tiền theo bội số 1 ms), **Memory Size**: Bộ nhớ cấu hình cho function (128 MB), **Max Memory Used**: Bộ nhớ thực tế Lambda dùng trong lần gọi đó (58 MB).
