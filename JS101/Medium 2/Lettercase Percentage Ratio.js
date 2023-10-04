// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

function letterPercentages(str) {
  // initialize the object
  const obj = { lowercase: 0, uppercase: 0, neither: 0 };
  // convert string into array
  const strArr = str.split("");
  // calculate the total number of strings
  const total = strArr.length;
  // iterate on each character string and add 1 for each regex match
  strArr.forEach((value, index, arr) => {
    if (/[a-z]/.test(value)) obj["lowercase"] += 1;
    if (/[A-Z]/.test(value)) obj["uppercase"] += 1;
    if (/[^a-z]/i.test(value)) obj["neither"] += 1;
  });
  // calculate percentages
  obj["lowercase"] = ((obj["lowercase"] / total) * 100).toFixed(2);
  obj["uppercase"] = ((obj["uppercase"] / total) * 100).toFixed(2);
  obj["neither"] = ((obj["neither"] / total) * 100).toFixed(2);
  return obj;
}

console.log(/[a-z]/.test("3"));
console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// This exercise is a string processing problem. You can either convert the string into an array and use list processing (iteration perhaps?) to gather and tally the characters, or use regex to get the characters that match a particular pattern. Once you have the characters, you can simply get the quantity for each category, divide the quantity by the length of the string, and format the result as needed.
