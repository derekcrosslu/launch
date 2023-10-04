// What will the following code log to the console and why? Don't run it until you have tried to answer.
// const a = 1;
// function myFunction() {
//   a = 2;
// }
// myFunction(a);
// it will throw a reference error since myFunction is trying to call parameter "a" with does not exist in line 7 
// the call stack will stop executing when it encounters this error however if allowed to continue 
// it will then throw reference error for trying to assign a value to a variable constant

// =( 
// I got it completely wrong, it will throw a TypeError for trying to assign a value to a variable constant

const a = 1;
function myFunction() {
  a = 2;
}
myFunction(a);
// a = 2;
//     ^
// TypeError: Assignment to constant variable.

// it will output undefined and not an error when calling an argument without its corresponding parameter
// let a = 1;
// function myFunction() {
//   a = 2;
// }
// console.log("myFunction(a): ", myFunction(a));
// myFunction(a):  undefined


