// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// Understanding the problem:
// Input: string
// Output: object with 3 properties

// Instructions:
// - from the input string, return an object that has 3 properties:
// - 1) key: lowercase, value: number of lowercase chars
// - 2) key: uppercase, value: number of uppercase chars
// - 3) key: neither, value: number of chars that are numeric, whitespace or non-letters
// - return object

// Algorithm:
// - initialize empty object (incluiding required properties initialized to zero)
// - split string into array
// - loop through the array
// -     on each iteration:
// -          if char is lowercase:
// -                 increment "lowercase" property
// -          if char is uppercase:
// -                 increment "uppercase" property
// -          else:
// -                 increment "neither" property
// - return object

function letterCaseCount(str) {
  const object = { lowercase: 0, uppercase: 0, neither: 0 };
  str.split("").forEach((char) => {
    if (char.match(/[a-z]/)) {
      object["lowercase"] += 1;
    } else if (char.match(/[A-Z]/)) {
      object["uppercase"] += 1;
    } else {
      object["neither"] += 1;
    }
  });
  return object;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
