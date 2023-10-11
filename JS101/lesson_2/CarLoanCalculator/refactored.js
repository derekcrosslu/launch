// You'll need three pieces of information:

// the loan amount
// the Annual Percentage Rate (APR)
// the loan duration

// From the above, you'll need to calculate the following two things:

// monthly interest rate
// loan duration in months

// let m = p * (j / (1 - Math.pow(1 + j, -n)));

// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// Try to print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.

// Don't forget to run your code through ESLint. Also, consider asking for a code review after you've reviewed your code against the possible solution, and made any adjustments that you need to make.

// Decide what input formats your program expects. For example, should the user enter an interest rate of 5% as 5 or .05?

// If you're working with an Annual Percentage Rate (APR), you need to convert it to a monthly interest rate for use in the formula.

// Be careful about the loan duration -- are you working with months or years? Choose variable names carefully to assist in remembering.

// Think about edge cases. There are plenty of edge cases to work with in this problem, and each presents interesting challenges. For instance, consider whether you want to support no-interest loans or loans that aren't for an integer number of years.

const readline = require("readline-sync");
const MESSAGES = require("./messages.json");

// function to format message prompt
function prompt(message) {
  console.log(`=> ${message}`);
}
// function to validate input
function invalidNumber(number) {
  return Number.isNaN(parseFloat(number));
}
// Function to calculate the monthly payment
function calculator(loanAmount, anualInterestRate, loanDurationYears) {
  // Convert annual interest rate to monthly interest rate
  const monthlyInterestRate = anualInterestRate / 12 / 100;
  // Convert loan duration from years to months
  const loanDurationMonths = loanDurationYears * 12;
  // Calculate monthly payment
  const monthlyPayment =
    loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationMonths)));
  // Return the result as a string formatted as currency
  return monthlyPayment.toFixed(2);
}
// Main execution
function main() {
  // Welcome
  prompt(MESSAGES["en"]["welcome"]);
  // Get user inputs
  prompt(MESSAGES["en"]["loan_amount"]);
  let loanAmount = readline.question();
  // Input validation
  while (invalidNumber(loanAmount)) {
    prompt(MESSAGES["en"]["invalid"]);
    loanAmount = readline.question();
  }
  prompt(MESSAGES["en"]["apr"]);
  let annualInterestRate = readline.question();
  // Input validation
  while (invalidNumber(annualInterestRate)) {
    prompt(MESSAGES["en"]["invalid"]);
    annualInterestRate = readline.question();
  }
  prompt(MESSAGES["en"]["duration"]);
  let loanDurationYears = parseFloat(readline.question());
  // Input validation
  while (invalidNumber(loanDurationYears)) {
    prompt(MESSAGES["en"]["invalid"]);
    loanDurationYears = readline.question();
  }
  // Calculate and display the monthly payment
  const monthlyPayment = calculator(
    loanAmount,
    annualInterestRate,
    loanDurationYears
  );
  prompt(`${MESSAGES["en"]["payments"]} $${monthlyPayment}`);
}
// Run the program
let another = "y";
while (another === "y") {
  main();
  prompt(MESSAGES["en"]["another"]);
  another = readline.question();
}
