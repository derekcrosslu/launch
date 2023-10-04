// Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

// Understanding the problem:
// Input: number
// Output: array of numbers

// Instructions:
// - generate a sequence with range 1 - input num
// - return array sequence
// - input number will always be positive
// - the sequence increases by 1

// Algorithm:
// - generate an array sequence using array from method increasing by 1 using input number as the size of the sequence
// - return the sequence

function sequence(num) {
  return Array.from({ length: num }, (_, n) => n + 1);
}
// Recursive Approach
function sequence2(number) {
  // Base case condition
  if (number === 1) {
    // 1
    let baseArray = [];
    baseArray.push(number);
    return baseArray;
  }

  let array = sequence(number - 1); // 2
  array.push(number); // 3
  return array; // 4
}

// unshift approach
function sequence3(num) {
  let result = [];
  while (num > 0) {
    result.unshift(num);
    console.log("result: ", result, "num", num);
    num--;
  }
  return result;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]]

console.log(sequence2(5)); // [1, 2, 3, 4, 5]
console.log(sequence2(3)); // [1, 2, 3]
console.log(sequence2(1)); // [1]

console.log(sequence3(5)); // [1, 2, 3, 4, 5]
console.log(sequence3(3)); // [1, 2, 3]
console.log(sequence3(1)); // [1]
