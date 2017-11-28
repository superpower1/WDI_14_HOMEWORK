var birthday = prompt("Which year were you born?");

var now = new Date();
var thisYear = now.getFullYear();

var age = thisYear - birthday;
if (age>=0) {
  alert(`You're now ${age} years old.`);
}else {
  alert('You are from future!');
}
