# Version Control system(VCS)
- Local: Lưu ở máy cá nhân
- Centralize: Lưu ở máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau

# Git

| Git | GitHub | 
|:---|:---|
| Là phần mềm | Là dịch vụ web | 
| Được cài trên máy | Host trên website | 
| Là 1 commandline tool| Là công cụ có giao diện | 
| Là công cụ quản lí phiên bản, đưa fiel vào Git repository | Là nơi để upload Git repository | 
| Có tính năng của VCS | Có các tính năng của VCS và 1 số tính năng khác | 

## Git - three states
| Wrorking Directory | Staging Area | Reposotory |
|---|---|---|
| Các file mới or file có thay đổi | Các file đưa vào vùng chuẩn bị commit | Các commit (phiên bản) |
Dùng lệnh **'Git init'** để đưa file vào | **Git add 'filename'** với file cụ thể và **'Git add .'** nếu muốn add tất cár các file | 
**Git commit -m'message'**|

## Git - key takeaways
1. Git init: khởi tạo thư mục được quản lí bởi Git
2. Git config user.name "input name"<br>  Git config user.email "input email"<br>
--> Cấu hình user name và email cho 1 repository
3. Git config **--global** user.name "input name"<br>  Git config  **--global** user.email "input email"<br>
--> Cấu hình uesr name và email cho toàn bộ máy tính

Xem trạng thái file: **git status**
-  File màu xanh: vùng staging
-  File màu đỏ: vùng working
directory

Kiểm tra lịch sử commit: **git log**

## Git - commit convention
*type: short desription*
1. Type: 
- chore: sửa lỏ nhẻ, chính tả, xoá file k dùng tới
- feat: thêm function mới, test case mới
- fix: sửa lỗi 1 test trước đó
2. Short description: mô tả ngắn gọn 

## Git - simple workflow

1. Không dùng global <br>
init --> config --> add --> commit -->push
2. Dùng global<br>
inti -------------> add --> commit --> push

# Javascript basic
### Variable: biến lưu trữ giá trị , có thể thay đổi
### Constant: Hằng số, không thể thay đổi

| var | let | constant |
|---|---|---|
| var <variable_name> = <_value_> | let <variable_name> = <_value_> | const <variable_name> = <_value_>  |
| Có thể khai báo lại | Không thể khai báo lại | Khai báo các giá trị không thể thay đổi |
| Có phạm vi toàn cục | Có phạm vi trong cặp ngoặc {} | Không gán laị |

> Nên dùng let vì dễ kiểm soát phạm vi của biến

### Data Type
Có 8 loại kiểu dữ liệu: String, Number,
Bigint, Boolean, Undefined, Null,
Symbol, Object.
- String: dùng để khai báo một
chuỗi

- Number: dùng để khai báo một số.
- Boolean: dùng để khai báo một
giá trị kiểu đúng sai (true hoặc false)

### Comparison operator = toán tử so sánh.
- Dùng để so sánh giá trị giữa 2 biến với
nhau. Kết quả sẽ trả về Boolean (true
hoặc false).
- Các toán tử so sánh:
1. So sánh hơn kém: >, <
2. So sánh bằng: ==, ===,!=, !==, >=, <=

### Unary operator = toán tử một ngôi.
- Dùng để tăng hoặc giảm giá
trị
- i++ bằng với i=i+1
- i-- bằng với i=i-1

### Arithmetic operator = toán tử
số học.
- Dùng tính toán giá trị biểu
thức
- Các phép toán: +, -, *, /

### Conditional = điều kiện, dùng để kiểm tra
có nên thực hiện một đoạn logic không.
- Cú pháp: if (<điều kiện>) { // code }. Nếu
điều kiện đúng, sẽ chạy đoạn code

### Loops = vòng lặp
- Dùng để thực hiện một đoạn logic một
số lần nhất định
- Cú pháp: for(<khởi tạo>; <điều
kiện dừng>; <điều kiện tăng>) {
// code }