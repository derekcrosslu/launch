// The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

// Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// Understanding the problem:
// Input: string
// Output: boolean

// Rules:
// - all input characters are numeric
// - dont use standard convertion methdos such as String(), Number() or parseInt()
// - convert the input string to numeric
// - return the resulting integer

// Algorithm:
// - split the string into array strArray
// - initialize an object strNumberDict with keys strings between 1 and 9 maped to  number values  between 1 and 9
// - initialize array numberArray
// - loop through strArray
// - each loop will push the result of the value of object[key]  to numberArray
// - join and return numberArray

function stringToInteger(str) {
  const strArray = str.split("");
  const strNumberDict = Object.fromEntries(
    Array.from({ length: 10 }, (_, i) => [`${i}`, i])
  );
  let numberOut = 0;
  let pointerLeft = 0;
  for (let index = strArray.length - 1; index >= 0; index--) {
    numberOut += strNumberDict[strArray[pointerLeft]] * 10 ** index;
    pointerLeft++;
  }
  return numberOut;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
