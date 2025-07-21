//Khai báo chiều cao
const heigh = 152;
//Số lẻ của chiều cao(Mức cân tối đa)
const maxWeight = heigh - 100;
//Cân nặng lý tưởng
const expectWeight = maxWeight * 9 / 10;
//Mức cân tối thiểu
const minWeight = maxWeight * 8 / 10;
// In kết quả trên cùng 1 dòng
console.log("Cân nặng lý tưởng của bạn: " + expectWeight + ", " + "cân nặng tối đa: " + maxWeight + ", " + "cân nặng tối thiểu: " + minWeight)
