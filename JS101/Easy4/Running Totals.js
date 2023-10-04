// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// Understanding the problem
// Input: array of integers
// output: array of integers

// Rules:
// each elements of the new array should be the sum of the current and previous element of the input array
// return the sequence

// Algorithm
// - check if array empty return empty array
// - check if array has one elements return same element
// - initialize an empty array to store the results totalsArray
// - if array has more than one elements then loop throup the array
// - each time should check the array in sequence of acending order
// - if index is 0 then push item to totalsArray without adding to previous item
// - if index is > than 0 then add it to previous item and push the result to runningTotal
// - return runningTotal

function runningTotal(arrayNums) {
  if (!arrayNums) return arrayNums;
  if (arrayNums.length === 1) return arrayNums;
  const totalsArray = [];
  for (let index = 0; index < arrayNums.length; index++) {
    if (index === 0) {
      totalsArray.push(arrayNums[index]);
    } else if (index > 0) {
      totalsArray.push(arrayNums[index] + totalsArray[index - 1]);
    }
  }
  return totalsArray;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
