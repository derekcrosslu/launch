// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

// Understanding the problem:
// Input:  array
// Output: [array,array]

// Instructions:
// - place first half of input array into a first new array
// - place second half of input array into second new array
// - if size of the array is odd then place the middle element into first array

// Algorithm:
// - assign the size of the array to arraySize
// - initialize first and second arrays
// - if arraySize is odd then place the middle into first array
// - if arraySize is even then slice first half and place it in first array
// - slice second half into second array

function halvsies(arr) {
  const arraySize = arr.length;
  const first = [];
  const second = [];
  if (arraySize % 2 !== 0) {
    first.push(...arr.slice(0, (arraySize + 1) / 2));
    second.push(...arr.slice((arraySize + 1) / 2));
  }
  if (arraySize % 2 === 0) {
    first.push(...arr.slice(0, arraySize / 2));
    second.push(...arr.slice(arraySize / 2));
  }
  return [first, second];
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
