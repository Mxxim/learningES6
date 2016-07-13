/**
 *   Created by sammy on 2016/7/11
 */
'use strict';

/**
 * Generator 的应用：
 * 1、异步操作的同步化表达：等同于不需要写回调函数了
 * 2、控制流管理
 * 3、部署iterator接口
 * 4、作为数据结构
 * */

/**
 * 应用1：异步操作的同步化表达
 * */
var showshowLoadingScreen = () => {};
var loadUIDataAsynchronously = () => {};
var hideLoadingScreen = () => {};
function* loadUI() {
    showLoadingScreen();
    yield loadUIDataAsynchronously();
    hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next();

// 卸载UI
loader.next();

// 模拟 Ajax 异步请求。代码看上去几乎与同步操作的写法一样。
function* main(){
    var result = yield request("http:locathost/***");
    var resultJSON = JSON.parse(result);
    console.log(resultJSON.value);
}
function request(url){
    makeAjaxCall(url,function(res){
        it.next(res);
    });
}
var it = main();
it.next();   // 发送请求

//

/**
 * 应用2：控制流管理（比如操作顺序，防止回调深渊，防止重复调用Promise的then(function(){})）
 * */


/**
 * 应用3：部署iterator接口。例子见 demo1 中给对象添加 Iterator 接口使其可以 for...of 遍历的代码。
 * */

/**
 * 应用4：作为数据结构（数组结构）。
 * */

