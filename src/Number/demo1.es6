/**
 *   Created by sammy on 2016/7/5
 */
'use strict';

/**
 * Number的扩展，扩展的方法基本上都为静态方法，直接在Number对象上调用
 * */

// ES6提供了二进制和八进制数值的新写法，分别用前缀0b、0B 和 0o、0O
console.log(Number(0B1101)); // 13
console.log(Number(0O1101)); // 577

// Number.isFinite(number)：检查一个数值是否非无穷
// Number.isNaN(number)：检查一个数值是否为NaN
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(0.8)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite('foo')); // false
console.log(Number.isFinite('15')); // false
console.log(Number.isFinite(true)); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
console.log(Number.isNaN(15)); // false
console.log(Number.isNaN('15')); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(9/NaN)); // true
console.log(Number.isNaN('true'/0)); // true
console.log(Number.isNaN('true'/'true')); // true

// Number.parseInt(num)、Number.parseFloat(num)替代原来ES5写法 parseInt(num)、parseFloat(num)
// 目的是减少全局性的方法。

// Number.isInteger()：判断一个数值是否为整数。注意：3 和 3.0 都被判断为整数。

// Number.EPSILON 一个极小常量，一般认为如果两个数的误差能够小于Number.EPSILON，就可以认为得到了正确的结果。
console.log(0.1 + 0.2); // 0.30000000000000004
function withinErrorMargin (left, right) {  // 误差检测函数
    return Math.abs(left - right) < Number.EPSILON;
}
console.log(withinErrorMargin(0.1 + 0.2, 0.3)); // true
console.log(withinErrorMargin(0.2 + 0.2, 0.3)); // false

// Javascript能表示的整数范围在-2^53到2^53之间（不包含端点）,超出范围该数就不精确了。
// Number.MAX_SAFE_INTEGER 表示整数上限
// Number.MIN_SAFE_INTEGER 表示整数下限
// Number.isSafeInteger()：判断一个整数是否落在这个范围之内
console.log(Number.MAX_SAFE_INTEGER == Math.pow(2,53)-1);   // true
console.log(Number.MIN_SAFE_INTEGER == -Number.MAX_SAFE_INTEGER);   // true

console.log(Number.isSafeInteger(5));   // true
console.log(Number.isSafeInteger(1.2)); // false

console.log(9007199254740993 === 9007199254740992); // true











