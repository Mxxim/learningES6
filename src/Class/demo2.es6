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
 * Class的静态方法
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