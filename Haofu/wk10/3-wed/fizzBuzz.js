// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.

const getFizzBuzzArr = num => {
  for (let i = 0; i < num; i++) {
    fizzBuzz(i)
  }
}

const fizzBuzz = num => {
  if (num%3===0&&num%5===0) {
    console.log('Fizz Buzz')
  } else if (num%3===0) {
    console.log('Fizz')
  } else if (num%5===0) {
    console.log('Buzz')
  } else {
    console.log(num)
  }
}

console.log(getFizzBuzzArr(100));
