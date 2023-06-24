// LÀM VIỆC VỚI ARRAY 2

/**
    forEach: duyệt qua từng phần tử của mảng, không trả về mảng mới
    map: tạo ra một mảng mới từ mảng cũ
    filter: tạo ra một mảng mới từ mảng cũ, nhưng chỉ lấy những phần tử thỏa mãn điều kiện
    find: tìm kiếm phần tử đầu tiên thỏa mãn điều kiện
    reduce: tính toán một giá trị từ một mảng
    some: kiểm tra xem có ít nhất một phần tử thỏa mãn điều kiện hay không
    every: kiểm tra xem tất cả các phần tử có thỏa mãn điều kiện hay không
    sort: sắp xếp mảng
    reverse: đảo ngược mảng
    includes: kiểm tra xem một phần tử có nằm trong mảng hay không
    toLocaleString: chuyển mảng thành chuỗi theo ngôn ngữ của máy tính
    valueOf: trả về mảng
    copyWithin: sao chép phần tử trong mảng
    fill: thay thế các phần tử trong mảng
    entries: trả về một đối tượng Iterator
    keys: trả về một đối tượng Iterator
    values: trả về một đối tượng Iterator
    flat: trả về một mảng mới với tất cả các phần tử được gộp lại một cấp
    flatMap: trả về một mảng mới với tất cả các phần tử được gộp lại một cấp và được áp dụng một hàm
    from: tạo một mảng mới từ một đối tượng có thể lặp lại
    isArray: kiểm tra xem một đối tượng có phải là một mảng hay không
    of: tạo một mảng mới với các đối số được cung cấp
    ----------------------------------------------------------------

    ----------------------------
    Kiến thức cũ
    indexOf: tìm kiếm phần tử đầu tiên trong mảng
    lastIndexOf: tìm kiếm phần tử cuối cùng trong mảng
    join: nối các phần tử của mảng thành một chuỗi
    split: chuyển một chuỗi thành một mảng
    slice: cắt một mảng thành một mảng mới
    splice: thêm, xóa, thay thế phần tử trong mảng
    concat: nối mảng
    push: thêm phần tử vào cuối mảng
    pop: xóa phần tử cuối mảng
    unshift: thêm phần tử vào đầu mảng
    shift: xóa phần tử đầu mảng
    toString: chuyển mảng thành chuỗi
    
 */

var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'Python',
        coin: 0
    },
    {
        id: 5,
        name: 'Java',
        coin: 0
    },
];

// forEach
course.forEach(function(x, index) {
    console.log(x, index);
    console.log('a');
});

// map
var newCourse = course.map(function(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    }
});
console.log(newCourse);

// filter
var course0 = course.filter(function(course, index) {
    return course.coin === 0;
}
);
console.log(course0);

// find
var course2 = course.find(function(course, index) {
    return course.id === 2;
}
);
console.log(course2);

// reduce
var totalCoin = course.reduce(function(total, course, index) {
    return total + course.coin;
}
, 0);
console.log(totalCoin);

// some
var isFree = course.some(function(course, index) {
    return course.coin === 0;
}
);
console.log(isFree);

// every
var isFree2 = course.every(function(course, index) {
    return course.coin === 0;
}
);
console.log(isFree2);

// sort
var newCourse2 = course.sort(function(a, b) {
    return a.coin - b.coin;
}
);
console.log(newCourse2);

// reverse
var newCourse3 = course.reverse();
console.log(newCourse3);

// includes
var isExist = course.includes({id: 1});
console.log(isExist);

// toLocaleString
var localeString = course.toLocaleString();
console.log(localeString);

// valueOf
var valueOf = course.valueOf();
console.log(valueOf);

// copyWithin
var copyWithin = course.copyWithin(1, 2);
console.log(copyWithin);

// fill
var fill = course.fill({id: 6});
console.log(fill);

// entries
var entries = course.entries();
console.log(entries);

// keys
var keys = course.keys();
console.log(keys);

// values
var values = course.values();
console.log(values);

// flat
var flat = course.flat();
console.log(flat);

// flatMap
var flatMap = course.flatMap(function(course, index) {
    return [course.name];
}
);
console.log(flatMap);

// from
var from = Array.from(course);
console.log(from);

// isArray
var isArray = Array.isArray(course);
console.log(isArray);

// of
var of = Array.of(course);
console.log(of);
