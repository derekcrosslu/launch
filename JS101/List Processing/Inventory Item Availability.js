// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

// Understanding the problem:
// Input: number, array of objects
// Output: boolean

// Instructions:
// - return true only if sum of quantity property values is bigger than zero
// - consider in as positive values and out as negative values
// - filter transactions that match first argument id value

// Algorithm:
// - initialize sum to 0
// - loop through the transaction list
// -      if id === object['id']:
// -             if object['movement']==='in':
// -                    increase sum by object['quantity'] value
// -             if object['movement']==='out':
// -                    decrease sum by object['quantity'] value
// - return sum > 0

function isItemAvailable(id, transactions) {
  let sum = 0;
  for (let obj of transactions) {
    if (id === obj["id"]) {
      if (obj["movement"] === "in") {
        sum = sum + obj["quantity"];
      }
      if (obj["movement"] === "out") {
        sum = sum - obj["quantity"];
      }
    }
  }
  return sum > 0;
}

// another way using the transactionsFor directly without any modifications

function transactionsFor(id, arr) {
  const array = [];
  for (let obj of arr) {
    if (id === obj["id"]) {
      array.push(obj);
    }
  }
  return array;
}

function isItemAvailable2(id, transactions) {
  let sum = 0;
  transactionsFor(id, transactions).forEach((obj) => {
    if (obj["movement"] === "in") sum = sum + obj["quantity"];
    if (obj["movement"] === "out") sum = sum - obj["quantity"];
  });
  return sum > 0;
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

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true

console.log(isItemAvailable2(101, transactions)); // false
console.log(isItemAvailable2(103, transactions)); // false
console.log(isItemAvailable2(105, transactions)); // true
