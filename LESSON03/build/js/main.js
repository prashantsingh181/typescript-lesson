"use strict";
let stringArr = ["one", "hey", "two"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "Prashant";
stringArr.push("Hey");
guitars[0] = 1997;
guitars.unshift("Jim");
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push("van halen");
// Tuple
const myTuple = ["Prashant", 27, true];
let mixed = ["John", 12, false]; // looks like a tuple defined above but is actually an array (string | number | boolean)[]
// mytuple = mixed;  // should give an error
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
const exampleObj = {
    prop1: "Prashant",
    prop2: false,
};
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) { // narrowing
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
};
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime" 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
