// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

function removeLastChar(str) {
  return str.slice(0, -1);
}

// Examples:

console.log("removeLastChar('ciao!'): ", removeLastChar('ciao!'));
console.log("removeLastChar('hello'): ", removeLastChar('hello'));
