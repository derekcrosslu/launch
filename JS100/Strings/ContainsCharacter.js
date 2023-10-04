// Write code that checks whether the string byteSequence contains the character x.
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMuxxxx';
console.log(byteSequence.includes('x'));
//another way to check
console.log(byteSequence.indexOf('x') !== -1);
// another way
console.log(byteSequence.indexOf('x') > -1);
// another way
console.log(byteSequence.indexOf('x') >= 0);
// another different way to check using regex
console.log(/x/.test(byteSequence));
// another different way to check using regex match
console.log(byteSequence.match(/x/));