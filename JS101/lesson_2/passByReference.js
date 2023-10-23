let myVar1 = [1];

function myFunc(myVar) {
  myVar1[0] = 2; // TypeError: Cannot set properties of undefined (setting '0')
}

myFunc();
console.log(myVar1);

////////////////////////////////

let myVar2 = [1];

function myFunc(myVar2) {
  myVar2[0] = 2;
}

myFunc(myVar2);
console.log(myVar2); // [2]

/////////////////////////////////
/////////////////////////////////

function capitalize1() {
  return word1[0].toUpperCase() + word1.slice(1);
}

function exclaim1() {
  return (word1 += "!!!");
}

let word1 = "hello";
let capitalizedWord1 = capitalize1(word1);
let exclaimedWord1 = exclaim1(capitalizedWord1);

console.log(word1);
console.log(capitalizedWord1);
console.log(exclaimedWord1);

///////////////////////////////////

function capitalize2(word2) {
  return word2[0].toUpperCase() + word2.slice(1);
}

function exclaim2(word2) {
  return (word2 += "!!!");
}

let word2 = "hello";
let capitalizedWord2 = capitalize2(word2);
let exclaimedWord2 = exclaim2(capitalizedWord2);

console.log(word2);
console.log(capitalizedWord2);
console.log(exclaimedWord2);
