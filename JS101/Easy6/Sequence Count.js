// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// Understanding the problem:
// Input: number, number
// Output: array of numbers

// Instructions:
// - return a sequence
// - first argument should be the size of the sequence
// - second argument should be the starting number of the sequence
// - assume size of the sequence is >= 0
// - if the size is 0 return []
// - the second argument could be any integer

// Algorithm:
// - name the first argument as size and second argument as init
// - initialize num as the number of the sequence that will be pushed on each iteration
// - using a recursive approach use the size===1 as limit for the base condition
// - if size===0:
// -      return empty array
// - if size===1:
// -      initialize base array
// -      push num into base array
// -      return base array
// - initialize array and assign it the function with size minus 1 as recursive argument
// - push num to the array
// - return the array

function sequence(size, init) {
  const num = size * init;
  if (size === 0) return [];
  if (size === 1) {
    let baseArray = [];
    baseArray.push(num);
    return baseArray;
  }
  let array = sequence(size - 1, init);
  array.push(num);
  return array;
}

function sequence2(size, init) {
  const result = [];
  while (size > 0) {
    result.unshift(size * init);
    size--;
  }
  return result;
}
console.log("result.shift(count * init);: ", [1, 2, 3].shift(2, 2));

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []
console.log(sequence(2, 1000000)); // []

console.log(sequence2(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7)); // [-7, -14, -21, -28]
console.log(sequence2(3, 0)); // [0, 0, 0]
console.log(sequence2(0, 1000000)); // []
