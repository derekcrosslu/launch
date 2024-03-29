// Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Snippet 1:

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // ?

// Snippet 2:

// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // ?

// ocean: { prefix: 'Pacific'; }
// ocean: { Indian: 'Pacific'; }