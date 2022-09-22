import { SNAKE_SPEED, update as updateSnake, draw as drawSnake } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
// Linking the const gameBoard to the div we gave the id of 'game-board' in the index.html
const gameBoard = document.getElementById('game-board');

function mainLoop(currentTime) {
  // requestAnimationFrame runs the function you pass it as soon as an animation frame is available.
  //   It may look strange to call the mainLoop function inside of itself but that's how it is done
  window.requestAnimationFrame(mainLoop);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  //  Check to see if it has been long enough to render again
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    // If it hasn't been long enough we return and the mainLoop function starts over
    return;
  }
  lastRenderTime = currentTime;
  update()
  draw()
}

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    // gameBoard.innerHTML = '' clears our game board on every render.
    // Otherwise when the snake moves we will still see where it was on the last render.
    gameBoard.innerHTML = ''
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

// Gets the mainLoop function running which then loops on it's own after that
window.requestAnimationFrame(mainLoop);
