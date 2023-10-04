// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Understanding the problem:
// Input: +/- number
// Output: string

// Instructions:
// - same instructions as previous exercise but this time the input number can be positive, negative or neither
// - dont use built in functions to convert number to string or '' + number
// - option to use previous function integerToString

// Algorithm:
// - modify previous helper function as to include + or - in its dictionary
// - ejectute helper function in integerToString so it returns a string with plus, minus or neither

function arrayNumToString(digit) {
  const digitDictionary = Object.fromEntries(
    Array.from({ length: 10 }, (_, i) => [i, `${i}`])
  );
  return digitDictionary[digit];
}

function integerToString(num) {
  const strNumberArray = [];
  while (num > 0) {
    strNumberArray.push(arrayNumToString(num % 10));
    num = (num - (num % 10)) / 10;
  }
  return strNumberArray.reverse().join("");
}

function signedIntegerToString(num) {
  if (num === 0) return "0";
  if (num < 0) {
    return "-".concat(integerToString(num * -1));
  } else {
    return "+".concat(integerToString(num));
  }
}

console.log(signedIntegerToString(4321) === "+4321"); // logs true
console.log(signedIntegerToString(-123) === "-123"); // logs true
console.log(signedIntegerToString(0) === "0"); // logs true
