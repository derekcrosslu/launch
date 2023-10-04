// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same number of elements.

// Understanding the problem:
// Input:[array,array]
// Output: array

// Instructions:
// - combine two input arrays
// - returns new array alternating elements
// - new array starts with first element of first array
// - input arrays are non-empty and both have same size

// Algorithm:
// - generate two arrays with even and odd numbers respectively
// - convert first input array to an object with odd keys using array of odd numbers
// - convert second input array to object with even keys using array of even numbers
// - combine two objects by destructing them and enclosing them within brackets
// - convert the object back to an array
// - return resulting array

function interleave(arr1, arr2) {
  const oddNumbers = Array.from(
    { length: arr1.length },
    (_, index) => 2 * index + 1
  );
  const evenNumbers = Array.from(
    { length: arr2.length },
    (_, index) => 2 * index + 2
  );

  const keyValuePairArray1 = arr1.map((value, index) => [
    oddNumbers[index],
    value,
  ]);
  const keyValuePairArray2 = arr2.map((value, index) => [
    evenNumbers[index],
    value,
  ]);
  const obj1 = Object.fromEntries(keyValuePairArray1);
  const obj2 = Object.fromEntries(keyValuePairArray2);

  const combinedObject = { ...obj1, ...obj2 };
  return Object.values(combinedObject);
}

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
