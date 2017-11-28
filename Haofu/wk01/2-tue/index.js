var username = prompt("What is your name?");
console.log(username);

var dinner = prompt(`Hi, ${username}. What do you want for dinner?
  * steak
  * fruit salad
  * tofurkey
  * pork chops
  `);

if ((dinner === "steak")||(dinner === "pork chops")) {
  alert("Vegans beware!");
}
else if ((dinner === "fruit salad")||(dinner === "tofurkey")) {
  alert("This cuisine is vegan friendly.");
}
else {
  alert("Wrong input");
}
