// Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.

// Understanding the problem:
// Input: array of numbers
// Output: number

// Instructions:
// - create a sequence where each element is the sum of previous elements
// - return the sum of all elememts of the sequence

// Algorithm:
// - initialize an empty array
// - loop through input array
// - on each iteration:
// -    if index 0 push first element
// -    else push the sum of previous element in result array and current value
// - return the sum of the sequence

function sumOfSums(arr) {
  const array = [];
  arr.forEach((value, index, a) => {
    if (index === 0) array.push(value);
    else array.push(array[index - 1] + value);
  });
  return array.reduce((a, b) => a + b);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
