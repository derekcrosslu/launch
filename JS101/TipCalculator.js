// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

// Example:
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// Understanding the Problem:
// Input: two numbers
// Output: two strings
// Rules:
//  - ignore input validation
//  - assume user will enter numbers
//  - tip is bill amount * tip rate
//  - total is bill amount + tip

// Algorithm:
// - require readline-sync
// - prompt for bill amount
// - prompt for tip percentage
// - convert input to numbers
// - calculate tip
// - calculate total
// - log tip and total to console

const readline = require('readline-sync');

function TipCalculator() {
  let bill = readline.questionInt('What is the bill? ');

  let tipPercentage = readline.questionInt('What is the tip percentage? ');

  let tip = bill * (tipPercentage / 100);
  let total = bill + tip;
  // add a line break to separate the input from the output
  console.log('\n');
  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

TipCalculator()

// Further Exploration:

// Our solution prints the results as $30.0 and $230.0 instead of the more usual $30.00 and $230.00. Modify your solution so it always prints the results with 2 decimal places.