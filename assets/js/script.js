//variables to tie HTML elements together
var quizContainer = document.getElementById('quizContainer');
var questionContainer = document.getElementById('questionContainer');
var getInstructions = document.getElementById('instructions');
var submitButton = document.getElementById('submit');
var timerEl = document.getElementById('timer');
//starts at first question in array
var questionIndex = 0;
//variable to store starting correct number
var correct = 0;
//variable for starting timer
var timer = 30;
var firstTimeClicked = true;
var time;

//variables for each radio button
var answerA = document.getElementById('answerA');
var answerB = document.getElementById('answerB');
var answerC = document.getElementById('answerC');
var answerD = document.getElementById('answerD');

//all questions and possible choices in an array
var questions = [
	{
		question: 'Commonly used data types do NOT include:',
		choices: {
			choiceA: 'apples',
			choiceB: 'strings',
			choiceC: 'booleans',
			choiceD: 'alerts'
		},
		correctAnswer: 1
	},

	{
		question: 'Inside which HTML element do we put the Javascript?',
		choices: {
			choiceA: '<script>',
			choiceB: '<scripting>',
			choiceC: '<js>',
			choiceD: '<javascript>'
		},
		correctAnswer: 1
	},

	{
		question: 'How do you write an IF statement in Javascript?',
		choices: {
			choiceA: 'if (i == 5)',
			choiceB: 'if i == 5 then',
			choiceC: 'if i = 5',
			choiceD: 'if i = 5 then'
		},
		correctAnswer: 1
	},

	{
		question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
		choices: {
			choiceA: 'if i <> 5',
			choiceB: 'if i =! 5 then',
			choiceC: 'if (i !=5)',
			choiceD: 'if (i <> 5)'
		},
		correctAnswer: 3
	},

	{
		question: 'How can you add a comment in Javascript?',
		choices: {
			choiceA: "'This is a comment",
			choiceB: '//This is a comment',
			choiceC: '<!--This is a comment-->',
			choiceD: ' !!This is a comment!!'
		},
		correctAnswer: 2
	}
];

//function to start timer, should end game if it hits 0
function trackTime() {
	timerEl.textContent = 'Time Remaining: ' + timer;
	timer--;
	if (timer <= -1) {
		gameOver();
	}
}

function firstQuestion(questionIndex) {
	var q = questions[questionIndex];
	questionContainer.textContent = q.question;
	answerA.textContent = q.choices.choiceA;
	answerB.textContent = q.choices.choiceB;
	answerC.textContent = q.choices.choiceC;
	answerD.textContent = q.choices.choiceD;
}

//function to start quiz when button is pressed
function generateQuiz() {
	submitButton.innerText = 'Submit Answer';
	time = setInterval(trackTime, 1000);
	timerEl.textContent = 'Time Remaining: ' + timer;
	firstQuestion(questionIndex);
}

//function to stop game and clear timer
function gameOver() {
	clearInterval(time);
	console.log(correct);
	if (timer <= 0) {
	questionContainer.innerHTML = "Game Over!";
	submitButton.textContent = "Play Again?"
	generateQuiz();
}
	else {
	questionContainer.textContent = "You got " + correct + " out of 5 correct!";
	submitButton.textContent = "Play Again?"
	firstTimeClicked = true;
	}
}

//event listener for start quiz button press
submitButton.addEventListener('click', function() {
	if (firstTimeClicked) {
		generateQuiz();
		firstTimeClicked = false;
	} else {
		//code to check if answers element @ correctAnswer is checked: if so add one to correct variable
		var currentQuestion = questions[questionIndex];
		var correctAnswer = currentQuestion.correctAnswer;
		var radio = document.getElementById(correctAnswer);
		if (radio.checked) {
			correct++;
		}
		else {
			timer -= 10;
		}
		questionIndex = questionIndex + 1;
		if (questions.length === questionIndex) {
			gameOver();
		} else {
			firstQuestion(questionIndex);
		}
	}
});
