//when start button is clicked, use eventlistener, then a timer starts at 75 and counts down to 0. when clock = 0, the quiz ends and new conetnt appears to enter your initials and submit
//when get to the last question, the time left on timer = your score
//when start button is clicked, starter content on page dissapears and first question pops up with 4 answer buttons to click on
//function that makes start page disapear and first question appear

//when an answer is clicked, the next question appears, and below that question is "correct" or "incorrect".
//when incorrect answer is clicked, then 10 seconds is taken off the clock
//this happens with five different questions
//after the fifth question, new text comes up and says all done and gives you the final score which is the time left on the timer, and you can enter your initials and submit them
//when you submit your initials, they are stored locally, and on the highscores.html page they show up in order with initial entered and score. there is also a go back button that takes you to the start of the quiz, and a clear high score button that clears all stored data

//variables

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

var startButton = document.getElementById("start-Quiz-Btn"); //accesses start button on html page

var submitScore = document.getElementById("submit-Score"); //form to sumbit score into 

var timerEl = document.getElementById("countdown");

var questionOne = document.getElementById("first-question");
var questionTwo = document.getElementById("second-question");
var questionThree = document.getElementById("third-question");
var questionFour = document.getElementById("fourth-question");
var questionFive = document.getElementById("fifth-question");

//keep track of which question on
var currentQuestionIndex = 0;
var currentChoicesIndex = 0;
var currentAnswerIndex = 0;

//functions
//for loop to create each choice into a button
// for (var i =o; i<questions.length; i++) {

// }

//this will start when the start button on start page is clicked
//this will start at 75 and end at 0
//10 seconds will be deducted if an answer is wrong
//when clock hits 0 the quiz is over and goes to the gane is over text
function startTimer() {
    var timeLeft = 75;
    //setInterval method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

        // //get text on screen
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeleft--;
        } else {
            timerEl.textContent = " ";
            clearInterval(setInterval);
        }
    }, 1000);



    //if answer is wrong deduct 10 seconds from time left
    //when clock hits 0 go to game is over page with submit score
}

//this will start when the start button on start page is clicked
//this will start at 75 and end at 0
//10 seconds will be deducted if an answer is wrong
//when clock hits 0 the quiz is over and goes to the gane is over text


function startQuiz() {
    //when quiz starts, start timer
    startTimer();
    //load question 1 function
    //q1();
    //make starter text dissapear
    function startDissapears() {
        var startText = document.getElementById("starting-content");
        if (startText.style.display === "none") {
            startText.style.display = "block";
        } else {
            startText.style.display = "none";
        }
    }
    startDissapears();
    getQuestion();
}



