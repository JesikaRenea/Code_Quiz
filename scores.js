var clearScores = document.querySelector(".clear")

clearScores.addEventListener("click", function clearScores() {
    localStorage.clear();
    displayScores();
    console.log("click")
});

function displayScores() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    console.log(highscores);

    //sort highscores here array sorting

    document.querySelector('tbody').innerHTML = '';

    highscores.forEach(function (highscore, index) {
        var tr = document.createElement('tr');
        var tdIndex = document.createElement('td');
        var tdUser = document.createElement('td');
        var tdScore = document.createElement('td');

        tdIndex.textContent = ++index;
        tdUser.textContent = highscore.name;
        tdScore.textContent = highscore.score;

        tr.appendChild(tdIndex);
        tr.appendChild(tdUser);
        tr.appendChild(tdScore);

        document.querySelector('tbody').appendChild(tr);

    })
};

displayScores();
