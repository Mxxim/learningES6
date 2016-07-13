/**
 *   Created by sammy on 2016/7/5
 */
'use strict';

/**
 * Array的扩展
 * */

// Array.from()：将两类对象（类似数组的对象或可遍历的对象）转为真正的数组。
// 第二个参数用来对每个元素进行处理，类似数组的 map 方法。
// 第三个参数用来绑定 this
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

var arr1 = [].slice.call(arrayLike); // ES5的写法
console.log(arr1); // ['a', 'b', 'c']

let arr2 = Array.from(arrayLike);   // ES6的写法
console.log(arr2); // ['a', 'b', 'c']

// 将类数组对象或函数内部的arguments对象转换为真正的数组
//let ps = document.querySelectorAll('p'); // NodeList对象
//Array.from(ps).forEach(function(p){     // Array.from()将其转换为真正的数组
//    console.log(p);
//})
Array.from('Sammy').forEach(function(s){
    console.log(s); // ['S','a','m','m','y']
});

let mp = new Map();
mp.set("key1","value1");
mp.set("key2","value2");
Array.from(mp).forEach(function(data){
    console.log(data); // ['key1','value1'] 和 ['key2','value2']
})

function foo(){
    console.log(arguments); // { '0': 'hello', '1': 'world' }
    console.log(arguments.length); // 2
    Array.from(arguments).forEach(function(a){
        console.log(a); // ['hello','world']
        Array.from(a).forEach(function(b){
            console.log(b);
        })
    })
}
foo("hello","world");

Array.from({length:3}).forEach(function(s){
    console.log(s); // [undefined,undefined,undefined]
});

// 传入第二个参数
let arr3 = Array.from([1,,3,,5] , x => x || 0);
console.log(arr3); // [1,0,3,0,5]
let arr4 = Array.from({length:2} , () => "Mxxim");
console.log(arr4); // ['Mxxim','Mxxim']

// Array.of()：将一组值转换为数组，若没有参数，则返回一个空数组。用来代替 Array() 和 new Array()
let arr5 = Array.of(3);
console.log(arr5); // [3]
console.log(arr5.length); // 1

// copyWithin(target,start,end)：在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
// target（必需），从该位置开始替换数据。
// start（可选），从该位置开始读取数据，默认为0。如果为负值，表示倒数。
// end（可选），到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

// find(callback(value,index,arr))：找出第一个符合条件的数组成员。
// findIndex(callback(value,index,arr))：返回第一个符合条件的数组成员的位置，若所有成员都不符合，则返回-1.
// 这两个方法都可以发现NaN，弥补了数组的 IndexOf 方法的不足。
var c = [1,-1,8,-2].find(function(value,index,arr){
    return value < 0;
});
console.log(c); // -1

console.log([NaN,5].indexOf(NaN)); // -1
console.log([NaN,5].findIndex(y => Object.is(NaN,y))); // 0

// fill()：使用给定值，填充一个数组。可以用来初始化一个数组。
var arr6 = Array.from({length:3}).fill(5);
console.log(arr6); // [5,5,5]
var arr7 = ['a', 'b', 'c'].fill(7, 1, 2); // fill()从1号位开始，向原数组填充7，到2号位之前结束。
console.log(arr7); // [ 'a', 7, 'c' ]

// entries():对键值对的遍历
// keys()：对键名的遍历
// values()：对键值的遍历
for(let elem of ["a","b"].keys()){
    console.log(elem); // 0 1
}
//for (let elem of ['a', 'b'].values()) {
//    console.log(elem);
//} // node v6.0会报错
for(let elem of ["a","b"].entries()){
    console.log(elem); // [ 0, 'a' ] / [ 1, 'b' ]
}
for(let [index,item] of ["a","b"].entries()){
    console.log(index,item); // 0, 'a' /  1, 'b'
}

// includes()：表示某个数组是否包含给定的值，与字符串的includes方法类似
console.log([NaN].indexOf(NaN)); // -1
console.log([NaN].includes(NaN)); // true

// ES6明确将空位转为 undefined，不会跳过空位

