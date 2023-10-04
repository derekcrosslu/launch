// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Understanding the problem:
// Input:  string
// Output:string

// Instructions:
// - return the string with every character doubled

// Algorithm:
// - split the string into an array of chars and assign it double
// - map through the array and in every loop return the element concatenated with same element
// - return the map joined

function repeater(str) {
  return str
    .split("")
    .map((item) => item.concat(item))
    .join("");
}

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
