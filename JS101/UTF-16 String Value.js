// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

// input: string
// output: number
// data structure: integer
// algorith
//.  initialize sum variable
//.  iterate through the string
//.  convert each character to its numeric value using charCodeAt
//.  add the value of the character to the sum variable until the last character is reached
//.  return the sum variable

// using for loop for iteration
function utf16Value(str){
  let sum = 0
  for(let char of str){
    sum += char.charCodeAt(0)
  }
  return sum
}

/// using map to iterate for one a one liner 
function utf16Value2(str){
  return str.split('').map( (char, index) => char.charCodeAt(0)).reduce((a,b)=>a+b,0)
}

console.log("utf16Value('Four score'); : ", utf16Value('Four score')) //  984
console.log("utf16Value('Launch School'); : ", utf16Value('Launch School')) // 1251
console.log("utf16Value('a'); : ", utf16Value('a')); // 97
console.log("utf16Value(''); : ", utf16Value('')); // 0
const OMEGA = "\u03A9"; 
console.log("utf16Value(OMEGA); : ", utf16Value(OMEGA));  // 937
console.log("utf16Value(OMEGA + OMEGA + OMEGA); : ", utf16Value(OMEGA + OMEGA + OMEGA)); // 2811