/**
 *   Created by sammy on 2016/7/11
 */
'use strict';

/**
 *  Promise是异步编程的一种解决方案。Promise对象代表一个异步操作。
 *  then()方法指定的回调函数，在当前脚本所有同步任务执行完才会执行。
 * */
let promise = new Promise(function(resolve,reject){
    console.log('Promise');
    resolve();
});

promise.then(function(){
    console.log("Resolved");
});

console.log("Hi!");

// Promise
// Hi!
// Resolved

/**
 * Promise.prototype.then()返回的是一个新的 Promise 实例，因此也可以采用链式写法。
 * 上一个回调函数完成以后会将返回结果作为参数，传入下一个回调函数。
 * */
var promise1 = new Promise((resolve,reject) => {
    console.log("promise!");
    var f = true;
    if(f){
        resolve("成功啦！");
    }else{
        reject(new Error("失败啦！"));
    }
});
promise1.then(
    data => {
        // resolved
        console.log("the first callback");
        return data;
}).then(
    data => {
        console.log("the second callback");
        console.log(data);
},err => {
    console.log(err);
});

/**
 * Promise.prototype.catch()：相当于.then(null,rejection)，用于指定发生错误时的回调函数。
 * reject()方法的作用等同于抛出错误。
 * 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
 * */
var promise3 = new Promise(function(resolve, reject) {
    //throw new Error('test');
    // 或者
    reject(new Error('test'));
    // 或者
    //try {
    //    throw new Error('test');
    //} catch(e) {
    //    reject(e);
    //}
});
promise3.catch(function(error) {    // 捕获promise抛出的错误
    console.log(error);
});
// Error: test

// bad
promise
    .then(function(data) {
        // success
    }, function(err) {
        // error
    });

// good
promise
    .then(function(data) { //cb
        // success
    })
    .catch(function(err) {
        // error
    });

/**
 *
 * */