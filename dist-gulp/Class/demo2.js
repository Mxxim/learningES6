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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyClass = function () {
    function MyClass() {
        _classCallCheck(this, MyClass);
    }

    _createClass(MyClass, [{
        key: 'prop',
        get: function get() {
            return 'getter';
        },
        set: function set(value) {
            console.log('setter:' + value);
        }
    }]);

    return MyClass;
}();

var inst = new MyClass();
inst.prop = 123; // setter:123
console.log(inst.prop); // getter

/**
 * Class的静态方法：类中定义的方法前面加个 static 关键字。
 * 类中定义的方法都会被实例继承，如果在一个方法前面加上 static 关键字，该方法就不会被实例继承。
 * 总之：1、实例继承类的非静态方法。2、子类可以继承父类的静态方法。3、静态方法也可以从 super 对象上调用。
 * */

var Bar = function () {
    function Bar() {
        _classCallCheck(this, Bar);
    }

    _createClass(Bar, null, [{
        key: 'classMethod',
        value: function classMethod() {
            return 'hello';
        }
    }]);

    return Bar;
}();

console.log(Bar.classMethod()); // hello
var bar = new Bar();
//console.log(bar.classMethod()); //  bar.classMethod is not a function

var BarChild = function (_Bar) {
    _inherits(BarChild, _Bar);

    function BarChild() {
        _classCallCheck(this, BarChild);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BarChild).apply(this, arguments));
    }

    return BarChild;
}(Bar);

console.log(BarChild.classMethod()); // hello

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

var MyClass2 = function MyClass2() {
    _classCallCheck(this, MyClass2);
};

MyClass2.prop = 2; // ES6 中定义类的静态属性
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

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        this.args = args;
    }

    _createClass(Foo, [{
        key: Symbol.iterator,
        value: regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, arg;

            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = this.args[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            arg = _step.value;
                            _context.next = 9;
                            return arg;

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }]);

    return Foo;
}();

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = new Foo('hello', 'world')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var x = _step2.value;

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
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

function Person(name) {
    if (new.target === Person) {
        this.name = name;
    } else {
        throw new Error('必须使用new生成实例');
    }
}

var person = new Person('张三'); // 正确
//var notAPerson = Person.call(person, '张三');  // 报错

var Father = function Father() {
    _classCallCheck(this, Father);

    console.log(new.target === Father);
};

var Child = function (_Father) {
    _inherits(Child, _Father);

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Child).call(this));
    }

    return Child;
}(Father);

new Father(); // true
new Child(); // false

// 让某个类无法单独使用，只能被继承

var Shape = function Shape() {
    _classCallCheck(this, Shape);

    if (new.target === Shape) {
        throw new Error('本类不能实例化');
    }
};

var Rectangle = function (_Shape) {
    _inherits(Rectangle, _Shape);

    function Rectangle(length, width) {
        _classCallCheck(this, Rectangle);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).call(this));
        // ...
    }

    return Rectangle;
}(Shape);

//var x = new Shape();  // 报错


var y = new Rectangle(3, 4); // 正确