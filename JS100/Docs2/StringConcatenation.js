let firstName = 'John';
let lastName = 'Doe';
let fullNamePlusOperator = firstName + ' ' + lastName;
console.log(fullNamePlusOperator); //  "John Doe"
let fullNameConcat = firstName.concat(' ', lastName);
console.log(fullNameConcat); // "John Doe"

const newArray = new Array(firstName, lastName);
console.log(newArray.join(' ')) // "John Doe"
