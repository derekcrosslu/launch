// console.log(greeting);
// let greeting = 'Hello world!';

// if (true) {
//   let myValue = 20;
// }

// console.log(myValue);

// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//     // let a = 2;
//     // console.log(a);
//   }
// }

// myFunction();

// learning from previous exercise I will say that its output will be "false" 
// since re-declaration on line 4 will only exist inside the "if" block and will not affect line 8

// let a = 5;
// let b = false;

// if (a > 4) {
//  let b = true;  // re-declaration
// }

// console.log(b);

// however "assignment" on line 4 will affect line 8 (this is interesting and not fully understanding it yet)

// let a = 5;
// let b = false;

// if (a > 4) {
//   b = true;  // assignment
// }
// console.log(b);
// // true

// it will output 2 since the pointer to "a" assigned in line 1 will be changed by the reference of parameter "a" in line 3 
// with the value of argument "b" in line 9 and therefore executing inside myFunction scope in line 4 with the new value

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);