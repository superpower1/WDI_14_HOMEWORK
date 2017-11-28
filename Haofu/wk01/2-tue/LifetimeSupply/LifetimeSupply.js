var age = prompt("How old are you?");
var snack = prompt("What is your favourite snack?");
var snackNum = prompt("How much do you need to eat daily?");
var maxAge = 200;

var lifetimeNum = (maxAge-age)*365*snackNum;

alert(`You will need ${lifetimeNum}${snack} to last you until the ripe old age of 200`);
