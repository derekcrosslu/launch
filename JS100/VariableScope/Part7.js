// What will the following code log to the console and why? Don't run it until you have tried to answer.
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();
// it will output 1 since the scope (line 4) of myFunction executing on line 7 inherits "a" from global scope
