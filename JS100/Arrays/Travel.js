// The destinations array contains a list of travel destinations.
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
// Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

// For example: When checking whether 'Barcelona' is contained in destinations, the expected output is true, whereas the expected output for 'Nashville' is false.

function contains(destination, destinations) {
  // using regex
  return destinations.join().match(destination) ? true : false;
  // return destinations.test(destination);
}
// another way
function contains(destination, destinations) {
  return destinations.includes(destination);
}
// another way
function contains(destination, destinations) {
  return destinations.indexOf(destination) !== -1;
}
// another way
function contains(destination, destinations) {
  return destinations.some(function (dest) {
    return dest === destination;
  });
}
// another way using regex test
function contains(destination, destinations) {
  return destinations.some(function (dest) {
    return new RegExp(destination).test(dest);
  });
}

function contains(destination, destinations) {
  return destinations.some((dest)=> dest === destination)
}
function contains(destination, destinations) {
  return destinations.some(dest=> new RegExp(destination).test(dest)) 
}
console.log("contains('Barcelona', destinations): ", contains('Barcelona', destinations));
console.log("contains('Nashville', destinations): ", contains('Nashville', destinations));

// contains('Barcelona', destinations):  true
// contains('Nashville', destinations):  false
