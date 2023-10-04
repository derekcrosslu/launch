// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

// Understanding the problem:
// Input: string
// Output: number

// Instructions:
// - convert a string representation of 24 hour format to minutes
// - return a positive number if time is after midnight or negative if time before midnight

// Algorithm:
// - slice input string first two characters and assignt result to hours
// - slice input string and assign result to minutes
// - coherce both minutes and hours to number type
// - multiply hours by 60 and assign the result to minutesFromHours
// - add minutesFromHours to minutes
// - return negative for function beforeMidnight and positive for function afterMidnight

function beforeMidnight(str) {
  const MINUTES_IN_A_DAY = 1440;
  const hours = Number(str.slice(0, 2));
  const hoursToMinutes = hours * 60;
  const minutes = Number(str.slice(3, 5));
  const totalMinutes = hoursToMinutes - minutes;
  return totalMinutes >= MINUTES_IN_A_DAY
    ? totalMinutes - MINUTES_IN_A_DAY
    : totalMinutes;
}
function afterMidnight(str) {
  const MINUTES_IN_A_DAY = 1440;
  const hours = Number(str.slice(0, 2));
  const hoursToMinutes = hours * 60;
  const minutes = Number(str.slice(3, 5));
  const totalMinutes = hoursToMinutes + minutes;
  return totalMinutes >= MINUTES_IN_A_DAY
    ? totalMinutes - MINUTES_IN_A_DAY
    : totalMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other irregularities.
