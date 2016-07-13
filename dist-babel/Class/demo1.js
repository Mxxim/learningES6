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

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PointES5(x, y) {
    this.x = x;
    this.y = y;
}
PointES5.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};
var p = new PointES5(1, 2);
console.log(p.toString()); // (1, 2)

// ES6
// 事实上，类的所有方法都定义在类的 prototype 属性上面。
var methodName = "getLength";

var PointES6 = function () {
    function PointES6(x, y) {
        _classCallCheck(this, PointES6);

        // 构造方法。this 代表实例对象
        this.x = x;
        this.y = y;
    }

    _createClass(PointES6, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }, {
        key: methodName,
        value: function value() {
            return this.x + this.y;
        }
    }]);

    return PointES6;
}();

var pointes6 = new PointES6(1, 2);

console.log(pointes6.toString()); // (1, 2)
console.log(pointes6.getLength()); // 3
console.log(typeof PointES6 === 'undefined' ? 'undefined' : _typeof(PointES6)); // function
console.log(PointES6 === PointES6.prototype.constructor); // true
console.log(pointes6.toString === PointES6.prototype.toString); // true
console.log(Object.keys(PointES6.prototype)); // []
console.log(Reflect.ownKeys(PointES6.prototype)); // [ 'constructor', 'toString' ]
console.log(pointes6.hasOwnProperty('x')); // true
console.log(pointes6.hasOwnProperty('toString')); // false。该方法是在原型上而不是实例上
console.log(pointes6.__proto__.hasOwnProperty('toString')); // true。说明通过 __proto__ 属性可以为Class添加方法。

// 使用 Object.assign()给类一次性添加多个方法

/**
 * 使用表达式定义 Class
 * */
// 类的名字是 myClass 而不是 Me，Me只是在类的内部中使用。
var myClass = function () {
    function Me() {
        _classCallCheck(this, Me);
    }

    _createClass(Me, [{
        key: 'getClassName',
        value: function getClassName() {
            return Me.name;
        }
    }]);

    return Me;
}();
var inst = new myClass();

console.log(inst.getClassName()); // Me
//console.log(Me.name);   // Me is not defined
console.log(myClass.name); // Me

// 立即执行
var person = new (function () {
    function _class(name) {
        _classCallCheck(this, _class);

        this.name = name;
    }

    _createClass(_class, [{
        key: 'sayName',
        value: function sayName() {
            console.log(this.name);
        }
    }]);

    return _class;
}())('张三');

person.sayName(); // 张三

/**
 * Class的继承，子类必须在 constructor 方法中调用 super 方法，否则实例化的时候会报错，因为子类没有自己的 this 对象，
 * 而是继承父类的 this 对象，然后对其进行加工，如果不调用 super 方法，子类就得不到 this 对象。
 * */

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
    }]);

    return Point;
}();
// 在子类的构造函数中，只有调用 super 之后，才可以使用 this 关键字，否则报错。


var ColorPoint = function (_Point) {
    _inherits(ColorPoint, _Point);

    function ColorPoint(x, y, color) {
        _classCallCheck(this, ColorPoint);

        // 调用父类的constructor(x, y)

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPoint).call(this, x, y));
        //this.color = color; // ReferenceError


        _this.color = color;
        return _this;
    }

    _createClass(ColorPoint, [{
        key: 'toString',
        value: function toString() {
            return this.color + ' ' + _get(Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this); // 调用父类的toString()
        }
    }]);

    return ColorPoint;
}(Point);

var cp = new ColorPoint(2, 5, 'red');
console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true
// 两条继承链。可以这样理解：
// 作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；
// 作为一个构造函数，子类（B）的原型（prototype属性）是父类的实例。
console.log(ColorPoint.__proto__ === Point); // true
console.log(ColorPoint.prototype.__proto__ === Point.prototype); // true

/**
 * Object.getPrototypeOf()
 * 从子类上获取父类。一般用于判断一个类是否继承了另一个类。
 * */
console.log(Object.getPrototypeOf(ColorPoint) === Point); // true