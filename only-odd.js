/* Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value. */

/*  Input Arrays 	              Expected Results
[2, 4, 6, 8, 11, 20, 15, 22] 	    [ 11, 15]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 	[1, 3, 5, 7, 9]
[70, 42, 55, 81, 21, 91, 34] 	    [55, 81, 21, 91]
[2, 4, 6, 8, 10, 11, 12]  	        [11] */

// Define the original array of numbers
const myArray = [2, 4, 6, 8, 11, 20, 15, 22] ;

// Define an empty array to hold the odd numbers
let oddNumbers = [];

// Loop through each number in the original array
for (let i = 0; i < myArray.length; i++) {
  // Check if the number is odd
  if (myArray[i] % 2 === 1) {
    // Add the odd number to the oddNumbers array
    oddNumbers.push(myArray[i]);
  }
}

// If there is only one odd number in the array, return an array with that single value
if (oddNumbers.length === 1) {
  oddNumbers = [oddNumbers[0]];
}

// Print the array of odd numbers
console.log(oddNumbers);