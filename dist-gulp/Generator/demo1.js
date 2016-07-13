/**
 *   Created by sammy on 2016/7/11
 */
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _marked = [gene, gen, foo, dataConsumer, foo2, objectEntries, objectEntries2, inner, outer1, outer2, gen5, iterTree, inorder].map(regeneratorRuntime.mark);

function gene() {
    return regeneratorRuntime.wrap(function gene$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return "Hello";

                case 2:
                    _context.next = 4;
                    return "World";

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
var geneVal = gene();
console.log(geneVal.next()); // { value: 'Hello', done: false }
console.log(geneVal.next()); // { value: 'World', done: false }

// 与Iterator接口的关系
/**
 * Generator函数赋值给Symbol.iterator属性，
 * 从而使得myIterable对象具有了Iterator接口，可以被...运算符遍历了。
 * */
var myIterable = {};
myIterable[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return 1;

                case 2:
                    _context2.next = 4;
                    return 2;

                case 4:
                    _context2.next = 6;
                    return 3;

                case 6:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee, this);
});

console.log([].concat(_toConsumableArray(myIterable))); // [1, 2, 3]
/**
 * Generator函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
 * */
function gen() {
    return regeneratorRuntime.wrap(function gen$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                case "end":
                    return _context3.stop();
            }
        }
    }, _marked[1], this);
}

// some code
var g = gen();
console.log(g[Symbol.iterator]() === g); // true

/**
 * next()带上参数：表示上一个yield语句的返回值。
 * 在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
 * */
function foo(x) {
    var y, z;
    return regeneratorRuntime.wrap(function foo$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    _context4.next = 2;
                    return x + 1;

                case 2:
                    _context4.t0 = _context4.sent;
                    y = 2 * _context4.t0;
                    _context4.next = 6;
                    return y / 3;

                case 6:
                    z = _context4.sent;
                    return _context4.abrupt("return", x + y + z);

                case 8:
                case "end":
                    return _context4.stop();
            }
        }
    }, _marked[2], this);
}
var a = foo(5);
console.log(a.next()); // { value: 6, done: false }
console.log(a.next()); // { value: NaN, done: false }
console.log(a.next()); // { value: NaN, done: true }
var b = foo(5);
console.log(b.next()); // { value: 6, done: false }
console.log(b.next(12)); // { value: 8, done: false }
console.log(b.next(13)); // { value: 42, done: true }

function dataConsumer() {
    return regeneratorRuntime.wrap(function dataConsumer$(_context5) {
        while (1) {
            switch (_context5.prev = _context5.next) {
                case 0:
                    console.log('Started');
                    _context5.t0 = console;
                    _context5.next = 4;
                    return;

                case 4:
                    _context5.t1 = _context5.sent;
                    _context5.t2 = "1. " + _context5.t1;

                    _context5.t0.log.call(_context5.t0, _context5.t2);

                    _context5.t3 = console;
                    _context5.next = 10;
                    return;

                case 10:
                    _context5.t4 = _context5.sent;
                    _context5.t5 = "2. " + _context5.t4;

                    _context5.t3.log.call(_context5.t3, _context5.t5);

                    return _context5.abrupt("return", 'result');

                case 14:
                case "end":
                    return _context5.stop();
            }
        }
    }, _marked[3], this);
}

var genObj = dataConsumer();
console.log(genObj.next()); // Started
console.log(genObj.next('a')); // 1. a / { value: undefined, done: false }
console.log(genObj.next('b')); // 2. b / { value: 'result', done: true }

/**
 * for...of循环可以自动遍历Generator函数，且此时不再需要调用next方法。
 * 一旦next方法的返回对象的done属性为true，for...of循环就会中止
 * */
