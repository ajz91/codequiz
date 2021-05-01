
var quizContainer = document.getElementById('quizContainer');
var questionContainer = document.getElementById('questionContainer');
var getInstructions = document.getElementById('instructions');
var submitButton = document.getElementById('submit');
var timerEl = document.getElementById('timer');

var questionNumber = 0;
var correct = 0;
var timer = 30;

var questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: {
        a: "apples",
        b: "strings",
        c: "booleans",
        d: "alerts",
    },
        correctAnswer: "a"
    },

    {
        question: "Inside which HTML element do we put the Javascript?",
        choices: {
        a: "<script>",
        b: "<scripting>",
        c: "<js>",
        d: "javascript",
    },
        correctAnswer: "a"
    },

    {
        question: "How do you write an IF statement in Javascript?",
        choices: {
        a: "if (i == 5)",
        b: "if i == 5 then",
        c: "if i = 5",
        d: "if i = 5 then",
    },
        correctAnswer: "a"

    },

    {
        question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: {
        a: "if i <> 5",
        b: "if i =! 5 then",
        c: "if (i !=5)",
        d: "if (i <> 5)",
    },
        correctAnswer: "c"

    },

    {
        question: "How can you add a comment in Javascript?",
        choices: {
        a: "'This is a comment",
        b: "//This is a comment",
        c: "<!--This is a comment-->",
        d: " !!This is a comment!!",
    },
        correctAnswer: "b"
    }
];

function trackTime() {
    timerEl.textContent = 'Time Remaining: ' + timer;
    timer--;
    if (timer <= -1) {
      gameOver();
    }
  }

function generateQuiz() {
    submitButton.innerText = 'Submit Answer';
    time = setInterval(trackTime, 1000);
    timerEl.textContent = 'Time Remaining: ' + timer;

    var output = [];
    var choices;

    for (var i=0; i<questions.length; i++) {
        choices = [];

        for(choiceValue in questions[i].choices){
            choices.push ( '<label>'
            + '<input type="radio" name="question'+i+'" value="'+choiceValue+'">'
            + choiceValue + ': '
            + questions[i].choices[choiceValue]
        + '</label>'
        );
    }

        output.push(
            '<div class="question">' + questions[i].question + '</div><br/>'
            + '<div class="answers">' + choices.join('') + '</div>'
        );
    }

        questionContainer.innerHTML = output.join('');
}


function gameOver() {
    clearInterval(time);
}
submitButton.addEventListener('click', generateQuiz);

//    if (questionNumber >= questions.length) {
//     quizContainer.innerHTML = "You got "+correctAnswer+" of "+questions.length+" correct";
//     document.getElementById = ('questionNumber');
//     return;
//questionContainer.innerHTML = "<h3>"+questions+"</h3>";
// }