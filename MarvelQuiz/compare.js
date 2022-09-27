playerOne = localStorage.getItem("playerOne");
playerTwo = localStorage.getItem("playerTwo");
oneScore = localStorage.getItem("oneScore");
twoScore = localStorage.getItem("twoScore");
const greeting = document.getElementsByClassName("playerGreeting")[0];
const winner = document.getElementsByClassName("winner")[0];
var tie = false;

winningPlayer = "";

if (oneScore == twoScore) {
  tie = true;
}

else if (oneScore > twoScore) {
  winningPlayer = playerOne;
}

else {
  winningPlayer = playerTwo;
}

greeting.innerText = playerOne + " got " + oneScore + " questions correct. \n " + playerTwo +
" got " + twoScore + " questions correct."

if (!tie) {
  winner.innerText = "Congratulations, " + winningPlayer + "!\n You are the more loyal fan!"
}

else {
  winner.innerText = "Wow! You are even! \nGuess you'll have to try again, true-believers..."
}
