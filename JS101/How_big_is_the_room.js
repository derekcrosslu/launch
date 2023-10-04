// Import the readline-sync library
const readlineSync = require('readline-sync');

// Ask the user for the length and width of the room
const length = parseFloat(readlineSync.question('Enter the length of the room in meters: '));
const width = parseFloat(readlineSync.question('Enter the width of the room in meters: '));

// Calculate the area in square meters and square feet
const areaMeters = length * width;
const areaFeet = areaMeters * 10.7639;

// Log the results to the console
console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
