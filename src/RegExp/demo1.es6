/**
 *   Created by sammy on 2016/7/5
 */
'use strict';

/**
 * 正则的扩展，部分示例代码
 * */

// 字符串中有4个方法可以使用正则表达式：match（）、replace（）、search（）、split（）
// ES6将这4个方法都定义在RegExp对象上。
var reg = new RegExp(/abc/ig,'g');
var str = "abcdefg";
var f = str.match(reg);
console.log(f);

// 添加了 u 修饰符，表示“Unicode”模式，用来处理大于\uFFFF的 Unicode 字符。

// 可以在正则表达式中使用大括号表示 Unicode 字符，若没有 u 修饰符，则大括号会被解释为量词。
console.log(/a{2}/u.test('aa')); // true
console.log(/^\u{3}$/.test('uuu')); // true

// \S是预定义模式，匹配所有不是空格的字符。只有加了u修饰符，它才能正确匹配码点大于0xFFFF的Unicode字符。
console.log(/^\S$/u.test('𠮷')); // true
console.log(/^\S$/.test('')); // false

function codePointLength(text) {    // 返回字符串长度
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}
var s = '𠮷𠮷';
console.log(s.length); // 4
console.log(codePointLength(s)) // 2

// 添加了 y 修饰符，表示“sticky粘连”，全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始，
// 与 g 修饰符的区别在于，g 修饰符只要剩余位置中存在匹配就可，而 y 修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s)); // [ 'aaa', index: 0, input: 'aaa_aa_a' ]
console.log(r2.exec(s)); // [ 'aaa', index: 0, input: 'aaa_aa_a' ]

console.log(r1.exec(s)); // [ 'aa', index: 4, input: 'aaa_aa_a' ]
console.log(r2.exec(s)); // null

// 原来只支持先行断言和先行否定断言，现在 ES7 加入后行断言
// 先行断言：x只有在y前面才匹配，必须写成 /x(?=y)/。
// 比如，只匹配百分号之前的数字，要写成 /\d+(?=%)/。
// 先行否定断言：x只有不在y前面才匹配，必须写成/x(?!y)/。比如，只匹配不在百分号之前的数字，要写成/\d+(?!%)/。
var rate = "you have the money of 80%";
var warn = "you kown,100 is a perfect number";
console.log(/\d+(?=%)/g.exec(rate)); // [ '80', index: 22, input: 'you have the money of 80%' ]
console.log(/\d+(?!%)/g.exec(warn)); // [ '100', index: 9, input: 'you kown,100 is a perfect number' ]

// 后行断言：x只有在y后面才匹配，必须写成 /(?<=y)x/ （ES7）
var money = "I have $100 bill";
//console.log(/(?<=\$)\d+/g.exec(money));
//console.log(/(?<=\$)\d+/.exec('Benjamin Franklin is on the $100 bill') ); // node6 报语法错误


