// input: target
// output: sum
// data structure: array
// algorithm:
//  initilize an array sum and fill it with a sequence up to target
//  filter elements of the array by 3 or 5
//  sum filtered array
//  return sum

function multisum(n){
  // initilize an array sum and fill it with a sequence up to target
  const sum = Array(n).fill(0).map((_, index) => index + 1);
  //  filter elements of the array by 3 or 5 and return sum
  return sum.filter(x=>x%3===0 || x%5===0).reduce((a,b)=>a+b)
}

console.log("multisum(3): ", multisum(3));
console.log("multisum(5): ", multisum(5));
console.log("multisum(10): ", multisum(10));
console.log("multisum(1000): ", multisum(1000));