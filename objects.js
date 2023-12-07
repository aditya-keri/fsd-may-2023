// Objects

// const fitbitData = [308727, 1826, 211.7];

/*
totalSteps -> 308727
totalFloors  -> 1826
totalMiles -> 211.7
*/

// const fitBitData = {
//   totalSteps: 308727,
//   totalFloors: 1826,
//   totalMiles: 211.7,
//   type: "walk",
//   brand: null,
//   isFitness: true,
// };

// // First way (Dot notation)
// console.log(fitBitData.totalFloors);
// console.log(fitBitData.brand);

// console.log(`The total steps taken is ${fitBitData.totalSteps}`);

// // Second way (Square bracket notation)

// const key = "isFitness";

// console.log(fitBitData[key]);
// fitBitData[key]
// fitBitData["isFitness"]

// const student = {
//   maths: 99,
//   sanskrit: 9,
//   english: 85,
//   social: 100,
// };

// const key = "maths";

// console.log(student[key]);
// // student["maths"] -> student.maths

// const employee = {
//   holidaysLeft: -10,
//   courses: 10,
//   targets: 100,
//   salary: 99, // per year (including variable bonus)
// };

// const property = "salary";

// console.log(employee[property]);

// employee[property] -> employee["salary"] -> employee.salary

// const user = {
//   id: 1,
//   hobbies: ["Singing", "Dancing", { type: "Kuchipudi" }],
//   address: {
//     city: "Hyderabad",
//     state: "Telangana",
//     pin: 500018,
//   },
// };

// user.hobbies[2].type;

// const array = [
//   "Newton",
//   {
//     name: "School",
//     score: [100.5, 789.9],
//     address: {
//       city: "Hyderabad",
//     },
//   },
//   [10, 20],
// ];

// array[1].address.city;

// Updating and Adding Properties

// const fitBitData = {
//   totalSteps: 302828,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   worksoutThisWeek: "5 of 7",
// };

// // Dot notation
// console.log(fitBitData.worksoutThisWeek);
// console.log(fitBitData["worksoutThisWeek"]);

// console.log(fitBitData["1"]);

// fitBitData.avgCalorieBurn = 8000;

// fitBitData.totalMiles += 7.5;

// console.log(fitBitData.totalMiles);

// Adding a new property

// const user = {};

// user.name = "Miles";
// user.age = 17;
// user.city = "Brooklyn";

// console.log(user);

// const user = { id: 1 };

// user.name = "Morales";

// console.log(user);

// const array = [1, 2];

// array[2] = 100;

// console.log(array);
