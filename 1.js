/*Làm quen với toán tử
Giới thiệu về toán tử trong JS
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison 
    4. Toán tử logic - Logical
    5. Toán tử chuỗi - String operator
*/


/* toán tử số học
+ | - | * | / | ** lũy thừa | % chia lấy số dư | ++ tăng 1 giá trị số | -- giảm 1 giá trị số |
*/
var sohoc = 4 + 9;
console.log(`sohoc = ${sohoc}`); 

var x = 9; 
var y = 2;
var chialaysodu = x % y;
console.log(`${x} chia cho ${y} có số dư là ${chialaysodu}`);

// tăng/giảm 1 giá trị số, dùng như một hậu tố (Postfix)
console.log('hậu tố ++')
var z = 5;
z++;
console.log(`z = ${z}`); 

// theo cách làm khác
let age = 1;

console.log(age++); //1
console.log(age);   //2

console.log(age++); //2
console.log(age);   //3

console.log(age++); //3
console.log(age++); //4

// tăng/giảm 1 giá trị số, sử dụng là tiền tố (Prefix)
console.log('tiền tố ++')
var z2 = 5;
++z2;
console.log(`z2 = ${z2}`);

let age2 = 1;

console.log(++age2);    //2
console.log(age2);      //2

console.log(++age2);    //3
console.log(age2);      //3

console.log(++age2);    //4
console.log(++age2);    //5

/**
x++ : tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
var x = 5;
console.log(x++) = {
    bước 1: copy giá trị hiện tại của x (=5)
    bước 2: thực hiện hoạt động x + 1
    bước 3: trả về giá trị x đã copy (=5)
}
console.log(x) = {
    copy giá trị hiện tại của x (x đã được +1 = 6)
    trả về giá trị hiện tại của x (=6)
}

------------------------------------------------------------
++x : tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
var x = 5;
console.log(++x) = {
    bước 1: thực hiện +1 cho x (1+x=6)
    bước 2: copy giá trị hiện tại của x (=6)
    bước 3: trả về giá trị x đã copy (=6)
}
console.log(x) = {
    copy giá trị hiện tại của x (=6)
    trả về giá trị hiện tại của x (=6)
}
*/

let number = 9;
let answer = --number * number++;
console.log('answer = ', answer);


// toán tử so sánh
var toantu = toantusosanh;
var toantusosanh = 3;
if (toantusosanh > 2) {
    console.log('so sanh dung')
};
/**
Toán tử so sánh: trả về boolean (true/false)
    ==      -> bằng
    !=      -> không bằng
    >       -> lớn hơn
    <       -> nhỏ hơn
    >=      -> lớn hơn hoặc bằng
    <=      -> nhỏ hơn hoặc bằng
 */

let so1 = 3;
let so2 = 5;

console.log('Toán tử so sánh')

if (so1 == so2) {
    console.log('Phép tính đúng')
} else {
    console.log('Phép tính sai')
}

// toán tử logic
let a = 1;
let b = 2; 

if (a > 0 && b > 0) {
    console.log('cả a và b đều lớn hơn 0')
};

/** Toán tử gán
Toán tử         Ví dụ           Tương đương
=               x = y           x = y
+=              x += y          x = x + y
-=              x -= y          x = x - y
*=              x *= y          x = x * y
/=              x /= y          x = x / y
**=             x **= y         x = x ** y
%=              x %= y          x = x % y

 */
var toantugan = 1;
toantugan += 2;
console.log(`toantugan = ${toantugan}`);

// Toán tử chuỗi - String operator

var firstName = 'Khuong';
var lastName = 'Kiet';

var ten = 'Kiet';
ten = 'Khuong ' + ten;

console.log(firstName + ' ' + lastName);
console.log(ten); 