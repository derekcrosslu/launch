// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

// Understanding the problem:
// Input: string
// Output: string

// Instructions:
// - return string with words in reverse order

// Algorithm:
// - split string into array of words
// - reverse the array
// - return the reversed array

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseSentence("")); // ""
console.log(reverseSentence("Hello World")); // "World Hello"
console.log(reverseSentence("Reverse these words")); // "words these Reverse"
