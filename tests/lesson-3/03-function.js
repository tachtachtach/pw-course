/* 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. 
Gọi hàm với 2 cặp giá trị khác nhau.
*/
console.log(`-----------------------------Bai 1`);
function multiply(a, b) {
    mul = a * b;
    console.log(mul);
    return mul;

}
multiply(3, 8);
multiply(7, 12);

/*
2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. 
Gọi hàm và in kết quả với 2 bộ số khác nhau. 
*/
console.log(`----------------------------- Bài 2`);
function findMin(a, b, c) {
    let min = a;
    if (a >= b && a >= c) {
        if (b >= c) {
            min = c;
        } else {
            min = b;
        }
    }
    else if (a > b && a < c) {
        min = b;
    } else if (a < b && a > c)
        min = b;
    console.log(`So nho nhat: ${min}`);
}
findMin(2, 7, 21);
findMin(3, 9, 3);

/*
3. Viết hàm getTopStudents nhận 2 tham số: 
● students: mảng các object, mỗi object chứa name (tên) và score (điểm). 
● threshold: ngưỡng điểm để được coi là "top" (số). 
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
 Gọi hàm với danh sách thực tế và in kết quả. 
*/
console.log(`----------------------------- Bài 3`);
let students = [
    { name: "An", score: 5 },
    { name: "Binh", score: 8 },
    { name: "Chau", score: 9 },
    { name: "Dao", score: 7 },
    { name: "Huong", score: 3 },
    { name: "Giang", score: 7.5 }
];
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    console.log(topStudents);
    return topStudents;
}
console.log(`Danh danh hoc sinh pass:`);
getTopStudents(students, 7);

/*
4. Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổ ng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100.
Gọi hàm với ví dụ thực tế và in kết quả.
*/
console.log(`----------------------------- Bài 4`);
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    console.log(`Total: ${total}`);
    return total;
}
calculateInterest(32, 10, 3);