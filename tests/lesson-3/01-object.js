/*
1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. 
Sau đó in ra năm sản xuất của xe. 
*/
console.log(`---------------------`)
let car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021"
}
console.log(`Year: ${car.year}`);
/*
2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). 
In ra tên đường của người này. 
*/
console.log(`---------------------`)
let person = {
    name: "",
    address: {
        stress: "",
        city: "",
        country: ""
    }
}
console.log(`Stress: ${person.address.stress}`);

/*
3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. 
Trong đó grades là một object với 2 thuộc tính kiểu number: math và english 
*/
console.log(`---------------------`)
let student = {
    name: "",
    grades: {
        math: 10,
        english: 9
    }
}
console.log(`Math: ${student["grades"]["math"]}`);

/*
4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. 
Thay đổi volume và in ra object mới.
*/
console.log(`---------------------`)
let settings = {
    volume: "high",
    brightness: "yellow"
}
console.log(settings.volume);
// Change volume
settings.volume = "low";
console.log(settings.volume);

/*
5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
*/
console.log(`---------------------`)
let bike = {

}
bike.color = "yellow"
console.log(bike.color)

/*
6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này 
*/
console.log(`---------------------`)
let employeee = {
    name: "2",
    age: 25
}
console.log(employeee.age)
delete employeee.age

/*
7. Một trường học có các lớp học và học sinh như sau: 
○ classA: An, Bình, Châu 
○ classB: Đào, Hương, Giang 
Hãy viết code để đáp ứng yêu cầu sau: 
- Khai báo tên biến: school 
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh 
*/
console.log(`---------------------`)
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"],
}

