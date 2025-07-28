const numbers = [1, 2, 3];
// 1.1 In lần lượt từng phần tử của numbers. 
numbers.forEach(value => {
    console.log(value);
});

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers 
console.log(`--------------------`)
let sum = 0;
numbers.forEach(value => {
    sum += value;
});
console.log(`Tổng các số ${sum}`);

console.log(`--------------------`)

let min = numbers[0];
let max = numbers[0];

numbers.forEach(value => {
    if (value <= min) {
        min = value;
    } else {
        max = value;
    }
});
console.log(`Giá trị nhỏ nhất ${min}`);
console.log(`Giá trị lớn nhất ${max}`);

// //1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi 
const newArr = [];
numbers.forEach(value => {
    let newValue = value * 2;
    newArr.push(newValue);
});
console.log(newArr);