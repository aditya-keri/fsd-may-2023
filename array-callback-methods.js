// Scope - Variables visibility

// function helpMe() {
//   const message = "I am on fire!!";

//   console.log(message);
// }

// helpMe();

// const bird = "mandardin duck";

// function birdWatch() {
//   const animal = "Tiger";
//   console.log(bird);
// }

// console.log(animal);

// birdWatch();

// function lol() {
//   let person = "Tom";
//   const age = 45;
//   var color = "teal";
//   console.log(color);
// }

// function changeColor() {
//   let color = "purple";
//   const age = 19;
// }

// lol()

// let bird = "mandarin duck";
// function birdWatch() {
//   let bird = "golden pheasant";
//   console.log(bird);
// }

// birdWatch();

// const userName = "Morales";

// function sleep() {
//   const userName = "Miles";
//   console.log(userName);
// }

// sleep();

// Block scope vs Function scope

// if (true) {
//   let id = 101;
//   const user = "Miles Morales";
//   var age = 100;
// }
// console.log(age);
// console.log(user);

// var           -> Boundary is function
// let and const -> boundary is block

// function stuff() {
//   // let, const or var
// }

// if (true) {
//   // let, const
// }

// // 1st example of a global variable
// if (true) {
//   // var
// }

// // 2nd example
// const a = 1;
// let b = 2;
// var c = 3;

// Lexical scope

// const city = "Hyderabad";
// function stuff() {
//   console.log(city);
// }

// function checkloop() {
//   const array = [1, 2, 3];

//   for (let number of array) {
//     console.log(number);
//   }
// }

// checkloop();

// function outer() {
//   console.log("1");
//   function inner() {
//     console.log("2");
//     function anotherInner() {
//       console.log("3");
//     }

//     anotherInner();
//   }

//   inner();
// }

// outer();

// First class citizens

// Primitive values
// objects and arrays
// Functions

// multiply
// a , b -> a * b

// const multiply = function (a, b) {
//   return a * b;
// };

// const result = multiply(10, 20);

// console.log(result);

// const user = "Aditya";
// const userAnother = "Abhishek";

// const array = [user, userAnother];

// console.log(array);

