### Hệ Thống Quản Lý Giao Nhận của MagicPost

MagicPost hoạt động trong lĩnh vực chuyển phát, có các chi nhánh trải rộng khắp cả nước. Mỗi chi nhánh đảm nhận một khu vực cụ thể. Ngoài các chi nhánh, công ty còn có nhiều kho chứa hàng. Mỗi chi nhánh sẽ làm việc với một kho chứa, và ngược lại, mỗi kho chứa sẽ làm việc với nhiều chi nhánh.

Người gửi mang hàng của mình đến chi nhánh gần nhất để gửi. Sau đó, hàng sẽ được chuyển đến kho chứa tương ứng với chi nhánh của người gửi, và sau đó là chuyển đến kho chứa tương ứng với chi nhánh của người nhận. Tại chi nhánh của người nhận, nhân viên giao hàng sẽ giao hàng cho người nhận.

Công ty cần phát triển một phần mềm để quản lý hệ thống giao nhận như mô tả trên. Dưới đây là các yêu cầu chức năng cho từng đối tượng sử dụng:

#### Chức Năng cho Ban Lãnh Đạo Công Ty

- Quản lý các chi nhánh và kho chứa trong hệ thống.
- Quản lý tài khoản cho quản lý chi nhánh và quản lý kho chứa. Mỗi chi nhánh hoặc kho chứa có một tài khoản quản lý.
- Tạo thống kê về số lượng hàng gửi và hàng nhận trên toàn quốc, cũng như từng chi nhánh hoặc kho chứa.

#### Chức Năng cho Quản Lý Chi Nhánh

- Tạo tài khoản cho nhân viên giao dịch tại chi nhánh.
- Ghi nhận thông tin về hàng hóa gửi đi và nhận về tại chi nhánh.
- Tạo đơn hàng chuyển hàng gửi đến kho chứa, mỗi ngày hoặc trước khi nhận hàng gửi.
- Xác nhận việc nhận hàng từ kho chứa.
- Tạo đơn hàng giao hàng đến người nhận.
- Xác nhận việc giao hàng đến người nhận hoặc trả lại hàng không giao được cho chi nhánh.

#### Chức Năng cho Quản Lý Kho Chứa

- Quản lý tài khoản cho nhân viên tại kho chứa.
- Theo dõi thông tin về hàng hóa đến và đi từ kho chứa.

#### Chức Năng cho Nhân Viên tại Kho Chứa

- Xác nhận việc nhận hàng từ các chi nhánh để xử lý.
- Tạo đơn hàng chuyển hàng đến kho chứa đích, ứng với chi nhánh của người nhận.
- Xác nhận việc nhận hàng từ các kho chứa khác.
- Tạo đơn hàng chuyển hàng đến chi nhánh của người nhận.

#### Chức Năng cho Khách Hàng

- Tra cứu trạng thái và tiến trình giao nhận của kiện hàng đã gửi.
