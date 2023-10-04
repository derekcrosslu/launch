// How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function isTypeArray(input) {
  // Is input an array?
  return typeof input === 'object' && input instanceof Array;
}
console.log(isTypeArray([1, 2, 3]));
console.log(isTypeArray('hola'));
console.log(isTypeArray(undefined));

function isTypeArray(input) {
  return Array.isArray(input);
}
console.log(isTypeArray([1, 2, 3]));
console.log(isTypeArray('hola'));
console.log(isTypeArray(undefined));

// another way
function isTypeArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]';
}
console.log(isTypeArray([1, 2, 3]));
console.log(isTypeArray('hola'));

function filter(input) {
  console.log("filter: ");
  console.log(input.constructor === Array);
}
filter([1, 2, 3]);
filter('hola');

// true
// false
// false
// true
// false
// false
// true
// false