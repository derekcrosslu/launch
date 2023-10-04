    
    // Build a program that logs when the user will retire and how many more years the user has to work until retirement.

//     What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!


const rls = require('readline-sync');

function timeuntilretire() {
  const age = rls.question('What is your age? ')
  const retireAge = rls.question('At what age would you like to retire? ')
  const year = new Date().getFullYear()
  const retireYear = retireAge - age + year

  console.log('\n')
  console.log(`It's ${year}. You will retire in ${retireYear}.`)
  console.log(`You have only ${retireYear - year} years of work to go!`);
}

timeuntilretire()