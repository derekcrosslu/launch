// Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
function countScores(scores) {
  return scores.filter(score=>score>=100).length;
}
console.log(countScores(scores));
// other way
function countScores2(scores) {
  const count = Array(0);
  for(let score of scores) {
    if(score>=100) {
      count.push(true);
    }
  }
  return count.length;
}
console.log(countScores2(scores));

// 3
// 3