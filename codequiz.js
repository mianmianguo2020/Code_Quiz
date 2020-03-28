var secondsForQuiz = 80;
var wrongPenalty = 10;
var timeLeft = 0;
var timerInterval;

var timerDiv = document.querySelector("#timer");
timerDiv.textContent = "Time: " + timeLeft;
var rightWrongDiv = document.createElement("div");
document.body.appendChild(rightWrongDiv);


var viewscoreDiv = document.querySelector("#viewscore");
viewscoreDiv.addEventListener("click", function () {
    renderHighscoresPage();
})

renderStartPage();

var score = 0;

var firstQuestionData = {
    question: "Which of the following is true about cookie handling in JavaScript?",
    answers: [

        "A - JavaScript can manipulate cookies using the cookie property of the Document object.",
        "B - JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.",
        "C - Both of the above."
    ],
    correctAnswer: 2
}

var secondQuestionData = {
    question: " Which of the following is correct about callbacks?",
    answers: [
        "A - A callback is a plain JavaScript function passed to some method as an argument or option",
        "B - Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
        "C - Both of the above"
    ],
    correctAnswer: 2
}

var thirdQuestionData = {
    question: "Which built-in method returns the calling string value converted to upper case?",
    answers: [
        "A - toUpperCase()",
        "B - toUpper()",
        "C - changeCase(case)"
    ],
    correctAnswer: 0
}

var fourthQuestionData = {
    question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
    answers: [
        "A - toSource()",
        "B - valueOf()",
        "C - toString()"
    ],
    correctAnswer: 0
}

var fifthQuestionData = {
    question: "Which of the following function of String object extracts a section of a string and returns a new string?",
    answers: [
        "A - slice()",
        "B - split()",
        "C - replace()"
    ],
    correctAnswer: 0
}

var questionsData = [
    firstQuestionData,
    secondQuestionData,
    thirdQuestionData,
    fourthQuestionData,
    fifthQuestionData
]

function renderStartPage() {
    var contentDiv = document.querySelector(".content");
    contentDiv.textContent = "";

    var heading = document.createElement("h1");
    heading.textContent = "Coding Quiz";
    var descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = "Click Start to begin the quiz.";
    var button = document.createElement("button");
    button.textContent = "Start";
    button.addEventListener("click", function () {
        contentDiv.textContent = "";
        var timerDiv = document.querySelector("#timer");
        timeLeft = secondsForQuiz;
        timerDiv.textContent = "Time: " + timeLeft;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
            }
            if (timeLeft < 0) {
                timeLeft = 0;
            }
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                renderFinalScorePage();
            }
            timerDiv.textContent = "Time: " + timeLeft;
        }, 1000)
        renderQuestion(0);
    })

    contentDiv.appendChild(heading);
    contentDiv.appendChild(descriptionDiv);
    contentDiv.appendChild(button);

}

function renderQuestion(index) {
    var contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    var questionsDiv = document.createElement("div");
    questionsDiv.setAttribute("id", "questions");
    var answersDiv = document.createElement("div");
    answersDiv.setAttribute("id", "answersList");
    contentDiv.appendChild(questionsDiv);
    contentDiv.appendChild(answersDiv);

    var answersULTag = document.createElement("div");
    answersDiv.appendChild(answersULTag);

    questionsDiv.innerHTML = questionsData[index].question;
    var answers = questionsData[index].answers;
    var correctAnswer = questionsData[index].correctAnswer;
    answersULTag.innerHTML = "";

    for (var counter = 0; counter < answers.length; counter++) {
        var newLI = document.createElement("li");
        answersULTag.appendChild(newLI);
        newLI.textContent = answers[counter];
        newLI.setAttribute("data-index", counter);

        newLI.addEventListener("click", function (event) {
            var element = event.target;
            var choiceIndex = element.getAttribute("data-index");
            if (choiceIndex == correctAnswer) {
                rightWrongDiv.textContent = "RIGHT!";
                score += 20;
            } else {
                timeLeft = timeLeft - wrongPenalty;
                rightWrongDiv.textContent = "WRONG!";
            }
            setTimeout(function () {
                rightWrongDiv.textContent = "";
            }, 1000)
            if (index === questionsData.length - 1) {
                renderFinalScorePage();
            }
            else {
                renderQuestion(index + 1);
            }

        });
    }
}

function renderFinalScorePage() {
    timeLeft = 0;
    timerDiv.textContent = "Time: " + timeLeft;
    clearInterval(timerInterval);
    rightWrongDiv.textContent = "";
    var contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";

    var scoreDiv = document.createElement("div");
    scoreDiv.textContent = "Your final score is: " + score;
    contentDiv.appendChild(scoreDiv);
    var labelDiv = document.createElement("div");
    contentDiv.appendChild(labelDiv);
    labelDiv.textContent = "Enter initials: ";
    var initialsInput = document.createElement("input");
    labelDiv.appendChild(initialsInput)

    var submitBtn = document.createElement("button");
    contentDiv.appendChild(submitBtn);
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", function (event) {
        var highscore = localStorage.getItem("highscore");
        if (score > highscore) {
            localStorage.setItem("highscore", score);
            localStorage.setItem("initials", initialsInput.value);
        }

        labelDiv.innerHTML = "";
        scoreDiv.innerHTML = "";
        initialsInput.innerHTML = "";
        submitBtn.parentNode.removeChild(submitBtn);
        renderHighscoresPage();
    })
}

function renderHighscoresPage() {
    var contentDiv = document.querySelector(".content");
    contentDiv.textContent = "";
    var highscore = localStorage.getItem("highscore");
    var initials = localStorage.getItem("initials");

    var headingDiv = document.createElement("h1");
    headingDiv.textContent = "Highscores";
    contentDiv.appendChild(headingDiv);

    var highscoreDiv = document.createElement("div");
    contentDiv.appendChild(highscoreDiv);
    if (highscore != null && initials != null) {
        highscoreDiv.textContent = initials + ":" + highscore;
    }

    var goBackButton = document.createElement("button");
    goBackButton.textContent = "Go Back";
    contentDiv.appendChild(goBackButton);
    goBackButton.addEventListener("click", function () {
        renderStartPage();
    })

    var clearButton = document.createElement("button");
    clearButton.textContent = "Clear Highscores"
    contentDiv.appendChild(clearButton);
    clearButton.addEventListener("click", function () {
        localStorage.removeItem("highscore");
        localStorage.removeItem("initials");
        renderHighscoresPage();
    })
}