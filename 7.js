// LÀM VIỆC VỚI CHUỖI - String methods
console.log('Lam viec voi chuoi');


/**
    1. Length
    2. Find index
    3. Cut string
    4. Replace
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9. Get a character by index

 */

let myString = 'Hoc Javascript co ban JS Ja JS Ja Ja JS UwU'

// 1. Length
console.log(myString.length);

// 2. Find index - index start at 0 and return the first charc
console.log('Find index ', myString.indexOf('Ja'));
console.log('Find index ', myString.indexOf('Ja', 6)); // giá trị bắt đầu tìm kiếm
console.log('Find index ', myString.lastIndexOf('Ja'));

console.log('Find search ', myString.search('Ja')); // không hỗ trợ đặt giá trị bắt đầu, hỗ trợ tìm biểu thức chính quy.

let myString1 = 'Hoc Javascript co ban JS Ja JS Ja Ja JS UwU'
// 3. Cut string
console.log('Cut string: ', myString1.slice(4, 6));
console.log('Cut string: ', myString1.slice(4));
console.log('Cut string: ', myString1.slice(0));
console.log('Cut string: ', myString1.slice(-10));
console.log('Cut string: ', myString1.slice(-10, -2));

let myString2 = 'Hoc Javascript co ban JS Ja JS Ja Ja JS UwU'
// 4. Replace
console.log('Replace: ', myString2.replace('JS', 'JavaS'));
console.log('Replace: ', myString2.replace(/JS/g, 'JavaSct')); // Biểu thức chính quy

// 5.6. Convert to - Upper/Lower Case
console.log('Convert to Upper-Lower: ', myString2.toLowerCase());

// 7. Trim
let myTrim = '  hehe Hoc JS      co ban '
console.log('myTrim length: ', myTrim.length);
console.log('Trim: ', myTrim.trim());
console.log('after Trim: ', myTrim.trim().length);

// 8. Split
let langSplit = 'Java, PHP, Ruby'
console.log('Split: ', langSplit.split(', ')); // output array type
console.log('Split: ', langSplit.split(','));
console.log('Split: ', langSplit.split(''));

// 9. Get a character by index
const myString9 = 'Khuong Anh Kiet';
console.log('Get by index: ', myString9.charAt(9));
console.log('Get by index: ', myString9.charAt(10));
console.log('Get by index: ', typeof myString9.charAt(10));

console.log('Get by index: ', myString9[9]);
console.log('Get by index: ', myString9[10]);
console.log('Get by index: ', typeof myString9[10]);