// import {answers} from "index.js";
// console.log(answers);
// localStorage.setItem("alter", "Clark Kent");
var score = 0;
var userAnswers = localStorage.getItem("playerChoices");
var questions = localStorage.getItem("quizQuestions");
var options = localStorage.getItem("optionsPicked");
var key = localStorage.getItem("key");

var answers = userAnswers.split(" ");
var quizQuestions = questions.split(" ");
var picked = options.split(" ");
var correctAnswer = key.split(" ");


function notCorrect(x) {
  x.style.textDecoration = "line-through";
}

// gets rid of empty space at the end of the string
answers.pop();
quizQuestions.pop();
picked.pop();

console.log(answers);
console.log(quizQuestions);
console.log(picked);
var score = 0;

var bank = localStorage.getItem("questionBank");

var Questions = JSON.parse(bank);

// MAKE IT A VARIABLE
var button = 0;

for (i=0; i<quizQuestions.length; i++) {

	button++;

	var op1 = document.getElementsByClassName("btn" + String(button));
	var op2 = document.getElementsByClassName("btn" + String((button+1)));
	var op3 = document.getElementsByClassName("btn" + String((button+2)));
	var op4 = document.getElementsByClassName("btn" + String((button+3)));

	var questionOne = document.getElementsByClassName("question-title" + String(i+1));

	questionOne[0].innerText = Questions[quizQuestions[i]].q;

	op1[0].innerText = Questions[quizQuestions[i]].a[0].text;
	op2[0].innerText = Questions[quizQuestions[i]].a[1].text;
	op3[0].innerText = Questions[quizQuestions[i]].a[2].text;
	op4[0].innerText = Questions[quizQuestions[i]].a[3].text;

	op1[0].value = Questions[quizQuestions[i]].a[0].isCorrect;
	op2[0].value = Questions[quizQuestions[i]].a[1].isCorrect;
	op3[0].value = Questions[quizQuestions[i]].a[2].isCorrect;
	op4[0].value = Questions[quizQuestions[i]].a[3].isCorrect;

  if (op1[0].value == "true") {
    op1[0].style.backgroundColor = "green";
  }
  if (op2[0].value == "true") {
    op2[0].style.backgroundColor = "green";
  }
  if (op3[0].value == "true") {
    op3[0].style.backgroundColor = "green";
  }
  if (op4[0].value == "true") {
    op4[0].style.backgroundColor = "green";
  }

  if (picked[i] == "op1" && op1[0].value != "true") {
    op1[0].style.backgroundColor = "gray";
    op1[0].style.textDecoration = "line-through";
  }

  if (picked[i] == "op2" && op2[0].value != "true") {
    op2[0].style.backgroundColor = "gray";
    op2[0].style.textDecoration = "line-through";
  }
  if (picked[i] == "op3" && op3[0].value != "true") {
    op3[0].style.backgroundColor = "gray";
    op3[0].style.textDecoration = "line-through";
  }
  if (picked[i] == "op4" && op4[0].value != "true") {
    op4[0].style.backgroundColor = "gray";
    op4[0].style.textDecoration = "line-through";
  }

	button+=3;

}

for (x=0; x<answers.length; x++) {
	if (answers[x] == "true") {
		score++;
	}
}
console.log(score);
// console.log(score);

var message = document.getElementsByClassName("playerMessage")[0];

if (score < 5){
  message.innerText =  "Do you even watch the movies? \nYou only got " + score + " correct."
}

else if (score < 7) {
  message.innerText =  "Not quite Avenger material... \nYou only got " + score + " correct."

}

else if (score >= 8) {
  message.innerText = "Excelsior! \nYou got " + score + " correct!";
}

const playAgain = document.getElementsByClassName("play-again")[0];

playAgain.addEventListener("click", () => {
  window.location = "welcome.html";
})


// var message = document.getElementsByClassName("playerMessage")[0];
// message.innerText = "Excelsior! \nYou got " + score + " correct!";
