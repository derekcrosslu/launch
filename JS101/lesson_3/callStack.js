function firstFunction() {
  console.log("firstFunction: ", firstFunction);
  throw new Error("Stack Trace Error");
}

function secondFunction() {
  console.log("secondFunction: ", secondFunction);
  firstFunction();
}

function thirdFunction() {
  console.log("thirdFunction: ", thirdFunction);
  secondFunction();
}

thirdFunction();
