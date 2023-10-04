// mira el ejercisio https://launchschool.com/exercises/13738ab2

function fibonacci(n) {
  let n1 = 1;
  let n2 = 1;
  let fib;
  while (n > 2) {
    if (n <= 2) return 1;
    fib = n1 + n2;
    n1 = n2;
    n2 = fib;
    n--;
  }
  return fib;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
console.log(fibonacci(78)); // 8944394323791464
console.log(fibonacci(80)); // 23416728348467684
console.log(fibonacci(100)); // 354224848179262000000
console.log(fibonacci(101)); // 573147844013817200000
console.log(fibonacci(102)); // 927372692193079200000
