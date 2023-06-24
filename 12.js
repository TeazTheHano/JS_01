/**
    VÒNG LẶP - LOOP
        1. for: vòng lặp với điều kiện đúng
        2. for-in: lặp qua key của đối tượng
        3. for-of: lặp qua value của đối tượng
        4. while: lặp khi điều kiện đúng (về cơ bản thì tương tự như For)
        5. do-while: lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
        6. Break & Continue: dùng trong mọi vòng lặp.
        7. Nested loop
        8. Recursion - hàm đệ quy: tự gọi lại chính nó.

 */

// vòng for, lặp log(i) từ 1 tới 15.
for (var i = 1; i <= 15; i++) {
    console.log(i);
}

// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
// Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

// Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng. let number = [1, 2, 3, 4, 5];
 
//For-in
let myArray = [
    'num1',
    'num2',
    'num3',
    'num4'
]
for(var key in myArray) {
    console.log(myArray[key]);
}

//For-of 
let myString = 'This is the myString var'
for(var value of myString) {
    console.log(value);
}

// Dùng For-in để lấy riêng các values của Object
let myObj = {
    name: 'Kiet',
    fName: 'Khuong Anh Kiet',
    age: 21,
    address: 'Hanoi',           // key thường gọi là thuộc tính, property
    fnX: function() {       // fn trong Object gọi là method
        
    }
}

console.log(Object.values(myObj)); // Lấy key từ object
for (var value of Object.values(myObj)) {
    console.log(value);
}

// Do - While
// khác For ở điểm là sẽ bỏ qua việc kiểm tra điều kiện ở lần chạy đầu tiên.
let a = 0
do {
    a++;
    console.log(a);
} while (a < 10);

// VD 2
let i2 = 0;
let isGood = false;
do {
    i2++;
    console.log(`Make it good ${i2} time(s)`);

    if (isGood===true) {
        isGood = true;
    }
} while (!isGood && i2 <=3)

// Break
console.log('break');
for (let i = 1; i < 10; i++) {
    console.log(`This run ${i} and get Break`);
    if (i >= 5) {
        break
    }
}

// Continue
for (let i = 1; i < 10; i++) {
    if (i%2 == 0) {     // Nếu không thỏa mãn điều kiện, những dòng code sau Continue sẽ bị bỏ qua và tiếp tục chạy vòng lặp.
        continue;
    }
    console.log(`the Continue + ${i}`);
}

// Nested loop
console.log('Nested Loop');
let myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
];

for (let i = 0; i < myArr.length; i++) {
    for (let u = 0; u < myArr[i].length; u++) {
        console.log(myArr[i][u]);
    }
}

// Recursion
// hàm đệ quy tự gọi lại chính nó để tạo ra một dạng vòng lặp khác. Lưu ý tương tự như loop, cần có tính logic và có điểm để dừng, nếu không sẽ overstack.
function recursion() {
    // cần có điều kiện để có thể dừng hàm, như Return,...
    // if (something) {
    //     return
    // }


    recursion()
}
// recursion()

console.log('Vi du countdown');
function countDown(num) {
    if (num >= 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return;
}
countDown(10)

// VD2: Tự tạo một vòng lặp bằng đệ quy.
function loop(start, end, loopFn) {
    if (start < end) {
        loopFn(start)
        return loop(start + 1, end, loopFn)
    }
}

let myLoopArr = ['name1', 'name2', 'name3', 'name4'];
loop(0, myLoopArr.length, function(index) {console.log(myLoopArr[index]);})

// VD3: Tạo hàm tính lũy thừa
function luyThua(number) {
    let output = 1;
    for (let i = number; i > 0; i--) {
        output = output * i
    } return output
}
console.log(luyThua(6));

function luythua2(number2) {
    if (number2 > 0) {
        return number2 * luythua2(number2 - 1)
    } return 1; // dùng return 1 để giúp trả kết quả của {luythua2(number2 - 1)} khi không thỏa mãn điều kiện > 0, từ đó phép tính mới có thể hoàn thành là 6*{5*{4*{3*{2*{1*{return=1}}}}}} thay vì 6*{5*{4*{3*{2*{1*{false}}}}}}
}
console.log(luythua2(6));