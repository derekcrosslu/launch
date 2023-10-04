// Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

// Write an if statement that logs:

// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.
// Test your code with different values for weather.



// creating an array of possible responses
let weather = ["sunny", "rainy", "cloudy","foggy","windy","weird","apocaliptic"];

//generating a random random number with 3 posible index values
const index =  Math.floor(Math.random()*7);

// using the random number to select a random response from the array
// if (weather[index] === "sunny") {
//   console.log("It's a beautiful day!");
// }
// else if (weather[index] === "rainy") {
//   console.log("Grab your umbrella.");
// }
// else {
//   console.log("Let's stay inside.");
// }

console.log("index: ", index);

switch (weather[index]) {
  case "sunny":
    console.log("It's a beautiful day!");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  case "cloudy":
    console.log("No need to bring the sunblock for now.");
    break;
  case "foggy":
    console.log("Drive carefully.");
    break;
  case "windy":
    console.log("Watch out for tornadoes.");
    break;
  default:
    console.log("Let's stay inside.");
    break;
}
