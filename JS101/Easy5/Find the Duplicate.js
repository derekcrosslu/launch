// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

// Understanding the problem:
// Input: array
// Output: number

// Instructions:
// - all values occurs only once exept the duplicate
// - find the duplicate and return it

// Algorithm:
// - initialize object
// - loop through array
// - if object has the element of the array as property return the element
// - else add the element to the object

function findDup(arr) {
  const objectCountDup = {};
  for (let item of arr) {
    if (objectCountDup.hasOwnProperty(item)) {
      return item;
    } else {
      objectCountDup[item] = item;
    }
  }
}

function findDup2(array) {
  let set = new Set();
  for (let index = 0; index < array.length; index += 1) {
    if (set.has(array[index])) {
      return array[index];
    } else {
      set.add(array[index]);
    }
  }

  return [];
}

function findDup3(array) {
  function compareNumbers(num1, num2) {
    return num1 - num2;
  }
  array.sort(compareNumbers);

  return array.filter((num, index) => num === array[index + 1]).shift();
}

console.log(findDup([1, 5, 3, 1])); // 1
console.log(
  findDup([
    18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
    27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
    37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
    3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
    28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
    88, 67, 5, 58,
  ])
); // 73
console.log(findDup2([1, 5, 3, 1])); // 1
console.log(
  findDup2([
    18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
    27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
    37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
    3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
    28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
    88, 67, 5, 58,
  ])
); // 73
