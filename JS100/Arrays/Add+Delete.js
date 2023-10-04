// We are given the following array of energy sources.
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
// with mutation
function AddDelete1(str1, str2, arr) {
  arr.splice(arr.indexOf(str1), 1)
  return arr.concat(str2)
}
console.log(AddDelete1('fossil', 'geothermal', energy));
function AddDelete2(str1, str2, arr) {
  arr.slice(arr.indexOf(str1), arr.indexOf(str1) + 1)
  return arr.concat(str2)
}
console.log(AddDelete2('fossil', 'geothermal', energy));
// withouth mutation
function AddDelete3(str1, str2, arr) {
  return [...arr.filter(str=>str1!==str), str2]
}
console.log(AddDelete3('fossil', 'geothermal', energy));

// [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]
// [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]
// [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]