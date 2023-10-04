// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// Understanding the Problem:
// Input: number
// Output: number
// Rules:
//  - double number: even length number with left side digits the same as right side
//  - if input is double number, return input
//  - if input is not double number, return input * 2

// Algorithm:
// - convert number to string
// - get length of string
// - get half length of string
// - get first half of string
// - get second half of string
// - if first half === second half, return input
// - else return input * 2

function twice(num) {
  const strNum = num.toString();
  strLength = strNum.length;
  fStrHalf = strNum.slice(0, strLength / 2);
  sStrHalf = strNum.slice(strLength / 2, strLength);
  const isDoubleNum = strLength % 2 === 0 && fStrHalf === sStrHalf;
  if (isDoubleNum) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103 (double number)
console.log(twice(3333)); // 3333 (double number)
console.log(twice(7676)); // 7676  (double number)
