const readline = require("readline-sync");
console.log("Welcome to Calculator!");
// Ask the user for the first number.
console.log("What's the first number?");
let number1 = Number(readline.question());
console.log(number1);
// Ask the user for the second number.
console.log("What's the first second?");
let number2 = Number(readline.question());
console.log(number2);
// Ask the user for an operation to perform.
console.log("What operation would you like to perform?");
let operation = readline.question();
// Perform the operation on the two numbers.
let result;
switch (operation) {
  case "add":
    result = number1 + number2;
    break;
  case "substract":
    result = number1 - number2;
    break;
  case "multiply":
    result = number1 * number2;
    break;
  case "divide":
    result = number1 / number2;
    break;
  default:
    console.logg("whould");
    operation = readline.question();
}
// Print the result to the terminal.
console.log(result);
