// Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// input: number
// output: undefined

function triangle(n){
  const space = ' '
  const star = '*'
  let line = ''
    for(let i=0; i<n ; i++){
      // collect 4 spaces and 1 star
      line += space.repeat(n-i) 
      line += star.repeat(i)

        // collect 3 spaces and 2 star
        // collect 2 spaces and 3 star
        // collect 1 spaces and 4 star
    }
    console.log(line)
}

// ex:
triangle(5);