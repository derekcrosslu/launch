// Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

// Understanding the problem:
// Input: user imput via terminal
// Output: prints message to console with array of first 5 numbers

// Rules:
// ask user input 6 times
// question format "Enter the n(th) number: (input)
// check if the 6th number appears within the first 5 numbers
// return message with result

// Algorith:
// declare readline-sync module
// declare an empty array numbers
// declare an array sufixes -> ['st','nd',rd','th']
// loop 6 times
// each time ask the user a number and push the number to array numbers
// when the loop is completed check if numbers.pop() contains numbers[5]

const rls = require("readline-sync");

function askUser() {
  const numbers = [];
  const sufixes = ["st", "nd", "rd", "th", "th", "last"];
  for (let i = 0; i < 6; i++) {
    const first_question = rls.question(
      `Enter the ${i < 5 ? i + 1 : ""}${sufixes[i]} number: `
    );
    numbers.push(Number(first_question));
  }
  const firstFive = numbers.slice(0, numbers.length - 1);
  const appears = firstFive.includes(numbers[numbers.length - 1]);

  console.log(
    `The number ${numbers[numbers.length - 1]} ${
      appears ? "appears" : "does not appear"
    } in ${firstFive.join(",")}`
  );
}

askUser();
