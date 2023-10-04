// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

function triangle(a1, a2, a3) {
  if (!(a1 > 0 && a2 > 0 && a3 > 0)) return "invalid";
  if (a1 + a2 + a3 !== 180) return "invalid";
  if (a1 === 90 || a2 === 90 || a3 === 90) return "right";
  if (a1 < 90 && a2 < 90 && a3 < 90) return "acute";
  if (a1 > 90 || a2 > 90 || a3 > 90) return "obtuse";
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
console.log(triangle(60, 60, 60)); // "acute"
console.log(triangle(160, 10, 10)); // "obtuse"
console.log(triangle(80, 80, 20)); // "acute"

function triangle2(a, b, c) {
  if (a + b + c !== 180 || Math.min(a, b, c) <= 0) return "invalid";
  if (a === 90 || b === 90 || c === 90) return "right";
  if (Math.max(a, b, c) < 90) return "acute";
  if (Math.max(a, b, c) > 90) return "obtuse";
}

console.log(triangle2(60, 70, 50)); // "acute"
console.log(triangle2(30, 90, 60)); // "right"
console.log(triangle2(120, 50, 10)); // "obtuse"
console.log(triangle2(0, 90, 90)); // "invalid"
console.log(triangle2(50, 50, 50)); // "invalid"
console.log(triangle2(60, 60, 60)); // "acute"
console.log(triangle2(160, 10, 10)); // "obtuse"
console.log(triangle2(80, 80, 20)); // "acute"
