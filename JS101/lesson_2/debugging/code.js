function calculateSumAndProduct(arr) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }

  if (sum > 100) {
    console.log("The sum is large:", sum);
  } else if (product < 50) {
    console.log("The product is small:", product);
  } else {
    console.log("The sum is:", sum, "and the product is:", product);
  }
}

calculateSumAndProduct([2, 5, 10]);
