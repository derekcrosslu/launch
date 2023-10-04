// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Understanding the problem
// input: string
// output: boolean

// Rules:
// is a palindrome when the string is equal when reversed
// case insensitive
// ignore all non-alphanumeric characters

// Algorithm
// - filter out all non-alphanumeric characters with regex (incluiding spaces)
// - apply lower case input string to make it case insensitive and save it to paliStr
// - split the paliStr into an array paliStrArr
// - declare array of booleans  paliBoolArray to store results
// - loop through the paliStrArr
// - compare each character from the sequence going forward to the sequence going backwards
// - store the value results into array of booleans paliBoolArray
// - return true if all true return false if one of the elements of the array is false

function isRealPalindrome(str) {
  const filteredString = str.replace(/[^a-zA-Z0-9]/g, "");
  const paliStr = filteredString.toLowerCase();
  const paliStrArr = paliStr.split("");
  const paliBoolArray = [];
  const paliReverse = [];
  let leftPointer = 0;
  let rightPointer = paliStrArr.length - 1;

  for (let char of paliStrArr) {
    paliReverse.push(paliStrArr[rightPointer]);
    paliBoolArray.push(paliStrArr[leftPointer] === paliStrArr[rightPointer]);
    leftPointer++;
    rightPointer--;
  }
  return paliBoolArray.every((item) => item === true);
}

console.log("isRealPalindrome(madam): ", isRealPalindrome("madam")); // true
console.log("isRealPalindrome(Madam): ", isRealPalindrome("Madam")); // true (case does not matter)
console.log(
  "isRealPalindrome(Madam, I'm Adam): ",
  isRealPalindrome("Madam, I'm Adam")
); // true (only alphanumerics matter)
console.log("isRealPalindrome(356653): ", isRealPalindrome("356653")); // true
console.log("isRealPalindrome(356a653): ", isRealPalindrome("356a653")); // true
console.log("isRealPalindrome(123ab321): ", isRealPalindrome("123ab321")); // false
