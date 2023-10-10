const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function operation_fun(operation) {}

prompt(MESSAGES["en"]["welcome"]);

while (true) {
  // ask for two numbers
  prompt(MESSAGES["en"]["num1"]);
  let number1 = Number(readline.question());
  prompt(MESSAGES["en"]["num2"]);
  let number2 = Number(readline.question());
  // ask for operation
  prompt(MESSAGES["en"]["operation"]);
  let operation = readline.question();
  // perform operation and display results
  let result;
  switch (operation) {
    case "1":
      result = number1 + number2;
      break;
    case "2":
      result = number1 - number2;
      break;
    case "3":
      result = number1 * number2;
      break;
    case "4":
      result = number1 / number2;
      break;
  }
  prompt(`The number is: ${result}`);
  prompt(MESSAGES["en"]["another"]);
  let answer = readline.question();
  if (answer !== "y") break;
}
prompt(MESSAGES["en"]["end"]);

// console.log("Welcome to Calculator!");
// // Ask the user for the first number.
// console.log("What's the first number?");
// let number1 = Number(readline.question());
// console.log(number1);
// // Ask the user for the second number.
// console.log("What's the first second?");
// let number2 = Number(readline.question());
// console.log(number2);
// // Ask the user for an operation to perform.
// console.log("What operation would you like to perform?");
// let operation = readline.question();
// // Perform the operation on the two numbers.
// let result;
// switch (operation) {
//   case "add":
//     result = number1 + number2;
//     break;
//   case "substract":
//     result = number1 - number2;
//     break;
//   case "multiply":
//     result = number1 * number2;
//     break;
//   case "divide":
//     result = number1 / number2;
//     break;
//   default:
//     console.logg("whould");
//     operation = readline.question();
// }
// // Print the result to the terminal.
// console.log(result);
