// TÌM HIỂU VỀ CÂU LỆNH ĐIỀU KIỆN VÀ PHÉP SO SÁNH
console.log('Cau lenh dieu kien va so sanh');

let a = 1;
let b = 2;

let result = a < b;

console.log('result ', result);

if (a < b) {
    console.log('a < b');
} else {
    console.log('a > b');
};

// VD2
if (a < 1) {
    console.log('a < 1');
} else if (a > 1) {
    console.log('a > 1');
} else {
    console.log('a = 1');
}

// Toán tử Logic không trả về kết quả Boolean

// VD 1: toán tử && AND
let result2 = a < b && a < 0;
console.log('result2 = ', result2); // false là do kết quả của vế phải, không phải là bởi toán tử logic && trả ra boolean.

let result3 = 'A' && 'B' && 'C' && 'D'; // lấy giá trị cuối cùng.
console.log('result3 = ', result3);

if (result3) {
    console.log('result3 Dung');
} else {
    console.log('result3 Sai');
};

// Nếu có 1 phần tử nhận Boolean false thì phép tính sẽ trả về phần tử đó. 
let result4 = 'A' && 'B' && NaN && 'D'; 
console.log('result4 = ', result4); // trả về NaN

if (result4) {
    console.log('result4 Dung');
} else {
    console.log('result4 Sai');
};

// VD 2: toán tử || OR.
let result5 = 'A' || 'B' || 'C' || 'D'; // lấy giá trị đầu tiên.
console.log('result5 = ', result5);

if (result5) {
    console.log('result5 Dung');
} else {
    console.log('result5 Sai');
};

// Nếu có 1 phần tử nhận Boolean true thì phép tính sẽ trả về phần tử đó. 
let result6 = 'A' || 'B' || NaN || 'D'; 
console.log('result6 = ', result6); // trả về A

if (result6) {
    console.log('result6 Dung');
} else {
    console.log('result6 Sai');
};

let result7 = false || 'B' || NaN || ''; 
console.log('result7 = ', result7); // trả về B

if (result7) {
    console.log('result7 Dung');
} else {
    console.log('result7 Sai');
};

// Toán tử || giúp người dùng có thể confirm dữ liệu khi chỉ cần nhập vào 1 mục data.