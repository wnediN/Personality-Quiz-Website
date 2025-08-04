
// Track user's answers
let catScore = 0;
let dogScore = 0;
let questionsAnswered = 0;

// Get all buttons
const q1a1 = document.getElementById('q1a1');
const q1a2 = document.getElementById('q1a2');
const q2a1 = document.getElementById('q2a1');
const q2a2 = document.getElementById('q2a2');
const q3a1 = document.getElementById('q3a1');
const q3a2 = document.getElementById('q3a2');
const displayResultBtn = document.getElementById('displayResult');
const restartBtn = document.getElementById('restart');
const resultElement = document.getElementById('result');

// Question 1 event listeners
q1a1.addEventListener('click', () => {
  catScore++;
  questionsAnswered++;
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a1.style.backgroundColor = '#4CAF50';
});

q1a2.addEventListener('click', () => {
  dogScore++;
  questionsAnswered++;
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a2.style.backgroundColor = '#4CAF50';
});

// Question 2 event listeners
q2a1.addEventListener('click', () => {
  catScore++;
  questionsAnswered++;
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a1.style.backgroundColor = '#4CAF50';
});

q2a2.addEventListener('click', () => {
  dogScore++;
  questionsAnswered++;
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a2.style.backgroundColor = '#4CAF50';
});

// Question 3 event listeners
q3a1.addEventListener('click', () => {
  catScore++;
  questionsAnswered++;
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a1.style.backgroundColor = '#4CAF50';
});

q3a2.addEventListener('click', () => {
  dogScore++;
  questionsAnswered++;
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a2.style.backgroundColor = '#4CAF50';
});

// Display result button
displayResultBtn.addEventListener('click', () => {
  if (questionsAnswered < 3) {
    resultElement.textContent = 'Please answer all questions first!';
    return;
  }

  if (catScore > dogScore) {
    resultElement.textContent = 'You are more like a CAT! 🐱 Independent, mysterious, and quiet.';
  } else if (dogScore > catScore) {
    resultElement.textContent = 'You are more like a DOG! 🐶 Loyal, playful, and energetic.';
  } else {
    resultElement.textContent = 'You are a perfect mix of both CAT and DOG! 🐱🐶';
  }
});

// Restart button
restartBtn.addEventListener('click', () => {
  // Reset scores
  catScore = 0;
  dogScore = 0;
  questionsAnswered = 0;

  // Re-enable all buttons and reset their styles
  const allButtons = [q1a1, q1a2, q2a1, q2a2, q3a1, q3a2];
  allButtons.forEach(button => {
    button.disabled = false;
    button.style.backgroundColor = '';
  });

  // Clear result
  resultElement.textContent = 'Your result is...';
});
