function parseAndCount(codeString) {
  // Execute the code string and get the pets object before flattenObj is called
  let petsBefore = eval(codeString.split("flattenObj(pets);")[0] + "; pets;");
  console.log("petsBefore: ", petsBefore);
  let petsAfter = eval(codeString + "; pets;");
  console.log("petsAfter: ", petsAfter);

  let primitiveCount = 0;
  let objectCount = 0;

  function checkValue(value) {
    console.log("value: ", value);
    if (value !== null && typeof value === "object") {
      objectCount++;
      // Count the keys as primitive values
      primitiveCount += Object.keys(value).length;
      // If it's an object, check its properties recursively
      for (let key in value) {
        checkValue(value[key]);
      }
    } else {
      primitiveCount++;
    }
  }

  // Start the process by checking the initial data before and after flattenObj is called
  checkValue(petsBefore);
  checkValue(petsAfter);

  // Counting function name and parameter as primitives
  primitiveCount += 2;

  return { primitiveCount, objectCount };
}

let code = `
let pets = {
  jerry: {species: "cat", age: 3}
};

function flattenObj(animals) {
  let pets = Object.keys(animals);

  for (let pet of pets) {
    animals[pet] = 'foo';
  }
}

flattenObj(pets);
`;

let result = parseAndCount(code);
console.log(result); // { primitiveCount: 8, objectCount: 2 }
