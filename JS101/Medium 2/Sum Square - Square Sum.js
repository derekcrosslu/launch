// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

function sumSquareDifference(n) {
  let squareSum = 0;
  let sumSquare = 0;
  for (let index = 1; index <= n; index++) {
    squareSum += index;
  }
  for (let index = 1; index <= n; index++) {
    sumSquare += index ** 2;
  }
  return squareSum ** 2 - sumSquare;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
