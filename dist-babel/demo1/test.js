'use strict';

var obj = {
	first: "hello",
	second: "world"
};
for (var key in obj) {
	console.log(key);
	console.log(obj[key]);
}