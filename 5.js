alert('Hàm và tham số')
/**
    Hàm (function) trong JS

    1. Hàm là gì?
        - Một khối mã
        - Làm 1 việc cụ thể
    2. Loại Hàm
        - Built-in
        - Tự định nghĩa
    3. Tính chất
        - Không thực thi khi được định nghĩa
        - Thực thi khi được gọi
        - Có thể nhận tham số
        - Có thể trả về 1 giá trị
    4. Tạo hàm.
        - Tên hàm: chứa từ a-z A-Z 0-9.
    5. Return trong hàm.
 */

function showDialog() {
    alert('Hehe this is function section')
}

// showDialog(); // call the function

/**
    1. Tham số - Parameter?
        - Định nghĩa: dữ liệu truyền vào function.
        - Kiểu dữ liệu: mọi loại dữ liệu, miễn đúng cú pháp.
        - Tính private: chỉ sử dụng ở trong khối function.
        - 1 tham số: mỗi tham số nhận vào 1 biến. Khi cần truyền nhiều tham số thì cần gọi thêm biến.
        - Nhiều tham số
    2. Truyền tham số
        - 1 tham số
        - Nhiều tham số
    3. Arguments?
        - Đối tượng arguments: 
        - Giới thiệu vòng lặp for - of
 */

function writeLog() {
    console.log('Day la 1 dong log');
}
writeLog()
// VD2
function writeLog2(thamso) { // thamso ở đây đóng vai trò tham số, 
    console.log(thamso);
}
writeLog2('đây là Đối số')

// VD3
function writeLog3(thamso1, thamso2, thamso3) {
    console.log(thamso1);
    console.log(thamso2);
    console.log(thamso3);
}
writeLog3('doi so1', 'doi so2');

// VD 4
function writeLog4() {
    console.log(arguments)
}
writeLog4('he1', 'he2', 'he3');

function writeLog5() {
    var myString = '';
    for (let i of arguments) {
        myString += `${i} - `
    }
    console.log(myString)
}
writeLog5('he1', 'he2', 'he3');

// RETURN : trả về kết quả trong hàm.

function cong(a, b) {
    return a + b;   // trả về kết quả a + b, nạp lại vào hàm cong
}
let result = cong(2, 8);    // nạp dữ liệu vào a và b của hàm cong
console.log(result);

