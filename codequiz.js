var answersDiv = document.querySelector("#answerList");
var questionsDiv = document.querySelector("#questions");

var answersULTag = document.createElement("ul");
answersDiv.appendChild(answersULTag);
var rightWrongDiv = document.createElement("div");
document.body.appendChild(rightWrongDiv);

var score = 0;


var firstQuestionData = {
    question: "this is first question",
    answers: [
        "this is answer a to first question",
        "this is answer b to first question",
        "this is answer c to first question"
    ],
    correctAnswer: 1
}

var secondQuestionData = {
    question: "this is second question",
    answers: [
        "this is answer a to second question",
        "this is answer b to second question",
        "this is answer c to second question"
    ],
    correctAnswer: 2
}

var thirdQuestionData = {
    question: "this is third question",
    answers: [
        "this is answer a to third question",
        "this is answer b to third question",
        "this is answer c to third question"
    ],
    correctAnswer: 1
}

var fourthQuestionData = {
    question: "this is fourth question",
    answers: [
        "this is answer a to fourth question",
        "this is answer b to fourth question",
        "this is answer c to fourth question"
    ],
    correctAnswer: 0
}

var fifthQuestionData = {
    question: "this is fifth question",
    answers: [
        "this is answer a to fifth question",
        "this is answer b to fifth question",
        "this is answer c to fifth question"
    ],
    correctAnswer: 1
}

var questionsData = [
    firstQuestionData,
    secondQuestionData,
    thirdQuestionData,
    fourthQuestionData,
    fifthQuestionData
]

renderQuestion(0);

function renderQuestion(index) {
    questionsDiv.innerHTML = questionsData[index].question;
    var answers = questionsData[index].answers;
    var correctAnswer = questionsData[index].correctAnswer;
    answersULTag.innerHTML = "";

    for(var counter = 0; counter < answers.length; counter++) {
        var newLI = document.createElement("li");
        answersULTag.appendChild(newLI);
        newLI.textContent = answers[counter];
        newLI.setAttribute("data-index", counter);

        newLI.addEventListener("click", function(event) {
            var element = event.target;
            var choiceIndex = element.getAttribute("data-index");
            if (choiceIndex == correctAnswer) {
                rightWrongDiv.textContent = "RIGHT!";
                score++;
            } else {
                rightWrongDiv.textContent = "WRONG!";
            }
            if( index === questionsData.length - 1) {
                // have all done!
                // user inputs email address
                // submit button for email address
                // after submit button, go to high scores page
                answersULTag.innerHTML = "";
                questionsDiv.innerHTML = "";
                rightWrongDiv.innerHTML = "";


                var scoreDiv = document.createElement("div");
                scoreDiv.textContent = "Your final score is: " + score;
                document.body.appendChild(scoreDiv);
                var emailDiv = document.createElement("div");
                document.body.appendChild(emailDiv);
                emailDiv.textContent = "Email: ";
                var emailInformation = document.createElement("input");
                emailDiv.appendChild(emailInformation)
            }
            //if not last question, go to next question
            renderQuestion(index+1);
        });
    }
}
