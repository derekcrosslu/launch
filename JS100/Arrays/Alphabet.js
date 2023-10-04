// Split the string alphabet into an array of characters.
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(alphabet.split(''));
// [
//   'a', 'b', 'c', 'd', 'e', 'f',
//   'g', 'h', 'i', 'j', 'k', 'l',
//   'm', 'n', 'o', 'p', 'q', 'r',
//   's', 't', 'u', 'v', 'w', 'x',
//   'y', 'z'
// ]

const res = Array.from(alphabet, x => String.fromCharCode(x.charCodeAt(0) + 1));

console.log(res);

console.log([...alphabet]);

console.log(Array.from(alphabet));

const result = [];
for (const char of alphabet) {
  result.push(char);
}
console.log(result);

const result3 = Array.prototype.map.call(alphabet, char => char);
console.log(result3)