/**
 *   Created by sammy on 2016/7/11
 */
'use strict';

/**
 *  Generator 函数作为对象的属性
 * */

var _marked = [g, F, F2, gen3].map(regeneratorRuntime.mark);

var obj = {
    myMethod: regeneratorRuntime.mark(function myMethod() {
        return regeneratorRuntime.wrap(function myMethod$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                        return _context.stop();
                }
            }
        }, myMethod, this);
    })
};

// some code
var obj2 = {
    myMethod: regeneratorRuntime.mark(function myMethod() {
        return regeneratorRuntime.wrap(function myMethod$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                    case "end":
                        return _context2.stop();
                }
            }
        }, myMethod, this);
    })
};

/**
 *  Generator函数总返回一个遍历器，这个遍历器是Generator函数的实例,
 *  它继承了Generator函数的prototype对象上的方法。
 * */

// some code
function g() {
    return regeneratorRuntime.wrap(function g$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                case "end":
                    return _context3.stop();
            }
        }
    }, _marked[0], this);
}

// some code
g.prototype.hello = function () {
    console.log("Hello!");
};
var obj3 = g();
console.log(obj3 instanceof g); // true
obj3.hello(); // Hello!

/**
 *  让Generator函数返回一个正常的对象实例，既可以用next方法，又可以获得正常的this
 * */
function F() {
    return regeneratorRuntime.wrap(function F$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    this.x = 1;
                    _context4.next = 3;
                    return this.y = 2;

                case 3:
                    _context4.next = 5;
                    return this.z = 3;

                case 5:
                case "end":
                    return _context4.stop();
            }
        }
    }, _marked[1], this);
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
function F2() {
    return regeneratorRuntime.wrap(function F2$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    this.x = 1;
                    _context5.next = 3;
                    return this.y = 2;

                case 3:
                    _context5.next = 5;
                    return this.z = 3;

                case 5:
                case "end":
                    return _context5.stop();
            }
        }
    }, _marked[2], this);
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
function gen3() {
    return regeneratorRuntime.wrap(function gen3$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    this.x = 1;
                    _context6.next = 3;
                    return this.y = 2;

                case 3:
                    _context6.next = 5;
                    return this.z = 3;

                case 5:
                case "end":
                    return _context6.stop();
            }
        }
    }, _marked[3], this);
}
function F3() {
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
function clock() {
    if (flag) {
        console.log("Open");
    } else {
        console.log("Close");
    }
    flag = !flag;
}
// 以上是 ES5 实现的代码，下面用 ES6 改进
var clock2 = regeneratorRuntime.mark(function clock2() {
    return regeneratorRuntime.wrap(function clock2$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    if (!true) {
                        _context7.next = 9;
                        break;
                    }

                    console.log("Open");
                    _context7.next = 4;
                    return;

                case 4:
                    console.log("Close");
                    _context7.next = 7;
                    return;

                case 7:
                    _context7.next = 0;
                    break;

                case 9:
                case "end":
                    return _context7.stop();
            }
        }
    }, clock2, this);
});

/**
 * Generator 与协程：可以将多个需要互相协作的任务写成Generator函数，它们之间使用yield语句交换控制权。
 * */