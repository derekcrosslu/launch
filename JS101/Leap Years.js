// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.


// Understanding the Problem:

// Rules:

// The function should take a year (greater than 0) as input.
// Leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100.
// If the year is evenly divisible by 100, it is not a leap year, unless the year is also evenly divisible by 400.
// The function should return true if the year is a leap year, and false if it is not a leap year.
// Algorithm:

// Create a function that takes a year (integer) as an argument.
// Check if the year is evenly divisible by 4.
// a. If not, return false (the year is not a leap year).
// Check if the year is evenly divisible by 100.
// a. If not, return true (the year is a leap year).
// Check if the year is evenly divisible by 400.
// a. If the year is evenly divisible by 400, return true (the year is a leap year).
// b. If the year is not evenly divisible by 400, return false (the year is not a leap year).

function isLeapYear(year) {
  if (year === 0 || typeof year !== 'number') {
    return `enter a valid year`
  } else if (year % 4 !== 0) {
    return false
  } else if (year % 100 !== 0) {
    return true
  } else if (year % 400 === 0) {
    return true
  } else {
    return false
  }
}

// Examples:
console.log(isLeapYear('2016'));      // enter a valid year
console.log(isLeapYear(0));      // enter a valid year
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));      // true
console.log(isLeapYear(240001));      // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true