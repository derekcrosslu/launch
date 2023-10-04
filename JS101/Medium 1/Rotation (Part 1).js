// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

// Understanding the Problem
// To understand the problem better, let's take a closer look at the expected input and output.

// Input
// an array
// Output
// a new array, since we can't mutate the original array
// Rules
// if the input is not an array, return undefined
// if the input is an empty array, return []
// for a non-empty array, slice off the first element and append it to the end of the array

function rotateArray(ar) {
  if (typeof ar !== "object") return undefined;
  else if (ar.length === 0) return [];
  else return [ar.slice(1), ar[0]].flat();
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

console.log(rotateArray([])); // the input array is not mutated

// the input array is not mutated
let array1 = [1, 2, 3, 4];
console.log(rotateArray(array1)); // [2, 3, 4, 1]
console.log("array1: ", array1); // [1, 2, 3, 4]

const rotate = (arr) => {
  if (Array.isArray(arr)) {
    if (arr.length === 0) return [];
    let curr = arr[0];
    const output = arr.slice(1);
    output.push(curr);
    return output;
  }
  return undefined;
};

const arrRotate = (arr, i = 1, output = []) => {
  if (Array.isArray(arr) && i === arr.length) return output;

  let tail = arr[0];
  if (i === arr.length - 1) output.push(tail);
  output.push(arr[i]);
  return arrRotate(arr, i + 1, output);
};

console.log(arrRotate([7, 3, 5, 2, 9, 1]));

console.log(rotate([7, 3, 5, 2, 9, 1]));
console.log(rotate(["a", "b", "c"]));
console.log(rotate(["a"]));
console.log(rotate([1, "a", 3, "c"]));
console.log(rotate([{ a: 2 }, [1, 2], 3]));
console.log(rotate([]));
let array2 = [1, 2, 3, 4];
console.log(rotate(array2));
console.log("array2 after rotate (will not mutate): ", array2);
console.log(rotate(1));

function rotateArray2(array) {
  if (Array.isArray(array)) {
    let copyOfArray = array.slice();
    if (copyOfArray.length === 0) {
      return [];
    } else {
      // let removedElement = copyOfArray.shift();
      // copyOfArray.push(removedElement);
      // return copyOfArray;
      let removedElement = array.shift();
      console.log("removedElement: ", removedElement);
      array.push(removedElement);
      return array;
    }
  }

  return undefined;
}

console.log(
  "rotateArray2([7, 3, 5, 2, 9, 1]): ",
  rotateArray2([7, 3, 5, 2, 9, 1])
);

let array3 = [1, 2, 3, 4];
console.log(rotateArray2(array3));
console.log("will mutate if not copy", array3);
