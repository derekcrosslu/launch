/* According to the MDN documentation on operator precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), the exponentiation operator (**) has higher precedence than the multiplication operator (*), which in turn has higher precedence than the division operator (/), which has higher precedence than the addition operator (+).

Based on this, the expression 4 * 5 + 3 ** 2 / 10 is evaluated in the following order:

3 ** 2 is evaluated first, which results in 9.
9 / 10 is evaluated next, which results in 0.9.
4 * 5 is evaluated next, which results in 20.
Finally, 20 + 0.9 is evaluated, which results in 20.9.
Therefore, the expression 4 * 5 + 3 ** 2 / 10 evaluates to 20.9.

*/

console.log("4 * 5 + 3 ** 2 / 10: ", 4 * 5 + 3 ** 2 / 10);
// 20.9

const a = Date.now();
console.log("Date.now: ", a);

let today = new Date();

console.log("today.getYear(): ", today.getYear());
// Returns the year (usually 2–3 digits) in the specified date according to local time
// today.getYear():  123
console.log("today.getFullYear(): ", today.getFullYear());
// returns the year of the specified date according to local time.
//today.getFullYear():  2023

// What is the difference between the two methods and which one should you use?
// getYear() is deprecated and should not be used in modern code as it returns the number of years since 1900

