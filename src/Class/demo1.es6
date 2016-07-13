/**
 *   Created by sammy on 2016/7/12
 */
'use strict';

/**
 * Class（类）：类的数据类型就是function（函数），类本身就指向构造函数。使用 new 来实例一个对象。
 * 类的内部所有定义的方法，都是定义在prototype属性上的并且不可枚举的。
 * 与ES5一样，类的所有实例共享一个原型对象。
 * */
// ES5
function PointES5(x,y){
    this.x = x;
    this.y = y;
}
PointES5.prototype.toString = function(){
    return '(' + this.x + ', ' + this.y + ')';
}
var p = new PointES5(1, 2);
console.log(p.toString());  // (1, 2)

// ES6
// 事实上，类的所有方法都定义在类的 prototype 属性上面。
var methodName = "getLength";
class PointES6{
    constructor(x,y){   // 构造方法。this 代表实例对象
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }

    [methodName](){
        return this.x + this.y;
    }
}
var pointes6 = new PointES6(1,2);

console.log(pointes6.toString()); // (1, 2)
console.log(pointes6.getLength());  // 3
console.log(typeof PointES6);   // function
console.log(PointES6 === PointES6.prototype.constructor);   // true
console.log(pointes6.toString  === PointES6.prototype.toString); // true
console.log(Object.keys(PointES6.prototype));   // []
console.log(Reflect.ownKeys(PointES6.prototype));   // [ 'constructor', 'toString' ]
console.log(pointes6.hasOwnProperty('x'));  // true
console.log(pointes6.hasOwnProperty('toString'));   // false。该方法是在原型上而不是实例上
console.log(pointes6.__proto__.hasOwnProperty('toString'));   // true。说明通过 __proto__ 属性可以为Class添加方法。

// 使用 Object.assign()给类一次性添加多个方法

/**
 * 使用表达式定义 Class
 * */
// 类的名字是 myClass 而不是 Me，Me只是在类的内部中使用。
const myClass = class Me{
    getClassName(){
        return Me.name;
    }
};
let inst = new myClass();

console.log(inst.getClassName());   // Me
//console.log(Me.name);   // Me is not defined
console.log(myClass.name);   // Me

// 立即执行
var person = new class{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}('张三');

person.sayName(); // 张三

/**
 * Class的继承，子类必须在 constructor 方法中调用 super 方法，否则实例化的时候会报错，因为子类没有自己的 this 对象，
 * 而是继承父类的 this 对象，然后对其进行加工，如果不调用 super 方法，子类就得不到 this 对象。
 * */
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '('+this.x+','+this.y+')'
    }
}
// 在子类的构造函数中，只有调用 super 之后，才可以使用 this 关键字，否则报错。
class ColorPoint extends Point {
    constructor(x, y, color) {
        //this.color = color; // ReferenceError
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}

let cp = new ColorPoint(2,5,'red');
console.log(cp instanceof ColorPoint);  // true
console.log(cp instanceof Point);   // true
// 两条继承链。可以这样理解：
// 作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；
// 作为一个构造函数，子类（B）的原型（prototype属性）是父类的实例。
console.log(ColorPoint.__proto__ === Point);    // true
console.log(ColorPoint.prototype.__proto__ === Point.prototype);    // true

/**
 * Object.getPrototypeOf()
 * 从子类上获取父类。一般用于判断一个类是否继承了另一个类。
 * */
console.log(Object.getPrototypeOf(ColorPoint) === Point); // true



