/**
 *   Created by sammy on 2016/7/13
 */
'use strict';

/**
 * Extends 的继承目标
 * class B extends A{ }  A只要是一个有prototype属性的函数，就能被B继承，A可以是任意函数。
 * */

/**
 * super 关键字
 * 1、作为函数调用时，super代表父类的构造函数。
 * 2、作为对象调用时，super代表父类，可以引用父类的属性和方法，也可以引用父类的静态方法。
 * */


/**
 * Class的取值函数（getter）和存值函数（setter）
 * */
class MyClass {
    constructor() {

    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        console.log('setter:' + value);
    }
}
let inst = new MyClass();
inst.prop = 123;    // setter:123
console.log(inst.prop); // getter

/**
 * Class的静态方法：类中定义的方法前面加个 static 关键字。
 * 类中定义的方法都会被实例继承，如果在一个方法前面加上 static 关键字，该方法就不会被实例继承。
 * 总之：1、实例继承类的非静态方法。2、子类可以继承父类的静态方法。3、静态方法也可以从 super 对象上调用。
 * */
class Bar{
    static classMethod(){
        return 'hello';
    }
}
console.log(Bar.classMethod()); // hello
var bar = new Bar();
//console.log(bar.classMethod()); //  bar.classMethod is not a function

class BarChild extends Bar{

}
console.log(BarChild.classMethod());  // hello

/**
 * Class的静态属性和实例属性。（注：Class内部只有静态方法，没有静态属性，Class的构造函数中定义的是【实例属性】）
 * 静态属性：指Class本身的属性，而不是定义在实例对象（this）上的属性。
 * ES7提案中可以用等式在类的内部定义类的【实例属性】。比如：
 * class MyClass{
 *      myProp = 42;
 *
 *      constructor(){
 *          console.log(this.myProp);   // 42
 *      }
 * }
 * */
class MyClass2{}
MyClass2.prop = 2;  // ES6 中定义类的静态属性
console.log(MyClass2.prop); // 2

// ES7 中定义类的静态属性，在node v6下报错
//class MyClass3{
//    static prop = 42;
//    constructor(){
//        console.log(MyClass3.prop); // 42
//    }
//}
//new MyClass3();

/**
 * Class的 Generator 方法
 * */

// Foo类的Symbol.iterator方法前有一个星号，表示该方法是一个Generator函数。
// Symbol.iterator方法返回一个Foo类的默认遍历器，【for...of循环会自动调用这个遍历器】。
class Foo{
    constructor(...args){
        this.args = args;
    }
    * [Symbol.iterator](){
        for(let arg of this.args){
            yield arg;
        }
    }
}
for(let x of new Foo('hello','world')){
    console.log(x);
}
// hello
// world

/**
 * new.target 属性：返回new命令作用于的那个构造函数。Class内部调用 new.target 会返回当前Class。
 * 可以用来确定构造函数是怎么调用的。
 * 注意：子类继承父类时，new.target 返回子类。利用这个特点，可以写出不能独立使用、必须继承后才能使用的类。
 * */
// 另一种写法
function Person(name) {
    if (new.target === Person) {
        this.name = name;
    } else {
        throw new Error('必须使用new生成实例');
    }
}

var person = new Person('张三'); // 正确
//var notAPerson = Person.call(person, '张三');  // 报错

class Father{
    constructor(){
        console.log(new.target === Father);
    }
}
class Child extends Father{
    constructor(){
        super();
    }
}
new Father();   // true
new Child();    // false

// 让某个类无法单独使用，只能被继承
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        // ...
    }
}

//var x = new Shape();  // 报错
var y = new Rectangle(3, 4);  // 正确


