// mira el ejercisio en https://launchschool.com/exercises/f3bfa787

function memoizeSum() {
  const cache = {};

  function sum(num) {
    console.log("num: ", num);

    if (num === 1) {
      return 1;
    }

    if (cache[num]) {
      return cache[num];
    }

    const result = num + sum(num - 1);
    cache[num] = result;
    return result;
  }

  return sum;
}

const memoizedSum = memoizeSum();

// console.log(memoizedSum(5)); // Calls the memoized function with input 5
// console.log(memoizedSum(3)); // Calls the memoized function with input 3
// console.log(memoizedSum(5)); // Uses the cached result for input 5

function memoFib() {
  const cache = {};
  let result = 0;
  function fibonacci(n) {
    console.log("n: ", n);
    if (n <= 2) return 1;
    if (cache[n]) {
      return cache[n];
    }
    if (n > 2) {
      result = fibonacci(n - 1) + fibonacci(n - 2);
      cache[n] = result;
      return result;
    }
  }
  return fibonacci;
}

const memoizedFib = memoFib();

console.log(memoizedFib(13)); // 233
console.log(memoizedFib(5)); // 5
console.log(memoizedFib(1)); // 1
console.log(memoizedFib(2)); // 1
console.log(memoizedFib(3)); // 2
console.log(memoizedFib(4)); // 3
console.log(memoizedFib(12)); // 144
