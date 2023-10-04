// Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

// Understanding the problem:
// Input:  string
// Output: boolean

// Instructions:
// - return true or false if the string has proper open and closing parenthesis

// Algorithm:
// - split string into array of chars
// - initialize a isOpenClose a counter
// - loop the char array:
// - if the char is '(' and bigger than 0 then increment isOpenClose by 1
// - if the char is  ')' then decrement isOpenClose by 1
// - return isOpenClose === 0

function isBalanced(str) {
  const arr = str.split("");
  let isOpenClose = 0;
  arr.forEach((element) => {
    if (isOpenClose >= 0 && element === "(") {
      isOpenClose++;
    }
    if (element === ")") {
      isOpenClose--;
    }
  });
  return isOpenClose === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
