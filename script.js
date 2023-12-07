// // this keyword

// // function greet(name) {

// // }

// // greet('Aditya')

// // 5 ways to find out the `this` value

// // 1. Implicit Binding

// // const user = {
// //   name: "Miles Morales",
// //   age: 27,
// //   greet() {
// //     // this -> {} -> user
// //     console.log(this === user);
// //     console.log(`Hello, I am ${this.name}`);
// //   },
// //   mother: {
// //     name: "Stacey",
// //     greet() {
// //       // this -> {} -> mother
// //       console.log(`Hello, I am ${this.name}`);
// //     },
// //   },
// // };

// // user.mother.greet();

// // 2. Explicit Binding

// // Shorthand properties

// // function sayHello(userName, country) {
// //   // this -> {} -> ???
// //   console.log(this);
// // }

// // const user = {
// //   id: 1,
// //   city: "Hyderabad",
// // };

// // const newSayHello = sayHello.bind(user, "Miles Morales", "USA");
// // newSayHello();

// // Lexical Binding

// const user = {
//   name: "Ranvijay",
//   age: 36,
//   passion: ["papa", "papa", "papa"],
//   greet() {
//     // this -> abhi
//     const sayWhat = () => {
//       const sayWhatElse = () => {
//         console.log(this);
//       };
//       sayWhatElse();
//     };
//     sayWhat();
//   },
// };

// const abhi = {
//   id: 1,
//   country: "USA",
// };

// user.greet(); // user
// user.greet.call(abhi); // abhi

// // Definition of 'this' keyword

// // To re-use the same function/method
// // with different context (object)

// function sayBye() {
//   console.log(this);
// }

// sayBye();
