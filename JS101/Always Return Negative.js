// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

input: Number
output: Number

function negative(num) {
  if (num >= 0) {
    return -num
  }
  else if (num < 0) {
    return num
  }
}
console.log("negative(5): ", negative(5));// -5
console.log("negative(-3) : ", negative(-3) );  // -3
console.log("negative(0): ", negative(0)); // -0