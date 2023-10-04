// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// You may assume that a word is any sequence of non-whitespace characters.

// Understanding the problem:
// Input: string
// Output: string

// Instructions:
// - return string with upprtcase swaped to lowercase and videversa every lowercase swaped to uppercase

// Algorithm:
// - split to array of chars
// - loop through array and on every iteration:
//          - if lowercase:
//                  char to uppercase
//          - if uppercase:
//                  char to lowercase
// - join array and return string

function swapCase(str) {
  return str
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) return char.toUpperCase();
      else if (/[A-Z]/.test(char)) return char.toLowerCase();
      else return char;
    })
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
