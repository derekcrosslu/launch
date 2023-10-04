// What will the following code log to the console and why? Don't run it until you have tried to answer.
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
// it will output {firstName: 'Jane', lastName: 'Doe'} since the function is changing the value of the object property