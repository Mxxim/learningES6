/**
 *   Created by sammy on 2016/7/10
 */
'use strict';

/**
 * ES6中新增的数据类型：symbol，它的值是由 Symbol() 生成的。
 * */

let s = Symbol();
console.log(typeof s); // symbol

// Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，
// 主要是为了在控制台显示，或者转为字符串时，比较容易区分。
var s1 = Symbol('foo');
console.log(s1);    // Symbol(foo)
console.log(s1.toString()); // "Symbol(foo)"

// Symbol值可以【显示地】转换为字符串，也可以转为布尔值，不能转为数值。
var sym = Symbol();
console.log(!sym); // false
console.log(Boolean(sym)); // true

// Symbol值作为对象属性名时，不能用点运算符。
// 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，
// 导致a的属性名实际上是一个字符串，而不是一个Symbol值。
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
console.log(a[mySymbol]); // undefined
console.log(a['mySymbol']); // "Hello!"

// 在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中。
var sym2 = Symbol();
var obj2 = {
    [sym2](args) {
        return args;
    }
};
console.log(obj2[sym2](123)); // 123

// 消除魔术字符串，消除代码强耦合
function getArea(shape, options) {
    var area = 0;

    switch (shape) {
        case 'Triangle': // 魔术字符串
            area = .5 * options.width * options.height;
            break;
        /* ... more code ... */
    }
    return area;
}
var area = getArea('Triangle', { width: 100, height: 100 }); // 多次出现字符串“Triangle”，称为魔术字符串
console.log(area); // 5000

// 修改如下：
const shapeType = {
    triangle: Symbol()
};
function getArea2(shape, options) {
    var area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
    }
    return area;
}

var area2 = getArea2(shapeType.triangle, { width: 100, height: 100 });
console.log(area2); // 5000

// Object.getOwnPropertySymbols()：获取对象的所有Symbol属性名。
var obj = {};
var foo = Symbol('foo');
//obj[foo] = "foobar";
Object.defineProperty(obj,foo,{
    value : "foobar"
})
for(let i in obj){
    console.log(i); // 无输出
}
console.log(Object.getOwnPropertyNames(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(foo) ]

// Reflect.ownKeys(obj)：返回所有键名，包括常规键名和Symbol键名。
var obj3 = {
    name : "Sammy",
    sex : "girl",
    [Symbol('desp')] : "description"
};
console.log(Reflect.ownKeys(obj3)); // [ 'name', 'sex', Symbol(desp) ]

// Symbol.for()：重新使用同一个Symbol值。先检查给定的key是否已经存在，如果不存在才会新建一个值。
var sym1 = Symbol.for('hello');
var sym3 = Symbol.for('hello');
console.log(sym1 === sym3); // true
console.log(Symbol('world') === Symbol('world')); // false

// Symbol.keyFor()：返回一个已登记的Symbol类型值的key。
console.log(Symbol.keyFor(sym1)); // hello
var abc = Symbol('abc');
console.log(Symbol.keyFor(abc)); // undefined

// 除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。

