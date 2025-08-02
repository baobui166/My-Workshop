---
title: "Sử dụng Cloudwatch để thu thập dữ liệu và phân tích"
date: "`r Sys.Date()`"
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

Trong quá trình giám sát ứng dụng trên AWS, chúng ta sẽ sử dụng một loạt công cụ mạnh mẽ của **Amazon CloudWatch** để thu thập và phân tích dữ liệu hoạt động. **CloudWatch Logs** cho phép ghi lại nhật ký (logs) từ dịch vụ như API Gateway. Hỗ trợ việc debug và truy vết lỗi. **CloudWatch Metrics** giúp theo dõi các chỉ số hiệu năng như độ trễ, số lượng request hay tỷ lệ lỗi. Dựa trên các metric này, chúng ta có thể thiết lập **Alarm** để tự động phát hiện sự cố và kích hoạt cảnh báo qua **Amazon SNS** đến email hoặc dịch vụ khác. Bên cạnh đó, **CloudWatch Log Insights** cung cấp công cụ truy vấn mạnh mẽ để phân tích log một cách trực quan và hiệu quả. Cuối cùng, chúng ta sẽ sử dụng **CloudWatch Dashboard** để tạo bảng điều khiển trực quan, tập trung toàn bộ metric, log và biểu đồ cảnh báo nhằm dễ dàng theo dõi toàn cảnh hoạt động của hệ thống theo thời gian thực.

### Nội dung:

- [Phân tích cùng Cloudwatch Log](./3.2.1-Cloudwatchlogs//)
- [Theo dõi cùng Cloudwatch Metrics](./3.2.2-Cloudwatchmetrics//)
- [Phát hiện sự cố và thông báo lỗi thông qua Alarm và SNS](./3.2.3-Cloudwatchalarmsns//)
- [Truy vấn lỗi cùng Log Insight](./3.2.4-Cloudwatchloginsight//)
- [Truy vấn lỗi cùng Clouwatch Log Insights](./3.2.4-Cloudwatchloginsight/)
- [Tạo Dashboard](./3.2.5-Createdashboard/)
