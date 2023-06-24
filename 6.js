/**
    Function

    1. Function đặt trùng tên?
    2. Khai báo biến trong hàm?
    3. Định nghĩa hàm trong hàm?
    4. Declaration function
    5. Expression function
    6. Arrow function
 */

// 1. function khi đặt trùng tên sẽ lấy giá trị khai báo cuối cùng.
function fn1() {
    console.log('this is fn1');
}

function fn1() {
    console.log('this is fn2');
}

function fn1() {
    console.log('this is fn3');
}

fn1();

// 2. khai báo biến trong hàm (ở phiên bản mới, var và let )
let age = 10 // biến global

function name1() {
    age = 15;       // bị reset
    console.log(age)
}
name1()
console.log(age);
function name2() {
    let age4 = 10
    let age = 20;       // biến cục bộ scope
    console.log(age)
    console.log(age4);
}
name2()
console.log(age);

// VD2
function fnNumber() {
    let number = 100;
    console.log(number);
}
fnNumber()
// console.log(number);

// 3. Khai báo hàm trong hàm
function action() {
    function actionMini(a, b, c) {
        if((a + b) > c) {
            return 'yes1'
        } else {
            return 'no1'
        }
    }
    console.log(actionMini())
    actionMini(10, 20, 35)
}
action()

// 4. Declaration fn: như cách thường làm.
action2()
function action2() {
    console.log('This is action2');
}


// 5. Expression fn: 

// action3() // tính chất của HOSTING: không gọi được trước khi khai báo như declaration fn.
let action3 = function(){   // gán
    console.log('This is action3');
}
action3()


setTimeout(function(){  // callback. có thể đặt tên vào để cho dễ nhớ.
    console.log('setTimeout')
}, 2000)

let myObject = {
    myFn : function() {
        return 'hehehe'
    }
}
console.log(myObject);

// 6. Arrow fn
// Arrow fn là một dạng rút gọn của function.

hello = function() {
    return "Hello World!";
}
console.log(hello())
// the same with
hello2 = () => { 
    return "Hello World!";
}
console.log(hello2())

hello3 = (fnHalo) => { // trường hợp chỉ có 1 biến, thì có thể bỏ qua () mà viết luôn tên biến
    return fnHalo + 1;
}
console.log(hello3(9));

hello4 = val => 'hello ' + val;
console.log(hello4("hehehehe"));
