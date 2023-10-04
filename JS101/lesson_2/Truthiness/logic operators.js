true && true; // true
true && false; // false
false && true; // false
false && false; // false
let num = 5;
num < 10 && num > 3; // true
num < 10 && num > 6; // false
num > 10 && num < 6; // false
num > 10 && num < 3; // false

num < 10 && num > 3;

// let num = 5
// (num < 10) && num > 0 && num % 2 === 1;
// true
// (num < 10) && num > 0 && num % 2 === 1 && false;
// false;
// true || true; // true
// true || false; // true
// false || true; // true
// false || false; // false
// let num = 5;
num < 10 || num > 3; // true
num < 10 || num > 6; // true
num > 10 || num < 6; // true
num > 10 || num < 3; // false
// > false && undefined.length
// = false
// > true && undefined.length
// TypeError: Cannot read property 'length' of undefined
// > true || undefined.length
// = true
// if (name && name.length > 0) {
// console.log(`Hi, ${name}.`);
// } else {
// console.log("Hello, whoever you are.");
// }
//
// // After that review of booleans and logical operators, we're finally able to talk about the notion of truthiness. Truthiness differs from boolean values in that JavaScript evaluates almost all values as true. There are some exceptions, however:
//
// false
// undefined
// null
// 0
// "" (an empty string)
// NaN
// All of these values evaluate as false. Memorize them!
