// Create a JavaScript code that accepts a string of lowercase letters. Print the word followed by how many consonants and vowels it has.

/*    Input Arrays 	               Expected Results
        "hello" 	              "hello has 3 consonants and 2 vowels"
        "ukelele" 	              "ukelele has 3 consonants and 4 vowels"
        "awesome" 	              "awesome has 3 consonants and 4 vowels"
        "onomonopia" 	          "onomonopia has 4 consonants and 6 vowels"
        "textbook" 	              "textbook has 5 consonants and 3 vowels" */



// first we define variables, and have counter variables for both vowels and consonants
// set both counter variables to 0 as a starting position

let phrase = "hello";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let numVowels = 0;
let numConsonants = 0;

// now we run a for loop with each letter of the variable 'phrase' being checked

for (let i = 0; i < phrase.length; i++) {
  let letter = phrase[i];
  if (vowels.includes(letter)) {   // if statement checks if our variable 'phrase' includes any of the letters in the array in 'vowels'
    numVowels++;   // if it does, add 1 to the numVowels counter
  } else {
    numConsonants++;  // if letter is not included in variable 'vowels' add 1 to numConsonants counter
  }
}

console.log(`The word/phrase '${phrase}' has ${numVowels} vowels and ${numConsonants} consonants.`);
