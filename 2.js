/* Dữ liệu kiểu Boolean
    Boolean là kiểu dữ liệu {yes/no} ; {on/off} ; {true/false}
    Và trong JS, Boolean chỉ nhận và trả về {true/false}

*/

// alert('boolean và logical');

let a = 10;
let b = 20;
let c = (a > b);
console.log(`boolean a > b = ${c}`);

console.log('boolean a < b = ',a < b);

console.log(a==b);

let d = true;
console.log(d);

// Câu lệnh điều kiện if - else
let so1 = 3;
let so2 = 5;

console.log('Toán tử so sánh')

if (so1 == so2) {
    console.log('Phép tính đúng')
} else {
    console.log('Phép tính sai')
}

// VD 2
let fullName = `0`;
if (fullName) {
    console.log('Name: Phép tính đúng')
} else {
    console.log('Name: Phép tính sai')
} // Mọi biến có gán giá trị đều nhận trả về TRUE

/**
    Các kiểu dữ liệu nhận giá trị FALSE trong JS
    1. Giá trị 0
    2. Giá trị false
    3. Giá trị là chuỗi rỗng '' - ""
    4. Giá trị undefined
    5. Giá trị NaN - Not a Number
    6. Giá trị null - vô hiệu, vô giá trị

// Truthy và Falsy
    - Những giá trị chuyển đổi Boolean trả về TRUE thì gọi là Truthy.
    - Những giá trị chuyển đổi Boolean trả về FALSE thì gọi là Falsy
    Ngoài những giá trị trên thì mọi giá trị khác đều là giá trị trả về True
    Kể cả: 
        - '0'
        - ' ' : chuỗi có chứa khoảng trắng
        - 'false'
        - [] : array rỗng
        - {} : object rỗng
        - function() {} : hàm trống
 */

// Chuyển đổi mọi kiểu dữ liệu khác sang BOOLEAN
// Cách 1:
console.log('boolean convert 1', Boolean(1));
console.log('boolean convert 2', Boolean('Khuong Anh Kiet'));
// Cách 2:
console.log('boolean convert 3', !!'hehehe');
console.log('boolean convert 4', !!'');


/*  Logical
    3 kiểu toán tử Logic:
    1. && - And : chỉ cần 1 
    2. || - Or
    3. ! - Not (phủ định giá trị đứng sau nó)
*/
let x = 5;
let y = 7;
let z = 12;
if (x > 0 && y > 0 && z > 0) {
    console.log('Phép tính 1 logic đúng');
} else {
    console.log('Phép tính 1 logic sai');
};

if (x > 0 || y < 0 || z == 11) {
    console.log('Phép tính 2 logic đúng');
} else {
    console.log('Phép tính 2 logic sai');
};

console.log('Phần tử Not !')
console.log(!true);
console.log(!false);
console.log(!1); // 1 nhận boolean là true.



