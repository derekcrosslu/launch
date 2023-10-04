// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Understanding the problem:
// Input:  string
// Output:  string

// Instructions:
// - return the input string with consonants doubled
// - dont double vocals, digits, punctuation or whitespace
// - asume case insensitive

// Algorithm:
// - split the input string into an array
// - using regex to select consonants only return the mapped array within each loop with double the consonants selected

function doubleConsonants(str) {
  const regex = /[^\p{P}\d\saeiou]/giu;
  return str
    .split("")
    .map((item) => (item.search(regex) === 0 ? item.concat(item) : item))
    .join("");
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
