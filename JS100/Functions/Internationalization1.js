// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.
// Solution
function greet(language) {
  const db = {
    en: 'Hi!',
    fr: 'Salut!',
    pt: 'Olá!',
    de: 'Hallo!',
    sv: 'Hej!',
    af: 'Haai!'
  };
  return db[language];
}

// Examples
console.log("greet('en'): ", greet('en'));
console.log("greet('fr'): ", greet('fr'));
console.log("greet('pt'): ", greet('pt'));
console.log("greet('de'): ", greet('de'));
console.log("greet('sv'): ", greet('sv'));
console.log("greet('af'): ", greet('af'));

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('_')[1].slice(0,2);
}

function localGreet(str) {
  const enOb = {'US':'Hey!','GB':'Hello!','AU':'Howdy!'}
  let language = str.split('_')[0];
  if(extractLanguage(str) === 'en'){
    return enOb[extractRegion(str)]
  } else {
    return greet(extractLanguage(str))
  }
}

console.log(localGreet('en_US.UTF-8'));
console.log(localGreet('en_GB.UTF-8'));
console.log(localGreet('en_AU.UTF-8'));

console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));

// Hey!
// Hello!
// Howdy!
// Salut!
// Salut!
// Salut!