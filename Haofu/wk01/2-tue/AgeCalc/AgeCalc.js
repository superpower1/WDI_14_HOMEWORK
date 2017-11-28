var birthday = prompt("Which year were you born?");

var now = new Date();
var thisYear = now.getFullYear();

var age = thisYear - birthday;
if (age>=200) {
  alert(`You must be kidding!`);
}else if (age>=0) {
  alert(`You are either ${age-1} or ${age} years old.`);
}else {
  alert('You are from future!');
}
