// Questions
const codeQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hardware Text Maker Language", "Hypertext Trait Making Language", "Happy Toads Marry Lovers"],
        answer: "Hyper Text Markup Language"
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

// When a choice is clicked on
$(document).ready(function () {
    $("button").on("click", function () {
        var choice = $(this).text().trim();
        var score = $("#score").text().trim();
        var toNumber = parseInt(score);
        if (choice === codeQuestions[toNumber].answer) {
            $(this).removeClass("btn-primary").addClass("btn-success");
            console.log(toNumber);
        }
        else {
            $(this).removeClass("btn-primary").addClass("btn-danger");
        }
    });
});

// Runs when page loads
init();