// Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// Understanding the problem:
// Input: array of integers
// Output: number

// Instructions:
// - array will never be empty
// - numbers are positive
// - returns the average of the elements of the array

// Algorithm:
// -  loop through the array
// - multiply the elements
// - round the number returned with floor
// - no need to initialize a return variable if multiplying with reduce
// - just chain reduce and floor to the array

function average(arr) {
  return Math.floor(arr.reduce((acc, curr) => acc + curr) / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
