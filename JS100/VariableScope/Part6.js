// What will the following code log to the console and why? Don't run it until you have tried to answer.
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}
console.log(b);
// learning from previous exercise I will say that its output will be "false" 
// since re-declaration on line 4 will only exist inside the "if" block and will not affect line 8

// however "assignment" on line 4 will affect line 8 (this is interesting and not fully understanding it yet)
let a = 5;
let b = false;

if (a > 4) {
  b = true;
}
console.log(b);
// true