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


var startButton = document.getElementById("start-Quiz-Btn"); //accesses start button on html page

var timeEl = document.getElementById("countdown");
var secondsLeft = 75;
var timerInterval;

var highscores = [];


function setTime(){
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds until game over";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Game Over!";
        }
        //if last question answered, 
    }, 1000);
}

//this will start when the start button on start page is clicked
//this will start at 75 and end at 0
//10 seconds will be deducted if an answer is wrong
//when clock hits 0 the quiz is over and goes to the gane is over text



//functions




function startQuiz() {
    //when quiz starts, start timer
    //startTimer();
    setTime();
    //load question 1 function
    //q1();
    //make starter text dissapear
    function startDissapears() {
        var startText = document.getElementById("quiz-start");
        if (startText.style.display === "none") {
            startText.style.display = "block";
        } else {
            startText.style.display = "none";
        }
    }
    startDissapears();
    callquestion1();
}

function callquestion1(){
    var q1 = document.getElementById("q1");
    q1.setAttribute("style", "display: inline");
    document.body.appendChild(q1);

    var button1 = document.getElementById("button1");
    button1.addEventListener("click", function() {
          //take away 10 from timer
          secondsLeft = secondsLeft - 10;
        //callQuestion2();
        finalScore();
        q1.setAttribute("style", "display: none");
    });

    var button2 = document.getElementById("button2");
    button2.addEventListener("click", function() {
          //take away 10 from timer
          secondsLeft = secondsLeft - 10;
        callQuestion2();
        q1.setAttribute("style", "display: none");
    });

    var button3 = document.getElementById("button3");
    button3.addEventListener("click", function() {
        callQuestion2();
        q1.setAttribute("style", "display: none");
    });

    var button4 = document.getElementById("button4");
    button4.addEventListener("click", function() {
          //take away 10 from timer
          secondsLeft = secondsLeft - 10;
        callQuestion2();
        q1.setAttribute("style", "display: none");
    });
}

function callQuestion2(){
    var q2 = document.getElementById("q2");
    q2.setAttribute("style", "display: inline");
    document.body.appendChild(q2);

    var button1 = document.getElementById("button2-1");
    button1.addEventListener("click", function() {
        //take away 10 from the timer
        callQuestion3();
        q2.setAttribute("style", "display: none");
    });

    var button2 = document.getElementById("button2-2");
    button2.addEventListener("click", function() {
        //take away 10 from the timer
        callQuestion3();
        q2.setAttribute("style", "display: none");
    });

    var button3 = document.getElementById("button2-3");
    button3.addEventListener("click", function() {
        callQuestion3();
        q2.setAttribute("style", "display: none");

    });

    var button4 = document.getElementById("button2-4");
    button4.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion3();
        q2.setAttribute("style", "display: none");
    });
}

function callQuestion3(){
    var q3 = document.getElementById("q3");
    q3.setAttribute("style", "display: inline");
    document.body.appendChild(q3);

    var button1 = document.getElementById("button3-1");
    button1.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion4();
        q3.setAttribute("style", "display: none");
    });

    var button2 = document.getElementById("button3-2");
    button2.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion4();
        q3.setAttribute("style", "display: none");
    });

    var button3 = document.getElementById("button3-3");
    button3.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion4();
        q3.setAttribute("style", "display: none");
    });

    var button4 = document.getElementById("button3-4");
    button4.addEventListener("click", function() {
        callQuestion4();
        q3.setAttribute("style", "display: none");
    });
}

function callQuestion4(){
    var q4 = document.getElementById("q4");
    q4.setAttribute("style", "display: inline");
    document.body.appendChild(q4);

    var button1 = document.getElementById("button4-1");
    button1.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion5();
        q4.setAttribute("style", "display: none");
    });

    var button2 = document.getElementById("button4-2");
    button2.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion5();
        q4.setAttribute("style", "display: none");
    });

    var button3 = document.getElementById("button4-3");
    button3.addEventListener("click", function() {
        callQuestion5();
        q4.setAttribute("style", "display: none");
    });

    var button4 = document.getElementById("button4-4");
    button4.addEventListener("click", function() {
          //take away 10 from the timer
        callQuestion5();
        q4.setAttribute("style", "display: none");
    });
}

function callQuestion5(){
    var q5 = document.getElementById("q5");
    q5.setAttribute("style", "display: inline");
    document.body.appendChild(q5);

    var button1 = document.getElementById("button5-1");
    button1.addEventListener("click", function() {
          //take away 10 from the timer
        finalScore();
        q5.setAttribute("style", "display: none");
    });

    var button2 = document.getElementById("button5-2");
    button2.addEventListener("click", function() {
          //take away 10 from the timer
        finalScore();
        q5.setAttribute("style", "display: none");
    });

    var button3 = document.getElementById("button5-3");
    button3.addEventListener("click", function() {
          //take away 10 from the timer
        finalScore();
        q5.setAttribute("style", "display: none");
    });

    var button4 = document.getElementById("button5-4");
    button4.addEventListener("click", function() {
        finalScore();
        q5.setAttribute("style", "display: none");
    });
}

function finalScore(){
    yourScore = secondsLeft;
    clearInterval(timerInterval);

    var form = document.getElementById("highscoreForm");
    form.setAttribute("style", "display: inline");
    document.body.appendChild(form);
console.log(yourScore);

}

var yourScore;


function storeHighscores(){
//get the values from high score and initials 
    var getScore;
    //var getInitials = 
//put them into the array with .push the final time and the intials submited in a form of of an object. when hit enter push object into array, push initials and {initials: variable, score: variable}
//can update this array to update highscores page
//after push into an array then 


}

//function to store information entered into form locally and then render it onto the highsores html page










//when press submit button it takes you to highscores html with the sved score showed 



        // function finalScore() {

        //     var score = ""; //what time is left on timer
        //     //after the last question is answered, your final score shows up on the page
        //     //the final score is the amount of time left on the timer
        //     //this final score is saved locally when entered into the form with initials and submitted
        //     //when saved locally, it appears on the highscore.html page
        // }

        // function highScore() {
        //     //this function will show all finalScores on page that were saved locally, and when refreshed they stay on page
        //     //there is a go back button that will take you to the start code page (don't know if this goes here or on html page)
        //     //there is a clear high scores button that erases the finalScore stored locally and takes away from page
        // }





        //event listeners
        //clear high scoresscores
        //startquiz btn
startButton.addEventListener("click", startQuiz);
//go back button
//form to enter initials and submit
//submitScore.addEventListener("click", highScore)
//click on an answer that takes you to the next question? 
        
