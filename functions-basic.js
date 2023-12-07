// Function definition/declaration
// function greet() {
//   console.log("Hello world");
//   console.log("Good evening world");
//   console.log("Good night world");
//   console.log("Good morning world");
// }

// Run / Invoke / Call / Execute
// greet();

// function rollDie() {
// Get a value between 1 to 6
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// }

// function throwDice() {
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
//   rollDie();
// }

// throwDice();

// function greetAditya() {
//   console.log("Hello, Aditya");
// }

// function greetAbhishek() {
//   console.log("Hello, Abhishek");
// }

// greetAditya();
// greetAbhishek();

// function greet(friend) {
//   // friend ->> "Aditya"
//   if (friend === "Abhishek") {
//     console.log("Younger brother");
//   } else if (friend === "Aditya") {
//     console.log("Elder brother");
//   }
// }

// greet("Abhishek");
// greet("Aditya");

// function greet(userName) {
//   console.log(`Hello there, ${userName}`);
// }

// // "Hello there, Aditya"
// // "Hello there, Abhishek"

// greet("Aditya");
// greet("Abhishek");

// function sum(numOne, numTwo) {
//   console.log(numOne + numTwo);
// }

// sum(1, 2);
// sum(10, 20);

// function subtraction(a, b) {
//   console.log(a - b);
// }

// subtraction(10, 20);
// subtraction(100, 20);

// function square(num) {
//   console.log(num * num);
//   console.log(num ** 2);
//   console.log(Math.pow(num, 2));
// }

// square(2);

// function sum(numOne, numTwo) {
//   console.log(numOne + numTwo);
// }

// sum(11, 22);
// sum(100, 33);
// sum(100);

// undefined
// const array = [1,2,3];
// array[100]

// const object = { id: 1 };
// object.city

// arguments  -> actual values
// parameters -> variables

// function yell() {
//   console.log("I will not run");
//   return;
// }

// const answer = yell();

// console.log(answer);

// function stuff() {
//   return { id: 1, city: "Hyderabad" };
// }

// const result = stuff();

// console.log(result);

// function greeting() {
//   return "Hello World";
// }

// console.log(`The greeting is: ${greeting()}`);

// function square(x) {
//   return x ** 2; // --> FUNCTION EXITS RIGHT HERE!!
// }

// const result = square(10);

// console.log(result);

// isPurple(color)

// function isPurple(color) {
//   if (color === "purple") {
//     return true;
//   } else {
//     return false;
//   }
// }

// isPurple("purple");

// function checkNumber(number) {
//   return;

//   if (number === 100) {
//     return "It's a high number";
//   }

//   if (number === 50) {
//     return "Its half century";
//   }

//   if (number === 10) {
//     return "Its just ten";
//   }
// }

// checkNumber(100);
// checkNumber(50);
// checkNumber(10);
// isPurple(color) -> boolean

// Method 1
//   if (color.toLowerCase() === "purple") {
//     return true;
//   } else {
//     return false;
//   }
//
// Method 2
//   if (color.toLowerCase() === "purple") {
//     return true;
//   }
//   return false;
//

// function isPurple(color) {
//   return color.toLowerCase() === "purple" ? "yes" : "no";
// }

// const result = isPurple("red"); // "yes" : "no"
// console.log(result);

// function containsPurple(arrayOfColors) {
//   for (let color of arrayOfColors) {
//     if (color === "purple") {
//       return true;
//     }
//   }
//   return false;
// }

// const result = containsPurple(["purple", "red", "blue"]);

// console.log(result);

// User Validation :
// The function is called : isValidPassword
// It accepts 2 parameters : password and userName
// Password must meet the following requirements :
// - It has to be at least 8 characters long
// - It CANNOT contain spaces
// - It CANNOT contain the userName
// If all requirements are met, return true
// else return false

// function isValidPassword(password, userName) {
// if (password.length < 8) {
//   return false;
// }

// if (password.includes(" ")) {
//   return false;
// }

// if (password.includes(userName)) {
//   return false;
// }

//   return true;
// }

// function isValidPassword(password, userName) {
//   return (
//     password.length >= 8 &&
//     password.indexOf(" ") !== -1 &&
//     password.indexOf(userName) !== -1
//   );
// }

// isValidPassword("adityakeri", "aditya");

// function average(array) {
//   let total = 0;
//   // Loop over thr array
//   for (let number of array) {
//     total += number;
//   }

//   // total -> sum of all elements in the array
//   // what is the length of array ? array.length

//   return total / array.length;
// }

// console.log(average([0, 50])); // 25
// console.log(average([75, 76, 80, 95, 100])); // 85.2

// function isPangram(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   for (let letter of alphabet) {
//     if (!sentence.includes(letter)) {
//       return false;
//     }
//   }
//   return true;
// }

// isPangram("The quick brown fox jumps over the lazy dog"); // true
// isPangram("The quick brown fox jumps over the lazy dod"); // false
