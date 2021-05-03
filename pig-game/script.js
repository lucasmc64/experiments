'use strict';

// Selecting elements
const player0Elem = window.document.querySelector('.player--0');
const player1Elem = window.document.querySelector('.player--1');
const score0Elem = window.document.getElementById('score--0');
const score1Elem = window.document.getElementById('score--1');
const current0Elem = window.document.getElementById('current--0');
const current1Elem = window.document.getElementById('current--1');

const diceElem = window.document.querySelector('.dice');
const btnNew = window.document.querySelector('.btn--new');
const btnRoll = window.document.querySelector('.btn--roll');
const btnHold = window.document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  // Internal changes
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Visible changes
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;

  let currentPlayer = window.document.querySelector(`.player--${activePlayer}`);

  if (currentPlayer.classList.contains('player--winner')) {
    currentPlayer.classList.remove('player--winner');
  } else {
    currentPlayer.classList.remove('player--active');
  }

  player0Elem.classList.toggle('player--active');
  diceElem.classList.add('hidden');
};

init();

const switchPlayer = function () {
  window.document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  currentScore = 0;
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      window.document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    window.document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;

      diceElem.classList.add('hidden');

      window.document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      window.document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
