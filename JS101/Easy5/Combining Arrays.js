// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

// Understanding the problem:
// Input: array, array
// Output: [array, array]

// Instructions:
// - combine the elements of two arrays
// - there should be no duplication of the array elements
// - both arguments will always be arrays

// Algorithm:
// - convert input arrays into objects
// - assign both destructured object to new object union
// - convert back into array and return new union object

function union(arr1, arr2) {
  const keyValuePairArray1 = arr1.map((value, index) => [value, value]);
  const keyValuePairArray2 = arr2.map((value, index) => [value, value]);
  const unionObject = {
    ...Object.fromEntries(keyValuePairArray1),
    ...Object.fromEntries(keyValuePairArray2),
  };

  return Object.values(unionObject);
}
// the above solution will avoid duplicates even if arrays have different sizes

/// hasta ahora no entiendo la solucion de abajo que copie de otro alumno
function union2(array1, array2) {
  let newArray = [...new Set(array1.concat(array2))];
  return newArray;
}

// esta tampoco la entiendo
const insertElement = (array, targetArray, record) => {
  array.forEach((number) => {
    if (!record.has(number)) {
      record.add(number);
      targetArray.push(number);
    }
  });
};

const union3 = (array1, array2) => {
  let result = [];

  let record = new Set();

  insertElement(array1, result, record);
  insertElement(array2, result, record);

  return result;
};

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union2([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union3([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
