
// The Problem

// Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors. 
// For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.
// If no factors are given, use 3 and 5 as the default factors.

// Understanding the Problem (no PEDAC):

// Input and Output:

// Input: A target natural number and a set of one or more natural numbers (the factors)
// Output: The sum of all numbers from 1 up to the target number that are also multiples of one of the factors

// Rules:

// The target should be an arbitrary natural number.
// The factors should be a set of one or more natural numbers.
// Compute the sum of all numbers from 1 up to the target number that are also multiples of one of the factors.
// If no factors are given, use 3 and 5 as the default factors.

// Algorithm:

// Define a function that takes a target natural number and an optional set of factors as input.
// If no factors are provided, use the default factors (3 and 5).
// Initialize a variable to store the sum of the multiples, with an initial value of 0.
// Iterate through all numbers from 1 up to the target number, inclusive.
// a. For each number, check if it is a multiple of any of the factors.
// i. If it is a multiple of one of the factors, add it to the sum.
// Return the sum of the multiples.

// Using PEDAC process
// Problem 

// Problem:
// Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors. If no factors are given, use 3 and 5 as the default factors.

// Example with Problem:
// If the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.

// Problem Analysis:

// Input: A target natural number and a set of one or more natural numbers (the factors)
// Output: The sum of all numbers from 1 up to the target number that are also multiples of one of the factors

// Data Structure:
// The input factors can be represented as an array of numbers.

// Algorithm:
// Define a function that takes a target natural number and an optional set of factors as input.
// If no factors are provided, use the default factors (3 and 5).
// Initialize a variable to store the sum of the multiples, with an initial value of 0.
// Iterate through all numbers from 1 up to the target number, inclusive.
// a. For each number, check if it is a multiple of any of the factors.
// i. If it is a multiple of one of the factors, add it to the sum.
// Return the sum of the multiples.
// Example with Solution:

// Target number: 20
// Factors: [3, 5]
// Iterating through numbers 1 to 20
// Multiples of 3 or 5: [3, 5, 6, 9, 10, 12, 15, 18]
// Sum: 78

// Implicit Requirements:
// The function should be able to handle different sets of factors, including single factors or more than two factors.
// The function should be able to handle cases where the target is smaller or larger than the given factors.
// The program should be efficient enough to handle large target numbers without taking an excessive amount of time or resources.
// The factors should be considered only once while calculating the sum of multiples, i.e., if a number is a multiple of more than one factor, it should be added to the sum only once.
// The input target should be a positive integer, but the program should be able to handle edge cases or provide appropriate error messages if an invalid input is provided.

// Code

function sumOfMultiples(target, factors = [3, 5]) {
  let sum = 0;

  for (let i = 1; i < target; i++) {
    for (const factor of factors) {
      if (i % factor === 0) {
        console.log("i: ", i);

        sum += i;
        break;
      }
    }
  }

  return sum;
}

console.log(sumOfMultiples(20, [3, 5])); // Output: 78
console.log(sumOfMultiples(20, [3])); 

// Testing:
// Test with provided example (target: 20, factors: [3, 5]): Output should be 78
// Test with target: 10, factors: [2, 4]: Output should be 30
// Test with no factors (target: 10): Output should be 33