// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

// Understanding the problem:
// Input:a string
// Output: boolean

// Instructions:
// - returns true if all alphanumeric chars in the string are uppercase false otherwise
// - ignore white space of any other non-alphanumeric chars

// Algorithm:
// - split string into array
// - loop through array
// - use every method to return true if all values are true false otherwise
// -       if it is a non-alphanumeric char return true
// -       else
// -            return true if is equal to its uppercase version
// - return the result of every method

function isUppercase(str) {
  const regex = /[^a-zA-Z0-9]/g;
  return str
    .split("")
    .every((value) =>
      !value.match(regex) ? value === value.toUpperCase() : true
    );
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
