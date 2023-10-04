// Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

// Understanding the problem:
// Input:  number year
// Output:  number of instances that 13 falls on a friday for every month

// Instructions:
// - return the number of times 13 falls on a friday for every month
// - assume that the year is greater than 1752

// Algorithm:
// - create an array from 0 to 11 and assign it monthIndexes
// - filter the array and on each iteration
//        - create day and assign it Date(year,month,date)=> year argument, month value from array and 13 to get the day of the week
//        - return day.getDay() compared to 5, when true it will be filtered in the return array
//        - return the size of the filtered array

function fridayThe13ths(year) {
  const monthIndexes = Array.from({ length: 12 }, (_, i) => i);
  return monthIndexes.filter((value, i) => {
    const day = new Date(year, value, 13);
    return day.getDay() === 5;
  }).length;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2

// Here is one possible algorithm for solving the problem:

// Iterate over all the months of the given year.
// For each month, get the day that falls on the 13th.
// Count the 13ths that fall on a Friday.
// Return the count.
