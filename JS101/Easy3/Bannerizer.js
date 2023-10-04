// Write a function that will take a short line of text, and write it to the console log within a box.

// input: string
// output: string

// function logInBox(str) {
//   const boxLength = str.length+2
//   const boxLine = ['+ ' + Array(boxLength).fill('-').join('') + ' +']
//   const boxSpace = ['| ' + Array(boxLength).fill(' ').join('') + ' |']
//   const boxText = '|  ' + str + '  |'
  
//   console.log(...boxLine)
//   console.log(...boxSpace);
//   console.log(boxText);
//   console.log(...boxSpace);
//   console.log(...boxLine);
// }

const logInBox = (str) => {
  let output = "";
  const LENGTH = str.length + 2;

  for (let i = 0; i < 5; i++) {
    if (i === 0 || i === 4) {
      output += "+" + "-".repeat(LENGTH) + "+\n";
    } else if (i === 1 || i === 3) {
      output += "|" + " ".repeat(LENGTH) + "|\n";
    } else {
      output += "| " + str + " |\n";
    }
  }

  return output;
};

logInBox('To boldly go where no one has gone before.')
console.log(logInBox('To boldly go where no one has gone before.'));
logInBox('')
console.log( logInBox(''));

// logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+