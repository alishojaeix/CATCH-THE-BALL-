// Select elements
const player = document.getElementById('player');
const ball = document.getElementById('ball');
const ball2 = document.getElementById('ball2');

const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const playAgainButton = document.getElementById('play-again-button');

let playerPosition = 180; // Initial position of the player
let ballPositionX = 180; // Initial position of the first ball
let ballPositionY = 0; // Initial position of the first ball
let ball2PositionX = 180; // Initial position of the second ball
let ball2PositionY = 0; // Initial position of the second ball

let score = 0;
let intervalId;
let speed = 100; // Initial speed of the ball

// Move the player left or right
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && playerPosition > 0) {
    playerPosition -= 20;
  } else if (event.key === 'ArrowRight' && playerPosition < 360) {
    playerPosition += 20;
  }
  player.style.left = playerPosition + 'px';
});

// Function to move the ball
function moveBall() {
  ballPositionY += speed; // Increase Y position to make the ball fall

  // Check if the first ball has reached the bottom
  if (ballPositionY > 580) {

    clearInterval(intervalId); // Stop the game if the ball misses
    endGame();
    return;
  }

  // Check if the first ball is caught by the player
  if (
    ballPositionY >= 560 &&
    ballPositionX >= playerPosition &&
    ballPositionX <= playerPosition + 40
  ) {
    score++; // Increment score
    scoreDisplay.textContent = 'Score: ' + score;
    ballPositionY = 0; // Reset first ball position
    ballPositionX = Math.floor(Math.random() * 360); // Randomize X position
    speed += 0.2; // Increase speed as score increases
  }

  // Move the second ball
  ball2PositionY += speed + 2; // Increase Y position to make the second ball fall faster

  // Check if the second ball has reached the bottom
  if (ball2PositionY > 580) {
    ball2PositionY = 0; // Reset second ball position
    ball2PositionX = Math.floor(Math.random() * 360); // Randomize X position
  }

  // Check if the second ball is caught by the player
  if (
    ball2PositionY >= 560 &&
    ball2PositionX >= playerPosition &&
    ball2PositionX <= playerPosition + 40
  ) {
  // Check if the second ball is caught by the player
  if (
    ball2PositionY >= 560 &&
    ball2PositionX >= playerPosition &&
    ball2PositionX <= playerPosition + 40
  ) {
    score++; // Increment score for second ball
    scoreDisplay.textContent = 'Score: ' + score;
    ball2PositionY = 0; // Reset second ball position
    ball2PositionX = Math.floor(Math.random() * 360); // Randomize X position
  }






  }

  // Update ball positions
  ball.style.top = ballPositionY + 'px';
  ball.style.left = ballPositionX + 'px';
  ball2.style.top = ball2PositionY + 'px';
  ball2.style.left = ball2PositionX + 'px';


  // Update ball positions
  ball.style.top = ballPositionY + 'px';
  ball.style.left = ballPositionX + 'px';
  ball2.style.top = ball2PositionY + 'px';
  ball2.style.left = ball2PositionX + 'px';

}

// Start the game
function startGame() {
  resetGame();
  intervalId = setInterval(moveBall, 50); // Move the ball every 50ms
  startButton.style.display = 'none'; // Hide the start button
  playAgainButton.style.display = 'none'; // Hide the play again button
}

// End the game
function endGame() {
  clearInterval(intervalId); // Stop the game
  alert('Game Over! Final Score: ' + score);
  playAgainButton.style.display = 'inline-block'; // Show the play again button
}

// Reset the game
function resetGame() {
  playerPosition = 180;
  ballPositionX = 180;
  ballPositionY = 0;
  score = 0;
  speed = 20; // Reset speed
  scoreDisplay.textContent = 'Score: 0';
  player.style.left = playerPosition + 'px';
  ball.style.top = ballPositionY + 'px';
  ball.style.left = ballPositionX + 'px';
}

// Add event listeners for buttons
startButton.addEventListener('click', startGame);
playAgainButton.addEventListener('click', startGame);
