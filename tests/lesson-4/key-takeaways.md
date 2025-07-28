# Java script
### Phạm vi của biến
1. let: Không thể truy cập trước khi được khai báo
2. var: có thể truy cập vào biến trước khi được khai báo 
> dùng let để tránh các lỗi khó phát hiện về phạm vi của biễn và hoisting
## Điều kiện nâng cao: if ...else, if..elseif, switch...case
1. Cú pháp của if...else<br>
if (condition) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; run code when condition = true<br>
} else {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; run code when condition = false<br>
}

2. Cú pháp của if...else if<br>
if (condition 1) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; run code when condition = true<br>
} else if {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; run code when condition2 = true<br>
} else {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; run code when all condition = false<br>
}

3. Cú pháp switch...case <br>
switch (bieu_thuc) { <br>
     &nbsp;&nbsp;&nbsp;&nbsp; case value_1: <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  //run code <br>
    &nbsp;&nbsp;&nbsp;&nbsp; break;<br>
     &nbsp;&nbsp;&nbsp;&nbsp; case value_2: <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  //run code <br>
     &nbsp;&nbsp;&nbsp;&nbsp; break;<br>
     &nbsp;&nbsp;&nbsp;&nbsp; case value_3: <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  //run code <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; break;<br>
     &nbsp;&nbsp;&nbsp;&nbsp; default: <br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  //run code <br>
} <br>
## So sánh
- == và != : so sánh kiểu "lỏng lẻo" ( chỉ kiểm tra giá trị)
- === và !== : so sánh kiểu tuyệt đối ( kiểm tra cả giá trị và data type)

Ex:
const result_1 = "5" == 5 >>> true <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const result_2 ="5" === 5 >>> false  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const result_3 = "5" != 5 >>> false <br>
## Vòng lặp nâng cao
### 1. for...in
> Chỉ in ra tên thuộc tính, không in ra tên giá trị

// let product = { <br>
&nbsp;&nbsp;&nbsp;    // Banana: 20, <br>
&nbsp;&nbsp;&nbsp;    // Apple: 30, <br>
&nbsp;&nbsp;&nbsp;    // Orange: 15 <br>
// } <br>
// Chỉ in ra Banana Apple Orange

// for(let property in product) {
//     console.log(property);
//     console.log(product[property]);
// }
// const arr = ["a", "b", "c"];<br>
// for (let i in arr) {<br>
//     console.log(i);<br>
//     console.log(arr[i]);<br>
// }

// console.log(product.property);
### 2. forEach
> Dùng cho array, khi muốn dùng cả phần tử và index
- Cú pháp <br>
arr.forEach((value, index) = > { <br>

&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;})<br>
### 3. for...of
> Dùng cho array, nếu chỉ cầm dùng đến phần tử

// const arr = ["a", "b", "c"];<br>
// for (let value of arr) {<br>
&nbsp;&nbsp;&nbsp;//     console.log(value);<br>
// }
### Sự khác nhau giữa break và continue
1. Continue: 
- Bỏ qua vòng lặp, chạy vòng lặp tiếp theo
- Nếu gặp continue thì bỏ qua đoạn code chạy phía dứoi, và chạy vong lặp tiếp theo
2. Break
- Gặp break thì sẽ thoát ra khỏi vòng lặp luôn không chạy những vòng lặp tiếp theo

## untils function
1. String utils function
- trim()
> Loại bỏ khoảng trắng đầu hoặc khoảng trắng cuối, không thay đổi chuỗi gốc mà trả về chuỗi mới
 <br>

// let str =  "Trang"<br>
// str = str.trim()<br>
// console.log(str) > > str="Trang"<br>

- toLowerCase()
> convert tất cả kí tự sang chữ thường
- toUpperCasse()
> convert tất cả kí tự sang chữ in hoa
- includes()
> Kiểm tra chuỗi có chứa subString nào không, trả về giá trị boolean
- replace()
> Dùng để thay thế <br>
// str = str.replace("Playwright", "Cypress");<br>
// console.log(str);
- split()
> Cắt chuỗi thành các chuỗi con<br>
// console.log(str.split(" ")); // [ 'K16', 'Playwright' ]
- substring()
> Trả về 1 phần của chuỗi bắt đầu từ index được chỉ định đến một vị trí index khác hoặc cuối chuỗi<br>
// let str = "Hello World!";<br>
// console.log(str.substring(0, 5));<br>
// console.log(str.substring(6));
- indexOf()
> Hàm trả về vị trí đầu tiên của cái chuỗi con trong cái chuỗi
- pop() 
> Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc <br>

// let arr = [1, 2, 3]; <br>
// let last = arr.pop(); // arr = [1, 2], last = 3 <br>
// console.log(arr); // [1, 2] <br>
// console.log(last); // 3 

-  unshift() 
> Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc. 

// let arr = [1, 2, 3]; <br>
// arr.unshift(0); // arr = [0, 1, 2, 3] <br>
// console.log(arr); // [0, 1, 2, 3]<br>

2. Array utils function
- map
> Tạo mảng mới, bằng cách áp dụng hàm lên từng phần tử của mảng gốc <br>

// let numbers = [1, 2, 3, 4, 5];<br>
// let newNumbers = numbers.map(num => num * 2);

// console.log(newNumbers);
- fliter
> Tạo mảng mới chỉ bao gồm phần tử thảo mãn các điều kiện trong hàm<br>

// let numbers = [1, 2, 3, 4, 5];<br>
// let newNumbers = numbers.filter(num => num % 2 === 0);<br>
// console.log(newNumbers);
- find
> Trả về phần tử đẩu tiên trong mảng mà thoả mãn điều kiện, nếu không có thì trả về undefine <br>

// let numbers = [1, 2, 3, 4, 5];<br>
// let firstEven = numbers.find(num => num % 2 === 0);<br>
// console.log(firstEven);
- reduce
> Áp dụng hàm lên từng phần tử từ trái qua phải để trả về giá trị duy nhất
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);
- some
> Kiểm tra có thấy phần tử trong mảng hay không
// let numbers = [1, 3, 3, 3, 5];<br>
// let hasEven = numbers.some(num => num % 2 === 0);<br>
// console.log(hasEven);
- every
> Giống some nhưng nó kiểm trả tất cả phần tử, nếu tất cả đều thảo mãn điều kiện thì mới trả vềv true<br>
// let numbers = [2, 2, 2, 4, 6];<br>
// let hasEven = numbers.every(num => num % 2 === 0);<br>
// console.log(hasEven);
- push
> Thêm 1 hoặc nhiều phần tử vào cuối mảng <br>
// let numbers = [2, 2, 2, 4, 6];<br>
// numbers.push(7, 8);<br>
// console.log(numbers);
- shift
> Loại bỏ phần tử ddauaf tiên của mảng và trả về phần tử đó <br>
// let numbers = [2, 2, 2, 4, 6];
// let firstNumber = numbers.shift();
// console.log(firstNumber);
// console.log(numbers);
- sort
> Sắp xếp các phần tử theo thứ tự mà hàm cung cấp( có thể là tăng dần hoặc giảm dần)
<br>

Mac dinh: a la so dung truoc, b la dung sau
Tang dan dung: sort((a, b) => a - b)
- a - b = negative => a < b -> a dung truoc b
- a - b = positive => a > b -> b dung truoc a

Giam dan dung: sort((a, b) => b - a)
- b - a = negative => b < a -> a dung truoc b
- b - a = positive => b > a -> b dung truoc a
*/