function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    var currentChoices = questions[currentChoicesIndex];
    var choiceQ1 = document.getElementById("choice-1");
    // choiceQ1.textContent = currentChoices.choices;


    var button = document.createElement("button");
    button.innerHTML = currentChoices.choices[0];
    document.body.appendChild(button);
    button.addEventListener("click", function(){ removeButton();

      //get next question to appear and you are wrong  ;
    })

    var button2 = document.createElement("button");
    button2.innerHTML = currentChoices.choices[1];
    document.body.appendChild(button2);

    var button3 = document.createElement("button");
    button3.innerHTML = currentChoices.choices[2];
    document.body.appendChild(button3);
    //when clicked this is correct

    var button4 = document.createElement("button");
    button4.innerHTML = currentChoices.choices[3];
    document.body.appendChild(button4);

    //for loop psuedo code
    //for every question, show buttons with each choice
    //when each button is clicked, that question and choices is replaced with the next question and choices
    // var getaChoice = currentChoices.choices

    // for (var i = 0; i < getaChoice.length; i++) {
    //     var button = document.createElement("button");
    //     button.innerHTML = currentChoices.choices[i];
    //     document.body.appendChild(button);
    //     button.addEventListener("click", function () {
    //         console.log("it works!")

    //     });
    // }



        // currentChoices.choices.forEach(function (choice, i) {
        //     for (var i =0; choices.length; i++) {
        //         document.createElement("BUTTON");
        //         document.body.appendChild()

        //     }
        // })


        //to clear out text from choices, repeat 3 more times for each choice, can be aloop or copy 
        // var choice1 = document.getElementById("choice-1");
        // choice1.innerHTML = "";

        // currentQuestion.choices.forEach(function (choice, i) {
        //     // create new button for each choice
        //  for (var i = 0; i < choice1.length; i++) {
        //      document.createElement("BUTTON");
        //      document.body.appendChild(choice1) ;


        // attach click event listener to each choice
        // display on the page

        // }
        // )}

        // currentQuestion.choices;
        //     currentQuestion.answer

        // function questionClick() {

        // }

        // function removeButton() {
        //     var remove = document.getElementsByClassName("choice").style.display = "none";
        // }




        // function q1() {

        //     //when start button is clicked, starter content on page dissapears and first question pops up with 4 answer buttons to click on
        //     questionOne.textContent = quizQuestion1;
        //     //answer choice in buttons to click
        //     var button1 = document.createElement("button");
        //     button1.classList.add("choice");
        //     button1.innerHTML = "1. strings";
        //     document.body.appendChild(button1);
        //     button1.addEventListener("click", function () { q2() });

        //     var button2 = document.createElement("button");
        //     button2.classList.add("choice");
        //     button2.innerHTML = "2. booleans";
        //     document.body.appendChild(button2);
        //     button2.addEventListener("click", function () { q2() });

        //     var button3 = document.createElement("button");
        //     button3.classList.add("choice");
        //     button3.innerHTML = "3. alerts";
        //     document.body.appendChild(button3);
        //     button3.addEventListener("click", function () { q2() });

        //     var button4 = document.createElement("button");
        //     button4.classList.add("choice");
        //     button4.innerHTML = "4. numbers";
        //     document.body.appendChild(button4);
        //     button4.addEventListener("click", function () { q2() });
        //     //when an answer is clicked, then new question appears, and you are correct or you are wrong shows up

        //     //when an answer is wrong, 10 seconds are deducted from timer

        //     //make q1 text dissapear when an answer button is clicked


        // }

        // function q2() {
        //     questionTwo.textContent = quizQuestion2;


        //     var button1 = document.createElement("button");
        //     button1.innerHTML = "1. quotes";
        //     document.body.appendChild(button1);

        //     var button2 = document.createElement("button");
        //     button2.innerHTML = "2. curly brackets";
        //     document.body.appendChild(button2);

        //     var button3 = document.createElement("button");
        //     button3.innerHTML = "3. parentheses";
        //     document.body.appendChild(button3);

        //     var button4 = document.createElement("button");
        //     button4.innerHTML = "4. square brackets";
        //     document.body.appendChild(button4);
        // };

        // function q3() {
        //     questionThree.textContent = quizQuestion3;


        //     var button1 = document.createElement("button");
        //     button1.innerHTML = "1. numbers and strings";
        //     document.body.appendChild(button1);
        //     button1.addEventListener("click", q4());

        //     var button2 = document.createElement("button");
        //     button2.innerHTML = "2. other arrays";
        //     document.body.appendChild(button2);

        //     var button3 = document.createElement("button");
        //     button3.innerHTML = "3. booleans";
        //     document.body.appendChild(button3);

        //     var button4 = document.createElement("button");
        //     button4.innerHTML = "4. all of the above";
        //     document.body.appendChild(button4);
        // }

        // function q4() {
        //     questionFour.textContent = quizQuestion4;


        //     var button1 = document.createElement("button");
        //     button1.innerHTML = "1. commas";
        //     document.body.appendChild(button1);

        //     var button2 = document.createElement("button");
        //     button2.innerHTML = "2. curly brackets";
        //     document.body.appendChild(button2);

        //     var button3 = document.createElement("button");
        //     button3.innerHTML = "3. quotes";
        //     document.body.appendChild(button3);

        //     var button4 = document.createElement("button");
        //     button4.innerHTML = "4. parentheses";
        //     document.body.appendChild(button4);
        // }

        // function q5() {
        //     questionFive.textContent = quizQuestion5;


        //     var button1 = document.createElement("button");
        //     button1.innerHTML = "1. JavaScript";
        //     document.body.appendChild(button1);

        //     var button2 = document.createElement("button");
        //     button2.innerHTML = "2. terminal / bash";
        //     document.body.appendChild(button2);

        //     var button3 = document.createElement("button");
        //     button3.innerHTML = "3. for loops";
        //     document.body.appendChild(button3);

        //     var button4 = document.createElement("button");
        //     button4.innerHTML = "4. console.log";
        //     document.body.appendChild(button4);

        //     //when fifth question is answered, the All done! appears with final score, and a form to enter intitials and sumbit

        // }

        function finalScore() {

            var score = ""; //what time is left on timer
            //after the last question is answered, your final score shows up on the page
            //the final score is the amount of time left on the timer
            //this final score is saved locally when entered into the form with initials and submitted
            //when saved locally, it appears on the highscore.html page
        }

        function highScore() {
            //this function will show all finalScores on page that were saved locally, and when refreshed they stay on page
            //there is a go back button that will take you to the start code page (don't know if this goes here or on html page)
            //there is a clear high scores button that erases the finalScore stored locally and takes away from page
        }





        //event listeners
        //clear high scoresscores
        //startquiz btn
        startButton.addEventListener("click", startQuiz);
//go back button
//form to enter initials and submit
//submitScore.addEventListener("click", highScore)
//click on an answer that takes you to the next question? 
    }