// The below code raises a SyntaxError. If you run the code, you'll see the following error message:

// SyntaxError: Unexpected token &&

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// .node SyntaxError.js 
// /Users/donaldcross/code/launch/JS100/SyntaxError.js:8
// if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
//                                ^^

// SyntaxError: Unexpected token '&&'

// [MDN Link] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Illegal_character)