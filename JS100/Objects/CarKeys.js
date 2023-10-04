// Write code that stores all of the vehicle property names in an array called keys.

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7,
  keys:[],
  storekeys: function () {
  for (let key in this) {
    this.keys.push(key);
  }
}
};
vehicle.storekeys()
console.log(vehicle.keys);

// [
//   'manufacturer',
//   'model',
//   'year',
//   'range',
//   'seats',
//   'keys',
//   'storekeys'
// ]


let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
const nestedPerson = Object.entries(person)
console.log("nestedPerson: ", nestedPerson);
// nestedPerson:  [ [ 'title', 'Duke' ], [ 'name', 'Nukem' ], [ 'age', 33 ] ]

const personObj = Object.fromEntries(nestedPerson);

console.log("personObj: ", personObj);