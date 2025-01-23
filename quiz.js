function checkAnswer() {
const correctAnswer = "4";
return correctAnswer
}

let results = checkAnswer()

const pick = document.querySelector('input[name="quiz"]:checked');

pick.getAttribute('value');

const userAnswer = pick.getAttribute('value');

if(userAnswer===results){
    const feedBack = document.querySelector('#feedback');
    feedBack.textContent = "Correct! Well done.";
} else {
    feedBack.textContent = "That's incorrect. Try again!";
};

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', function (checkAnswer){  
    checkAnswer.target;
});
