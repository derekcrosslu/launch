console.log(true); // true
console.log(false); // false

function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

console.log(makeLonger("abc", true)); // 'abcabc'
console.log(makeLonger("xyz", false)); // 'xyz'

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

console.log(isDigit("5")); // true
console.log(isDigit("a")); // false

let value;
if (value == true) {
  console.log("It's true!");
} else if (value == false) {
  console.log("It's false!");
} else {
  console.log("It's not true or false!");
}
