// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// input: a single string containing two or more words (string)
// output: next to last word (string)

function penultimate(str) {
  const words = str.split(' ')
  return words[words.length-2]

}
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

