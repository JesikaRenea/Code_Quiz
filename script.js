var timeEl = document.querySelector(".time");
var timerInterval;
var secondsLeft = 75;

var startBtn = document.querySelector(".startbutton");
var startQuiz = document.querySelector(".startquiz");
var wrongAnswerList = document.querySelectorAll(".wrong");

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
var submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", function(){
  var userInitials = initials.value;

  highscores.push({
    name: userInitials,
    score: secondsLeft,
  })
  localStorage.setItem('highscores', JSON.stringify(highscores));

  initials.value = '';
  location.href = 'scores.html';
  
});




wrongAnswerList.forEach(function(element){
  element.addEventListener("click", 
  function deductTime(){
     secondsLeft = secondsLeft - (10); 
     console.log("click")
  
      });
})

function endQuiz(){
  clearInterval(timerInterval);
  document.querySelector('.scoredisplay').style.display = "block";  
document.querySelector('.question1').style.display = "none";
document.querySelector('.question2').style.display = "none";
document.querySelector('.question3').style.display = "none";
document.querySelector('.question4').style.display = "none";
document.querySelector('.score').innerHTML = secondsLeft
console.log(secondsLeft)



}

// START QUIZ 
startBtn.addEventListener("click", 
function setTime() {
    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        endQuiz;
        alert("You're out of time! Try again!");
        }
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

correctAnswerFour.addEventListener("click", endQuiz)




console.log(initials.value);



