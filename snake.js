import { getInputDirection } from "./input.js";

// SNAKE_SPEED is how many times we want to update the snake each second.
export const snakeBody = [{ x: 11, y: 11 }];
export let gameOver = false;
export let gameStarted = false;

// The expandSnake function just adds however many segments to the tail passed in the food.js
export function expandSnake(num) {
  for (let i = num; i > 0; i--) {
    snakeBody[snakeBody.length] = { ...snakeBody[1] };
  }
}

// Change the gameOver value to true and pass that info to the game.js
function gameIsOver() {
  gameOver = true;
}

// In the update function we first set i as the index of the 2nd to last segment of the snake.
// Now we tell the last segment that your value is now the value of the 2nd to last segment.
// This repeats until we get to index 0.
// Once the statement is no longer true, the for loop ends.
// Now we update the location of the segment at the 0 index.
// Since this all happens during each render we see the snake move as one solid body.

// Check to see if the snake has run into a wall
function wallImpact(dir) {
  if (snakeBody[0].y === 1 && dir.y === -1) {
    gameIsOver();
  }
  if (snakeBody[0].x === 1 && dir.x === -1) {
    gameIsOver();
  }
  if (snakeBody[0].y === 21 && dir.y === 1) {
    gameIsOver();
  }
  if (snakeBody[0].x === 21 && dir.x === 1) {
    gameIsOver();
  }
}

// Check to see if the snake has run into itself
function ouroboros() {
  snakeBody.slice(1).forEach((segment) => {
    if (snakeBody[0].y === segment.y) {
      if (snakeBody[0].x === segment.x) {
        gameIsOver();
      }
    }
  });
}
let inputDirection;

export function update() {
  inputDirection = getInputDirection();
  // Check to see if the gamer has pressed a direction to start the game
  if (inputDirection.x === 0 && inputDirection.y === 0) {
    return;
  } else {
    // If the gamer has started the game by pressing a direction we pass that info to the game.js
    gameStarted = true;
  }

  wallImpact(inputDirection);
  ouroboros();

  // This for loop is what actually makes the snake appear to move
  // We find the 2nd to last index of the snakeBody array.
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // and change the value of the last index to the value of the 2nd to last index.
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  // once the loop hits the index of 0 we set the value for the head of the snake
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment, index) => {
    // Here we are create an hmtl element with javascript. A div in this instance.
    const snakeElement = document.createElement("div");
    // Then we add style and class elements to our custom div.
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    // snake is a css class we created in the index.html We access it here using classlist.add
    if (index === 0) {
      snakeElement.classList.add("snake-purple");
      if (inputDirection.x === 0 && inputDirection.y === -1) {
        snakeElement.innerHTML = "";
        snakeElement.classList.add("head-up");
      }
      if (inputDirection.x === -1 && inputDirection.y === 0) {
        snakeElement.innerHTML = "";
        snakeElement.classList.add("head-left");
      }
      if (inputDirection.x === 1 && inputDirection.y === 0) {
        snakeElement.innerHTML = "";
        snakeElement.classList.add("head-right");
      }
      if (inputDirection.x === 0 && inputDirection.y === 1) {
        snakeElement.innerHTML = "";
        snakeElement.classList.add("head-down");
      }
    } else {
      if (index % 2) {
        snakeElement.classList.add("snake-blue");
      } else {
        snakeElement.classList.add("snake-purple");
      }
    }
    // If you console.log snakeElement it will look like this
    // <div class='snake-purple' style="grid-row-start: 11; grid-column-start: 11;"></div>
    // adding our snakeElemnt to the game-board div in the index.html
    gameBoard.appendChild(snakeElement);
  });
}
