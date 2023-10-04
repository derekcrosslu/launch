function sumOfOddNumbers(numbers) {
  debugger;
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfOddNumbers(numbers)); // Expected output: 25
