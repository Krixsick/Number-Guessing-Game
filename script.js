let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '30rem';
});
