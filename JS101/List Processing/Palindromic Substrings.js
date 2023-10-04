// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

// Understanding the problem:
// Input: string
// Output: array of strings

// Instructions:
// - create sequence of substrings based on input string
// - each substring needs to be a palindrome
// - case sensitive when detecting a palindrome
// - single characters are not palindromes

// Algorithm:
// - create a palindrome function that returns true if it is a plainidrome using reverse
// - use funccion substrings from previous exercise to return a sequence of substrings basen on input strings
// - inside of function palindromes return function execution substrings and filter the results
// - inside the filter method:
// -      if a substring has 1 char then return false
// -      else return function execution of palindrome that return true or false wheather is a palindrome or not
// - return the resulting sequence

function palindrome(str) {
  return str === str.split("").reverse().join("");
}

function substrings(str) {
  const list = [];
  if (str.length === 1) return str;
  str.split("").forEach((item, i, arr) => {
    if (i === 0) list.push(item);
    else list.push(list[i - 1].concat(item));
  });
  return [list, ...substrings(str.split("").splice(1).join(""))].flat();
}

function palindromes(str) {
  return substrings(str).filter((value) => {
    if (value.length === 1) return false;
    else return palindrome(value);
  });
}

console.log(palindromes("abcd")); // []
console.log(palindromes("Madam")); // [ "Madame", "Ada" ]
// ["madam", "ada"]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// [
//   "ll",
//   "-madam-",
//   "-madam-did-madam-",
//   "madam",
//   "madam-did-madam",
//   "ada",
//   "adam-did-mada",
//   "dam-did-mad",
//   "am-did-ma",
//   "m-did-m",
//   "-did-",
//   "did",
//   "-madam-",
//   "madam",
//   "ada",
//   "oo"
// ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"];
