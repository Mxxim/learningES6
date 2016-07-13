/**
 *   Created by sammy on 2016/7/5
 */
'use strict';

/**
 * Math的扩展，添加了17个静态方法，只能在Math对象上调用。
 * */

// Math.trunc()：去除一个数的小数部分，返回整数
console.log(`${Math.trunc(12.9)}`); // 12
console.log(`${Math.trunc('12.9')}`); // 12
console.log(`${Math.trunc('foo')}`); // NaN

// Math.sign()：判断一个数是正数、负数还是零
console.log(`${Math.sign(45)}`); // 1
console.log(`${Math.sign(-45)}`); // -1
console.log(`${Math.sign(0)}`); // 0
console.log(`${Math.sign(-0)}`); // 0
console.log(`${Math.sign('foo')}`); // NaN

// Math.cbrt()：计算一个数的立方根
console.log(`${Math.cbrt(27)}`); // 3
console.log(`${Math.cbrt('27')}`); // 3
console.log(`${Math.cbrt('foo')}`); // NaN

// Math.clz32()：返回一个数的32位无符号整数形式有多少个前导0
console.log(Math.clz32(0)); // 32
console.log(Math.clz32(1)); // 31
console.log(Math.clz32(1 << 1)); // 30 左移运算符
console.log(Math.clz32(0b01000000000000000000000000000000)); // 1

// Math.imul()：返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位的带符号整数。
console.log(0x7fffffff,0x7fffffff); //
console.log(Math.imul(0x7fffffff,0x7fffffff)); // 1

// Math.fround()：返回一个数的单精度浮点数形式。

// Math.hypot()：返回所有参数的平方和的平方根。
console.log(Math.hypot(3,4)); // 5

// Math.expm1()：返回ex - 1，即Math.exp(x) - 1。

// Math.loglp()：返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。

// Math.log10(x)：返回以10为底的x的对数。如果x小于0，则返回NaN。

// Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。
console.log(Math.log2(1 << 29)); // 29

// Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
// Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
// Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
// Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
// Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
// Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

// ** 指数运算符 (ES7)
let a = 2,b = 3;
a **= 2;    // 等价于 a = a * a
console.log(a);
b **= 3; // 等价于 b = b * b * b
console.log(b);
console.log(2 ** 2);  // 4


