// Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Understanding the problem:
// Input: string
// Output: object

// Rules:
// words are separated by spaces within the string
// must create an object that stores as keys the number of characters of each word and as values the frequency of the word
// { numChar : freqWord }
// return the object once all words have been parsed

// Algorithm:
// - check input string and return empty object if its an empty string
// - split the string into an array of words wordsArray
// - initialize an object wordStats
// - loop through the array
// - for each word, check the length and store it as key with 1 as value until all words of the array are checked
// - keys in the object will automatically be grouped so the value of the key represents the number of words with its length
// - return wordStats

function wordSizes(str) {
  if (!str) return {};
  const wordsArray = str.split(" ");
  const wordStats = {};
  for (let word of wordsArray) {
    if (wordStats[word.length] > 0) {
      wordStats[word.length] = wordStats[word.length] + 1;
    } else {
      wordStats[word.length] = 1;
    }
  }
  return wordStats;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}
