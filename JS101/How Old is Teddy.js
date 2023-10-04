// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Teddy is 69 years old!

function teddysage() {
  const min = 20
  const max = 120
  const age = Math.floor(Math.random()*(max-min+1)+min)
  return `Teddy is ${age} years old`
}

console.log( teddysage());