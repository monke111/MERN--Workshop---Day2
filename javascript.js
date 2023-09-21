//generate comments for learning basics of js and examples

// 1. Variables

// 2. Data Types

let name = 'John'; //string

let age = 25; //Number - 3.14 float

let isApproved = true; //boolean 

let firstName = undefined; // used when values are not assigned 

let lastName = null; // used when the data is intentionally empty


// variable declaration

let x = 10; // block scoped 
var y = 10; // Variable
const z = 10; //  cannot be reassigned


// 3. Operators

let a = 1 + 2;

// 4. Conditionals

if (true) {
  console.log('Hello');
} else {
    console.log('Goodbye');
    }


// 5. Loops

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// 6. Functions

function add(a, b) {
  return a + b;
}

// 7. Arrays

let arr = [1, 2, 3, 4, 5];

// 8. Objects

let obj = {
    name: 'John',
    age: 30
    };


// 9. ES6 Features

// Traditional function
const add = function (a, b) {
    return a + b;
  };

//arrow functions

const add = (a, b) => {
    return a + b;
    }



//template literals

let fruit = 'apple';
let color = 'red';

console.log(`The ${fruit} is ${color}`);