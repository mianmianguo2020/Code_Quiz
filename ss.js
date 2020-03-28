var startBtn = document.querySelector("#startbt");


var questionPops = [
    
    {question: "What is the element called that forms a search pattern out of a sequence of characters?",
    answers: [
      {a: "Douglas Crockford", correctAns: false},       
      {b: "Sheryl Sandberg", correctAns: false}, 
      {c: "Brendan Eich", correctAns: true}
     ]
    },

    {question: "Which of the following is correct about callbacks?",

    answers: [
    {a:"A callback is a plain JavaScript function passed to some method as an argument or option.", correctAns: false},  
    {b:"Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.", correctAns: false},  
    {c:"Both of the above.", correctAns: true}
     ]
    }, 




    {question: "Which of the following is true about cookie handling in JavaScript?",
    answers: [ {a:"JavaScript can manipulate cookies using the cookie property of the Document object."},
        {b:"JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page."},
        {c:"Both of the above.",correctAns: true}
            ]
    },
   


    {question: "Which built-in method returns the calling string value converted to upper case?",    

    answers: [
        {a:"toUpperCase()",correctAns: true},
        {b:"changeCase(case)"},
        {c:"toUpper()"}
                
      
]  
},

    {question: "Which of the following function of String object extracts a section of a string and returns a new string?",    
    answers:[
        {a:"slice()",correctAns: true},
        {b:"split()"},
        {c:"search()"}
                    
    ] 
}
   
]
console.log(questionPops);
console.log(questionPops[0])
console.log(questionPops[0].answers)
console.log(questionPops[0].answers[0])


function generateQ() {
    var myQuestion = document.createElement("div");
    myQuestion.innerHTML= questionPops[0].question;


    var answersList = document.createElement("div");
    answersList.innerHTML = questionPops[0].answers[0].a;
    answersList.innerHTML += questionPops[0].answers[1].b;
    answersList.innerHTML += questionPops[0].answers[2].c;
    // answersList.innerHTML = questionPops[0].answers[3].d;

    console.log(answersList);

    
document.getElementById("questions").append(myQuestion);
document.getElementById("answerList").append(answersList);

// document.getElementById("answerList").append(answersList{});
console.log("here");

}   

function startGame(){
    generateQ();
    // timeStart()

}
// onclick

// //create a start button to start time counting down and start quiz, 
startBtn.addEventListener("click", startGame);


//     runQuestion()






//        startTime();
// }



setInterval(function(){document.querySelector("#result").append(result)},600000);

//use will be presented new question after answer a question


//time will be substracted if question answer incorrectly





//counting final score function
// var scoreCount = 0
// function finalScore(){
//     if(correctAnswer == userinput)
//     scoreCount ++;}
//     scoreCount--
    
// }

//sace initial and score 
