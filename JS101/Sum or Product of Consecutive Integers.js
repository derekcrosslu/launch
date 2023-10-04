// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Copy Code

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Copy Code

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// ### Understanding the Problem:

// The program should prompt the user for an integer greater than 0.
// The user should be asked to choose between calculating the sum or product of all numbers between 1 and the entered integer, inclusive.
// The program should perform the chosen operation and display the result.
// Input validation is not necessary, and we assume the user will enter valid inputs.

// ### Algorithm:

// Prompt the user for an integer greater than 0.
// Prompt the user to choose between the sum or the product of all numbers between 1 and the entered integer, inclusive.
// Prompt the user for a numerical value. Use questionInt to confirm numerical value (otherwise it will ask user to enter one).
// Initialize a variable to store the result.
// If the user chose to compute the sum:
// a. Iterate through all the integers between 1 and the entered integer, inclusive.
// b. Add each integer to the result variable.
// If the user chose to compute the product:
// a. Set the result variable to 1.
// b. Iterate through all the integers between 1 and the entered integer, inclusive.
// c. Multiply each integer with the result variable and store the new value in the result variable.
// Display the result to the user, indicating whether it's the sum or product of the numbers between 1 and the entered integer, inclusive.

// ### Code

const rls = require('readline-sync')

function sumOrProduct() {

  let num = rls.questionInt('Please enter an integer greater than 0: ');
  let operation = rls.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  let result = 0;

  if (operation === 's') {
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    console.log(`The sum of the integers between 1 and ${num} is ${result}.`);
  }

  if (operation === 'p') {
    result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    console.log(`The product of the integers between 1 and ${num} is ${result}.`);
  }
}

sumOrProduct();