function foo2() {
    return regeneratorRuntime.wrap(function foo2$(_context6) {
        while (1) {
            switch (_context6.prev = _context6.next) {
                case 0:
                    _context6.next = 2;
                    return 1;

                case 2:
                    _context6.next = 4;
                    return 2;

                case 4:
                    _context6.next = 6;
                    return 3;

                case 6:
                    _context6.next = 8;
                    return 4;

                case 8:
                    return _context6.abrupt("return", 5);

                case 9:
                case "end":
                    return _context6.stop();
            }
        }
    }, _marked[4], this);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = foo2()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;

        console.log(v); // 1 2 3 4
    }

    // 原生的JavaScript对象没有遍历接口，无法使用 for...of 循环
    // 使用 Generator 函数为它加上这个遍历器接口，另一种加上遍历器接口的方法是将Generator函数加到对象的Symbol.iterator属性上面。
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function objectEntries(obj) {
    var propKeys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propKey;

    return regeneratorRuntime.wrap(function objectEntries$(_context7) {
        while (1) {
            switch (_context7.prev = _context7.next) {
                case 0:
                    propKeys = Reflect.ownKeys(obj);
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context7.prev = 4;
                    _iterator2 = propKeys[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _context7.next = 13;
                        break;
                    }

                    propKey = _step2.value;
                    _context7.next = 10;
                    return [propKey, obj[propKey]];

                case 10:
                    _iteratorNormalCompletion2 = true;
                    _context7.next = 6;
                    break;

                case 13:
                    _context7.next = 19;
                    break;

                case 15:
                    _context7.prev = 15;
                    _context7.t0 = _context7["catch"](4);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context7.t0;

                case 19:
                    _context7.prev = 19;
                    _context7.prev = 20;

                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }

                case 22:
                    _context7.prev = 22;

                    if (!_didIteratorError2) {
                        _context7.next = 25;
                        break;
                    }

                    throw _iteratorError2;

                case 25:
                    return _context7.finish(22);

                case 26:
                    return _context7.finish(19);

                case 27:
                case "end":
                    return _context7.stop();
            }
        }
    }, _marked[5], this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

var jane = { first: 'Jane', last: 'Doe' };

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = objectEntries(jane)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _step3$value = _slicedToArray(_step3.value, 2);

        var key = _step3$value[0];
        var value = _step3$value[1];

        console.log(key + ": " + value);
    }
    // first: Jane
    // last: Doe
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

function objectEntries2() {
    var propKeys, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, propKey;

    return regeneratorRuntime.wrap(function objectEntries2$(_context8) {
        while (1) {
            switch (_context8.prev = _context8.next) {
                case 0:
                    propKeys = Object.keys(this);
                    _iteratorNormalCompletion4 = true;
                    _didIteratorError4 = false;
                    _iteratorError4 = undefined;
                    _context8.prev = 4;
                    _iterator4 = propKeys[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                        _context8.next = 13;
                        break;
                    }

                    propKey = _step4.value;
                    _context8.next = 10;
                    return [propKey, this[propKey]];

                case 10:
                    _iteratorNormalCompletion4 = true;
                    _context8.next = 6;
                    break;

                case 13:
                    _context8.next = 19;
                    break;

                case 15:
                    _context8.prev = 15;
                    _context8.t0 = _context8["catch"](4);
                    _didIteratorError4 = true;
                    _iteratorError4 = _context8.t0;

                case 19:
                    _context8.prev = 19;
                    _context8.prev = 20;

                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }

                case 22:
                    _context8.prev = 22;

                    if (!_didIteratorError4) {
                        _context8.next = 25;
                        break;
                    }

                    throw _iteratorError4;

                case 25:
                    return _context8.finish(22);

                case 26:
                    return _context8.finish(19);

                case 27:
                case "end":
                    return _context8.stop();
            }
        }
    }, _marked[6], this, [[4, 15, 19, 27], [20,, 22, 26]]);
}

var jane2 = { first: 'Jane', last: 'Doe' };

jane2[Symbol.iterator] = objectEntries2;

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
    for (var _iterator5 = jane2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _step5$value = _slicedToArray(_step5.value, 2);

        var key = _step5$value[0];
        var value = _step5$value[1];

        console.log(key + ": " + value);
    }
    // first: Jane
    // last: Doe

    /**
     * Generator.prototype.throw()
     * Generator.prototype.return()
     * */

    /**
     *  yield* 语句：表明返回的是一个遍历器对象。相当于在Generator函数内部，部署一个 for...of 循环。
     * */
} catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
        }
    } finally {
        if (_didIteratorError5) {
            throw _iteratorError5;
        }
    }
}

function inner() {
    return regeneratorRuntime.wrap(function inner$(_context9) {
        while (1) {
            switch (_context9.prev = _context9.next) {
                case 0:
                    _context9.next = 2;
                    return "hello!";

                case 2:
                    _context9.next = 4;
                    return "world!!";

                case 4:
                case "end":
                    return _context9.stop();
            }
        }
    }, _marked[7], this);
}
function outer1() {
    return regeneratorRuntime.wrap(function outer1$(_context10) {
        while (1) {
            switch (_context10.prev = _context10.next) {
                case 0:
                    _context10.next = 2;
                    return "open";

                case 2:
                    _context10.next = 4;
                    return inner();

                case 4:
                    _context10.next = 6;
                    return "close";

                case 6:
                case "end":
                    return _context10.stop();
            }
        }
    }, _marked[8], this);
}
var gen3 = outer1();
var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
    for (var _iterator6 = gen3[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _v = _step6.value;

        console.log(_v); // open  {}  close
    }
} catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
        }
    } finally {
        if (_didIteratorError6) {
            throw _iteratorError6;
        }
    }
}

