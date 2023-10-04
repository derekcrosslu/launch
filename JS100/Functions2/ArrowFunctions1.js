// Refactor the function below using arrow syntax. Line 9 should still log the same sentence.
const template = 'I VERB NOUN.';

const sentence=(verb, noun) =>{
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

// The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = ()=> {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);