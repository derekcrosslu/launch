let today = new Date();

let currentYear = today.getFullYear();
console.log("currentYear: ", currentYear);

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// Example usage:
console.log(makeNegative(5)); // Outputs: -5
console.log(makeNegative(-3)); // Outputs: -3
console.log(makeNegative(0)); // Outputs: 0
