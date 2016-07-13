/**
 *   Created by sammy on 2016/6/26
 */
'use strict';

var _templateObject = _taggedTemplateLiteral(['The total is ', ' (', ' with tax)'], ['The total is ', ' (', ' with tax)']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var total = 30;
var msg = passthru(_templateObject, total, total * 1.05);

function passthru(literals) {
    var result = '';
    var i = 0;

    while (i < literals.length) {
        console.log('-----------' + i + '-------------');
        console.log(literals[i]);
        result += literals[i++];
        if (i < arguments.length) {
            console.log('**********' + i + '*********');
            console.log(arguments[i]);
            console.log('***********************');
            result += arguments[i];
        }
    }

    return result;
}

console.log(msg); // "The total is 30 (31.5 with tax)"