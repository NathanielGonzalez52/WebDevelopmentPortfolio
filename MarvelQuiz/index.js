var selected = "";
const answers = [];
function defaultColors () {
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');

	op1.style.backgroundColor = "#ED1D24";
	op2.style.backgroundColor = "#ED1D24";
	op3.style.backgroundColor = "#ED1D24";
	op4.style.backgroundColor = "#ED1D24";
}

const Questions = [{
		id: 0,
		q: 'Which character said, "I never said you were a superhero"?',
		a: [{ text: "Obediah Stane", isCorrect: false },
			{ text: "Pepper Potts", isCorrect: false },
			{ text: "Christine Everheart", isCorrect: true },
			{ text: "Vicki Vale", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "What is the first song played in Iron Man?",
		a: [{ text: "Highway to Hell", isCorrect: false},
			{ text: "Welcome to the Jungle", isCorrect: false },
			{ text: "Shoot to Thrill", isCorrect: false },
			{ text: "Back in Black", isCorrect: true }
		]

	},
	{
		id: 2,
		q: "What is Natasha's American alias in Iron Man 2?",
		a: [{ text: "Natalie Romero", isCorrect: false },
			{ text: "Natalie Rieman", isCorrect: false },
			{ text: "Natalie Rushman", isCorrect: true },
			{ text: "Natalie Roman", isCorrect: false }
		]
	},
	{
		id: 3,
		q: "What does S.H.I.E.L.D stand for?",
		a: [{ text: "Strategic Home Intergral Enemy Line Division", isCorrect: false },
			{ text: "Strategy Hill Interforce Evil Latent Evil ", isCorrect: false },
			{ text: "Strategic Homeland Intervention Enforcement and Logistics Division", isCorrect: true },
			{ text: "None of these", isCorrect: false }
		]
	},
	{
		id: 4,
		q: "Which movie is the Tessseract first seen on screen?",
		a: [{ text: "Captain America The First Avenger", isCorrect: false },
			{ text: "Thor", isCorrect: true },
			{ text: "Thor: The Dark World", isCorrect: false },
			{ text: "Iron Man 2", isCorrect: false }
		]
	},
	{
		id: 5,
		q: "What is Pepper Potts allergic to?",
		a: [{ text: "Apples", isCorrect: false },
			{ text: "Cherries", isCorrect: false },
			{ text: "Strawberries", isCorrect: true },
			{ text: "Peaches", isCorrect: false }
		]
	},
	{
		id: 6,
		q: "About how many universes did Doctor Strange see in Infinity War?",
		a: [{ text: "10 Million", isCorrect: false },
			{ text: "5 Million", isCorrect: false },
			{ text: "14 Million", isCorrect: true },
			{ text: "2 Million", isCorrect: false }
		]
	},
	{
		id: 7,
		q: "In what movie does Stan Lee cameo as a bartender?",
		a: [{ text: "Ant-Man", isCorrect: true },
			{ text: "Spider-Man: Homecoming", isCorrect: false },
			{ text: "Iron Man 3", isCorrect: false },
			{ text: "Captain America: The First Avenger", isCorrect: false }
		]
	},
	{
		id: 8,
		q: "What is the wifi password given to Doctor Strange?",
		a: [{ text: "Shawarma", isCorrect: false },
			{ text: "Shamblama", isCorrect: false },
			{ text: "Shamballa", isCorrect: true },
			{ text: "Shrine", isCorrect: false }
		]
	},
	{
		id: 9,
		q: "What song is playing when Peter arrives to the dance in Spider-Man: Homecoming?",
		a: [{ text: "Space Age Love Song", isCorrect: true },
			{ text: "Save it for Later", isCorrect: false },
			{ text: "Blitzkreig Bop", isCorrect: false },
			{ text: "Ran So Far Away ", isCorrect: false }
		]
	},
	{
		id: 10,
		q: "What Earth does Mysterio claim to be from in Spider-Man: Far From Home?",
		a: [{ text: "Earth-616", isCorrect: false },
			{ text: "Earth-232", isCorrect: false },
			{ text: "Earth-69420", isCorrect: false },
			{ text: "Earth-833", isCorrect: true }
		]
	},
	{
		id: 11,
		q: "What is the name of Drax's wife?",
		a: [{ text: "Kamaria", isCorrect: false },
			{ text: "Ovette", isCorrect: true },
			{ text: "Lyla", isCorrect: false },
			{ text: "Lillian", isCorrect: false }
		]
	},
	{
		id: 12,
		q: "What is the name of Drax's daughter?",
		a: [{ text: "Kamaria", isCorrect: true },
			{ text: "Ovette", isCorrect: false },
			{ text: "Lyla", isCorrect: false },
			{ text: "Lillian", isCorrect: false }
		]
	},
	{
		id: 13,
		q: "In Infinity War, who is the last character that is dusted onscreen?",
		a: [{ text: "Spider-Man", isCorrect: false },
			{ text: "The Winter Soldier", isCorrect: false },
			{ text: "Falcon", isCorrect: false },
			{ text: "Nick Fury", isCorrect: true }
		]
	},
	{
		id: 14,
		q: "What is the name of the dwarf that made the Infinity Gauntlet?",
		a: [{ text: "Pip", isCorrect: false },
			{ text: "Etrigan", isCorrect: false },
			{ text: "Eitri", isCorrect: true },
			{ text: "Polis", isCorrect: false }
		]
	},
	{
		id: 15,
		q: "What is the name of the soldier that become Abomination?",
		a: [{ text: "Emmet Blonsky", isCorrect: false },
			{ text: "Emil Blonsky", isCorrect: true },
			{ text: "Emilio Blonsky", isCorrect: false },
			{ text: "Eugene Blonsky", isCorrect: false }
		]
	},
	{
		id: 16,
		q: "In Spider-Man: Homecoming, what is the name of the destroyed ferry?",
		a: [{ text: "Brooklyn Ferry", isCorrect: false },
			{ text: "The Queens Ferry", isCorrect: false },
			{ text: "The Staten Island Ferry", isCorrect: true },
			{ text: "The New York Ferry", isCorrect: false }
		]
	},
	{
		id: 17,
		q: "Which one of these phrases is NOT required to brainwash Bucky?",
		a: [{ text: "Freight Car", isCorrect: false },
			{ text: "Furnace", isCorrect: false },
			{ text: "Seven", isCorrect: true },
			{ text: "Nine", isCorrect: false }
		]
	}
]

function answerChoices(ques) {
	// console.log(ques);
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');

	// Providing the true or false value to the options
	op1.value = Questions[ques].a[0].isCorrect;
	op2.value = Questions[ques].a[1].isCorrect;
	op3.value = Questions[ques].a[2].isCorrect;
	op4.value = Questions[ques].a[3].isCorrect;

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "green";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "grey";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "green";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "grey";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "green";
		op4.style.backgroundColor = "grey";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "green";
		selected = op4.value;
	})
	return selected;
}

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


	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "green";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "grey";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "green";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "grey";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "green";
		op4.style.backgroundColor = "grey";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "grey";
		op2.style.backgroundColor = "grey";
		op3.style.backgroundColor = "grey";
		op4.style.backgroundColor = "green";
		selected = op4.value;
	})

	// // Grabbing the evaluate button
	// const evaluate = document.getElementsByClassName("evaluate");
	//
	// // Evaluate method
	// evaluate[0].addEventListener("click", () => {
	// 	if (selected == "true") {
	// 		result[0].innerHTML = "True";
	// 		result[0].style.color = "green";
	// 	} else {
	// 		result[0].innerHTML = "False";
	// 		result[0].style.color = "red";
	// 	}
	// })
}

