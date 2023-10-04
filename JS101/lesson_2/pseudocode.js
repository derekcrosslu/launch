// write out pseudocode (both casual and formal) that does the following:

// a function that returns the sum of two numbers
// Take two numbers, num1 and num2.
// Add num1 and num2 together.
// Return the result.

// a function that takes an array of strings, and returns a string that is all those strings concatenated together
// Take an array of strings, named strArray.
// Create an empty string named result.
// For each string in strArray, add it to the result string.
// Return the result string.

// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element. For instance:
everyOther([1, 4, 7, 2, 5]); // => [1,7,5]
// Take an array of integers, named intArray.
// Create an empty array named result.
// Loop through intArray with a step of 2.
//     For each integer, add it to the result array.
// Return the result array.

// a function that determines the index of the 3rd occurrence of a given character in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the function should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return null.
// Take a string named inputString and a character named char.
// Initialize a count to 0.
// Loop through each character in inputString.
//     If the current character matches char, increment count.
//     If count reaches 3, return the current index.
// If the loop completes without finding 3 occurrences, return null.

// // a function that takes two arrays of numbers and returns the result of merging the arrays. The elements of the first array should become the elements at the even indexes of the returned array, while the elements of the second array should become the elements at the odd indexes. For instance:
merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
// Take two arrays, array1 and array2.
// Initialize an empty array named result.
// Loop from 0 to the length of the longer array.
//     If there's an element at the current index in array1, append it to result.
//     If there's an element at the current index in array2, append it to result.
// Return result.
