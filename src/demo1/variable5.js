'use strict'

/**
	函数参数的解构赋值
**/
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3


[[1, 2], [3, 4]].map(([a, b]) => a + b); // [ 3, 7 ]



function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]


function move({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]


[1, undefined, 3].map((x = 'yes') => x); // [ 1, 'yes', 3 ]
