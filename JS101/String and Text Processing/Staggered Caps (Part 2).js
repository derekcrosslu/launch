// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// Understanding the problem:
// Input: string
// Output: string

// Instructions:
// - same as previous exercise but this time ignore non-alphabetic characters

// Algorithm:
// - initialize isCap boolean to false
// - split input string into array of chars
// - map array of chars and in each iteration:
//          - if alphabetic:
//                  toggle isCap
//                  return ternary cap if true no cap if false
//          - else return char
// - join and return array of chars

function staggeredCase(str) {
  let isCap = false;
  return str
    .split("")
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        isCap = !isCap;
        return isCap ? char.toUpperCase() : char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
