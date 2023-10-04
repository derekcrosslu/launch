// What will the following code log to the console and why? Don't run it until you have tried to answer.
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}
myFunction();
// it will output 1 and then 2 because although a is being declared twice 
// it is declared first on line 2 outside the "if" scope and then declared again on line 7 inside the "if" scope

// =( 
// looks like "if" block does not inherit its parent scope (I thought it did)
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}
myFunction();
// ReferenceError: Cannot access 'a' before initialization
function myFunction() {
  let a = 1;

  if (true) {
   //  console.log(a);
    let a = 2;
    console.log(a);
  }
}
myFunction();
// 2
// wait... "if" block does inherit its parent scope (now I am confused)
// so this means that by re-declaring "a" somehow it removes parent scope declaration of "a" (scratching my head)
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    // let a = 2;
    // console.log(a);
  }
}
myFunction();
//  1