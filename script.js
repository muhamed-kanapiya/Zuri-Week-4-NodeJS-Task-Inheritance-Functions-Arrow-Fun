let name = prompt("Hello Gamer, input Your Name to Enter Stage One of this number guessing game");
let n = Math.random();
n = n * 2;
n = Math.floor(n) + 1;
console.log(n);
let guess = prompt(name + " Welcome" + " to stage one. Guess a number between 1 and 2")

if (guess == n) {
  alert("correct. you have earned 10 points");
  var p = Math.random();
  p = p * 3;
  p = Math.floor(p) + 1;
  console.log(p);
  let guess2 = prompt(name + " Welcome" + " to stage two Guess the Number in my console to finish game. hint: The number is ranging from 1 to 3");
  if (guess2 == p) {
    alert("Congrats " + name + " You finished the game, and received 20 points")
  } else { alert("I think you need a reboost, Try again") }

} else { alert("I thought You were a genius lol, try again") }