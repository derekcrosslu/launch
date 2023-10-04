function cite(author, quote){
   console.log(`${author} said: "${quote}"`)
}

cite('Brendan Eich', 'Always bet on JavaScript.');



function squaredNumber(n) {
  return n * n;
}

console.log(squaredNumber(3) === 9); // logs true

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;  // wont log anything

