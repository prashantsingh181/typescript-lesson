// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Guitarist = {
  name?: string;
  active: boolean; // optional property
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// interface PostId = stringOrNumber  // doesn't work

// Literal Types
let myName: "Prashant";
// myName = "John" // doesn't work

let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  // function that doesn't return anything return void type data
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {  // same as above
//   (a: number, b: number): number
// }

let multiply: mathFunction = function (e, f) {
  return e * f;
};

logMsg(multiply(2, 4));

let addAll = function (a: number, b: number, c?: number): number {
  //optional parameter c (optional parameters should be at the last, all the required parameters come before optional parameters)
  if (typeof c !== "undefined") {  // type guard
    return a + b + c;
  }
  return a + b;
};

// default parameters value
let sumAll = function (a: number = 3, b: number, c: number = 2): number {
    return a + b + c;
};

logMsg(addAll(2, 3, 2))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 2, 3)) // undefined for a


// Rest Parameters
const total = (...numbers: number[]): number => {
  return numbers.reduce((acc, item) => acc + item, 0)
}
logMsg(total(2, 3, 5, 6));
