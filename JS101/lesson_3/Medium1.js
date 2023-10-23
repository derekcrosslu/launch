// Question 1

// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:

// let str = "The Flintstones Rock!";
// for (let i = 0; i < 10; i++) {
//   console.log(" ".repeat(i).concat(str));
// }

// Question 2

// Starting with the string:
// let munstersDescription = "The Munsters are creepy and spooky.";
// // Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

// console.log(
//   munstersDescription
//     .split("")
//     .map((char) =>
//       char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     )
//     .join("")
// );

// Question 3

// Alan wrote the following function, which was intended to return all of the factors of number:
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }
// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code? // to check if the number has the divisor

// function factors(number) {
//   if (number <= 0) return 1;
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }
// console.log("factors(12): ", factors(12));
// console.log("factors(-1): ", factors(-1));
// console.log("factors(0): ", factors(0));

// Question 4

// Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she used to add an element to the buffer? You may assume that newElement will always be a primitive value.

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }
// const buffer1 = [];
// const buffer2 = [];

// addToRollingBuffer1(buffer1, 2, 1);
// addToRollingBuffer2(buffer2, 2, 1);
// console.log("buffer1: ", buffer1); // buffer1: [1];
// console.log("buffer2: ", buffer2); // buffer2:  []
// my answer
// the difference is that push modifies the buffer outside the scope of the function whereas concat does not
// answer:
// Yes, there is a difference. While both functions have the same return value, the first implementation mutates the argument represented by buffer. That is, the caller will see that the array is different when the function returns. The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer

// Question 5

// What will the following two lines of code output?
console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // true
// answer
console.log(0.3 + 0.6); // 0.899999
console.log(0.3 + 0.6 === 0.9); // false
console.log(parseFloat(0.3) + parseFloat(0.6) === parseFloat(0.9)); // false

// Question 6

// What do you think the following code will output?
let nanArray = [NaN];
console.log(nanArray[0] === NaN); // false
// answear
console.log(nanArray[0] === NaN); // false
console.log(Number.isNaN(nanArray[0])); // true

// Question 7

// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34
// since primitive numbers are unmutable 'answer' will retain its value after function 'messWithIt'
// answer
console.log(answer - 8); // 34

// Question 8

// One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}
// After writing this function, he typed the following code:
messWithDemographics(munsters);
// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?
// yes, the object property values will be changed adding 42 to each age and changing to 'other' each gender

// Question 9

// Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
// What does the following code output?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); // 'rock'
// answer
// paper

// Question 10

// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
bar(foo()); // yes
// 'no' because foo will always return 'yes'
