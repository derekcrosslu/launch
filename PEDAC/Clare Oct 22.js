function print(str) {
  console.log(str);
}

function displayTemplate() {
  let output = [];
  let sectionBreak = "\n";
  let doubleLine = "===================================";
  output.push(sectionBreak);
  output.push("PEDAC");
  output.push(doubleLine);
  output.push("- Solves two-layer problem");
  output.push("- Reduces mental load");

  output.push(sectionBreak);
  output.push("P - [Understanding the] Problem");
  output.push(doubleLine);
  output.push("- Explore the requirements");
  output.push("- Ask questions, clarify technical terms");
  output.push("- Summarise problem");

  output.push(sectionBreak);
  output.push("E - Examples / Test Cases");
  output.push(doubleLine);
  output.push("- Note explicit and implicit rules");
  output.push("- Note edge cases, gotchas");
  output.push("- Ensure you are solving the right problem");

  output.push(sectionBreak);
  output.push("D - Data");
  output.push(doubleLine);
  output.push("- Inputs and outputs");
  output.push("- Data structures: Arrays, Objects or even Strings");

  output.push(sectionBreak);
  output.push("A - Algorithm");
  output.push(doubleLine);
  output.push("- Summarise high level strategy");
  output.push("- Write step-by-step instructions");
  output.push("- Look for potential sub-processes");
  output.push("- Language agnostic, keep options open");
  output.push("- Run test cases through algorithm");
  output.push("- Algorithm that looks like code - stop and think");

  output.push(sectionBreak);
  output.push("C - Code");
  output.push(doubleLine);
  output.push("- Translate algorithm into code");
  output.push("- Test frequently (every 2-3 lines)");
  output.push("- Hack and slash - stop and think");

  output.push(sectionBreak);

  output.forEach(print);
}

// displayTemplate();

/*
Sum of Numbers
Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l" should output 63.

You can expect that the string will include only positive numbers.
*/

// // Test Cases
// console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// console.log(sumOfNumbers("L12aun3ch Sch3oo45l") === 63);
// console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);
/*
Laren: 
P - Create a function that takes a string as an input. Find the number characters and add the numbers together. Return the sum of all the numbers in the string.
E -
  Implicit: return a number, numbers will be in string type,
           numbers in consecutive order are one number
  Explicit: numbers are positive

A -
HIGH LEVEL: filter out characters or character sequences that are numbers. Save all numbers, add them together, and return the sum.
LOW LEVEL:

- SET a variable 'numbers' a string that includes all numbers '0123456789'

- SET a variable 'found numbers' to an empty array []

- LOOP through the chars in the input string
  - set a varialbe 'currentcandidate' to an empty string ''
  - WHILE (currentcandidate is in the 'numbers' string)
        - concatenate current char to currentcandidate
  - UPDATE - append currentcandidate to 'numbers' array

- SET 'sum' to number value 0
- LOOP through each number in the numbers array 
  - convert each element to a number type
  - reassign the value of 'sum' to be sum + current element

- RETURN sum
*/

/* 
Justin: P: Parse out the numbers from the string and get the sum of those numbers.
           Input: Str
           Output: Number
        E: explicit reqs: string includes only positive num 
           implicit reqs: consecctive nums are considered as one number. EX '45' is 45 and not `4` & `5`
           test cases: already given. line 67
        D: Input: Str
           Output: Number
           Structure: Array
        A: HIGH LEVEL: ... 
           Extract num:
            Loop through each char in the str
              variable: charInNum=char, convert char into a number
              
              if charInNum is not NaN,
                variable: num
              Nested Loop:
                iterate through starting from the current index,
                if curChar
          
             after conversion, check to see if the to see if it's num or not
              If it is num append into array
           when done with loop, sum all num in array
              
*/

//Laura:
// P - Writing a function that iterates through a string. Sum up all the positive numbers, upon hitting them
// E - have to return a number, don't print it within the function
// able to take in double digits, triple digits etc, as long as they are consecutive numbers
// the numbers are within a string
// A - High level: filter out the digits from the string, and add them up
// Step by step:
// Iterate through the string,
// create a counter
// create a flag to check if the character before is a digit
// if yes, take it as a consecutive digit
// convert the char to number
// sum up all the numbers by adding them to the counter
// return the counter

/// Derek
// input: string
// output: number
//  we need to read a string and identify the character numbers
// then we need to convert them to type number and return the sum

// rules:
// - numbers are surrounded by characters
// - spaces count as characters
// - explicit vs implicit...nice
//

// algorithm
// - init array to save numbers
// - split string into a char Array
// - loop through the char array:
// -      on each iteration:  let regex = \[/d]\.
// -        use regex to check if its a consecutive number a[i] === a[i]+1
// -                 if test case: regex.test( )
// -                       join numbers and add to array
// -                 else add directly to array
// - then return the sum of numbers in the array

/*
HIGH LEVEL: filter out characters or character sequences that are numbers. Save all numbers, add them together, and return the sum.
LOW LEVEL:

- SET a variable 'numbers' a string that includes all numbers '0123456789'

- SET a variable 'found numbers' to an empty array []
- set a varialbe 'currentcandidate' to an empty string ''

- LOOP through the chars in the input string
  - IF (currentcandidate is in the 'numbers' string)
        - concatenate current char to currentcandidate
    ELSE
      append currentcandidate to foundNumbers
      reassign currentcandidate to ''
- append currentcandidate to foundNumbers

- SET 'sum' to number value 0
- LOOP through each number in the numbers array 
  - convert each element to a number type
  - reassign the value of 'sum' to be sum + current element

- RETURN sum
*/

function sumOfNumbers(string) {
  const numbers = "0123456789";
  let foundNumbers = [];
  // console.log(numbers);
  // console.log(foundNumbers);

  let currentcandidate = "";
  for (let idx = 0; idx < string.length; idx += 1) {
    // console.log(idx);
    let currentChar = string[idx];
    // console.log(currentcandidate)
    // console.log(currentChar);
    // console.log(numbers.includes(currentChar));

    if (numbers.includes(currentChar)) {
      // console.log(currentChar);
      currentcandidate += currentChar;
    } else {
      foundNumbers.push(currentcandidate);
      currentcandidate = "";
    }

    // console.log(foundNumbers);
  }

  foundNumbers.push(currentcandidate);

  let sum = foundNumbers.reduce((accum, elem) => accum + Number(elem), 0);

  return sum;
}

// Test Cases
console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("L12aun3ch Sch3oo45l") === 63);
console.log(
  sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") ===
    3635
);

/*
-- My PEDAC --
P
- Create a function that takes a string and returns the sum of numbers contained in the string

E
- Rules:
  - Input is always a non-empty string
  - Output is always a positive integer
  - Numbers are always positive
  - Numbers may be multiple digits, e.g. 45 is forty-five

D
- Input: string
- Output: integer
- Structure: array

A
- High Level:
  - Turn string into array of numbers, then sum the numbers

- Step by Step;
  - Split input string by non-numbers, into an array, numArray
  - Transform string numbers in numArray into Integers
  - Reduce numbers in numArray into a sum
  - Return sum

*/

function sumOfNumbers(str) {
  return str.split(/[^0-9]+/i);
  // .filter((el) => el !== "")
  // .map((el) => Number(el))
  // .reduce((acc, el) => acc + el, 0);
}
