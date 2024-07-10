//khai báo biến
var dog = 'cho la meo'; // var không có block scope 
let shiba = 'chó shiba'; // let nhận giá trị có thể thay đổi, có block scope 
const husky = 'chó husky'; // const nhận giá trị cố định.
// day la cach goi ham thong bao


alert(dog);
/**
 * JS Comment
 * Có 2 loại comment trong JS là inline và block.
 * Inline chỉ gần gõ //. Mọi kí tự cùng dòng sau // sẽ là cmt
 * Block giúp gõ cmt trên nhiều dòng, với cú pháp mở và đóng.
 */

/*

Giới thiệu về một số hàm built-in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval

 */

console.log('day la 1 dong log');
var fullName = 'Khuong Anh Kiet';
console.log(fullName);
// hàm console.log giúp in ra và kiểm tra các biến và sự thay đổi của biến.

let x = confirm('Xac nhan ban du tuoi de xem');
console.log(x);

let x1 = Number.parseInt(prompt('Ban bao nhieu tuoi?'));
console.log(x1);
console.log(typeof x1);

//setTimeout: thực hiện 1 function sau 1 khoảng thời gian nhất định. Cú pháp = setTimeout("functuon-cần-thực hiện", "giá trị thời gian trễ")
setTimeout(function() {
    alert('setTimeout nay hien sau 2s')
} ,2000);

//setInterval: lặp 1 function sau 1 khoảng thời gian nhất định. Cú pháp = setInterval("functuon-cần-thực hiện", "giá trị thời gian lặp")
let infinityX = setInterval(function() {
    console.log('hehe' + Math.random())
}, 5000);

//clearInterval hay clearTimeout dùng để kết thúc hai hành động trên. 
setTimeout(function() {
    clearInterval(infinityX) // dừng dòng lặp
}, 16000)