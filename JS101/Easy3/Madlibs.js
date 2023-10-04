// input : undefined
// output: undefined

const rls = require('readline-sync')

function madlibs(){
  const noun = rls.question('Enter a noun: ')
  const verb = rls.question('Enter a verb: ')
  const adjective = rls.question('Enter an Adjective: ')
  const adverb = rls.question('Enter a Adverb: ')

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)
}

madlibs()