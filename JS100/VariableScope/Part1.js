console.log(greeting);
var greeting = 'Hello world!';
// it will output undefined because the variable greeting will get registered 
// on the call stack but don't get a value until after it is called by console.log

// what is interesting here is that if we comment out variable declaration
// it will throw an error
console.log(greeting);
// var greeting = 'Hello world!';
// ReferenceError: greeting is not defined

// whereas if we uncomment variable declaration it will output undefined
console.log(greeting);
var greeting = 'Hello world!';
// undefined