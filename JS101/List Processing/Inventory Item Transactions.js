// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

// Understanding the problem:
// Input: array of objects
// Output: array of objects

// Instructions:
// - return only the transactions that have the first argument as id

// Algorithm:
// - initialize empty array
// - loop through the input array
// -      if id === object['id']
// -            push obj to array
// - return array

function transactionsFor(id, arr) {
  const array = [];
  for (let obj of arr) {
    if (id === obj["id"]) {
      array.push(obj);
    }
  }
  return array;
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