// const add = function (a, b) {
//   return a + b; // undefined + undefined -> NaN
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const thing = {
//   doSomething: add,
//   id: 1
// };

// const operations = [add, subtract];
// const operations = [add(10, 20), subtract(20, 10)];

// console.log(operations);

// const sum = operations[0](10, 20); // add()
// const diff = operations[1](20, 30); // subtract()

// console.log(sum, diff);

// const add = function (a, b) {
//   return a + b; // undefined + undefined -> NaN
// };

// const user = {
//   id: 1,
//   doSomething: add,
// };

// const result = user.doSomething(10, 20); // add()

// console.log(result);

// const sayHello = function () {
//   console.log("Say Hello");
// };

// const object = {
//   doSomething: function () {
//     console.log("Say Hello");
//   },
// };

// object.doSomething();

// const value = "Alby";

// const objectOne = {
//   id: "Alby",
// };

// function add(x, y) {
//   return x + y;
// }

// const subtract = function (x, y) {
//   return x - y;
// };

// function multiply(x, y) {
//   return x * y;
// }

// const divide = function (x, y) {
//   return x / y;
// };

// const operations = [add, subtract, multiply, divide];

// operations[0]()
// operations[1]()
// operations[2]()
// operations[3]()

// for (let func of operations) {
//   // 1st iteration - func -> add
//   // add()
//   const result = func(30, 5);
//   console.log(result);
// }

// function cry(cb) {
//   cb();
// }

// function rage() {
//   console.log("I HATE EVERYTHING!");
// }

// Higher Order Function - Callback
// cry(rage);

// cry -> Higher Order Function
// rage -> Callback function

// higherOrderFunction(callback)

// const performOperation = function (callback) {
//   if (false) {
//     callback();
//   }
// };

// function add(a, b) {
//   return a + b;
// }

// performOperation(add);
// Higher Order Function -> performOperation
// Callback Function -> add

// function repeatNTimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// function rage() {
//   console.log("I HATE EVERYTHING!");
// }

// repeatNTimes(rage, 5);

// function stuff() {
//   return function () {
//     console.log("Something");
//   };
// }

// const returnedValue = stuff();

// returnedValue() -> something()

// function multiplyBy(num) {
//   return function (x) {
//     console.log(x * num);
//   };
// }

// const triple = multiplyBy(3);

// triple(10);
// triple(20);

// const double = multiplyBy(2);

// double(10); // 20
// double(2); // 4

// function addSix() {
//   return function (num) {
//     return num + 6;
//   };
// }

// const func = addSix();

// console.log(func(10)); // 16
// console.log(func(20)); // 26

// function makeBetweenFunc(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);

// console.log(isChild(10)); // true
// console.log(isChild(19)); // false

// Hoisting

// a();

// function a() {
//   console.log("Hey");
// }

// console.log(user);
// var user = "id";

// function action(number) {
//   return number + 1;
// }

// function forEach(callback) {
//   const array = [1, 2, 3];

//   for (let num of array) {
//     callback(num);
//   }
// }

// forEach(action);

// Higher Order Function - forEach
// Callback Function - action

// Array callback methods

// const object = {
//   greet: function (callback) {
//     for (let i = 0; i < 3; i++) {
//       callback(i, i + 1);
//     }
//   },
// };

// object.greet(function (number, secondNumber) {
//   console.log("Hello world", number, secondNumber);
// });

// forEach

// What ✅
// How ❌

// const numbers = [20, 21, 22, 24, 25, 26, 27];

// for -> Imperative Approach
// for...of -> Declarative Approach
// while -> Imperative Approach

// Younger Sibling -> Imperative Approach
// Mom -> Declarative Approach

// forEach array method
// DOES NOT return anything
// numbers.forEach(function (element, index, array) {
//   console.log(element, index, array);
// });

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//   },
// ];

// Print the book titles of every book
// books.forEach(function (book) {
//   const authors = book.authors;
//   console.log(authors[0]);

//   // authors -> Array
// });

// map 👑

// const numbers = [1, 2, 3];

// map -> forEach + transformation

// const newArray = numbers.map(function (number) {
//   const result = number + 10;
// });

// [undefined, undefined, undefined]

// console.log(newArray);

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// const result = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(result);

// []

// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

/* 
[ 
    { value: 20, isEven: true },
    { value: 21, isEven: false },
    { value: 22, isEven: true },
    .
    .
]
*/

// const result = numbers.map(function (number) {
//   return {
//     value: number,
//     isEven: number % 2 === 0
//   }
// });

// console.log(result);

// Arrow function
// const stuff = () => [1, 2, 3];

// console.log(stuff());

// // function stuff() {
// //     return (
// //         {id: 1}
// //     )
// // }

// console.log(stuff());

// const numbers = [1, 2, 3];

// const result = numbers.map((number) => number * 2);

// console.log(result);

// find

// const names = ["Aishwarya", "Aparna", "Alekhya"];

// const result = names.find((name) => {
//   return name.startsWith("A");
// });

// console.log(result);

// const names = ["Aishwarya", "Chiratna", "Alekhya"];

// const filteredNames = names.filter((name) => {
//   return name.startsWith("A");
// });

// console.log(filteredNames);

// [ "Aishwarya", "Alekhya"]

// some

// some

// const names = ["Surjoy", "Chiratna", "Faizan"];

// const result = names.some((name) => {
//   return name.startsWith("A"); // true
// });

// console.log(result);

// [ "Bone: The Complete Edition", "A Gentleman in Moscow" ]
// const books = [
//     {
//       title: "Good Omens",
//       authors: ["Terry Pratchett", "Neil Gaiman"],
//       rating: 4.25,
//     },
//     {
//       title: "Bone: The Complete Edition",
//       authors: ["Jeff Smith"],
//       rating: 4.42,
//     },
//     {
//       title: "American Gods",
//       authors: ["Neil Gaiman"],
//       rating: 4.11,
//     },
//     {
//       title: "A Gentleman in Moscow",
//       authors: ["Amor Towles"],
//       rating: 4.36,
//     },
//   ];

//   const mapFirst = books
//     .filter((book) => book.rating > 4.3)
//     .map((book) => book.title);

//   console.log(mapFirst);

// ["Bone: The Complete Edition", "A Gentleman in Moscow"]

// const filteredBooks = books.filter((book) => book.rating > 4.2);

// const onlyRatings = books.map((book) => book.rating);

// const firstBookWithHighRating = books.find((book) => book.rating > 4.3);

// const result = books.every((book) => book.rating > 4);

// const answer = books.filter((book) => book.authors.length >= 2);
