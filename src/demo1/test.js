'use strict'

var obj = {
	first:"hello",
	second:"world"
}
for(let key in obj){
	console.log(key);
	console.log(obj[key]);
}

