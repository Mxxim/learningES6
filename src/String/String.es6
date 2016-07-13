/**
 *   Created by sammy on 2016/6/25
 */
'use strict';

/**
 字符串的扩展（这里只用了部分扩展）
 **/

// 遍历字符串
var str = "sammy";
for(let s in str){
    console.log(s); // 0 1 2 3 4
}
for(let s of str){
    console.log(s); // s a m m y
}


// at()，node v6.0貌似没有这个方法
// 与原来charAt()功能一样，但是可以识别码点大于0xFFFF的字符
console.log('abc'.charAt(0)) // "a"
console.log('𠮷'.charAt(0)) // "\uD842"

// console.log('abc'.at(0)) // "a"
// console.log('𠮷'.at(0)) // "𠮷"


// includes(s,n) 是否找到了参数字符串，第二个参数表示开始搜索位置
// startsWith(s,n) 参数字符串是否在源字符串头部，第二个参数表示开始搜索位置
// endsWith(s,n) 参数字符串是否在源字符串尾部，第二个参数表示针对前n个字符
var name = 'sammy';
console.log(name.includes('ay')); // false
console.log(name.includes('my')); // true
console.log(name.startsWith('sa')); // true
console.log(name.startsWith('say')); // false
console.log(name.endsWith('my')); // true

var urName = 'Xiao min';
console.log(urName.includes('o',3)); // true
console.log(urName.startsWith('m',3)); // false
console.log(urName.startsWith('m',5)); // true
console.log(urName.endsWith('Xiao',4)); // true

// repeat() 重复
var str2 = 'hello ';
console.log(str2.repeat(3)); // hello hello hello

// padStart()和padEnd() 补全字符串或者提示字符串,这是ES7的功能
// console.log('3'.padStart(3,'0')); // 003
// var str3 = 'content';
// str3.padStart(5,'*');
// str3.padEnd(5,'*');
// console.log(str3);
//
// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

// 模板字符串${ }，里面的内容将成为JS代码，大括号内可以放任意JS表达式；
// 标签模板：紧跟在函数名后面
var major = 'software',number = 3;
var str3 = `Sammy is a student of ${major+' '+number}`;
console.log(str3); // Sammy is a student of software 3
console.log`123`; // ['123']