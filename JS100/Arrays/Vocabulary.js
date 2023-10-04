// We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc..


function logElementsArray(array) {
  for(const nestedarray of array) {
    for(const item of nestedarray) {
      console.log(item);
    }
  }
}
logElementsArray(vocabulary)

// USING interesting way of doing it

function logElementsArray(array) {
  array.forEach(subarray => {
    subarray.forEach(word => {
      console.log(word);
    })
  })
}
logElementsArray(vocabulary)

function logElementsArray(array) {
  return array.flat().forEach(word => console.log(word));
}
logElementsArray(vocabulary)

// happy
// cheerful
// merry
// glad
// tired
// sleepy
// fatigued
// drained
// excited
// eager
// enthused
// animated

