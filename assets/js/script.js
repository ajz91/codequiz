
var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var getInstructions = document.getElementById('instructions');
var correct = 0;


var question = [
    {
        question: "Commonly used data types do NOT include:",
        a: "apples",
        b: "strings",
        c: "booleans",
        d: "alerts",
        answer: "a"
    },

    {
        question: "Inside which HTML element do we put the Javascript?",
        a: "<script>",
        b: "<scripting>",
        c: "<js>",
        d: "javascript",
        answer: "a"
    },

    {
        question: "How do you write an IF statement in Javascript?",
        a: "if (i == 5)",
        b: "if i == 5 then",
        c: "if i = 5",
        d: "if i = 5 then",
        answer: "a"

    },

    {
        question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: "if i <> 5",
        b: "if i =! 5 then",
        c: "if (i !=5)",
        d: "if (i <> 5)",
        answer: "c"

    },

    {
        question: "How can you add a comment in Javascript?",
        a: "'This is a comment",
        b: "//This is a comment",
        c: "<!--This is a comment-->",
        d: " !!This is a comment!!",
        answer: "b"
    }
];

function generateQuiz() {
    submitButton.innerHTML = "Next";



}

submitButton.addEventListener('click', generateQuiz);