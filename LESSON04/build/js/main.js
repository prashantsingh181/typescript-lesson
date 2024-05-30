"use strict";
// interface PostId = stringOrNumber  // doesn't work
// Literal Types
let myName;
// myName = "John" // doesn't work
let userName;
userName = "Amy";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    // function that doesn't return anything return void type data
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {  // same as above
//   (a: number, b: number): number
// }
let multiply = function (e, f) {
    return e * f;
};
logMsg(multiply(2, 4));
let addAll = function (a, b, c) {
    //optional parameter c (optional parameters should be at the last, all the required parameters come before optional parameters)
    if (typeof c !== "undefined") { // type guard
        return a + b + c;
    }
    return a + b;
};
// default parameters value
let sumAll = function (a = 3, b, c = 2) {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 2, 3)); // undefined for a
// Rest Parameters
const total = (...numbers) => {
    return numbers.reduce((acc, item) => acc + item, 0);
};
logMsg(total(2, 3, 5, 6));
