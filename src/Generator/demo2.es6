/**
 *   Created by sammy on 2016/7/11
 */
'use strict';

/**
 *  Generator 函数作为对象的属性
 * */
let obj = {
  myMethod : function* (){
        // some code
  }
};
let obj2 = {
  * myMethod(){
      // some code
  }
};

/**
 *  Generator函数总返回一个遍历器，这个遍历器是Generator函数的实例,
 *  它继承了Generator函数的prototype对象上的方法。
 * */
function *g(){
    // some code
}
g.prototype.hello = () => {
    console.log("Hello!");
};
var obj3 = g();
console.log(obj3 instanceof  g); // true
obj3.hello();   // Hello!

/**
 *  让Generator函数返回一个正常的对象实例，既可以用next方法，又可以获得正常的this
 * */
function* F(){
    this.x = 1;
    yield this.y = 2;
    yield this.z = 3;
}
var object = {};
var f = F.call(object); // 使 F 内部的 this 对象绑定object对象，然后调用它，返回一个Iterator对象
console.log(f.next()); // { value: 2, done: false }
console.log(f.next()); // { value: 3, done: false }
console.log(f.next()); // { value: undefined, done: true }
console.log(f.x); // undefined
console.log(object.y); // 2
console.log(object.z); // 3

// 以上代码遍历器对象是 f，生成的对象实例是 object。
// 改进以上代码，使遍历器对象和实例对象是同一个。
console.log("------------改进1-----------------");
function* F2(){
    this.x = 1;
    yield this.y = 2;
    yield this.z = 3;
}
var f2 = F2.call(F2.prototype);
console.log(f2.next()); // { value: 2, done: false }
console.log(f2.next()); // { value: 3, done: false }
console.log(f2.next()); // { value: undefined, done: true }
console.log(f2.x); // 1
console.log(f2.y); // 2
console.log(f2.z); // 3

// 继续改进以上代码，使得可以使用 new
console.log("------------改进2-----------------");
function* gen3(){
    this.x = 1;
    yield this.y = 2;
    yield this.z = 3;
}
function F3(){
    return gen3.call(gen3.prototype);
}
var f3 = new F3();
console.log(f3.next()); // { value: 2, done: false }
console.log(f3.next()); // { value: 3, done: false }
console.log(f3.next()); // { value: undefined, done: true }
console.log(f3.x); // 1
console.log(f3.y); // 2
console.log(f3.z); // 3

/**
 * Generator 与状态机，简洁更安全，不需要保存状态的外部变量，比如 flag
 * */
var flag = true;
function clock(){
    if(flag){
        console.log("Open");
    }else{
        console.log("Close");
    }
    flag = !flag;
}
// 以上是 ES5 实现的代码，下面用 ES6 改进
var clock2 = function*(){
    while(true){
        console.log("Open");
        yield ;
        console.log("Close");
        yield ;
    }
};

/**
 * Generator 与协程：可以将多个需要互相协作的任务写成Generator函数，它们之间使用yield语句交换控制权。
 * */




