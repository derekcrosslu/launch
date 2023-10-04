// Write a function that checks whether a string is empty or not. For example:
function isBlank1(str) {
  return str.length === 0;
}
console.log("isBlank1('mars'): ", isBlank1('mars'));
console.log("isBlank1('  '): ", isBlank1('  '));
console.log("isBlank1(''): ", isBlank1(''));
function isBlank2(str) {
  return str === '';
}
console.log("isBlank2('mars'): ", isBlank2('mars'));
console.log("isBlank2('  '): ", isBlank2('  '));
console.log("isBlank2(''): ", isBlank2(''));
function isBlank3(str) {
  return !str;
}
console.log("isBlank3('mars'): ", isBlank3('mars'));
console.log("isBlank3('  '): ", isBlank3('  '));
console.log("isBlank3(''): ", isBlank3(''));
// check using regex test but ignoring whitespace
function isBlank4(str) {
  return /^\s*$/.test(str);
}
console.log("isBlank4('mars'): ", isBlank4('mars'));
console.log("isBlank4('  '): ", isBlank4('  '));
console.log("isBlank4(''): ", isBlank4(''));
// using regex but without ignoring whitespace
function isBlank5(str) {
  return /^$/.test(str);
}
// using search
function isBlank6(str) {
  return str.search(/\S/) === -1;
}
console.log("isBlank6('mars'): ", isBlank6('mars'));
console.log("isBlank6('  '): ", isBlank6('  '));
console.log("isBlank6(''): ", isBlank6(''));
// using a while loop
function isBlank7(str) {
  let i = 0;
  while (str[i] === '') {
    i++;
  }
  return i === str.length;
}
console.log("isBlank7('mars'): ", isBlank7('mars'));
console.log("isBlank7('  '): ", isBlank7('  '));
console.log("isBlank7(''): ", isBlank7(''));
// using a for loop
function isBlank8(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '') {
      return false;
    }
  }
  return true;
}
console.log("isBlank8('mars'): ", isBlank8('mars'));
console.log("isBlank8('  '): ", isBlank8('  '));
console.log("isBlank8(''): ", isBlank8(''));
// using slice and a for loop with a break
function isBlank9(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 1) !== '') {
      return false;
    }
  }
  return true;
}
console.log("isBlank9('mars'): ", isBlank9('mars'));
console.log("isBlank9('  '): ", isBlank9('  '));
console.log("isBlank9(''): ", isBlank9(''));


// isBlank('mars'):  false
// isBlank('  '):  false
// isBlank(''):  true
// isBlank2('mars'):  false
// isBlank2('  '):  false
// isBlank2(''):  true
// isBlank3('mars'):  false
// isBlank3('  '):  false
// isBlank3(''):  true
// isBlank4('mars'):  false
// isBlank4('  '):  true
// isBlank4(''):  true
// isBlank6('mars'):  false
// isBlank6('  '):  true
// isBlank6(''):  true  // considering whitespace as "empty" to demo the alternative
// isBlank7('mars'):  false
// isBlank7('  '):  false
// isBlank7(''):  true
// isBlank8('mars'):  false
// isBlank8('  '):  false
// isBlank8(''):  true
// isBlank9('mars'):  false
// isBlank9('  '):  false
// isBlank9(''):  true
// isBlank10('mars'):  false
// isBlank10('  '):  false
// isBlank10(''):  false


// Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:
function isBlank(str) {
  return /^\s*$/.test(str);
}
console.log("isBlank('mars'): ", isBlank('mars'));
console.log("isBlank('  '): ", isBlank('  '));
console.log("isBlank(''): ", isBlank(''));
// isBlank('mars'):  false
// using trim
function isBlank_2(str) {
  return str.trim().length === 0;
}
console.log("isBlank_2('mars'): ", isBlank_2('mars'));
console.log("isBlank_2('  '): ", isBlank_2('  '));
console.log("isBlank_2(''): ", isBlank_2(''));
// isBlank_2('mars'):  false

// isBlank('mars'):  false
// isBlank('  '):  true
// isBlank(''):  true
// isBlank_2('mars'):  false
// isBlank_2('  '):  true
// isBlank_2(''):  true