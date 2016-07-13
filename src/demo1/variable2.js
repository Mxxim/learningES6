'use strict'

/**
	对象的解构赋值，变量必须与属性同名才能取到值
	适用于var、let、const
**/

var { bar, foo } = { foo: "aaa", bar: "bbb" }; // 等价于 var { bar: bar, foo: foo } = { foo: "aaa", bar: "bbb" };
console.log(foo) // "aaa"
console.log(bar) // "bbb"

var { baz } = { foo: "aaa", bar: "bbb" };
console.log(baz) // undefined

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;	// 实际上是后者（f和1）被赋值
console.log(f) // 'hello'
console.log(l) // 'world'

var { foo: baz } = { foo: "aaa", bar: "bbb" };
console.log("baz = "+baz) // "aaa"
console.log("foo = "+foo) // error: foo is not defined，但是用node6.0运行的结果是 "aaa"

let a;
({a} = {a: 1});	// 注意：打上括号！,否则会被误以为{}是代码块
console.log("a = "+a); // 1

// 嵌套赋值
let obj2 = {
	p:[
		"hello",
		{q:"world"}
	]
}
let {p:[i,{q}]} = obj2;	// 注意：p不是变量，p指的是模式
console.log(i); // "hello"
console.log(q); // "world"