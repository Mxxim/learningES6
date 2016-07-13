/**
 *   Created by sammy on 2016/7/11
 */
'use strict';

function* gene(){
    yield "Hello";
    yield "World";
}
var geneVal = gene();
console.log(geneVal.next()); // { value: 'Hello', done: false }
console.log(geneVal.next()); // { value: 'World', done: false }

// 与Iterator接口的关系
/**
 * Generator函数赋值给Symbol.iterator属性，
 * 从而使得myIterable对象具有了Iterator接口，可以被...运算符遍历了。
 * */
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...myIterable]); // [1, 2, 3]
/**
 * Generator函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
 * */
function* gen(){
    // some code
}
var g = gen();
console.log(g[Symbol.iterator]() === g); // true

/**
 * next()带上参数：表示上一个yield语句的返回值。
 * 在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
 * */
function* foo(x){
    var y = 2 * (yield(x + 1));
    var z = yield (y/3);
    return (x + y + z);
}
var a = foo(5);
console.log(a.next()); // { value: 6, done: false }
console.log(a.next()); // { value: NaN, done: false }
console.log(a.next()); // { value: NaN, done: true }
var b = foo(5);
console.log(b.next()); // { value: 6, done: false }
console.log(b.next(12)); // { value: 8, done: false }
console.log(b.next(13)); // { value: 42, done: true }

function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();
console.log(genObj.next()); // Started
console.log(genObj.next('a')); // 1. a / { value: undefined, done: false }
console.log(genObj.next('b')); // 2. b / { value: 'result', done: true }

/**
 * for...of循环可以自动遍历Generator函数，且此时不再需要调用next方法。
 * 一旦next方法的返回对象的done属性为true，for...of循环就会中止
 * */
function* foo2(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 5;
}
for(let v of foo2()){
    console.log(v); // 1 2 3 4
}

// 原生的JavaScript对象没有遍历接口，无法使用 for...of 循环
// 使用 Generator 函数为它加上这个遍历器接口，另一种加上遍历器接口的方法是将Generator函数加到对象的Symbol.iterator属性上面。
function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let jane = { first: 'Jane', last: 'Doe' };

for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe

function* objectEntries2() {
    let propKeys = Object.keys(this);

    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

let jane2 = { first: 'Jane', last: 'Doe' };

jane2[Symbol.iterator] = objectEntries2;

for (let [key, value] of jane2) {
    console.log(`${key}: ${value}`);
}
// first: Jane
// last: Doe

/**
 * Generator.prototype.throw()
 * Generator.prototype.return()
 * */

/**
 *  yield* 语句：表明返回的是一个遍历器对象。相当于在Generator函数内部，部署一个 for...of 循环。
 * */
function* inner(){
    yield "hello!";
    yield "world!!";
}
function* outer1(){
    yield "open";
    yield inner();
    yield "close";
}
var gen3 = outer1();
for(let v of gen3){
    console.log(v); // open  {}  close
}

function* outer2(){
    yield "open";
    yield* inner();
    yield "close";
}
var gen4 = outer2();
for(let v of gen4){
    console.log(v); // open  hello!  world!!  close
}

// yield* 后面跟数组，由于数组原生支持遍历器，因此就会遍历数组成员
function* gen5(){
    yield* ["a","b","c"];
}
for(let v of gen5()){
    console.log(v); // a  b  c
}

/**
 *  yield*命令可以很方便地取出嵌套数组的所有成员。
 * */

function* iterTree(tree) {
    if (Array.isArray(tree)) {
        for(let i=0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } else {
        yield tree;
    }
}

const tree2 = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree2)) {
    console.log(x);
}
// a
// b
// c
// d
// e

/**
 * 使用yield*语句遍历完全二叉树。
 */
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
    if (t) {
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

// 下面生成二叉树
function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
    result.push(node);
}

console.log(result); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

