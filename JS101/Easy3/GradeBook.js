// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
// getGrade(95, 90, 93);    // "A"
// getGrade(50, 50, 95);    // "D"

// understanding the problem:
// input: three integers
// output: String

// rules:
// - letter grades are assigned according to their average numerical range
// - there are no negative numbers
// - input numbers are less or equal 100
// - test each range in decending order

// algorithm:
// - calculate the average of the three input numbers and assign it to a variable 'average'
// - create a condition for each range than returns the comparision of the average with left AND right limits of the range (true or false)

function getGrade(g1, g2, g3) {
  const average = (g1 + g2 + g3) / 3;
  if (average >= 90 && average <= 100) {
    return "A";
  } else if (average >= 80 && average < 90) {
    return "B";
  } else if (average >= 70 && average < 80) {
    return "C";
  } else if (average >= 60 && average < 70) {
    return "D";
  } else if (average >= 0 && average < 60) {
    return "F";
  }
}

console.log("getGrade(95, 90, 93): ", getGrade(95, 90, 93));
console.log("getGrade(50, 50, 95): ", getGrade(50, 50, 95));
console.log("getGrade(80, 85, 88): ", getGrade(80, 85, 88));
console.log("getGrade(75, 60, 70): ", getGrade(75, 60, 70));
console.log("getGrade(90, 92, 88): ", getGrade(90, 92, 88));
console.log("getGrade(65, 70, 75): ", getGrade(65, 70, 75));
console.log("getGrade(100, 95, 97): ", getGrade(100, 95, 97));
