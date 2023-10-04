// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

// understanding the problem:
// input: string
// output: string
// rules:
// - replace non-alphabetic characters with spaces
// - nop two spaces in a row

// algorithm:
// - convert string to array of characters
// - iterate over the array
// - if character is alphabetic, return character
// - else return space
// - join the array and return it

function cleanUp(str) {
  const arrStr = str.split("");
  let resultStr = [];
  let i = 0;
  for (let char of arrStr) {
    // console.log("char: ", char);
    if (char.match(/^[0-9a-z]+$/)) {
      resultStr.push(char);
      i = 0;
    } else {
      i = i + 1;
      resultStr.push(i);
    }
  }
  return resultStr
    .map((n) => {
      if (typeof n === "string") {
        return n;
      } else if (n !== 1) {
        return "";
      } else if (n === 1) {
        return " ";
      }
    })
    .join("");
}

cleanUp("---what's my +*& line?"); // " what s my line "
console.log(cleanUp("---what's my +*& line?"));
