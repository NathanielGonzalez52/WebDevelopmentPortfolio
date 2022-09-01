// import {answers} from "index.js";
// console.log(answers);
// localStorage.setItem("alter", "Clark Kent");

var userAnswers = localStorage.getItem("myStuff");

var answers = userAnswers.split(" ")

// gets rid of empty space at the end of the string
answers.pop();
