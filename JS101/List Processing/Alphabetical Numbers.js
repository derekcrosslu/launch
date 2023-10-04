// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// Understanding the problem:
// Input: array of numbers
// Output: array of numbers

// Instructions:
// - return sorted numeric array
// - return array of numbers sorted by their english word representation

// Algorithm:
// - declare a dictionary object "dict" of every digit 0-19 mapping digits to its english word equivalent
// - sort input array using sort method sort((a,b) => a.localeCompare(b))
// - on each iteration of sort convert each number as key  dict[number] and compare the values as their word representation
// - return the sorted array of numbers

function alphabeticNumberSort(arr) {
  const dict = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
  };
  return arr.sort((a, b) => {
    return dict[a].localeCompare(dict[b]);
  });
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
