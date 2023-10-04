// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

// Understanding the problem:
// Input: string
// Output: array of strings

// Instructions:
// - from the input string create a list of substrings
// - each substring should contain chars of the original string
// - the number of elements in the list should be equal to the number of chars in the original input string
// - the list sequence should start with the first char and add the next char to the next substring succesively until the last substring has all the chars of the original input string

// Algorithm:
// - split input string into an array
// - initialize empty array
// - loop through the array with index i:
// -    if first iteration:
// -        push item to array
// -    else
// -        concat array[i-1] to current item and push to array
// - return array

// Result with forEach and push
function leadingSubstrings(str) {
  const array = [];
  str.split("").forEach((item, i, arr) => {
    if (i === 0) array.push(item);
    else array.push(array[i - 1].concat(item));
  });
  return array;
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings("")); // []

// Result with forEach and slice
function leadingSubstrings1(str) {
  const RESULT = [];
  str.split("").forEach((_, index) => RESULT.push(str.slice(0, index + 1)));
  return RESULT;
}

console.log(leadingSubstrings1("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings1("a")); // ["a"]
console.log(leadingSubstrings1("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings1("")); // []

// Result with map and slice
function leadingSubstrings2(str) {
  return str.split("").map((_, index) => str.slice(0, index + 1));
}

console.log(leadingSubstrings2("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings2("a")); // ["a"]
console.log(leadingSubstrings2("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings2("")); // []

// Result with reduce and push
function leadingSubstrings3(str) {
  const RESULT = [];

  str.split("").reduce((acc, char) => {
    RESULT.push((acc += char));
    return acc;
  }, "");

  return RESULT;
}

console.log(leadingSubstrings3("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings3("a")); // ["a"]
console.log(leadingSubstrings3("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings3("")); // []
