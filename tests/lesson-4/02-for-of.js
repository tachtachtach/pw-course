// 2.1 In lần lượt từng ký tự của str 
const str = "Playwright";
for (let value of str) {
    console.log(value);
}
// 2.2 Tạo mảng đảo ngược từ str 
console.log(`----------------------`)
const newStr = [];
for (const value of str) {
    newStr.unshift(value);
}
console.log(newStr);
console.log(`----------------------`)
// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 
first = str[0];
end = str[str.length - 1];
console.log(`Gia tri dau tien ${first}`);
console.log(`Gia tri cuoi cung ${end}`);
// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr 
console.log(`----------------------`)
const dupArr = [1, 2, 3, 1, 2, 4, 5];
const newArr = [];
for (const value of dupArr) {
    if (dupArr.indexOf(value) === dupArr.lastIndexOf(value)) {//vị trí đầu tiên bằng vị trí cuối cùng trong chuỗi 
        newArr.push(value);
    }
}
console.log(newArr)