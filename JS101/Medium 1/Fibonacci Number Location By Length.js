// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

// Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// JavaScript's normal Number type can represent integers accurate up to the value of Number.MAX_SAFE_INTEGER, which is the 16-digit value 9007199254740991. Any integer larger than that value loses accuracy. For instance, the following code outputs 1, not 2 as you may expect:

// Copy Code
// console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);
// We'll be working with much larger numbers in this problem. Fortunately, JavaScript now supports a BigInt type that lets you work with massive integers, limited only by the amount of memory available to your program, and the time you can devote to waiting for an answer.

// To use BigInt integers in your solution, simply append the letter n to any numbers you use in your solution: 1n, 1234567890123456789012345678901234567890n, and so on. JavaScript will take care of the rest.

function countDigitsInBigInt(bigIntValue) {
  if (typeof bigIntValue !== "bigint" || bigIntValue < 0) {
    // Check if the input is not a valid non-negative BigInt
    return 0;
  }
  let digitCount = 0;
  const base = 10n; // BigInt representation of 10
  if (bigIntValue === 0n) {
    // Handle the case when the input BigInt is zero
    return 1;
  }
  while (bigIntValue > 0n) {
    bigIntValue = bigIntValue / base;
    digitCount++;
  }
  return digitCount;
}
function fib(digits, count = 1n, n1 = 1n, n2 = 1n) {
  if (countDigitsInBigInt(n1) > digits) return n1;
  if (countDigitsInBigInt(n2) > digits) return [n1, n2];
  return [n1, n2, fib(digits, count + 1n, n1 + n2, n1 + n2 + n2)].flat();
}

function findFibonacciIndexByLength(num) {
  return BigInt(fib(num - 1n).length);
}

// console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// // the last call gave me errors and dont see a way to get out of this, maybe having a more efficient fib function?
// console.log(findFibonacciIndexByLength(10000n) === 47847n);
//   return [n1, n2, fib(digits, count + 1n, n1 + n2, n1 + n2 + n2)].flat();
//   ^
// RangeError: Maximum call stack size exceeded

// The last example may take a minute or so to run.

function findFibonacciIndexByLength2(digitCountBigInt) {
  let currentDigitCount = 1n;
  let lastFibonacciNum = 0n;
  let curFibonacciNum = 1n;
  let iterations = 1n;
  while (currentDigitCount < digitCountBigInt) {
    [curFibonacciNum, lastFibonacciNum] = [
      lastFibonacciNum + curFibonacciNum,
      curFibonacciNum,
    ];
    currentDigitCount = String(curFibonacciNum).length;
    iterations += 1n;
  }
  return iterations;
}

// console.log(findFibonacciIndexByLength2(2n) === 7n); // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength2(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength2(10n) === 45n);
// console.log(findFibonacciIndexByLength2(16n) === 74n);
// console.log(findFibonacciIndexByLength2(100n) === 476n);
// console.log(findFibonacciIndexByLength2(1000n) === 4782n);
// // the last call gave me errors and dont see a way to get out of this, maybe having a more efficient fib function?
// console.log(findFibonacciIndexByLength2(10000n) === 47847n);

function findFibonacciIndexByLength3(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

function findFibonacciIndexByLength4(digits) {
  let count = BigInt(1);
  let n1 = BigInt(1);
  let n2 = BigInt(1);
  let n3 = BigInt(0);
  let n1l = BigInt(0);
  let n2l = BigInt(0);
  let n3l = BigInt(0);
  do {
    n3 = n1 + n2;
    count++;
    n3l = n3.toString().split("").length;
    if (n3l >= digits) {
      count++;
      break;
    }

    n1 = n2 + n3;
    count++;
    n1l = n1.toString().split("").length;
    if (n1l >= digits) {
      count++;
      result = n1.toString().split("").length;
      break;
    }

    n2 = n3 + n1;
    count++;
    n2l = n2.toString().split("").length;
    if (n2l >= digits) {
      count++;
      result = n2.toString().split("").length;
      break;
    }
  } while (n3l < digits);

  return count;
}

console.log(findFibonacciIndexByLength4(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength4(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength4(10n) === 45n);
console.log(findFibonacciIndexByLength4(16n) === 74n);
console.log(findFibonacciIndexByLength4(100n) === 476n);
console.log(findFibonacciIndexByLength4(1000n) === 4782n);
console.log(findFibonacciIndexByLength4(10000n) === 47847n);
