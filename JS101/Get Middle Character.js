// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// input: String
// output: String

function centerOf(str) {
  if (str.length > 0) {
    if (str.length % 2 !== 0 ) {
      return str.slice(str.length/2,str.length/2+1)
    }
    else if (str.length % 2 === 0) {
      return str.slice(str.length/2-1,str.length/2+1)
    }
  }
}

console.log("centerOf('I Love JavaScript'): ", centerOf('I Love JavaScript'));// "a"
console.log("centerOf('Launch School'): ", centerOf('Launch School'));    // " "
console.log("centerOf('Launch');  : ", centerOf('Launch'))  // "un"
console.log("centerOf('Launchschool'): ", centerOf('Launchschool')); // "hs"
console.log("centerOf('x'): ", centerOf('x'));  // "x"