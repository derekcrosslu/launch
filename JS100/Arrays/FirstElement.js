// Write a function that returns the first element of an input array. For example:

function first(array) {
  return array[0];
}
console.log("first(['Earth', 'Moon', 'Mars']): ", first(['Earth', 'Moon', 'Mars']));

// Write a function that returns the first N elements of an array. For example: 

function first(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}
console.log("first(['Earth', 'Moon', 'Mars'],2): ", first(['Earth', 'Moon', 'Mars'],2));

// write a function that returns the n element of an array. For example:

function nth(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(n, n+1);
  }
}
console.log("nth(['Earth', 'Moon', 'Mars'],2): ", nth(['Earth', 'Moon', 'Mars'],2));

// first(['Earth', 'Moon', 'Mars']):  Earth
// first(['Earth', 'Moon', 'Mars'],2):  [ 'Earth', 'Moon' ]
// nth(['Earth', 'Moon', 'Mars'],2):  [ 'Mars' ]

// Write a function that returns the last element of an input array. For example:

function last(array) {
  return array[array.length - 1];
}

console.log("last(['Earth', 'Moon', 'Mars']): ", last(['Earth', 'Moon', 'Mars']));