// Question 1

// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;
// this will not rise an error since it is creating the element with index 6 and value 5 during assignment operation
//

// Bonus:
numbers[4]; // what will this line return? --- this will return undefined but not rise an error
// correction...it does not have undefined even if it returns undefined, it has empty positions which shows when mapped
// numbers.map(x=> typeof x)
// [ 'number', 'number', 'number', <3 empty items>, 'number' ]
// numbers[5] = undefined
// [ 'number', 'number', 'number', <2 empty items>, 'undefined', 'number' ]

// Question 2

// How can you determine whether a given string ends with an exclamation mark (!)?

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

str1.indexOf("!") > -1; // true
str2.indexOf("!") > -1; // false

// Question 3

// Determine whether the following object of people and their age contains an entry for 'Spot':

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty("Lily");

// Question 4

// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
munstersDescription[0]
  .toUpperCase()
  .concat(munstersDescription.slice(1).toLowerCase());
// Solution 4
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();
// my take on the solution
munstersDescription
  .charAt(0)
  .toUpperCase()
  .concat(munstersDescription.substring(1).toLowerCase());
muns;
munstersDescription.substring(munstersDescription.length - 9); // 'd Spooky.'

// Question 5

// What will the following code output?

console.log(false == "0"); // true
console.log(false === "0"); // false

// Question 6

// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

// first way
ages = { ...ages, ...additionalAges };
// second way (given solution)
Object.assign(ages, additionalAges);

// Question 7

// Determine whether the name Dino appears in the strings below -- check each string separately:
let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
str1.includes("Dino"); // false
str2.includes("Dino"); // true
// Given extra solutions
str1.match("Dino") !== null;
str2.match("Dino") !== null;
// I remember also
str1.indexOf("Dino") > -1; // false
str2.indexOf("Dino") > -1; // true

// Question 8

// How can we add the family pet, "Dino", to the following array?
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// does mutate the array
flintstones.push("Dino");
// does not mutate the array
flintstones.concat("Dino");

// Question 9

// In the previous problem, our first answer added 'Dino' to the array like this:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')
// does mutate the array
flintstones.push("Dino", "Happy");
// does not mutate the array
flintstones.concat("Dino", "Happy");

// Question 10

// Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
advice.slice(0, advice.indexOf("house"));
