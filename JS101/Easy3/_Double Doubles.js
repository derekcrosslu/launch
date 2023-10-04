// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

// twice(37); // 74
// twice(44); // 44
// twice(334433); // 668866
// twice(444); // 888
// twice(107); // 214
// twice(103103); // 103103
// twice(3333); // 3333
// twice(7676); // 7676

// Understanding the Problem
// Input:
//  - number
//    - positive integer
//    - no floats
//    - no 0
//    - no negative numbers
//    - no non-numeric strings
// Output:
//  - number
//    - positive integer
//    - no floats
//    - no 0
//    - no negative numbers
//    - no non-numeric strings
// Rules:
//  - if the number is a double number, return the number as-is
//  - if the number is not a double number, return the number multiplied by 2
//  - a double number is an even-length number whose left-side digits are exactly the same as its right-side digits
//  - if the number is odd-length, it is not a double number
//  - if the number is even-length, it may or may not be a double number
//  - if the number is even-length and is a double number, return the number as-is
//  - if the number is even-length and is not a double number, return the number multiplied by 2
//  - if the number is odd-length, return the number multiplied by 2

// Data Structure
// Input:
//  - number
// Output:
//  - number
// Rules:
//  - if the number is a double number, return the number as-is
//  - if the number is not a double number, return the number multiplied by 2
//  - a double number is an even-length number whose left-side digits are exactly the same as its right-side digits
//  - if the number is odd-length, it is not a double number
//  - if the number is even-length, it may or may not be a double number
//  - if the number is even-length and is a double number, return the number as-is
//  - if the number is even-length and is not a double number, return the number multiplied by 2
//  - if the number is odd-length, return the number multiplied by 2

// Algorithm

function doublenumber(num) {
  if (num.length % 2 === 0) {
    const left = num.slice(0, num.length / 2);
    const right = num.slice(num.length / 2);
    return left === right;
  }
}

function twice(num) {
  if (doublenumber(String(num))) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37)); // 74

console.log(twice(44)); // 44

console.log(twice(334433)); // 668866
