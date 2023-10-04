// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Understanding the problem:
// Input:string
// Output:object

// Rules:
// - same as previous excersice but exclude non-letters

function wordSizes(str) {
  if (!str) return {};
  const filteredString = str.replace(/[^a-zA-Z ]/g, "");
  const wordsArray = filteredString.split(" ");
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

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes("")); // {}
