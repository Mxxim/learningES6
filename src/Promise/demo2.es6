/**
 *   Created by sammy on 2016/7/12
 */
'use strict';

/**
 *  Promise.all()：用于将多个Promise实例，包装成一个新的Promise实例。
 * */


/**
 *  Promise.race()：同样是将多个Promise实例，包装成一个新的Promise实例。
 * */

/**
 *  Promise.resolve()：将现有对象转为Promise对象。
 *  参数有四种情况：
 *  1、一个Promise实例：原封不动地返回这个实例。
 *  2、一个具有then方法的对象：Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法
 *  3、参数不是具有then方法的对象，或根本就不是对象：返回一个新的Promise对象，状态为Resolved
 *  4、不带有任何参数：直接返回一个Resolved状态的Promise对象。
 * */

/**
 *  Promise.reject()：返回一个新的Promise实例，该实例的状态为rejected。
 * */

/**
*  Promise.prototype.done()：Promise的回调链中，要是最后一个回调中抛出错误，是无法捕捉到的（因为Promise内部的错误不会冒泡到全局）。
 *  因此，将done(）方法永远处于回调链的尾端，保证抛出任何可能出现的错误。
* */

// 加载图片
const preloadImage = (path) => {
    return new Promise(
        (resolve,reject) => {
            var image = new Image();
            image.onload = resolve;
            image.onerror = reject;
            image.src = path;
        }
    );
};