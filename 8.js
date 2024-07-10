console.log('NUMBER - KIỂU DỮ LIỆU SỐ')

/**
    Làm việc với Number
    1. Tạo? Cách tạo? Kiểm tra datatype
    2. Làm việc với Number? To string? To Fixed
 */

var million = 1e6; //same as var million = 1000000
console.log(million);

let otherNumber = new Number(9); // không nên dùng vì rườm rà, và dữ liệu tạo ra lại không phải Number mà là Object.
console.log(typeof otherNumber);

/** Làm việc với NUMBER
Number.isFinite()               Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger()              Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat()             Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt()	            Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed()	    Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString()	    Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 */

Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18


// Lấy số gồm cả giá trị thập phân.
var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

// Typeof: Number to string
(11).toString();    // '11'
(18).toString();    // '18'
(17.3).toString();  // '17.3'
console.log(28.9);
console.log((28.9).toString());

//NaN: Phép tính sai? Không phải số? Kiểm tra NaN. Not a Number
let a = 9;
let X = a / 'hehe'; 
console.log(X);         //NaN: không phải số vì phép tính sai.
console.log(typeof X);  //datatype vẫn là Number
if (typeof X == 'number') {
    console.log('1');
} else {
    console.log('2');
}
console.log(X == NaN);
console.log(isNaN(X));

// Thử tạo hàm kiểm tra nhập liệu có phải là số không?
let isNumber = (value) =>{
    return typeof value === 'number';
}

console.log('nhap vao la so? ', isNumber(999)); // true
console.log('nhap vao la so? ', isNumber('abc')); // false
console.log('nhap vao la so? ', isNumber('100')); // false


// VD2
function isNumber(value) {
    if (isNaN(value)) {
        return false;
    }   return typeof value === 'number';
}

console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false