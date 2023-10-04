function compareByLength(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length < str2.length) {
        return -1;
    } else {
        return 0;
    }
}

console.log("compareByLength('patience', 'perseverance'): ", compareByLength('patience', 'perseverance'));
console.log("compareByLength('strength', 'dignity') : ", compareByLength('strength', 'dignity') );
console.log("compareByLength('humor', 'grace'): ", compareByLength('humor', 'grace'));

// compareByLength('patience', 'perseverance'):  -1
// compareByLength('strength', 'dignity') :  1
// compareByLength('humor', 'grace'):  0

// Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

function transformString(str) {
    return str.replace('Ruby', 'JavaScript');
}

console.log(transformString('Captain Ruby'));

const transformation = str => {
  let regex = /Ruby/;
  return str.replace(regex, "JavaScript");
}

console.log(transformation("Caption Ruby")); // "Caption JavaScript"