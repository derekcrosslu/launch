// Question 1

// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice =
  "Few things in life are as important as house training your pet dinosaur.";
advice.replace("important", "urgent");

// Question 2

// The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the original array as shown below. Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers.slice().reverse();
numbers.slice().sort((num1, num2) => num2 - num1);
let newNumbers = [];
numbers.forEach((x) => {
  let s = x;
  s > x ? newNumbers.push(x) : newNumbers.push(s);
});
numbers.forEach((x) => arr.unshift(x));

// Question 3

// Given a number and an array, determine whether the number is included in the array.
