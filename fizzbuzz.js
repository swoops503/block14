/* Create a JavaScript code that prints each number from 1 to 100 on a new line.

For each multiple of 3, print "Fizz" instead of the number.

For each multiple of 5, print "Buzz" instead of the number.

For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number. */

for (let i = 1; i <= 100; i++) {     // for loop adds 1 to the index until we hit 100
  if (i % 3 === 0 && i % 5 === 0) {  // checks if i is exactly divisible by 3 or 5
    console.log("FizzBuzz");    
  } else if (i % 3 === 0) {    // checks if i is divisible by 3
    console.log("Fizz");
  } else if (i % 5 === 0) {  // checks if i is divisible by 5
    console.log("Buzz");
  } else { 
    console.log(i);
  }
}
