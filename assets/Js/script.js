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

//these questions need to be tied to a button somehow
var quizQuestion1 = "";  //first question
var q1answer = "";  //first question answer

var quizQuestion2 = "";   //second question 
var q2answer = "";            //second question answer

var quizQuestion3 = "";   //third question 
var q3answer = "";        //third question answer

var quizQuestion4 = "";    //fourth question
var q4answer = "";          //fourth question answer

var quizQuestion5 = "";   //fifth question 
var q5answer = "";         //firfth question answer


var startButton = document.getElementById("start-Quiz-Btn"); //accesses start button on html page

var submitScore = document.getElementById("submit-Score"); //form to sumbit score into 




//functions

function startTimer(){
    var timerStart: 75;
    
    var timeInterval = setTimeOut(function(){
        



    })
    //this will start when the start button on start page is clicked
    //this will start at 75 and end at 0
    //10 seconds will be deducted if an answer is wrong
    //when clock hits 0 the quiz is over and goes to the gane is over text
}

function takeQuiz(){
    //when start button is clicked, starter content on page dissapears and first question pops up with 4 answer buttons to click on
    //when an answer is clicked, then new question appears, and you are correct or you are wrong shows up
    //when an answer is wrong, 10 seconds are deducted from timer
    //this repeats for all 5 questions
    //when fifth question is answered, the All done! appears with final score, and a form to enter intitials and sumbit
}

function finalScore(){
    //after the last question is answered, your final score shows up on the page
    //the final score is the amount of time left on the timer
    //this final score is saved locally when entered into the form with initials and submitted
    //when saved locally, it appears on the highscore.html page
}

function highScore(){
    //this function will show all finalScores on page that were saved locally, and when refreshed they stay on page
    //there is a go back button that will take you to the start code page (don't know if this goes here or on html page)
    //there is a clear high scores button that erases the finalScore stored locally and takes away from page
}





//event listeners
//clear high scoresscores
//startquiz btn
startButton.addEventListener("click", takeQuiz);
//go back button
//form to enter initials and submit
submitScore.addEventListener("click", highScore)
//click on an answer that takes you to the next question?