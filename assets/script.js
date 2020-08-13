var questions = [

    {
        q: "How many questions are in this quiz?",
        choices: [
        "one", "three", "five", "seven", "enough"
        ],
        answer: "enough"
    },
    {   
        q: "Does it ever rain in Florida?",
        choices: [
            "yes", "no", "never", "only saturdays"
        ],
        answer: "yes"
    },
    {
        q: "do you remember the time you remembered the time that you couldn't remember remembering?",
        choices: [ "yes", "no", "maybe", "remember"
        ],
        answer: "remember"
    },
    {   
        q: "What is the biggest answer?",
        choices: ["Banana", "potato", "biggest answer", "manicure"
        ],
        answer: "biggest answer"
    },
    {   
        q: "Can an ant be an aunt?",
        choices: ["how old are they", "I never thought of it", "do they have a sister", "panama"
        ],
        answer: "I never thought of it"
    }
    
];

var startButton = document.querySelector("#start");
var gameScreen = document.querySelector("#gameScreen")
var startScreen = document.querySelector("#startScreen")
var timerEl = document.querySelector("#timer")
var seconds = 45
var timer
var questionNumber = 0
var questionsEl = document.querySelector("#question")
var answersEl = document.querySelector("#answers")
var endScreen = document.querySelector("#endScreen")
var submit = document.querySelector("#save")
var initials =document.querySelector("#initials")


function  clock() {
    timer = setInterval(function(){
        seconds = seconds - 1
        timerEl.textContent=seconds
        if (seconds<=0) {
            seconds = 0
            timerEl.textContent=seconds
            clearInterval(timer);
            endGame()
        }
    },1000)
    
}




function writeQuestion(){
    questionsEl.textContent=questions[questionNumber].q
    answersEl.innerHTML=""
    for (var i =0; i < questions[questionNumber].choices.length; i++){
        var button=document.createElement("button")
        button.classList.add("btn","btn-primary","answer", "mr-1")
        button.textContent=questions[questionNumber].choices[i]
        button.value = questions[questionNumber].choices[i]
        answersEl.appendChild(button)

    }
}
function answerChecker(){
    if(!event.target.classList.contains("answer")){
       return
    }
    if(questions[questionNumber].answer !== event.target.value){
        console.log("you")
        seconds = seconds-10
    }
    questionNumber++
    if (questionNumber === questions.length){
        console.log ("endGame")
        endGame()
    }
    else {
        writeQuestion()

    }
}
function endGame(){
    gameScreen.classList.add("d-none")
    endScreen.classList.remove("d-none")
    clearInterval(timer)
}
function getInitials(){
    var userInitials = initials.value
    var newObject = {score: seconds, initials: userInitials}
    var highScore = JSON.parse(localStorage.getItem("highScore")) || []
    highScore.push(newObject)
    localStorage.setItem("highScore", JSON.stringify(highScore))
    window.location.href = "./highscore.html"
}
function init(){
    gameScreen.classList.remove("d-none")
    startScreen.classList.add("d-none")
    clock()
    writeQuestion()    
}
startButton.addEventListener("click",init) 
submit.addEventListener("click", getInitials)
answersEl.addEventListener("click", answerChecker)