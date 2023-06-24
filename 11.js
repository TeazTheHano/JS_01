/**
    MATH OBJECT
        - Math.PI
        - Math.round()  làm tròn
        - Math.abs()    giá trị tuyệt đối
        - Math.ceil()   làm tròn trên
        - Math.floor()  làm tròn dưới
        - Maht.random() ngẫu nhiên
        - Math.min()    
        - Math.max()

 */

// Math.PI
console.log(Math.PI)

// Math.round()
console.log(Math.round(4.2));
console.log(Math.round(4.6));

// Math.abs()
console.log(Math.abs(-9));

// Math.ceil()
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.000000001));

// Math.floor()
console.log(Math.floor(4.9));

// Math.random()
console.log(Math.random());
console.log(Math.random() * 10); // ngẫu nhiên từ 0-9;
console.log(Math.floor(Math.random()*10));

let bonus = Math.floor(Math.random()*100) // Tỉ lệ 100
let X = function() {
    if (bonus < 20) {
    return 'U got it';
    } return 'Nah';
}
console.log('Rơi đồ: ', X()) // tỉ lệ rớt đồ 20%

// Math.min()
console.log(Math.min(-100, 90, 3, 523, -483, 93, 0));

// Luyện tập: tạo 1 hàm lấy ngẫu nhiên 1 giá trị trong mảng.

/**
let array = []
let getRandomItem = (array) => {
    let Rd = Math.floor(Math.random() *array.length)
    return array[Rd]
}

console.log(getRandomItem(array))
 */


// let array = []
// let arrayInterval = setInterval(
//     function(){
//         array.push(Math.floor(Math.random()*101))
//     }, 12
// )

// setTimeout(function(){
//     clearTimeout(arrayInterval); console.log(array);
// }, 500)

// function getRandomItem(array){
//     let Rd = Math.floor(Math.random()*array.length)
//     return array[Rd]
// }

// setTimeout(function(){
//     console.log(getRandomItem(array));
// }, 1000)



console.log('If - else & Switch case');
//____________________________________________
// If - else & Switch case

/**
Khi a chia hết cho 3 thì return về 1
Khi a chia hết cho 5 thì return về 2
Khi a chia hết cho 15 thì return về 3

console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3
 */

// Switch case
let date = 3;
switch(date) {
    case 1: console.log('hom nay thu 2');
            break;
    case 2: console.log('hom nay thu 3');
            break;
    case 3: console.log('hom nay thu 4');
            break;
    case 4: console.log('hom nay thu 5');
            break;  
    case 5: console.log('hom nay thu 7');
};

// VD 2
let rate = Math.floor(Math.random()*10)
switch(rate) {
    case 0:
        console.log('ban oi duoc 0 roi, den lam')
        break;
    case 1: 
        console.log('ban oi duoc 1 roi, ga')
        break;
    case 2:
        console.log('ban oi 2 roi, van den lam')
        break;
    case 3:
        console.log('ban oi duoc 3 roi, chan')
        break;
    case 4:
        console.log('ban oi duoc 4 roi, mot chu nua thoi')
        break;
    case 5:
        console.log('duoc 5 roi, du diem qua mon roi day')
        break;
    default:
        console.log('ban da qua mon');
}

// VD3
function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}


//________________________________________
// Toán tử ba ngôi. Ternary operator

let a = 300;
let result2 = a > 0 ? `Mon do nay co gia la ${a}đ` : 'Mien phi';
console.log(result2);