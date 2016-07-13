'use strict'

/**
	字符串的解构赋值,
	有个length属性
**/
const [a,b,c,d,e] = "Sammy"
console.log(a); // S
console.log(b); // a
console.log(c); // m
console.log(d); // m
console.log(e); // y

let {length:len} = "Mxxim"
console.log("len = "+len); // 5