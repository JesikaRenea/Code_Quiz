var timeEl = document.querySelector(".time");

var secondsLeft = 75;

var startBtn = document.querySelector(".startbutton");
var wrongAnswer = document.querySelector("#wrong");
var correctAnswer = document.querySelector(".correct")
var questionOne = document.querySelector(".question1")
var questionTwo = document.querySelector(".question2")
var questionThree = document.querySelector(".question3")
var questionFour = document.querySelector(".question4")
var scoreDisplay = document.querySelector(".scoredisplay")


startBtn.addEventListener("click", 
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("You're out of time! Try again!");
      }
  
    }, 1000);
  
  function displayNext() {
    document.getElementsByClassName('.question1').style.display = "block";

  }
  
displayNext();  
})

  wrongAnswer.addEventListener("click", 
  function deductTime(){
     var newTime = secondsLeft - (10 * 1000); 
     return(newTime);
  })

  setTime();
  deductTime();
  displayNext();
