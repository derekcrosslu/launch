// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let string = 'launch school tech & talk';

function capitalize(string) {
  let words = string.split(' ');
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

  return capitalizedWords.join(' ');
}

console.log(capitalize('launch school tech & talk'));

// using map

function capitalize(string) {
  let words = string.split(' ');

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize('launch school tech & talk'));

// using search

function capitalize(string) {
  return string.replace(/\b[a-z]/g, char => char.toUpperCase());
}

console.log(capitalize('launch school tech & talk'));

// Launch School Tech & Talk
// Launch School Tech & Talk
// Launch School Tech & Talk






