// explicit
let one = Number("1");

console.log("one: ", one);
// 1

console.log("typeof one: ", typeof one);
// "number"
console.log(Number("cat")); // NaN
console.log(Number("")); // 0
console.log(Number({})); // NaN
console.log(Number([])); // 0
console.log(Number([4])); // 4
console.log(Number([undefined])); // 0
console.log(Number([1, 2, 3])); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(parseInt("12")); // 12
console.log(parseInt("12.52")); // 12
console.log(parseInt("12oz")); // 12
console.log(parseInt("+12oz")); // 12
console.log(Number("12oz")); // NaN
console.log(parseInt("10101", 2)); // 21 -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
console.log(parseFloat("12.2 grams")); // 12.2
console.log(parseFloat("12 grams")); // 12
console.log(+""); // 0
console.log(+"1"); // 1
console.log(+"2.3"); // 2.3
console.log(+[]); // 0
console.log(+"abc"); // NaN
let number = 42;
console.log(number.toString()); // 42
// console.log(42.toString()); // SyntaxError: Invalid or unexpected token
console.log((42).toString()); // 42
console.log((42).toString()); // 42
console.log(true.toString()); // true
console.log(false.toString()); // false
console.log([1, 2, 3].toString()); // 1, 2, 3;
console.log([1, null, 2, undefined, 3].toString()); // 1,,2,,3
let obj = { a: "foo", b: "bar" };
console.log(obj.toString()); // [object Object]
console.log(String(42)); // 42 -> this is an advantage of String over toString
console.log(String([1, 2, 3])); // 1,2,3
console.log(String({ a: "foo", b: "bar" })); //[object Object]
console.log(String(null)); // null
console.log(String(undefined)); // undefined
console.log(`${undefined}`); // undefined
console.log(`${{ a: "foo", b: "bar" }}`); // [object Object] -> automatically coherces to string

