let object = {}; // Now object is an empty object, which is truthy

// Using logical OR - This will throw a TypeError because 'object' is truthy, but 'nonExistentProperty' is undefined.
console.log(object || object.nonExistentProperty); // TypeError: Cannot read property 'nonExistentProperty' of null
