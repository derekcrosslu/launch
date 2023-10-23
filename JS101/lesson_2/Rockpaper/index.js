// If player a chooses rock and player b chooses scissors, player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper, player a wins.
// If both players choose the same item, neither player wins. It's a tie.

// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

const readline = require("readline-sync");
VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
let choice = readline.question();

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice.");
  choice = readline.question();
}
//// computer makes a choice
let computer = VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];

if (choice === "rock" && computer === "scissors") {
  prompt("Player wins");
  console.log("player chose: ", choice, "Computer chose: ", computer);
} else if (choice === "paper" && computer === "rock") {
  prompt("Player wins");
  console.log("player chose: ", choice, "Computer chose: ", computer);
} else if (choice === "scissors" && computer === "paper") {
  prompt("Player wins");
  console.log("player chose: ", choice, "Computer chose: ", computer);
} else if (choice === computer) {
  prompt("It is a tie!!");
  console.log("player chose: ", choice, "Computer chose: ", computer);
} else {
  prompt("Computer wins!!");
  console.log("player chose: ", choice, "Computer chose: ", computer);
}
