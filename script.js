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
        answer: "//",
    }
];

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
        console.log("end");
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
        setTimeout(function () { nextQuestion(questionNumber) }, 500);
    }
    else {
        $(this).removeClass("btn-primary").addClass("btn-danger");
    }
});
