// 1. Khởi động Tàu Vũ trụ K16 
console.log(`--------Bài 1----------`);

let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K16";
let crew = [
    "Mai Hoàng", "Diệu Hiền", "Bạch Mai", "Hồng Long", "Tuấn Anh",
    "Hoài An", "Thu Trang", "Thuỳ Linh", "Yến Khoa", "Minh Trang", "Ngọc Huyền",
    "Hồng Phi", "Ngọc Tiên", "Anh Tú", "Quỳnh Như", "Việt Anh", "Thiên Trang",
    "Huy Nguyễn", "Ngọc Sơn", "Kim Xuyến", "Lưu Bình", "Mai Hân"
];

function launchShip(crew) {
    let danhSach = crew.join(", ");
    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${danhSach} sẽ đồng hành cùng bạn trong chuyến phiêu lưu "${mission}"!`);
    return danhSach;

}
const thongDiep = launchShip(crew);
console.log(thongDiep);

// 2. Du hành đến hành tinh bí ẩn 
console.log(`--------Bài 2----------`);

function calculateDistance(speed, time) {
    let result = speed * time;
    console.log(result);
    return result;
}
calculateDistance(1000, 24);

// 3. Hành tinh kỳ lạ 
console.log(`--------Bài 3----------`);

function convertTimeToHex(time) {
    let returnTime = time.toString(16);
    console.log(returnTime);
}
convertTimeToHex(120);

//4. Khám phá kho báu
console.log(`--------Bài 4----------`);
// let newCode = "";
// function decryptCode(code) {
//     for (let i in code) {
//         if (i >= 'a' && i <= 'z') {
//             newCode = i.toUpperCase();
//         } else if(i >= 'A' && i <= 'Z') {
//             newCode = i.toLowerCase();
//         }else{
//}
//     }
//     return newCode;
// }
// decryptCode("K16 Challenge");
//5. Trở về Trái Đất 
console.log(`--------Bài 5----------`);

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();
