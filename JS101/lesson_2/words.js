// let words = ["scooby", "do", "on", "channel", "two"];

// words.forEach((word, i) => {
//   console.log("i: ", i);

//   console.log(word);
//   // words.shift();
// });

// console.log(words); // logs ['channel', 'two']

// let name = "johnson";

// ["kim", "joe", "sam"].forEach((fname, i) => {
//   console.log("i: ", i);
//   console.log("name: ", name);
//   name = fname;
//   console.log("name: ", name);
// });

let numbers = [1, 2, 3, 4, 5];
let num;

while ((num = numbers.shift())) {
  console.log(num);
}

console.log(numbers); // []
