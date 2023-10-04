// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

// Understanding the problem:
// Input: string
// Output: array of strings

// Instructions:
// - create a list of substrings from the input string
// - each substring should contain chars of the original substring
// - the sequence should start with the first char of the input string
// - then add next char of the input string to the first to create the next and for each subsecuent substring sequencially untill the last char
// - when the last char of the string is added then remove the first char of the substring to create the next substring and so on until only the last char of the string is left to finish the sequence

// Algorithm:
// - split input string into an array
// - initialize empty array 'list'
// - if the input string has 1 char then return it to stop the recursion
// - loop through the array
// -     if it is the first char:
// -           push the char to the empty array
// -     else
// -           concat array[i-1] to current item and push to array
// - return an array that has the list of substrings as the first element and the function execution using split splice join method to eliminate first char as the second element to iterate recursively to fill the sequence until it reaches the last char of the input string inside the array which needs to be flattened  to merge the substring arrays within the larger array surrounding the recursion

function substrings(str) {
  const list = [];
  if (str.length === 1) return str;
  str.split("").forEach((item, i, arr) => {
    if (i === 0) list.push(item);
    else list.push(list[i - 1].concat(item));
  });
  return [list, ...substrings(str.split("").splice(1).join(""))].flat();
}

console.log(substrings("abcde"));

// returns
// [
//    'a',    'ab',    'abc',
//    'abcd', 'abcde', 'b',
//    'bc',   'bcd',   'bcde',
//    'c',    'cd',    'cde',
//    'd',    'de',    'e'
// ]

// another way to do it is by using previous exercise as a helper function
function leadingSubstrings(str) {
  const array = [];
  str.split("").forEach((item, i, arr) => {
    if (i === 0) array.push(item);
    else array.push(array[i - 1].concat(item));
  });
  return array;
}

// then do the same loop but pushing the result of helper function on each iteration
function substrings2(str) {
  const array = [];
  str.split("").forEach((item, i, arr) => {
    array.push(...leadingSubstrings(str.split("").splice(i).join("")));
  });
  return array;
}
console.log(substrings2("abcde"));

// returns
// [
//    'a',    'ab',    'abc',
//    'abcd', 'abcde', 'b',
//    'bc',   'bcd',   'bcde',
//    'c',    'cd',    'cde',
//    'd',    'de',    'e'
// ]
function leadingSubstrings2(arr) {
  return arr.map((_, index) => arr.slice(0, index + 1).join(""));
}

function substrings3(str) {
  let result = [];
  let strArr = str.split("");

  while (strArr.length > 0) {
    result.push(leadingSubstrings2(strArr));
    strArr.shift();
  }

  return result.flat();
}

console.log(substrings3("abcde"));
