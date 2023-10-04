// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.


// Understanding the Problem:

// Rules:

// The function should take two strings as arguments.
// The function should determine the length of both strings.
// The function should concatenate the shorter string, the longer string, and the shorter string once again.
// The function should return the concatenated string.
// The strings will be of different lengths.

// Algorithm:

// Create a function that takes two string arguments.
// Compare the length of both strings to determine which one is shorter and which one is longer.
// Initialize an empty string for the result.
// Concatenate the shorter string to the result.
// Concatenate the longer string to the result.
// Concatenate the shorter string to the result again.
// Return the concatenated string.

function shortLongShort(str1, str2) {
  let result = ''
    if (str1.length < str2.length) {
      result += str1 + str2 + str1
    } else {
      result += str2 + str1 + str2
    }
  
  return result
}

// Examples:  

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
console.log(shortLongShort('xds', 'xyz'));         // "xyzxdsxyz"