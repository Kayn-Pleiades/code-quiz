// Questions
const codeQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hardware Text Maker Language", "Hypertext Trait Making Language", "Happy Toads Marry Lovers"],
        answer: "Hyper Text Markup Language"
    }
];

// Load a question when the page loads
function init() {
    $("#question").text(codeQuestions[0].question);
    for (i = 0; i < codeQuestions[0].choices.length; i++) {
        var choice = codeQuestions[0].choices[i];
        var code = `
            <br>    
            <button type="submit" class="btn btn-primary"> ${choice} </button>
            <br>
    `;
        $("#choices").append(code);
    }
};

init();