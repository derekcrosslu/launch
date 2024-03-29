// We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}

// it will never output anything because 
// keys are not thruthy
// the only way to compare a key is as a string
// so if we would use 'true' instead of true to compare prop it will output once like so:

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}
// It's true!