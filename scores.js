var clearScores = document.querySelector(".clear")

clearScores.addEventListener("click", function clearScores() {
localStorage.clear();
console.log("click")
});
