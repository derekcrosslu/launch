// Question 1

// Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

console.log(first()); //  { prop1: 'hi there' }
console.log(second()); //  undefined

// Question 2

// What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
// Try to answer without running the code or looking at the solution.
console.log(object); //{ first: [1] };
// answer
console.log(object); //{ first: [1,2] };
// here numArray is a reference to the original
// in order to avoid this use slice() or concat() like:
// let numArray = object["first"].slice();
// let numArray = object["first"].concat();

// Question 3

// // Given the following similar sets of code, what will each code snippet print?
// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ['two'] // the correct answer is ['one']
// console.log(`two is: ${two}`); // ['three'] // the correct answer is ['two']
// console.log(`three is: ${three}`); // ['one'] // the correct answer is ['three']

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // ['one']
// console.log(`two is: ${two}`); // ['two']
// console.log(`three is: ${three}`); // ['three']

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // ['two']
console.log(`two is: ${two}`); // ['three']
console.log(`three is: ${three}`); // ['one']

// Question 4

// Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}
function isAnIpNumber2(str) {
  if (/[0-9]/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   let arr = [];
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber2(word)) {
//       return false;
//     } else {
//       arr.push(word);
//     }
//   }

//   return arr.length === 4 ? true : false;
// }

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

// Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

// Help Ben fix his code.
console.log(isDotSeparatedIpAddress("aa.4.5.11"));
console.log(isDotSeparatedIpAddress("256.4.5.11"));
console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
console.log(/^[\d]+$/.test("99")); // true
console.log(/^[\d]+$/.test("a99")); // false
console.log(/^[0-9]+$/.test("99")); // true
console.log(/^[0-9]+$/.test("a99")); // false

/// another case for question 3 (this will change the array since we are reassigning array elements which is an example of call sharing)
function reassign(arrA, arrB) {
  arrA[0] = arrB[0];
  arrB[0] = arrA[0];
}

const arrA = [1, 2];
const arrB = [3, 4];

reassign(arrA, arrB);
console.log("arrA: ", arrA); //  [ 3, 2 ]
console.log("arrB: ", arrB); // [ 3, 4 ]

// on the other hand this does not alter the array since we are only reassigning the array itself not the elements
function reassign1(arrA1, arrB1) {
  arrA1 = arrB1;
  arrB1 = arrA1;
}

const arrA1 = [1, 2];
const arrB1 = [3, 4];

reassign1(arrA1, arrB1);
console.log("arrA1: ", arrA1); // [ 1, 2 ]
console.log("arrB1: ", arrB1); // [ 3, 4 ]
