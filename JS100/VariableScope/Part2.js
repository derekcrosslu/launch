// What will the following code log to the console and why? Don't run it until you have tried to answer.
console.log(greeting);
let greeting = 'Hello world!';
// same answer as before "undefined" because although let has block scope since there are no bracket surrounding variable declaration, it will still be available to the main scope but like before it will not have a value until the call stack arrives at line 3 (after it is invoked)

// =(
  console.log(greeting);
// ReferenceError: Cannot access 'greeting' before initialization