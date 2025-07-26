// 1. Tính tổng từ 1 đến 100. 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}
console.log(sum)

//2. In bảng cửu chương từ 2 đến 9. 
console.log(`---------------------`)
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}: `);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ` + (i * j));
    }
}

//3. Tạo một mảng chứa các số lẻ từ 1 đến 99. 
console.log(`---------------------`)
let numberArr = [1];
for (let i = 3; i <= 99; i++) {
    if (i % 2 === 1) {
        numberArr.push(i);
    }
}
console.log(numberArr)

//4. In ra 10 email dựa trên tên người dùng và số thứ tự 
console.log(`---------------------`)
let emailName = "user";
let postEmail = "example.com";
console.log(`List 10 emails: `)
for (let i = 1; i <= 10; i++) {
    console.log(emailName + i + postEmail)
}

/* 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100} 
*/
console.log(`---------------------`)
let revenuesArr = [
    { month: 1, total: 500 },
    { month: 2, total: 100 },
    { month: 3, total: 780 },
    { month: 4, total: 310 },
    { month: 5, total: 120 },
    { month: 6, total: 630 },
    { month: 7, total: 100 },
    { month: 8, total: 200 },
    { month: 9, total: 480 },
    { month: 10, total: 270 },
    { month: 11, total: 730 },
    { month: 12, total: 100 }
];
let totalRevenue = 0;
for (let i = 0; i < revenuesArr.length; i++) {
    totalRevenue = totalRevenue + revenuesArr[i].total;
}
console.log(totalRevenue);