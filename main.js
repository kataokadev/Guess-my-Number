'use strict';

let score = 20;
let highscore = 0;
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//functions DRY
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btnCheck.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'Insert a Number!';
    displayMessage('Insert a Number!');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct!';
    displayMessage('Correct!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //  guess > 1 ? 'Too high' : 'Too low';
      displayMessage(guess > 1 ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

btnAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing';
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
