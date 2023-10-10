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
