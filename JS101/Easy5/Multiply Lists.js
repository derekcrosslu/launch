// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

// Understanding the problem:
// Input:  [number array,number array]
// Output: array

// Instructions:
// - multiply elements of the array that have the same index
// - both input arrays have the same size
// - return the resulting array

// Algorithm:
// - initiate multiply array
// - loop through first array
// - multiply elements of both array with same index

function multiplyList(arr1, arr2) {
  const multiply = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    console.log("i : ", i);
    multiply.push(arr1[i] * arr2[i]);
  }
  return multiply;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
