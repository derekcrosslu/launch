// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Understanding the problem:
// Input: array
// Output: undefined

// Instructions:
// - count the frequency that each element of the input array occurrance
// - print the the item and frequency
// - return nothing

// Algorithm:
// - initialize an object vehiclesObject
// - loop through the array
// - use hasItsOwnProperty add 1 or the attribute to object vehiclesObject
// - print  key => value

function countOccurrences(vehicles) {
  const vehiclesObject = {};
  for (let item of vehicles) {
    if (vehiclesObject.hasOwnProperty(item)) vehiclesObject[item] += 1;
    else vehiclesObject[item] = 1;
  }

  for (item in vehiclesObject) {
    console.log(`${item} => ${vehiclesObject[item]}`);
  }
}

function countOccurrences2(list) {
  const counter = {};

  list.forEach((el) => (counter[el] = counter[el] + 1 || 1));

  for (let key in counter) {
    console.log(`${key} => ${counter[key]}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// .node How\ Many\?.js
// (car) => 4;
// (truck) => 3;
// (SUV) => 1;
// (motorcycle) => 2;
// (suv) => 1;

countOccurrences2(vehicles);
