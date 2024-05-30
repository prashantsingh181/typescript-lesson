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
let bands: string[] = [];
bands.push("van halen");

// Tuple
const myTuple: [string, number, boolean] = ["Prashant", 27, true];

let mixed = ["John", 12, false]; // looks like a tuple defined above but is actually an array (string | number | boolean)[]

// mytuple = mixed;  // should give an error

// objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = bands;

const exampleObj = {
  prop1: "Prashant",
  prop2: false,
};

// type Guitarist = {
//     name: string,
//     active?: boolean,  // optional property
//     albums: (string | number)[]
// }

interface Guitarist {
  name?: string;
  active: boolean; // optional property
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {  // returns (string | undefined)
    if(guitarist.name){  // narrowing
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
};

console.log(greetGuitarist(jp)); 


// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime" 

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);