// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// function triangle(n1, n2, n3) {
//   if (!(n1 > 0 && n2 > 0 && n3 > 0)) return "invalid";
//   if (n1 === n2 && n2 === n3) return "equilateral";

//   if (n1 > n2 && n1 > n3) {
//     if (n1 >= n2 + n3) return "invalid";
//     if (n3 === n2) return "isosceles";
//     return "scalene";
//   }
//   if (n2 > n1 && n2 > n3) {
//     if (n2 >= n1 + n3) return "invalid";
//     if (n1 === n3) return "isosceles";
//     return "scalene";
//   }
//   if (n3 > n1 && n3 > n2) {
//     if (n3 >= n1 + n2) return "invalid";
//     if (n1 === n2) return "isosceles";
//     return "scalene";
//   }
//   if (n1 === n2 || n1 === n3 || n2 === n3) return "isosceles";
// }

// console.log(triangle(3, 3, 3)); // "equilateral"
// console.log(triangle(3, 3, 1.5)); // "isosceles"
// console.log(triangle(3, 4, 5)); // "scalene"
// console.log(triangle(0, 3, 3)); // "invalid"
// console.log(triangle(3, 1, 1)); // "invalid"
// console.log(triangle(3, 3, 7)); // "isosceles"

// Valid triangles must have the following two characteristics:

// All sides must have lengths greater than zero — i.e., the shortest side is greater than zero (shortest > 0).
// The sum of the two shortest sides must be greater than the longest side (shortest + middle > longest).

// Input: three numbers
// Output: string

// Data Structure: - array of side lengths (sorted in ascending order)

// Algorithm: - helper functions
//                 - `isValid`
//                     - args: three numbers
//                     - sort numbers in ascending order
//                     - guard clause against side lengths of 0
//                     - if sides[0] + sides[1] > sides[2], return true
//                 - `isEquilateral`
//                     - args: three numbers
//                     - if side1 === side2 === side3, return true
//                 - `isIsosceles`
//                     - args: three numbers
//                     - sort numbers in ascending order
//                     - if sides[0] === sides[1] !== sides[2], return true
//                     - else if sides[1] === sides[2] !== sides[0], return true
//            - if triangle isn't valid, return "invalid"
//            - if triangle is equilateral, return "equilateral"
//            - if triangle is isoscles, return "isosceles"
//            - return scalene
// */

function isValid(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  if (sortedSides.some((side) => side === 0)) return false;
  return sortedSides[0] + sortedSides[1] > sortedSides[2];
}

function isEquilateral(side1, side2, side3) {
  return side1 === side2 && side1 === side3;
}

function isIsosceles(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  if (sortedSides[0] === sortedSides[1] && sortedSides[1] !== sortedSides[2]) {
    return true;
  } else if (
    sortedSides[1] === sortedSides[2] &&
    sortedSides[1] !== sortedSides[0]
  ) {
    return true;
  } else return false;
}

function triangle2(side1, side2, side3) {
  if (!isValid(side1, side2, side3)) return "invalid";
  if (isEquilateral(side1, side2, side3)) return "equilateral";
  if (isIsosceles(side1, side2, side3)) return "isosceles";
  return "scalene";
}

// function isValid(side1, side2, side3) {
//   let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
//   if (sortedSides.some((side) => side === 0)) return false;
//   return sortedSides[0] + sortedSides[1] > sortedSides[2];
// }

// function isEquilateral(side1, side2, side3) {
//   return side1 === side2 && side1 === side3;
// }

// function isIsosceles(side1, side2, side3) {
//   let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
//   if (sortedSides[0] === sortedSides[1] && sortedSides[1] !== sortedSides[2]) {
//     return true;
//   } else if (
//     sortedSides[1] === sortedSides[2] &&
//     sortedSides[1] !== sortedSides[0]
//   ) {
//     return true;
//   } else return false;
// }

// function triangle(side1, side2, side3) {
//   if (!isValid(side1, side2, side3)) return "invalid";
//   if (isEquilateral(side1, side2, side3)) return "equilateral";
//   if (isIsosceles(side1, side2, side3)) return "isosceles";
//   return "scalene";
// }

// console.log(triangle(3, 3, 3)); // "equilateral"
// console.log(triangle(3, 3, 1.5)); // "isosceles"
// console.log(triangle(3, 4, 5)); // "scalene"
// console.log(triangle(0, 3, 3)); // "invalid"
// console.log(triangle(3, 1, 1)); // "invalid"
// console.log(triangle(3, 3, 6)); // "invalid"

console.log(triangle2(3, 3, 3)); // "equilateral"
console.log(triangle2(3, 3, 1.5)); // "isosceles"
console.log(triangle2(3, 4, 5)); // "scalene"
console.log(triangle2(0, 3, 3)); // "invalid"
console.log(triangle2(3, 1, 1)); // "invalid"
console.log(triangle2(3, 3, 6)); // "isosceles"
