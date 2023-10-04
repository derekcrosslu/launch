// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

// Understanding the problem
// Input: integer
// Output: boolean

// Rules:
// return true if its a palindrome
// only numeric values
// false if input is a string

// Algorithm
// - check if input is number type and return false if its not
// - convert numeric input to a string and split into array strArray
// - initialize boolean array to store results boolArray
// - initialize leftPointer and rightPointer variables
// - loop through strArray
// - compare each elements of the sequence forward versus backwards and store each result as an element in the array boolArray
// - return true if all the elements of the boolArray are true and false if one of the elemets is false

function isPalindromicNumber(num) {
  if (typeof num !== "number") return false;
  const strArray = num.toString().split("");
  const boolArray = [];
  let leftPointer = 0;
  let rightPointer = strArray.length - 1;
  for (let char of strArray) {
    boolArray.push(strArray[leftPointer] === strArray[rightPointer]);
    leftPointer++;
    rightPointer--;
  }
  return boolArray.every((item) => item === true);
}

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