// REVERSES STRING
function reverseString(str) {
    return str.split("").reverse().join("");
}
// RANDOMIZE QUESTIONS

// Questions will be asked
function randNum() {
	var randValue = Math.random();
	// Math.floor(randNum * (11 + 1))
	var randQues = Math.floor(randValue * (Questions.length))
	return randQues;

}

const nums = [];


// first random question
if (start) {
	var id = 1;
	title.innerText = "Question " + Number(id);
	var firstQuestion = randNum();
	nums.push(firstQuestion);
	iterate(firstQuestion.toString());
	// answerChoices(firstQuestion.toString());
	// console.log(nums);
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
const previous = document.getElementsByClassName('previous')[0];
const submit = document.getElementsByClassName('submit')[0];
submit.hidden = true;

var id = 1;


var pClicked = false;
var prevClicked = 0;
previous.hidden = true;

next.addEventListener("click", () => {
	if (start && selected != "") {
		// answers.push(answerChoices(firstQuestion.toString()));
		// console.log(answers);
		// console.log(selected);
		start = false;
	}
	else if (selected == "") {
		window.alert("Please select an answer.");
		return ""
	}

	answers.push(selected);
	console.log(answers);
	previous.disabled = false;
	previous.hidden = false;
	defaultColors();

	if (prevClicked > 0) {
			// title.innerText = "Question " + Number(nums.indexOf(id));
			// iterate(nextQuestion.toString());
		prevClicked--;
		title.innerText = "Question " + Number(id-prevClicked);
		iterate(nums[nums.length-(1+prevClicked)]);
		if (reverseString(title.innerText)[0] == '0') {
			next.hidden = true;
			submit.hidden = false;
			// next.value = "DONE";
		}
	}
		else if (id <= 9) {
			id++;
			var nextQuestion = randNum();

			while (nums.includes(nextQuestion)) {
					nextQuestion = randNum();
			}
				nums.push(nextQuestion);
				title.innerText = "Question " + Number(id);
				iterate(nextQuestion.toString());
				// console.log("end");
				if (reverseString(title.innerText)[0] == '0') {
					next.hidden = true;
					submit.hidden = false;
					// next.textContent = "Submit";
		}
	}
	selected = "";
})

var currId = nums[nums.length-1];

// FINDS PREVIOUS BUTTON
// ADD FUNCTIONALITY TO PREVIOUS BUTTON
previous.addEventListener("click", () => {
	defaultColors();
	next.hidden = false;
	submit.hidden = true;
	// prevClicked++;
	// var prevId = nums[nums.length-(1+prevClicked)];
	// var backWards = id-prevClicked;
	// var currId = nums[nums.length-1];
	if (id==1 || backWards<1) {
		previous.disabled = true;
	}
	else {
		previous.disabled = false;
		// prevClicked++;
		// if (prevClicked > 0) {
			// var prevId = nums[nums.length-(1+prevClicked)];
			// var backWards = id-prevClicked;
		// }
	try {
		prevClicked++;
		var prevId = nums[nums.length-(1+prevClicked)];
		var backWards = id-prevClicked;
		title.innerText = "Question " + Number(backWards);
		iterate(nums[nums.length-(1+prevClicked)]);
		answers.pop()
		// console.log("try block");
		// console.log(title.innerText);
		if (reverseString(title.innerText)[0] == '1') {
			previous.hidden = true;
		}
	}
	catch(err) {
		// title.innerText = "Question " + Number(id);
		previous.hidden = true;
		prevClicked--;
		title.innerText = "Question " + Number(1);
		iterate(currId);
		console.log("catch block");
		console.log("Catch Block: " + prevClicked);
		// console.log(prevClicked);
  	// console.log(err);
	}
}
	// console.log(prevId);
	// console.log(id);
})

var choices = "";

submit.addEventListener("click", () => {
	if (selected == "") {
		submit.removeAttribute("href")

		window.alert("Please select an answer.");
	}

	else {
		answers.push(selected);
		console.log(answers);
		for (i=0; i<answers.length; i++) {
			choices += answers[i]+ " ";
		}
		console.log(choices);
		localStorage.setItem("myStuff", choices);

		submit.href = "submit.html";
	}
})

// C:\Users\natha\OneDrive\desktop\MarvelQuiz\index.html
