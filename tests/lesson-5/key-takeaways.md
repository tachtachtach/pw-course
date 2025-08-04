##	Lambda function
- Sử dụng dấu **=>** thay vì từ khoá **function**
- Cú pháp : 
```
(paramester) =>{
	//Code here
}
```
Example 1:
```
const add = (a, b) => {
    return a + b;
}

console.log(add(2,2));
```

Example 2: 
```const greet = () => {
    console.log("K16 Playwright");
}

greet();
```
## Anonymous function
- Hàm không có tên
- Thường được dùng 1 lần hoăacj làm đối số truyền vào các hàm khác
- Cú pháp:
```
function (paramester) {
	// code here
}
```

Example:
``` 
let greet = function () {
    console.log (“Hello”)
}
greet() ;
```
## DOM ( Document Object Model) 
- Giống như cấu trúc của 1 case HTML để mô hình hoá 1 trang web 
- 	Dùng để truy xuất , thao tác trên document (html,xml)<br>
	•	Thẻ mở ```<ten_the>```<br>
	•	Thẻ đóng ```</tenthe>```<br>
	•	Thẻ tự đóng: k cần thẻ đóng, thường dung cho những phần tử không có nội dung hay chứa thẻ khác<br>
	•	Text: nội dung văn bản nằm giữa thẻ mở và thẻ đóng<br>
	•	Thuộc tính: có thể có giá trị hoặc không<br>
![Diagram](tests/lesson-5/test-data/DOM.png)

### Các thẻ HTML thường gặp
- Thẻ ```<div>``` (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ ```<h1></h1>``` đến ```<h6></h6>``` (viết tắt của heading): dùng để tạo ra các header phân cấp
theo thứ tự từ lớn đến bé.
- Thẻ ```<form></form>```: dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
- thead = table heading
- tr = table row = 1 dòng
- th: table heading: text in đậm
- tbody
- tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
## Selector
- Là cách chọn phần tử trên trang
- Các kiểu:<br>
    1. XPath selector
	2. CSS Selector
	3. Playwright selector
### XPath selector ( XPath = XML Path)
1.  Xpath tuyệt đối (absolute)
Bắt đầu bằng 1 /
2. XPath tương đối (relative)
Bắt đầu bằng 2 //<br>
**//tenthe[@thuoctinh = “giatri”]**
 Nên dùng tương đối
- Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text > Dùng **contains** <br>
//div[contains(text(), ‘nhap doạn text ’)] 
- Để hover vào phần tử, ta dùng hàm hover: 
await page.locator("<xpath here>").hover(); 




## Playwright basic syntax
### 1. Test
- Đơn vị cơ bản để khai báo 1 test
```
import { test } from ‘@playwright/tests’;
test (‘<ten bien>’ , async ( { page }) => {
 // code here
})
```
### 2. Step
- Là đơn vị nhở hơn test, để khai báo từng step của test case
```
await test.step('Tên step', async () => {
// Code here

});
```
- *Note: Test nên được map -1-1 với step trong manual test case*

### Playwright basic syntax

1. Basic action
- Navigate: ddeer access vào tang web nào đó
```
    await page.goto("link");
```
2. Click
- single click
```
await page.locator("//button").click();
```
 Nếu muốn dùng single click để click nhiều lần thì có thể dùng clickCount
 ```
  await page.locator("xpath").click({
            clickCount: 10 // số lần click
        });
 ```
- Double click
```
await page.locator("//button").dblclick();
```
- Click chuột phải
```
page.locator("//button").click({
    button: 'right'
})
```
- Click  chuột kèm bấm phím khác
```
page.locator("").click({
    modifiers: ['Shift'], // chọn phím cần kết hợp
})
```
3. Input
- Fill
Giống việc bạn paste content vào một ô input
```
page.locator("//input").fill('Playwright Viet Nam');
```
- pressSequentially
Giống việc bạn gõ từng chữ cái vào ô input
```
page.locator("//input").pressSequentially('Playwright
Viet Nam', {
delay: 100,
});
```
4. Radio/Checkbox
- Lấy giá trị hiện tại đang là check hay không, nếu checked thì trả về true, nếu uncheck thì trả về false
```
const isChecked = page.locator("//input").isChecked();
```
- Check/ uncheck
```
page.locator("//input").check();
page.locator("//input").setChecked(false); //uncheck
```
5. Select option
```
await page.locator("xpath").selectOption("selected option");
```
6. Set input file
```
await page.locator("xpath").setInputFiles("Relative path");
```
7. Cách handle dialog
```
page.on('dialog', async (dialog) => {
  console.log(dialog.message());   // In ra nội dung dialog
  await dialog.accept();           // Chấp nhận dialog
  // await dialog.dismiss();       // Hoặc từ chối (nếu cần)
});
```
- Đặt page.on('dialog', ...) trước khi click — nếu đặt sau thì dialog có thể xuất hiện trước, dẫn tới lỗi Unhandled dialog.
- Nếu bạn chỉ muốn xử lý một dialog duy nhất, có thể dùng page.once('dialog', ...) thay vì page.on.
