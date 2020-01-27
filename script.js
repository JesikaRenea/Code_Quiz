var timeEl = document.querySelector(".time");
var timerInterval;
var secondsLeft = 75;

var startBtn = document.querySelector(".startbutton");
var startQuiz = document.querySelector(".startquiz");
var wrongAnswer = document.querySelector(".wrong");

var correctAnswerOne = document.querySelector(".correct1")
var correctAnswerTwo = document.querySelector(".correct2")
var correctAnswerThree = document.querySelector(".correct3")
var correctAnswerFour = document.querySelector(".correct4")

var questionOne = document.querySelector(".question1")
var questionTwo = document.querySelector(".question2")
var questionThree = document.querySelector(".question3")
var questionFour = document.querySelector(".question4")
var scoreDisplay = document.querySelector(".scoredisplay")

var clearScores = document.querySelector(".clear")


var highscores = [];
var user = {
    name: "", 
    score: 0,
}
var initials = document.querySelector(".initials")


wrongAnswer.addEventListener("click", 
function deductTime(){
   secondsLeft = secondsLeft - (10); 
   console.log("click")

    });


// START QUIZ 
startBtn.addEventListener("click", 
function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("You're out of time! Try again!");
        location.reload();      }
    }, 1000);

  function displayOne() {
    questionOne = document.querySelector('.question1').style.display = "block";
    startQuiz = document.querySelector('.startquiz').style.display = "none";
  }
  displayOne(); 
});
 // End START QUIZ
 

correctAnswerOne.addEventListener("click", 
function displayTwo() {
    questionOne = document.querySelector('.question1').style.display = "none";
    questionTwo = document.querySelector('.question2').style.display = "block";
});


correctAnswerTwo.addEventListener("click", 
function displayThree(){
    questionTwo = document.querySelector('.question2').style.display = "none";
    questionThree = document.querySelector('.question3').style.display = "block";
});


correctAnswerThree.addEventListener("click", 
function displayFour(){
    questionThree = document.querySelector('.question3').style.display = "none";
    questionFour = document.querySelector('.question4').style.display = "block";
});

correctAnswerFour.addEventListener("click", 
function displayFour(){
    questionFour = document.querySelector('.question4').style.display = "none";
    scoreDisplay = document.querySelector('.scoredisplay').style.display = "block";  
    
    console.log(secondsLeft)

    clearInterval(timerInterval)


document.querySelector('.score').innerHTML = secondsLeft
console.log(initials.value);



highscores.push({
  name: initials.value,
  score: secondsLeft,
})

localStorage.setItem('highscores', JSON.stringify(highscores));

});
