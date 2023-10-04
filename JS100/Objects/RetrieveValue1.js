// Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

function retrieveValue(obj, key) {
  return obj[key];
}

// console.log(retrieveValue(student, 'courses'));

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

function retrieveValue2(obj, key, key2) {
  return obj[key][key2];
}

console.log(retrieveValue2(jane, 'location',  'country'));