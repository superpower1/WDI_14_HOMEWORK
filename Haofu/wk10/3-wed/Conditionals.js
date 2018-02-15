// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

const bouncer = patron => {
  if (!patron.hasId) {
    console.log("No ID, no entry.");
    return
  }
  if (patron.age<18) {
    console.log("You're too young to be in here!");
  } else if (patron.age<21) {
    console.log("Come on in (but no drinking)!");
  } else if (patron.age<75) {
    console.log("Come on in!");
  } else {
    console.log("Are you sure you want to be here?");
  }
}
