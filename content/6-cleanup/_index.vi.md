+++
title = "Dọn dẹp tài nguyên"
date = 2021
weight = 6
chapter = false
pre = "<b>6. </b>"
+++

Trong phần này, chúng ta sẽ **dọn dẹp toàn bộ tài nguyên AWS** đã tạo trong quá trình thực hành để:

- Tránh phát sinh chi phí không mong muốn.
- Dọn sạch môi trường thử nghiệm.
- Đảm bảo tuân thủ quy trình quản lý tài nguyên trên cloud.

---

### Xóa Lambda Functions

1. Truy cập AWS Console → **Lambda**
2. Chọn từng function (ví dụ: `create_user`, `get_user`)
3. Chọn **Actions → Delete function**
4. Nhập tên function để xác nhận và xoá

> Nếu bạn có nhiều hàm, hãy kiểm tra lại để tránh xoá nhầm các hàm khác.

---

### Xóa API Gateway

1. Vào AWS Console → **API Gateway**
2. Chọn **REST APIs**
3. Chọn API bạn muốn xoá (ví dụ: `UserAPI`)
4. Nhấn **Actions → Delete API** và xác nhận

> Sau khi xoá, các endpoint sẽ không thể truy cập được nữa.

---

### Xóa DynamoDB Tables

1. Truy cập AWS Console → **DynamoDB**
2. Chọn tab **Tables**
3. Chọn từng bảng (ví dụ: `Users`) → **Actions → Delete Table**
4. Xác nhận để xoá

> Dữ liệu sẽ bị mất vĩnh viễn nếu không có backup.

---
