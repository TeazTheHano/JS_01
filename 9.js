/**
    MẢNG TRONG JS - ARRAY
    1. Tạo mảng
        - Cách tạo
        - Sử dụng cách nào?
        - Kiểm tra data type
    2. Truy suất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
    3. Làm việc với Array
        - toString
        - Join
        - Pop
        - Push
        - Shift
        - Unshift
        - Concat
        - Splicing
 */

let languages = [
    'JS',
    'PHP',
    'Ruby',
    'Dart',
    null,
    NaN,
    9999,
    function myFn() {
        console.log(typeof(9));
    },
    {},
];
console.log(languages);

// vẫn không ai muốn dùng cách thứ 2 cả :))
let languages2 = new Array(
    'JS',
    'PHP',
    'Ruby',
    'Dart',
    null,
    NaN,
    9999,
    function myFn() {
        console.log(typeof(9));
    },
    {},   
);
console.log(languages2);

// check Array type?
console.log(typeof(languages));
console.log(Array.isArray(languages)); // check Array.

// Truy suất mảng?
let myArray = [
    'JS',
    'PHP',
    'Ruby',
    'Dart',
];
console.log('63'+ myArray.length);
console.log(myArray[2]); // lấy index từ array theo số key

// LÀM VIỆC VỚI ARRAY
console.log('toString: ', myArray.toString());  // toString

console.log('Join: ', myArray.join(''));        // Join
console.log('Join: ', myArray.join('-'));
console.log('Join: ', myArray.join('~UwU~'));

console.log('Pop: ', myArray.pop());            // Pop: xóa phần tử cuối mảng và trả ra phần tử đó.
console.log(myArray);
console.log('Pop: ', myArray.pop());
console.log('Pop: ', myArray.pop());
console.log(myArray);

console.log('Push: ', myArray.push('Java', 'Hehe', 'Python'));  // Push: thêm index vào Array
console.log(myArray);  

console.log('Shift: ', myArray.shift());        // Shift: xóa index đầu tiên của mảng.
console.log(myArray);

console.log('unShift: ', myArray.unshift('Ricardo', 'Milos'));        // unShift: thêm 1 index lên vị trí đầu tiên của mảng.
console.log(myArray);

console.log('Splicing: ', myArray.splice(2, 1));    // Xóa 1 (vài) index theo vị trí key. Syntax .splice(key, số index cần xóa, index muốn thêm)
console.log(myArray);
console.log('Splicing: ', myArray.splice(2, 0, 'Splice', 'Nooooo'));
console.log(myArray);


let myArray2 = [
    'Hehe1',
    'Hehe2',
]

console.log('Concat: ', myArray.concat(myArray2));  // Nối 1 Array vào 1 array.

console.log('Slicing: ', myArray.slice(1));     // Slicing: cắt Array tại vị trí key và lấy ra những index sau nó. Syntax: slice(vị trí key bắt đầu, vị trí key kết thúc)
console.log('Slicing: ', myArray.slice(4));
console.log('Slicing: ', myArray.slice(2, 5));
console.log('Slicing: ', myArray.slice(-4, -1));
console.log('Slicing: ', myArray.slice(-1));
console.log('Slicing: ', myArray.slice(0));

console.log(myArray);

// THÊM HOẶC TÁI ĐỊNH NGHĨA INDEX THEO VỊ TRÍ KEY
myArray2[0] = 'noHehe'
myArray2[4] = 90;
console.log(myArray2);

// THỰC HÀNH_______________________________________________

// Cho trước hàm joinWithCharacter có 2 tham số là array và charactor, hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc nối từng phần tử của mảng với charactor.
function joinWithCharacter(array, charactor) {
    return array.join(charactor)
}

var cars = ['Honda', 'Mazda', 'Mercedes'];
var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"


// Tạo hàm getLastElement có 1 tham số myArray, hàm này sẽ trả về phần tử cuối cùng trong mảng.
let getLastElement = (myArray) => {
    return myArray.slice(-1)
}

var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']