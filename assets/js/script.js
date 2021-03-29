
var quizContainer = document.getElementById('quizContainer');
var questionContainer = document.getElementById('questionContainer');
var getInstructions = document.getElementById('instructions');
var submitButton = document.getElementById('submit');

var questionNumber = 0;
var answerA, answerB, answerC, answerD = 0;
var correct = 0;


var questions = [
    {
        question: "Commonly used data types do NOT include:",
        a: "apples",
        b: "strings",
        c: "booleans",
        d: "alerts",
        correctAnswer: "a"
    },

    {
        question: "Inside which HTML element do we put the Javascript?",
        a: "<script>",
        b: "<scripting>",
        c: "<js>",
        d: "javascript",
        correctAnswer: "a"
    },

    {
        question: "How do you write an IF statement in Javascript?",
        a: "if (i == 5)",
        b: "if i == 5 then",
        c: "if i = 5",
        d: "if i = 5 then",
        correctAnswer: "a"

    },

    {
        question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: "if i <> 5",
        b: "if i =! 5 then",
        c: "if (i !=5)",
        d: "if (i <> 5)",
        correctAnswer: "c"

    },

    {
        question: "How can you add a comment in Javascript?",
        a: "'This is a comment",
        b: "//This is a comment",
        c: "<!--This is a comment-->",
        d: " !!This is a comment!!",
        correctAnswer: "b"
    }
];

function generateQuiz() {
    submitButton.innerText = "Submit";
    document.getElementById('quizContainer');
    if (questionNumber >= questions.length) {
        quizContainer.innerHTML = "You got "+correctAnswer+" of "+questions.length+" correct";
        document.getElementById = ('questionNumber');
        return;
    }
    questionContainer.innerHTML = "<h3>"+questions+"</h3>";
}

submitButton.addEventListener('click', generateQuiz);