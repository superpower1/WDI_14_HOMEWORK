// Arrays

// Add an element to the back of an array.
array.push(element)

// Remove an element from the back of an array.
array.pop(element)

// Add an element to the front of an array.
array.unshift(element)

// Remove an element from the front of an array.
array.shift(element)

// Concatenates all the elements in an array into a string.
array.join('')

// Separates the characters of a string into an array. This one is a string method.
string.split('')

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.
var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
// Prediction: [3,2,4,6,10]
// Actual: [3,2,4,6,10]

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.
var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
// Prediction: ["dot", "dash", "pause", "dash", "dot"]
// Actual: ["dot", "dash", "pause", "dash", "dot"]

// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.
var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"
// Prediction: [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]
// Actual: [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]