function outer2() {
    return regeneratorRuntime.wrap(function outer2$(_context11) {
        while (1) {
            switch (_context11.prev = _context11.next) {
                case 0:
                    _context11.next = 2;
                    return "open";

                case 2:
                    return _context11.delegateYield(inner(), "t0", 3);

                case 3:
                    _context11.next = 5;
                    return "close";

                case 5:
                case "end":
                    return _context11.stop();
            }
        }
    }, _marked[9], this);
}
var gen4 = outer2();
var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
    for (var _iterator7 = gen4[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var _v2 = _step7.value;

        console.log(_v2); // open  hello!  world!!  close
    }

    // yield* 后面跟数组，由于数组原生支持遍历器，因此就会遍历数组成员
} catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
        }
    } finally {
        if (_didIteratorError7) {
            throw _iteratorError7;
        }
    }
}

function gen5() {
    return regeneratorRuntime.wrap(function gen5$(_context12) {
        while (1) {
            switch (_context12.prev = _context12.next) {
                case 0:
                    return _context12.delegateYield(["a", "b", "c"], "t0", 1);

                case 1:
                case "end":
                    return _context12.stop();
            }
        }
    }, _marked[10], this);
}
var _iteratorNormalCompletion8 = true;
var _didIteratorError8 = false;
var _iteratorError8 = undefined;

try {
    for (var _iterator8 = gen5()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var _v3 = _step8.value;

        console.log(_v3); // a  b  c
    }

    /**
     *  yield*命令可以很方便地取出嵌套数组的所有成员。
     * */
} catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
        }
    } finally {
        if (_didIteratorError8) {
            throw _iteratorError8;
        }
    }
}

function iterTree(tree) {
    var i;
    return regeneratorRuntime.wrap(function iterTree$(_context13) {
        while (1) {
            switch (_context13.prev = _context13.next) {
                case 0:
                    if (!Array.isArray(tree)) {
                        _context13.next = 9;
                        break;
                    }

                    i = 0;

                case 2:
                    if (!(i < tree.length)) {
                        _context13.next = 7;
                        break;
                    }

                    return _context13.delegateYield(iterTree(tree[i]), "t0", 4);

                case 4:
                    i++;
                    _context13.next = 2;
                    break;

                case 7:
                    _context13.next = 11;
                    break;

                case 9:
                    _context13.next = 11;
                    return tree;

                case 11:
                case "end":
                    return _context13.stop();
            }
        }
    }, _marked[11], this);
}

var tree2 = ['a', ['b', 'c'], ['d', 'e']];

var _iteratorNormalCompletion9 = true;
var _didIteratorError9 = false;
var _iteratorError9 = undefined;

try {
    for (var _iterator9 = iterTree(tree2)[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var x = _step9.value;

        console.log(x);
    }
    // a
    // b
    // c
    // d
    // e

    /**
     * 使用yield*语句遍历完全二叉树。
     */
    // 下面是二叉树的构造函数，
    // 三个参数分别是左树、当前节点和右树
} catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
            _iterator9.return();
        }
    } finally {
        if (_didIteratorError9) {
            throw _iteratorError9;
        }
    }
}

function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function inorder(t) {
    return regeneratorRuntime.wrap(function inorder$(_context14) {
        while (1) {
            switch (_context14.prev = _context14.next) {
                case 0:
                    if (!t) {
                        _context14.next = 5;
                        break;
                    }

                    return _context14.delegateYield(inorder(t.left), "t0", 2);

                case 2:
                    _context14.next = 4;
                    return t.label;

                case 4:
                    return _context14.delegateYield(inorder(t.right), "t1", 5);

                case 5:
                case "end":
                    return _context14.stop();
            }
        }
    }, _marked[12], this);
}

// 下面生成二叉树
function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}
var tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
var _iteratorNormalCompletion10 = true;
var _didIteratorError10 = false;
var _iteratorError10 = undefined;

try {
    for (var _iterator10 = inorder(tree)[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var node = _step10.value;

        result.push(node);
    }
} catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion10 && _iterator10.return) {
            _iterator10.return();
        }
    } finally {
        if (_didIteratorError10) {
            throw _iteratorError10;
        }
    }
}

console.log(result); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']