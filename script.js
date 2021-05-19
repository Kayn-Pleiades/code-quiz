// Questions
const codeQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hardware Text Maker Language", "Hypertext Trait Making Language", "Happy Toads Marry Lovers"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "How do you add a comment to a JavaScript file?",
        choices: ["!!", "!--", "//", "* *"],
        answer: "//"
    },
    {
        question: "What is CSS for?",
        choices: ["Creating the contents of a webpage", "Controlling how a webpage looks", "Controlling how a webpage reacts", "Making people cry"],
        answer: "Controlling how a webpage looks"
    },
    {
        question: "What version of HTML does the internet currently use?",
        choices: ["1st", "7th", "3rd", "5th"],
        answer: "5th"
    },
    {
        question: "Which is not a core technology used on the world wide web?",
        choices: ["JavaScript", "Python", "HTML", "CSS"],
        answer: "Python"
    },
    {
        question: "In JavaScript, which of the following is not used?",
        choices: ["const", "let", "def", "var"],
        answer: "def"
    },
    {
        question: "What is Bootstrap?",
        choices: ["Framework for building websites", "What you use to tighten your boots", "A JavaScript library", "An HTML markup validation service"],
        answer: "Framework for building websites"
    },
    {
        question: "Which of these cannot be styled with CSS?",
        choices: ["Font size", "Creating functions", "Background color", "Add borders"],
        answer: "Creating functions"
    },
    {
        question: "Which is not used in JavaScript?",
        choices: ["&&", "||", "@@", "=="],
        answer: "@@"
    },
    {
        question: "What is a page called when it changes sizes based on the size of the screen it is viewed on?",
        choices: ["Responsive", "Reactive", "Flexible", "Expanding"],
        answer: "Responsive"
    }
];

// Time variables
var totalSeconds = 31;
var secondsElapsed = 0;
var interval;

// When the quiz is over
function gameOver() {
    score = $("#score").text().trim();
    $("#body").html("");
    code = `
        <div class="row">
            <div class="col bg-light mt-5 p-5 text-center">
                <h4>You answered <span id="correct"></span> questions correctly!</div></h4> 
            </div>
        </div>
    `
    $("#body").html(code);
    $("#correct").text(score);
}

// Displays time and checks if time is up
function renderTime() {
    var timeRemaining = totalSeconds - secondsElapsed;
    $("#timeRemaining").text(timeRemaining);

    if (totalSeconds <= secondsElapsed) {
        clearInterval(interval);
        $("#timeRemaining").text("Time is up!");
    }
}

// Starting the timer
function startTimer() {
    
    if (totalSeconds > 0) {
        // Every second, 1 second is added to the elapsed time, and then the time remaining is rendered. 
        interval = setInterval(function() {
        secondsElapsed++
        renderTime();
    }, 1000);
    }
}

// Load the first question when the page loads
function init() {
    console.log("running");
    $("#question").text(codeQuestions[0].question);
    for (i = 0; i < codeQuestions[0].choices.length; i++) {
        var choice = codeQuestions[0].choices[i];
        var code = `
            <br>    
            <button type="button" class="btn btn-primary"> ${choice} </button>
            <br>
    `;
        $("#choices").append(code);
    }
    startTimer();
};

// Runs when page loads
init();

// Load the next question
function nextQuestion(lastQuestion) {
    if (lastQuestion !== 10) {
        var currentQuestion = lastQuestion + 1;
        $("#questionNumber").text(currentQuestion);
        $("#question").text(codeQuestions[lastQuestion].question);
        $("#choices").html("");
        for (i = 0; i < codeQuestions[lastQuestion].choices.length; i++) {
            var choice = codeQuestions[lastQuestion].choices[i];
            var code = `
                <br>    
                <button type="button" class="btn btn-primary"> ${choice} </button>
                <br>
        `;
            $("#choices").append(code);
        }
    }
    else {
        gameOver();
    }
}

// When a choice is clicked on
$("#choices").on('click', 'button', function (event) {
    event.preventDefault();
    var choice = $(this).text().trim();
    console.log(choice);
    var whichQuestion = $("#questionNumber").text().trim();
    var questionNumber = parseInt(whichQuestion);
    var arrayNumber = questionNumber - 1;
    if (choice === codeQuestions[arrayNumber].answer) {
        $(this).removeClass("btn-primary").addClass("btn-success");
        var score = $("#score").text().trim();
        var toNumber = parseInt(score);
        var newScore = toNumber + 1;
        $("#score").text(newScore);
        totalSeconds = totalSeconds + 10;
        setTimeout(function () { nextQuestion(questionNumber) }, 500);
    }
    else {
        $(this).removeClass("btn-primary").addClass("btn-danger");
        totalSeconds = totalSeconds - 10;
        setTimeout(function () { nextQuestion(questionNumber) }, 500);
    }
});
