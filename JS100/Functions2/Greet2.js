// Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:

function greet(salution = 'Hello', name = 'world') {
  console.log(salution + ', ' + name + '!');
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet2() {
  console.log(greeting() + ', ' + recipient() + '!');
}

greet2(); // logs: Good morning, Launch School!