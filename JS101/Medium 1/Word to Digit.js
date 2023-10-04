// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// "Please call me at 5 5 5 1 2 3 4. Thanks."

// Hint: Algorithm
// This exercise is a string processing problem. You can either convert the string into an array and use a list processing strategy—transformation perhaps?—or use regex to find and replace sequences of characters that match a particular pattern.

function wordToDigit(str) {
  const dict = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };
  const arrKeys = Object.keys(dict);

  return str
    .split(" ")
    .map((item) => {
      const word = item.match(/[a-z]/gi).join("");
      return RegExp(item).test(arrKeys) ? item.replace(word, dict[word]) : item;
    })
    .join(" ");
}
console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);

const nums = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const wordToDigit2 = (str) => {
  return str
    .split(" ")
    .map((el) => (el in nums ? nums[el] : el))
    .join(" ");
};
console.log(
  wordToDigit2("Please call me at five five five one two three four. Thanks.")
);
