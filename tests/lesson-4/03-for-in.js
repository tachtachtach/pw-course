const student = { "name": "Alex", "age": 10, "salary": 20 };
// 3.1 In tên và giá trị mỗi thuộc tính của student 
for (let value in student) {
    console.log(`${value} : ${student[value]}`);
}
// 3.2 Tính tổng các giá trị số trong student 
console.log(`----------------------`);

// 3.3 Tạo mảng chứa tên các thuộc tính của student 
console.log(`----------------------`);
let newArr = [];
for (let value in student) {
    newArr.push(value);
}
console.log(newArr);