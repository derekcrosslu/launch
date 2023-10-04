// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

// Understanding the problem:
// Input: nested array
// Output: array

// Instructions:
// - return the string by n times within same array

// Algorithm:
// - initialize empty array
// - flatten input array
// - room through input array
// - on each iteration:
// -    if type of value is string
// -          push value
// -    else
// -          push the previous value times current value - 1
// - return array

function buyFruit(arr) {
  const array = [];
  arr.flat().forEach((value, index) => {
    if (typeof value === "string") {
      array.push(value);
    } else {
      array.push(...Array.from({ length: value - 1 }, () => array[index - 1]));
    }
  });
  return array;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
