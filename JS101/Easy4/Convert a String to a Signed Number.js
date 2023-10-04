// In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

// Understanding the problem:
// Input: string
// Output: +/- number

// Rules:
// - same as previous exercise
// - determine if it is positive or negative depending on leading symbol
// - return a positive or negative number

// Algorithm:
// - split the string into array strArray
// - slice the first element of the array and assihn result to symbol variable
// - initialize an object strNumberDict with keys strings between 1 and 9 maped to  number values  between 1 and 9
// - initialize array numberArray
// - initialize multiplier
// - loop through strArray
// - each loop will push the result of the value of object[key]  to numberArray
// - join and return numberArray

function stringToSignedInteger(str) {
  const strArray = str.split("");
  const strNumberDict = Object.fromEntries([
    ...Array.from({ length: 10 }, (_, i) => [`${i}`, i]),
    ["+", +1],
    ["-", -1],
  ]);
  let multiplier = strArray.length - 1;
  let sign = false;
  let numberReturned = 0;
  for (let i = 0; i < strArray.length; i++) {
    sign = strArray[i] === "+" || strArray[i] === "-";
    numberReturned += sign ? 0 : 10 ** multiplier * strNumberDict[strArray[i]];

    multiplier--;
  }
  return (
    numberReturned *
    (strArray[0] === "+" || strArray[0] === "-"
      ? strNumberDict[strArray[0]]
      : 1)
  );
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
console.log(stringToSignedInteger("-570")); // logs -570;
