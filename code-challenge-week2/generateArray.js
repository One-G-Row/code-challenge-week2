//generates an array between two values, one being the starting point and the other being the end point
//use a for loop to iterate between 5 and 11
// push the values into an empty array

function generateArray() {
  let genArray = [];
  for (let i = 5; i <= 11; i++) {
    const increment = i;
    genArray.push(increment);
  }
  console.log(genArray);
}
generateArray();
