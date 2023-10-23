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
