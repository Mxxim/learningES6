'use strict'

/**
	变量解构赋值的用途
**/

// 用途一：交换变量的值
var x = "x",y = "y";
[x,y] = [y,x];
console.log(x,y); // "y" "x"


// 用途二：从函数返回多个值
function cat(){
	let color = "black";
	let len = 0.5;

	return [color,len];
}
let [color,len] = cat();
console.log(color,len); // black 0.5

function dog(){
	let obj = {
		color2 : "white",
		len2 : 1
	}

	return obj;
}
let {color2,len2} = dog();
console.log(color2,len2); // white 1


// 用途三：函数参数的定义
// 方便地将一组参数与变量名对应起来。
// 参数是一组有次序的值
function f1([x, y, z]) {
	console.log(x,y,z);	// 1,2,3
}
f1([1, 2, 3]);

// 参数是一组无次序的值
function f2({x, y, z}) { 
	console.log(x,y,z);	// 1,2,3
}
f2({z: 3, y: 2, x: 1});


// 用途四：提取JSON数据
var jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data : number } = jsonData;

console.log(id, status, number); // 42, 'OK', [867, 5309]


// 用途五：指定函数参数的默认值
// 这样可以避免在函数体中出现 var foo = config.foo || 'default foo';这样的语句。
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
};


// 用途六：遍历Map结构
// 需要用到 for...of 来遍历
var mp = new Map();
mp.set('first','hello');
mp.set('second','sammy');
for(let [key,value] of mp){
	console.log(key,value);
	//console.log(mp.get(key));
}
console.log("-----------只遍历key------------");
for(let [key] of mp){
	console.log(key);
}
console.log("-----------只遍历value------------");
for(let [,value] of mp){
	console.log(value);
}


// 用途七：输入模块的指定方法
// 加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
const { SourceMapConsumer, SourceNode } = require("source-map");


