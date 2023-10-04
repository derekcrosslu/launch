// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// Understanding the problem:
// Input: number
// Output: string

// Instructions:
// - input number is non-negative
// - do not use any built-in function to convert integer to string
// - convert number to string by analysing one character at a time
// - do not use the expression '' + number either

// Algorithm:
// - create a helper function arrayNumToString to convert each number to a string using a number dictionary
// - return string '0' when input number is 0
// - initialize a string array strNumberArray
// - initialize a count integer
// - loop while input number is bigger than 0
// - on each iteration first convert each number using arrayNumToString helper function
// - then push the residual of the number by 10
// - then compute the difference of the initial number minus the residual by 10
// - then reassign the input number to this result until it reassigns it to 0 for the while loop to stop
// - reverse and join then return the array strNumberArray

function arrayNumToString(digit) {
  const digitDictionary = Object.fromEntries(
    Array.from({ length: 10 }, (_, i) => [i, `${i}`])
  );
  return digitDictionary[digit];
}

function integerToString(num) {
  if (num === 0) return "0";
  const strNumberArray = [];
  const count = 0;
  while (num > 0) {
    strNumberArray.push(arrayNumToString(num % 10));
    num = (num - (num % 10)) / 10;
  }
  return strNumberArray.reverse().join("");
}

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
