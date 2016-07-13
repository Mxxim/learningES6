/**
 *   Created by sammy on 2016/7/13
 */
'use strict';

// 输出
export default function crc32() {
    // ...
}
// 输入
import crc32 from 'crc32';

// 输出
export function crc32() {
    // ...
};
// 输入
import {crc32} from 'crc32';

/**
 * 模块的继承
 * */
// circleplus 模块继承了 circle 模块
// circleplus.js
export * from 'circle';
export var e = 2.71828182846;
export default function(x) {
    return Math.exp(x);
}

/**
 * CommonJS模块输出的是被输出值的拷贝，一旦输出这个值，模块内部的变化就影响不到这个值。
 * ES6模块加载的实质。
 * 具体看：http://es6.ruanyifeng.com/#docs/module
 * */
