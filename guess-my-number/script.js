'use strict';

/*
window.document.querySelector('.message').textContent = '🎉 Correct number!';
window.document.querySelector('.number').textContent = 13;
window.document.querySelector('.score').textContent = 20;
window.document.querySelector('.guess').value = 5;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  window.document.querySelector('.message').textContent = message;
};

window.document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(window.document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    window.document.querySelector('body').style.backgroundColor = '#60b347';
    window.document.querySelector('.number').textContent = secretNumber;
    window.document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      window.document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      window.document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game over!');
      window.document.querySelector('.score').textContent = 0;
    }
  }
});

window.document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  window.document.querySelector('body').style.backgroundColor = '#222222';
  window.document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing...');
  window.document.querySelector('.number').textContent = '?';
  window.document.querySelector('.score').textContent = score;
  window.document.querySelector('.guess').value = '';
});
