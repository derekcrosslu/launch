// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// understanding the problem
// input: number
// output: string

// rules:
// - takes the year as numeric input
// - designate century adding characters to the year
// - new centuries begin in years that end with 01 (1901-2000 -> 20th century)
// - 'st', 'nd', 'rd', or 'th designate the century twentyfir(st), twentyseco(nd), twentythi(rd), twentie(th) respectively
// - only positive centuries (ad)
// - left ceroes are not counted  since input is an integer type
// - cero will return an invalid response

// visualize pattern:
// 1-10 -> st
// 11-99 -> st
// 100 -> st
// 101-200 -> nd
// 201-300 -> rd
// 301-2000 -> th
// 2001-2100 -> st
// 2101-2200 -> nd
// 2201-2300 -> rd
// 2301-3000 -> th
// 3001-3100 -> st
// 3101-3200 -> nd
// 3201-3300 -> rd
// 3301-xxxx -> th

// visualize pattern given a new century starts at year[n-1] = 1
// 1-10 -> 1
// 11-99 -> 1
// 100 -> 1 (last year of the century)
// 101-199 -> 2
// 200 -> 2 (last year of the century)
// 201-299 -> 3
// 300 -> 3 (last year of the century)
// 301-1999 -> 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
// 2000 -> 20 (last year of the century)
// 2001 and beyond -> 21,22,23,24.......

// algorithm:
// - create a helper function 'assign_fun' that assigns 'st', 'nd', 'rd', or 'th  {1:'nd'}, {2:'rd'},{[3,4,5,6,7,8,9]:'th'}
// - create a helper function 'assign_fun_year that takes the year, slice the last 2 digits and convert to number
// - within the helper function return the number when is the (last year of the century) and the number plus 1 otherwise
// - convert input to a string and into an array of characters and assign to an array variable 'year'
// - find the length of the array year and assignt it to year_len
// - loop through array 'year'
// - if input is cero or empty then print "enter valid year"
// - if input has 1 digit return 'st'
// - if input has 2 digits return 'st'
// - if input has 3 or more digits and year[year_len - 3] is 1 and year[year_len] is 0 then return 'st'
// - else return year.concat(assign_fun)

function assign_fun(char) {
  const regex = /^[3-9]$/;
  if (char === "1") {
    return "nd";
  }
  if (char === "2") {
    return "rd";
  }
  if (regex.test(char)) {
    return "th";
  }
}

function assign_fun_year(year, len) {
  if (year[len - 3] === "0" && year[len - 1] === "0") {
    return Number(year.slice(0, len - 2).join("")).toString();
  } else if (year[len - 3] === "0" && year[len - 1] === "1") {
    return (Number(year.slice(0, len - 2).join("")) + 1).toString();
  } else {
    return (Number(year.slice(0, len - 2).join("")) + 1).toString();
  }
}

function century(year) {
  const yearStr = year.toString().split("");
  const yearLen = yearStr.length;
  for (char of yearStr) {
    if (yearLen === 1 || yearLen === 2) {
      if (char === "0" || char === "") {
        return "enter valid year ";
      }
      return "1st";
    } else if (yearLen > 2) {
      if (yearLen > 3 && yearStr[yearLen - 4] === "1") {
        return assign_fun_year(yearStr, yearLen).concat("th");
      }
      if (yearStr[yearLen - 3] === "0" && yearStr[yearLen - 1] === "0") {
        return assign_fun_year(yearStr, yearLen).concat("th");
      } else if (yearStr[yearLen - 3] === "0" && yearStr[yearLen - 1] === "1") {
        return assign_fun_year(yearStr, yearLen).concat("st");
      }
      return assign_fun_year(yearStr, yearLen).concat(
        assign_fun(yearStr[yearLen - 3])
      );
    }
  }
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
