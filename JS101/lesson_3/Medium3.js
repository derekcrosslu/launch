// Question 1

// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...
[...new Array(10)].forEach((_, i) => console.log(" ".repeat(i).concat(str)));

for (let padding = 0; padding < 10; padding++) {
  console.log(" ".repeat(padding).concat(str));
}

// Question 2

// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:
`tHE mUNSTERS ARE CREEPY AND SPOOKY.`;
munstersDescription
  .split("")
  .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
  .join("");

// Question 3

// Alan wrote the following function, which was intended to return all of the factors of number:
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code? // to check if the number has the divisor
