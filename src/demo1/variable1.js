'use strict'

/**
	数组的解构赋值
	适用于var、let、const
**/

var [a, b] = [1, 2];
let [c,...d] = [1,2,3,4];

console.log(a);	// 1
console.log(b);	// 2
console.log(c);	// 1
console.log(d);	// [2,3,4]

// 解构失败，会被赋undefined
let [x, y, ...z] = ['a'];
console.log(x);	// "a"
console.log(y);	// undefined
console.log(z);	// []

var [foo] = [];
console.log(foo); // undefined

// 不完全结构，如果把 f 改为 ...f 则输出1  2,3  4
let [e,[f],g] = [1,[2,3],4];
console.log(e); // 1
console.log(f); // 2
console.log(g); // 4

/**
	解构赋值允许赋予默认值，
	默认值允许为解构赋值的其他变量
**/
let [a,b = 2] = [1];
console.log(a); // 1
console.log(b); // 2

let [a,b = 2] = [1,3];
console.log(a); // 1
console.log(b); // 3

let [a = 1, b = a] = [];
console.log(a); // 1
console.log(b); // 1