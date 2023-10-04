// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Understanding the problem:
// Input: number array, number array
// Output: number array

// Instructions:
// - return the combinatory multiplication of the two input arrays
// - assume that neither argument could be an empty array
// - the returning array should be in ascending order

// Algorithm:
// - initialize an empty array
// - loop the first input array
// - nest a second loop and iterate through the second array
// - on each nested iteration multiply every element of the first array by the second array

function multiplyAllPairs(arr1, arr2) {
  const result = [];
  for (let item1 of arr1) {
    for (let item2 of arr2) {
      result.push(item1 * item2);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
