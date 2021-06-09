var startBtnEl = document.getElementById('startBtn')
var homeMenuEl = document.getElementById('homeMenu')
var quizQuestionsEl = document.getElementById('quizQuestions')
var gameOverEl = document.getElementById('gameOver')
var enterInitialsEl = document.getElementById('enterInitials')
var highScoresEl = document.getElementById('highScores')

var questionEl = document.getElementById('question')


var questionList = [
    {
        question: "Which of these is NOT one of the three main coding languages?",
        answers: [
            {text: "CSS", correct:false},
            {text: "Java", correct:true},
            {text: "JavaScript", correct:false},
            {text: "HTML", correct:false}
        ]
    },

    {
        question: "Which of these is NOT one of the three main coding languages?",
        answers: [
            {text: "CSS", correct:false},
            {text: "Java", correct:true},
            {text: "JavaScript", correct:false},
            {text: "HTML", correct:false}
        ]
    }
    
]

// Start page with button that begins the quiz
startBtnEl.addEventListener("click", startGame)

function startGame() {
    homeMenuEl.classList.add('hide')
    quizQuestionsEl.classList.remove("hide")
    questionList.sort()
    nextQuestion()

}

function nextQuestion() {
    questionEl.textContent = questionList[0].question;
    
}








// User clicks button. Quiz starts

// Title page disappears once quiz is started. 

//Quiz starts, timer starts with 15 seconds per question. There will be 5 questions total making this 75 seconds remaining

//Make sure timer subtracts 1 second per second

//User is presented with a question along with 4 answers presented as buttons

// As questions are answered with button clicks, the next question replaces them on the screen

// After a question is answered, either "wrong" or "correct" will be displayed below the next question

// If an answer is wrong, fifteen seconds are taken off the timer.

// If the timer goes down to zero, the quiz ends and a game over screen appears

// After the last question is answered, the time stops 

//The remaining time left appears as the score

// The user can submit their initials

// Initials are placed in a high score area

// On the high scores screen, there is option to clear the high scores

// Go back button that takes user back to Start Menu