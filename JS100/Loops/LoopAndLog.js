// Write a while loop that logs all odd natural numbers between 1 and 40.
// let i = 0

// while (i < 40) {

//   i++
//   if(i%2!==0){ 
//     console.log(i);
    
//   }
  
// }

let counter = 1;

while (counter <= 40) {
  console.log(counter)
  counter += 1; // 1 2 3... 40
}

// let i = 1;
// while (i <= 40) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }

// The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

// for (let i = 0; ; i += 1) {
//   console.log("and on");
// }

// The condition of the for loop is always true. The loop will never terminate.

// Modify the code so that it stops after the first iteration.

// for (let i = 0; i < 1; i += 1) {
//   console.log("and on");
// }


// A statement labeled checkiandj contains a statement labeled checkj. If continue is encountered, the program terminates the current iteration of checkj and begins the next iteration. Each time continue is encountered, checkj reiterates until its condition returns false. When false is returned, the remainder of the checkiandj statement is completed, and checkiandj reiterates until its condition returns false. When false is returned, the program continues at the statement following checkiandj.

// If continue had a label of checkiandj, the program would continue at the top of the checkiandj statement.

// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log('i',i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log('j',j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkj;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }

// i 0
// j 10
// 9 is odd.
// j 9
// j 8
// 7 is odd.
// j 7
// j 6
// 5 is odd.
// j 5
// i = 1
// j = 4
// i 1
// i = 2
// j = 4
// i 2
// i = 3
// j = 4
// i 3
// i = 4
// j = 4

// Take a moment to read the MDN documentation on the continue statement.

// Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (let i = 0; i < cities.length; i += 1) {
//   if (cities[i] === null) {
//     continue;
//   }
//   console.log(cities[i].length);
// }
// 8
// 11
// 5
// 6
// 6
// 7


// // Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index]);
//   index += 1;
// }


// // Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.
// for (let i = 1; i <= 100; i += 1) {
//   console.log(i * 2);
// }
// // esta bien si funciona

// // Write a loop that logs greeting three times.
// let greeting = 'Aloha!';

// for (let i = 0; i < 3; i += 1) {
//   console.log(greeting);
// }
// // Aloha!
// // Aloha!
// // Aloha!


// // Add some code inside of the for loop below that logs the current value of i to the console on each iteration. Before you run the code: What sequence of numbers do you expect to be logged?

// for (let i = 0; i <= 10; i += 2) {
//   // include your code here
//   console.log(i);
// }

// // 0
// // 2
// // 4
// // 6
// // 8
// // 10

// // The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.

// for (let i = 10; i >= 1; i -= 1) {
//   console.log(i);
//   if(i === 1) {
//     console.log('Launch!');
//   }
// }
// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // Launch!

