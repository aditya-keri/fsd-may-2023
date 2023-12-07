// ES6

// Arrow functions

// String Template Literals

// let & const

// for...of

// for...in

// exponent (**)

// string.includes() & Array.includes()

// Object.values(), Object.keys(), Object.entries()

// Array callback methods

/** Spread Operator */

// 1st use case of spread operator

// const colors = ["red", "green", "blue"];

// const copy = ["cyan", "pink", ...colors, "violet", "magenta"];

// console.log(copy);

// 2nd use case of spread operator

// const object = {
//   id: 1,
//   cm: "Revant Reddy",
//   party: "Congress",
// };

// const copy = {
//   ...object,
// };

// console.log(copy === object);

// 3rd use case of spread operator

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// const array = [1, 2, 3, 4, 5];

// sum(...array);

// sum(array[0], array[1], array[2], array[3], array[4]);

// Copy an array inside another array
// Copy an object inside another object
// Pass the array values as individual arguments inside a function CALL

// const array = [101, 56, 768];

// const max = Math.max(...array);

// console.log(max);
// Rest Operator

// spread - function "call"
// rest - function definition

// function sum(a, ...rest) {
//   let total = a;
//   if (rest.length > 0) {
//     for (let num of rest) {
//       total += num;
//     }
//   }
//   console.log(total);
// }

// sum(10); // []
// sum(10, 20); // [20]
// sum(10, 20, 30); // [20, 30]

// 10, 20, 30

// a -> 10
// rest -> [ 20, 30 ]

// Default Params

// function multiply(a, b = 1) {
//   console.log(a, b);
// }

// multiply(7);
// multiply(7, 3);

// Destructuring

// const object = {
//   place: {
//     destiny: {
//       city: "Hyderabad",
//     },
//   },
// };

// const city = object.place.destiny.city;

// const {
//   place: {
//     destiny: { city },
//   },
// } = object;

// console.log(city);

const colors = [
  ["red", "green"],
  ["blue", "violet"],
];

const [[first, second], [third, fourth]] = colors;

console.log(first, second, third, fourth);

// first -> red
// second -> green
// third -> blue
