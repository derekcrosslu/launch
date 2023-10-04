// Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

// Understanding the problem:
// Input: number
// Output: number

// Instructions:
// - return input number with digits reversed

// Algorithm:
// - convert input number to string
// - split string into array of chars
// - use reverse array method to reverse array of chars
// - join and convert array back to number type
// - return number

function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1
