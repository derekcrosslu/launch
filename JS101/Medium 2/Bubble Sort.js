// Bubble Sort is one of the simplest sorting algorithms available. It is not an efficient algorithm, so developers rarely use it in real code. However, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps. At that point, the array is completely sorted.

// 6	2	7	1	4	Start: compare 6 > 2? Yes
// 2	6	7	1	4	Swap
// 2	6	7	1	4	6 > 7? No (no swap)
// 2	6	7	1	4	7 > 1? Yes
// 2	6	1	7	4	Swap
// 2	6	1	7	4	7 > 4? Yes
// 2	6	1	4	7	Swap
// 2	6	1	4	7	2 > 6? No
// 2	6	1	4	7	6 > 1? Yes
// 2	1	6	4	7	Swap
// 2	1	6	4	7	6 > 4? Yes
// 2	1	4	6	7	Swap
// 2	1	4	6	7	6 > 7? No
// 2	1	4	6	7	2 > 1? Yes
// 1	2	4	6	7	Swap
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	1 > 2? No
// 1	2	4	6	7	2 > 4? No
// 1	2	4	6	7	4 > 6? No
// 1	2	4	6	7	6 > 7? No
// 1	2	4	6	7	No swaps; all done; sorted

// We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the Bubble Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

// Understanding the problem:
// Input:  array to be sorted
// Output:  sorted array

// Instructions:
// - return the sorted array
// - use the algorithm describe in the wiki page, that is swaping on every iteration the greater from small untill array is sorted

// Algorithm:
// - initialize sortedCheck
// - initialize SWAP
// - loop through array
//        - if index is smaller than array length and sortedCheck is false:
//               - reset index to zero
//               - reset sortedCheck to false
//        - if first array element is greater then second array element
//               - assign first element to SWAP
//               - assign second element to first element
//               - assign SWAP to second element of the array
//               - turn sortedCheck to true (this will signal a swap)
// - return array after final pass without any swaps

function bubbleSort(arr) {
  let sortedCheck = false;
  let SWAP;
  for (let i = 0; i <= arr.length - 1; i++) {
    // when there are no more swaps on the last pass, it will stop iterating
    if (i === arr.length - 1 && sortedCheck) {
      i = 0;
      // it will turn false every pass
      sortedCheck = false;
    }
    if (arr[i] > arr[i + 1]) {
      SWAP = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = SWAP;
      // it will turn true on every swap
      sortedCheck = true;
    }
  }
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

function bubbleSort2(arr) {
  let NumOfSwaps = 0;

  do {
    NumOfSwaps = 0;

    arr.forEach((elem, i) => {
      let secondElem = arr[i + 1];

      if (elem > secondElem) {
        arr.splice(arr.indexOf(elem), 2, secondElem, elem);
        NumOfSwaps += 1;
      }
    });
  } while (NumOfSwaps);
}

let array2_ = [9, 6, 2, 7, 1, 4];
bubbleSort2(array2_);
console.log(array2_); // [1, 2, 4, 6, 7,9 ]

function bubbleSort3(array) {
  while (true) {
    let temp,
      swapped = false;

    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) return array;
  }
}

let array2__ = [9, 6, 2, 7, 1, 4];
bubbleSort3(array2__);
console.log(array2__); // [1, 2, 4, 6, 7,9 ]
