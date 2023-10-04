// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

// Understanding the problem:
// Input: array of numbers
// Output: string

// Instructions:
// - multiply all numbers of the array and divide the result by the number of elements
// - return the string representation of the result to 3 decimal places

// Algorithm:
// - initialize multiply variable to 1
// - loop through the array using forEach
// - multiply each number of the array to multiply
// - divide multiple by the array size
// - specify number of decimal places with toFixed()
// - convert the result to string and return

function multiplicativeAverage(arr) {
  const multiply = arr.reduce((acc, curr) => acc * curr);
  return (multiply / arr.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
