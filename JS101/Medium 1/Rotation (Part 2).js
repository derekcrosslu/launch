// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

// Understand the Problem
// Let's break down the problem and build a mental model before we attempt to solve it.

// Input: two numbers.
// the original number
// last count digits to rotate
// Output: the rotated number.
// Rules
// Rotate the last count digits of the original number.
// Leave the first digits (not part of the last count digits) in the same order.
// Apply the same rule for the rotation as in the previous exercise: slice off the first of the digits that you want to rotate, and append it to the end of the number.
// Join the first digits with the last count rotated digits, and return it as a number.

// Examples / Test Cases
// The description for this exercise already provides us with a sufficient amount of examples.

// Data Structure and Algorithm
// Data structure considerations:

// If we look carefully at the rules we came up with, we can see verbs such as "slice", "append", and "join". This indicates that even though the inputs and the output are numbers, our ideal data structure is to operate on the numbers as strings.

// Algorithm:

// convert the original number to a string
// split the string into two parts: the part to remain unchanged and the part to be rotated
// rotate the second part
// join the first part back together with the rotated second part
// convert the string to a number and return it

function rotateRightmostDigits(num, digits) {
  const strNum = num.toString().split("");
  const rotate = strNum.splice(strNum.length - digits);

  return Number([...strNum, ...[rotate.slice(1), rotate[0]].flat()].join(""));
}
console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
