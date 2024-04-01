//swap the cases for each character in the string letters
//the for of loop is used to iterate over each character in the tring letters
//the if statement is used to check if a character is set to uppercase switch to lowercase and viceversa

const letters = "The Quick Brown Fox";

function swapCase() {
  for (let letter of letters) {
    if (letter === letter.toUpperCase()) {
      console.log(letter.toLowerCase());
    } else {
      console.log(letter.toUpperCase());
    }
  }
}

swapCase();
