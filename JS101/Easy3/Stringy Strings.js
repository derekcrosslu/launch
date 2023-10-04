// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

// input : number
// output:  string

function stringy(num) {
  const output = []
  for (let index = 0; index < num; index++) {
    if (index === 0) {
      output.push(1)
    } else if (index % 2 !== 0) {
      output.push(0)
    } else {
      output.push(1)
    }
  }
  return output.join('')
}



console.log("stringy(6)    : ", stringy(6)    );
console.log("stringy(9)   : ", stringy(9)   );
console.log("stringy(4)  : ", stringy(4)  );
console.log("stringy(7)    : ", stringy(7)    );