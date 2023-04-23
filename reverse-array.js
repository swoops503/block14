// With a for loop, create a JavaScript code that creates a new array in reverse order.

// we need to define the original array, an empty array for the reversed array, and push the values in a for loop from the original array to the reversed array

/*          Input Arrays 	            Expected Results
              [1, 2, 3] 	             [3, 2, 1]
              [1, 3, 5, 7, 9, 11] 	     [11, 9, 7, 5, 3, 1]
              [20, 50, 30, 60, 200] 	 [200, 60, 30, 50, 20]
              [1, -1, 2, -3, 5, -8, 13]  [13, -8, 5, -3, 2, -1, 1]  */


const originalArray = [1, 2, 3];  // define variables
const reversedArray = [];

for (let i = originalArray.length - 1; i >= 0; i--) {  // start for loop using originalArray
  reversedArray.push(originalArray[i]);                /* push the values from the original array to the reversed array, we're using push instead of unshift to add to the back of the array */
}

console.log(reversedArray); // expected output: [3, 2, 1]
