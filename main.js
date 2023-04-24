// Data types: string, number, boolean, null, undefined

const name = "John";
const age = 30;

// Concatenation
console.log("My name is " + name + " and i am " + age);

// Template string
console.log(`My name is ${name} and I am ${age} `);

// Conditionals

// const x = 4;

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// const x = 4;
// const y = 10;

// if (x > 5 || y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// ternary operator

// const x = 11;

// const color = x > 10 ? "red" : "blue";
// console.log(color);

// Switches

// const x = 11;

// const color = "green";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
//     break;
// }

// Functions

// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }

// addNums(5, 5);

// function addNums(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNums(5, 5));

// same with arrow function:

// const addNums = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addNums(5, 5));

// Constructor function

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = dob;
// }

// //Instantiate object

// const person1 = new Person("John", "Doe", "4-3-1980");

// console.log(person1);

// DOM

// single element

// manipulating the DOM

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all Fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);
    // clear fields

    nameInput.value = "";
    emailInput.value = "";
  }
}
