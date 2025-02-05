function checkAnswer() {
const correctAnswer = "4";
}
document.querySelector('input[name="quiz"]:checked');
// const pickValue = document.querySelector('input[name="quiz"].value');

const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

if (userAnswer===correctAnswer){
    const feedBack = document.querySelector('#feedback');
    feedBack.textContent = "Correct! Well done.";
} else {
    feedBack.textContent = "That's incorrect. Try again!";
};

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);
function checkAnswer(e){
    e.target;git
};
