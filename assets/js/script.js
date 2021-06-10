var questionList = [
    {
        question: "Which of these is NOT one of the three main coding languages?",
        choiceA: "CSS",
        choiceB: "Java",
        choiceC: "JavaScript",
        choiceD: "HTML",
        answer: "Java"
    },

    {
        question: "What does HTML stand for?",
        choiceA: "HyperText Markup Language",
        choiceB: "Helpful Tech Module Lists",
        choiceC: "Hyperweb Text Manipulation Language",
        choiceD: "Hey! That's My Lettuce!",
        answer: "HyperText Markup Language",
    }
    
]

var startBtnEl = document.getElementById('startBtn')
var homeMenuEl = document.getElementById('homeMenu')
var quizQuestionsEl = document.getElementById('quizQuestions')
var gameOverEl = document.getElementById('gameOver')
var enterInitialsEl = document.getElementById('enterInitials')
var highScoresEl = document.getElementById('highScores')

var questionEl = document.getElementById('question')

var questionIndex = 0;
var currentQuestion = questionList[questionIndex]
var answerGridEl = document.getElementById('answerGrid')
var choiceAEl = document.getElementById('choiceA')
var choiceBEl = document.getElementById('choiceB')
var choiceCEl = document.getElementById('choiceC')
var choiceDEl = document.getElementById('choiceD')




// Start page with button that begins the quiz
startBtnEl.addEventListener("click", startGame)

function startGame() {
    homeMenuEl.classList.add('hide');
    quizQuestionsEl.classList.remove("hide");
    questionIndex = 0;
    nextQuestion();

}

choiceAEl.addEventListener('click', checkAnswer)
choiceBEl.addEventListener('click', checkAnswer)
choiceCEl.addEventListener('click', checkAnswer)
choiceDEl.addEventListener('click', checkAnswer)



function checkAnswer(){
    questionIndex = questionIndex + 1;
    nextQuestion;
    console.log(this.textContent);
    if (this.textContent===currentQuestion.answer){
        
        console.log("nothing taken off timer");
    }else {
        console.log("fifteen seconds off timer");
    }
    
}

function nextQuestion() {
    questionEl.textContent = currentQuestion.question;
    choiceAEl.textContent = currentQuestion.choiceA;
    choiceBEl.textContent = currentQuestion.choiceB;
    choiceCEl.textContent = currentQuestion.choiceC;
    choiceDEl.textContent = currentQuestion.choiceD;
    
    console.log(questionIndex)
    
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