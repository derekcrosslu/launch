// What will the following code log to the console and why? Don't run it until you have tried to answer.
if (true) {
  let myValue = 20;
}
console.log(myValue);
// it will throw a reference error since the variable myValue 
// exist inside the "if" statement scope and not in the main scope 
// also, it is initialized within the "if" statement since its true but outside the main scope (not sure though)
if (true) {
  let myValue = 20;
}
console.log(myValue); 
// ReferenceError: myValue is not defined