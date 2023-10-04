// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// Understanding the problem:
// Input: string
// Output:string

// Rules:
// - words are separated by spaces within the words (no spaces before or after)
// - swap first and last letter of every word
// - each word has at leat a char
// - string will have at least one word

// Algorithm:
// - if empty string return empty string
// - split input string separated by spaces into array wordsArray
// - initialize  swapedWordsArray
// - initialize swap
// - loop through wordsArray
// - for each loop initialize wordSplit
// - split each word into wordSplit array
// - assign last value of wordSplit to swap
// - assign the first value of wordSplit to the last value
// - assign swap to first value of the array
// - join and push the word into swapedWordsArray
// - join and return the array swapedWordsArray

function swap(str) {
  if (!str) return "";
  const wordsArray = str.split(" ");
  const swapedWordsArray = [];
  let swap = "";
  for (let word of wordsArray) {
    const wordSplit = word.split("");
    swap = wordSplit[wordSplit.length - 1];
    wordSplit[wordSplit.length - 1] = wordSplit[0];
    wordSplit[0] = swap;
    swapedWordsArray.push(wordSplit.join(""));
  }
  return swapedWordsArray.join(" ");
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
