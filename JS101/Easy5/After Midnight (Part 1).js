// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

// You may not use javascript's Date class methods.

// Understanding the problem:
// Input:  number
// Output: string

// Instructions:
// - return time of the day based on the integer input
// - input represents minutes before or after midnight (-/+)
// - convert number to string representing (hh:mm)

// Algorithm:
// - initialize hours and minutes number variables
// - divide input by 60 and assign the floor of the result to totalMinutes
// - divide totalMinutes by 24 and assign the floor of the result to hours
// - assign the residual of the division by 60  to minutes
// - if input less than cero:
// -    if hours is cero then use 0 for hours and substract minutes from 60
// -    if hours is not 0 then substract hours to 24 and minutes from 60
// - if input more than cero then add hours to 24 and minutes to 60
// - return "hours:minutes"
// - disregard other complications

function timeOfDay(num) {
  let totalMinutes = Math.floor(num / 60);
  let hours = Math.floor(totalMinutes % 24);
  let minutes = num % 60;
  const integerStr = (integer) =>
    integer.toString().length > 1
      ? integer.toString()
      : `0${integer.toString()}`;
  if (num === 0) return "00:00";
  if (num < 0) {
    hours = hours === 0 ? 0 : 24 + hours;
    minutes = 60 + minutes;
    return `${integerStr(hours)}:${integerStr(minutes)}`;
  }
  if (num > 0) {
    return `${integerStr(hours)}:${integerStr(minutes)}`;
  }
}

console.log(timeOfDay(0) === "00:00"); // logs true
console.log(timeOfDay(-3) === "23:57"); // logs true
console.log(timeOfDay(35) === "00:35"); // logs true
console.log(timeOfDay(-1437) === "00:03"); // logs true
console.log(timeOfDay(3000) === "02:00"); // logs true
console.log(timeOfDay(800) === "13:20"); // logs true
console.log(timeOfDay(-4231) === "01:29"); // logs true
// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.
