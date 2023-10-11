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

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(parseFloat(number));
}

function calculator() {
  // welcome message
  prompt(MESSAGES["en"]["welcome"]);

  while (true) {
    // the loan amount
    prompt(MESSAGES["en"]["loan_amount"]);
    let amount = readline.question();
    let amountStrArr = amount.split("");
    while (
      amountStrArr[0] !== "$" ||
      invalidNumber(amountStrArr.slice(1).join(""))
    ) {
      prompt(MESSAGES["en"]["invalid"]);
      amount = readline.question();
      amountStrArr = amount.split("");
    }
    amount = parseFloat(amountStrArr.slice(1).join(""));
    // the Annual Percentage Rate (APR)
    prompt(MESSAGES["en"]["apr"]);
    let apr = readline.question();
    let aprStrArr = apr.split("");
    while (
      aprStrArr[aprStrArr.length - 1] !== "%" ||
      invalidNumber(aprStrArr.slice(0, aprStrArr.length - 1).join(""))
    ) {
      prompt(MESSAGES["en"]["invalid"]);
      apr = readline.question();
      aprStrArr = apr.split("");
    }
    apr = parseFloat(aprStrArr.slice(0, aprStrArr.length - 1).join("")) / 100;
    // // the loan duration
    prompt(MESSAGES["en"]["duration"]);
    const years = parseFloat(readline.question());
    const loanDurationInMonths = years * 12;
    let monthlyPayments =
      amount * (apr / (1 - Math.pow(1 + apr, -loanDurationInMonths)));
    prompt(`${MESSAGES["en"]["payments"]} $${monthlyPayments.toFixed(2)}`);
    break;
  }

  prompt(MESSAGES["en"]["end"]);
}

calculator();

// m = monthly payment
// p = loan amount
// const p = 4000;
// // j = monthly interest rate
// const j = 0.05;
// // n = loan duration in months
// const n = 12;

// let m = p * (j / (1 - Math.pow(1 + j, -n)));

// console.log("m: ", m);
