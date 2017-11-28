// - Store a radius into a variable.
// - Calculate the circumference based on the radius, and output "The circumference is NN".
// - Calculate the area based on the radius, and output "The area is NN".

var r = prompt(`What is the radius of the circle?`);
var c = (2*Math.PI*r).toFixed(2);
var a = (Math.PI*r*r).toFixed(2);

alert(`The circumference is ${c} and the area is ${a}`);
