// function checkAnswer() {
// const correctAnswer = '4';
// const radioSelected = document.querySelector('input[name="quiz"]:checked');

// if (!radioSelected){
//     const feedBack = document.querySelector('#feedback');
//     feedBack.textContent = "That's incorrect. Try again!";
//     return
// } 
// const userAnswer = radioSelected.value;
// if(userAnswer===checkAnswer){
//     document.querySelector('#feedback').textContent = 'Correct! Well done.';
// } else {
//     document.querySelector('#feedback').textContent = "That's incorrect. Try again!";
// }
// }
// const submitAnswer = document.getElementById('submit-answer');
// submitAnswer.addEventListener('click', checkAnswer);

// Step 1: Define the function
function checkAnswer() {
  // Step 2: Declare the correct answer
  const correctAnswer = "4";

  // Step 3: Retrieve the user's selected radio button
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');

  // Step 4: Handle case where no option is selected
  if (!selectedRadio) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  // Step 5: Access the value of the selected radio button
  const userAnswer = selectedRadio.value;

  // Step 6: Compare with the correct answer and display feedback
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
  }
}

// Step 7: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);


