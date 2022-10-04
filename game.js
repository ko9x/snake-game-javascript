import {
  update as updateSnake,
  draw as drawSnake,
  gameOver,
  gameStarted,
} from "./snake.js";
import { 
  update as updateFood,
  draw as drawFood,
  foodCounter
 } from "./food.js";

let lastRenderTime = 0;
// Linking the const gameBoard to the div we gave the id of 'game-board' in the index.html
const gameBoard = document.getElementById("game-board");

// Linking the const speed to the input with the id of speed in the index.html
const speed = document.getElementById("speed");
// Preventing the user from entering a letter as the speed value
speed.addEventListener("keypress", (e) => {
  if (isFinite(e.key)) {
  } else {
    speed.blur();
    document.getElementById("speed").placeholder = "Enter a number";
  }
});

// Linking the const expansion to the input with the id of expansion in the index.html
const expansion = document.getElementById("expansion");
// Preventing the user from entering a letter as the expansion value
expansion.addEventListener("keypress", (e) => {
  if (isFinite(e.key)) {
  } else {
    expansion.blur();
    document.getElementById("expansion").placeholder = "Enter a number";
  }
});

// Linking the const restart to the button with the id of restart in the index.html
const restart = document.getElementById("restart");
restart.hidden = true;

restart.addEventListener("click", () => {
  window.location.reload();
});

export function setExpansion() {
  return expansion.value;
}

function mainLoop(currentTime) {
  const SNAKE_SPEED = speed.value || 10;
  if (gameStarted) {
    speed.hidden = true;
    expansion.hidden = true;
    restart.hidden = false;
  }
  // requestAnimationFrame runs the function you pass it as soon as an animation frame is available.
  // It may look strange to call the mainLoop function inside of itself but that's how it is done
  if (gameOver) {
    window.cancelAnimationFrame(mainLoop);
    alert(
      "Game Over. Your Score " +
        foodCounter +
        "\n" +
        "Speed " +
        SNAKE_SPEED +
        " Expansion Rate " +
        (expansion.value || "1")
    );
    window.location.reload();
  }
  if (!gameOver) {
    window.requestAnimationFrame(mainLoop);
  }
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  //  Check to see if it has been long enough to render again
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
    // If it hasn't been long enough we return and the mainLoop function starts over
    return;
  }
  lastRenderTime = currentTime;
  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  // gameBoard.innerHTML = '' clears our game board on every render.
  // Otherwise when the snake moves we will still see where it was on the last render.
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

// Gets the mainLoop function running which then loops on it's own after that
window.requestAnimationFrame(mainLoop);
