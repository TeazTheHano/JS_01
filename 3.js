/**
    Kiểu dữ liệu trong Js

    1. Dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
    // KHÔNG GÁN LẠI ĐƯỢC, KHI CẦN SẼ TẠO RA VÙNG NHỚ MỚI 
    
    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object
            + Array
            + Object
    // CHỨA PHƯƠNG THỨC VÀ THUỘC TÍNH, CÓ THỂ GÁN - GỌI LẠI.

    Toán tử so sánh Part 2
 */


// Number type:
let a = 4;
let b = 1.5;

// String type:
let fullName = 'Khuong Anh Kiet';
let quote = 'Den Vau noi: \'hehe\'';
let quote2 = `Den Vau cung da ${fullName}: 'heheh' `;
let quote3 = "Den Vau khong noi: 'hehehehehehe'";
let quote4 = 'Den Vau chan khong buon noi: "nahhhh"';

console.log(fullName);
console.log(quote);
console.log(quote2);
console.log(quote3);
console.log(quote4);

// Boolean type
let isBoolean = true;

// Undefined type
let age;
console.log(age);

// Null
let isNull = null; // trắng. It is the thing which is nothing.

// Symbol
let isID = Symbol('id'); // unique - Duy nhất
let isID2 = Symbol('id'); // unique - Duy nhất

console.log(isID); // Symbol(id)

console.log(isID == isID2); // false vì tính duy nhất của symbol. isID2 nhận giá trị false, rỗng.

// Function
let isFunction = function() {
    console.log('Hiiii this is function')
}

isFunction(); // Call to run.

// Object: dùng để khai báo một loạt các chuỗi giá trị gồm key và value.
let KhanhPhuong = {
    name: 'Khuong Anh Kiet', // gồm {key: value,}
    age: 18,
    address: 'Hanoi',
    isFunction: function () {
    },
    dasdfas: null,
};

console.log(KhanhPhuong.address);

console.log('myObject', myObject);

// Array: dùng để khai báo một chuỗi các giá trị. Vẫn có key và value nhưng với key ẩn, tự lên theo số thứ tự.
let myArray = [
    'Khuong Anh Kiet',
    '18',
    'Hanoi',
]

console.log( myArray);

// Kiểm tra kiểu dữ liệu với Typeof
console.log(typeof myArray);

// Toán tử so sánh Part 2

let ss1 = 1;
let ss2 = '1';
let ss3 = (ss1 === ss2); // === so sánh tuyệt đối giá trị và kiểu dữ liệu.
let ss4 = (ss1 !== ss2); // !== khác biệt tuyệt đối giá trị và kiểu dữ liệu.

console.log('Toan tu so sanh tuyet doi === co gia tri: ', ss3);
console.log('Toan tu so sanh tuyet doi !== co gia tri: ', ss4);

