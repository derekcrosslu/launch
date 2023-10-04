// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

// Understanding the problem:
// Input: string
// Output: string

// Instructions:
// - format input string
// - swap first name into the position of last name
// - separate both by a , and white space

// Algorithm:
// - split input string into an array of 2 strings
// - return second element concatenated by a comma, a space and the first element

function swapName(str) {
  const result = str.split(" ");
  return result[1].concat(",").concat(" ").concat(result[0]);
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
