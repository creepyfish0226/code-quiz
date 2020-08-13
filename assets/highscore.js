var highscoreEl = document.querySelector("#highScore")

var highscore = JSON.parse(localStorage.getItem("highScore"))
highscore = highscore.sort(function(a, b) {
    return b.score - a.score;
  });
for (var i=0; i<highscore.length; i++){
    var li = document.createElement("li")
    li.textContent = "Initials: "+ highscore[i].initials+ " Score: "+ highscore[i].score
    highscoreEl.appendChild(li)
}