// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

// Understanding the problem:
// Input:string
// Output:string

// Instructions:
// - from input string return staggered capitalization
// - staggered means every other character is uppercaps starting with first character
// - non letter chars dont change but do count as letters for staggered sequence

// Algorithm:
// - split string into char array
// - initialize boolean isCap
// - map char array and on each iteration cap if isClap and then toggle isCap
// - join and return char array

function staggeredCase(str) {
  let isCap = false;
  return str
    .split("")
    .map((char) => {
      isCap = !isCap;
      return isCap ? char.toUpperCase() : char.toLowerCase();
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
