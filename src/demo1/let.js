
"use strict";

// let定义的变量只能在该代码块内有效。很适用于for循环
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

var b = [];
for (let j = 0; j < 10; j++) {
  b[j] = function () {
    console.log(j);
  };
}
b[6](); // 6

// 变量提升，tmp被覆盖
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}
f(); // undefined


var foo = "hello";
let bar = "world";

function test(){
	
	console.log(foo);
	console.log(bar);
}
test();	// 两个都输出了