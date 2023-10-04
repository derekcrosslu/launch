// Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// Understanding the problem:
// Input: string
// Output: string

// Instructions:
// - returns input string with every word's initial char as caps
// -  all other word's char lower case

// Algorithm:
// - split input string into an array of words
// - loop through the array and on every iteration:
//          - split the word and map
//                      - if char is first item then char toUpperCase
//                      - else char toLowerCase
//          - join the array of chars
// - return joined array of words by a space

function wordCap(str) {
  return str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, index, ar) => {
          if (index === 0) return char.toUpperCase();
          else return char.toLowerCase();
        })
        .join("");
    })
    .join(" ");
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
