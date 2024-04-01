//store random values in the arrays array
//use a for loop to iterate over the array
//if the values/elements in the array are not divisible by 2 or 3 consider them to be prime numbers and push them in the empty primeArray

let arrays = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
function primeNumbers() {
  const primeArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] % 2 !== 0 && arrays[i] % 3 !== 0) {
      primeArray.push(arrays[i]);
    }
  }
  console.log(primeArray);
}

primeNumbers();
