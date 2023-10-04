// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// input string
// output: string

function crunch(str) {
  const arr = str.split('')
  return arr.filter((a, i) =>arr[i+1]!==a ).join('')
}

 console.log("crunch('ddaaiillyy ddoouubbllee'): ", crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log("crunch('4444abcabccba') : ", crunch('4444abcabccba') );  // "4abcabcba"
console.log("crunch('ggggggggggggggg')  : ", crunch('ggggggggggggggg')  ); // "g"
console.log("crunch('a')   : ", crunch('a')   ); // "a"
console.log("crunch('') : ", crunch('') );   // ""