// Using obj.hasOwnProperty(key) is a way to ensure that you are only iterating over the object's own properties, excluding properties that are inherited through the prototype chain.

// In JavaScript, objects can inherit properties from their prototype. When you use a for...in loop to iterate through the properties of an object, it will not only include the object's own properties but also any enumerable properties inherited from its prototype.

// By using obj.hasOwnProperty(key), you can check if a property belongs directly to the object and not its prototype. This allows you to avoid accidentally including inherited properties when cloning the object or performing other operations.

// Here's a modified example to illustrate the importance of using hasOwnProperty:

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(this.name);
};

const person = new Person('John');

function clone(obj) {
  const clonedObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = obj[key];
    }
  }

  return clonedObj;
}

const clonedPerson = clone(person);

console.log(clonedPerson); // Output: { name: 'John' }

// In this example, person is an instance of the Person constructor and has a name property and a sayName method inherited from its prototype. When we use the clone function, it only copies the name property and not the inherited sayName method, thanks to the obj.hasOwnProperty(key) check.