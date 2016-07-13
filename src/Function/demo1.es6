/**
 *   Created by sammy on 2016/7/9
 */
'use strict';

/**
 * 函数的扩展
 * */

// 设置函数默认值.（一般将默认值作为尾参数）
function log(x,y = 'World'){
    console.log(x,y);
}
log('Hello'); // Hello World
log('Hello','Chain'); // Hello Chain
log('Hello',false); // Hello false
log('Hello',''); // Hello

// 函数的 length 属性，将返回没有指定默认值的参数个数。
console.log((function(x , y , z = 1){}).length); // 2
// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
console.log((function (a, b = 1, c) {}).length); // 1

// 默认值应用：指定某一个参数不得省略，如果省略则抛出一个错误
function throwIfMissing() {
    throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

//foo(); // Error: Missing parameter

// 默认值应用：指定某一个参数可以省略
function foo2(optional = undefined){
    console.log(optional);
}
foo2(); // undefined

// rest参数：获取函数多余参数，这样就不需要使用arguments对象了。
// rest 参数之后不能再有其他参数，即 rest 参数只能是尾参数。
function add(...values){
    let sum = 0;
    console.log(values); // [ 5, 2, 3 ]
    console.log(values.sort()); // [ 2, 3, 5 ]

    for(let val of values){
        sum += val;
    }
    console.log(sum);

}
add(5,2,3); // 10

// 扩展运算符
function push(array, ...items) {
    array.push(...items);
}

function add2(x, y) {
    return x + y;
}
var numbers = [4, 38];
console.log(add2(...numbers)); // 42

// 替代数组的 apply 方法
var arr1 = [0,1,2];
var arr2 = [3,4,5];
Array.prototype.push.apply(arr1,arr2); // 数组的 push 方法不能传入数组
console.log(arr1); // [ 0, 1, 2, 3, 4, 5 ]

var arr4 = [0,1,2];
var arr5 = [3,4,5];
arr4.push(...arr5);
console.log(arr4); // [ 0, 1, 2, 3, 4, 5 ]

// 扩展运算符的应用：合并数组
var array1 = ['a', 'b'];
var array2 = ['c'];
var array3 = ['d', 'e'];

// ES5的合并数组
console.log(array1.concat(array2, array3)); // [ 'a', 'b', 'c', 'd', 'e' ]

// ES6的合并数组
console.log([...array1, ...array2, ...array3]); // [ 'a', 'b', 'c', 'd', 'e' ]

// 扩展运算符的应用：与解构赋值结合，用于生成数组。
// .....

// 函数的 name 属性，返回函数名称

// 箭头函数，使用 => 来定义函数。若返回对象，则需要用括号括起来，因为大括号被解释为代码块。
var f = v => v;
// 等同于
var f1 = function(v){
    return v;
};

// 箭头函数与变量结构结合使用
const full = ({first,last}) => first+' '+last;
// 等同于
function full2(person){
    return person.first+' '+ person.last;
}



