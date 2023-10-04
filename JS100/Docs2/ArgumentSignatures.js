//How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?


const ar1 = [1, 2, 3]
const ar2 = [4, 5, 6]
console.log("ar1.join(): ", ar1.join());
console.log("ar1.join(','): ", ar1.join(','));
console.log("ar1.join(ar2): ", ar1.join(ar2));
console.log("ar1.join(''): ", ar1.join(''));
console.log("ar1.join(' '): ", ar1.join(' '));
console.log("ar1.join('-'): ", ar1.join('-'));
console.log("ar1.join('+','-',':'): ", ar1.join('+','-',':'));