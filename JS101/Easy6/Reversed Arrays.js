// Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

// You may not use Array.prototype.reverse().

// Understanding the problem:
// Input: array
// Output: array

// Instructions:
// - reverse the input array in place without using reverse

// Algorithm:
// - initialize an index
// - initialize pointerLeft and pointerRight
// - loop through array
// - use splice method to insert rightmost element into position at pointerLeft
// - pop rightmost element of the array
// - increment pointerLeft by 1
// - decrement index
// - return array

function reverse(arr) {
  let index = arr.length - 1;
  let pointerLeft = 0;
  let pointerRight = index;
  while (index >= 0) {
    arr.splice(pointerLeft, 0, arr[pointerRight]);
    arr.pop();
    pointerLeft++;
    index--;
  }
  return arr;
}

function reverse2(arr) {
  if (arr.length <= 1) return arr;

  [...arr].forEach((ele) => {
    arr.unshift(ele);
    arr.pop();
    // console.log("arr: ", arr);
  });

  return arr;
}

let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true
let result_ = reverse2(list);
console.log(result_); // logs [4,3,2,1]
console.log(list === result_); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true
let result1_ = reverse2(list1);
console.log(result1_); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1_); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true
let result2_ = reverse2(list2);
console.log(result2_); // logs  ["abc"]
console.log(list2 === result2_); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
let result3_ = reverse2(list3);
console.log(result3_); // logs []
console.log(list3 === result3_); // logs true
