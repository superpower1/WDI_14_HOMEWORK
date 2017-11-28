// Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."
// °F to °C	Deduct 32, then multiply by 5, then divide by 9
// °C to °F	Multiply by 9, then divide by 5, then add 32

var c = prompt('What is the temperature now in celsius?');
var f = c*9/5+32;
alert(`${c}°C is ${f}°F`);
f = prompt('What is the temperature now in fahrenheit?');
c = Math.round((f-32)*5/9);
alert(`${f}°F is ${c}°C`);
