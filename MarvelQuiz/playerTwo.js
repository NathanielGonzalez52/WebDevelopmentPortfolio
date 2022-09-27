var selected = "";
var correctAnswer = "";
var score = 0;
const answers = [];
const option = [];

function defaultColors () {
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');

	op1.style.backgroundColor = "#ED1D24";
	op1.style.color = "#FFFFFF";
	op2.style.backgroundColor = "#ED1D24";
	op2.style.color = "#FFFFFF";
	op3.style.backgroundColor = "#ED1D24";
	op3.style.color = "#FFFFFF";
	op4.style.backgroundColor = "#ED1D24";
	op4.style.color = "#FFFFFF";
}

function clickedOn (x) {
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');

	x.style.backgroundColor = "#CC0000";
	x.style.color = "#D3AF37";
	if (x == op1) {
		op2.style.backgroundColor = "grey";
		op2.style.color = "#DDDDDD";
		op3.style.backgroundColor = "grey";
		op3.style.color = "#DDDDDD";
		op4.style.backgroundColor = "grey";
		op4.style.color = "#DDDDDD";
	}

	if (x == op2) {
		op1.style.backgroundColor = "grey";
		op1.style.color = "#DDDDDD";
		op3.style.backgroundColor = "grey";
		op3.style.color = "#DDDDDD";
		op4.style.backgroundColor = "grey";
		op4.style.color = "#DDDDDD";
	}
	if (x == op3) {
		op1.style.backgroundColor = "grey";
		op1.style.color = "#DDDDDD";
		op2.style.backgroundColor = "grey";
		op2.style.color = "#DDDDDD";
		op4.style.backgroundColor = "grey";
		op4.style.color = "#DDDDDD";
	}
	if (x == op4) {
		op1.style.backgroundColor = "grey";
		op1.style.color = "#DDDDDD";
		op2.style.backgroundColor = "grey";
		op2.style.color = "#DDDDDD";
		op3.style.backgroundColor = "grey";
		op3.style.color = "#DDDDDD";
	}
}

var bank = localStorage.getItem("questionBank");

var Questions = JSON.parse(bank);

// Set start
var start = true;
// Iterate
function iterate(id) {
	// Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;

	var pic = document.getElementsByClassName("ques-pics")[0];

	pic.src = Questions[id].pic;

	// Show selection for op1
	op1.addEventListener("click", () => {
		clickedOn(op1);
		selected = op1.value;
		picked = "op1";
		correctAnswer = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		clickedOn(op2);
		selected = op2.value;
		picked = "op2";
		correctAnswer = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		clickedOn(op3);
		selected = op3.value;
		picked = "op3";
		correctAnswer = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		clickedOn(op4);
		selected = op4.value;
		picked = "op4";
		correctAnswer = op4.value;
	})
}

// REVERSES STRING
function reverseString(str) {
    return str.split("").reverse().join("");
}
// RANDOMIZE QUESTIONS

// Questions will be asked
function randNum() {
	var randValue = Math.random();
	var randQues = Math.floor(randValue * (Questions.length))
	return randQues;
}


var playerTwo = localStorage.getItem("playerTwo");

const playerGreeting = document.getElementsByClassName("player-greeting")[0];

playerGreeting.innerText = 'Please press "Start" when you are ready, ' + playerTwo;

const ready = document.getElementsByClassName("greeting")[0];
const gameStart = document.getElementsByClassName("game");

ready.addEventListener("click", () => {
	ready.hidden = true;
	playerGreeting.style.visibility = "hidden";
	for (i=0;i<=gameStart.length;i++) {
		// console.log(gameStart[i]);
		try{
			gameStart[i].style.visibility = "visible";
		}
		catch {
			console.log("Not Necessary");
		}
	}

})

// const nums = [];
//
// for (i=0; i<10; i++) {
// 	quesNum = randNum();
// 	while (nums.includes(quesNum)) {
// 		quesNum = randNum()
// 	}
// 	nums.push(quesNum);
// }

var questions = localStorage.getItem("quizQuestions");

const nums = questions.split(" ");

nums.pop();

// first random question
if (start) {
	var id = 1;
	console.log("activated");
	title.innerText = "Question " + Number(id);
	// var firstQuestion = randNum();
	// nums.push(firstQuestion);
	iterate(nums[(id-1).toString()]);
	// console.log(nums[id-1]);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
const previous = document.getElementsByClassName('previous')[0];
const submit = document.getElementsByClassName('submit')[0];
submit.hidden = true;

var pClicked = false;
var prevClicked = 0;
previous.hidden = true;

next.addEventListener("click", () => {
	if (selected=="") {
		window.alert("Whoops! Looks like you forgot to select an answer");
		return "";
	}

	// MAKES QUIZ TEN QUESTIONS
	if (id <= nums.length) {
		start = false;
		id++;

		iterate(nums[(id-1)].toString());
		title.innerText = "Question " + id;
		previous.hidden = false;
		defaultColors();
		option.push(picked);
		answers.push(selected);
	}
	// INDICATES USER THAT QUIZ IS COMPLETED
	if (id==10) {
		submit.hidden = false;
		next.hidden = true;
	}

	console.log(answers);
	selected = "";
})

// FINDS PREVIOUS BUTTON
// ADD FUNCTIONALITY TO PREVIOUS BUTTON
previous.addEventListener("click", () => {
	defaultColors();
	next.hidden = false;
	answers.pop();
	option.pop();
	id--;
	if (id==1) {
		previous.hidden = true;
	}
	iterate(nums[(id-1)].toString());
	title.innerText = "Question " + id;
})

var choices = "";
var questions = "";
var options = "";

submit.addEventListener("click", () => {
	if (selected == "") {
		window.alert("Please select an answer.");
	}

	else {
		answers.push(selected);
		option.push(picked);
		console.log(answers);
		for (i=0; i<answers.length; i++) {
			choices += answers[i]+ " ";
		}
		for (i=0; i<nums.length; i++) {
			questions += nums[i]+ " ";
		}
		for (i=0; i<option.length; i++) {
			options += option[i]+ " ";
		}

		console.log(choices);
		console.log(questions);
		console.log(options);
    for (x=0; x<answers.length; x++) {
      if (answers[x] == "true") {
        score++;
      }
    }

    localStorage.setItem("twoScore", score);
		localStorage.setItem("playerTwoChoices", choices);
		localStorage.setItem("quizQuestions", questions);
		localStorage.setItem("playerTwoOptions", options);
		window.location="compare.html";
	}
})

// C:/Users/natha/OneDrive/desktop/MarvelQuiz/index.html
