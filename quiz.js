function checkAnswer() {
const correctAnswer = "4";
return correctAnswer
}

let results = checkAnswer()

const pick = document.querySelector('input[name="quiz"]:checked');
pick.querySelector('input[name="quiz"].value');

const userAnswer = pick.querySelector('input[name="quiz"].value');

if(userAnswer===correctAnswer){
    const feedBack = document.querySelector('#feedback');
    feedBack.textContent = "Correct! Well done.";
} else {
    feedBack.textContent = "That's incorrect. Try again!";
};

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', function(checkAnswer){  
    checkAnswer.target;
});
