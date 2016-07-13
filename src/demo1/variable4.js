'use strict'

/**
	数值和布尔值的解构赋值，
	有个toString属性，
	等号右边若不是对象，会先转换为对象
**/

let {toString : x} = 123
let {toString : y} = true;
console.log(x); // [Function toString]
console.log(y); // [Function toString]
console.log(x === Number.prototype.toString); // true
console.log(y === Boolean.prototype.toString); // true

