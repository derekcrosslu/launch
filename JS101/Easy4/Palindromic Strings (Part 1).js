// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Understanding the problem:
// Input: string
// Output: boolean

// Rules:
// - a palindrome reads the same forwards or backwards
// - case sensitive
// - should check if it a palindrome and return true or false

// Algorithm:
// - split the input into an array of chars  paliArr
// - compare paliArr to paliArr.reverse()
// -  return the result

function isPalindrome(str) {
  const paliArr = str.split("");
  return paliArr.join("") === paliArr.reverse().join("");
}

console.log("isPalindrome(madam) ", isPalindrome("madam")); // true
console.log("isPalindrome(Madam): ", isPalindrome("Madam")); // false (case matters)
console.log("isPalindrome(adam i'm adam): ", isPalindrome("madam i'm adam")); // false (all characters matter)
console.log("isPalindrome(356653): ", isPalindrome("356653")); // true
