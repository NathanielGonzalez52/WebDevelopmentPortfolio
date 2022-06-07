var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images\\dice"+randomNumber1+".png");
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images\\dice"+randomNumber2+".png");
console.log(randomNumber1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}

else {
  document.querySelector("h1").textContent = "It's a tie!";
}
