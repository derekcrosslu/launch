// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

// Understanding the problem:
// Input: string
// Output: string

// Instructions:
// - reverse only the words containing 5 or more characters
// - the string argument will consist of only letters and spaces
// - words will be separated by a single space

// Algorithm:
// - split the string into an array of words
// - initialize array
// - loop through array of words
// - if word.length >= 5:
// -      reverse word and push it into the array
// - else:
// -      push the word into the array
// - return the array

function reverseWords(str) {
  const wordsArray = str.split(" ");
  const array = [];
  for (let word of wordsArray) {
    if (word.length >= 5) {
      array.push(word.split("").reverse().join(""));
    } else {
      array.push(word);
    }
  }
  return array;
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
