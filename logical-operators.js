// Logical Operators

// ‼ Logical Operators only work with expressions

// && (AND Operator)
// Using simple values
console.log("7 && 8 --> ", 7 && 8);
console.log("undefined && null --> ", undefined && null);
console.log(`"" && null --> `, "" && null);

console.log("/* --------------------------*/");

// Using with expressions
console.log("1 >= 1 && true -->", 1 >= 1 && true);
console.log("10 === 100 && true -->", 10 === 100 && true);
console.log("1 <= 4 && 'a' === 'a' -->", 1 <= 4 && "a" === "a");
console.log("9 > 10 && 9 >= 9 -->", 9 > 10 && 9 >= 9);
console.log(
  "'abc'.length === 3 && 1 + 1 === 4 -->",
  "abc".length === 3 && 1 + 1 === 4
);

// Practical examples of `&&`

const password = "Newton";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid password");
  }
}

// true && true
// true
// if(true)
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid password");
}

// OR operator

// Practical Example

const age = 76;

// Either less than 6 or greater than or equal to 65
// You get in for free

// You have to pay

// false || true
// true
// if(true)
if (age < 6 || age >= 65) {
  console.log("You get in for free");
} else {
  console.log("You have to pay");
}

// NOT operator (opposite boolean value)
