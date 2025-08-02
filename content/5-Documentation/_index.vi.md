---
title: "Documentation"
date: "`r Sys.Date()`"
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

Trong **AWS API Gateway**, Stage đại diện cho một môi trường triển khai cụ thể của API — ví dụ như dev, test, prod. Khi một **REST API** được tạo và phát triển, bạn cần triển khai (deploy) nó tới một stage để có thể truy cập thông qua endpoint.

Việc **export API** từ một stage là thao tác giúp bạn:

- Tạo tài liệu **OpenAPI (Swagger)** đại diện cho toàn bộ cấu trúc API đã triển khai.

- Chia sẻ cấu trúc API với frontend team, mobile team, hoặc import sang công cụ như **Postman**, **Swagger UI**, **Insomnia**, v.v.

- Phiên bản hóa API và dễ dàng migrate sang môi trường khác.

Các bước thực hiện:

1. Truy cập **AWS API Gateway**

- Vào API Gateway Console
- Chọn API bạn muốn export (kiểu REST)

![export](/images/Export/export1.png)

- Trong panel bên trái → Chọn Stages
- Click vào stage cụ thể (ví dụ: dev, prod)

![export](/images/Export/export2.png)

2. Xác định thông tin **Stage**

- Khi bạn chọn một **Stage**, bạn sẽ thấy:

  - Invoke URL: https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}
  - Tùy chọn log, throttling, caching

- Đây chính là endpoint người dùng có thể gọi.

3. Export OpenAPI của API từ Stage

- Quay lại màn hình chính của API (không phải stage)

- Nhấn vào nút Actions (góc trên bên trái) → chọn Export

![export](/images/Export/export3.png)

- Chọn định dạng:

  - Swagger / OpenAPI 2

  - OpenAPI 3

- Tải file .json hoặc .yaml về

![export](/images/Export/export4.png)

- File này có thể dùng để import sang Postman, Swagger UI hoặc các công cụ tài liệu hóa API.

4. Cách import sang Postman

- Mở Postman và nhân Import ở góc trái màn hình

![export](/images/Export/export5.png)

- Kéo thả file vào tải về và nhấn **Import**

![export](/images/Export/export6.png)

- Sử dụng API vừa mới import

![export](/images/Export/export7.png)
