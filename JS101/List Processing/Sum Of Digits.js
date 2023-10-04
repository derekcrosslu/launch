// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// Understanding the problem:
// Input: number
// Output: number

// Instructions:
// - return the sum of digits without using loops (for, while, or do...while)
// - use method calls to perform the sum

// Algorithm:
// - convert to string and split into array of chars
// - return reduce method that converts each char to numeric and adds them

function sum(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
