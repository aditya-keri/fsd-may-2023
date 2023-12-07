// Loops

// for loop
// while loop

// for...of loop [Arrays]
// for...in loop [Objects]

// for(
//   [initialExpression];
//   [conditon];
//   [incrementOrDecrementExpression]
// )

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 1st iteration
// 1

// 2nd iteration
// 2

// Result :
// 50
// 40
// 30
// 20
// 10
// 0

// for (let i = 50; i >= 0; i -= 10) {
//   console.log(i);
// }

/**
 * Example of infinite loop
 * for(let i = 20; i >= 20; i++) {
 *
 * }
 *
 *
 */

const animals = ["lions", "tigers", "bears"];

// start at index 0
// increment the index by 1
// stop looping when index is less than array length

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// for (let i = 0; i < string.length; i++) {
//   console.log(string[i]);
// }

// Nested Loops
// const string = "LOL";
// for (let i = 0; i <= 4; i++) {
//   console.log("Outer:", i);

//   for (let j = 0; j < string.length; j++) {
//     console.log("   Inner:", string[j]);
//   }
// }

// let num = 0;

// while (num < 3) {
//   console.log(num);
//   num++;
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// 0

// const targetNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (guess !== targetNum) {
//   console.log(`Guessed ${guess}...Incorrect`);
//   guess = Math.floor(Math.random() * 10);
// }

// // Success!
// console.log(`CORRECT! Guessed: ${guess} & target was : ${targetNum}`);

// let num = 0;

// // 0 1 2
// while (num < 3) {
//   console.log(num);
//   num++;
// }

// const targetNumber = 5;
// let guess = Math.floor(Math.random() * 10); // 0...9

// while (guess !== targetNumber) {
//   console.log("Nahi galat hai", guess);
//   guess = Math.floor(Math.random() * 10);
// }

// console.log("Haan yahi hai", guess);

// const targetNumber = 5;
// let guess;

// while (true) {
//   guess = Math.floor(Math.random() * 10); // 5
//   if (guess === targetNumber) {
//     console.log("Haan sahi hai", guess);
//     break;
//   } else {
//     console.log("Nahi galath hai");
//   }
// }

// const actors = ["Srk", "Salman", "Hrithik", "Ranbir"];

// for...of

// 1st iteration
// let actor = "Srk"

// 2nd iteration
// let actor = "Salman"

// 3rd iteration
// let actor = "Hrithik"

// 4th iteration
// let actor = "Ranbir"

// Declarative approach
// for (let actor of actors) {
//   console.log(actor);
// }

// Where to start
// How to increment/move forward
// Where to end

// Imperative approach

// for (let i = 0; i < actors.length; i++) {
//   console.log(actors[i]);
// }

// let i = 0;
// while (i < actors.length) {
//   console.log(actors[i]);
//   i++;
// }

// const communities = ["soccer", "movies", "technology", "gaming", "television"];

// 1st loop
// let community = "soccer"

// 2nd loop
// let community = "movies"

// 3rd loop
// let community = "technology"

// 4th loop
// let community = "gaming"

// 5th loop
// let community = "television"

// for (let community of communities) {
//   console.log(community);
// }

// Iterables - Strings and Arrays

// const array = ["Abc", "Def"];

// let string = "Abc"
// let string = "Def"

// for (let string of array) {
//   console.log(string);
// }

// community === communities[i]

// const numbers = [2, 7, 6];
// let sum = 0;

// for (let num of numbers) {
//   sum += num;
// }

// console.log(sum);

// sum -> 2 (1st loop)
// sum -> 9 (2nd loop)
// sum -> 15 (3rd loop)

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 1],
//   [4, 3, 8],
// ];

// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(sum)
// }

// 1st loop -> row : [2, 7, 6]

// const user = {
//   id: 1,
//   name: "Miles",
//   age: 17,
// };

// Object.keys(user)    -> ["id", "name", "age"]
// Object.values(user)  -> [1, 'Miles', 17]
// Object.entries(user) -> [["id", 1], ["name", "Miles"], ["age", 17]]

// ["id", "name", "age"]

// const entries = Object.entries(user);

// console.log(entries[0][0], entries[0][1]);
// console.log(entries[1][0], entries[1][1]);
// console.log(entries[2][0], entries[2][1]);
// console.log(entries);

// const userValues = Object.values(user);

// console.log(userValues);
// const userKeys = Object.keys(user);

// console.log(userKeys);

// Methods :
// 1. Performs an action
// 2. It returns a value

// for...of loop

// Object.
// const movieReviews = {
//   Amadeus: 10,
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
// };

// // keys -> ["Amadeus", "Arrival", "Alien", "Amelie"]

// for (let key of Object.keys(movieReviews)) {
//   // key -> "Amadeus"

//   const value = movieReviews[key];

//   console.log(`I rated ${key} ${value}/10`);
// }

// I rated {key} {value}/10

// I rated Amadeus 10/10
// I rated Arrival 9.5/10
// I rated Alien 9/10
// I rated Amelie 8/10

// for...of loop -> Iterables -> Strings or Arrays
// for...in loop -> Objects

// const userName = {
//   id: 1,
//   city: "Hyderabad",
//   name: "Aditya",
// };

// const keys = Object.keys(userName);

// for (let key of keys) {
//   console.log(key);
// }

// for (let key in userName) {
//   const value = userName[key];
//   console.log(key, value);
// }

// const scores = {
//     miles: 1000,
//     peter: 2000,
//     harry: 3000,
//     mj: 5000
// }

// const game = {
//   title: "Spider Man 2",
//   rating: "10/10",
//   released: true,
//   year: 2023,
// };

// const year = "year";

// console.log(game[year]);
// game[year] -> game["year"] -> game.year -> 2023
