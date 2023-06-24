// OBJECT TRONG JS
let gMail = 'email';

let myInfo = {
    name: 'Kiet',
    fName: 'Khuong Anh Kiet',
    age: 21,
    address: 'Hanoi',
    [gMail]: 'blablublo@gmail.com',
    //myKey: 123,
}

console.log(myInfo);

// Thêm key vào 1 Object có sẵn.
myInfo.email = 'bla@gmail.com';
console.log(myInfo);

// Lấy index với key trong Object
console.log(myInfo.name);
console.log(myInfo['email']);
console.log(myInfo['keyUnknow']);   //undefined

// Trường hợp lưu ý khi lấy key
let myKey = 'age';
console.log(myInfo.myKey);  // tìm myKey trong Object
console.log(myInfo[myKey]); // key lấy từ biến
console.log(myInfo[gMail]); // gán key theo giá trị biến (line: 9);

delete myInfo[gMail]    // Xóa 1 key
console.log(myInfo);

// VD2
let myObj = {
    name: 'Kiet',
    fName: 'Khuong Anh Kiet',
    age: 21,
    address: 'Hanoi',           // key thường gọi là thuộc tính, property
    [gMail]: 'blablublo@gmail.com', 
    fnX: function() {       // fn trong Object gọi là method
        
    }
}

// Lấy key từ object, kết quả trả thành một Array
console.log(Object.values(myObj));

// OBJECT CONSTRUCTOR
// Dùng để tạo 1 component

function User(firstName, lastName, group) {
    this.firstName = firstName;     // this.firstName chỉ key firstName sẽ có giá trị bằng biến firstName
    this.lastName = lastName;
    this.group = group;

    this.getName = function() {
        return `${this.firstName} (${this.group})`
    }
}

let author = new User('Kiet', 'Khuong', 'host')
let user = new User('Cuong', 'Dola', 'culi')
let Nhi = new User('Nhi', 'Nguyen', 'Hoc Sinh')

console.log(author);

author.lesson = 'hoc Javascript';   // thêm vào new User
user.comment = 'hoc cung duoc'


console.log(author);
console.log(user);

console.log(author.getName());

// Prototype
User.prototype.className = 'F8' // thêm property/method vào Constructor. Log ra sẽ hiện ở mục _proto_


//_______________________________________________________________
// Đối tượng Date

let date = new Date()
console.log(date);
console.log(typeof date);   // Object, giúp truy xuất thông tin

let date2 = Date()
console.log(typeof date2);  // just string.

let year = date.getFullYear()
console.log(year);

let month = date.getMonth() + 1; // trả về kết quả từ 0-11
let day = date.getDate()
let hour = date.getHours()

// Làm bài tạo hàm trả về giá trị 10 năm sau. 