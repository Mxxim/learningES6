/**
 *   Created by sammy on 2016/6/26
 */
'use strict';

var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
    var result = '';
    var i = 0;

    while (i < literals.length) {
        console.log(`-----------${i}-------------`);
        console.log(literals[i]);
        result += literals[i++];
        if (i < arguments.length) {
            console.log(`**********${i}*********`);
            console.log(arguments[i]);
            console.log(`***********************`);
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg) // "The total is 30 (31.5 with tax)"