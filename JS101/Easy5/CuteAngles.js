// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Understanding the problem:
// Input: number (float)
// Output: string

// Instructions:
// - input float represents degrees of an angle between 0 and 360
// - it represents degrees, minutes and seconds in number format
// - return the string representation symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds
// - there are 60 minutes in a degree and 60 seconds in a minute

// Algorithm:
// - assign the decimals portion of the input number (between 1 and -1) to degreesStr variable
// - convert to string and assign the integer part of the input number to integerStr string variable
// - if the decimal portion is 0 return integerStr concatenated to the string °00'00"
// - assign decimals to remainingDegrees
// -  calculate grossMinutes by multiplying remainingDegrees by 60
// -  assign the remeinder of grossMinutes to remainingMinutes
// - calculate grossSeconds by multiplying remainingMinutes by 60
// - assign remeinder of grossSeconds to remeinderSeconds
// - assign the difference between grossMinutes and remaindingMinutes to netMinutes
// - assign the difference between grossSeconds and remaindingSeconds to netSeconds
// - concatenate an extra '0' string to minutes and seconds if the string length is 1
// - concatenate and return degrees, minutes and seconds

function dms(num) {
  const remainingDegrees = num % 1;
  const degrees = (num - remainingDegrees).toString();
  if (num % 1 === 0) return degrees.concat("°00'00\"");
  const grossMinutes = remainingDegrees * 60;
  const remainingMinutes = grossMinutes % 1;
  const grossSeconds = remainingMinutes * 60;
  const remainingSeconds = grossSeconds % 1;
  const netMinutes = (grossMinutes - remainingMinutes).toString();
  const netSeconds = (grossSeconds - remainingSeconds).toString();
  const minutes = netMinutes.length === 2 ? netMinutes : "0".concat(netMinutes);
  const seconds = netSeconds.length === 2 ? netSeconds : "0".concat(netSeconds);

  return degrees.concat(`°${minutes}'${seconds}"`);
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.
