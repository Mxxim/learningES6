'use strict';

/**
	变量解构赋值的用途
**/

// 用途一：交换变量的值

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var x = "x",
    y = "y";
var _ref = [y, x];
x = _ref[0];
y = _ref[1];

console.log(x, y); // "y" "x"

// 用途二：从函数返回多个值
function cat() {
	var color = "black";
	var len = 0.5;

	return [color, len];
}

var _cat = cat();

var _cat2 = _slicedToArray(_cat, 2);

var color = _cat2[0];
var len = _cat2[1];

console.log(color, len); // black 0.5

function dog() {
	var obj = {
		color2: "white",
		len2: 1
	};

	return obj;
}

var _dog = dog();

var color2 = _dog.color2;
var len2 = _dog.len2;

console.log(color2, len2); // white 1

// 用途三：函数参数的定义
// 方便地将一组参数与变量名对应起来。
// 参数是一组有次序的值
function f1(_ref2) {
	var _ref3 = _slicedToArray(_ref2, 3);

	var x = _ref3[0];
	var y = _ref3[1];
	var z = _ref3[2];

	console.log(x, y, z); // 1,2,3
}
f1([1, 2, 3]);

// 参数是一组无次序的值
function f2(_ref4) {
	var x = _ref4.x;
	var y = _ref4.y;
	var z = _ref4.z;

	console.log(x, y, z); // 1,2,3
}
f2({ z: 3, y: 2, x: 1 });

// 用途四：提取JSON数据
var jsonData = {
	id: 42,
	status: "OK",
	data: [867, 5309]
};

var id = jsonData.id;
var status = jsonData.status;
var number = jsonData.data;


console.log(id, status, number); // 42, 'OK', [867, 5309]

// 用途五：指定函数参数的默认值
// 这样可以避免在函数体中出现 var foo = config.foo || 'default foo';这样的语句。
jQuery.ajax = function (url, _ref5)
// ... more config
{
	// ... do stuff

	var _ref5$async = _ref5.async;
	var async = _ref5$async === undefined ? true : _ref5$async;
	var _ref5$beforeSend = _ref5.beforeSend;
	var beforeSend = _ref5$beforeSend === undefined ? function () {} : _ref5$beforeSend;
	var _ref5$cache = _ref5.cache;
	var cache = _ref5$cache === undefined ? true : _ref5$cache;
	var _ref5$complete = _ref5.complete;
	var complete = _ref5$complete === undefined ? function () {} : _ref5$complete;
	var _ref5$crossDomain = _ref5.crossDomain;
	var crossDomain = _ref5$crossDomain === undefined ? false : _ref5$crossDomain;
	var _ref5$global = _ref5.global;
	var global = _ref5$global === undefined ? true : _ref5$global;
};

// 用途六：遍历Map结构
// 需要用到 for...of 来遍历
var mp = new Map();
mp.set('first', 'hello');
mp.set('second', 'sammy');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = mp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var _step$value = _slicedToArray(_step.value, 2);

		var key = _step$value[0];
		var value = _step$value[1];

		console.log(key, value);
		//console.log(mp.get(key));
	}
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

console.log("-----------只遍历key------------");
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = mp[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var _step2$value = _slicedToArray(_step2.value, 1);

		var key = _step2$value[0];

		console.log(key);
	}
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

console.log("-----------只遍历value------------");
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
	for (var _iterator3 = mp[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		var _step3$value = _slicedToArray(_step3.value, 2);

		var value = _step3$value[1];

		console.log(value);
	}

	// 用途七：输入模块的指定方法
	// 加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
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

var _require = require("source-map");

var SourceMapConsumer = _require.SourceMapConsumer;
var SourceNode = _require.SourceNode;