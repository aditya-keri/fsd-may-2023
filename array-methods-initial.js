// Arrays

// Creating arrays

// const students = [];

// const colors = ["red", "orange", "yellow"];

// const lotteryNumbers = [19, 22, 56, 12, 51];

// const stuff = ["Aditya", 100, true, undefined, null];

// Arrays are indexed
// const colors = ["red", "orange", "yellow", "purple"];

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[100]);

// const array = [1, 2, 3, undefined];

// console.log(array[3]);
// console.log(array[4]);

// Modifying Arrays

// const colors = ["red", "orange", "yellow", "purple"];
// console.log(colors);

// colors[0] = "blue";
// colors[1] = "violet";

// console.log(colors);

// const colors = ["red", "orange", "yellow", "purple"];

// colors[4] = "violet";

// const students = [];
// // 0 ???
// students[1] = "Sayantan";
// students[2] = "Albert";

// console.log(students);

// const colors = ["red", "orange", "yellow", "purple"];
// colors[colors.length] = "violet";

// console.log(colors);
// 'violet'

// Array methods

// push
// const numbers = [1, 2, 3];
// const value = numbers.push(100);

// console.log(value);

// const students = [];
// const value = students.push("Shubham");

// console.log(value);

// let colors;
// console.log(colors); // undefined
// colors = [];
// console.log(colors); // []
// colors = "Surjoy"

// const numbers = [1, 2, 3];
// numbers.push(4, 5, 6);

// console.log(numbers);

// pop
// const numbers = [];

// numbers.pop(); // []

// console.log(numbers);

// concat (concatenation)

// const fruits = ["apple", "banana"];
// const veggies = ["asparagus", "brussel sprouts"];

// const result = veggies.concat(fruits);

// console.log(result);

// const result = [1, 2, 3].concat([3, 4, 5]);

// console.log(result);

// const numbers = [1, 2, 3];
// const strings = ["a", "b", "c"];
// const booleans = [true, false];
// const falsy = [undefined, null];

// const result = numbers.concat(strings, booleans, falsy);

// console.log(result);

// indexOf

// const array = [1, 2, 3, 4];

// if (array.indexOf(100) !== -1) {
//   console.log("1 hai");
// } else {
//   console.log("1 nahi hai");
// }

// includes

// const array = [1, 2, 3, 4];

// if (array.includes(1)) {
//   console.log("1 hai");
// } else {
//   console.log("1 nahi hai");
// }

// const ingredients = [
//   "water",
//   "corn starch",
//   "flour",
//   "cheese",
//   "brown sugar",
//   "shrimp",
//   "eel",
//   "butter",
// ];

// const result = ingredients.includes("cheese", 3);

// console.log(result);

// reverse (modifies the existing array)

// const letters = ["K", "I", "H", "T", "I", "R", "H"];

// letters.reverse();

// console.log(letters);

// join (returns a NEW string)

// const bestActor = ["H", "r", "i", "t", "h", "i", "k"];

// "Hrithik"

// const result = bestActor.join("");

// const numbers = [1, 2, 3];

// const result = numbers.join(" # -> ");

// console.log(result);

// slice

// const bestActor = ["H", "r", "i", "t", "h", "i", "k"];

// // Creates a NEW copy of the array
// bestActor.slice();
// bestActor.slice(0);
// bestActor.slice(0, bestActor.length);

// splice

// const colors = ["red", "orange", "yellow", "purple"];

// colors.splice(1, 0, "violet", "magenta");

// console.log(colors);

// const colors = ["red", "orange", "yellow", "purple"];

// colors.splice(0, 4);

// console.log(colors);

// const colors = ["red", "orange", "yellow", "purple"];

// colors.splice(0, 1);
// // "orange", "yellow", "purple"

// colors.splice(1, 1);
// // "orange", "purple"
