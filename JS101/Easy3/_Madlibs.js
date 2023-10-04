// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// PEDAC
// PROBLEM
// Input: 4 strings
// Output: 3 strings
// Requirements:
// Explicit:
// - Prompt user for 4 strings
// - Inject the strings into a story
// Implicit:
// - Prompt user for 4 strings
// - Inject the strings into a story
// - Output the story 3 times

const readline = require("readline-sync");

const Madlibs = () => {
  const noun = readline.question("Enter a noun: ");
  const verb = readline.question("Enter a verb: ");
  const adjective = readline.question("Enter an adjective: ");
  const adverb = readline.question("Enter an adverb: ");

  console.log(
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
  );
  console.log(
    `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`
  );
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
};

Madlibs();
