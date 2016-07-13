/**
 *   Created by sammy on 2016/7/9
 */
'use strict';

// 属性的遍历
/**
 * ES6一共有5种方法可以遍历对象的属性。

 （1）for...in

 for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。

 （2）Object.keys(obj)

 Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。

 （3）Object.getOwnPropertyNames(obj)

 Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。

 （4）Object.getOwnPropertySymbols(obj)

 Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。

 （5）Reflect.ownKeys(obj)

 Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。

 以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

 首先遍历所有属性名为数值的属性，按照数字排序。
 其次遍历所有属性名为字符串的属性，按照生成时间排序。
 最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
 Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
 // ['2', '10', 'b', 'a', Symbol()]
 上面代码中，Reflect.ownKeys方法返回一个数组，包含了参数对象的所有属性。这个数组的属性次序是这样的，首先是数值属性2和10，其次是字符串属性b和a，最后是Symbol属性。
 *
 * */

// Object.setPrototypeOf()：设置原型对象
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto); // 将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性。
proto.y = 20;
proto.z = 40;
console.log(obj.x); // 10
console.log(obj.y); // 20
console.log(obj.z); // 40

// Object.getPrototypeOf()：用于读取一个对象的prototype对象
//console.log(obj.getPrototypeOf());  // node v6 不支持

// Object.keys(obj)：返回对象的属性，是一个数组。
// Object.values()：返回对象的属性值。（ES7）
// Object.entries()：返回对象的键值对。（ES7）
//let obj2 = { one: 1, two: 2 };
//for (let [k, v] of Object.entries(obj2)) {
//    console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
//}