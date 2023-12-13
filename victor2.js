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
  someMethod: () => {},
};

function updateAge(obj) {
  obj = { name: "Alice", age: 31 };
}

updateAge(person);

let newObj = {};
[1, "1"].forEach((el) => (newObj[el] = el));

// variables: person,updateAge, obj
// primitives: name, age, Alice, 38, name, Alice, age, 31
// objects : { name: 'Alice', age: 30} , { name: 'Alice', age: 31}, updateAge function object, the arrow function ojbect assigned to `someMethod`,

// Go over snippet1 and snippet2. Both code will log `"hello"` . What code concept does it demonstrate?

// snippet1
function hello() {
  console.log("hello");
}

function greet(greeting) {
  greeting();
}

greet(hello);

// snippet2
function hello() {
  console.log("hello");
}

let greet = hello;
let funcExpression = () => {};
greet();
