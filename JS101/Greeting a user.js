// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?


const rls = require('readline-sync');

function greetUser() {
  const response = rls.question('What is your name? ')
  if (!response.includes('!')) {
     console.log(`Hello ${response}.`)
  } else {
     const formtedResponse = response.slice(0,response.indexOf('!')).toUpperCase()
     console.log(`HELLO ${formtedResponse}. WHY ARE WE SCREAMING?`)
  
   }

}

greetUser()