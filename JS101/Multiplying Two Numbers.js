// Create a function that takes two arguments, multiplies them together, and returns the result.

// console.log(multiply(5, 3) === 15); // logs true


function multiply(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1*num2
  } else {
    return false
  }
}
console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(5, '3') === 15); // logs false

// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

function square(num) {
  return multiply(num,num)
}
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square('-8') === 64); // logs flse