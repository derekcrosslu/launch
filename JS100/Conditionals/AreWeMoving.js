let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
console.log("isMoving: ", isMoving);
// step 1:
speed > 0  // false
acceleration > 0 // true
const out1 = speed > 0 || acceleration > 0 // false || true // true
brakingForce < acceleration // true
true && true // true
//output: true

let isMoving_ = brakingForce < acceleration && speed > 0 || acceleration > 0;
console.log("isMoving_: ", isMoving_);
// yes it need brackets otherwise it will change the order of evaluation:
// 1. brakingForce < acceleration // true
// 2. speed > 0 // false
// 3. acceleration > 0 // true


