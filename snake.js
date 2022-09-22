import { getInputDirection } from "./input.js";

// SNAKE_SPEED is how many times we want to update the snake each second.
export const SNAKE_SPEED = 10;
const snakeBody = [{ x: 11, y: 11 }];

// In the update function we first set i as the index of the 2nd to last segment of the snake.
// Now we tell the last segment that your value is now the value of the 2nd to last segment.
// This repeats until we get to index 0.
// Once the statement is no longer true, the for loop ends.
// Now we update the location of the segment at the 0 index.
// Since this all happens during each render we see the snake move as one solid body.

export function update() {
  const inputDirection = getInputDirection();
  if (snakeBody[0].y === 1 && inputDirection.y === -1) {
    console.log('hitWall'); //@DEBUG
  }
  if (snakeBody[0].x === 1 && inputDirection.x === -1) {
    console.log('hitWall'); //@DEBUG
  }
  if (snakeBody[0].y === 21 && inputDirection.y === 1) {
    console.log('hitWall'); //@DEBUG
  }
  if (snakeBody[0].x === 21 && inputDirection.x === 1) {
    console.log('hitWall'); //@DEBUG
  }

  // find the 2nd to last index of the snakeBody array.
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // change the value of the last index to the value of the 2nd to last index.
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  // once the loop hits the index of 0 we set the value for the head of the snake
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    // Here we are create an hmtl element with javascript. A div in this instance.
    const snakeElement = document.createElement("div");
    // Then we add style and class elements to our custom div.
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    // snake is a css class we created in the index.html. We access it here using classlist.add
    snakeElement.classList.add("snake");
    // If you console.log snakeElement it will look like this
    // <div class='snake' style="grid-row-start: 11; grid-column-start: 11;"></div>
    // adding our snakeElemnt to the game-board div in the index.htmml
    gameBoard.appendChild(snakeElement);
  });
}
