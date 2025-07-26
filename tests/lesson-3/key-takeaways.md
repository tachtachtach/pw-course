# Git 
## Undo actions 
###  Thay đổi commit message(**git commit --amend**)
- Gõ i -> vào chế độ insert 
- Gõ esc để thoát insert 
- Gõ “:wq” -> write and quit 
>  git commit --amend -m”message”: để thay đổi commit message luôn mà không cần thao tác vào hộp thoại insert
### Thay đổi commit message.
 Đưa từ vùng staging về working directory:  
> **git restore --staged <file>**
### Đưa từ vùng repository về working directory(uncommit)
> **git reset HEAD~1** (undo 1 commit)
### Bỏ qua các file không cần git theo dõi. 
> **.gitignore file**
## Branching model
*Tips:
Luôn tạo branch mới trước khi thực hiện một
lệnh copy từ internet*

### Branch = nhánh 
- git branch <ten_branch>: tạo nhánh mới<br>
- git checkout <ten_branch>: check out sang nhánh khác (nhánh đã được tạo)<br>
- git checkout -b: check out sang nhánh mới ( nhánh đựo tạo luôn trong câu lệnh) <ten_branch>



# Javascript basic 
## Convention

| Conventions | Mục đích sử dụng | 
|:---|:---|
| snake_case_now_now | N/A | 
| kebab-case-now-now| Tên file |
| camelCaseNowNow | Tên biến | 
| PascalCaseNowNow | Tên class |  

### Logical operator 
- && : cả 2 vế của mệnh đề đều
đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của
mệnh đề
### Object  
- Khai báo: **let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}**<br>
- Trong đó:<br>
 <thuoc_tinh>: giống quy tắc đặt tên biến <br>
 <gia_tri>: có kiểu giống biến, hoặc
là 1 object khác.
- Sử dụng: Để lấy ra giá trị thì gọi **tên object.<thuoc_tinh>** để lấy ra giá trị tương ứng của thuộc tính đấy
- Gán lại: **tên object.<thuoc_tinh> = <gia_tri>**
### Array: Mảng
1. Tạo mảng<br>
- Khai báo<br>
**let/const <ten_Mang> =[gia_tri_1,gia_tri_2, gia_tri_3, ... ]**
*Note:Trong 1 mảng có thể chưa nhiều kiểu dữ liệu ( string, numner, boolean, ...)*
2. Truy xuất mảng<br>
- Độ dài mảng: length<br>
- Lấy phần tử theo index:[0], [1], [2]

### Function
- Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
-  Khai báo:
**function <nameFunction>() {
// code
}**
-  Parameter
-  Return value: **return <_value_>**