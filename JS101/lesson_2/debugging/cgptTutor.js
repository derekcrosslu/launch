function mysteryFunction(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  if (result > 10) {
    return "Big number!";
  } else if (result <= 10 && result >= 5) {
    return "Medium number!";
  } else {
    return "Small number!";
  }
}

const output = mysteryFunction([1, 2, 3, 4]);
console.log(output);
