// What will the following code log to the console and why? Don't run it until you have tried to answer.
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}
myFunction();
// it will output 1 since a is declared before it is called within myFunction scope 
// and then invoked when myFunction is executed on line 9