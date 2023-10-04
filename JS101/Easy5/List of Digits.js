// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// Understanding the problem:
// Input: number
// Output: array of numbers

// Instructions:
// - turn digits of the number into elements of a new array
// - return the new array

// Algorithm:
// - convert input number to string
// - split the string into an array of chars
// - return the array mapping each item to a number

function digitList(num) {
  return num
    .toString()
    .split("")
    .map((value) => Number(value));
}

console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]
