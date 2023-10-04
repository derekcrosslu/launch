// What will the following code log to the console and why? Don't run it until you have tried to answer.
let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);
// it will output 2 since the pointer to "a" assigned in line 1 will be changed by the reference of parameter "a" in line 3 
// with the value of argument "b" in line 9 and therefore executing inside myFunction scope in line 4 with the new value