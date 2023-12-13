// Identify the variables, primitives, and objects in the code. -- Derek

const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

console.log(updateAge(person), person);

// variables: person,updateAge, obj
// primitives: name, age, Alice, 38, name, Alice, age, 31
// objects primitives: { name: 'Alice', age: 30} , { name: 'Alice', age: 31}

// Q1 What is logged on the last line? Explain - Alexis

const a = 1 && 2;
const b = 0 || 3;

if (a > b) {
  c = a;
} else {
  c = b;
}

console.log(c);

//  Q2 Compare and contrast snippet1 and snippet2. -- Ben

// snippet1
const foo = 3;
function bar() {
  foo += 3;
}

bar();
console.log(foo);

// snippet2
const foo = {
  a: 3,
};

function bar() {
  foo.a += 3;
}

bar();
console.log(foo.a);

// Q3 What is the output? Explain why. -- Julian

const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

updateAge(person);
console.log(person);

// Identify the variables, primitives, and objects in the code. -- Derek

const person = {
  name: "Alice",
  age: 30,
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

updateAge(person);

// variables: person,updateAge, obj
// primitives: name, age, Alice, 38, name, Alice, age, 31
// objects primitives: { name: 'Alice', age: 30} , { name: 'Alice', age: 31}