// implicit
console.log("1 === 1:  ", 1 === 1); // true
console.log("1 == 1:  ", 1 == 1); // true
console.log("1 == '1':  ", 1 == "1"); // true
console.log("1 === '1':  ", 1 === "1"); // false
console.log("1 == true:  ", 1 == true); // true
console.log("1 === true:  ", 1 === true); // false
console.log("0 == false:  ", 0 == false); // true
console.log("0 === false:  ", 0 === false); // false
console.log("'' == false:  ", "" == false); // true
console.log("'' === false:  ", "" === false); // false
console.log("'' == 0:  ", "" == 0); // true
console.log("'' === 0:  ", "" === 0); // false
console.log("'' == null:  ", "" == null); // false
console.log("'' === null:  ", "" === null); // false
console.log("null == undefined:  ", null == undefined); // true
console.log("null === undefined:  ", null === undefined); // false
console.log("null == 0:  ", null == 0); // false
console.log("null === 0:  ", null === 0); // false
console.log("null == '':  ", null == ""); // false
console.log("null === '':  ", null === ""); // false
console.log("null == false:  ", null == false); // false
console.log("null === false:  ", null === false); // false
console.log("undefined == 0:  ", undefined == 0); // false
console.log("undefined === 0:  ", undefined === 0); // false
console.log("undefined == '':  ", undefined == ""); // false
console.log("undefined === '':  ", undefined === ""); // false
console.log("undefined == false:  ", undefined == false); // false
console.log("undefined === false:  ", undefined === false); // false
console.log("undefined == null:  ", undefined == null); // true
console.log("undefined === null:  ", undefined === null); // false
console.log("undefined == NaN:  ", undefined == NaN); // false
console.log("undefined === NaN:  ", undefined === NaN); // false
console.log("NaN == NaN:  ", NaN == NaN); // false
console.log("NaN === NaN:  ", NaN === NaN); // false
console.log("NaN == 0:  ", NaN == 0); // false
console.log("NaN === 0:  ", NaN === 0); // false
console.log("NaN == '':  ", NaN == ""); // false
console.log("NaN === '':  ", NaN === ""); // false
console.log("NaN == false:  ", NaN == false); // false
console.log("NaN === false:  ", NaN === false); // false
console.log("NaN == null:  ", NaN == null); // false
console.log("NaN === null:  ", NaN === null); // false
console.log("NaN == undefined:  ", NaN == undefined); // false
console.log("NaN === undefined:  ", NaN === undefined); // false
console.log("NaN == Infinity:  ", NaN == Infinity); // false
console.log("NaN === Infinity:  ", NaN === Infinity); // false
console.log("NaN == -Infinity:  ", NaN == -Infinity); // false
console.log("NaN === -Infinity:  ", NaN === -Infinity); // false
console.log("Infinity == Infinity:  ", Infinity == Infinity); // true
console.log("Infinity === Infinity:  ", Infinity === Infinity); // true
console.log("Infinity == -Infinity:  ", Infinity == -Infinity); // false
console.log("Infinity === -Infinity:  ", Infinity === -Infinity); // false
console.log("Infinity == 0:  ", Infinity == 0); // false
console.log("Infinity === 0:  ", Infinity === 0); // false
console.log("Infinity == '':  ", Infinity == ""); // false
console.log("Infinity === '':  ", Infinity === ""); // false
console.log("Infinity == false:  ", Infinity == false); // false
console.log("Infinity === false:  ", Infinity === false); // false
console.log("Infinity == null:  ", Infinity == null); // false
console.log("Infinity === null:  ", Infinity === null); // false
console.log("Infinity == undefined:  ", Infinity == undefined); // false
console.log("Infinity === undefined:  ", Infinity === undefined); // false
function getAValueFromSomewhere() {}
let val = getAValueFromSomewhere();
if (val === undefined || val === null) {
  // do one thing
  console.log("val: ", val);
} else {
  // do another thing
}
let arr = [];
console.log("arr == []: ", arr == []); // false
console.log("arr == arr: ", arr == arr); // true
console.log("'' == {}: ", "" == {}); // false
console.log("'' == []: ", "" == []); // false
console.log("'' == arr: ", "" == arr); // false
console.log("[] == '': ", [] == ""); // true
console.log("[] == {}: ", [] == {}); // false
console.log("[] == 0: ", [] == 0); // true
console.log("'number  '+ 1: ", "number " + 1);
console.log("'' + [1, 2, 3];: ", "" + [1, 2, 3]); // 1,2,3
console.log("'' + true: ", "" + true); // true
console.log("'' + false: ", "" + false); // false
console.log("'' + null: ", "" + null); // null
console.log("'' + undefined: ", "" + undefined); // undefined
console.log("'' + NaN: ", "" + NaN); // NaN
console.log("'' + Infinity: ", "" + Infinity); // Infinity
console.log("'' + -Infinity: ", "" + -Infinity); // -Infinity
console.log("'' + {}: ", "" + {}); // [object Object]
console.log("'' + []: ", "" + []); // ''
console.log("1 + true: ", 1 + true); // 2
console.log("1 + false: ", 1 + false); // 1
console.log("1 + null: ", 1 + null); // 1
console.log("1 + undefined: ", 1 + undefined); // NaN
console.log("1 + NaN: ", 1 + NaN); // NaN
console.log("1 + Infinity: ", 1 + Infinity); // Infinity
console.log("1 + -Infinity: ", 1 + -Infinity); // -Infinity
console.log("1 + {}: ", 1 + {}); // 1[object Object]
console.log("1 + []: ", 1 + []); // 1
console.log("true + false: ", true + false); // 1
console.log("true + null: ", true + null); // 1
console.log("true + undefined: ", true + undefined); // NaN
console.log("true + NaN: ", true + NaN); // NaN
console.log("[1] + 2: ", [1] + 2); // 12
console.log("[1] + [2]: ", [1] + [2]); // 12
console.log("[1] + {}: ", [1] + {}); // 1[object Object]
console.log("[1] + []: ", [1] + []); // 1
console.log("{} + {}: ", {} + {}); // NaN
console.log("{} + []: ", {} + []); // [object Object]
console.log("[] + []: ", [] + []); // ''
console.log("[] + {}: ", [] + {}); // [object Object]
console.log("[1] + '2': ", [1] + "2"); // 12
console.log("[1, 2] + 3: ", [1, 2] + 3); // 1,23
console.log("[1, 2] + [3]: ", [1, 2] + [3]); // 1,23
console.log("[] + 5: ", [] + 5); // 5
console.log("[] + '5': ", [] + "5"); // 5
console.log("[] + [5]: ", [] + [5]); // 5
console.log("[] + true: ", [] + true); // true
console.log("42 + {}: ", 42 + {}); // 42[object Object]
console.log("1 < 2: ", 1 < 2); // true
console.log("1 < 1: ", 1 < 1); // false
console.log("1 < 0: ", 1 < 0); // false
console.log("'b' > 'a': ", "b" > "a"); // true
console.log("11 > '9': ", 11 > "9"); //  true -- '9' is coerced to 9
console.log("11 > '9a': ", 11 > "9a"); // false -- '9a' is coerced to NaN
console.log("11 > 'a': ", 11 > "a"); // false -- 'a' is coerced to NaN
console.log("11 > NaN: ", 11 > NaN); // false -- NaN is coerced to NaN
console.log("11 > undefined: ", 11 > undefined); // false -- undefined is coerced to NaN
console.log("11 > null: ", 11 > null); // true -- null is coerced to 0
console.log("123 <= 'a': ", 123 <= "a"); // false -- 'a' is coerced to NaN
console.log("true > null: ", true > null); // true -- true is coerced to 1
console.log("true > false: ", true > false); // true -- true is coerced to 1, false is coerced to 0
console.log("true > 'a': ", true > "a"); // false -- 'a' is coerced to NaN
console.log("true > NaN: ", true > NaN); // false -- NaN is coerced to NaN
console.log("true > undefined: ", true > undefined); // false -- undefined is coerced to NaN
console.log("true > {}: ", true > {}); // false -- {} is coerced to NaN
console.log("true > []: ", true > []); // false -- [] is coerced to 0
console.log("true > [1]: ", true > [1]); // false -- [1] is coerced to 1
console.log("true > [1, 2]: ", true > [1, 2]); // false -- [1, 2] is coerced to NaN
console.log("true > '': ", true > ""); // true -- '' is coerced to 0
console.log("null <= false: ", null <= false); // true -- null is coerced to 0, false is coerced to 0
console.log("undefined >= 1: ", undefined >= 1); // false -- undefined is coerced to NaN
console.log("NaN > 0: ", NaN > 0); // false -- NaN is coerced to NaN
NaN == 0
  ? console.log("NaN == 0: ", NaN == 0)
  : console.log("NaN != 0: ", NaN != 0); // false -- NaN is coerced to NaN
