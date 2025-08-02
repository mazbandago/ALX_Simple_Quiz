function checkAnswer() {
const correctAnswer = '4';
const radioSelected = document.querySelector('input[name="quiz"]:checked');

if (!radioSelected){
    const feedBack = document.querySelector('#feedback');
    feedBack.textContent = "That's incorrect. Try again!";
    return
} 
const userAnswer = radioSelected.value;
if(userAnswer===checkAnswer){
    document.querySelector('#feedback').textContent = 'Correct! Well done.';
} else {
    document.querySelector('#feedback').textContent = "That's incorrect. Try again!";
}
}
const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer);