/**
 *   Created by sammy on 2016/7/9
 */
'use strict';

/**
 * 对象的扩展
 * */

// 直接写入变量和函数作为对象的属性和方法，非常适合用户 CommonJS 模块输出变量！！！
var foo1 = "Hello";
var foo2 = "Sammy";
var fn = x => x;
var baz = {foo1,foo2,fn};
console.log(baz); // { foo1: 'Hello', foo2: 'Sammy', fn: [Function] }

var birth = '2000/01/01';
var Person = {
    name: '张三',
    birth, //等同于birth: birth
    hello() {   // 等同于hello: function ()...
        console.log('我的名字是', this.name);
        return this.name;
    }
};
console.log(Person); // { name: '张三', birth: '2000/01/01', hello: [Function: hello] }
console.log(Person.hello()); // 张三

// 如果某个方法的值是一个Generator函数，前面需要加上星号。
var obj = {
    * m(){
        yield 'hello world';
    }
};

// Object.is()：比较两个值是否严格相等。
console.log(+0 === -0); // true
console.log(NaN === NaN);  // false
console.log(Object.is(+0,-0)); // false
console.log(Object.is(NaN,NaN)); // true

// Object.assign()：用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）,属于浅拷贝。
// 若传入的参数不是对象，则会自动先转换为对象。
// 用途：1、为对象添加属性。2、为对象添加方法。3、克隆对象。4、合并多个对象。5、为属性指定默认值。
var target = {a : 1};
var source1 = {a : 5,b : 2};
var source2 = {c : 3};
Object.assign(target,source1,source2);
console.log(target); // { a: 5, b: 2, c: 3 }
console.log(target.a); // 5

// 1、为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y}); // 将x属性和y属性添加到Point类的对象实例。
    }
}
// 2、为对象添加方法
function SomeClass(){}
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2){
        // ...
    },
    anotherMethod() {
        // ...
    }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
        // ...
};
SomeClass.prototype.anotherMethod = function () {
        // ...
};

// 3、克隆对象
function clone(origin) {
    return Object.assign({}, origin);
}

// 4、合并多个对象
const merge =
    (target, ...sources) => Object.assign(target, ...sources);

// 5、为属性指定默认值
const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
function processContent(options) {
    let options = Object.assign({}, DEFAULTS, options); // options 为用户提供的参数
        // ...
}