console.log("NaN > NaN: ", NaN > NaN); // false -- NaN is coerced to NaN
console.log("NaN > undefined: ", NaN > undefined); // false -- undefined is coerced to NaN
console.log("NaN > null: ", NaN > null); // false -- null is coerced to 0
console.log("NaN > {}: ", NaN > {}); // false -- {} is coerced to NaN
console.log("NaN > []: ", NaN > []); // false -- [] is coerced to 0
console.log("NaN > [1]: ", NaN > [1]); // false -- [1] is coerced to 1
console.log("NaN > [1, 2]: ", NaN > [1, 2]); // false -- [1, 2] is coerced to NaN
console.log("NaN > '': ", NaN > ""); // false -- '' is coerced to 0
console.log("NaN > true: ", NaN > true); // false -- true is coerced to 1
console.log("NaN > false: ", NaN > false); // false -- false is coerced to 0
console.log("NaN > 'a': ", NaN > "a"); // false -- 'a' is coerced to NaN
console.log("NaN > Infinity: ", NaN > Infinity); // false -- Infinity is coerced to Infinity
console.log("NaN > -Infinity: ", NaN > -Infinity); // false -- -Infinity is coerced to -Infinity
NaN > 1 ? console.log("NaN > 1: ", NaN > 1) : console.log("NaN < 1: ", NaN < 1); // false -- NaN is coerced to NaN
