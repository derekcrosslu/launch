// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

// Understanding the problem:
// Input:string
// Output: string

// Instructions:
// - return string with vowels removed

// Algorithm:
// - declare a regex constant
// - return mapped array
// - on each iteration:
// -    split input string to array
// -    filter vowels from array using regex (i for case insensitive)
// -    join the array to return strings

function removeVowels(strArr) {
  const regex = /[aeiou]/i;
  return strArr.map((str) =>
    str
      .split("")
      .filter((value) => !value.match(regex))
      .join("")
  );
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]
