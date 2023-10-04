// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(count, str) {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += str;
  }
  return result;
}
console.log("repeat(3, 'ha'): ", repeat(3, 'ha'));


function repeat_0(count, str) {
  let result = '';
  while (count > 0) {
    result += str;
    count--;
  }
  return result;
}
console.log("repeat_0(3, 'ha'): ", repeat_0(3, 'ha'));


function repeat_1(count, str) {
  return count === 0 ? '' : str + repeat_1(--count, str);
}
console.log("repeat_1(3, 'ha'): ", repeat_1(3, 'ha'));

function repeat_2(count, str) {
  return new Array(count + 1).join(str);
}
console.log("repeat_2(3, 'ha'): ", repeat_2(3, 'ha'));

// repeat(3, 'ha'):  hahaha
// repeat_0(3, 'ha'):  hahaha
// repeat_1(3, 'ha'):  hahaha
// repeat_2(3, 'ha'):  hahaha