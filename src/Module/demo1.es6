/**
 *   Created by sammy on 2016/7/13
 */
'use strict';

/**
 * 当前用的模块加载方案有：CommonJS（用于服务端）和AMD（用于浏览器）
 * 以上两个都是在运行时才能加载模块，对于CommonJS来说，它require生成一个模块对象，然后再调用这个对象上的各种方法。
 * ES6模块的静态化：编译时就能确定模块的依赖关系，以及输入和输出的变量。
 * 在ES6中，模块不是对象。
 * */

// 比如要从 fs 模块中加载 stat，exists，readFile 这三个方法，其他方法不加载。
// “编译时加载”，效率比CommonJS模块的加载方式高。
import { stat,exists,readFile } from 'fs'
import * as fs from 'fs'    // 整体加载


// 上面这句话在 Node 中会报错，因为Node的默认格式是CommonJS，目前还没决定怎么支持ES6模块，
// 所以，只能通过Babel这样的转码器，在Node里面使用ES6模块。
// 浏览器中使用ES6模块的语法如下所示，type是告诉浏览器foo.js是一个ES6模块
//<script type="module" src="foo.js"></script>

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
